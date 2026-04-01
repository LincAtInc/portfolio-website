"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";

// ── Types ────────────────────────────────────────────────────────────────────

type SurfaceId =
  | "bio"
  | "projects"
  | "methodology"
  | "recruiter"
  | "thoughts"
  | "design-system"
  | "system";

// ── Keyword matching ─────────────────────────────────────────────────────────

const KEYWORD_MAP: { id: SurfaceId; keywords: string[] }[] = [
  {
    id: "bio",
    keywords: ["who", "about", "lincoln", "bio", "background", "person"],
  },
  {
    id: "projects",
    keywords: [
      "work",
      "projects",
      "portfolio",
      "case studies",
      "built",
      "clients",
      "done",
    ],
  },
  {
    id: "methodology",
    keywords: [
      "inc",
      "framework",
      "methodology",
      "process",
      "narrate",
      "ideate",
      "create",
      "agentic",
    ],
  },
  {
    id: "recruiter",
    keywords: [
      "hiring",
      "recruit",
      "contract",
      "full-time",
      "available",
      "cto",
      "lead",
      "architect",
      "legacy",
      "opportunity",
      "job",
      "hire",
    ],
  },
  {
    id: "thoughts",
    keywords: [
      "think",
      "opinion",
      "ai",
      "essays",
      "articles",
      "writing",
      "thoughts",
      "read",
      "mcgilchrist",
    ],
  },
  {
    id: "design-system",
    keywords: [
      "design system",
      "tokens",
      "components",
      "headless",
      "colours",
      "typography",
      "variables",
      "color",
      "colours",
    ],
  },
  {
    id: "system",
    keywords: [
      "built",
      "claude",
      "agents",
      "claude.md",
      "pipeline",
      "how does",
      "agent",
    ],
  },
];

function matchIntent(input: string): SurfaceId | null {
  const lower = input.toLowerCase();
  for (const { id, keywords } of KEYWORD_MAP) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return id;
    }
  }
  return null;
}

// ── Suggested chips ───────────────────────────────────────────────────────────

const CHIPS: { label: string; surface: SurfaceId }[] = [
  { label: "Who is Lincoln?", surface: "bio" },
  { label: "Show me his work", surface: "projects" },
  { label: "What's INC?", surface: "methodology" },
  { label: "I'm hiring", surface: "recruiter" },
  { label: "AI thoughts", surface: "thoughts" },
  { label: "Design system", surface: "design-system" },
  { label: "How was this built?", surface: "system" },
];

// ── Placeholder cycling ───────────────────────────────────────────────────────

const PLACEHOLDERS = [
  "Who is Lincoln?",
  "Show me his work",
  "What's the INC framework?",
  "I'm hiring a design systems architect",
  "How was this site built?",
];

// ── Surface components ────────────────────────────────────────────────────────

