import { IncNav } from "@/components/IncNav";
import { IncCTAFooter } from "@/components/IncCTAFooter";
import { Section, Button, Card, Badge, CodeBlock } from "@/components/ui";
import { RevealSection } from "@/components/RevealSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Design Systems | Interfaces-N-Creatives",
  description:
    "Machine-readable design systems that AI agents can consume, contribute to, and reason about. CLAUDE.md as infrastructure. Design tokens as queryable data.",
};

/* ── Data ───────────────────────────────────────────────────────────────── */

const nLayerItems = [
  {
    label: "CLAUDE.md as infrastructure",
    body: "Not documentation — instructions. The context file that tells every AI agent working with the system who it is, what it knows, and how it should behave.",
    accent: "text-primary",
    bg: "bg-primary-container/10 border-primary/20",
  },
  {
    label: "Design tokens as queryable data",
    body: "Every token named, typed, and machine-readable. CSS custom properties that agents can reason about, not just copy. Token pipelines that output to whatever format the agent needs.",
    accent: "text-secondary",
    bg: "bg-secondary-container/20 border-secondary/20",
  },
  {
    label: "Component contracts as agent instructions",
    body: "Component APIs written as explicit contracts — props, variants, composition rules. An agent reading a component file knows how to use it without guessing.",
    accent: "text-tertiary",
    bg: "bg-tertiary-container/10 border-tertiary/20",
  },
  {
    label: "Governance encoded, not assumed",
    body: "Accessibility requirements, brand rules, usage constraints — encoded directly into the system context, not buried in a PDF nobody reads. Every agent operates within them automatically.",
    accent: "text-primary",
    bg: "bg-primary-container/10 border-primary/20",
  },
] as const;

const produces = [
  {
    label: "Context file infrastructure",
    description: "CLAUDE.md, AGENTS.md, and component-level context files that tell every AI agent how to work with the system.",
  },
  {
    label: "MCP integration",
    description: "Model Context Protocol servers that expose design tokens, components, and patterns as queryable agent APIs.",
  },
  {
    label: "Agent-queryable token pipelines",
    description: "Style Dictionary or equivalent pipelines that output tokens in JSON, CSS, TypeScript — whatever format the consuming agent needs.",
  },
  {
    label: "Governance model",
    description: "Encoded constraints, accessibility rules, and brand guidelines that every agent operates within — without requiring human review of each output.",
  },
] as const;

