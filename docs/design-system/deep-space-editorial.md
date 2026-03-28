# Design System Specification: Editorial Technicality

## 1. Overview & Creative North Star: "The Digital Architect"
This design system rejects the "standard documentation" template in favor of an editorial, high-end experience. Our Creative North Star is **The Digital Architect**: a philosophy where technical precision meets cinematic depth.

We move beyond flat grids by using **intentional asymmetry** and **tonal layering**. The goal is to make technical documentation feel like a premium SaaS landing page—where white space is a functional tool, not a void, and where the hierarchy is driven by typography and light rather than structural lines.

## 2. Colors & Surface Philosophy
The palette is rooted in deep, atmospheric navies and charcoals, punctuated by high-energy primary and secondary accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be established through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit directly against a `surface` background to create a soft, sophisticated edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of obsidian glass. Use the hierarchy below to define importance:
- **Base Level:** `surface` (#0b1326) for the main viewport.
- **Sectioning:** `surface-container-low` (#131b2e) for secondary content areas.
- **Interactive Elements:** `surface-container-high` (#222a3d) for cards and modals.
- **Glassmorphism:** For floating elements (menus, popovers), use `surface-variant` (#2d3449) at 60% opacity with a `20px` backdrop-blur.

### Signature Textures
To add "soul" to the technical aesthetic, use subtle linear gradients (135deg) transitioning from `primary` (#b4c5ff) to `primary_container` (#2563eb) for hero CTAs and primary action states. This prevents the "flat-UI" fatigue of standard documentation.

## 3. Typography
The system utilizes a high-contrast typographic scale to create an authoritative, editorial rhythm.

*   **Display & Headlines (Plus Jakarta Sans):** These are your "Hero" elements. Use `display-lg` (3.5rem) for main landing pages with tight letter-spacing (-0.02em) to evoke a premium feel.
*   **Titles & Body (Inter):** Inter provides the utilitarian legibility required for long-form technical docs. Use `title-lg` for sub-headers to maintain a clear path for the eye.
*   **Technical Labels (Space Grotesk/JetBrains Mono):** All labels, tags, and code snippets must use the monospace/label scale. This creates a visual "switch" in the user's mind, signaling technical data versus editorial narrative.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "heavy" for a dark UI. We achieve depth through **Light Logic**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift. No border required.
*   **Ambient Shadows:** If a floating effect is required (e.g., a Modal), use a shadow with a `40px` blur at 8% opacity. The shadow color should be a tinted version of `on-surface` (#dae2fd) rather than black, mimicking natural ambient light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **20% opacity**. 100% opaque borders are strictly forbidden.

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `rounded-md` (0.75rem). Text should be `on-primary_fixed` (#00174b) for maximum contrast.
- **Secondary:** Transparent background with a "Ghost Border" (20% `outline_variant`).
- **Tertiary:** No background or border. Use `label-md` in `tertiary` (#4cd7f6) with an underline on hover.

### Cards & Lists
- **Rule:** Forbid divider lines. Separate list items using the spacing scale (e.g., `spacing-4` / 1.4rem) or subtle background shifts.
- **Styling:** Use `surface_container_high` with a `lg` (1rem) corner radius. On hover, shift the background to `surface_container_highest` to provide tactile feedback.

### Input Fields
- **Base:** `surface_container_low` background with no border.
- **Focus State:** A 2px glow using the `primary` color at 30% opacity. Label must use `label-sm` in `primary_fixed_dim`.

### Technical Chips
- Use `surface_variant` for the background and `JetBrains Mono` for the text. Ensure a `rounded-full` (9999px) radius to distinguish technical metadata from clickable buttons.

## 6. Do's and Don'ts

### Do:
- **Use Asymmetry:** Place a large `display-lg` headline on the left with a smaller `body-lg` paragraph offset to the right to create an editorial look.
- **Embrace Wide Margins:** Use `spacing-20` (7rem) or `spacing-24` (8.5rem) for section padding to let the content breathe.
- **Respect the Mono:** Use `label-md` for all technical metadata (e.g., "v2.0.4", "Published: 2 days ago").

### Don't:
- **Don't use Divider Lines:** Use background color steps (`surface` to `surface-container-low`) instead.
- **Don't use Pure White for Body Text:** Use `on_surface_variant` (#c3c6d7) for long-form text to reduce eye strain against the dark background.
- **Don't use Default Shadows:** Avoid the "black smudge" look. Always tint your shadows with the accent blue or surface color.

## Color Tokens

| Token | Value | Usage |
|:---|:---|:---|
| background | #0b1326 | Main background |
| surface | #0b1326 | Base surface |
| surface-container-low | #131b2e | Section backgrounds |
| surface-container | #171f33 | Card backgrounds |
| surface-container-high | #222a3d | Interactive/floating |
| surface-container-highest | #2d3449 | Highest elevation |
| surface-variant | #2d3449 | Glassmorphism base |
| primary | #b4c5ff | Light primary |
| primary-container | #2563eb | Deep tech blue |
| secondary | #d0bcff | Soft lavender |
| secondary-container | #571bc1 | Electric purple |
| tertiary | #4cd7f6 | Cyan glow |
| on-surface | #dae2fd | Primary text |
| on-surface-variant | #c3c6d7 | Body text |
| outline-variant | #434655 | Ghost borders |

## Configuration

- **Color Mode:** Dark
- **Body Font:** Inter
- **Headline Font:** Plus Jakarta Sans
- **Label Font:** Space Grotesk
- **Roundness:** Round 8
- **Spacing Scale:** 3
- **Neutral Override:** #0f172a
- **Primary Override:** #2563eb
- **Secondary Override:** #8b5cf6
- **Tertiary Override:** #06b6d4
