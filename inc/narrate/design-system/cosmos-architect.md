# Technical Editorial Design System: Conceptual Framework Infographic

## 1. Overview & Creative North Star: "The Celestial Architect"
This design system is built to transform complex conceptual frameworks into high-end editorial experiences. Our Creative North Star is **"The Celestial Architect"**—a vision where technical precision meets the vast, immersive depth of deep space.

To move beyond the "template" look, we reject the rigid, boxy constraints of standard web UI. Instead, we utilize **Intentional Asymmetry** and **Radiating Geometry**. Elements should feel as though they are orbiting a central logic, using overlapping translucent layers and high-contrast typography to create a sense of vast intellectual scale. We do not just present data; we map a constellation of ideas.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the void of deep space, using high-vibrancy accents to denote specific cognitive phases: **Ideate (Electric Blue)**, **Narrate (Royal Purple)**, and **Create (Cyan)**.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined exclusively through **Background Color Shifts** or **Tonal Transitions**. For example, a `surface-container-low` module should sit directly on a `surface` background, relying on the value shift to create the "edge."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of tinted obsidian.
- **Base Layer:** `surface` (#0b1326)
- **Primary Content Area:** `surface-container-low` (#131b2e)
- **Interactive/Floating Elements:** `surface-container-high` (#222a3d)

### The "Glass & Gradient" Rule
To achieve "visual soul," use **Glassmorphism** for floating technical panels. Use semi-transparent `surface-variant` colors with a `backdrop-blur` of 12px–20px.
- **Signature Texture:** Apply subtle linear gradients (e.g., `primary` to `primary-container`) on hero CTAs or primary framework nodes to simulate a light source emitting from within the dark void.

---

## 3. Typography: The Editorial Voice
We use **Plus Jakarta Sans** for its geometric clarity and **Space Grotesk** for technical labeling. This pairing balances human-centric readability with robotic precision.

- **Display (Large/Medium):** Reserved for core framework pillars. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an authoritative, editorial feel.
- **Headlines:** Use `headline-md` (1.75rem) to introduce sub-concepts. These should feel like "coordinates" in the document.
- **Technical Labels:** All metadata, tags, and small captions must use **Space Grotesk** (`label-md`). The monospaced-adjacent feel reinforces the "Architectural" nature of the system.
- **Hierarchy through Scale:** Use extreme contrast. Pair a `display-lg` title with a `body-sm` description to create a sophisticated, high-end editorial rhythm.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to mimic "paper"; we use light and layering to mimic "space."

- **The Layering Principle:** Stacking tiers is the primary method of separation. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural "recessed" look.
- **Ambient Shadows:** For floating framework nodes, use extra-diffused shadows.
    - *Shadow Color:* `#000000` at 40% opacity.
    - *Blur:* 40px – 60px.
    - *Spread:* -10px (to keep the "glow" tight to the object).
- **The "Ghost Border" Fallback:** If a divider is essential for accessibility, use a "Ghost Border": `outline-variant` (#434655) at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Framework Nodes (Cards)
- **Style:** Forbid divider lines. Use `spacing-6` (2rem) of vertical white space to separate thoughts.
- **Background:** `surface-container` with a subtle 1px "Ghost Border" top-edge highlight only, simulating a top-down light source.
- **Corner Radius:** `xl` (0.75rem) for a refined, modern feel.

### Action Chips & Phase Indicators
- **Variants:** Use `primary` (Electric Blue) for Ideation, `secondary` (Royal Purple) for Narrative, and `tertiary` (Cyan) for Creation.
- **Shape:** `full` (pill) for high contrast against the geometric grid.
- **Interaction:** On hover, increase the `surface-brightness` rather than changing the color hue.

### Primary Buttons
- **Visuals:** High-contrast `primary` (#b4c5ff) background with `on-primary` (#002a78) text.
- **Glow:** Add a soft outer glow (using the `primary` color) to represent "active energy."

### Radiating Lines (The Connector)
- **Usage:** Use 1px paths with a gradient stroke: `primary` (100% opacity) fading to `primary` (0% opacity). This mimics architectural "sight lines" or star trails.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetric Layouts:** Allow text blocks to offset from the center to create a dynamic, editorial flow.
- **Embrace the Dark:** Keep the `background` solid and deep; let the content be the light source.
- **Leverage Space Grotesk:** Use it for all "technical" data points (version numbers, dates, coordinates).

### Don't:
- **Don't use "Grey":** If you need a neutral, use a desaturated navy. Pure greys feel "dead" in a deep space aesthetic.
- **Don't use 1px Dividers:** They break the immersion of the "Celestial" environment. Use white space or tonal shifts.
- **Don't Over-round:** Avoid `full` roundedness on cards; stick to `xl` (0.75rem) to maintain architectural precision.
- **Don't use Center-Align for Body Text:** Keep body text left-aligned to maintain the professional, technical-document standard.

---

## Color Tokens

| Token | Value | Usage |
|:---|:---|:---|
| background | #0b1326 | Main background |
| surface | #0b1326 | Base surface |
| surface-container-low | #131b2e | Section backgrounds |
| surface-container | #171f33 | Card backgrounds |
| surface-container-high | #222a3d | Interactive/floating |
| surface-container-highest | #2d3449 | Highest elevation |
| primary | #b4c5ff | Light primary |
| primary-container | #2563eb | Deep tech blue |
| secondary | #d0bcff | Soft lavender |
| secondary-container | #571bc1 | Electric purple |
| tertiary | #4cd7f6 | Cyan glow |
| tertiary-container | #00788c | Deep cyan |
| on-surface | #dae2fd | Primary text |
| on-surface-variant | #c3c6d7 | Secondary text |
| outline | #8d90a0 | Borders |
| outline-variant | #434655 | Subtle borders |

## Typography

| Role | Font | Weight |
|:---|:---|:---|
| Display & Headlines | Plus Jakarta Sans | Bold |
| Body | Plus Jakarta Sans | Regular |
| Labels & Technical | Space Grotesk | Medium |

## Configuration

- **Color Mode:** Dark
- **Roundness:** Round 4
- **Spacing Scale:** 3
- **Neutral Override:** #0f172a
- **Primary Override:** #2563eb
- **Secondary Override:** #8b5cf6
- **Tertiary Override:** #06b6d4
