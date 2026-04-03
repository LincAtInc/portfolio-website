import Link from "next/link";
import { Nav } from "@/components/Nav";
import { CTAFooter } from "@/components/CTAFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FigJam to Narrative: The I→N Plugin | Lincoln Mitchell",
  description:
    "A working Figma plugin that extracts FigJam ideation boards into structured markdown — the I→N pipeline in the INC framework, shipped as a real artefact.",
};

const pipelineSteps = [
  {
    number: "01",
    title: "Ideate in FigJam",
    body: "Stickies, screenshots, links, colour coding. Messy by design — that's the point. The ideation surface should have no overhead.",
    accent: "text-[var(--color-primary)]",
  },
  {
    number: "02",
    title: "Run the plugin",
    body: "Select a section, hit Extract. The plugin groups content by colour and section, then auto-saves the .md file to your Downloads folder.",
    accent: "text-[var(--color-secondary)]",
  },
  {
    number: "03",
    title: "Auto-move to inc/narrate/",
    body: "An fswatch rule catches the downloaded file and moves it to the right folder. Zero manual steps after the button press.",
    accent: "text-[var(--color-tertiary)]",
  },
  {
    number: "04",
    title: "Structured context, ready",
    body: "Frontmatter metadata, colour-grouped content, agent-readable markdown. Drop it in a CLAUDE.md glob and any agent can consume it.",
    accent: "text-[var(--color-warm)]",
  },
];

const colourConventions = [
  { colour: "Green",      hex: "#4ade80", category: "High Signal",   note: "Key insights worth acting on" },
  { colour: "Yellow",     hex: "#fbbf24", category: "General",       note: "Context, observations" },
  { colour: "Pink / Red", hex: "#f472b6", category: "Questions",     note: "Open questions needing answers" },
  { colour: "Blue",       hex: "#60a5fa", category: "Technical",     note: "Implementation detail, constraints" },
  { colour: "Violet",     hex: "#a78bfa", category: "Discussion",    note: "Points raised, debate, alternatives" },
  { colour: "Orange",     hex: "#fb923c", category: "Action Items",  note: "Things to do or follow up" },
  { colour: "Gray",       hex: "#94a3b8", category: "Notes",         note: "Background, reference, context" },
  { colour: "Teal",       hex: "#2dd4bf", category: "Validated",     note: "Confirmed, agreed, decided" },
];

const exampleOutput = `---
name: Day 2 - Talk 7
source: FigJam
extracted: 2026-04-03
type: narrate
total_stickies: 24
---

# Day 2 - Talk 7

## High Signal (green) — 8
- How do you reconcile components in Figma vs Code?
- Does the linter make variables where there are none?
- Token naming is the hardest part — tooling won't fix culture

## Questions (pink) — 12
- How much does FigmaLint cost in AI tokens?
- Can this work without a design tokens plugin?
- What's the migration path from legacy Sass?

## General (yellow) — 4
- Can you explain the tier 1-3 variables?
- The live demo was the strongest moment`;

