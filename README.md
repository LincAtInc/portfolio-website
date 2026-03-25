# Lincoln Mitchell - Portfolio Website

A modern portfolio website showcasing expertise in AI-assisted development, design systems, and vibe coding methodologies.

## Overview

This portfolio highlights Lincoln Mitchell's approach to modern software development, bridging discovery and delivery through tools like Claude Code, V0.dev, and Cursor.ai, while maintaining consistency through code-based design systems.

## Features

- **Design System Architecture**: Built with a comprehensive design token system (colors, typography, spacing, shadows, transitions)
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, and 1024px
- **Semantic HTML**: Clean, accessible structure
- **Modern CSS**: CSS custom properties, Grid, Flexbox
- **Performance Optimized**: Minimal dependencies, pure HTML/CSS
- **Accessibility**: Reduced motion support, semantic markup

## Design System Tokens

The website is built on a robust design system with the following token categories:

### Color Tokens
- Primary palette (blue tones for CTAs and interactive elements)
- Secondary palette (purple for accents)
- Text hierarchy (primary, secondary, tertiary)
- Background layers
- Border colors

### Typography Tokens
- Font families (system fonts for performance)
- Size scale (xs to 6xl)
- Weight scale (normal to bold)
- Line height (tight, normal, relaxed)

### Spacing Tokens
- Consistent 8-point grid system
- Scale from 0.25rem to 6rem

### Component Tokens
- Border radius (sm to full)
- Shadows (sm to xl)
- Transitions (fast, base, slow)

## File Structure

```
portfolio-website/
├── index.html          # Main HTML structure
├── styles.css          # Design system and styles
└── README.md           # This file
```

## Running Locally

Simply open `index.html` in a modern web browser:

```bash
cd portfolio-website
open index.html  # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

For development with live reload, you can use any static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Sections

1. **Hero**: Eye-catching introduction with gradient background
2. **About**: Professional background and statistics
3. **The Vibe Coding Approach**: Detailed methodology using Claude Code, V0.dev, and Cursor.ai
4. **Featured Projects**: Portfolio of significant work including Helix, RAC, CityWatch, and more
5. **Design Philosophy**: Core principles and approach
6. **Contact**: LinkedIn profile and availability

## Customization

### Updating Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --color-primary: #2563eb;  /* Change primary brand color */
    --color-secondary: #8b5cf6;  /* Change secondary accent */
}
```

### Adding Projects

Add new project cards in the `#projects` section of `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <span class="project-role">Your Role</span>
    </div>
    <p class="project-description">Description here...</p>
    <div class="project-tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
    </div>
</div>
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Zero dependencies**: Pure HTML/CSS
- **Fast load times**: No JavaScript required
- **Optimized assets**: System fonts, CSS custom properties
- **Minimal CSS**: Single stylesheet with design tokens

## Accessibility

- Semantic HTML5 elements
- ARIA-compliant navigation
- Reduced motion support for users with vestibular disorders
- Keyboard navigation support
- High contrast text colors

## Future Enhancements

Consider adding:
- Dark mode toggle
- Interactive project galleries
- Contact form with backend
- Blog integration
- Case study deep-dives
- Animation libraries (GSAP, Framer Motion)
- Analytics tracking

## License

© 2026 Lincoln Mitchell. All rights reserved.

---

Built with modern web standards and a focus on performance. Created using AI-assisted development tools that bridge discovery and delivery.
