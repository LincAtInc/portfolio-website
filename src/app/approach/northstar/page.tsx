import { IncNav } from "@/components/IncNav";
import { IncCTAFooter } from "@/components/IncCTAFooter";
import { Section, Button, Card, Badge } from "@/components/ui";
import { RevealSection } from "@/components/RevealSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NorthStar Prototyping | Interfaces-N-Creatives",
  description:
    "Exploratory AI prototyping to shape vision early when possibilities are widest. Not a wireframe. Not a hypothesis test. A NorthStar that encodes conviction.",
};

/* ── Data ───────────────────────────────────────────────────────────────── */

const howItWorks = [
  {
    step: "1",
    label: "Stakeholder conversations as context",
    body: "Screen recordings, meeting notes, and domain expertise fed directly into the AI agent as structured narrative context. The prototype starts with real understanding.",
  },
  {
    step: "2",
    label: "Real data, not lorem ipsum",
    body: "We prototype with actual content — real field names, real copy, real data shapes. Problems that only appear with real data surface before any architecture is committed.",
  },
  {
    step: "3",
    label: "AI-augmented rapid prototyping",
    body: "Claude Code as primary prototyping instrument. We move at the speed of thinking — not the speed of Figma handoff. The prototype IS the discovery artefact.",
  },
  {
    step: "4",
    label: "Conviction, not hypothesis",
    body: "A NorthStar prototype does not ask 'does this work?' — it shows 'this is what should exist'. It shapes vision, aligns stakeholders, and encodes the why before the how.",
  },
] as const;

const produces = [
  {
    label: "Interactive prototype",
    body: "High-fidelity, clickable, real-data. Stakeholders react to something they can feel — not a flat Figma frame.",
    accent: "text-primary",
    bg: "bg-primary-container/10 border-primary/20",
  },
  {
    label: "Domain model",
    body: "The mental model of the problem space, extracted from conversations and artefacts. N before N has a name.",
    accent: "text-secondary",
    bg: "bg-secondary-container/20 border-secondary/20",
  },
  {
    label: "Decision framework",
    body: "The constraints, trade-offs, and non-negotiables surfaced during prototyping. The context that explains every subsequent choice.",
    accent: "text-tertiary",
    bg: "bg-tertiary-container/10 border-tertiary/20",
  },
  {
    label: "Narrative context",
    body: "The prototype becomes the seed of N — design tokens, brand voice, interaction patterns, and domain knowledge encoded for the agents that will build with the system.",
    accent: "text-secondary",
    bg: "bg-secondary-container/20 border-secondary/20",
  },
] as const;

