# Headless DS Page → Real React App

## Goal
Convert `headless-ds.html` from a static HTML page that *describes* a headless React DS into an actual React app that *is* one. Prove the methodology by eating our own dog food.

## Tech Stack
- **Vite + React + TypeScript** — fast, popular, deploys as static
- **Ark UI** — headless primitives (Lincoln's Chakra background, same team)
- **CSS custom properties** — tokens from `styles.css` (no Tailwind, keeps token parity with Figma)
- **GitHub repo** — push to GitHub, deploy via Vercel or GitHub Pages

## Architecture

```
src/
├── tokens/
│   ├── default.css          # Portfolio theme tokens (from styles.css)
│   ├── healthcare.css       # Healthcare theme tokens
│   └── fintech.css          # FinTech theme tokens
├── primitives/
│   ├── Button.tsx           # Ark UI Button → headless
│   ├── Card.tsx             # Ark UI Box composition
│   ├── Input.tsx            # Ark UI Field + Input
│   └── Alert.tsx            # Ark UI composition
├── components/
│   ├── Button.tsx           # DS Button (tokens + variants applied to primitive)
│   ├── Card.tsx             # DS Card
│   ├── Input.tsx            # DS Input
│   └── Alert.tsx            # DS Alert (info/success/warning/error)
├── sections/
│   ├── Hero.tsx             # Hero section
│   ├── WhyHeadless.tsx      # 3-card grid
│   ├── Architecture.tsx     # 6-layer diagram with SVG connectors
│   ├── InteractiveDemo.tsx  # Theme switcher + side-by-side comparison
│   ├── CodeExamples.tsx     # Tabbed code blocks
│   ├── Pipeline.tsx         # Figma MCP pipeline cards
│   ├── INCLoop.tsx          # I ◄──► ×N ◄──► C formula
│   └── CTAFooter.tsx        # Bottom CTA
├── App.tsx                  # Page layout composing all sections
├── App.css                  # Global styles (from headless-ds.html <style>)
└── main.tsx                 # Entry point
```

## Steps

### Phase 1: Scaffold & Tokens
1. `npm create vite@latest headless-ds -- --template react-ts`
2. Install Ark UI: `npm install @ark-ui/react`
3. Extract CSS tokens from `styles.css` into `src/tokens/default.css`
4. Create healthcare + fintech token overrides
5. Push to GitHub as `headless-ds` repo

### Phase 2: Headless Primitives
6. Build Button primitive (Ark UI, zero styling)
7. Build Card primitive (composition pattern)
8. Build Input primitive (Ark UI Field)
9. Build Alert primitive (Ark UI, variant prop)

### Phase 3: DS Components (tokens applied)
10. Build DS Button with token-driven variants (primary/secondary/ghost)
11. Build DS Card with token-driven styling
12. Build DS Input with token-driven styling
13. Build DS Alert with token-driven variants (info/success/warning/error)

### Phase 4: Page Sections
14. Hero section
15. WhyHeadless 3-card grid
16. Architecture diagram (SVG connectors, scroll animations)
17. Interactive demo (theme switcher, side-by-side)
18. Code examples (tabbed)
19. Pipeline section
20. INC Loop + CTA footer
21. Nav bar

### Phase 5: Ship
22. Verify all sections match the HTML page content
23. Deploy config (Vite static build)
24. Push to GitHub
25. Update Figma Code Connect mappings to point at real React components

## Key Principles
- **Content parity** — every word, every section from `headless-ds.html` carries over
- **Tokens are the bridge** — same CSS custom properties used in code AND Figma
- **Primitives ≠ Components** — the separation is the whole point of the page
- **The page proves itself** — "This page was built with the methodology it describes"
