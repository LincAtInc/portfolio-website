import { IncNav } from "@/components/IncNav";
import { IncCTAFooter } from "@/components/IncCTAFooter";
import { Section, Button, Card, Badge } from "@/components/ui";
import { RevealSection } from "@/components/RevealSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach — I < N > C | Interfaces-N-Creatives",
  description:
    "The INC framework: Ideate, Narrate, Create. A design system is a commons, not a deliverable. The architect seeds it, everyone enriches it, any agent can consume it.",
};

/* ── Phase data ─────────────────────────────────────────────────────────── */

const phases = [
  {
    letter: "I",
    label: "Ideate",
    accent: "text-primary",
    bg: "bg-primary-container/10 border-primary/20",
    accentBg: "bg-primary-container/20",
    description:
      "Discovery-first NorthStar prototyping with AI. We explore when possibilities are widest — before architecture is decided, before tokens are named, before a single component exists.",
    outputs: ["NorthStar prototype", "Domain model", "Decision framework"],
    detail:
      "The NorthStar is not a wireframe. Not a prototype that tests a hypothesis. It encodes conviction — a high-fidelity vision of what could be, built with real data and stakeholder conversations as context.",
    link: { href: "/approach/northstar", label: "Deep dive: NorthStar Prototyping" },
  },
  {
    letter: "<N>",
    label: "Narrate",
    accent: "text-secondary",
    bg: "bg-secondary-container/20 border-secondary/20",
    accentBg: "bg-secondary-container/30",
    description:
      "The agentic design system infrastructure. N = domain knowledge encoded as machine-readable context. The angle brackets read like an HTML tag — the design system IS the markup that wraps everything.",
    outputs: [
      "Design tokens",
      "Real data",
      "SME conversations",
      "Existing artefacts",
      "Story mapping",
      "Existing code (C feeds back into N)",
    ],
    detail:
      "Everyone contributes to N. Anyone can draw from it. N is not a step between I and C — it amplifies both. It grows from design tokens, brand voice, component contracts, domain knowledge, and every artefact the team produces.",
    link: { href: "/approach/agentic", label: "Deep dive: Agentic Design Systems" },
  },
  {
    letter: "C",
    label: "Create",
    accent: "text-tertiary",
    bg: "bg-tertiary-container/10 border-tertiary/20",
    accentBg: "bg-tertiary-container/20",
    description:
      "Production code, content authoring, shipping. What was discovered becomes what is delivered. C feeds back into N — existing code becomes context for the next cycle.",
    outputs: ["Shipped components", "Content", "Governance model"],
    detail:
      "Every C enriches N for the next cycle. The design system is a commons, not a deliverable. The architect seeds it, everyone enriches it, any agent can consume it.",
    link: null,
  },
] as const;

/* ── Career arc data ────────────────────────────────────────────────────── */

