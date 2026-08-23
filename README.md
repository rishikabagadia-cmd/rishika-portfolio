# Rishika Bagadia — Graphic Designer Portfolio Website

A bespoke, top 1% studio-grade portfolio website designed for **Rishika Bagadia**, Graphic Designer based in Indore, India. Built with clean vanilla web standards (HTML5, Modern CSS3, ES6 Modules), zero build friction, fast loading times, and responsive mobile-first craftsmanship.

---

## 📁 Project Directory Structure

```
rishika-portfolio/
├── index.html                   # Semantic main markup & SEO Open Graph tags
├── css/
│   ├── style.css                # Design system tokens, layouts & components
│   ├── animations.css           # Scroll reveals, floating mesh & marquee loop
│   └── modal.css                # Fullscreen case study modal & gallery carousel
├── js/
│   ├── main.js                  # Main controller, interactive filters & forms
│   ├── projects-data.js         # EASY PROJECT DATABASE (Edit/Add your work here)
│   ├── gallery-modal.js         # Case study lightbox & media viewer
│   └── theme-manager.js         # Real-time accent palette switcher
└── assets/
    ├── Rishika_Bagadia_Resume.pdf  # Direct downloadable PDF resume
    └── projects/                   # All project imagery and video reels
        ├── branding/
        ├── motion graphics/
        ├── product design/
        ├── social media post/
        └── vedio editing/
```

---

## 🚀 How to Preview the Website Locally

1. **Option A (Direct)**: Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Brave, or Safari.
2. **Option B (Local Server)**: If you use VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Add or Update Projects

All projects are managed inside **`js/projects-data.js`**. You do not need to touch HTML or CSS!

To add a new project, simply copy an existing block in `js/projects-data.js` and edit the fields:

```javascript
{
  id: "my-new-project",
  title: "Brand Campaign Name",
  client: "Client Name",
  year: "2026",
  category: "branding", // Choose: 'branding' | 'product-design' | 'social-media' | 'motion-graphics' | 'video-editing'
  categoryLabel: "Branding & Identity",
  tags: ["Logo Design", "Packaging", "Art Direction"],
  featured: true,
  coverImage: "assets/projects/branding/your-image.jpg",
  mediaType: "image", // or "video"
  media: [
    { type: "image", src: "assets/projects/branding/your-image.jpg", caption: "Full Suite Mockup" }
  ],
  summary: "One-sentence high impact summary.",
  description: "Detailed breakdown of the strategy, visual problem, and design solution.",
  deliverables: ["Logo System", "Social Ads", "Packaging"],
  tools: ["Adobe Illustrator", "Adobe Photoshop"]
}
```

---

## 🎨 Changing Your Accent Color Theme

The website includes an interactive accent palette switcher in the header:
- **Kinetic Amber** (`#F5B738`) — Default warm gold editorial
- **Acid Lime** (`#D4FF00`) — Cyber high-voltage
- **Electric Violet** (`#B388FF`) — Creative and vibrant
- **Studio Mono** (`#FFFFFF`) — Clean minimalist noir

You can change default colors in `css/style.css` under `:root`.

---

## ✉️ Setting Up the Contact Form (Formspree)

1. Go to [https://formspree.io/](https://formspree.io/) and create a free account.
2. Create a new form and copy your Form ID (e.g. `xpzgabkl`).
3. Open `index.html`, find `<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID">`, and replace `YOUR_FORM_ID` with your Form ID.
*(Even without Formspree, the form automatically falls back to an instant pre-filled email composer directly to `rishikabagadia@gmail.com`)*.

---

## 🌐 Deploying to the Web for Free in Under 60 Seconds

### Option 1: Netlify Drop (Easiest - 30 seconds)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `rishika-portfolio` folder directly into the browser window.
3. Your site is instantly live with an SSL HTTPS link!

### Option 2: Vercel
1. Install Vercel CLI or upload your project folder to GitHub.
2. Import repository in [vercel.com](https://vercel.com) and click **Deploy**.

### Option 3: GitHub Pages
1. Push the folder to a GitHub repository named `portfolio` or `rishika-portfolio`.
2. Go to **Settings > Pages > Branch: main > Save**.
3. Live in 1 minute at `https://yourusername.github.io/portfolio/`.
