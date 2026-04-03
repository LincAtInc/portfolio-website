import Link from "next/link";
import { Nav } from "@/components/Nav";
import { RevealSection } from "@/components/RevealSection";
import { CTAFooter } from "@/components/CTAFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What I Ship With Claude | Lincoln Mitchell",
  description:
    "Six workflows — each a full I<N>C cycle. From app audits to plugin development, this is what one person with the right methodology delivers.",
};

const workflows = [
  {
    name: "App Audit",
    status: "Working PoC",
    statusColor: "bg-[var(--color-warm)]/20 text-[var(--color-warm)]",
    i: "Playwright captures current state — screenshots, routes, page inventory",
    n: "Structured markdown inventory lands in inc/narrate/. Agent reads what exists.",
    c: "Improvement recommendations, gap analysis, NorthStar for what's next",
  },
  {
    name: "Conference Review",
    status: "Shipped",
    statusColor: "bg-[var(--color-tertiary)]/20 text-[var(--color-tertiary)]",
    i: "FigJam notes — stickies, screenshots, links, colour-coded by signal",
    n: "Plugin extracts to structured markdown. 16 talks analysed, Q&As captured.",
    c: "Positioning analysis, reference files, content opportunities, Room After the Talk page",
  },
  {
    name: "Design System Seed",
    status: "Shipped",
    statusColor: "bg-[var(--color-tertiary)]/20 text-[var(--color-tertiary)]",
    i: "Token exploration in FigJam. Brand values, colour palettes, type scales.",
    n: "CLAUDE.md + token JSON + component contracts. The system becomes the context.",
    c: "Components in code, Storybook stories, design system documentation page",
  },
  {
    name: "NorthStar Prototype",
    status: "Core Method",
    statusColor: "bg-[var(--color-primary)]/20 text-[var(--color-primary)]",
    i: "Vision stickies + sketches in FigJam. What could exist, not what does.",
    n: "Domain knowledge, brand context, user research, SME conversations encoded as context",
    c: "Working prototype in code. Not a mockup — a real, interactive proof of concept.",
  },
  {
    name: "Content Pipeline",
    status: "Shipped",
    statusColor: "bg-[var(--color-tertiary)]/20 text-[var(--color-tertiary)]",
    i: "Thought stickies, research notes, conference insights in FigJam",
    n: "Structured narrative files in inc/narrate/. Agent reads and positions.",
    c: "Published thoughts pages on the site. 9 pages, each a chapter.",
  },
  {
    name: "Plugin Development",
    status: "Shipped",
    statusColor: "bg-[var(--color-tertiary)]/20 text-[var(--color-tertiary)]",
    i: "Problem identified: manual I\u2192N extraction is lossy and slow",
    n: "Figma Plugin API skill + CLAUDE.md + Davy Fung\u2019s prompt.md pattern",
    c: "Bidirectional FigJam plugin. Built in one Claude Code session.",
  },
];

const columns = [
  { key: "i" as const, label: "I", title: "Ideate", color: "var(--color-primary)", border: "border-t-[var(--color-primary)]" },
  { key: "n" as const, label: "<N>", title: "Narrate", color: "var(--color-secondary)", border: "border-t-[var(--color-secondary)]" },
  { key: "c" as const, label: "C", title: "Create", color: "var(--color-tertiary)", border: "border-t-[var(--color-tertiary)]" },
];

export default function WorkflowsPage() {
  return (
    <>
      <Nav />

      <nav className="px-8 md:px-20 pt-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/system" className="text-white/40 hover:text-white/70 no-underline transition-colors">
            &larr; The System
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60" aria-current="page">Workflows</span>
        </div>
      </nav>

      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-10 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">
          System / Workflows
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          What I Ship With{" "}
          <span className="text-[var(--color-tertiary)]">Claude</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          Every workflow starts in FigJam, flows through structured context, and
          produces something real. Here&apos;s what one person with the right
          methodology delivers.
        </p>
      </header>

      <main>
        <section className="px-8 md:px-20 pb-24 max-w-[1440px] mx-auto">
          <RevealSection stagger className="flex flex-col gap-8">
            {workflows.map((wf, i) => (
              <div
                key={wf.name}
                style={{ "--stagger": i } as React.CSSProperties}
                className="bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/20 rounded-xl overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--color-outline-variant)]/15">
                  <h2 className="font-display text-lg font-semibold text-white">{wf.name}</h2>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full ${wf.statusColor}`}>
                    {wf.status}
                  </span>
                </div>

                {/* I / N / C columns */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {columns.map((col) => (
                    <div
                      key={col.key}
                      className={`p-6 md:p-8 border-t-2 ${col.border} ${col.key !== "c" ? "md:border-r md:border-r-[var(--color-outline-variant)]/10" : ""}`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="font-mono text-[13px] font-bold"
                          style={{ color: col.color }}
                        >
                          {col.label}
                        </span>
                        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.1em]">
                          {col.title}
                        </span>
                      </div>
                      <p className="text-[14px] text-white/50 leading-relaxed">
                        {wf[col.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </RevealSection>
        </section>

        {/* Closing */}
        <section className="px-8 md:px-20 py-16 max-w-[1440px] mx-auto text-center">
          <RevealSection>
            <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mx-auto mb-8">
              Each workflow is a full I&lt;N&gt;C cycle. The output of one becomes
              context for the next. That&apos;s how one person compounds capability.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/inc"
                className="text-[15px] font-medium text-white bg-[var(--color-primary-container)] px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity"
              >
                The INC Framework
              </Link>
              <Link
                href="/fit"
                className="text-[15px] font-medium text-white/50 border border-[var(--color-outline-variant)] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[var(--color-outline)] transition-colors"
              >
                Right Fit / Wrong Fit
              </Link>
            </div>
          </RevealSection>
        </section>

        <CTAFooter />
      </main>
    </>
  );
}
