# Design System Specification: The Technical Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Neon Architect"**
This design system moves away from the sterile, flat aesthetics of standard SaaS. It is built on the philosophy of **Technical Editorial**—combining the high-contrast authority of a premium magazine with the glowing, layered depth of a high-end developer environment.

We break the "template" look through **Intentional Asymmetry**. Layouts should feel constructed rather than poured into a grid. We use overlapping elements, extreme typography scales (massive display headers against tiny mono labels), and "glowing" focal points to guide the user's eye through complex agentic narratives. The goal is an interface that feels like a living technical document: precise, authoritative, and cinematic.

---

## 2. Color Theory & Surfaces
The palette is rooted in a "Deep Navy" foundation, using light and glow to define boundaries rather than lines.

### Palette Strategy
- **Primary (`#b4c5ff` / `#2563eb`):** Used for "Active Intelligence." This blue represents the core agency of the system.
- **Secondary (`#d0bcff` / `#8b5cf6`):** The "Narrative Thread." Use purple for secondary logic flows and transition states.
- **Tertiary/Accent (`#4cd7f6` / `#06b6d4`):** The "Data Pulse." Use Cyan sparingly for high-value data points and success states.
- **Warm/Complementary (`#fbbf24` / `#f59e0b`):** The "Human Spark." Amber sits opposite to the blue-purple-red harmonious range on the colour wheel, making it pop as a deliberate contrast. Used for the L (Love/Vision) layer — quotes, wisdom content, thought leadership labels, and anything representing the human foundation that machines cannot generate.

### Colour Theory: Harmonious + Complementary
The primary palette (blue → purple → cyan) forms a harmonious analogous range. Amber/gold is the **complementary pop** — the opposite on the colour wheel. This contrast is intentional: the technical system (blue-purple-cyan) is machine-readable; the warm accent (amber) is irreducibly human.

### The "No-Line" Rule
**Explicit Instruction:** Do not use `1px` solid borders to separate sections.
Boundaries must be defined by:
1.  **Background Shifts:** Moving from `surface` to `surface-container-low`.
2.  **Tonal Transitions:** Using subtle gradients between container tiers.
3.  **Negative Space:** Utilizing the `Spacing Scale (16/20/24)` to create structural "voids" that act as natural dividers.

### Glass & Gradient Execution
To achieve the "Pure CSS" diagram aesthetic, use `surface-container-high` with a `backdrop-blur` of `12px` and `60%` opacity. Main CTAs should not be flat; apply a linear gradient from `primary` to `primary-container` at a 135-degree angle to provide a "machined" metallic finish.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to distinguish between "The Story" (Headings) and "The Machine" (Labels).

*   **Display & Headlines (Plus Jakarta Sans):** Set with `letter-spacing: -0.04em`. These should feel heavy and tectonic. Use `display-lg` for hero statements to establish immediate authority.
*   **Body (Inter):** The workhorse. Muted Grey (`on-surface-variant`) ensures long-form readability without competing with the bold headers.
*   **Labels & Data (Space Grotesk / JetBrains Mono):** All-caps for labels, utilizing the `label-sm` scale. This provides the "Technical" feel of a blueprint or code editor.

---

## 4. Elevation & Depth: Tonal Layering
We reject traditional drop shadows in favor of **Ambient Luminance**.

*   **The Layering Principle:** Stacking determines importance.
    *   *Base:* `surface` (`#0b1326`)
    *   *Section:* `surface-container-low`
    *   *Card:* `surface-container-lowest` (creates an "inset" look) or `surface-container-high` (creates a "lifted" look).
*   **Ambient Shadows:** For floating modals, use a spread of `40px`, a blur of `80px`, and a color derived from `primary` at `8%` opacity. This mimics the glow of a screen rather than a physical shadow.
*   **The Ghost Border:** If a stroke is required for accessibility, use `outline-variant` at `15%` opacity. Never use 100% opaque lines.

---

## 5. Components & Primitive Styling

### Buttons: The "Tactile Glow"
*   **Primary:** Gradient fill (`primary` to `primary-container`). `0.25rem` (DEFAULT) radius. Subtle inner-glow on hover.
*   **Secondary:** Ghost style. `outline-variant` at 20% opacity. Text in `primary-fixed`.
*   **Tertiary:** All-caps `label-md` with a leading `2px` cyan square (Accent) to denote "System Action."

### Input Fields: The "Terminal" Look
*   **Style:** Background set to `surface-container-lowest`. No bottom border. On focus, the background shifts to `surface-container-highest` with a `1px` "Ghost Border" of `primary`.
*   **Typography:** All user input uses `Space Grotesk` to maintain the technical aesthetic.

### Cards & Diagrams: The "Nested Layer"
*   **Rule:** Forbid divider lines.
*   **Structure:** Use a `surface-container-low` parent. Internal children (like metadata blocks) should sit on `surface-container-high` with `lg` (0.5rem) padding.
*   **Glow Accents:** Use a top-right "light leak" gradient (10% opacity Cyan) to indicate active status.

### Custom Component: The "Logic Node"
*   A specialized chip for agentic steps. Features a `backdrop-blur` background, a `label-sm` monospace font, and a trailing dot that pulses using the `tertiary` (Cyan) color.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use extreme scale. A `display-lg` header next to a `label-sm` tag creates visual interest.
*   **DO** use "Ink Traps" and tight tracking in headers.
*   **DO** utilize the `Spacing Scale (20/24)` for massive margins to let the "Technical Editorial" style breathe.

### Don't:
*   **DON'T** use pure black (`#000000`) for shadows. Use tinted navies.
*   **DON'T** use standard `border-radius: 20px`. Keep it sharp and intentional with `sm` (0.125rem) or `md` (0.375rem).
*   **DON'T** use dividers. If you feel the need for a line, use a 24px vertical gap instead.

---

## 7. Design Tokens Reference

| Token Group | Value | Usage |
| :--- | :--- | :--- |
| **Surface-Base** | `#0b1326` | Main App Background |
| **Surface-High** | `#222a3d` | Modals / Floating Sheets |
| **Primary-Glow** | `#2563eb` | Actionable UI / Key Logic |
| **Accent-Pulse** | `#06b6d4` | Success / Active Data / Nodes |
| **Text-Bold** | `#FFFFFF` | Headlines / Primary Buttons |
| **Text-Muted** | `#c3c6d7` | Body Copy / Descriptions |
| **Radius-Default**| `0.25rem` | Buttons / Small Components |
| **Radius-Large** | `0.5rem` | Primary Layout Cards |

## Configuration

- **Color Mode:** Dark
- **Body Font:** Inter
- **Headline Font:** Plus Jakarta Sans
- **Label Font:** Space Grotesk
- **Roundness:** Round 4
- **Spacing Scale:** 3
- **Neutral Override:** #0f172a
- **Primary Override:** #2563eb
- **Secondary Override:** #8b5cf6
- **Tertiary Override:** #06b6d4
