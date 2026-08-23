/**
 * RISHIKA BAGADIA — PORTFOLIO PROJECT DATABASE
 * 
 * To add or edit a project, simply update or duplicate one of the objects below.
 * Categories: 'branding' | 'product-design' | 'social-media' | 'motion-graphics' | 'video-editing'
 */

export const projects = [
  // ==========================================
  // BRANDING & IDENTITY
  // ==========================================
  {
    id: "aspirant-branding",
    title: "Aspirant Infotech Brand Identity",
    client: "Aspirant Infotech",
    year: "2024–2025",
    category: "branding",
    categoryLabel: "Branding & Identity",
    tags: ["Brand Identity", "Visual Guidelines", "Typography", "Collateral"],
    featured: true,
    coverImage: "assets/projects/branding/aspirant.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/branding/aspirant.jpg", caption: "Full Identity Suite & Typography Palette" }
    ],
    summary: "Complete visual identity system designed for Aspirant Infotech, encompassing corporate stationery, brand guidelines, and high-impact digital collateral.",
    description: "Developed a forward-looking, corporate yet dynamic brand system for Aspirant Infotech. Focused on bold geometric structure, authoritative typography, and clean color blocking to establish high market credibility across B2B touchpoints.",
    deliverables: ["Brand Identity", "Visual Guidelines", "Corporate Stationery", "Digital Assets"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "jewel-luxe-branding",
    title: "Jewel Luxe Visual Identity & Campaign",
    client: "Jewel Luxe Fine Jewelry",
    year: "2024",
    category: "branding",
    categoryLabel: "Branding & Identity",
    tags: ["Luxury Branding", "Editorial Layout", "Logo Design", "Print"],
    featured: true,
    coverImage: "assets/projects/branding/jewel.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/branding/jewel.jpg", caption: "Jewellery Brand Identity & Advertising Mockup" },
      { type: "image", src: "assets/projects/social media post/Jewellery/linkpost62.jpg", caption: "Luxury Jewellery Social Campaign 1" },
      { type: "image", src: "assets/projects/social media post/Jewellery/linkpost64.jpg", caption: "Luxury Jewellery Social Campaign 2" },
      { type: "image", src: "assets/projects/social media post/Jewellery/linkpost90.jpg", caption: "Luxury Jewellery Social Campaign 3" }
    ],
    summary: "Refined, high-end luxury jewellery brand identity balancing classic royal typography with contemporary minimalism.",
    description: "Crafted an exquisite visual language for a fine jewellery house. From ornate logo marks to high-fashion catalog layouts, every element conveys exclusivity, timeless heritage, and modern sophistication.",
    deliverables: ["Logo Suite", "Luxury Catalog Design", "Social Ads", "Packaging Concept"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },

  // ==========================================
  // PRODUCT & PACKAGING DESIGN
  // ==========================================
  {
    id: "flying-horse-packaging",
    title: "Flying Horse Premium Packaging Series",
    client: "Flying Horse Lifestyle",
    year: "2024",
    category: "product-design",
    categoryLabel: "Product Design",
    tags: ["Packaging Design", "Box Architecture", "Print Production", "3D Mockup"],
    featured: true,
    coverImage: "assets/projects/product design/flying horse/beehance-flying-horse_01.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/product design/flying horse/beehance-flying-horse_01.jpg", caption: "Primary Box Packaging — Hero View" },
      { type: "image", src: "assets/projects/product design/flying horse/beehance-flying-horse_02.jpg", caption: "Unboxing Experience & Die-line Flow" },
      { type: "image", src: "assets/projects/product design/flying horse/beehance-flying-horse_03.jpg", caption: "Label & Material Detailing" },
      { type: "image", src: "assets/projects/product design/flying horse/beehance-flying-horse_04.jpg", caption: "Side Perspective & Typography Hierarchy" },
      { type: "image", src: "assets/projects/product design/flying horse/beehance-flying-horse_05.jpg", caption: "Full Product Line Mockup Suite" }
    ],
    summary: "Behance-featured premium box packaging and unboxing architecture with bespoke foil-stamped illustrations and luxury finishes.",
    description: "Engineered a multi-faceted packaging solution featuring custom vector heraldry, sophisticated matte-and-gloss varnish interplay, and strict dieline precision. Built to stand out on retail shelves while providing an unmatched tactile unboxing experience.",
    deliverables: ["Packaging Structure", "Custom Vector Artwork", "Dielines & Print Proofs", "3D Presentation Mockups"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "dhoop-sacred-fragrance",
    title: "Dhoop Sacred Aromatics Packaging & Labeling",
    client: "Sacred Scents Co.",
    year: "2024",
    category: "product-design",
    categoryLabel: "Product Design",
    tags: ["Label Design", "Packaging", "Artisanal", "Vector Illustration"],
    featured: false,
    coverImage: "assets/projects/product design/dhoop label mockup.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/product design/dhoop label mockup.jpg", caption: "Realistic 3D Bottle & Box Render" },
      { type: "image", src: "assets/projects/product design/dhoop label1.jpg", caption: "Front Label Detailed Artwork" },
      { type: "image", src: "assets/projects/product design/dhoop label2.jpg", caption: "Back Label & Botanical Typography" }
    ],
    summary: "Artisanal botanical packaging and label artwork combining sacred Indian geometric motifs with clean, modern minimalism.",
    description: "Designed a holistic product packaging line for traditional aromatic dhoop and essential oils. The aesthetic blends warm earthy tones with intricate line art, creating an aura of serenity and natural purity.",
    deliverables: ["Product Label Design", "Outer Carton Packaging", "3D Rendering", "Print-Ready Vector Files"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "stranger-things-can",
    title: "Stranger Things Limited Edition Beverage Can",
    client: "Pop Culture Concept",
    year: "2023",
    category: "product-design",
    categoryLabel: "Product Design",
    tags: ["Can Design", "Illustration", "Pop Culture", "3D Render"],
    featured: false,
    coverImage: "assets/projects/product design/stranger things can1.jpeg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/product design/stranger things can1.jpeg", caption: "Limited Edition Can 3D Showcase" },
      { type: "image", src: "assets/projects/product design/stranger thingscan2.png", caption: "80s Retro Neon Typography & Silhouette" },
      { type: "image", src: "assets/projects/product design/strangerthingscan3.png", caption: "Upside-Down Concept Layout" }
    ],
    summary: "Retro-futuristic concept beverage can design inspired by 80s synth-wave aesthetics and cinematic pop culture.",
    description: "Created a high-energy limited edition can design drawing from 80s horror-sci-fi nostalgia. Utilized distressed textures, glowing neon gradients, and bold retro typography designed to captivate Gen-Z and millennial collectors.",
    deliverables: ["Cylinder Wrap Artwork", "3D Product Render", "Custom Title Lettering"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "kwality-sweet-box",
    title: "Kwality Confectionery Artisanal Sweet Box",
    client: "Kwality Sweets",
    year: "2024",
    category: "product-design",
    categoryLabel: "Product Design",
    tags: ["Packaging", "Festive Design", "Print Layout", "Gold Foil"],
    featured: false,
    coverImage: "assets/projects/product design/Kwality box mockup.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/product design/Kwality box mockup.jpg", caption: "Royal Gold Foil Sweet Box Mockup" },
      { type: "image", src: "assets/projects/product design/Kwality box mockup2.jpg", caption: "Top-Down View of Compartment Lid" }
    ],
    summary: "Festive celebration packaging blending royal heritage motifs with premium structural box construction.",
    description: "Designed bespoke gift box packaging for high-end confectionery. Included intricate mandalas, embossed metallic foil accents, and structured magnetic closures for a premium gifting experience.",
    deliverables: ["Box Structural Design", "Embossed Foil Art", "Print Production Setup"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "streetwear-apparel-jacket",
    title: "Cyber-Urban Streetwear Jacket Graphics",
    client: "Apparel Capsule",
    year: "2023",
    category: "product-design",
    categoryLabel: "Product Design",
    tags: ["Apparel Design", "Merchandise", "Vector Art", "Streetwear"],
    featured: false,
    coverImage: "assets/projects/product design/jacket design1.jpeg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/product design/jacket design1.jpeg", caption: "Back Panel Statement Graphic" },
      { type: "image", src: "assets/projects/product design/jacketdesign2.png", caption: "Front & Sleeve Patch Graphic" },
      { type: "image", src: "assets/projects/product design/jacketdesign3.png", caption: "Textile Print Colorway Breakdown" }
    ],
    summary: "Bold streetwear jacket graphics blending brutalist typography, urban iconography, and technical screen-print layers.",
    description: "Conceptualized a streetwear merchandise collection featuring bold typographic slogans, Japanese cyberpunk subculture influences, and exact color separations optimized for silk-screen and direct-to-garment printing.",
    deliverables: ["Garment Vector Artwork", "Tech Pack & Sizing Guides", "Colorway Variations"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"]
  },

  // ==========================================
  // SOCIAL MEDIA & META ADS
  // ==========================================
  {
    id: "meta-ads-growth",
    title: "High-ROI Meta Advertising Campaign Suite",
    client: "The Simbolo Multimedia Clients",
    year: "2026",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Meta Ads", "Performance Marketing", "CTR Optimization", "Ad Creatives"],
    featured: true,
    coverImage: "assets/projects/social media post/Meta ads/ad26.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/Meta ads/ad26.jpg", caption: "Lead Gen Ad Creative 1" },
      { type: "image", src: "assets/projects/social media post/Meta ads/IMG-20260627-WA0009.jpg", caption: "E-Commerce Offer Graphic" },
      { type: "image", src: "assets/projects/social media post/Meta ads/IMG-20260627-WA0010.jpg", caption: "Urgency-Driven Sale Creative" },
      { type: "image", src: "assets/projects/social media post/Meta ads/IMG-20260627-WA0013.jpg", caption: "Direct Response Conversion Ad" },
      { type: "image", src: "assets/projects/social media post/Meta ads/IMG-20260629-WA0006.jpg", caption: "Targeted Retargeting Ad" },
      { type: "image", src: "assets/projects/social media post/Meta ads/IMG-20260629-WA0015.jpg", caption: "Brand Authority Meta Banner" }
    ],
    summary: "Conversion-engineered Meta (Facebook & Instagram) ad creatives designed to maximize click-through rates and reduce CPA.",
    description: "Engineered high-performing paid social ad units for leading brand clients. Optimized visual hierarchies, hook-first typography, and contrasting color palettes to break the scroll and drive measurable customer acquisition.",
    deliverables: ["Meta Feed Ads (1:1)", "Story & Reel Ads (9:16)", "A/B Test Creative Variants", "Performance Retargeting Banners"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: "recoco-organic-skincare",
    title: "Re-Coco Skincare Social Campaign & Carousel",
    client: "Re-Coco Beauty",
    year: "2025",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Skincare Branding", "Social Media", "Carousel Design", "Aesthetic"],
    featured: true,
    coverImage: "assets/projects/social media post/Re -coco/Artboard 19.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 19.jpg", caption: "Hero Product Glow Story" },
      { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 23.jpg", caption: "Ingredient Transparency Grid" },
      { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 24.jpg", caption: "Customer Testimonial & Benefits" },
      { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 7.jpg", caption: "Routine Step-by-Step Guide" },
      { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 8.jpg", caption: "Brand Lifestyle Visual" }
    ],
    summary: "Aesthetic pastel social media campaign emphasizing clean beauty, organic textures, and editorial Instagram feeds.",
    description: "Curated a serene, pastel-driven visual narrative for Re-Coco Skincare. Formatted seamless panoramic carousels, educational infographics, and promotional templates that boosted organic engagement and brand recall.",
    deliverables: ["Instagram Carousel Sets", "Daily Feed Graphics", "Highlight Icons", "Story Templates"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: "us-client-billboard-fleet",
    title: "US Client Fleet Advertising & LED Truck Billboard Ads",
    client: "US Automotive & Media Agency",
    year: "2025",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Out of Home (OOH)", "LED Truck Billboard", "Vehicle Wrap", "Advertising"],
    featured: true,
    coverImage: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 2.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 2.jpg", caption: "LED Digital Truck Mobile Billboard 1" },
      { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 3.jpg", caption: "LED Digital Truck Mobile Billboard 2" },
      { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 4.jpg", caption: "Night-Mode High-Contrast Billboard" },
      { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/Artboard 1.jpg", caption: "Car Seat Cover Feature Graphic 1" },
      { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/Artboard 2.jpg", caption: "Car Seat Cover Feature Graphic 2" },
      { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/Artboard 3.jpg", caption: "Product Durability Showcase" }
    ],
    summary: "International large-format LED mobile truck billboard designs and automotive accessories ad campaign for US market.",
    description: "Designed ultra-crisp, high-contrast outdoor LED truck billboard creatives for United States metropolitan advertising. Formatted to read instantly from long distances under both harsh daytime sunlight and vibrant night lighting.",
    deliverables: ["OOH Digital Billboard Layouts", "LED Display Specs", "Automotive Social Ad Set"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: "salon-dermate-aesthetics",
    title: "Salon & Dermate Clinical Beauty Campaign",
    client: "Dermate Clinic & Salon",
    year: "2024",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Clinical Aesthetics", "Social Creatives", "Flyer", "Poster"],
    featured: false,
    coverImage: "assets/projects/social media post/Salon and dermate/Artboard 1.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 1.jpg", caption: "Signature Treatment Hero Creative" },
      { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 22.jpg", caption: "Skin Therapy Promo Banner" },
      { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 24.jpg", caption: "Seasonal Offer Flyer" },
      { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 4.jpg", caption: "Hair Transformation Showcase" },
      { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 5.jpg", caption: "Medical Dermatology Insight" }
    ],
    summary: "Crisp, clinical-yet-luxurious social presence for a premium skincare and medical aesthetics brand.",
    description: "Created clean, professional visual assets for aesthetic dermatologists. Balanced medical trust with salon luxury through clean typography, reassuring soft tones, and structured before/after service infographics.",
    deliverables: ["Treatment Banners", "Clinical Infographics", "Story Offers", "Print Leaflets"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: "real-estate-sarl-royal",
    title: "Sarl Royal Real Estate & Architectural Brochure",
    client: "Sarl Royal Properties",
    year: "2024",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Real Estate", "Brochure Design", "Social Ads", "Luxury Living"],
    featured: false,
    coverImage: "assets/projects/social media post/Real estate/sarl royal brochure.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/Real estate/sarl royal brochure.jpg", caption: "Architectural Property Brochure" },
      { type: "image", src: "assets/projects/social media post/Real estate/1.jpg", caption: "Luxury Apartment Launch Creative" },
      { type: "image", src: "assets/projects/social media post/Real estate/2.jpg", caption: "Amenities & Floor Plan Overview" },
      { type: "image", src: "assets/projects/social media post/Real estate/real state1.png", caption: "Investor ROI Social Banner" }
    ],
    summary: "Architectural marketing collateral and social campaigns for premium residential and commercial real estate developments.",
    description: "Delivered high-value promotional graphics for luxury townships and apartments. Handled floor plan visualization, key USP callouts, and prestigious branding tailored to affluent homebuyers.",
    deliverables: ["Multi-Page Property Brochure", "Meta Ads", "Hoarding Layouts"],
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: "shree-sweets-festive",
    title: "Shree Sweets Festive & Heritage Campaign",
    client: "Shree Sweets",
    year: "2024",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Festive Marketing", "Traditional", "Food Graphic", "Social Media"],
    featured: false,
    coverImage: "assets/projects/social media post/Shree sweets/Artboard 35.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 35.jpg", caption: "Diwali Special Sweet Assortment" },
      { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 39.jpg", caption: "Authentic Ghee Sweets Showcase" },
      { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 40.jpg", caption: "Festive Pre-Order Campaign" },
      { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 48.jpg", caption: "Grand Festival Poster" }
    ],
    summary: "Warm, mouth-watering festive creative campaign celebrating traditional culinary craft and seasonal gift boxes.",
    description: "Combined rich festive jewel tones with appetizing food photography manipulation to craft mouth-watering social media posts that boosted festive gift box orders by 40%.",
    deliverables: ["Festive Ad Series", "Menu Cards", "WhatsApp Broadcast Graphics"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: "nexgen-aqua-purity",
    title: "Nexgen Aqua Water Purification Campaign",
    client: "Nexgen Aqua Solutions",
    year: "2024",
    category: "social-media",
    categoryLabel: "Social Media & Ads",
    tags: ["Product Campaign", "Clean Aesthetic", "Social Ads", "Infographic"],
    featured: false,
    coverImage: "assets/projects/social media post/Nexgen aqua/Artboard 14.jpg",
    mediaType: "image",
    media: [
      { type: "image", src: "assets/projects/social media post/Nexgen aqua/Artboard 14.jpg", caption: "Pure Alkaline Water Feature Post" },
      { type: "image", src: "assets/projects/social media post/Nexgen aqua/Artboard 15.jpg", caption: "Advanced Multi-Stage Filtration" },
      { type: "image", src: "assets/projects/social media post/Nexgen aqua/Artboard 17.jpg", caption: "Health & Mineral Balance Graphic" }
    ],
    summary: "Crystal-clear, health-first visual communication highlighting cutting-edge water filtration technology.",
    description: "Created refreshing, clean blue-and-white graphics emphasizing hygiene, technology, and health benefits of mineral-rich water systems.",
    deliverables: ["Product Features Posts", "Technical Infographics", "Promo Offers"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"]
  },

  // ==========================================
  // MOTION GRAPHICS
  // ==========================================
  {
    id: "vestar-motion-reel",
    title: "Vestar Brand Kinetic Motion Identity",
    client: "Vestar Dynamics",
    year: "2025",
    category: "motion-graphics",
    categoryLabel: "Motion Graphics",
    tags: ["Motion Design", "After Effects", "Kinetic Typography", "Logo Animation"],
    featured: true,
    coverImage: "assets/projects/branding/aspirant.jpg",
    mediaType: "video",
    videoSrc: "assets/projects/motion graphics/vestar.mp4",
    media: [
      { type: "video", src: "assets/projects/motion graphics/vestar.mp4", caption: "Vestar Dynamic Kinetic Reel (Full HD)" }
    ],
    summary: "High-octane kinetic logo reveal and motion graphic system designed to energize digital brand touchpoints.",
    description: "Engineered seamless 2D/3D motion dynamics in Adobe After Effects. Utilized custom easing curves, particle trails, and snappy kinetic typography to bring the brand identity to life with cinematic authority.",
    deliverables: ["Animated Logo Stingers", "Motion Style Guide", "Intro/Outro Video Assets"],
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator"]
  },

  // ==========================================
  // VIDEO EDITING & REELS
  // ==========================================
  {
    id: "diesel-cinematic-reel",
    title: "Diesel Cinematic Fashion Commercial",
    client: "Fashion & Lifestyle Showcase",
    year: "2025",
    category: "video-editing",
    categoryLabel: "Video Editing",
    tags: ["Video Editing", "Color Grading", "Sound Design", "Pacing"],
    featured: true,
    coverImage: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 4.jpg",
    mediaType: "video",
    videoSrc: "assets/projects/vedio editing/diesel.mp4",
    media: [
      { type: "video", src: "assets/projects/vedio editing/diesel.mp4", caption: "Diesel Cinematic Commercial Cut" }
    ],
    summary: "Edgy, rhythmic fashion commercial cut with dynamic speed ramps, chromatic aberration transitions, and heavy bass sound design.",
    description: "Edited and color-graded a punchy fashion commercial. Built around high-energy beat-synced cuts, seamless frame transitions, and customized LUT grading to achieve a gritty yet upscale editorial tone.",
    deliverables: ["Commercial Master Cut", "Vertical 9:16 Social Cutdown", "Sound Mixing & SFX"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects"]
  },
  {
    id: "monster-canve-promo",
    title: "Monster Energy High-Impact Commercial Cut",
    client: "Beverage Promo Cut",
    year: "2025",
    category: "video-editing",
    categoryLabel: "Video Editing",
    tags: ["Commercial Cut", "Fast Paced", "Visual Effects", "SFX"],
    featured: true,
    coverImage: "assets/projects/product design/stranger things can1.jpeg",
    mediaType: "video",
    videoSrc: "assets/projects/vedio editing/monster canve_1.mp4",
    media: [
      { type: "video", src: "assets/projects/vedio editing/monster canve_1.mp4", caption: "Monster Energy Dynamic Promo Cut" }
    ],
    summary: "Adrenaline-fueled beverage advertisement featuring kinetic typography, impact zooms, and dynamic color grading.",
    description: "Crafted a relentless, action-packed promo reel. Synced visual pulses with heavy audio drops, integrated stylized graphical overlays, and delivered a commercial that demands instant attention.",
    deliverables: ["Digital Video Commercial", "Sound Design & Foley", "Social Format Derivatives"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects"]
  },
  {
    id: "social-media-viral-reels",
    title: "High-Engagement Short-Form Video Reels",
    client: "Digihakk & Simbolo Client Network",
    year: "2025",
    category: "video-editing",
    categoryLabel: "Video Editing",
    tags: ["Instagram Reels", "Short-Form Video", "Viral Hooks", "Subtitles"],
    featured: false,
    coverImage: "assets/projects/social media post/Re -coco/Artboard 19.jpg",
    mediaType: "video",
    videoSrc: "assets/projects/vedio editing/social media_1.mp4",
    media: [
      { type: "video", src: "assets/projects/vedio editing/social media_1.mp4", caption: "Short-Form Social Reel & Podcast Highlight" }
    ],
    summary: "Fast-paced, hook-driven short-form reels and podcast snippets designed to boost watch time and virality.",
    description: "Produced a series of viral-ready 9:16 reels for client podcasts and brand ambassadors. Implemented animated keyword captions, dynamic b-roll inserts, visual zooms, and audio noise reduction.",
    deliverables: ["Vertical Short-Form Cuts", "Animated Subtitles & Emojis", "Audio Mastering"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects"]
  },
  {
    id: "interactive-website-showcase",
    title: "Interactive Web & UI Motion Showcase",
    client: "Digital Agency Portfolio",
    year: "2025",
    category: "video-editing",
    categoryLabel: "Video Editing",
    tags: ["UI Motion", "Screen Capture", "Product Demo", "Showcase"],
    featured: false,
    coverImage: "assets/projects/branding/aspirant.jpg",
    mediaType: "video",
    videoSrc: "assets/projects/vedio editing/website.mp4",
    media: [
      { type: "video", src: "assets/projects/vedio editing/website.mp4", caption: "Interactive Digital Experience Walkthrough" }
    ],
    summary: "Sleek screen-recorded digital product walkthrough enhanced with smooth zoom panning, cursor animations, and UI polish.",
    description: "Edited an engaging walkthrough showcasing an interactive web experience. Enhanced raw captures with isometric tilt perspectives, highlighted clickable components, and crisp ambient audio.",
    deliverables: ["Full HD Demo Video", "Web Mockup Animation", "Teaser Loop"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects"]
  }
];

export const experienceData = [
  {
    period: "2026 — Present",
    role: "Senior Graphic Designer",
    company: "The Simbolo Multimedia",
    location: "Indore, India",
    type: "Full-Time",
    description: "Leading creative direction for social media creatives, high-converting Meta Ads, large-format marketing banners, pitch presentations, packaging systems, and bespoke logo designs for diverse national and international clients.",
    highlights: [
      "Conceptualized & delivered 100+ high-ROI Meta ad creatives across e-commerce, real estate, and lifestyle.",
      "Spearheaded packaging identity systems from initial vector dielines to final press proofs.",
      "Refined brand communication strategies ensuring consistent visual storytelling across touchpoints."
    ]
  },
  {
    period: "2025",
    role: "Creative Graphic & Video Designer",
    company: "Digihakk",
    location: "Indore, India",
    type: "Agency",
    description: "Delivered a wide variety of multifaceted creative projects, specializing in high-engagement podcast reels, animated brand content, and multi-platform marketing assets.",
    highlights: [
      "Produced viral short-form video reels and podcast clips with animated kinetic subtitles.",
      "Designed dynamic social media assets with sharp focus on retention and community engagement."
    ]
  },
  {
    period: "2024 — 2025",
    role: "Graphic & Motion Design Intern",
    company: "Aspirant Infotech",
    location: "Indore, India",
    type: "Internship",
    description: "Produced engaging product reels, corporate brand videos, digital ad creatives, social media graphics, and clean visual design assets for technology clients.",
    highlights: [
      "Created polished corporate motion graphics and product explainer videos.",
      "Collaborated closely with marketing teams to translate complex technical briefs into clean visual collateral."
    ]
  },
  {
    period: "2022 — 2024",
    role: "Freelance Graphic Designer",
    company: "Independent Practice",
    location: "Indore, India",
    type: "Freelance",
    description: "Operated an independent design practice serving local businesses, startup founders, and referral clients across India and globally.",
    highlights: [
      "Crafted full branding suites, logos, event posters, and social campaigns from concept to delivery.",
      "Handled end-to-end client communication, timeline management, creative direction, and revision workflows."
    ]
  }
];

export const skillsData = {
  coreCompetencies: [
    { name: "Brand Identity Design", level: 95, icon: "sparkles" },
    { name: "Social Media & Meta Ads", level: 96, icon: "trending-up" },
    { name: "Product & Packaging Design", level: 92, icon: "package" },
    { name: "Motion Graphics & Animation", level: 88, icon: "film" },
    { name: "Poster & Editorial Layout", level: 94, icon: "layout" },
    { name: "Illustration & Vector Art", level: 90, icon: "pen-tool" },
    { name: "Advertising & Marketing Design", level: 95, icon: "target" },
    { name: "Video Editing & Color Grading", level: 89, icon: "video" }
  ],
  tools: [
    { name: "Adobe Illustrator", category: "Vector & Brand Identity", level: "Expert", experience: "4+ yrs", badge: "Ai", color: "#FF9A00" },
    { name: "Adobe Photoshop", category: "Photo Manipulation & Ads", level: "Expert", experience: "4+ yrs", badge: "Ps", color: "#31A8FF" },
    { name: "Adobe Premiere Pro", category: "Video Editing & Cuts", level: "Advanced", experience: "3+ yrs", badge: "Pr", color: "#9999FF" },
    { name: "Adobe After Effects", category: "Motion Graphics & VFX", level: "Advanced", experience: "3+ yrs", badge: "Ae", color: "#9999FF" },
    { name: "Adobe InDesign", category: "Brochures & Layouts", level: "Proficient", experience: "3+ yrs", badge: "Id", color: "#FF3366" },
    { name: "Figma", category: "Digital UI & Layout Systems", level: "Proficient", experience: "2+ yrs", badge: "Fg", color: "#A259FF" }
  ],
  education: {
    degree: "Bachelor of Applied Arts (BFA)",
    institution: "VIVA Institute of Applied Arts",
    year: "2024",
    grade: "2nd Class",
    focus: "Visual Communication, Advertising Art, Typography, Commercial Illustration"
  }
};
