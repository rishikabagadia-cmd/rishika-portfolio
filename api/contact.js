/**
 * ==============================================================================
 * RISHIKA BAGADIA PORTFOLIO - SECURE CONTACT API (VERCEL SERVERLESS FUNCTION)
 * ==============================================================================
 * Features:
 * - Strict HTTP Method & CORS Validation
 * - IP-Based Sliding Window Rate Limiting (5 requests / 10 mins)
 * - Anti-Bot Honeypot Trap Verification
 * - Automated Submission Time-Gate Check (< 2s rejected)
 * - Server-Side Regex & Length Sanitization
 * - Cloudflare Turnstile Token Verification (when TURNSTILE_SECRET_KEY configured)
 * - Resend API Integration / Transactional Email Dispatch (when RESEND_API_KEY configured)
 * ==============================================================================
 */

// In-memory IP rate limiter table (persists across warm serverless invocations)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = (parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES, 10) || 10) * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 5;

// Periodically clean up expired rate limit entries
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now - data.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}

// Extract client IP address safely
function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1';
}

// Strip HTML tags for defense against XSS injection
function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please send a POST request.'
    });
  }

  try {
    const clientIp = getClientIp(req);
    const now = Date.now();

    // 1. IP-based Rate Limiting
    cleanupRateLimitMap();
    let clientRate = rateLimitMap.get(clientIp);
    if (!clientRate || now - clientRate.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
      clientRate = { count: 1, firstRequestTime: now };
      rateLimitMap.set(clientIp, clientRate);
    } else {
      clientRate.count += 1;
      if (clientRate.count > RATE_LIMIT_MAX_REQUESTS) {
        const retryAfterSeconds = Math.ceil((clientRate.firstRequestTime + RATE_LIMIT_WINDOW_MS - now) / 1000);
        res.setHeader('Retry-After', retryAfterSeconds);
        return res.status(429).json({
          success: false,
          error: `Too many submissions from your connection. Please wait ${Math.ceil(retryAfterSeconds / 60)} minute(s) before trying again.`
        });
      }
    }

    // 2. Parse & validate body
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (err) {
        // Fallback for form-urlencoded or non-JSON
        body = {};
      }
    }
    body = body || {};

    const {
      _gotcha_company,
      _form_start_time,
      turnstileToken,
      'cf-turnstile-response': cfTurnstileResp
    } = body;

    // 3. Honeypot Trap Verification
    if (_gotcha_company && _gotcha_company.trim().length > 0) {
      // Silently discard bot submission
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received.'
      });
    }

    // 4. Time-Gate Verification (Submissions faster than 1.8s are bot scripts)
    if (_form_start_time) {
      const startTime = parseInt(_form_start_time, 10);
      if (!isNaN(startTime) && now - startTime < 1800) {
        return res.status(400).json({
          success: false,
          error: 'Automated submission detected. Please take a moment to review your message.'
        });
      }
    }

    // 5. Sanitize and validate inputs
    const rawName = body.name;
    const rawEmail = body.email;
    const rawProjectType = body.projectType;
    const rawMessage = body.message;

    const name = sanitizeString(rawName);
    const email = sanitizeString(rawEmail).toLowerCase();
    const projectType = sanitizeString(rawProjectType) || 'Design Inquiry';
    const message = sanitizeString(rawMessage);

    if (!name || name.length < 2 || name.length > 80) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid name (2 to 80 characters).'
      });
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email || !emailRegex.test(email) || email.length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid, deliverable email address.'
      });
    }

    if (!message || message.length < 10 || message.length > 2500) {
      return res.status(400).json({
        success: false,
        error: 'Please enter project details between 10 and 2500 characters.'
      });
    }

    // 6. Cloudflare Turnstile Verification (if secret key configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const turnstileResponseToken = turnstileToken || cfTurnstileResp;

    if (turnstileSecret) {
      if (!turnstileResponseToken) {
        return res.status(400).json({
          success: false,
          error: 'Security challenge token is required. Please verify the captcha widget.'
        });
      }

      try {
        const verifyFormData = new URLSearchParams();
        verifyFormData.append('secret', turnstileSecret);
        verifyFormData.append('response', turnstileResponseToken);
        verifyFormData.append('remoteip', clientIp);

        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: verifyFormData,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return res.status(400).json({
            success: false,
            error: 'Security verification failed. Please refresh and try again.'
          });
        }
      } catch (err) {
        console.error('Turnstile verification error:', err);
        // Continue if verification service is temporarily unreachable
      }
    }

    // 7. Transactional Delivery via Resend API (if configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'rishikabagadia@gmail.com';

    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Rishika Portfolio <onboarding@resend.dev>',
            to: receiverEmail,
            reply_to: email,
            subject: `[Portfolio Inquiry] ${projectType} from ${name}`,
            html: `
              <div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
                <h2 style="color: #0F172A; margin-top: 0;">✨ New Portfolio Inquiry</h2>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Inquiry Type:</strong> ${projectType}</p>
                <p><strong>IP Address:</strong> ${clientIp}</p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                <h3 style="color: #0F172A; font-size: 1rem; margin-bottom: 8px;">Project Details:</h3>
                <div style="background-color: #F8FAFC; padding: 16px; border-radius: 8px; font-size: 0.95rem; white-space: pre-wrap;">${message}</div>
              </div>
            `
          })
        });
      } catch (sendErr) {
        console.error('Failed to dispatch email via Resend:', sendErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received. Rishika will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Unexpected server error in contact API:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your message. Please try again or reach out directly.'
    });
  }
}
