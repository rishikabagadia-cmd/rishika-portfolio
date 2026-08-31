/**
 * MAIN APP CONTROLLER
 * Rishika Bagadia — Graphic Designer Portfolio
 */

import { projects, experienceData, skillsData } from './projects-data.js';
import { initTheme } from './theme-manager.js';
import { openModal, initModalListeners, setFilteredProjects } from './gallery-modal.js';

let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTimezoneClock();
  initCursorFollower();
  initNavigation();
  initWorkGrid();
  initExperience();
  initSkillsAndEducation();
  initContactForm();
  initScrollAnimations();
  initModalListeners();
  initMarquee();
});

/* ----------------------------------------------------
 * 1. WORK GRID & CATEGORY FILTERING
 * ---------------------------------------------------- */
function initWorkGrid() {
  renderProjects(activeCategory);

  const filterBtns = document.querySelectorAll('.filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      renderProjects(activeCategory);
    });
  });
}

function renderProjects(category) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? projects 
    : projects.filter(p => p.category === category);

  setFilteredProjects(filtered);

  // Update count badge
  const countEl = document.getElementById('project-count-badge');
  if (countEl) {
    countEl.textContent = `${filtered.length} Projects`;
  }

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No projects found in this category yet.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = `project-card ${project.featured ? 'is-featured' : ''}`;
    card.setAttribute('data-category', project.category);
    card.style.animationDelay = `${index * 0.08}s`;

    const isVideo = project.mediaType === 'video';
    const tagList = (project.tags || []).slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-media-wrapper">
        <div class="skeleton-shimmer"></div>
        <img 
          src="${project.coverImage}" 
          alt="${project.title}" 
          class="card-img" 
          loading="lazy"
          onload="this.previousElementSibling.style.display='none'; this.classList.add('loaded');"
          onerror="this.src='assets/projects/branding/aspirant.jpg'; this.previousElementSibling.style.display='none';"
        >
        ${isVideo ? `<div class="card-media-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Video Reel</div>` : ''}
        <div class="card-overlay">
          <div class="overlay-content">
            <span class="overlay-cta">Explore Case Study <span class="arrow">↗</span></span>
          </div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span class="card-category-label">${project.categoryLabel || project.category}</span>
          <span class="card-year">${project.year}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-summary">${project.summary}</p>
        <div class="card-tags-row">
          ${tagList}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openModal(project.id);
    });

    grid.appendChild(card);
  });
}

/* ----------------------------------------------------
 * 2. EXPERIENCE TIMELINE
 * ---------------------------------------------------- */
function initExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;

  timeline.innerHTML = '';

  experienceData.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
        <div class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-period-pill">${item.period}</div>
          <span class="timeline-type">${item.type}</span>
        </div>
        <h3 class="timeline-role">${item.role}</h3>
        <div class="timeline-company">
          <strong>${item.company}</strong> • <span>${item.location}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `;
    timeline.appendChild(el);
  });
}

/* ----------------------------------------------------
 * 3. SKILLS & EDUCATION
 * ---------------------------------------------------- */
function initSkillsAndEducation() {
  // Core skills tags
  const skillsContainer = document.getElementById('skills-pills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    skillsData.coreCompetencies.forEach(skill => {
      const pill = document.createElement('div');
      pill.className = 'skill-badge';
      pill.innerHTML = `
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      `;
      skillsContainer.appendChild(pill);
    });
  }

  // Tools icon grid
  const toolsContainer = document.getElementById('tools-grid');
  if (toolsContainer) {
    toolsContainer.innerHTML = '';
    skillsData.tools.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <div class="tool-badge-box" style="--tool-color: ${tool.color || '#F5B738'}">
          ${tool.badge}
        </div>
        <div class="tool-details">
          <span class="tool-title">${tool.name}</span>
          <span class="tool-cat">${tool.category}</span>
          <span class="tool-exp">${tool.experience}</span>
        </div>
      `;
      toolsContainer.appendChild(card);
    });
  }

  // Education card
  const eduContainer = document.getElementById('education-card-content');
  if (eduContainer) {
    const edu = skillsData.education;
    eduContainer.innerHTML = `
      <div class="edu-badge">BFA Graduated</div>
      <h3 class="edu-degree">${edu.degree}</h3>
      <h4 class="edu-school">${edu.institution}</h4>
      <div class="edu-meta">
        <span class="edu-year">${edu.year}</span>
        <span class="edu-grade">${edu.grade}</span>
      </div>
      <p class="edu-focus">${edu.focus}</p>
    `;
  }
}

