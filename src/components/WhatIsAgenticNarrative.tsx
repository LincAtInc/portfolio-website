import { Section, SectionHeader, CodeBlock } from "@/components/ui";

const codeExample = `// CLAUDE.md — agentic narrative in practice

Brand: Healthcare
Primary: #059669  // trust, clinical calm
Radius: 0.75rem   // soft, approachable
Tone: professional, reassuring

// The agent doesn't just know the values.
// It knows WHY these values were chosen.
// It can make decisions that ALIGN
// with the domain intent.

Components:
  Button: variant=primary|secondary|ghost
  Card: elevation=sm|md|lg
  Alert: severity=info|success|warning|error

// Typed. Constrained. Machine-readable.
// The narrative IS the infrastructure.`;

export function WhatIsAgenticNarrative() {
  return (
    <Section id="what" tone="low">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 items-start">
        <div>
          <SectionHeader
            label="The Concept"
            title="What is an agentic narrative?"
          />
          <div className="text-on-surface-variant text-base leading-relaxed space-y-6">
            <p>
              It&apos;s the encoding of domain knowledge, design decisions, and
              organisational context into formats that AI agents can consume and
              act upon.
            </p>
            <p>
              Not documentation for humans. Not component APIs for developers. A
              structured narrative that gives machines the <em>why</em> behind
              the <em>what</em>&mdash;so they can make informed decisions rather
              than probabilistic guesses.
            </p>
            <p>
              CLAUDE.md files, design tokens, typed component contracts, MCP
              server endpoints&mdash;these are all forms of agentic narrative.
              They turn a design system from a reference library into AI
              infrastructure.
            </p>
          </div>
        </div>
        <CodeBlock title="CLAUDE.md" language="yaml">
          {codeExample}
        </CodeBlock>
      </div>
    </Section>
  );
}
