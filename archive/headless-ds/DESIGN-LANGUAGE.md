# Headless DS — Design Language

> Dark editorial, Swiss-inspired. Technical confidence meets warm human touch.

## Visual Direction

**One sentence:** A dark, typographically-driven interface that uses restraint, precision, and bold scale contrast to communicate technical authority — like a dev docs site designed by a Swiss editorial studio.

## Colour Palette

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0f172a` | Primary dark surface |
| Surface Deep | `#0b1120` | Alternating section bg |
| Surface Card | `rgba(30, 41, 59, 0.4)` | Cards, overlays |
| Border Subtle | `#1e293b` | Card borders, dividers |
| Primary | `#2563eb` | CTAs, links, active states |
| Primary Dark | `#1e40af` | Hover states |
| Secondary | `#8b5cf6` | Accent highlights, tags |
| Accent | `#06b6d4` | Labels, badges, code highlights |
| Text Inverse | `#ffffff` | Headings on dark |
| Muted | `#94a3b8` | Body text, descriptions |
| Subtle | `#64748b` | Tertiary text, captions |

**Rules:**
- One intense colour moment is stronger than five
- Primary blue for interaction, secondary purple for tagging, accent cyan for code/technical
- Never use bright accents on dark navy simultaneously — one accent per section header

## Typography

| Role | Family | Weight | Size | Tracking |
|------|--------|--------|------|----------|
| Display Heading | Space Grotesk | 700 | 72px | -0.03em |
| Section Heading | Space Grotesk | 700 | 40px | -0.02em |
| Sub Heading | Space Grotesk | 600 | 20px | -0.01em |
| Body | Inter | 400 | 17px | normal |
| Body Small | Inter | 400 | 15px | normal |
| Caption | Inter | 400 | 13-14px | normal |
| Section Label | JetBrains Mono | 500 | 13px | 0.08em, uppercase |
| Code | JetBrains Mono | 400 | 13px | normal |
| Badge / Tag | JetBrains Mono | 400 | 11px | normal |

**Rules:**
- Maximise contrast between display (700) and body (400) weights
- Section labels always mono, uppercase, letterspaced — colour-coded to section accent
- Code blocks: JetBrains Mono at 13px, line-height 1.7
- Never go below 13px except for badges (11px)

## Spacing

| Scale | Value | Usage |
|-------|-------|-------|
| Section gap | 96px | Between major sections |
| Group gap | 56px | Section header → content |
| Card gap | 24px | Between cards in a row |
| Element gap | 16-20px | Within cards, between elements |
| Inner padding | 36px | Card padding |
| Nav padding | 20px 80px | Top-level navigation |
| Section padding | 96px 80px | Section container |

**Rules:**
- Tighter to group related elements, generous to let hero content breathe
- Consistent 80px horizontal padding at desktop, 20px at mobile

## Components

### Cards
- `border: 1px solid #1e293b`
- `border-radius: 12px`
- `background: rgba(30, 41, 59, 0.4)`
- `padding: 36px`
- Icon badges: 48x48px, 10px radius, colour-coded bg at 15% opacity

### Buttons
- Primary: `bg: #2563eb`, `color: white`, `radius: 8px`, `padding: 14px 32px`
- Ghost: `border: 1px solid #334155`, `color: #94a3b8`

### Code Blocks
- Window chrome header: `bg: #1e293b`, `padding: 14px 20px`
- Filename in mono, colour-coded
- Body: `bg: #0f172a`, `padding: 24px`
- Traffic light dots: 8px circles (red/yellow/green) for demo panels

### Architecture Layers
- Vertical stack with 1px connectors between
- Each layer: `padding: 20px 28px`, `border-radius: 10px`
- Colour-coded border at 25% opacity, bg at 8% opacity
- Numbered 01-06 in mono

### Section Pattern
```
[JetBrains Mono label — UPPERCASE, colour-coded]
[Space Grotesk heading — 40px, bold]
[Inter body — 17px, muted, max-width 560px]
          ↓ 56px gap
[Content: cards / layers / panels / code]
```

## Responsive Breakpoints

| Breakpoint | Behaviour |
|------------|-----------|
| > 1024px | Full desktop layout, 80px padding |
| 768–1024px | Reduce padding to 32px, stack card grids |
| < 768px | 20px padding, hide nav links, stack everything, heading → 36px |

## Colour Coding Convention

Each of the three brand colours maps to a conceptual domain:
- **Primary Blue** (`#2563eb`) — Infrastructure, architecture, system
- **Secondary Purple** (`#8b5cf6`) — Theming, design, visual layer
- **Accent Cyan** (`#06b6d4`) — Code, technical, machine-readable

This mapping is used consistently in section labels, card icons, architecture layers, and pipeline steps.