/* ----------------------------------------------------
 * 4. TIMEZONE & LIVE CLOCK
 * ---------------------------------------------------- */
function initTimezoneClock() {
  const clockEl = document.getElementById('live-time-indore');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format to Asia/Kolkata (IST: UTC+5:30)
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
    clockEl.textContent = `${timeStr} IST`;
  }

  update();
  setInterval(update, 1000);
}

/* ----------------------------------------------------
 * 5. CUSTOM MAGNETIC CURSOR
 * ---------------------------------------------------- */
function initCursorFollower() {
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('cursor-dot');
  if (!cursor || !cursorDot) return;

  // Only enable on fine pointer devices (desktop)
  if (window.matchMedia('(pointer: coarse)').matches) {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .project-card, .filter-pill, .tool-card, input, textarea');
    if (target) {
      cursor.classList.add('is-hovering');
      if (target.classList.contains('project-card')) {
        cursor.classList.add('is-view-card');
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .project-card, .filter-pill, .tool-card, input, textarea');
    if (target) {
      cursor.classList.remove('is-hovering', 'is-view-card');
    }
  });
}

/* ----------------------------------------------------
 * 6. NAVIGATION & MOBILE MENU
 * ---------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navDrawer = document.getElementById('nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });

  if (menuToggle && navDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navDrawer.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Smooth hash scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.startsWith('#project-')) return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ----------------------------------------------------
 * 7. MARQUEE REEL
 * ---------------------------------------------------- */
function initMarquee() {
  const marqueeTrack = document.getElementById('marquee-track');
  if (!marqueeTrack) return;

  const items = [
    "BRAND IDENTITY", "META ADS", "MOTION GRAPHICS", "PACKAGING DESIGN", 
    "VIDEO EDITING", "SOCIAL STRATEGY", "ILLUSTRATION", "CREATIVE DIRECTION"
  ];

  const html = items.map(item => `
    <span class="marquee-item">
      <span class="marquee-dot">◆</span>
      <span>${item}</span>
    </span>
  `).join('');

  // Duplicate for seamless infinite loop
  marqueeTrack.innerHTML = html + html + html;
}

/* ----------------------------------------------------
 * 8. CONTACT FORM & INTERACTIVE ACTIONS
 * ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedbackEl = document.getElementById('form-feedback');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const _0xContactMain = {
    getEmail() {
      try {
        return atob('cmlzaGlrYWJhZ2FkaWE=') + '@' + atob('Z21haWwuY29t');
      } catch (e) {
        return 'rishikabagadia@gmail.com';
      }
    }
  };

  // One-click copy email
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = _0xContactMain.getEmail();
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<span>✓ Copied to Clipboard!</span>`;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Message...</span>`;

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const projectType = formData.get('projectType') || 'Design Inquiry';
    const message = formData.get('message');
    const recipient = _0xContactMain.getEmail();

    try {
      // If user sets up Formspree endpoint in the form action
      const actionUrl = form.getAttribute('action');
      if (actionUrl && !actionUrl.includes('YOUR_FORM_ID')) {
        const res = await fetch(actionUrl, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        
        if (res.ok) {
          showFormSuccess();
          form.reset();
        } else {
          throw new Error('Formspree response not ok');
        }
      } else {
        // Fallback: Open prefilled mailto composer
        const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${projectType} from ${name}`);
        const mailBody = encodeURIComponent(`Hi Rishika,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\nLooking forward to hearing from you!`);
        
        window.open(`mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`, '_blank');
        showFormSuccess("Message prepared! Opening your mail app to send directly.");
        form.reset();
      }
    } catch (err) {
      // Direct fallback
      const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${projectType} from ${name}`);
      const mailBody = encodeURIComponent(`Hi Rishika,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
      showFormSuccess("Redirecting to email client...");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function showFormSuccess(msg = "Thank you! Your message has been sent successfully. Rishika will get back to you within 24 hours.") {
    if (!feedbackEl) return;
    feedbackEl.className = 'form-feedback success';
    feedbackEl.textContent = msg;
    feedbackEl.style.display = 'block';
    setTimeout(() => {
      feedbackEl.style.display = 'none';
    }, 6000);
  }
}

/* ----------------------------------------------------
 * 9. SCROLL REVEALS (Intersection Observer)
 * ---------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
