# Design System Specification: High-End Technical Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Neon Lithograph**
This design system rejects the "SaaS-in-a-box" aesthetic in favor of a high-end, editorial technical experience. It blends the structural rigidity of code with the fluid, atmospheric depth of a luxury digital publication.

The system breaks away from standard layouts through **intentional asymmetry** and **tonal layering**. We treat the screen not as a flat canvas, but as a series of stacked, illuminated plates. By utilizing high-contrast typography scales and overlapping elements, we create a "Technical Couture" feel—authoritative enough for developers, yet sophisticated enough for executive stakeholders.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, nocturnal base, punctuated by high-energy accents that simulate light-emitting diodes (LEDs).

### Core Palette (Material Token Mapping)
- **Background/Surface:** `#0b1326` (The Void)
- **Primary:** `#b4c5ff` (Light Blue) / **Container:** `#2563eb` (Deep Tech Blue)
- **Secondary:** `#d0bcff` (Soft Lavender) / **Container:** `#571bc1` (Electric Purple)
- **Tertiary (Accent):** `#4cd7f6` (Cyan Glow)

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural separation must be achieved through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low` (`#131b2e`).
2.  **Tonal Transitions:** Using the `135deg` signature gradient (Primary to Secondary) as a separator or a subtle "glow" edge.
3.  **Negative Space:** Utilizing the `20` (7rem) spacing token to define content blocks.

### The "Glass & Gradient" Rule
Floating elements (modals, sticky navs) must use **Glassmorphism**.
- **Fill:** `surface-container` at 70% opacity.
- **Blur:** `backdrop-blur: 12px`.
- **Signature Glow:** Apply a `135deg` linear gradient (`#2563eb` to `#8b5cf6`) to main CTAs and code block headers to inject "visual soul."

---

## 3. Typography
We use a dual-font strategy to balance technical precision with editorial flair.

*   **Display & Headlines:** *Plus Jakarta Sans*. Bold, tight tracking (-0.02em), and dramatic scale. This conveys authority and "The Big Idea."
*   **Body & Labels:** *Inter*. Optimized for readability in high-density technical environments.

### Typography Scale
- **Display-LG (3.5rem):** Used for Hero H1s. Use "Negative Letter Spacing" to feel like a printed magazine.
- **Headline-MD (1.75rem):** Used for section headers. Always paired with a `tertiary` (Cyan) label above it for a "meta-data" editorial look.
- **Body-LG (1rem):** Default reading size. Use `on-surface-variant` (`#c3c6d7`) for long-form text to reduce eye strain against the dark background.
- **Label-SM (0.6875rem):** All-caps, tracked out (+0.1em). Used for categories and micro-copy.

---

## 4. Elevation & Depth
Depth in this system is organic, not artificial. We mimic physics through light, not lines.

*   **The Layering Principle:**
    *   **Level 0 (Base):** `surface` (`#0b1326`)
    *   **Level 1 (Sections):** `surface-container-low` (`#131b2e`)
    *   **Level 2 (Cards):** `surface-container` (`#171f33`)
    *   **Level 3 (Floating):** `surface-container-high` (`#222a3d`)
*   **Ambient Shadows:** Use a diffuse "Cyan/Purple Tint" shadow for floating elements.
    *   *Shadow:* `0 20px 40px rgba(6, 182, 212, 0.08)`.
*   **The "Ghost Border":** For high-density components (like code blocks), use the `outline-variant` token at **15% opacity**. This creates a suggestion of a container without breaking the editorial flow.

---

## 5. Components

### Navigation (Sticky Glass)
- **Style:** `surface-container-lowest` at 80% opacity.
- **Interaction:** Bottom-border only, using a `primary-to-secondary` gradient at 2px height, only visible on scroll.

### Buttons (High-Gloss)
- **Primary:** `135deg` gradient (`#2563eb` to `#8b5cf6`). Roundedness: `md` (0.375rem). Text: `on-primary` (White).
- **Secondary:** Ghost style. `outline-variant` border (20% opacity) with a hover state that reveals a subtle `primary_container` fill.

### Code Blocks (Technical Precision)
- **Style:** `surface-container-highest` background.
- **Edge:** Sharp `none` or `sm` (0.125rem) corners to differentiate from "soft" marketing cards.
- **Header:** A 24px bar with the signature blue-to-purple gradient to anchor the technical content.

### Cards & Grid Layouts
- **Rule:** **No Dividers.** Separate card header from body using a `1.5` (0.5rem) spacing gap or a slight shift in background tone.
- **Layout:** Use intentional asymmetry—try a 2-column layout where the left column is 40% width (text) and the right is 60% (code/interactive elements).

### Interactive Toggles
- **Track:** `surface-container-highest`.
- **Thumb:** `tertiary` (Cyan). When active, the track should emit a `0 0 10px` glow using the `tertiary` color.

---

## 6. Do's and Don'ts

### Do
- **Do** use `surface-bright` for hover states on dark cards to create a "lit from within" effect.
- **Do** use the `16` (5.5rem) and `20` (7rem) spacing tokens generously. White space is a luxury signal.
- **Do** wrap technical jargon in `label-md` tags with a `secondary_container` background to make them feel like "data chips."

### Don't
- **Don't** use pure `#000000` or pure white `#FFFFFF`. Use the `surface` and `on-surface` tokens to maintain the editorial color temperature.
- **Don't** use standard 1px grey borders. If it looks like a spreadsheet, you've failed the editorial mission.
- **Don't** use "Drop Shadows" on flat background elements. Only use them for elements that "fly" over the content (Tooltips, Floating Nav).

## Color Tokens

| Token | Value | Usage |
|:---|:---|:---|
| background | #0b1326 | The Void |
| surface | #0b1326 | Base surface |
| surface-container-low | #131b2e | Section backgrounds |
| surface-container | #171f33 | Card backgrounds |
| surface-container-high | #222a3d | Floating elements |
| surface-container-highest | #2d3449 | Code blocks |
| surface-container-lowest | #060e20 | Deepest inset |
| primary | #b4c5ff | Light primary |
| primary-container | #2563eb | Deep tech blue |
| secondary | #d0bcff | Soft lavender |
| secondary-container | #571bc1 | Electric purple |
| tertiary | #4cd7f6 | Cyan glow |
| tertiary-container | #00788c | Deep cyan |
| on-surface | #dae2fd | Primary text |
| on-surface-variant | #c3c6d7 | Body text |
| outline-variant | #434655 | Ghost borders |
| surface-bright | #31394d | Hover states |

## Configuration

- **Color Mode:** Dark
- **Body Font:** Inter
- **Headline Font:** Plus Jakarta Sans
- **Label Font:** Inter
- **Roundness:** Round 4
- **Spacing Scale:** 3
- **Neutral Override:** #0f172a
- **Primary Override:** #2563eb
- **Secondary Override:** #8b5cf6
- **Tertiary Override:** #06b6d4