const audiences = [
  {
    label: "Design systems teams adopting AI",
    body: "Teams building with Claude, Cursor, or Copilot who want their design system to be a first-class AI citizen — not an afterthought.",
  },
  {
    label: "Organisations with multiple AI workstreams",
    body: "When multiple teams are using AI agents independently, N creates a shared layer. Everyone pulls from the same context. Nobody reinvents the component.",
  },
  {
    label: "Founders and product teams",
    body: "Early-stage products that want to move fast without creating a context debt that slows the team down the moment N needs to exist but does not.",
  },
  {
    label: "Design systems in recovery",
    body: "Systems that have grown organically without machine-readable governance. We audit, restructure, and encode — without starting from scratch.",
  },
] as const;

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function AgenticPage() {
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
              <Badge variant="secondary">&lt;N&gt; — Narrate</Badge>
            </div>
            <h1 className="display-md text-on-surface mb-4">
              Agentic Design Systems
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              Machine-readable design systems that AI agents can consume, contribute to,
              and reason about.
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
              A design system where every token, component, and pattern is encoded in
              machine-readable context: CLAUDE.md files, MCP servers, agent-queryable APIs.
            </p>
            <p>
              Not just for humans reading documentation. For AI agents building with the system.
            </p>
            <p>
              The distinction matters because AI is now the primary consumer of design systems
              in most teams. If the system cannot be read, queried, and reasoned about by an agent,
              it has a context gap — and that gap fills with inconsistency, hallucinated tokens,
              and components built from scratch when a perfectly good one already exists.
            </p>
          </div>
        </RevealSection>
      </Section>

      {/* The N Layer */}
      <Section tone="mid">
        <RevealSection threshold={0.1}>
          <div className="max-w-3xl mx-auto mb-10">
            <Badge variant="secondary" className="mb-4">Architecture</Badge>
            <h2 className="headline-md text-on-surface mb-3">The N Layer</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              N is the infrastructure that connects discovery to delivery. Four components
              that make a design system agentic.
            </p>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.05} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {nLayerItems.map((item, i) => (
            <Card
              key={item.label}
              variant="filled"
              style={{ "--stagger": i } as React.CSSProperties}
              className={`border ${item.bg}`}
            >
              <p className={`font-mono text-xs font-semibold mb-2 ${item.accent}`}>&lt;N&gt;</p>
              <h3 className="label-md text-on-surface mb-3">{item.label}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </RevealSection>
      </Section>

      {/* CLAUDE.md example */}
      <Section tone="base" narrow>
        <RevealSection threshold={0.15}>
          <Badge variant="primary" className="mb-4">In practice</Badge>
          <h2 className="headline-md text-on-surface mb-6">
            This site is the proof of practice
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed mb-6">
            The site you are reading was built entirely via Claude Code prompts, consuming a
            CLAUDE.md that encodes the INC framework, brand voice, component contracts,
            and design tokens. Every agent interaction draws from N. This is not a
            description of the methodology — it is a demonstration of it.
          </p>
          <Card variant="inset" className="border border-outline-variant/20">
            <p className="label-sm text-on-surface-variant/60 mb-3 font-mono">CLAUDE.md excerpt</p>
            <CodeBlock language="markdown">{`## Design Tokens
- Use design token classes (\`text-on-surface\`, \`bg-surface-container-low\`)
- Never hardcode hex or rgb values

## Component Architecture
- ALWAYS use shared UI components from \`@/components/ui/\`
- Server components by default — only \`"use client"\` when state is needed

## Voice
- British English (colour, organisation, behaviour)
- "We" (consultancy context), direct, no corporate fluff`}</CodeBlock>
          </Card>
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
        <RevealSection stagger threshold={0.05} className="max-w-3xl mx-auto space-y-4">
          {produces.map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-4"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className="w-7 h-7 rounded-full bg-secondary-container/30 border border-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="font-mono text-xs text-secondary">{i + 1}</span>
              </div>
              <div>
                <h3 className="label-md text-on-surface mb-1">{item.label}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </RevealSection>
      </Section>

      {/* N is the commons */}
      <Section tone="mid" narrow>
        <RevealSection threshold={0.2}>
          <Card variant="elevated" className="border border-secondary/20 bg-secondary-container/10 text-center">
            <p className="font-mono text-secondary text-xs font-semibold mb-3">&lt;N&gt;</p>
            <p className="headline-sm text-on-surface mb-4">
              The design system is a commons, not a deliverable.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              The architect seeds it. The team enriches it. The agents consume it and
              contribute back to it. N does not deprecate — it accumulates. Every
              artefact, every conversation, every shipped component makes the next
              cycle faster and more accurate.
            </p>
          </Card>
        </RevealSection>
      </Section>

      {/* Who it's for */}
      <Section tone="base">
        <RevealSection threshold={0.1}>
          <div className="max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="mb-4">Audience</Badge>
            <h2 className="headline-md text-on-surface">Who it is for</h2>
            <p className="text-base text-on-surface-variant leading-relaxed mt-3">
              Organisations adopting AI-augmented design workflows, and teams building with
              Claude, Cursor, or Copilot.
            </p>
          </div>
        </RevealSection>
        <RevealSection stagger threshold={0.05} className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {audiences.map((item, i) => (
            <Card
              key={item.label}
              variant="inset"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <p className="label-sm text-primary mb-2">{item.label}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </RevealSection>
      </Section>

      {/* Link back to I */}
      <Section tone="low" narrow>
        <RevealSection threshold={0.2}>
          <div className="rounded-xl bg-primary-container/10 border border-primary/20 px-8 py-8">
            <p className="label-sm text-primary mb-3">What comes before</p>
            <h3 className="headline-sm text-on-surface mb-3">
              N is seeded by NorthStar Prototyping
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              The agentic design system does not begin with a token audit. It begins with
              a NorthStar prototype that encodes domain knowledge, brand conviction, and
              interaction patterns — before a single production token is named.
            </p>
            <Button variant="primary" size="sm" href="/approach/northstar">
              See: NorthStar Prototyping →
            </Button>
          </div>
        </RevealSection>
      </Section>

      <IncCTAFooter />
    </>
  );
}