function SurfaceBio({ onShowProjects }: { onShowProjects: () => void }) {
  return (
    <div className="space-y-8 animate-surface">
      {/* Name block */}
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <h2 className="display-lg text-on-surface mb-1">Lincoln Mitchell</h2>
        <p className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase mb-2">
          Design Systems Architect
        </p>
        <p className="text-on-surface-variant">
          Designer · Developer · Agent Orchestrator
        </p>
      </div>

      {/* Bio */}
      <div
        className="space-y-4 text-on-surface-variant leading-relaxed animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        <p>
          Design systems architect with 17+ years of experience bridging design and
          engineering. Founder of{" "}
          <span className="text-on-surface">Interfaces-N-Creatives</span> (INC) since
          2008. Based in London and Sydney — dual nationality, open to work in both
          markets.
        </p>
        <p>
          Previously Chief Design Officer at MedicalDirector (Telstra Health), Design
          Director at PenCS, Design Systems Lead at Breville and Adelaide University
          via Merkle/Dentsu. Currently open to full-time or contract opportunities.
        </p>
        <p>
          This site is the case study. Every page was built by Lincoln directing a
          four-agent AI team using a machine-readable design system. The methodology
          it describes is the methodology that built it.
        </p>
      </div>

      {/* Stat pills */}
      <div
        className="flex flex-wrap gap-3 animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        {["Since 2008", "London + Sydney", "Open to opportunities"].map((stat) => (
          <span
            key={stat}
            className="px-4 py-2 rounded-full border border-[#1e293b] text-sm text-on-surface-variant"
          >
            {stat}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4 animate-region"
        style={{ "--stagger": "3" } as React.CSSProperties}
      >
        <a
          href="https://cal.com/lincmitch"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gradient-signature text-white text-sm font-medium hover:brightness-110 transition-all"
        >
          Book a call
        </a>
        <button
          onClick={onShowProjects}
          className="px-6 py-3 rounded-lg border border-[#1e293b] text-on-surface-variant text-sm hover:text-on-surface hover:border-[#475569] transition-colors"
        >
          See his work →
        </button>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    name: "Fun Lab",
    company: "Dentsu / Merkle",
    role: "Design Associate Director",
    description: "Multi-brand design token system across Dentsu's global network.",
    tags: ["Design Tokens", "Chakra UI", "Multi-Brand"],
  },
  {
    name: "Helix",
    company: "MedicalDirector / Telstra Health",
    role: "Chief Design Officer",
    description: "NorthStar prototype that inverted the biopsychosocial model to surface mental health in clinical software.",
    tags: ["NorthStar", "Design Ops", "Healthcare"],
  },
  {
    name: "PenCS",
    company: "PenCS",
    role: "Design Director",
    description: "Design system and component library for clinical primary care software.",
    tags: ["Plasmic", "Healthcare", "Clinical"],
  },
  {
    name: "Breville",
    company: "Breville",
    role: "Design Systems Lead",
    description: "Framer-based design system with React component library and ESModule architecture.",
    tags: ["Framer", "React", "AWS"],
  },
  {
    name: "Adelaide University",
    company: "Merkle",
    role: "Design Systems Lead",
    description: "Figma component library and design token pipeline for university-scale design system.",
    tags: ["Figma", "Tokens", "Education"],
  },
  {
    name: "Red Rooster",
    company: "NCGroup",
    role: "Design Systems Specialist",
    description: "UX prototyping and design system foundations for Australia's leading fast-food brand.",
    tags: ["Framer", "UX Prototyping"],
  },
];