const whenToUse = [
  {
    trigger: "New product",
    description: "Before anyone writes a line of production code. Explore the full possibility space while the cost of being wrong is still zero.",
  },
  {
    trigger: "Design system reset",
    description: "When the current system has accumulated too much debt to evolve incrementally. A NorthStar shows what the system should become.",
  },
  {
    trigger: "Systems bankruptcy recovery",
    description: "When multiple teams have diverged and there is no shared truth. The prototype re-establishes the vision everyone can align to.",
  },
  {
    trigger: "Unclear direction",
    description: "When stakeholders cannot agree on what success looks like. A NorthStar prototype makes the abstract concrete and the debate productive.",
  },
] as const;

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function NorthStarPage() {
  return (
    <>
      <IncNav />

      {/* Hero */}
      <Section tone="base" as="div">
        <RevealSection threshold={0.1}>
          <div className="max-w-3xl py-8">
            <div className="flex items-center gap-3 mb-6">
              <Button variant="ghost" size="sm" href="/approach">
                ← Approach
              </Button>
              <span className="text-on-surface-variant/30">/</span>
              <Badge variant="primary">I — Ideate</Badge>
            </div>
            <h1 className="display-md text-on-surface mb-4">
              NorthStar Prototyping
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              Exploratory AI prototyping to shape vision early when possibilities are widest.
            </p>
          </div>
        </RevealSection>
      </Section>

      {/* What it is */}
      <Section tone="low" narrow>
        <RevealSection threshold={0.15}>
          <h2 className="headline-md text-on-surface mb-6">What it is</h2>
          <div className="space-y-4 text-base text-on-surface-variant leading-relaxed">
            <p>
              Before architecture is decided. Before tokens are named. Before a single
              component exists — we build a high-fidelity vision of what could be.
            </p>
            <p>
              Not a wireframe. Not a prototype that tests a hypothesis. A NorthStar
              that encodes conviction.
            </p>
            <p>
              The distinction matters. A wireframe asks: <em className="text-on-surface">"does this layout work?"</em>{" "}
              A NorthStar asks: <em className="text-on-surface">"what should this system become?"</em>{" "}
              The first is a delivery tool. The second is a discovery tool. We build the second.
            </p>
          </div>
        </RevealSection>
      </Section>

      {/* How it works */}
      <Section tone="mid">
        <RevealSection threshold={0.1}>
          <div className="max-w-3xl mx-auto mb-10">
            <Badge variant="secondary" className="mb-4">Process</Badge>
            <h2 className="headline-md text-on-surface">How it works</h2>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.1} className="max-w-3xl mx-auto space-y-4">
          {howItWorks.map((item, i) => (
            <div
              key={item.step}
              className="flex items-start gap-6"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-primary-container/20 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="font-mono text-sm text-primary font-semibold">{item.step}</span>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="w-px flex-1 bg-outline-variant/20 mt-2 min-h-[1.5rem]" />
                )}
              </div>
              <div className="pb-4">
                <h3 className="label-md text-on-surface mb-1">{item.label}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </RevealSection>
      </Section>

      {/* What it produces */}
      <Section tone="low">
        <RevealSection threshold={0.1}>
          <div className="max-w-3xl mx-auto mb-10">
            <Badge variant="tertiary" className="mb-4">Outputs</Badge>
            <h2 className="headline-md text-on-surface">What it produces</h2>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.05} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {produces.map((item, i) => (
            <Card
              key={item.label}
              variant="filled"
              style={{ "--stagger": i } as React.CSSProperties}
              className={`border ${item.bg}`}
            >
              <p className={`font-mono text-xs font-semibold mb-2 ${item.accent}`}>Output</p>
              <h3 className="label-md text-on-surface mb-3">{item.label}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </RevealSection>
      </Section>

      {/* The prototype IS the discovery artefact */}
      <Section tone="base" narrow>
        <RevealSection threshold={0.2}>
          <Card variant="elevated" className="border border-secondary/20 bg-secondary-container/10">
            <p className="font-mono text-secondary text-xs font-semibold mb-3">Core principle</p>
            <p className="headline-sm text-on-surface mb-4">
              The prototype IS the discovery artefact.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Traditional discovery produces documents: research reports, journey maps, brief PDFs.
              They describe the problem. A NorthStar prototype embodies the solution — and in doing
              so, reveals which parts of the problem were misunderstood. This is not faster design.
              It is better discovery.
            </p>
          </Card>
        </RevealSection>
      </Section>

      {/* When to use it */}
      <Section tone="mid">
        <RevealSection threshold={0.1}>
          <div className="max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="mb-4">Context</Badge>
            <h2 className="headline-md text-on-surface">When to use it</h2>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.05} className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {whenToUse.map((item, i) => (
            <Card
              key={item.trigger}
              variant="inset"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <p className="label-sm text-primary mb-2">{item.trigger}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </RevealSection>
      </Section>

      {/* Link to N */}
      <Section tone="low" narrow>
        <RevealSection threshold={0.2}>
          <div className="rounded-xl bg-secondary-container/15 border border-secondary/20 px-8 py-8">
            <p className="label-sm text-secondary mb-3">What comes next</p>
            <h3 className="headline-sm text-on-surface mb-3">
              The NorthStar becomes the seed of N
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              When prototyping ends, the artefacts do not get shelved. They become the first
              contribution to the agentic design system — design tokens, domain model, interaction
              patterns, and brand voice encoded as machine-readable context.
            </p>
            <Button variant="secondary" size="sm" href="/approach/agentic">
              See: Agentic Design Systems →
            </Button>
          </div>
        </RevealSection>
      </Section>

      <IncCTAFooter />
    </>
  );
}
