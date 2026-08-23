/**
 * THEME & ACCENT MANAGER
 * Allows switching between signature luxury palettes:
 * - Amber Gold (Default - Warm luxury & editorial)
 * - Acid Lime (Cyber & High voltage)
 * - Violet Aura (Electric & Creative)
 * - Pure Studio (Ultra minimalist monochrome)
 */

const PALETTES = {
  amber: {
    name: "Kinetic Amber",
    accent: "#F5B738",
    accentHover: "#E09A18",
    accentGlow: "rgba(245, 183, 56, 0.25)",
    accentMuted: "rgba(245, 183, 56, 0.12)"
  },
  lime: {
    name: "Acid Lime",
    accent: "#D4FF00",
    accentHover: "#B8E000",
    accentGlow: "rgba(212, 255, 0, 0.22)",
    accentMuted: "rgba(212, 255, 0, 0.12)"
  },
  violet: {
    name: "Electric Violet",
    accent: "#B388FF",
    accentHover: "#9355FF",
    accentGlow: "rgba(179, 136, 255, 0.25)",
    accentMuted: "rgba(179, 136, 255, 0.12)"
  },
  mono: {
    name: "Studio Mono",
    accent: "#FFFFFF",
    accentHover: "#D0D0D5",
    accentGlow: "rgba(255, 255, 255, 0.2)",
    accentMuted: "rgba(255, 255, 255, 0.1)"
  }
};

export function initTheme() {
  const savedPalette = localStorage.getItem("rb_theme_palette") || "amber";
  applyPalette(savedPalette);

  const switcherButtons = document.querySelectorAll("[data-palette]");
  switcherButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const palette = btn.getAttribute("data-palette");
      applyPalette(palette);
    });
  });
}

export function applyPalette(paletteKey) {
  const theme = PALETTES[paletteKey] || PALETTES.amber;
  const root = document.documentElement;
  
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-hover", theme.accentHover);
  root.style.setProperty("--accent-glow", theme.accentGlow);
  root.style.setProperty("--accent-muted", theme.accentMuted);
  
  localStorage.setItem("rb_theme_palette", paletteKey);
  
  document.querySelectorAll("[data-palette]").forEach(btn => {
    if (btn.getAttribute("data-palette") === paletteKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}
