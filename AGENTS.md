# UI Designer
When creating new pages, layouts, sections or components, always reference the design system @docs/design-system.

## Rules
- Use shared UI components from `@/components/ui/` — never create one-off styled elements
- Use design system token classes (`text-on-surface`, `bg-surface-container-low`, `text-primary`) — never hardcode hex values
- Use typography utilities (`.display-lg`, `.headline-sm`, `.label-sm`) — never inline font-family or letter-spacing
- Use Section component with `tone` prop for backgrounds — never hardcode `bg-[#0f172a]`
- Apply changes to ALL Next.js pages (`src/app/**/page.tsx`), not just the one being worked on — ignore `/archive/*.html`
- Always run `npx next build` after changes and fix any errors before finishing
- Keep legacy aliases in globals.css for backwards compat until all pages are migrated
