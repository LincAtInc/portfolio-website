import { Nav } from "@/components/Nav";
import { CTAFooter } from "@/components/CTAFooter";
import type { Metadata } from "next";
import {
  User,
  Bot,
  Users,
  UsersRound,
  Building2,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The INC Cycle | Lincoln Mitchell",
  description:
    "How the I<N>C framework scales from one person with an idea to an organisation shipping product. Each stage is a full Ideate–Narrate–Create cycle.",
};

/* ── Types ──────────────────────────────────────────────────────────────── */

interface Stage {
  number: number;
  deliverable: string;
  scale: string;
  icons: React.ReactNode;
  nItems: string[];
  lincolnNote?: string;
}

/* ── Stage data ─────────────────────────────────────────────────────────── */

const stages: Stage[] = [
  {
    number: 1,
    deliverable: "NorthStar Prototype",
    scale: "1 person + agent",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <User size={16} />
        <Bot size={16} />
      </span>
    ),
    nItems: ["CLAUDE.md", "design tokens", "brand voice", "problem framing"],
    lincolnNote: "This is where I start. Everything before it is just thinking.",
  },
  {
    number: 2,
    deliverable: "Proof of Concept",
    scale: "1–2 people",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <User size={16} />
        <User size={16} />
      </span>
    ),
    nItems: [
      "NorthStar artefacts",
      "stakeholder feedback",
      "domain knowledge",
      "interaction patterns",
    ],
    lincolnNote:
      "The NorthStar becomes N. One conversation reshapes the next cycle.",
  },
  {
    number: 3,
    deliverable: "Working Prototype",
    scale: "Small team",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <Users size={16} />
      </span>
    ),
    nItems: [
      "PoC learnings",
      "SME conversations",
      "component contracts",
      "user flows",
    ],
    lincolnNote:
      "I seed N so the team can scale without me. This is the handoff point.",
  },
  {
    number: 4,
    deliverable: "MVP",
    scale: "Cross-functional team",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <Users size={16} />
        <Bot size={16} />
      </span>
    ),
    nItems: [
      "design system foundations",
      "engineer constraints",
      "accessibility patterns",
      "real data",
    ],
  },
  {
    number: 5,
    deliverable: "Beta",
    scale: "Full team",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <UsersRound size={16} />
      </span>
    ),
    nItems: [
      "usage data",
      "edge cases",
      "platform rules",
      "story maps",
    ],
  },
  {
    number: 6,
    deliverable: "V1",
    scale: "Full team + ops",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <UsersRound size={16} />
        <Bot size={16} />
      </span>
    ),
    nItems: [
      "shipped patterns",
      "governance rules",
      "analytics context",
      "support feedback",
    ],
  },
  {
    number: 7,
    deliverable: "Product",
    scale: "Organisation",
    icons: (
      <span className="flex items-center gap-1.5 text-primary">
        <Building2 size={16} />
      </span>
    ),
    nItems: [
      "full design system",
      "accumulated domain knowledge",
      "usage-informed patterns",
      "brand commons",
    ],
  },
];

/* ── INC badge ──────────────────────────────────────────────────────────── */

