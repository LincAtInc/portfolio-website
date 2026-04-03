---
name: Playwright Current State Pipeline
description: Automated C→N→I pipeline. Playwright captures live app state, outputs to inc/narrate/, feeds future state ideation in FigJam. Interview demo potential.
type: ideate
status: working-poc
---

# Current State Capture Pipeline

## What It Does
Playwright crawls a live app, screenshots every route, generates a structured markdown inventory in `inc/narrate/current-state/`. This is C captured into N — the foundation for I.

## The Full Cycle
1. **C (Current State)** — Playwright captures what exists: screenshots, routes, page titles
2. **N (Narrative)** — Structured markdown with frontmatter lands in `inc/narrate/`
3. **I (Future State)** — Agent reads N, generates NorthStar flows. FigJam plugin imports for team review.

## Working Proof
- `scripts/capture-current-state.ts` — captures 8 routes in ~10 seconds
- `inc/narrate/current-state/inventory.md` — structured output
- `public/images/current-state/` — full-page screenshots

## Interview Demo
"Let me show you how I'd audit your product in 10 seconds."
Run script → show inventory → show how an agent could generate improvement suggestions from the captured state.

## Next Steps (V8+)
- Add to System section as a page alongside FigJam plugin
- Connect to FigJam: current state left, future state right, team discusses in the middle
- Add DOM structure extraction (not just screenshots)
- Add component inventory detection from the captured HTML