const arcSteps = [
  {
    role: "Chief Design Officer",
    focus: "Discovery",
    accent: "text-primary",
    note: "NorthStar Prototyping, stakeholder alignment, vision before delivery.",
  },
  {
    role: "React Developer",
    focus: "Delivery",
    accent: "text-tertiary",
    note: "Production code. Learning what it means to ship at scale.",
  },
  {
    role: "Design Systems Lead",
    focus: "The Link",
    accent: "text-secondary",
    note: "The connection between discovery and delivery. N as infrastructure.",
  },
  {
    role: "Agentic Design Systems",
    focus: "The Amplified Link",
    accent: "text-secondary",
    note: "Machine-readable context. AI agents consuming, contributing, and reasoning about the system.",
  },
] as const;

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function ApproachPage() {
  return (
    <>
      <IncNav />

      {/* Hero */}
      <Section tone="base" as="div">
        <RevealSection threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto py-8">
            <Badge variant="secondary" className="mb-6">Methodology</Badge>
            <h1 className="display-lg text-on-surface mb-4">
              <span className="font-mono text-gradient">I &lt;N&gt; C</span>
            </h1>
            <p className="headline-sm text-on-surface-variant mb-6">
              Ideate &lt; Narrate &gt; Create
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              The design system is a commons, not a deliverable. The architect seeds it,
              everyone enriches it, any agent can consume it.
            </p>
          </div>
        </RevealSection>
      </Section>

      {/* Three phases */}
      <Section tone="low">
        <RevealSection stagger threshold={0.05} className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <Card
              key={phase.letter}
              variant="filled"
              style={{ "--stagger": i } as React.CSSProperties}
              className={`border ${phase.bg} flex flex-col`}
            >
              <p className={`font-mono font-bold text-3xl mb-1 ${phase.accent}`}>
                {phase.letter}
              </p>
              <p className="label-md text-on-surface mb-3">{phase.label}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
                {phase.description}
              </p>
              <div className={`rounded-lg ${phase.accentBg} px-4 py-3 mb-4`}>
                <p className="label-sm text-on-surface-variant mb-2">Outputs</p>
                <ul className="space-y-1">
                  {phase.outputs.map((o) => (
                    <li key={o} className="text-xs text-on-surface-variant flex items-start gap-1.5">
                      <span className={`mt-0.5 shrink-0 ${phase.accent} opacity-60`}>·</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              {phase.link && (
                <Button variant="secondary" size="sm" href={phase.link.href} className="self-start mt-auto">
                  {phase.link.label}
                </Button>
              )}
            </Card>
          ))}
        </RevealSection>
      </Section>

      {/* N as expansion layer */}
      <Section tone="base" narrow>
        <RevealSection threshold={0.2}>
          <div className="rounded-xl bg-secondary-container/15 border border-secondary/20 px-8 py-8 text-center">
            <p className="font-mono font-bold text-2xl text-secondary mb-3">
              I &lt;N&gt; C
            </p>
            <p className="headline-sm text-on-surface mb-4">
              N is not a step between I and C.<br />
              N is the amplifier that radiates into both.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              The angle brackets are intentional. They read like an HTML tag.
              The design system IS the markup that wraps everything. Every token,
              component, and pattern is encoded as machine-readable context.
              Every agent can consume it. Every team member enriches it.
            </p>
          </div>
        </RevealSection>
      </Section>

      {/* Phase detail: what feeds N */}
      <Section tone="mid">
        <RevealSection threshold={0.15}>
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">What feeds N</Badge>
            <h2 className="headline-md text-on-surface mb-6">
              N grows from everywhere
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-10">
              N accumulates context from every direction. It is not authored — it grows.
              The architect seeds it. The team enriches it. The agents consume and
              contribute to it.
            </p>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Design tokens", body: "Brand voice, colour, typography — the visual grammar encoded as queryable data." },
            { label: "Real data", body: "Design and prototype with real content, not lorem ipsum. Real data reveals real problems." },
            { label: "SME conversations", body: "Domain knowledge captured as context — comments, current-state maps, workflow insights." },
            { label: "Existing artefacts", body: "PDFs, forms, policy documents, slide decks — fed to the agent and transformed into UI." },
            { label: "Story mapping", body: "Use cases, user journeys, flows that connect intent to interaction." },
            { label: "Existing code (C → N)", body: "What has been Created becomes context for the next cycle. AI resolves to existing patterns." },
          ].map((item, i) => (
            <Card
              key={item.label}
              variant="inset"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <p className="label-sm text-secondary mb-2">{item.label}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </RevealSection>
      </Section>

      {/* Discovery vs Delivery */}
      <Section tone="low">
        <RevealSection threshold={0.15}>
          <div className="max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">Discovery vs Delivery</Badge>
            <h2 className="headline-md text-on-surface mb-4">
              Most consultancies start at C.
              <br />
              We start at I.
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-10">
              The traditional model invests heavily in delivery before the problem is understood.
              We invert that balance — discovery first, when possibilities are widest and
              decisions are cheapest.
            </p>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.1} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card
            variant="filled"
            style={{ "--stagger": 0 } as React.CSSProperties}
            className="border border-outline-variant/20"
          >
            <p className="label-sm text-on-surface-variant/60 mb-3">Traditional model</p>
            <div className="space-y-3">
              {[
                { step: "Brief", note: "Requirements written before discovery" },
                { step: "Design", note: "Figma files, not real code" },
                { step: "Build", note: "Engineers translate from a static spec" },
                { step: "Iterate", note: "Expensive changes, late-stage pivots" },
              ].map(({ step, note }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="text-on-surface-variant/40 text-xs mt-0.5 font-mono">→</span>
                  <div>
                    <span className="text-sm text-on-surface-variant font-medium">{step}</span>
                    <span className="text-xs text-on-surface-variant/50 ml-2">{note}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card
            variant="filled"
            style={{ "--stagger": 1 } as React.CSSProperties}
            className="border border-primary/20 bg-primary-container/5"
          >
            <p className="label-sm text-primary/70 mb-3">INC approach</p>
            <div className="space-y-3">
              {[
                { step: "Ideate", note: "NorthStar prototype shapes vision early" },
                { step: "Narrate", note: "Domain knowledge encoded as agent context" },
                { step: "Create", note: "Production code informed by N" },
                { step: "Loop", note: "C feeds back into N — the system grows" },
              ].map(({ step, note }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="text-primary/60 text-xs mt-0.5 font-mono">→</span>
                  <div>
                    <span className="text-sm text-on-surface font-medium">{step}</span>
                    <span className="text-xs text-on-surface-variant/60 ml-2">{note}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </RevealSection>
      </Section>

      {/* Career arc as proof */}
      <Section tone="base">
        <RevealSection threshold={0.15}>
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">The Career Arc as Proof</Badge>
            <h2 className="headline-md text-on-surface mb-4">
              This is not a framework we invented.<br />
              It is the shape of a career.
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-10">
              The INC methodology emerged from moving between discovery and delivery — and building
              the infrastructure that connects them. Every role was a stage in understanding what
              N needs to be.
            </p>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.1} className="max-w-3xl mx-auto space-y-4">
          {arcSteps.map((step, i) => (
            <div
              key={step.role}
              className="flex items-start gap-6"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="font-mono text-xs text-on-surface-variant">{i + 1}</span>
                </div>
                {i < arcSteps.length - 1 && (
                  <div className="w-px flex-1 bg-outline-variant/20 mt-2 min-h-[2rem]" />
                )}
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="headline-sm text-on-surface">{step.role}</span>
                  <Badge variant={i === 0 ? "primary" : i === 3 ? "secondary" : "outline"} className="text-xs">
                    {step.focus}
                  </Badge>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.note}</p>
              </div>
            </div>
          ))}
        </RevealSection>
      </Section>

      {/* Dive deeper CTAs */}
      <Section tone="mid">
        <RevealSection stagger threshold={0.1} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card
            variant="elevated"
            hoverable
            style={{ "--stagger": 0 } as React.CSSProperties}
            className="flex flex-col"
          >
            <Badge variant="primary" className="mb-4 self-start">I</Badge>
            <h3 className="headline-sm text-on-surface mb-2">NorthStar Prototyping</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
              How we build high-fidelity vision artefacts before architecture is decided.
              Conviction encoded as an interactive prototype.
            </p>
            <Button variant="primary" size="sm" href="/approach/northstar">
              Read more
            </Button>
          </Card>
          <Card
            variant="elevated"
            hoverable
            style={{ "--stagger": 1 } as React.CSSProperties}
            className="flex flex-col"
          >
            <Badge variant="secondary" className="mb-4 self-start">&lt;N&gt;</Badge>
            <h3 className="headline-sm text-on-surface mb-2">Agentic Design Systems</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
              Machine-readable design systems that AI agents can consume, contribute to,
              and reason about. CLAUDE.md as infrastructure.
            </p>
            <Button variant="secondary" size="sm" href="/approach/agentic">
              Read more
            </Button>
          </Card>
        </RevealSection>
      </Section>

      <IncCTAFooter />
    </>
  );
}