function INCBadge({ nSize }: { nSize: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const sizeMap = {
    xs: { outer: "text-[10px] gap-0.5", n: "text-[10px] px-1 py-0.5" },
    sm: { outer: "text-xs gap-1", n: "text-xs px-1.5 py-0.5" },
    md: { outer: "text-sm gap-1", n: "text-sm px-2 py-0.5" },
    lg: { outer: "text-base gap-1.5", n: "text-base px-2 py-1" },
    xl: { outer: "text-lg gap-1.5", n: "text-lg px-2.5 py-1" },
  };
  const s = sizeMap[nSize];
  return (
    <span
      className={`inline-flex items-center font-mono font-semibold text-on-surface/60 ${s.outer}`}
    >
      <span>I</span>
      <span
        className={`bg-secondary-container/30 border border-secondary/30 rounded text-secondary ${s.n}`}
      >
        &lt;N&gt;
      </span>
      <span>C</span>
    </span>
  );
}

/* ── Stage card ─────────────────────────────────────────────────────────── */

function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const isLincolnZone = stage.number <= 3;
  return (
    <div
      className="relative flex flex-col sm:flex-row gap-6 sm:gap-8"
      aria-label={`Stage ${stage.number}: ${stage.deliverable}`}
    >
      {/* Left: number + connector line */}
      <div className="flex flex-col items-center sm:items-center w-full sm:w-12 shrink-0">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full font-mono font-bold text-sm z-10 shrink-0 ${
            isLincolnZone
              ? "bg-primary-container text-on-primary-container"
              : "bg-surface-container-high text-on-surface-variant"
          }`}
        >
          {stage.number}
        </div>
        {index < stages.length - 1 && (
          <div className="flex-1 w-px bg-outline-variant/30 mt-2 min-h-[2rem] hidden sm:block" />
        )}
      </div>

      {/* Right: content */}
      <div
        className={`flex-1 pb-10 ${
          isLincolnZone
            ? "border-l-2 border-primary/20 pl-5 sm:border-none sm:pl-0"
            : ""
        }`}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <p className="label-sm text-on-surface-variant/50 mb-1">
              Stage {stage.number}
            </p>
            <h3 className="headline-sm text-on-surface">{stage.deliverable}</h3>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            {stage.icons}
            <span className="label-sm text-on-surface-variant/50">
              {stage.scale}
            </span>
          </div>
        </div>

        {/* INC cycle visualisation */}
        <div className="flex items-stretch gap-2 mb-4">
          {/* I */}
          <div className="flex-1 bg-surface-container-low rounded-lg p-3 border border-outline-variant/20">
            <p className="label-sm text-primary/70 mb-1">Ideate</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {stage.number === 1
                ? "What could exist"
                : `Prior C feeds the next I`}
            </p>
          </div>

          {/* N */}
          <div
            className="flex-1 bg-secondary-container/20 rounded-lg p-3 border border-secondary/20"
            style={{ minWidth: `${48 + stage.number * 8}px` }}
          >
            <p className="label-sm text-secondary/70 mb-1">&lt;N&gt; Grows</p>
            <ul className="space-y-0.5">
              {stage.nItems.map((item) => (
                <li key={item} className="text-[10px] text-on-surface-variant leading-snug flex items-start gap-1">
                  <span className="text-secondary/50 mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* C */}
          <div className="flex-1 bg-surface-container-low rounded-lg p-3 border border-outline-variant/20">
            <p className="label-sm text-tertiary/70 mb-1">Create</p>
            <p className="text-xs text-on-surface font-medium leading-relaxed">
              {stage.deliverable}
            </p>
            <p className="text-[10px] text-on-surface-variant mt-1">
              ↳ becomes next N
            </p>
          </div>
        </div>

        {/* Lincoln zone note */}
        {stage.lincolnNote && (
          <p className="text-xs text-primary/60 italic pl-1">
            {stage.lincolnNote}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function INCPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="text-center px-8 pt-24 pb-16 max-w-4xl mx-auto">
        <span className="label-sm text-secondary tracking-[0.2em] block mb-6">
          The Framework
        </span>
        <h1 className="display-lg text-on-surface mb-6">
          The{" "}
          <span className="font-mono text-gradient">
            I&lt;N&gt;C
          </span>{" "}
          Cycle
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          One framework. Seven stages. Each one a full cycle of Ideate,
          Narrate, Create — where every output becomes the input for the next.
        </p>
      </header>

      {/* Framework explainer */}
      <section className="section-low px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                letter: "I",
                label: "Ideate",
                colour: "text-primary",
                bg: "bg-primary-container/10 border-primary/20",
                body:
                  "Discovery-first NorthStar prototyping. What could exist. The possibilities are widest here — before decisions narrow the space.",
              },
              {
                letter: "<N>",
                label: "Narrate",
                colour: "text-secondary",
                bg: "bg-secondary-container/20 border-secondary/20",
                body:
                  "The accumulation layer. Domain knowledge, design tokens, brand voice, component contracts, usage data. N is not a step — it amplifies both I and C.",
              },
              {
                letter: "C",
                label: "Create",
                colour: "text-tertiary",
                bg: "bg-tertiary-container/10 border-tertiary/20",
                body:
                  "Something worth showing. Every C feeds back into N for the next cycle. The NorthStar is the first C. The product is the seventh.",
              },
            ].map(({ letter, label, colour, bg, body }) => (
              <div
                key={letter}
                className={`rounded-xl p-6 border ${bg}`}
              >
                <p className={`font-mono font-bold text-2xl mb-1 ${colour}`}>
                  {letter}
                </p>
                <p className="label-md text-on-surface mb-3">{label}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* N grows callout */}
          <div className="mt-8 rounded-xl bg-surface-container border border-outline-variant/20 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <INCBadge nSize="xl" />
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              N grows at every stage. At stage 1, N is a CLAUDE.md and some
              tokens. By stage 7, N is a full design system, encoded domain
              knowledge, usage data, and brand commons. Everyone contributes.
              Anyone can draw from it.
            </p>
          </div>
        </div>
      </section>

      {/* Lincoln solo zone callout */}
      <section className="section-base px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center rounded-xl border border-primary/20 bg-primary-container/5 px-6 py-5">
            <div className="shrink-0 flex items-center gap-2 text-primary">
              <User size={20} />
              <span className="font-mono font-bold text-lg">1</span>
            </div>
            <div>
              <p className="label-sm text-primary/70 mb-1">Stages 1–3: Solo</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                I operate alone through the first three stages. One person and
                an agent, seeding N so stages 4–7 can scale without me. The
                NorthStar, PoC, and working prototype are discovery artefacts.
                By stage 3, N is rich enough that a cross-functional team can
                pick up and run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage progression */}
      <main className="section-mid px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="headline-md text-on-surface">
              The Progression
            </h2>
            <span className="label-sm text-on-surface-variant/50">
              Each row is a full I&lt;N&gt;C cycle
            </span>
          </div>

          {/* Stages */}
          <div>
            {stages.map((stage, index) => (
              <div key={stage.number}>
                <StageCard stage={stage} index={index} />
                {index < stages.length - 1 && (
                  <div className="flex justify-start sm:justify-center pl-5 sm:pl-0 mb-2 text-outline-variant/40">
                    <ArrowDown size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop back note */}
          <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-lg mx-auto">
              Stage 7 is not the end. Product usage becomes N. N reshapes I for
              the next version. The cycle is permanent. N just keeps growing.
            </p>
            <div className="mt-4 flex justify-center">
              <INCBadge nSize="lg" />
            </div>
          </div>
        </div>
      </main>

      <CTAFooter />
    </>
  );
}
