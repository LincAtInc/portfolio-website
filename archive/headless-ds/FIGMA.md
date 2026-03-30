# Figma Design System

## File
**Lincoln Mitchell — Headless DS v2**
https://www.figma.com/design/g4gX2CYH00ygOaxKAKfXfc

## Pages
| Page | Purpose |
|------|---------|
| Tokens | Colour palette, spacing scale, border radius, shadow elevation documentation |
| Components | Button, Card, Input, Alert — all token-bound |
| Demo Page | Full page layout using real component instances |

## Token Mapping (Figma → CSS → React)

All Figma variables use WEB code syntax matching CSS custom properties in `src/tokens/`.

### Colours (18 variables)
| Figma Variable | CSS Custom Property | Value |
|---------------|-------------------|-------|
| color/primary | --color-primary | #2563EB |
| color/primary-dark | --color-primary-dark | #1E40AF |
| color/primary-light | --color-primary-light | #3B82F6 |
| color/secondary | --color-secondary | #8B5CF6 |
| color/accent | --color-accent | #06B6D4 |
| color/text/primary | --color-text-primary | #0F172A |
| color/text/secondary | --color-text-secondary | #475569 |
| color/text/tertiary | --color-text-tertiary | #64748B |
| color/text/inverse | --color-text-inverse | #FFFFFF |
| color/bg/primary | --color-bg-primary | #FFFFFF |
| color/bg/secondary | --color-bg-secondary | #F8FAFC |
| color/bg/tertiary | --color-bg-tertiary | #F1F5F9 |
| color/bg/dark | --color-bg-dark | #0F172A |
| color/border/default | --color-border-default | #E2E8F0 |
| color/border/dark | --color-border-dark | #CBD5E1 |
| color/success | --color-success | #059669 |
| color/warning | --color-warning | #D97706 |
| color/error | --color-error | #DC2626 |

### Spacing (12 variables)
| Figma Variable | CSS Custom Property | Value |
|---------------|-------------------|-------|
| spacing/1 | --space-1 | 4px |
| spacing/2 | --space-2 | 8px |
| spacing/3 | --space-3 | 12px |
| spacing/4 | --space-4 | 16px |
| spacing/5 | --space-5 | 20px |
| spacing/6 | --space-6 | 24px |
| spacing/8 | --space-8 | 32px |
| spacing/10 | --space-10 | 40px |
| spacing/12 | --space-12 | 48px |
| spacing/16 | --space-16 | 64px |

### Radius (6 variables)
| Figma Variable | CSS Custom Property | Value |
|---------------|-------------------|-------|
| radius/sm | --radius-sm | 4px |
| radius/md | --radius-md | 6px |
| radius/lg | --radius-lg | 8px |
| radius/xl | --radius-xl | 12px |
| radius/2xl | --radius-2xl | 16px |
| radius/full | --radius-full | 9999px |

### Shadow Effect Styles
| Figma Style | CSS Custom Property | Value |
|------------|-------------------|-------|
| Shadow/sm | --shadow-sm | 0 1px 2px rgba(0,0,0,0.05) |
| Shadow/md | --shadow-md | 0 4px 6px rgba(0,0,0,0.1) |
| Shadow/lg | --shadow-lg | 0 10px 15px rgba(0,0,0,0.1) |
| Shadow/xl | --shadow-xl | 0 20px 25px rgba(0,0,0,0.1) |

## Component Mapping (Figma → React)

| Figma Component | React Component | Variants |
|----------------|----------------|----------|
| Button | `src/components/Button.tsx` | primary, secondary, ghost |
| Card | `src/components/Card.tsx` | — |
| Input | `src/components/Input.tsx` | — |
| Alert | `src/components/Alert.tsx` | info, success, warning, error |

## Architecture
```
styles.css (CSS custom properties)
    ↕
Figma Variables (WEB code syntax)
    ↕
React Components (CSS Modules consuming tokens)
    ↕
Figma Components (variable-bound)
```

Code is the source of truth. Figma is the visual interface. This file documents the bridge.