function SurfaceProjects() {
  return (
    <div className="space-y-8 animate-surface">
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <h2 className="headline-md text-on-surface mb-2">Selected Work</h2>
        <p className="text-on-surface-variant text-sm">
          Design systems, NorthStar prototypes, and component libraries across healthcare, retail, education, and enterprise.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 space-y-3"
          >
            <div>
              <h3 className="text-on-surface font-semibold">{project.name}</h3>
              <p className="text-[var(--color-primary)] text-xs font-mono tracking-wide">
                {project.role}
              </p>
              <p className="text-on-surface-variant text-xs">{project.company}</p>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full border border-[#1e293b] text-xs text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-on-surface transition-colors"
        >
          View full details →
        </Link>
      </div>
    </div>
  );
}

function SurfaceMethodology() {
  return (
    <div className="space-y-10 animate-surface">
      {/* INC display */}
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <div className="font-mono text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-[var(--color-warm)]">I</span>
          <span className="text-on-surface-variant mx-2 text-4xl md:text-6xl">{"<"}</span>
          <span className="text-[var(--color-secondary)]">N</span>
          <span className="text-on-surface-variant mx-2 text-4xl md:text-6xl">{">"}</span>
          <span className="text-[var(--color-primary)]">C</span>
        </div>
      </div>

      {/* Three columns */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        <div className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 border-t-2 border-t-[var(--color-warm)]">
          <div className="font-mono text-2xl font-bold text-[var(--color-warm)] mb-3">I</div>
          <h3 className="text-on-surface font-semibold mb-2">Ideate</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Intent, vision, NorthStar prototyping. The human conviction that precedes
            discovery. The spark that the agentic system cannot generate — it comes from
            the person.
          </p>
        </div>
        <div className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 border-t-2 border-t-[var(--color-secondary)]">
          <div className="font-mono text-2xl font-bold text-[var(--color-secondary)] mb-3">
            {"<N>"}
          </div>
          <h3 className="text-on-surface font-semibold mb-2">Narrate</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            The agentic design system. Tokens, context files, domain knowledge encoded for
            AI consumption. The bridge that amplifies both directions — not a step between
            I and C, but the layer that radiates into both.
          </p>
        </div>
        <div className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 border-t-2 border-t-[var(--color-primary)]">
          <div className="font-mono text-2xl font-bold text-[var(--color-primary)] mb-3">C</div>
          <h3 className="text-on-surface font-semibold mb-2">Create</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Production code, components, shipped output. Directive UI constrained by the
            system. The left-brain emissary executing what the right-brain master envisioned.
          </p>
        </div>
      </div>

      {/* Recursive note */}
      <div
        className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        <p className="text-on-surface-variant text-sm leading-relaxed">
          The design system IS the markup that wraps everything.{" "}
          <code className="text-[var(--color-secondary)] font-mono">{"<N>"}</code> reads
          like an HTML tag — because it is one. The angle brackets are not decoration. They
          are syntax.
        </p>
      </div>

      <div
        className="animate-region"
        style={{ "--stagger": "3" } as React.CSSProperties}
      >
        <Link
          href="/thoughts/beyond-ui"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-on-surface transition-colors"
        >
          Read the deep dive →
        </Link>
      </div>
    </div>
  );
}

function SurfaceRecruiter({ hasLegacy }: { hasLegacy: boolean }) {
  return (
    <div className="space-y-8 animate-surface">
      {/* Intent reflection */}
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <p className="text-[var(--color-warm-light)] font-mono text-sm tracking-wide mb-4">
          You&apos;re looking for a Design Systems Architect
        </p>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-on-surface text-sm font-medium">
            Available — contract or full-time, UK / Australia
          </span>
        </div>
      </div>

      {/* Why Lincoln */}
      <div
        className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 space-y-4 animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        <h3 className="text-on-surface font-semibold">Why Lincoln</h3>
        <ul className="space-y-3">
          {[
            "17+ years as a hybrid Designer/Developer — genuine 50/30/20 split, not a designer who learned to code",
            "Built design systems at Dentsu, Telstra Health, Breville, PenCS — from tokens to governance",
            "Pioneering agentic design systems — AI agents that consume the design system as infrastructure",
          ].map((point) => (
            <li key={point} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
              <span className="text-[var(--color-primary)] mt-0.5 flex-shrink-0">→</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Mini project cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        {[
          {
            name: "Fun Lab",
            company: "Dentsu / Merkle",
            role: "Design Associate Director",
            achievement: "Multi-brand token system adopted across a global agency network",
          },
          {
            name: "Helix",
            company: "Telstra Health",
            role: "Chief Design Officer",
            achievement: "NorthStar prototype that realigned a $100M clinical platform roadmap",
          },
          {
            name: "Breville",
            company: "Breville",
            role: "Design Systems Lead",
            achievement: "React design system with ESModule architecture shipped to production",
          },
        ].map((card) => (
          <div
            key={card.name}
            className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-5 space-y-2"
          >
            <h4 className="text-on-surface font-semibold text-sm">{card.name}</h4>
            <p className="text-[var(--color-primary)] text-xs font-mono">{card.role}</p>
            <p className="text-on-surface-variant text-xs">{card.company}</p>
            <p className="text-on-surface-variant text-xs leading-relaxed border-t border-[#1e293b] pt-2 mt-2">
              {card.achievement}
            </p>
          </div>
        ))}
      </div>

      {/* Legacy callout */}
      {hasLegacy && (
        <div
          className="bg-[var(--color-warm)]/10 border border-[var(--color-warm)]/30 rounded-xl p-5 animate-region"
          style={{ "--stagger": "3" } as React.CSSProperties}
        >
          <p className="text-[var(--color-warm-light)] font-semibold text-sm mb-1">
            Working with a legacy codebase?
          </p>
          <p className="text-on-surface-variant text-sm mb-3">
            Lincoln has a track record of introducing design systems into existing codebases without
            stopping the ship. It requires a different kind of thinking.
          </p>
          <Link
            href="/thoughts/approved-in-theory"
            className="text-sm text-[var(--color-warm)] hover:text-[var(--color-warm-light)] transition-colors"
          >
            Read: Approved in Theory →
          </Link>
        </div>
      )}

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4 animate-region"
        style={{ "--stagger": hasLegacy ? "4" : "3" } as React.CSSProperties}
      >
        <a
          href="https://cal.com/lincmitch"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gradient-signature text-white text-sm font-medium hover:brightness-110 transition-all"
        >
          Book a call
        </a>
        <a
          href="mailto:linc@lincolnmitchell.io"
          className="px-6 py-3 rounded-lg border border-[#1e293b] text-on-surface-variant text-sm hover:text-on-surface hover:border-[#475569] transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

const ESSAYS = [
  { title: "AI & Creativity", attribution: "Iain McGilchrist", description: "AI is assistive technology — not a replacement for human creativity.", href: "/thoughts" },
  { title: "Scout Bees", attribution: "Helen Taylor", description: "How distributed cognition maps to agentic design teams.", href: "/thoughts/scout-bees" },
  { title: "MIND Strengths", attribution: "Brock & Eide", description: "The Dyslexic Advantage as a design systems superpower.", href: "/thoughts/dyslexic-advantage" },
  { title: "Digital Samsara", attribution: "Ajahn Sumedho", description: "Buddhist philosophy and the infinite scroll.", href: "/thoughts/digital-samsara" },
  { title: "Make Culture", attribution: "Controversial", description: "Design thinking is dead. Make culture is what's next.", href: "/thoughts/make-culture" },
  { title: "Competing Values", attribution: "Quinn & Cameron", description: "The CVF as a framework for design leadership.", href: "/thoughts/competing-values" },
  { title: "Stakeholder Simulator", attribution: "Alan Cooper", description: "Building empathy engines instead of personas.", href: "/thoughts/stakeholder-simulator" },
  { title: "Assistive Tech", attribution: "Personal", description: "How assistive technology changed what I build.", href: "/thoughts/assistive-tech" },
  { title: "Beyond the Screen", attribution: "IDS 2026", description: "Agentic design systems break the UI boundary.", href: "/thoughts/beyond-ui" },
  { title: "Approved in Theory", attribution: "Personal", description: "Why good ideas die in organisations — and how to stop it.", href: "/thoughts/approved-in-theory" },
  { title: "Room After the Talk", attribution: "IDS 2026", description: "What happens when the conference ends and the real conversation starts.", href: "/thoughts/room-after-the-talk" },
  { title: "Product Primitives", attribution: "Yesenia Perez-Cruz", description: "The interface I designed before I knew I was designing.", href: "/thoughts/product-primitives" },
];

function SurfaceThoughts() {
  return (
    <div className="space-y-6 animate-surface">
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <h2 className="headline-md text-on-surface mb-2">Essays & Thinking</h2>
        <p className="text-on-surface-variant text-sm">
          Reading as design research. Each essay maps a book or idea to the practice of building design systems.
        </p>
      </div>

      <div
        className="space-y-2 animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        {ESSAYS.map((essay) => (
          <Link
            key={essay.href}
            href={essay.href}
            className="flex items-start justify-between gap-4 p-4 rounded-xl bg-[#0a0f1a] border border-[#1e293b] hover:border-[#475569] transition-colors group"
          >
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-on-surface text-sm font-medium">{essay.title}</span>
                <span className="text-on-surface-variant text-xs font-mono">
                  — {essay.attribution}
                </span>
              </div>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                {essay.description}
              </p>
            </div>
            <span className="text-on-surface-variant group-hover:text-on-surface transition-colors flex-shrink-0 mt-0.5">
              →
            </span>
          </Link>
        ))}
      </div>

      <div
        className="animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        <Link
          href="/thoughts"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-on-surface transition-colors"
        >
          Go to Thoughts →
        </Link>
      </div>
    </div>
  );
}

const TOKEN_SWATCHES = [
  { name: "Primary", value: "#2563eb", token: "--color-primary-container" },
  { name: "Secondary", value: "#8b5cf6", token: "--color-secondary-container" },
  { name: "Accent", value: "#06b6d4", token: "--color-tertiary-container" },
  { name: "Warm", value: "#f59e0b", token: "--color-warm" },
  { name: "Surface", value: "#131b2e", token: "--color-surface-container-low" },
  { name: "On-surface", value: "#dae2fd", token: "--color-on-surface" },
];

function SurfaceDesignSystem() {
  return (
    <div className="space-y-8 animate-surface">
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <p className="font-mono text-xs text-[var(--color-secondary)] tracking-widest uppercase mb-4">
          This surface was generated by the same design system it&apos;s showing you.
        </p>
        <h2 className="headline-md text-on-surface">The Design System</h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        {/* Colour tokens */}
        <div className="space-y-4">
          <h3 className="text-on-surface font-semibold text-sm">Colour Tokens</h3>
          <div className="grid grid-cols-3 gap-3">
            {TOKEN_SWATCHES.map((swatch) => (
              <div key={swatch.name} className="space-y-2">
                <div
                  className="h-12 rounded-lg border border-[#1e293b]"
                  style={{ background: swatch.value }}
                />
                <div>
                  <p className="text-on-surface text-xs font-medium">{swatch.name}</p>
                  <p className="text-on-surface-variant text-[10px] font-mono truncate">
                    {swatch.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini component showcase */}
        <div className="space-y-4">
          <h3 className="text-on-surface font-semibold text-sm">Component Primitives</h3>
          <div className="space-y-4">
            {/* Button */}
            <div className="space-y-1.5">
              <p className="text-on-surface-variant text-xs font-mono">Button</p>
              <button className="px-5 py-2 rounded-lg bg-gradient-signature text-white text-sm font-medium hover:brightness-110 transition-all">
                Primary action
              </button>
            </div>
            {/* Card */}
            <div className="space-y-1.5">
              <p className="text-on-surface-variant text-xs font-mono">Card</p>
              <div className="bg-[#0a0f1a] border border-[#1e293b] border-l-4 border-l-[var(--color-primary)] rounded-xl p-4">
                <p className="text-on-surface text-sm font-medium">Card with accent</p>
                <p className="text-on-surface-variant text-xs mt-1">Tonal surface, left border accent</p>
              </div>
            </div>
            {/* Chip */}
            <div className="space-y-1.5">
              <p className="text-on-surface-variant text-xs font-mono">Chip</p>
              <div className="flex gap-2 flex-wrap">
                {["Design Systems", "React", "Tokens"].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1 rounded-full border border-[#1e293b] text-xs text-on-surface-variant"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        <Link
          href="/headless-ds"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-on-surface transition-colors"
        >
          Explore the headless DS →
        </Link>
      </div>
    </div>
  );
}

const AGENTS = [
  {
    role: "Lead UI Designer",
    description: "Visual design, tokens, components, design system. Look and feel.",
    color: "var(--color-warm)",
  },
  {
    role: "Lead UX Designer",
    description: "User flows, interaction patterns, information architecture. Behaviour and structure.",
    color: "var(--color-secondary)",
  },
  {
    role: "Lead FED Developer",
    description: "React, TypeScript, Tailwind, builds. Turns design into production code.",
    color: "var(--color-primary)",
  },
  {
    role: "Lead UX Researcher",
    description: "User research, business analysis, domain knowledge, content strategy.",
    color: "var(--color-tertiary)",
  },
];

function SurfaceSystem() {
  return (
    <div className="space-y-8 animate-surface">
      <div className="animate-region" style={{ "--stagger": "0" } as React.CSSProperties}>
        <h2 className="headline-md text-on-surface mb-2">How This Was Built</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          One person. Four AI agents. One context file. Everything on this site — including this
          page — was built by Lincoln Mitchell directing the team below.
        </p>
      </div>

      {/* Agent cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-region"
        style={{ "--stagger": "1" } as React.CSSProperties}
      >
        {AGENTS.map((agent) => (
          <div
            key={agent.role}
            className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-5"
            style={{ borderLeftColor: agent.color, borderLeftWidth: "3px" }}
          >
            <h3 className="text-on-surface font-semibold text-sm mb-1">{agent.role}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{agent.description}</p>
          </div>
        ))}
      </div>

      {/* CLAUDE.md callout */}
      <div
        className="bg-[#0a0f1a] border border-[#1e293b] rounded-xl p-6 space-y-3 animate-region"
        style={{ "--stagger": "2" } as React.CSSProperties}
      >
        <p className="font-mono text-xs text-[var(--color-secondary)] tracking-widest uppercase">
          CLAUDE.md
        </p>
        <p className="text-on-surface font-semibold">One context file. Every agent reads it.</p>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          The site demonstrates the system it describes. The CLAUDE.md is the{" "}
          <code className="text-[var(--color-secondary)] font-mono">{"<N>"}</code> — the machine-readable
          layer that turns intent into production output.
        </p>
      </div>

      {/* Recursive proof */}
      <div
        className="text-center py-4 animate-region"
        style={{ "--stagger": "3" } as React.CSSProperties}
      >
        <p className="text-on-surface-variant text-sm italic">
          &ldquo;This page you&apos;re using right now was built by those agents.&rdquo;
        </p>
      </div>

      <div
        className="animate-region"
        style={{ "--stagger": "4" } as React.CSSProperties}
      >
        <Link
          href="/system"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-on-surface transition-colors"
        >
          Read about The System →
        </Link>
      </div>
    </div>
  );
}

// ── Surface switcher ──────────────────────────────────────────────────────────

function Surface({
  id,
  input,
  onShowProjects,
}: {
  id: SurfaceId;
  input: string;
  onShowProjects: () => void;
}) {
  const hasLegacy = input.toLowerCase().includes("legacy");

  switch (id) {
    case "bio":
      return <SurfaceBio onShowProjects={onShowProjects} />;
    case "projects":
      return <SurfaceProjects />;
    case "methodology":
      return <SurfaceMethodology />;
    case "recruiter":
      return <SurfaceRecruiter hasLegacy={hasLegacy} />;
    case "thoughts":
      return <SurfaceThoughts />;
    case "design-system":
      return <SurfaceDesignSystem />;
    case "system":
      return <SurfaceSystem />;
  }
}

// ── Main page (inner — needs useSearchParams) ─────────────────────────────────

function ExploreInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [activeSurface, setActiveSurface] = useState<SurfaceId | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [shake, setShake] = useState(false);
  const [noMatchVisible, setNoMatchVisible] = useState(false);
  const [surfaceInput, setSurfaceInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const noMatchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Placeholder cycling
  useEffect(() => {
    if (inputValue) return;
    const interval = setInterval(() => {
      setPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
        setPlaceholderVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [inputValue]);

  const triggerSurface = useCallback(
    (value: string) => {
      const matched = matchIntent(value);
      if (matched) {
        setActiveSurface(matched);
        setSurfaceInput(value);
        setNoMatchVisible(false);
        if (noMatchTimerRef.current) clearTimeout(noMatchTimerRef.current);
        // Scroll to surface
        setTimeout(() => {
          surfaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        setShake(true);
        setNoMatchVisible(true);
        setActiveSurface(null);
        setTimeout(() => setShake(false), 400);
        if (noMatchTimerRef.current) clearTimeout(noMatchTimerRef.current);
        noMatchTimerRef.current = setTimeout(() => setNoMatchVisible(false), 4000);
      }
    },
    []
  );

  // Deep link: ?q= on mount
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setInputValue(q);
      triggerSurface(q);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && inputValue.trim()) {
      triggerSurface(inputValue.trim());
      // Update URL without navigation
      const params = new URLSearchParams(searchParams.toString());
      params.set("q", inputValue.trim());
      router.replace(`/explore?${params.toString()}`, { scroll: false });
    }
  }

  function handleChipClick(chip: (typeof CHIPS)[0]) {
    setInputValue(chip.label);
    setActiveSurface(chip.surface);
    setSurfaceInput(chip.label);
    setNoMatchVisible(false);
    const params = new URLSearchParams();
    params.set("q", chip.label);
    router.replace(`/explore?${params.toString()}`, { scroll: false });
    setTimeout(() => {
      surfaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handleShowProjects() {
    setInputValue("Show me his work");
    setActiveSurface("projects");
    setSurfaceInput("Show me his work");
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <Nav />

      {/* Zone A — Page framing */}
      <header className="flex flex-col items-center text-center px-6 md:px-20 pt-20 pb-12 gap-4">
        <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase">
          Intent-Based UI · I {"<N>"} C
        </span>
        <h1 className="display-lg text-on-surface">
          What do you want to know?
        </h1>
        <p className="text-on-surface-variant text-lg max-w-[560px] leading-relaxed">
          Type an intent. The system builds a surface. Same design system, different UI.
        </p>
      </header>

      <main className="px-6 md:px-8 pb-24 max-w-[760px] mx-auto space-y-8">
        {/* Zone B — Intent input */}
        <div className="relative">
          <div className={`relative ${shake ? "animate-shake" : ""}`}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Enter your intent"
              className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded-xl px-5 py-4 pr-12 text-on-surface placeholder:text-transparent focus:outline-none focus:border-[var(--color-primary)] transition-colors text-base"
            />
            {/* Animated placeholder */}
            {!inputValue && (
              <span
                className={`absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant text-base pointer-events-none transition-opacity duration-300 ${
                  placeholderVisible ? "opacity-40" : "opacity-0"
                }`}
              >
                {PLACEHOLDERS[placeholderIndex]}
              </span>
            )}
            {/* Arrow icon */}
            {inputValue && (
              <button
                onClick={() => triggerSurface(inputValue.trim())}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Submit intent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* No match message */}
          {noMatchVisible && (
            <p className="mt-3 text-on-surface-variant text-sm text-center animate-fade-in">
              No surface for that yet. Try one of these:
            </p>
          )}
        </div>

        {/* Zone C — Suggested chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {CHIPS.map((chip) => (
            <button
              key={chip.label}
              onClick={() => handleChipClick(chip)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors cursor-pointer ${
                activeSurface === chip.surface
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-[#1e293b] text-white/50 hover:text-white hover:border-[#475569]"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Surface render zone */}
        {activeSurface && (
          <div ref={surfaceRef} className="pt-4 border-t border-[#1e293b]">
            <Surface
              id={activeSurface}
              input={surfaceInput}
              onShowProjects={handleShowProjects}
            />
          </div>
        )}
      </main>

      <footer className="border-t border-[#1e293b] px-8 py-8 text-center">
        <p className="text-on-surface-variant text-xs font-mono">
          Built by AI agents directed by Lincoln Mitchell · linc@lincolnmitchell.io
        </p>
      </footer>
    </div>
  );
}

// ── Page export (Suspense boundary for useSearchParams) ───────────────────────

export default function ExplorePage() {
  return (
    <Suspense fallback={null}>
      <ExploreInner />
    </Suspense>
  );
}
