import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The System | Lincoln Mitchell",
  description:
    "The agent team, the methodology, and the CLAUDE.md that governs it all. See how one person and six AI agents built everything you see here.",
};

const systemPages = [
  {
    href: "/system/agents",
    label: "The Team",
    title: "One person. Six agents.",
    description:
      "Meet the AI team that built this site. Defined roles, clear boundaries, real output you can inspect.",
  },
  {
    href: "/system/how-this-was-built",
    label: "The Process",
    title: "How this was actually built",
    description:
      "Real conversations, real failures, real corrections. The Branch + Burn reality behind the polished output.",
  },
  {
    href: "/system/claude-md",
    label: "The Infrastructure",
    title: "CLAUDE.md, annotated",
    description:
      "The single file that governs six agents. This is what machine-readable culture looks like.",
  },
  {
    href: "/system/agent-readable",
    label: "The Format",
    title: "Agent-readable components",
    description:
      "What a component looks like when the primary reader is an AI agent — and why JSON beats Markdown.",
  },
  {
    href: "/system/figjam-plugin",
    label: "The Plugin",
    title: "FigJam to Narrative",
    description:
      "A working Figma plugin that extracts ideation boards into structured markdown. The I→N pipeline as a shipped artefact.",
  },
];

export default function SystemPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase">
          THE SYSTEM
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Making the invisible{" "}
          <span className="text-[var(--color-secondary)]">visible</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          Every page on this site was built by one person directing six AI
          agents, governed by a single context file. These pages show you how.
        </p>
      </header>

      <main>
        {/* Cards */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-10 bg-[#0a0f1a] border border-[#1e293b] rounded-xl no-underline flex flex-col gap-4 hover:border-[#334155] transition-colors"
              >
                <span className="font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.2em]">
                  {page.label}
                </span>
                <h2 className="font-display text-xl font-semibold text-white leading-[1.2] group-hover:text-[var(--color-secondary)] transition-colors">
                  {page.title}
                </h2>
                <p className="text-[15px] text-white/50 leading-relaxed flex-1">
                  {page.description}
                </p>
                <span className="text-[13px] text-[var(--color-secondary)] group-hover:text-white transition-colors mt-2">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* What this proves */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">
            The Proof
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            This site is the case study.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Most portfolios describe work. This one demonstrates it. The same
              methodology I use with clients — I&lt;N&gt;C, agentic design
              systems, machine-readable context — is the methodology that built
              every page you&apos;re reading.
            </p>
            <p>
              One person. Six agents. A single CLAUDE.md file encoding brand,
              voice, architecture, and design system rules. The agents don&apos;t
              freelance. They operate within a governed system — just like
              engineers on a well-run product team.
            </p>
            <p className="text-[var(--color-secondary)]/80">
              The system pages make that invisible infrastructure visible. Not as
              a technical exercise — as proof that the methodology works at the
              smallest possible scale, with the highest possible transparency.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-secondary)]/30 font-serif leading-none">
              &ldquo;
            </span>
            My portfolio demonstrates the system that my portfolio describes.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">
            Recursive proof of the I&lt;N&gt;C framework
          </cite>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">
          This page was generated via Claude Code prompts.
        </p>
        <p className="text-[13px] text-[#475569]">
          <Link href="/" className="text-blue-400 no-underline">
            lincolnmitchell.io
          </Link>{" "}
          &middot; Interfaces-N-Creatives since 2008
        </p>
      </footer>
    </>
  );
}