export default function FigJamPluginPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <nav
        aria-label="Section navigation"
        className="max-w-[1440px] mx-auto px-8 md:px-20 pt-20 pb-0"
      >
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/system"
            className="text-white/40 hover:text-white/70 no-underline transition-colors"
          >
            &larr; The System
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60" aria-current="page">
            Plugin
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-10 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-tertiary)] tracking-[0.2em] uppercase">
          System / Plugin
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          FigJam to{" "}
          <span className="text-[var(--color-tertiary)]">Narrative</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          The I&nbsp;&harr;&nbsp;N pipeline as a working Figma plugin. Extract
          ideation into structured context — or import narrative back into FigJam.
        </p>
      </header>

      <main>

        {/* Section 1: The Problem */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-tertiary)] uppercase tracking-[0.2em] block mb-4">
            The Problem
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Ideation is rich. Extraction is manual.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px]">
            {[
              {
                heading: "FigJam is the natural home",
                body: "Stickies, screenshots, link previews, colour coding, connector lines. Teams think in FigJam — it has the lowest ideation overhead of any tool.",
                accent: "border-l-[var(--color-tertiary)]",
                labelColor: "text-[var(--color-tertiary)]",
                label: "The ideal",
              },
              {
                heading: "The Figma MCP falls short",
                body: "The Figma MCP can read FigJam — but comments don't copy across, screenshots require per-node calls, and large boards exceed token limits. No semantic understanding of colour conventions.",
                accent: "border-l-[var(--color-error)]",
                labelColor: "text-[var(--color-error)]",
                label: "The gap",
              },
              {
                heading: "Manual extraction is lossy",
                body: "Copy-pasting stickies into a doc loses colour groupings, discards connector relationships, and drops the structural metadata that makes context useful to an agent.",
                accent: "border-l-[#f97316]",
                labelColor: "text-[#f97316]",
                label: "The cost",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`p-6 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${item.accent} rounded-xl`}
              >
                <span className={`font-mono text-[11px] ${item.labelColor} uppercase tracking-[0.2em] block mb-2`}>
                  {item.label}
                </span>
                <h3 className="font-display text-[16px] font-semibold text-white leading-[1.3] mb-3">
                  {item.heading}
                </h3>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Demo Screenshots */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto bg-[var(--color-surface-container-low)]">
          <span className="font-mono text-[11px] text-[var(--color-tertiary)] uppercase tracking-[0.2em] block mb-4">
            In Action
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-16">
            From sticky to structured in one click
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <img
                src="/images/figjam-plugin/01-plugin-ui.png"
                alt="FigJam to Narrative plugin UI with folder input and Extract button"
                className="rounded-xl border border-[var(--color-outline-variant)]/20 w-full"
              />
              <p className="text-[13px] text-white/40 font-mono">01 — Plugin UI with folder input and Extract button</p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/figjam-plugin/02-extract.png"
                alt="Extraction complete with folder prefix in save dialog"
                className="rounded-xl border border-[var(--color-outline-variant)]/20 w-full"
              />
              <p className="text-[13px] text-white/40 font-mono">02 — Extracted markdown with auto-save dialog</p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/figjam-plugin/03-save-dialog.png"
                alt="VS Code file tree showing the extracted file in inc/narrate/test/"
                className="rounded-xl border border-[var(--color-outline-variant)]/20 w-full"
              />
              <p className="text-[13px] text-white/40 font-mono">03 — File appears in inc/narrate/ via fswatch</p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/figjam-plugin/04-result-vscode.png"
                alt="Generated markdown with frontmatter open in VS Code"
                className="rounded-xl border border-[var(--color-outline-variant)]/20 w-full"
              />
              <p className="text-[13px] text-white/40 font-mono">04 — Structured markdown with frontmatter, ready for agents</p>
            </div>
          </div>
        </section>

        {/* Section: Bidirectional — N → I */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.2em] block mb-4">
            The Other Direction
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            N &rarr; I: Import narrative back into FigJam
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            The plugin works both ways. Load a structured markdown file and it
            creates colour-coded stickies in a new FigJam section — ready for
            the next round of ideation. Every C becomes context for the next I.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/figjam-plugin/05-bidirectional.png"
                alt="N to I import: markdown loaded into plugin, stickies created in FigJam"
                className="rounded-xl border border-[var(--color-outline-variant)]/20 w-full"
              />
              <p className="text-[13px] text-white/40 font-mono mt-3">N &rarr; I — Structured narrative imported as colour-coded stickies</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] text-[var(--color-secondary)] mt-1">01</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-1">Load or paste markdown</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">Browse for a .md file from inc/narrate/ or paste directly. The parser reads frontmatter, colour-group headers, and list items.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] text-[var(--color-secondary)] mt-1">02</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-1">Colour mapping reversed</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">&ldquo;High Signal&rdquo; becomes green stickies. &ldquo;Questions&rdquo; becomes pink. The same conventions, in both directions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] text-[var(--color-secondary)] mt-1">03</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-1">New section, auto-positioned</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">Stickies appear in a named section, laid out in a 3-column grid, positioned clear of existing content. The viewport scrolls to show the result.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pipeline */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] block mb-4">
            How It Works
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Four steps from messy to structured
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-16">
            The plugin bridges the gap between how teams think (FigJam) and how
            agents consume context (structured markdown with frontmatter).
          </p>

          {/* Pipeline — horizontal on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0 relative">
            {pipelineSteps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Connector arrow between steps */}
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-[2.75rem] translate-x-1/2 z-10">
                    <span className="text-white/15 text-xl">&rarr;</span>
                  </div>
                )}
                <div className="p-8 bg-[#0a0f1a] border border-[#1e293b] rounded-xl m-1 flex flex-col gap-4 flex-1">
                  <span className={`font-mono text-[11px] ${step.accent} uppercase tracking-[0.2em]`}>
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-[18px] font-semibold text-white leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-white/40 leading-relaxed flex-1">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: The Output */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.2em] block mb-4">
            The Output
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Structured markdown, ready to consume
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-10">
            Frontmatter carries the metadata. Colour-grouped sections preserve
            the semantic structure. Any agent consuming{" "}
            <code className="text-[var(--color-primary)] text-[15px]">inc/narrate/</code>{" "}
            can parse and reason over it without further processing.
          </p>

          <div className="bg-[#060e20] border border-[#1e293b] rounded-xl overflow-hidden max-w-[720px]">
            {/* Code block header */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-[#1e293b] bg-[#0a0f1a]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[11px] text-white/30 ml-2">
                inc/narrate/ids-2026/day-2-talk-7.md
              </span>
            </div>
            <pre className="text-[13px] font-mono leading-[1.7] p-6 overflow-x-auto">
              {exampleOutput.split("\n").map((line, i) => {
                // Frontmatter lines — muted blue
                if (line === "---") {
                  return (
                    <span key={i} className="text-white/20 block">
                      {line}
                    </span>
                  );
                }
                if (line.includes(":") && !line.startsWith("#") && !line.startsWith("-")) {
                  const colonIdx = line.indexOf(":");
                  return (
                    <span key={i} className="block">
                      <span className="text-[var(--color-secondary)]/70">
                        {line.slice(0, colonIdx)}
                      </span>
                      <span className="text-white/25">:</span>
                      <span className="text-[#8b9ec7]">
                        {line.slice(colonIdx + 1)}
                      </span>
                    </span>
                  );
                }
                // H1 title
                if (line.startsWith("# ")) {
                  return (
                    <span key={i} className="text-white font-semibold block">
                      {line}
                    </span>
                  );
                }
                // H2 headings
                if (line.startsWith("## ")) {
                  return (
                    <span key={i} className="text-[var(--color-primary)] block mt-2">
                      {line}
                    </span>
                  );
                }
                // List items
                if (line.startsWith("- ")) {
                  return (
                    <span key={i} className="text-[#8b9ec7] block">
                      <span className="text-white/20">- </span>
                      {line.slice(2)}
                    </span>
                  );
                }
                // Empty lines
                if (line === "") {
                  return <span key={i} className="block">&nbsp;</span>;
                }
                return (
                  <span key={i} className="text-[#8b9ec7] block">
                    {line}
                  </span>
                );
              })}
            </pre>
          </div>
        </section>

        {/* Section 4: Colour Conventions */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-tertiary)] uppercase tracking-[0.2em] block mb-4">
            Colour Conventions
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Colour as semantic signal
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[600px] mb-12">
            The plugin reads Figma&apos;s sticky colour names and maps them to
            human-readable categories. The mapping is consistent across every
            board — colour stops being decoration and starts being structure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1000px]">
            {colourConventions.map((item) => (
              <div
                key={item.colour}
                className="flex items-start gap-3 p-4 bg-[#0a0f1a] border border-[#1e293b] rounded-xl"
              >
                {/* Colour swatch */}
                <div
                  className="w-4 h-4 rounded-sm mt-0.5 shrink-0"
                  style={{ backgroundColor: item.hex }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[13px] font-semibold text-white leading-none mb-1">
                    {item.category}
                  </p>
                  <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.05em] mb-1.5">
                    {item.colour}
                  </p>
                  <p className="text-[12px] text-white/35 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Why This Matters */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.2em] block mb-4">
            Why This Matters
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-12">
            Three reasons this plugin matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px]">
            {[
              {
                number: "01",
                heading: "Proves INC in action",
                body: "The plugin doesn't just describe the I→N pipeline — it embodies it. Every extraction is the methodology executing. This is what proof-of-practice looks like.",
                accent: "text-[var(--color-primary)]",
                borderAccent: "border-l-[var(--color-primary)]",
              },
              {
                number: "02",
                heading: "Built with Claude Code",
                body: "The same agentic workflow this site demonstrates was used to build the plugin. One session. Vanilla JS for the Figma plugin runtime. Claude Code wrote the extraction logic.",
                accent: "text-[var(--color-secondary)]",
                borderAccent: "border-l-[var(--color-secondary)]",
              },
              {
                number: "03",
                heading: "The missing NorthStar",
                body: "Nobody at IDS 2026 showed this pipeline. Talking about extracting FigJam to context is common. Shipping a working plugin that does it is not.",
                accent: "text-[var(--color-tertiary)]",
                borderAccent: "border-l-[var(--color-tertiary)]",
              },
            ].map((item) => (
              <div
                key={item.number}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${item.borderAccent} rounded-xl flex flex-col gap-4`}
              >
                <span className={`font-mono text-[11px] ${item.accent} uppercase tracking-[0.2em]`}>
                  {item.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-white leading-[1.2]">
                  {item.heading}
                </h3>
                <p className="text-[15px] text-white/45 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: View the Code */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] block mb-4">
            The Code
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Three files. Vanilla JS.
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-10">
            The plugin follows the standard Figma plugin anatomy. No framework,
            no build step — just the three files the Figma runtime requires, built
            with Claude Code in a single session.
          </p>

          <div className="bg-[#060e20] border border-[#1e293b] rounded-xl overflow-hidden max-w-[520px] mb-8">
            <div className="px-5 py-3 border-b border-[#1e293b] bg-[#0a0f1a]">
              <span className="font-mono text-[11px] text-white/30">
                plugins/figjam-to-narrative/
              </span>
            </div>
            <pre className="text-[14px] font-mono leading-[2] p-6">
              <span className="text-[#f97316]">  manifest.json</span>
              <span className="text-white/20">   → plugin config + permissions</span>{"\n"}
              <span className="text-[var(--color-primary)]">  code.js</span>
              <span className="text-white/20">       → extraction logic, colour mapping</span>{"\n"}
              <span className="text-[var(--color-secondary)]">  ui.html</span>
              <span className="text-white/20">       → folder input, extract button, preview</span>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/LincAtInc/portfolio-website/tree/main/plugins/figjam-to-narrative"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0f1a] border border-[#1e293b] rounded-lg text-[14px] text-white/60 hover:text-white hover:border-[#334155] transition-colors no-underline font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub &rarr;
            </a>
            <Link
              href="/system/agent-readable"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0f1a] border border-[#1e293b] rounded-lg text-[14px] text-white/60 hover:text-white hover:border-[#334155] transition-colors no-underline font-mono"
            >
              Agent-readable components &rarr;
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 text-center max-w-[1440px] mx-auto">
          <p className="font-display text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium text-white leading-[1.5] tracking-tight max-w-[700px] mx-auto mb-4">
            This plugin was built in a single Claude Code session. The
            methodology that created it is the methodology it captures.
          </p>
          <Link
            href="/inc"
            className="inline-flex items-center gap-2 mt-4 text-[var(--color-tertiary)] hover:text-white transition-colors no-underline font-mono text-[13px] uppercase tracking-[0.15em]"
          >
            See the INC framework &rarr;
          </Link>
        </section>
      </main>

      <CTAFooter />
    </>
  );
}
