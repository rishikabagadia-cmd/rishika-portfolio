/**
 * RISHIKA BAGADIA — PORTFOLIO ENGINE (STANDALONE & BUNDLED)
 * 
 * Works 100% offline via direct file:// double-click AND via http:// server.
 * Zero CORS restrictions, lightning fast performance.
 */

(function() {
  'use strict';

  /* ==========================================================================
     1. PROJECT DATABASE
     ========================================================================== */
  const projects = [
    // --- 1. STRANGER THINGS × MONSTER ---
    {
      id: "stranger-things-can",
      title: "Stranger Things × Monster",
      client: "Stranger Things × Monster",
      year: "2024",
      category: "product-design",
      categoryLabel: "Social Campaign / Visual Design",
      tags: ["Brand Collaboration", "Visual Design", "Creative Concept", "Photo Manipulation", "Art Direction"],
      featured: true,
      coverImage: "assets/projects/product design/stranger things can1.jpeg",
      mediaType: "image",
      media: [
        { type: "video", src: "assets/projects/product design/bts_monster.mp4", caption: "Behind The Scenes & Photoshop Compositing Motion Process" },
        { type: "video", src: "assets/projects/product design/abstract.mp4", caption: "Kinetic Motion & Atmospheric 3D Particle Visuals" },
        { type: "image", src: "assets/projects/product design/stranger things can1.jpeg", caption: "Limited Edition Can 3D Showcase & Atmospheric Lighting" },
        { type: "image", src: "assets/projects/product design/stranger_things_can_flat_wrap.jpg", caption: "Full Flat Production Can Wrap & Regulatory Label Layout" },
        { type: "image", src: "assets/projects/product design/stranger_things_can_3d_mockup.jpg", caption: "3D Isometric Floating Can Studio Mockup" },
        { type: "image", src: "assets/projects/product design/stranger_things_can_unfolded_layout.jpg", caption: "3D Render & Unfolded Packaging Architecture Presentation" },
        { type: "image", src: "assets/projects/product design/stranger thingscan2.png", caption: "80s Retro Neon Typography & Silhouette" },
        { type: "image", src: "assets/projects/product design/strangerthingscan3.png", caption: "Upside-Down Concept Layout" }
      ],
      summary: "A conceptual collaboration between the dark, nostalgic world of Stranger Things and the bold, high-energy identity of Monster.",
      description: "A conceptual collaboration between the dark, nostalgic world of Stranger Things and the bold, high-energy identity of Monster.\n\nThe visual direction combines Stranger Things’ mysterious, cinematic atmosphere with Monster’s intense, rebellious energy to create a campaign that feels immersive, edgy, and instantly attention-grabbing.\n\nCreative Direction:\nThe concept focuses on translating the Stranger Things universe into a Monster-inspired visual experience — using dramatic lighting, dark tones, atmospheric elements, and a strong cinematic composition. The goal was to make the collaboration feel like a natural crossover between two distinct visual worlds while keeping the product and concept visually dominant.\n\nDesign Approach:\n• Cinematic and atmospheric composition\n• Dark, mysterious visual language\n• High-impact product placement\n• Stranger Things-inspired visual elements\n• Bold contrast and dramatic lighting\n• Social-media-first composition\n• Focus on storytelling through a single frame\n\nMy Role:\nConcept Development • Art Direction • Visual Design • Compositing • Photo Manipulation • Post-Production\n\nOutcome:\nA visually driven collaboration concept designed to capture attention instantly while demonstrating how pop culture, storytelling, and brand identity can be merged into a compelling campaign visual.",
      deliverables: ["Conceptual Campaign Visuals", "High-Impact Product Placement", "Compositing & Photo Manipulation", "Social-Media-First Key Art"],
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Lightroom"]
    },

    // --- 2. CHAINSAW MAN × DIESEL ---
    {
      id: "streetwear-apparel-jacket",
      title: "Chainsaw Man x Diesel Jacket Design",
      client: "Chainsaw Man x Diesel Concept",
      year: "2024",
      category: "product-design",
      categoryLabel: "Product Design",
      tags: ["Concept Creation", "Visual Storytelling", "Pop Culture Design", "Photoshop Design", "Streetwear"],
      featured: false,
      coverImage: "assets/projects/product design/jacket design1.jpeg",
      mediaType: "image",
      media: [
        { type: "video", src: "assets/projects/product design/diesel_intro.mp4", caption: "Chainsaw Man × Diesel — Cinematic Motion Teaser & Intro" },
        { type: "video", src: "assets/projects/product design/diesel.mp4", caption: "Chainsaw Man × Diesel — Full Cinematic Motion Video Showcase" },
        { type: "image", src: "assets/projects/product design/jacket design1.jpeg", caption: "Back Panel Statement Graphic & Atmospheric Studio Presentation" },
        { type: "image", src: "assets/projects/product design/chainsaw_man_jacket_back.jpg", caption: "High-Res Back Panel Artwork — 'Hunger Makes Hero'" },
        { type: "image", src: "assets/projects/product design/chainsaw_man_jacket_front.jpg", caption: "High-Res Front Denim View & Diesel Collar Tagging" },
        { type: "image", src: "assets/projects/product design/jacketdesign2.png", caption: "Front & Sleeve Patch Graphic" },
        { type: "image", src: "assets/projects/product design/jacketdesign3.png", caption: "Textile Print Colorway Breakdown" }
      ],
      summary: "“Not a collab. A concept. Chainsaw Man × Diesel works because the attitude matches — not the logos. This is how campaigns are built. Brands that get it, get me.”",
      description: "“Not a collab. A concept. Chainsaw Man × Diesel works because the attitude matches — not the logos. This is how campaigns are built. Brands that get it, get me.”\n\nConceptualized a streetwear merchandise collection featuring bold typographic slogans, Japanese anime cyberpunk influences, and exact color separations optimized for silk-screen and direct-to-garment printing.",
      deliverables: ["Visual Design & Concept Creation", "Garment Vector Artwork", "Tech Pack & Sizing Guides", "Visual Storytelling"],
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro"]
    },

    // --- 3. FORBES INDIA EDITORIAL ---
    {
      id: "forbes-creative-shoot",
      title: "Forbes India — The Creative Shoot Campaign",
      client: "Forbes India Editorial Concept",
      year: "2024",
      category: "social-media",
      categoryLabel: "Editorial & Creative Direction",
      tags: ["Editorial Design", "Creative Direction", "Photography & Lighting", "Magazine Cover", "Art Direction"],
      featured: true,
      coverImage: "assets/projects/forbes-shoot/forbes_final_covers.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/forbes-shoot/forbes_final_covers.jpg", caption: "Final Forbes India Magazine Cover Designs" },
        { type: "image", src: "assets/projects/forbes-shoot/forbes_editorial_breakdown.jpg", caption: "Concept, Lighting & Production Breakdown" },
        { type: "image", src: "assets/projects/forbes-shoot/forbes_cover_hero.jpg", caption: "The Creative Shoot Campaign — Concept Key Art" },
        { type: "image", src: "assets/projects/forbes-shoot/forbes_shoot_process.jpg", caption: "Studio Photography & Direction with Kathak Dancer" },
        { type: "image", src: "assets/projects/forbes-shoot/forbes_visual_references.jpg", caption: "Atmospheric Lighting & Moodboard References" }
      ],
      summary: "Conceptualized and executed a Forbes India magazine cover editorial campaign, casting and directing a Kathak dancer with dramatic low-key rim lighting and prime lens photography.",
      description: "Conceptualized and executed a Forbes India magazine cover for a college campaign, selecting and photographing a Kathak dancer as the central subject.\n\nManaged the entire process from casting to shoot direction, incorporating dramatic lighting techniques and a DSLR with a prime lens to craft a visually striking, editorial portrait.\n\nCAMPAIGN BREAKDOWN:\n• Brand: Forbes India Cover\n• Subject: Kathak dancer (model scouted and directed by me)\n• Lighting: Low-key, with dramatic red and rim lighting for depth\n• Camera: DSLR with prime lens for sharpness and bokeh\n• Personal connection: Chose dance to honor my own dream and passion for the art form\n\nCREATIVE EXECUTION:\nThe dancer was chosen to reflect both the timeless elegance of Kathak and my own passion for the art, channeling personal inspiration into a polished, magazine-style composition.",
      deliverables: ["Magazine Cover Editorial Design", "Casting & Talent Direction", "Studio Photography & Lighting", "Editorial Typography & Layout", "Post-Production & Retouching"],
      tools: ["Adobe Photoshop", "Adobe Illustrator", "DSLR Photography", "Studio Lighting"]
    },

    // --- 4. JEWELBLIISS LUXURY JEWELRY ---
    {
      id: "jewel-luxe-branding",
      title: "Jewelbliiss — Luxury Jewelry Brand Identity & Photoshoot",
      client: "Jewelbliiss",
      year: "2024",
      category: "branding",
      categoryLabel: "Branding & Identity",
      tags: ["Brand Identity", "Luxury Jewelry", "Photoshoot Direction", "Typography", "Print Stationery"],
      featured: true,
      coverImage: "assets/projects/branding/jewelbliiss_brand_identity_palette.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/branding/jewelbliiss_full_case_study.jpg", caption: "Jewelbliiss — Complete Brand Identity & Campaign Presentation" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_brand_identity_palette.jpg", caption: "Jewelbliiss — Brand Identity, Monogram & Curated Color Palette" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_brand_values_typography.jpg", caption: "Brand Value, Monogram Anatomy & Typography Suite" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_editorial_photoshoot.jpg", caption: "Jewelry Editorial Photoshoot & Crimson Velvet Styling" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_business_cards_stationery.jpg", caption: "Luxury Foil Business Card & QR Stationery Mockup" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_social_media_showcase.jpg", caption: "Social Media Showcase — Eternity, Blushleaf & Crystalyn" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_festive_holiday_campaign.jpg", caption: "Festive Vibes — Holiday Gifting & 10% Off Campaign Creatives" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_outdoor_hoarding_billboard.jpg", caption: "Large-Format Outdoor Highway Hoarding Billboard" },
        { type: "image", src: "assets/projects/branding/jewelbliiss_retail_standee_banners.jpg", caption: "Luxury Retail Roll-Up Standee & Exhibition Display" }
      ],
      summary: "A refined, high-end visual identity and editorial photoshoot direction for Jewelbliiss fine jewelry, balancing royal monogram elegance with modern minimalism.",
      description: "A brand born from passion and precision, Jewelbliiss creates elegant, affordable luxury pieces that reflect individuality, grace, and the joy of shining in your own way.\n\nLOGO & VISUAL IDENTITY:\nThe Jewelbliiss logo blends elegance with emotion, capturing the bliss that every jewel brings. The graceful 'Jb' monogram and golden spark symbolize artistry, warmth, and radiance. With its refined typography and minimal palette of charcoal and gold, the design reflects luxury, femininity, and timeless charm — the true spirit of Jewelbliiss.\n\nPHOTOSHOOT DIRECTION & BRAND STYLING:\nI conceptualized, styled, and executed the complete photoshoot for Jewelbliiss's Jewelry. From designing the setup and selecting the rich velvet backdrop to directing precise lighting, every element was crafted to highlight the jewelry's diamond detailing and metallic sheen. Thoughtful angle selection and composition brought out the elegance and artistry of each piece, resulting in a visually luxurious representation of the brand's refined aesthetic.",
      deliverables: ["Monogram & Logo Suite", "Brand Guidelines & Color Palette", "Art Direction & Photoshoot Styling", "Luxury Business Cards & Stationery", "Social Media Ad Creatives", "Outdoor Hoarding & Retail Standees"],
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Studio Photography", "Lighting Setup"]
    },

    // --- 5. FLYING HORSE ---
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

    // --- 6. HALDIRAM'S ---
    {
      id: "haldiram-tradition-lens",
      title: "Haldiram's — Tradition Through the Lens",
      client: "Haldiram's",
      year: "2024",
      category: "social-media",
      categoryLabel: "Commercial Photography & Art Direction",
      tags: ["Commercial Photography", "Art Direction", "Food Styling", "Brand Storytelling", "Editorial Campaign"],
      featured: true,
      coverImage: "assets/projects/haldiram-campaign/haldiram_brand_identity.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_brand_identity.jpg", caption: "Haldiram's Heritage Brand Identity Backdrop" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_story_breakdown.jpg", caption: "Tradition Through the Lens — Concept & Story Breakdown" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_badam_kesar_milk.jpg", caption: "Haldiram's Badam Kesar Milk Commercial Shoot on Royal Velvet" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_bento_cake.jpg", caption: "Haldiram's Bento Cake Editorial Dessert Styling" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_kiwi_delight.jpg", caption: "Haldiram's Kiwi Delight Sweet Packaging & Food Styling" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_kiwi_lookbook.jpg", caption: "Haldiram's Kiwi Delight Editorial Lookbook Presentation" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_matka_jhatka.jpg", caption: "Haldiram's Matka Jhatka Masala Chaas Commercial Shoot" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_matka_lookbook.jpg", caption: "Haldiram's Matka Jhatka Editorial Lookbook Presentation" },
        { type: "image", src: "assets/projects/haldiram-campaign/haldiram_lookbook_mockup.jpg", caption: "Editorial Brand Lookbook Presentation" }
      ],
      summary: "A heritage commercial photography and storytelling campaign for Haldiram's, blending creative lighting techniques, royal culinary styling, and cultural nostalgia.",
      description: "This campaign for Haldiram reflects my deep connection to the brand, rooted in my personal experiences growing up in Rajasthan and a genuine appreciation for its traditional flavors.\n\nChoosing Haldiram was natural, given its unmatched quality and cultural significance. Through careful use of creative lighting techniques, I aimed to bring out the vibrant colors and textures, making each product visually enticing while telling a story of heritage and authenticity.\n\nCAMPAIGN HIGHLIGHTS:\n• Client: Haldiram\n• Subject: Tradition Through the Lens\n• Products Styled: Badam Kesar Milk, Haldiram's Artisanal Bento Cake, Kiwi Delight Sweets, and Matka Jhatka Masala Chaas\n• Visual Direction: Rich royal textures (sapphire velvet, earthen terracotta kulhads, rustic burlap, fresh ingredients, and fine silver & porcelain ware)\n\nCREATIVE IMPACT:\nThis project allowed me to blend my passion for photography with storytelling, showcasing not just products, but the culture and legacy behind them. It stands as a testament to how thoughtful imagery can elevate brand identity and resonate emotionally with the audience.",
      deliverables: ["Commercial Food & Beverage Photography", "Prop Scouting & Culinary Styling", "Creative Studio Lighting", "Editorial Lookbook Layout", "Color Grading & High-End Retouching"],
      tools: ["Adobe Photoshop", "Adobe Lightroom", "Studio Photography", "Lighting Equipment"]
    },

    // --- 7. ASPIRANT INFOTECH ---
    {
      id: "aspirant-branding",
      title: "Aspirant Infotech Brand Identity",
      client: "Aspirant Infotech",
      year: "2024–2025",
      category: "branding",
      categoryLabel: "Branding & Identity",
      tags: ["Brand Identity", "Visual Guidelines", "Typography", "Collateral"],
      featured: true,
      coverImage: "assets/projects/branding/aspirant_logo_grid_anatomy.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/branding/aspirant_full_case_study.jpg", caption: "Aspirant Infotech — Complete Brand Identity & Mascot Presentation" },
        { type: "image", src: "assets/projects/branding/aspirant_logo_grid_anatomy.jpg", caption: "Aspirant Infotech — Logo Geometry, Construction Grid & Typography" },
        { type: "image", src: "assets/projects/branding/aspirant_brand_palette_typography.jpg", caption: "Brand Narrative, Color Palette (#B6E405, #7B9904) & Typography Suite" },
        { type: "image", src: "assets/projects/branding/aspirant_mascot_character_suite.jpg", caption: "Custom 3D Vector Mascot Character Suite & Dynamic Action Poses" },
        { type: "image", src: "assets/projects/branding/aspirant_billboard_marketing_flyers.jpg", caption: "Outdoor Skyscraper Billboard & Corporate Marketing Collateral" },
        { type: "image", src: "assets/projects/branding/aspirant_merchandise_tshirt_mockup.jpg", caption: "Corporate Mascot Apparel & Negative Monogram Mark" }
      ],
      summary: "Complete visual identity system and custom mascot design created for Aspirant Infotech, encompassing corporate stationery, brand guidelines, and high-impact digital collateral.",
      description: "Aspirant Infotech is a technology-driven company that provides end-to-end IT solutions, including web development, mobile app development, custom software, and digital transformation services.\n\nThe company focuses on delivering innovative, scalable, and user-friendly products tailored to each client’s business needs. With expertise in cloud solutions, cybersecurity, and UI/UX design, Aspirant Infotech helps brands enhance efficiency and achieve digital growth.\n\nBRAND SYSTEM & VISUAL IDENTITY:\n• Logo Geometry: Precise circular grid construction forming the futuristic 'ai' monogram.\n• Color Palette: Energetic Tech Lime (#B6E405), Olive Green (#7B9904), Obsidian Black (#000000), and Pure White (#FFFFFF).\n• Typography Suite: Microsoft New Tai Lue (Clean Corporate Body) paired with BankGothic LT BT (Bold Structural Display).\n• Custom Mascot Design: Illustrated energetic tech superhero mascot in dynamic hero and flight poses, creating memorable brand affinity.\n• Touchpoints: City skyscraper billboard, marketing flyers ('Get Spotted With Us' & 'Reach New Heights With Us'), and corporate merchandise.",
      deliverables: ["Brand Identity & Logo Grid", "Custom Mascot Character Design", "Brand Guidelines & Color System", "Skyscraper Outdoor Billboard", "Marketing Print Flyers & Stationery", "Corporate Apparel & Merchandise"],
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    },

    // --- 8. NOBLE WHOLESALE BRAND IDENTITY ---
    {
      id: "noble-wholesale-branding",
      title: "Noble Wholesale — Brand Identity & E-Commerce Platform",
      client: "Noble Wholesale",
      year: "2024–2025",
      category: "branding",
      categoryLabel: "Branding & Identity",
      tags: ["Brand Identity", "Logo Design", "Typography Guidelines", "Color System", "E-Commerce UI", "Packaging Strategy"],
      featured: true,
      coverImage: "assets/projects/branding/noble wholesale/noble_01_hero_brandmark.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/branding/noble wholesale/noble_wholesale_full_case_study.jpg", caption: "Noble Wholesale — Complete Brand Identity & Digital Platform Case Study" },
        { type: "image", src: "assets/projects/branding/noble wholesale/noble_01_hero_brandmark.jpg", caption: "Noble Wholesale — Brandmark & 3D Isometric Eco-City Environment" },
        { type: "image", src: "assets/projects/branding/noble wholesale/noble_02_logo_concept_geometry.jpg", caption: "Logo Concept & Geometric Construction Formula (Leaf Purity + Rectangle Stability)" },
        { type: "image", src: "assets/projects/branding/noble wholesale/noble_03_typography_color_system.jpg", caption: "Brand Typography Suite (Letter Magic & Gill Sans MT) and Color Palette" },
        { type: "image", src: "assets/projects/branding/noble wholesale/noble_04_ecommerce_web_platform.jpg", caption: "Modern E-Commerce Marketplace Web Banner (THCP Infused Gummies 15000MG)" },
        { type: "image", src: "assets/projects/branding/noble wholesale/noble_05_elevated_bliss_campaign.jpg", caption: "'Enter the World of Elevated Bliss' — Fantasy Realm Campaign & Product Suite" }
      ],
      summary: "Comprehensive brand identity, logo geometric design system, color guidelines, and e-commerce marketplace UI created for Noble Wholesale.",
      description: "Noble Wholesale is a modern online marketplace, just like Myntra, where customers can easily explore and purchase a wide selection of wellness, lifestyle, and premium recreational products. Featuring exclusive lines like Flying Horse, Noble Wholesale offers trusted gummies, vapes, medicinal flowers, diamonds, and relaxation products, all curated for safety and quality.\n\nLOGO CONCEPT & GEOMETRIC FORMULA:\n• The Noble Wholesale logo blends a stylized leaf with elegant green and gold typography, symbolizing freshness, growth, and a premium brand experience.\n• Leaf: Symbolizes natural wellness, botanical purity, and certified organic quality.\n• Rectangle: Represents stability, trust, corporate reliability, and professionalism.\n• The flowing typography communicates approachability and transparency.\n\nTYPOGRAPHY & COLOR SYSTEM:\n• Primary Display Font: Letter Magic (Artisanal, modern luxury display)\n• Body & Interface Font: Gill Sans MT (Clean, legible corporate sans-serif)\n• Palette: Cream Silk (#FEFAE6), Gold Glow (#F9EA72), Imperial Amber (#F9B601), Fresh Emerald (#32D170), Deep Forest Jade (#174B37), and Obsidian Pine (#0D3520).\n\nDIGITAL TOUCHPOINTS:\n• E-Commerce Web Marketplace Portal featuring dynamic 3D product renders.\n• 'Enter the World of Elevated Bliss' surreal fantasy campaign presentation.",
      deliverables: ["Brand Identity & Visual System", "Logo Geometric Construction", "Typography & Color Guidelines", "E-Commerce Web Portal Banners", "Commercial Campaign Visuals", "Brand Assets & Guidelines"],
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    },

    // --- 9. DAKSHIN VRINDAVAN 360° MEDIA CAMPAIGN ---
    {
      id: "dakshin-vrindavan-campaign",
      title: "Dakshin Vrindavan — 360° Media Campaign",
      client: "Dakshin Vrindavan",
      year: "2024",
      category: "social-media",
      categoryLabel: "360° Media Campaign",
      tags: ["360° Campaign", "Brand Storytelling", "Editorial & Print", "Outdoor Hoardings", "Newspaper Ads", "Stationery & Calendars", "Social Media Creatives"],
      featured: true,
      coverImage: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_01.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_01.jpg", caption: "Dakshin Vrindavan — Brand Identity & Traditional Typography" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_02.jpg", caption: "Brand Narrative, Cultural Purpose & Indigenous Cow Concept" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_03.jpg", caption: "Traditional Illustrative Poster Series — Cultural Storytelling" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_04.jpg", caption: "Framed Gallery Art Prints Mockup — Architectural Wall Display" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_05.jpg", caption: "Large-Format Outdoor Hoarding Artwork — 'Care for Cows'" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_06.jpg", caption: "Highway Unipole Billboard Mockup — Outdoor Awareness" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_07.jpg", caption: "Editorial Magazine Spread & Informative Feature Article" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_08.jpg", caption: "Editorial Lifestyle Magazine Open Spread Mockup" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_09.jpg", caption: "National Newspaper Advertisement — Full-Page Print Layout" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_10.jpg", caption: "National Newspaper Print Ad — Morning Reading Scene Mockup" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_11.jpg", caption: "Custom Desk Calendar Architecture & Monthly Layouts" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_12.jpg", caption: "Desk Calendar & Monthly Planner Stationery Scene Mockup" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_13.jpg", caption: "Traditional Greeting Postcards & Invitation Card Designs" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_14.jpg", caption: "Greeting Postcards Stationery Scene Mockup" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_15.jpg", caption: "Tri-Fold Narrative Brochure Architecture & Vector Dielines" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_16.jpg", caption: "Tri-Fold Visitor & Sponsorship Brochure Mockup" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_17.jpg", caption: "Targeted Instagram Carousel Ad Campaign Post" },
        { type: "image", src: "assets/projects/dakshin-vrindavan/behance-dakshin-vrindavan_18.jpg", caption: "Multi-Screen Mobile Social Feed Showcase Mockup" }
      ],
      summary: "A comprehensive 360-degree brand storytelling and integrated media campaign for Dakshin Vrindavan, spanning traditional folk illustrations, large-format outdoor billboards, national newspaper print ads, editorial brochures, desk calendars, and social media carousels.",
      description: "Dakshin Vrindavan is dedicated to the preservation, protection, and welfare of indigenous cows through sacred Gau Seva, sustainable Vedic farming, and rural cultural heritage.\n\nCAMPAIGN OBJECTIVE & CONCEPT:\nConceptualized and executed a holistic 360° media campaign designed to evoke deep emotional resonance, cultural pride, and community awareness for Dakshin Vrindavan's mission.\n\n360° CAMPAIGN TOUCHPOINTS:\n• Heritage Logo & Folk Illustration: Hand-crafted traditional Indian folk art style depicting the sacred bond between people and indigenous cows with warm earthy ochre, terracotta, and teal palettes.\n• Framed Art Prints & Posters: High-impact illustrative posters for community centers and cultural events.\n• Large-Format Outdoor Hoarding: Highway billboard campaign featuring heartwarming Gau Seva storytelling.\n• Editorial Magazine & Pamphlet: Informative multi-page editorial spread on cow welfare and Vedic traditions.\n• National Newspaper Advertisement: Full-page print advertisement formatted for prominent dailies.\n• Desk Calendars & Stationery: Custom-designed annual desk calendars, postcards, and greeting stationery.\n• Tri-Fold Narrative Brochure: Complete visitor guide and sponsorship brochure.\n• Social Media & Digital Ads: Targeted Instagram carousels and conversion creatives.",
      deliverables: ["360° Campaign Strategy", "Traditional Folk Illustrations", "Large-Format Billboard Hoardings", "Newspaper Print Advertisements", "Editorial Magazine Spreads", "Desk Calendar & Stationery", "Tri-Fold Narrative Brochure", "Social Media Ad Creatives"],
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"]
    },

    // --- 9. SPICE STORY 360° MEDIA CAMPAIGN ---
    {
      id: "spice-story-360-campaign",
      title: "Spice Story — 360° Media Campaign",
      client: "Spice Story",
      year: "2024",
      category: "social-media",
      categoryLabel: "360° Media Campaign",
      tags: ["360° Campaign", "Character Design", "Folk Art & Culture", "Poster Campaign", "Outdoor Transit Ads", "Brand Storytelling"],
      coverImage: "assets/projects/spice-story/behance-spice-story_01.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_01.jpg", caption: "Spice Story — Heritage Mandala Brandmark & Identity" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_02.jpg", caption: "Brand Narrative & Regional Flavours Storytelling Breakdown" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_03.jpg", caption: "Character Design — Regional Indian Classical & Folk Dancers" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_04.jpg", caption: "Regional Chutney Poster Series — Punjab, Southern India & Bengal" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_05.jpg", caption: "Outdoor Transit & Metro Subway Backlit Lightbox Displays Mockup" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_06.jpg", caption: "Print Magazine Advertisements — Madras & Gujarat" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_07.jpg", caption: "Editorial Lifestyle Magazine Open Spread Mockup — Gujarat" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_08.jpg", caption: "Large-Format Outdoor Hoardings — Bombay (Mint & Chilli) & Banaras (Sweet & Tangy)" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_09.jpg", caption: "Highway Unipole Billboard Mockup — 'Dip Into the Sweetness and Tanginess of Banaras'" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_10.jpg", caption: "Transit Advertising — City Bus Full Side Panel Wrap (Bengal)" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_11.jpg", caption: "City Bus Transit Wrap — Dynamic Perspective View Mockup" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_12.jpg", caption: "Street Pole Kiosk Print Layout — Punjab (Chillie & Chatpata)" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_13.jpg", caption: "Urban Street Pole Kiosk Digital Billboard Mockup (Punjab)" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_14.jpg", caption: "Social Media Campaign Post — 'Dip Into the Sweetness and Spicy Twist of Gujarat'" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_15.jpg", caption: "Social Media Campaign Overview & Multi-Post Presentation" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_16.jpg", caption: "E-Commerce Web Page Layout Slide — Madras Chutney Suite" },
        { type: "image", src: "assets/projects/spice-story/behance-spice-story_17.jpg", caption: "E-Commerce Website UI & Shark Tank India Featured Browser Window Mockup" }
      ],
      summary: "A vibrant 360-degree cultural advertising campaign for Spice Story connecting people to regional Indian chutney flavours through custom classical dance character illustrations, highway billboards, city bus wraps, e-commerce UI, magazine spreads, and transit lightboxes.",
      description: "Spice Story is known for offering India's widest range of spicy, zesty, and fun-filled chutneys—each one crafted to bring new excitement and flavours to every meal and snack. The brand captures the tangy culture and sweet traditions of kitchens across India, presenting chutneys with unique twists that always surprise and delight.\n\nCONCEPT & IDEATION:\nStarting with this foundation, my ideation focused on connecting people to their home state's flavours—even when away. I designed the campaign around state-wise chutneys and infused each visual with iconic dance characters, making local culture feel alive.\n\n360° MULTI-CHANNEL MEDIA EXECUTION:\n• Character Design: Custom hand-drawn illustrations of iconic regional dancers—energetic Bhangra for Punjab's fiery chatpata chutney, vibrant Kathakali for South India's spicy-tangy dip, Garba/Dandiya for Gujarat's sweet & spicy twist, Lavani/Koli for Bombay mint & chilli, and traditional Bengali attire for eastern tang.\n• Highway Unipole Billboards: Eye-catching large-format outdoor billboards placed along major highways and commuter corridors.\n• Public Transit Advertising: High-impact full side-panel bus wraps bringing colorful regional storytelling to city streets.\n• Street Pole Kiosks & Metro Lightboxes: Sleek illuminated street digital kiosks and subway backlit displays across high-footfall corridors.\n• E-Commerce Website UI & Shark Tank India Banners: High-converting landing page hero banners and web store promotional layouts.\n• Editorial & Magazine Print Ads: High-end lifestyle magazine spreads and full-page culinary advertisements (Madras & Gujarat).\n• Regional Poster Campaign: Collector's edition cultural poster series exploring the flavors of India.\n• Outcome: The campaign unified diverse cultural aesthetics into a cohesive 360° commercial experience, celebrating the joy and familiarity of Indian culinary traditions in every touchpoint.",
      deliverables: ["360° Advertising Strategy", "Custom Character Illustrations", "Highway Unipole Billboard Architecture", "City Bus Transit Wraps", "Street Pole Kiosks & Metro Lightboxes", "E-Commerce Website UI & Banners", "Magazine Editorial Spreads", "Regional Poster Campaigns", "Brand Identity"],
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma"]
    },

    // --- 10. RE-COCO SUGANDHI DHOOP ---
    {
      id: "recoco-sugandhi-dhoop-packaging",
      title: "Re-Coco Sugandhi Dhoop Packaging & Labeling",
      client: "Re-Coco Innovations",
      year: "2024",
      category: "product-design",
      categoryLabel: "Product & Packaging Design",
      tags: ["Packaging Design", "Label Artwork", "Eco-Friendly", "Botanical Art", "3D Mockup"],
      featured: true,
      coverImage: "assets/projects/product design/recoco_sugandhi_dhoop_mockup.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/product design/recoco_sugandhi_dhoop_mockup.jpg", caption: "Re-Coco Sugandhi Dhoop Photorealistic Studio Mockup" },
        { type: "image", src: "assets/projects/product design/dhoop label mockup.jpg", caption: "Eco Kraft Pouch Product Mockup" },
        { type: "image", src: "assets/projects/product design/dhoop label1.jpg", caption: "Front Arch Motif & Typography Artwork" },
        { type: "image", src: "assets/projects/product design/dhoop label2.jpg", caption: "Back Label & Product Narrative Artwork" }
      ],
      summary: "Artisanal sustainable packaging and label artwork combining sacred Indian motifs with clean eco-friendly craft aesthetics for Re-Coco.",
      description: "Designed a holistic eco-friendly product packaging and label artwork suite for Re-Coco Sugandhi Dhoop made from recycled green coconut waste.\n\nThe aesthetic blends warm earthy craft textures with intricate traditional Indian arch motifs, creating an aura of serenity, spiritual purification, and natural sustainability.",
      deliverables: ["Product Label & Pouch Artwork", "Eco Kraft Pouch Design", "Photorealistic 3D Scene Rendering", "Print-Ready Vector Production Dielines"],
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    },

    // --- 9. KWALITY SWEETS ---
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

    // --- SOCIAL MEDIA & META ADS ---
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
      id: "recoco-innovations-campaign",
      title: "Re-Coco Social Media Campaign",
      client: "Re-Coco Innovations",
      year: "2025",
      category: "social-media",
      categoryLabel: "Social Media Design",
      tags: ["Social Media Design", "Sustainability", "Product Creatives", "Campaign Design", "Brand Visuals"],
      featured: true,
      coverImage: "assets/projects/social media post/Re -coco/Artboard 19.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 19.jpg", caption: "Sustainable Lamp Product Showcase" },
        { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 23.jpg", caption: "Eco-Friendly Brand Story" },
        { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 24.jpg", caption: "Repurposed Coconut Waste Narrative" },
        { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 7.jpg", caption: "Warm Ambient Lighting Post" },
        { type: "image", src: "assets/projects/social media post/Re -coco/Artboard 8.jpg", caption: "Eco Home Decor Product Feature" }
      ],
      summary: "A creative social media campaign designed for Re-Coco, focusing on its eco-friendly products and sustainable approach to repurposing coconut waste.",
      description: "A creative social media campaign designed for Re-Coco, focusing on its eco-friendly products and sustainable approach to repurposing coconut waste. The campaign aimed to communicate sustainability through clean, engaging, and visually appealing social media content.\n\nCreative Approach:\nCreated a cohesive series of Instagram posts combining product-focused visuals, informative content, strong typography, and earthy aesthetics. Each design was developed to highlight Re-Coco’s products while making the brand’s sustainability message easy to understand and visually memorable.",
      deliverables: ["Instagram Posts", "Product Promotional Creatives", "Educational Content", "Social Media Campaign Graphics", "Brand-Focused Visuals"],
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
      coverImage: "assets/projects/social media post/US CLIENT/LED TRUCK/dat_event_stadium_truck.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/saddleman_monday_to_sunday_lifestyle_carousel.jpg", caption: "Saddleman All-Weather Seat Covers — 'Monday to Sunday' Seamless Lifestyle Swipe Carousel (6 Panels)" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/dat_event_stadium_truck.jpg", caption: "DAT Media — Stadium Event Mobile LED Billboard Ad" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/dat_get_seen_spotlight_truck.jpg", caption: "DAT Media — 'Get Seen. Get Remembered. Get Results' Spotlight Campaign" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/saddleman_made_in_america.jpg", caption: "Saddleman — 'Made in America Built to Last' Truck Campaign" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/saddleman_protection_personality.jpg", caption: "Saddleman — 'Protection Meets Personality' Style Showcase" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 2.jpg", caption: "LED Digital Truck Mobile Billboard 1" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 3.jpg", caption: "LED Digital Truck Mobile Billboard 2" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/LED TRUCK/Artboard 4.jpg", caption: "Night-Mode High-Contrast Billboard" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/Artboard 1.jpg", caption: "Car Seat Cover Feature Graphic 1" },
        { type: "image", src: "assets/projects/social media post/US CLIENT/CAR SEAT COVER/Artboard 2.jpg", caption: "Car Seat Cover Feature Graphic 2" }
      ],
      summary: "International large-format LED mobile truck billboard designs and automotive accessories ad campaign for US market.",
      description: "Designed ultra-crisp, high-contrast outdoor LED truck billboard creatives for United States metropolitan advertising. Formatted to read instantly from long distances under both harsh daytime sunlight and vibrant night lighting.",
      deliverables: ["OOH Digital Billboard Layouts", "LED Display Specs", "Automotive Social Ad Set"],
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: "salon-dermate-aesthetics",
      title: "Dermate Clinic & Shape & Shine — Aesthetics & Wellness Social Media Suite",
      client: "Dermate Clinic & Salon × Shape & Shine Aesthetics",
      year: "2024–2025",
      category: "social-media",
      categoryLabel: "Aesthetics & Wellness Creatives",
      tags: ["Clinical Aesthetics", "Dermatology", "Wellness & Spa", "Social Ads", "Infographics"],
      featured: false,
      coverImage: "assets/projects/social media post/Salon and dermate/shape_shine_botox_treatment.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/Salon and dermate/shape_shine_botox_treatment.jpg", caption: "Botox & Anti-Aging Treatment — Shape & Shine Aesthetics Campaign" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/shape_shine_why_botox.jpg", caption: "'Why Botox?' Clinical Benefits Infographic — Shape & Shine" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/shape_shine_body_therapy.jpg", caption: "Body Therapy for Total Wellness — Shape & Shine Luxury Spa & Clinic" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 1.jpg", caption: "Hair Density Restoration Hero Creative — Dr. Shikha Mandloi Jain (Dermate Clinic)" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 22.jpg", caption: "Laser Skin Therapy & Pigmentation Promo Banner" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 24.jpg", caption: "Laser Hair Removal Seasonal Offer Flyer" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 4.jpg", caption: "Clinical Acne & Dark Spot Treatment Infographic" },
        { type: "image", src: "assets/projects/social media post/Salon and dermate/Artboard 5.jpg", caption: "HydraFacial Glow Treatment & Medical Dermatology Insight" }
      ],
      summary: "Crisp, clinical-yet-luxurious social presence and marketing creatives for premium skincare clinics, medical aesthetics, and luxury wellness centers.",
      description: "Created clean, professional visual assets and advertising creatives for aesthetic dermatologists and wellness spas (Dermate Clinic & Salon and Shape & Shine).\n\nBalanced medical trust with salon luxury through clean typography, reassuring soft tones, high-fashion portraiture, and structured service benefit infographics.",
      deliverables: ["Clinical Treatment Posts", "Medical Aesthetics Infographics", "Anti-Aging & Wellness Campaigns", "Social Story Offers & Leaflets"],
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: "real-estate-sarla-royal",
      title: "Sarla Royal — Real Estate Brochure & Social Media Post",
      client: "Sarla Royal Properties",
      year: "2024",
      category: "social-media",
      categoryLabel: "Social Media & Ads",
      tags: ["Real Estate", "Brochure Design", "Social Media Post", "Architectural Ad", "Luxury Living"],
      featured: false,
      coverImage: "assets/projects/social media post/Real estate/sarla_royal_vision_reality.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/Real estate/sarla_royal_vision_reality.jpg", caption: "Sarla Royal — 'Where Vision Meets Reality' Campaign Creative" },
        { type: "image", src: "assets/projects/social media post/Real estate/sarl royal brochure.jpg", caption: "Architectural Property Brochure Layout" },
        { type: "image", src: "assets/projects/social media post/Real estate/1.jpg", caption: "Luxury Apartment Launch Creative" },
        { type: "image", src: "assets/projects/social media post/Real estate/2.jpg", caption: "Amenities & Floor Plan Overview" },
        { type: "image", src: "assets/projects/social media post/Real estate/real state1.png", caption: "Investor ROI Social Banner" }
      ],
      summary: "Architectural marketing collateral, luxury property brochure, and social media campaigns for Sarla Royal premium residential developments.",
      description: "Delivered high-impact promotional creatives and multi-page marketing collateral for Sarla Royal luxury duplex homes and residential developments.\n\nHandled architectural concept-to-reality visualization, amenity highlights (lush gardens, gym, yoga deck, splash pool), and prestigious typography tailored for affluent homebuyers.",
      deliverables: ["Real Estate Social Media Posts", "Multi-Page Property Brochure", "Architectural 3D Visuals", "Meta Ads & Hoardings"],
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"]
    },
    {
      id: "sweet-stories-campaign",
      title: "Sweet Stories — Food & Festive Social Media Campaign",
      client: "Kwality Sweets × Sugar Rush & Shree Sweets",
      year: "2024–2025",
      category: "social-media",
      categoryLabel: "Social Media & Ads",
      tags: ["Food & Beverage", "Bakery & Sweets", "Social Media", "Festive Marketing", "Creative Direction"],
      featured: false,
      coverImage: "assets/projects/social media post/Sweet stories/sweet_stories_marble_cake.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/Sweet stories/kwality_strawberry_swiss_roll_carousel.jpg", caption: "Strawberry Cloud Swiss Roll — Seamless Multi-Panel Confectionery Swipe Carousel" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/shree_sweets_apple_mithai_carousel.jpg", caption: "Royal Apple Mawa Mithai Festive Feast — Seamless Panorama Presentation Carousel" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_marble_cake.jpg", caption: "Marble Cake Creative with Hand-Drawn Doodle Characters — Sugar Rush × Kwality Sweets" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_chocolate_cream_roll.jpg", caption: "Chocolate Overload Cream Roll — Family Lifestyle Social Campaign Post" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_vanilla_cream_roll.jpg", caption: "Sharing Starts with a Vanilla Cream Roll — Editorial Social Ad Post" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_royal_ghewar.jpg", caption: "Royal Ghewar 'Made to Celebrate' — Festive Pistachio Garnish Shoot" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_pheni_tradition.jpg", caption: "Crispy Pheni Celebration Shoot on Antique Brass Platter — Kwality Sweets" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_marshmallow_treat.jpg", caption: "'Your Friendly Neighbourhood Marshmallow Treat' — Spidey-Themed Web Pop" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_muffin_moments.jpg", caption: "Muffin Moments Skyfall Conceptual Poster — Sugar Rush × Kwality Sweets" },
        { type: "image", src: "assets/projects/social media post/Sweet stories/sweet_stories_papdi_chaat.jpg", caption: "Indore Street Special Papdi Chaat — Shree Sweets Savoury Menu Post" },
        { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 35.jpg", caption: "Diwali Special Sweet Assortment — Shree Sweets Traditional Campaign" },
        { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 39.jpg", caption: "Authentic Ghee Sweets & Traditional Mithai Showcase" },
        { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 40.jpg", caption: "Festive Pre-Order Campaign Post" },
        { type: "image", src: "assets/projects/social media post/Shree sweets/Artboard 48.jpg", caption: "Grand Festival Celebration Poster" }
      ],
      summary: "Creative social media campaign showcasing traditional sweets, bakery products, and savoury offerings through vibrant food visuals and engaging brand storytelling.",
      description: "A visually driven social media campaign created for multiple sweet and food brands, combining premium food photography, creative compositions, festive aesthetics, and contemporary typography. The campaign focuses on transforming traditional products into engaging digital content while maintaining strong product appeal and brand identity.",
      deliverables: ["Social Media Posts", "Product Campaigns", "Festive Creatives", "Lifestyle & Promotional Content", "Food Product Visuals"],
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: "nexgen-aqua-purity",
      title: "Nexgen Aqua Water Purification Campaign",
      client: "Nexgen Aqua Solutions",
      year: "2024",
      category: "social-media",
      categoryLabel: "Social Media & Ads",
      tags: ["Product Campaign", "Clean Aesthetic", "Social Ads", "Infographic", "Creative Direction"],
      featured: false,
      coverImage: "assets/projects/social media post/Nexgen aqua/nexgen_hard_water_monster_shield.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/Nexgen aqua/nexgen_hard_water_monster_shield.jpg", caption: "When Hard Water Strikes, NexGen Aqua Stands Guard — Hero Campaign Creative" },
        { type: "image", src: "assets/projects/social media post/Nexgen aqua/nexgen_tap_scaling_damage.jpg", caption: "The Problem Looks Small, The Damage Isn't — Tap Scaling Awareness Post" },
        { type: "image", src: "assets/projects/social media post/Nexgen aqua/nexgen_hard_to_soft_water_splash.jpg", caption: "From Hard Water to Soft Water — Dynamic Water Splash Conditioner Feature" },
        { type: "image", src: "assets/projects/social media post/Nexgen aqua/nexgen_satisfaction_soft_water.jpg", caption: "100% Satisfaction Guaranteed — Clean Soft Water Promise" }
      ],
      summary: "High-impact visual advertising campaign for Nexgen Aqua Water Conditioner, combating hard water damage with creative storytelling and striking product manipulation.",
      description: "Conceptualized and designed high-converting social media creatives and print graphics for Nexgen Aqua Natural Water Conditioner.\n\nCAMPAIGN HIGHLIGHTS:\n• 'Hard Water Monster' Concept: Dramatic visual manipulation pitting a resilient guardian shield against a towering hard water mineral monster.\n• Problem vs Damage Awareness: Microscopic zoom infographic demonstrating pipe scale corrosion and faucet damage.\n• Hard vs Soft Water Dynamics: High-energy fluid splash graphics highlighting appliance longevity and healthier living.\n• Brand Trust & Quality Seal: Polished sky-blue satisfaction showcase highlighting certified performance.",
      deliverables: ["High-Impact Social Creatives", "Product Feature Infographics", "Concept Visual Manipulation", "Campaign Ad Variations"],
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: "dr-specialist-healthcare-campaign",
      title: "Doctor & Healthcare Specialists — Clinical Social Media Suite",
      client: "Dr. Ankesh Gupta (AIIMS) × Dr. Tanu Soni (MRCOG)",
      year: "2024–2025",
      category: "social-media",
      categoryLabel: "Healthcare & Clinical Creatives",
      tags: ["Healthcare Marketing", "Medical Infographics", "Doctor Branding", "Patient Awareness", "Clinical Creatives"],
      featured: false,
      coverImage: "assets/projects/social media post/Doctor clients/dr_ankesh_fever_types_awareness.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/Doctor clients/dr_tanu_soni_pelvic_floor_health_carousel.jpg", caption: "Pelvic Floor Strengthening & Women's Health Habits — Seamless Multi-Slide Educational Carousel (Dr. Tanu Soni)" },
        { type: "image", src: "assets/projects/social media post/Doctor clients/dr_ankesh_fever_types_awareness.jpg", caption: "Not All Fevers Are the Same — Infectious Disease Awareness Post (Dr. Ankesh Gupta, AIIMS)" },
        { type: "image", src: "assets/projects/social media post/Doctor clients/dr_tanu_soni_pcos_fit_check.jpg", caption: "PCOD / PCOS Fit Check & Fertility Myth Busting — Dr. Tanu Soni (MRCOG, FMAS)" },
        { type: "image", src: "assets/projects/social media post/Doctor clients/dr_ankesh_typhoid_specialist_myths.jpg", caption: "Typhoid Specialist — Clinical Myth vs Fact Infographic (Dr. Ankesh Gupta)" },
        { type: "image", src: "assets/projects/social media post/Doctor clients/dr_tanu_soni_severe_period_pain.jpg", caption: "Severe Period Pain Isn't 'Just Normal' — Women's Health & Dysmenorrhea Awareness (Dr. Tanu Soni)" },
        { type: "image", src: "assets/projects/social media post/Doctor clients/dr_ankesh_bone_infection_osteomyelitis.jpg", caption: "Post-Surgery Bone Pain & Osteomyelitis Care — Bilingual Medical Infographic (Dr. Ankesh Gupta)" }
      ],
      summary: "Professional healthcare social media campaigns and medical awareness infographics designed for leading specialist doctors, bridging complex clinical knowledge with clear, empathetic patient communication.",
      description: "Conceptualized and designed patient-centric healthcare social media campaigns for prominent medical specialists—Dr. Ankesh Gupta (Infectious Diseases Specialist, AIIMS New Delhi / Choithram Hospital) and Dr. Tanu Soni (Consultant Obstetrician, Gynaecologist & Laparoscopic Surgeon, MRCOG UK, FMAS).\n\nKEY CAMPAIGN HIGHLIGHTS:\n• Clinical Authority & Trust: Clean, clinical color palettes, authoritative medical typography, and prominent credentials establishing instant practitioner credibility.\n• Myth vs. Fact Infographics: High-engagement visual debunking of common health misconceptions around Typhoid, Viral Fevers, and PCOS/PCOD fertility.\n• 3D Anatomical & Microscopic Visuals: Accurate anatomical illustrations and 3D bacterial cell models making complex symptoms easily understandable for patients.\n• Empathy-Driven Women's Health: Compassionate visual communication breaking stigmas around chronic pelvic pain, dysmenorrhea, and reproductive wellness.\n• Clear Call-to-Action: Strategically structured OPD consultation cards and clinic helpline routing.",
      deliverables: ["Medical Social Media Posts", "Patient Awareness Infographics", "Doctor Personal Branding", "Bilingual Health Creatives", "Myth-Busting Carousels"],
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: "the-simbolo-digital-marketing-campaign",
      title: "The Simbolo — Digital Marketing & Creative Agency Campaign",
      client: "The Simbolo Multimedia",
      year: "2024–2025",
      category: "social-media",
      categoryLabel: "Agency & Digital Marketing Creatives",
      tags: ["Digital Marketing", "Agency Branding", "Visual Metaphors", "Photo Manipulation", "Creative Direction"],
      featured: false,
      coverImage: "assets/projects/social media post/The Simbolo/simbolo_burj_khalifa_rocket.jpg",
      mediaType: "image",
      media: [
        { type: "image", src: "assets/projects/social media post/The Simbolo/simbolo_panoramic_marketing_carousel.jpg", caption: "Marketing Is Full Of Surprises — 360° Agency Growth Strategy Seamless Swipe Carousel" },
        { type: "image", src: "assets/projects/social media post/The Simbolo/simbolo_burj_khalifa_rocket.jpg", caption: "Standing Tall Isn't Enough Anymore — Burj Khalifa Rocket Launch Concept" },
        { type: "image", src: "assets/projects/social media post/The Simbolo/simbolo_build_your_brand_birds.jpg", caption: "Build Your Brand — Levitating Brick & Flight Surreal Visual Metaphor" },
        { type: "image", src: "assets/projects/social media post/The Simbolo/simbolo_kick_out_competitors_boxing.jpg", caption: "Time to Kick Out Your Competitors — Championship Boxing Ring Ad" },
        { type: "image", src: "assets/projects/social media post/The Simbolo/simbolo_score_success_football.jpg", caption: "Score Your Success with Smart Marketing — Goal Post Action Shoot" },
        { type: "image", src: "assets/projects/social media post/The Simbolo/simbolo_one_partner_endless_possibilities.jpg", caption: "One Partner. Endless Possibilities — Strategic Growth Handshake" }
      ],
      summary: "Conceptual agency social media campaign employing powerful visual metaphors, surreal photomanipulation, and punchy copywriting to drive brand acceleration.",
      description: "Designed an impactful self-promotional digital marketing campaign for The Simbolo Multimedia Agency, transforming abstract business growth concepts into unforgettable visual metaphors.\n\nCREATIVE CONCEPTS & EXECUTION:\n• 'Standing Tall Isn't Enough Anymore': Reimagined the world's tallest skyscraper (Burj Khalifa) launching like a rocket with fiery thrusters and volumetric smoke plumes, symbolizing hyper-growth and innovation.\n• 'Build Your Brand': Surreal composition of birds lifting a foundational masonry brick into place, symbolizing agile teamwork and structural elevation.\n• 'Kick Out Your Competitors': High-contrast boxing knockout perspective illustrating aggressive market dominance and conversion-driven strategy.\n• 'Score Your Success': High-speed sports photography capture of a top-corner goal, demonstrating precision targeting and impactful ROI.\n• 'One Partner, Endless Possibilities': Bold, modern partnership graphic emphasizing comprehensive 360° creative solutions.",
      deliverables: ["Conceptual Visual Metaphors", "Advanced Photo Manipulation", "Agency Social Media Posts", "High-Impact Ad Copy Integration", "Meta & LinkedIn Banners"],
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: "vestar-motion-graphics",
      title: "Vestar — Brand Motion Graphics & Kinetic Commercial Reel",
      client: "Vestar",
      year: "2024–2025",
      category: "social-media",
      categoryLabel: "Motion Graphics & Video",
      tags: ["Motion Graphics", "Kinetic Typography", "Video Editing", "Sound Design", "Brand Animation"],
      featured: true,
      coverImage: "assets/projects/motion graphics/vestar_poster.jpg",
      mediaType: "video",
      videoSrc: "assets/projects/motion graphics/vestar.mp4",
      media: [
        { type: "video", src: "assets/projects/motion graphics/vestar.mp4", caption: "Vestar — Official Commercial Motion Graphics & Kinetic Typography Showcase" },
        { type: "image", src: "assets/projects/motion graphics/vestar_poster.jpg", caption: "Vestar Motion Identity — Visual Direction & Graphic Composition" }
      ],
      summary: "Dynamic commercial motion graphics video and kinetic typography animation created for Vestar, blending high-energy visual rhythm with sound design.",
      description: "Conceptualized, animated, and edited a high-impact commercial motion graphics showcase for Vestar.\n\nKEY HIGHLIGHTS & ANIMATION WORKFLOW:\n• Kinetic Typography & Motion Rhythm: Choreographed typographic transitions and smooth easing curves synchronized precisely with dynamic audio beats.\n• Brand Motion Language: Developed bespoke motion guidelines featuring fluid shape morphing, volumetric lighting, and modern kinetic layouts.\n• Sound Design & Grading: Integrated atmospheric sound effects, bass drops, and custom color grading for maximum cinematic punch.",
      deliverables: ["Commercial Motion Graphics Video", "Kinetic Typography Animations", "Sound Design & Audio Synchronization", "Social Media Video Cutdowns"],
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"]
    },
    {
      id: "podcast-reels-video-editing",
      title: "Podcast & Short-Form Video Reels Suite — Multi-Client Edits",
      client: "Various Clients (Studio Podcast, Astrologer Monika, Digital Platform & Social Media Agency)",
      year: "2024–2025",
      category: "social-media",
      categoryLabel: "Podcast & Short-Form Video Editing",
      tags: ["Podcast Video Editing", "Short-Form Reels", "Kinetic Captions", "Sound Design", "Pacing & Storytelling"],
      featured: true,
      coverImage: "assets/projects/video editing/podcast_man_cover.jpg",
      mediaType: "video",
      videoSrc: "assets/projects/video editing/podcast_interview_reel.mp4",
      media: [
        { type: "video", src: "assets/projects/video editing/podcast_interview_reel.mp4", caption: "Client 1: In-Studio Podcast & Thought-Leadership Interview Reel (Dynamic Multi-Cam Pacing & Sound Bites)" },
        { type: "video", src: "assets/projects/video editing/social_media_agency_reel.mp4", caption: "Client 2: Social Media Agency Commercial Showcase Reel (High-Pace Visual Rhythm & Sound FX)" },
        { type: "video", src: "assets/projects/video editing/digital_platform_promo_reel.mp4", caption: "Client 3: Digital Platform & Web Product Promo Video (Sleek UI Motion & Seamless Transitions)" },
        { type: "video", src: "assets/projects/video editing/astrologer_monika_podcast_reel.mp4", caption: "Client 4: Astrologer Monika — High-Engagement Short-Form Video Reel (Kinetic Captions & B-Roll)" }
      ],
      summary: "Professional post-production suite for high-retention podcast video edits, viral short-form reels, and commercial promotional videos across diverse clients.",
      description: "Conceptualized, paced, and edited high-engagement video reels and studio podcast episodes for diverse brands and creators.\n\nPOST-PRODUCTION & EDITING HIGHLIGHTS:\n• Multi-Cam Podcast Pacing: Edited full interview dialogues with seamless punch-in camera switches, ambient noise reduction, and crisp voice equalization.\n• High-Retention Short-Form Hooks: Engineered the first 3-second hook with motion titles, dynamic text popups, and kinetic sound effects to maximize viewer watch-time.\n• Animated Typography & Word-by-Word Captions: Crafted custom-styled subtitles styled to the creator's brand identity with highlight effects.\n• Motion B-Roll & Visual Accents: Integrated relevant stock overlays, screen recordings, sound effects, and color grading for a polished broadcast finish.",
      deliverables: ["In-Studio Podcast Video Cuts", "Viral Short-Form Reels (9:16)", "Kinetic Subtitles & Sound Design", "Multi-Cam Editing & Audio Mastering", "Commercial Promo Cutdowns"],
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Audition", "Adobe Photoshop"]
    }
  ];

  /* ==========================================================================
     2. EXPERIENCE & SKILLS DATA
     ========================================================================== */
  const experienceData = [
    {
      period: "2026 — Present",
      role: "Senior Graphic Designer",
      company: "The Simbolo Multimedia",
      location: "Indore, India",
      type: "Full-Time",
      description: "Leading visual design and creative direction across branding, packaging, and digital ad campaigns.",
      highlights: [
        "Brand identity systems & structural packaging dielines.",
        "High-converting Meta ad creatives and social campaigns."
      ]
    },
    {
      period: "2025",
      role: "Creative Graphic & Video Designer",
      company: "Digihakk",
      location: "Indore, India",
      type: "Agency",
      description: "Created high-engagement podcast reels, animated brand assets, and multi-platform marketing visuals.",
      highlights: [
        "Edited podcast reels and short-form video content.",
        "Designed high-retention social media visual systems."
      ]
    },
    {
      period: "2024 — 2025",
      role: "Graphic & Motion Design Intern",
      company: "Aspirant Infotech",
      location: "Indore, India",
      type: "Internship",
      description: "Produced motion graphics, corporate video reels, and brand marketing collateral for tech clients.",
      highlights: [
        "Created motion design and product explainer videos.",
        "Designed digital marketing creatives and pitch decks."
      ]
    },
    {
      period: "2022 — 2024",
      role: "Freelance Graphic Designer",
      company: "Independent Practice",
      location: "Indore, India",
      type: "Freelance",
      description: "Delivered custom brand identities, packaging design, and social media campaigns for independent brands.",
      highlights: [
        "Full branding suites, logo systems, and packaging design.",
        "End-to-end creative direction and client delivery."
      ]
    }
  ];

  const skillsData = {
    coreCompetencies: [
      { name: "Brand Identity Design", level: 95 },
      { name: "Social Media & Meta Ads", level: 96 },
      { name: "Product & Packaging Design", level: 92 },
      { name: "Motion Graphics & Animation", level: 88 },
      { name: "Poster & Editorial Layout", level: 94 },
      { name: "Illustration & Vector Art", level: 90 },
      { name: "Advertising & Marketing Design", level: 95 },
      { name: "Video Editing & Color Grading", level: 89 }
    ],
    tools: [
      { name: "Adobe Illustrator", category: "Vector & Brand Identity", experience: "2+ yrs", badge: "Ai", color: "#FF9A00" },
      { name: "Adobe Photoshop", category: "Photo Manipulation & Ads", experience: "4+ yrs", badge: "Ps", color: "#31A8FF" },
      { name: "Adobe Premiere Pro", category: "Video Editing & Cuts", experience: "3+ yrs", badge: "Pr", color: "#9999FF" },
      { name: "Adobe After Effects", category: "Motion Graphics & VFX", experience: "3+ yrs", badge: "Ae", color: "#9999FF" }
    ],
    education: {
      degree: "Bachelor of Applied Arts (BFA)",
      institution: "VIVA Institute of Applied Arts",
      year: "2024",
      focus: "Visual Communication, Advertising Art, Typography, Commercial Illustration"
    }
  };

  /* ==========================================================================
     3. THEME & ACCENT MANAGER
     ========================================================================== */
  const PALETTES = {
    lime:  { accent: "#8CE01A", hover: "#76D012", glow: "rgba(140, 224, 26, 0.4)", muted: "rgba(140, 224, 26, 0.14)" },
    amber: { accent: "#FF5722", hover: "#E64A19", glow: "rgba(255, 87, 34, 0.35)", muted: "rgba(255, 87, 34, 0.12)" },
    gold:  { accent: "#F5B738", hover: "#E09A18", glow: "rgba(245, 183, 56, 0.28)", muted: "rgba(245, 183, 56, 0.12)" },
    violet:{ accent: "#B388FF", hover: "#9355FF", glow: "rgba(179, 136, 255, 0.25)", muted: "rgba(179, 136, 255, 0.12)" },
    mono:  { accent: "#FFFFFF", hover: "#D0D0D5", glow: "rgba(255, 255, 255, 0.2)", muted: "rgba(255, 255, 255, 0.1)" }
  };

  function initTheme() {
    let saved = "lime";
    try {
      saved = localStorage.getItem("rb_theme_palette") || "lime";
    } catch(e) {}
    
    applyPalette(saved);

    const switcherButtons = document.querySelectorAll("[data-palette]");
    switcherButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        applyPalette(btn.getAttribute("data-palette"));
      });
    });
  }

  function applyPalette(key) {
    const theme = PALETTES[key] || PALETTES.amber;
    const root = document.documentElement;
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--accent-hover", theme.hover);
    root.style.setProperty("--accent-glow", theme.glow);
    root.style.setProperty("--accent-muted", theme.muted);
    
    try {
      localStorage.setItem("rb_theme_palette", key);
    } catch(e) {}
    
    document.querySelectorAll("[data-palette]").forEach(btn => {
      if (btn.getAttribute("data-palette") === key) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  /* ==========================================================================
     4. MODAL & FULLSCREEN CASE STUDY ENGINE
     ========================================================================== */
  let currentProjectIndex = -1;
  let currentMediaIndex = 0;
  let filteredProjects = [...projects];

  function openModal(projectId) {
    // Modal should only open on desktop / laptop / larger screens (> 768px)
    if (window.innerWidth <= 768) return;

    const index = filteredProjects.findIndex(p => p.id === projectId);
    if (index === -1) return;
    
    currentProjectIndex = index;
    currentMediaIndex = 0;
    renderModalContent();
    
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  }

  function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
      const video = modal.querySelector('video');
      if (video) video.pause();
    }
  }

  function nextProject() {
    if (filteredProjects.length === 0) return;
    currentProjectIndex = (currentProjectIndex + 1) % filteredProjects.length;
    currentMediaIndex = 0;
    renderModalContent();
  }

  function prevProject() {
    if (filteredProjects.length === 0) return;
    currentProjectIndex = (currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    currentMediaIndex = 0;
    renderModalContent();
  }

  function renderModalContent() {
    const project = filteredProjects[currentProjectIndex];
    if (!project) return;
    
    document.getElementById('modal-category').textContent = project.categoryLabel || project.category;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-client').textContent = project.client;
    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-summary').textContent = project.summary;
    const descEl = document.getElementById('modal-desc');
    if (descEl) {
      descEl.innerHTML = (project.description || '')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
    }
    document.getElementById('modal-index-counter').textContent = `${currentProjectIndex + 1} / ${filteredProjects.length}`;
    
    const deliverablesEl = document.getElementById('modal-deliverables');
    deliverablesEl.innerHTML = '';
    (project.deliverables || []).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      deliverablesEl.appendChild(li);
    });
    
    const toolsEl = document.getElementById('modal-tools');
    toolsEl.innerHTML = '';
    (project.tools || []).forEach(tool => {
      const span = document.createElement('span');
      span.className = 'tool-pill';
      span.textContent = tool;
      toolsEl.appendChild(span);
    });
    
    renderMediaGallery(project);
  }

  function renderMediaGallery(project) {
    const mediaContainer = document.getElementById('modal-media-viewport');
    mediaContainer.innerHTML = '';
    
    const mediaList = project.media && project.media.length > 0 ? project.media : [
      project.mediaType === 'video' 
        ? { type: 'video', src: project.videoSrc, caption: project.title }
        : { type: 'image', src: project.coverImage, caption: project.title }
    ];
    
    const currentItem = mediaList[currentMediaIndex] || mediaList[0];
    
    if (currentItem.type === 'video') {
      const videoWrap = document.createElement('div');
      videoWrap.className = 'modal-video-wrap';
      videoWrap.innerHTML = `
        <video controls autoplay loop playsinline class="modal-video-player">
          <source src="${currentItem.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        ${currentItem.caption ? `<p class="media-caption">${currentItem.caption}</p>` : ''}
      `;
      mediaContainer.appendChild(videoWrap);
    } else {
      const imgWrap = document.createElement('div');
      imgWrap.className = 'modal-image-wrap';
      imgWrap.innerHTML = `
        <img src="${currentItem.src}" alt="${project.title}" class="modal-main-img">
        ${currentItem.caption ? `<p class="media-caption">${currentItem.caption}</p>` : ''}
      `;
      mediaContainer.appendChild(imgWrap);
    }
    
    const thumbsContainer = document.getElementById('modal-thumbnails');
    thumbsContainer.innerHTML = '';
    
    if (mediaList.length > 1) {
      thumbsContainer.style.display = 'flex';
      mediaList.forEach((m, idx) => {
        const thumb = document.createElement('button');
        thumb.className = `thumb-btn ${idx === currentMediaIndex ? 'active' : ''}`;
        thumb.setAttribute('aria-label', `Slide ${idx + 1}`);
        
        if (m.type === 'video') {
          thumb.innerHTML = `<div style="width:100%;height:100%;background:#101422;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--accent);font-size:0.65rem;font-weight:700;gap:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Video</span></div>`;
        } else {
          thumb.innerHTML = `<img src="${m.src}" alt="Thumb ${idx + 1}">`;
        }
        
        thumb.addEventListener('click', () => {
          currentMediaIndex = idx;
          renderMediaGallery(project);
        });
        thumbsContainer.appendChild(thumb);
      });
    } else {
      thumbsContainer.style.display = 'none';
    }
  }

  function initModalListeners() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    const closeBtn = document.getElementById('modal-close-btn');
    const nextBtn = document.getElementById('modal-next-btn');
    const prevBtn = document.getElementById('modal-prev-btn');
    const backdrop = modal.querySelector('.modal-backdrop');
    
    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    nextBtn?.addEventListener('click', nextProject);
    prevBtn?.addEventListener('click', prevProject);
    
    window.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') nextProject();
      else if (e.key === 'ArrowLeft') prevProject();
    });

    // Hero video reel circular badge trigger
    const heroReelBtn = document.getElementById('hero-reel-card');
    heroReelBtn?.addEventListener('click', () => {
      openModal('diesel-cinematic-reel');
    });
  }

  /* ==========================================================================
     5. WORK GRID & CATEGORY FILTERING
     ========================================================================== */
  let activeCategory = 'all';

  function initWorkGrid() {
    renderProjects(activeCategory);

    const filterBtns = document.querySelectorAll('.filter-pill');
    const grid = document.getElementById('projects-grid');
    const prevBtn = document.getElementById('work-carousel-prev');
    const nextBtn = document.getElementById('work-carousel-next');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeCategory = btn.getAttribute('data-filter');
        renderProjects(activeCategory);
        if (grid) grid.scrollTo({ left: 0, behavior: 'smooth' });
      });
    });

    if (prevBtn && nextBtn && grid) {
      prevBtn.addEventListener('click', () => {
        const scrollAmount = grid.clientWidth * 0.95;
        grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        const scrollAmount = grid.clientWidth * 0.95;
        grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  }

  function renderProjects(category) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    filteredProjects = category === 'all' 
      ? projects 
      : projects.filter(p => p.category === category);

    const countEl = document.getElementById('project-count-badge');
    if (countEl) {
      countEl.textContent = `${filteredProjects.length} Projects`;
    }

    grid.innerHTML = '';

    if (filteredProjects.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">No projects found in this category.</div>`;
      return;
    }

    filteredProjects.forEach((project, index) => {
      const card = document.createElement('article');
      card.className = `project-card ${project.featured ? 'is-featured' : ''}`;
      card.setAttribute('data-category', project.category);
      card.style.animationDelay = `${index * 0.06}s`;

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
            onload="if(this.previousElementSibling) this.previousElementSibling.style.display='none'; this.classList.add('loaded');"
            onerror="if(this.previousElementSibling) this.previousElementSibling.style.display='none'; this.classList.add('loaded');"
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

      card.addEventListener('click', (e) => {
        if (window.innerWidth > 768) {
          openModal(project.id);
        }
      });

      grid.appendChild(card);
    });
  }

  /* ==========================================================================
     6. EXPERIENCE SECTION (MODERN 4-CARD GRID)
     ========================================================================== */
  function initExperience() {
    const container = document.getElementById('experience-cards-grid') || document.getElementById('experience-timeline');
    if (!container) return;

    container.className = 'experience-cards-grid reveal-on-scroll reveal-delay-1';
    container.innerHTML = '';

    experienceData.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'experience-modern-card';
      const numStr = String(index + 1).padStart(2, '0');

      card.innerHTML = `
        <div class="exp-card-top">
          <div class="exp-card-header">
            <div class="exp-card-period">${item.period}</div>
            <span class="exp-card-type">${item.type}</span>
          </div>
          <h3 class="exp-card-role">${item.role}</h3>
          <div class="exp-card-company">
            <strong>${item.company}</strong> • <span>${item.location}</span>
          </div>
          <p class="exp-card-desc">${item.description}</p>
          <ul class="exp-card-highlights">
            ${item.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
        <div class="exp-card-footer">
          <span class="exp-card-number">${numStr}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  /* ==========================================================================
     7. SKILLS & EDUCATION
     ========================================================================== */
  function initSkillsAndEducation() {
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

    const eduContainer = document.getElementById('education-card-content');
    if (eduContainer) {
      const edu = skillsData.education;
      eduContainer.innerHTML = `
        <div class="edu-badge">BFA Graduated</div>
        <h3 class="edu-degree">${edu.degree}</h3>
        <h4 class="edu-school">${edu.institution}</h4>
        <div class="edu-meta">
          <span class="edu-year">${edu.year}</span>
        </div>
        <p class="edu-focus">${edu.focus}</p>
      `;
    }
  }

  /* ==========================================================================
     8. TIMEZONE & LIVE CLOCK
     ========================================================================== */
  function initTimezoneClock() {
    const clockEl = document.getElementById('live-time-indore');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      try {
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
        clockEl.textContent = `${timeStr} IST`;
      } catch (err) {
        clockEl.textContent = now.toLocaleTimeString() + " IST";
      }
    }

    update();
    setInterval(update, 1000);
  }

  /* ==========================================================================
     9. CUSTOM MAGNETIC CURSOR
     ========================================================================== */
  function initCursorFollower() {
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('cursor-dot');
    const glowSpotlight = document.getElementById('cursor-glow-spotlight');
    if (!cursor || !cursorDot) return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
      if (glowSpotlight) glowSpotlight.style.display = 'none';
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let spotX = mouseX;
    let spotY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    function renderCursor() {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      if (glowSpotlight) {
        spotX += (mouseX - spotX) * 0.08;
        spotY += (mouseY - spotY) * 0.08;
        glowSpotlight.style.transform = `translate3d(${spotX}px, ${spotY}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(renderCursor);
    }
    renderCursor();

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

  /* ==========================================================================
     10. NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navDrawer = document.getElementById('nav-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header?.classList.add('is-scrolled');
      } else {
        header?.classList.remove('is-scrolled');
      }
    }, { passive: true });

    function closeMobileMenu() {
      navDrawer?.classList.remove('active');
      menuToggle?.classList.remove('active');
      drawerBackdrop?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function openMobileMenu() {
      navDrawer?.classList.add('active');
      menuToggle?.classList.add('active');
      drawerBackdrop?.classList.add('active');
      menuToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    if (menuToggle && navDrawer) {
      menuToggle.addEventListener('click', () => {
        const isOpen = navDrawer.classList.contains('active');
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      drawerBackdrop?.addEventListener('click', closeMobileMenu);

      navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });
    }

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

    // Active Navigation Dock Pill Scroll-Spy
    const sections = document.querySelectorAll('section[id]');
    const dockPills = document.querySelectorAll('.dock-pill-item');

    function updateActiveDock() {
      const scrollPos = window.scrollY + 180;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          dockPills.forEach(pill => {
            const href = pill.getAttribute('href');
            if (href === `#${id}`) {
              pill.classList.add('active');
              if (!pill.querySelector('.dock-active-dot')) {
                const dot = document.createElement('span');
                dot.className = 'dock-active-dot';
                pill.appendChild(dot);
              }
            } else {
              pill.classList.remove('active');
              const existingDot = pill.querySelector('.dock-active-dot');
              if (existingDot) existingDot.remove();
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveDock, { passive: true });
    updateActiveDock();
  }

  /* ==========================================================================
     11. MARQUEE REEL
     ========================================================================== */
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

    marqueeTrack.innerHTML = html + html + html;
  }

  /* ==========================================================================
     12. CONTACT FORM & ACTIONS
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedbackEl = document.getElementById('form-feedback');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', async () => {
        const email = 'rishikabagadia@gmail.com';
        try {
          await navigator.clipboard.writeText(email);
          copyEmailBtn.innerHTML = `<span>✓ Copied to Clipboard!</span>`;
          setTimeout(() => {
            copyEmailBtn.innerHTML = `<span>Copy Email</span>`;
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

      try {
        const actionUrl = form.getAttribute('action');
        if (actionUrl && !actionUrl.includes('YOUR_FORM_ID') && window.location.protocol.startsWith('http')) {
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
          // Direct Mailto fallback
          const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${projectType} from ${name}`);
          const mailBody = encodeURIComponent(`Hi Rishika,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\nLooking forward to speaking with you!`);
          
          window.location.href = `mailto:rishikabagadia@gmail.com?subject=${mailSubject}&body=${mailBody}`;
          showFormSuccess("Opening your email composer to send directly to Rishika!");
          form.reset();
        }
      } catch (err) {
        const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${projectType} from ${name}`);
        const mailBody = encodeURIComponent(`Hi Rishika,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`);
        window.location.href = `mailto:rishikabagadia@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        showFormSuccess("Redirecting to email app...");
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

  /* ==========================================================================
     13. SCROLL REVEALS
     ========================================================================== */
  function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // Instant safety fallback: reveal elements in initial viewport
    setTimeout(() => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('is-revealed');
        }
      });
    }, 50);
  }

  /* ==========================================================================
     14. APP BOOTSTRAPPER
     ========================================================================== */
  function initApp() {
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
