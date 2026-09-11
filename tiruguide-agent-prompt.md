# AI Agent Prompt — TiruGuide Landing Page (3 Sections Only)

Copy everything below into your AI coding agent.

---

## Project Brief

Build a **static, mobile-responsive landing page** for "TiruGuide" — a travel/city-guide website for Tiruvannamalai, Tamil Nadu. Use **plain HTML, CSS, and vanilla JavaScript only** — no frameworks, no build tools, no external CSS libraries except Google Fonts and Font Awesome (or similar) for icons via CDN.

**Build ONLY these 3 sections for now** (do not build the map, featured listings, events, or stats sections yet — those will be scoped separately):

1. Hero Section (with navbar)
2. "Plan Your Visit" CTA Card
3. Footer

File structure:
```
/index.html
/css/style.css
/js/script.js
/assets/ (for images)
```

---

## Global Setup

- **Colors:**
  - Primary blue (headings, links): `#0F2C59` (dark navy)
  - Accent orange (CTA buttons, highlights): `#F5821F`
  - Accent red (highlight text like "all in one place"): `#E63946`
  - Background off-white: `#FFFFFF` / light gray sections: `#F7F8FA`
  - Text gray (subtext): `#5A6472`
- **Fonts:** Use Google Fonts — a rounded/friendly sans-serif for headings (e.g. `Poppins` or `Baloo 2`) and a clean sans-serif for body text (e.g. `Inter` or `Nunito Sans`).
- **Border radius:** Generous rounding on cards, buttons, and search bars (12–20px) — the design has a soft, pill-shaped, friendly UI style throughout.
- **Shadows:** Soft, subtle drop shadows on cards and floating elements (search bar, CTA card).
- **Responsive breakpoints:** Design mobile-first, then scale up. Breakpoints at `480px` (mobile), `768px` (tablet), `1024px+` (desktop). Navbar collapses into a hamburger menu below 768px.

---

## Section 1: Hero Section (includes Navbar)

### Navbar (top of hero)
- Left: Logo — mountain icon + "TiruGuide" wordmark in bold navy.
- Center/left-aligned nav links: `Home | Explore | Stay | Eat | Events | Travel | About` — "Home" is active/bold.
- Right side: a circular search icon button, and a solid orange pill button labeled "Plan Your Trip →".
- On mobile: nav links collapse behind a hamburger icon; logo and CTA button remain visible.

### Hero Content
- Small pill-shaped badge above the heading: "✦ Discover" (light orange background, orange text).
- Large heading, two lines:
  - Line 1 in dark navy: "Tiruvannamalai,"
  - Line 2 in red/orange: "all in one place."
- Subtext below in gray: "Temples, stays, food, travel and experiences — explore the spiritual heart of Tamil Nadu."
- **Search bar**: white pill-shaped bar with a location pin icon, placeholder text "Search for places, hotels, food...", and a solid orange rounded "Search →" button docked to the right inside the bar.
- **Category quick-links grid** below the search bar: 6 small rounded-square cards in a 3-column (mobile) / 6-column (desktop) grid, each with an icon + label:
  - 🏮 Temples (orange icon bg)
  - 🛏 Hotels (blue icon bg)
  - 🍴 Restaurants (red icon bg)
  - 🛍 Shopping (purple icon bg)
  - 🚗 Transport (green icon bg)
  - 🏕 Tourist Spots (green icon bg)
  - 📅 Events (orange icon bg)
  - ⚙ Local Services (purple icon bg)
  *(Use whichever 6–8 fit the grid cleanly; keep icons circular/rounded-square with a soft tint background matching each category.)*
- **Right side of hero (desktop only, stack below content on mobile):** a large decorative illustration/photo — a temple gopuram in front of a green mountain, with a signboard reading "TIRUVANNAMALAI" and a vintage-style taxi car in the foreground. Small handwritten-style caption near the top-right of the image: "More than a destination — A feeling" with an underline flourish.

  **Background/illustration image for this hero visual, insert this source:**
  `https://chatgpt.com/s/m_6aa39ff378148191a3f4ba480b68015a`

- Layout: two-column on desktop (text left ~50%, image right ~50%), single column stacked on mobile (text first, image below, full width).

---

## Section 2: "Plan Your Visit" CTA Card

- A single, wide, rounded rectangular card sitting just below the hero (slightly overlapping the hero's bottom edge, with a soft shadow to appear "floating").
- White/light background inside the card.
- Left side: a small orange circular icon with a location pin, next to bold navy text: "Planning a visit to Tiruvannamalai?" with gray subtext beneath: "Get travel info, best places, itineraries and local tips."
- Right side: solid blue rounded pill button: "Explore City Guide →"
- On mobile: stack vertically — text block on top, full-width button below.

**Background image for this card**, insert this source:
`https://chatgpt.com/s/m_6aa3a07eebb08191b92c87bd2fff0328`

*(Apply it as a subtle background image/texture on the card itself — keep opacity low enough that the text and button remain fully readable on top.)*

---

## Section 3: Footer

- Dark background footer split into 4 columns on desktop, stacking to 1–2 columns on mobile.
- **Column 1:** Logo (mountain icon + "TiruGuide"), short tagline: "Your companion for exploring Tiruvannamalai. Temples, stays, food, travel and more — all in one place." Below that, a row of circular social icons (Facebook, Instagram, YouTube, X, LinkedIn).
- **Column 2 — "Quick Links":** Home, Explore, Events, Travel Guide, About Us
- **Column 3 — "Support":** Help Center, Contact Us, List Your Business
- **Column 4 — "Legal":** Privacy Policy, Terms of Service
- **Bottom-right decorative element:** a small illustrated mountain/temple silhouette graphic with a sun icon and handwritten-style script text: "Tiruvannamalai Always Calls".
- **Bottom bar:** centered/left-aligned copyright line: "© 2024 TiruGuide. All rights reserved."

**Background image for the footer**, insert this source:
`https://chatgpt.com/s/m_6aa3a0f768888191985c6fcfa17b233f`

*(Positioning requirement: the image should be visible/clear on the LEFT and RIGHT edges of the footer, fading to white/transparent toward the CENTER, so footer text in the middle columns stays fully readable. Use a CSS gradient overlay — e.g. a `linear-gradient` from transparent at the edges to white/footer-bg-color in the center — layered on top of the background-image via `background-blend-mode` or a pseudo-element overlay.)*

---

## Technical Requirements

- Semantic HTML5 (`<header>`, `<section>`, `<footer>`, `<nav>`).
- CSS via Flexbox/Grid, no inline styles.
- Mobile hamburger menu toggled with vanilla JS (no jQuery).
- Images should use `object-fit: cover` where needed to avoid distortion, and have `alt` text.
- Use `srcset` or simple responsive `max-width: 100%` handling for the hero and card background images.
- Keep all copy/text exactly as described above (do not invent new headings).
- Add comments in the CSS marking each of the 3 sections clearly for easy handoff when the remaining sections are added later.
- Do not build the "Explore Tiruvannamalai" map, "Featured Listings", "Upcoming Events", or "What people love" stats sections — leave a clear HTML comment placeholder (`<!-- SECTION: Map/Listings/Events/Stats — to be added later -->`) after the footer... actually place these placeholders between the CTA card and the footer, in the correct document order, so the layout can be extended later without restructuring.

---

## Output

Provide the complete `index.html`, `style.css`, and `script.js` files, ready to open directly in a browser with no build step.
