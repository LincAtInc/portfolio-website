import { Section, SectionHeader, Card } from "@/components/ui";

const cards = [
  {
    dir: "N \u2192 I \u00b7 Expanding Discovery",
    dirColor: "text-primary",
    dotColor: "bg-primary",
    title: "Narrative widens ideation",
    desc: "When the design system encodes domain knowledge, AI agents can explore possibilities that a human alone would miss. The narrative layer gives agents the context to ideate within real constraints.",
    items: [
      "NorthStar prototypes grounded in domain truth",
      "AI explores the full possibility space, not just obvious paths",
      "CLAUDE.md as discovery context, not just build instructions",
      "Stakeholder language encoded\u2014CEO, CIO, CTO each get their view",
    ],
  },
  {
    dir: "N \u2192 C \u00b7 Accelerating Execution",
    dirColor: "text-tertiary",
    dotColor: "bg-tertiary",
    title: "Narrative accelerates creation",
    desc: "Machine-readable tokens, typed variants, and component contracts mean agents don\u2019t guess\u2014they compose with precision. The narrative layer eliminates ambiguity from the build process.",
    items: [
      "Tokens as structured data, not design specs to interpret",
      "Component APIs that agents consume without hallucination",
      "Code Connect maps Figma to codebase\u2014zero translation loss",
      "MCP endpoints expose the system as queryable infrastructure",
    ],
  },
  {
    dir: "I \u2192 N \u00b7 Discovery Feeds the System",
    dirColor: "text-primary",
    dotColor: "bg-primary",
    title: "Ideation enriches the narrative",
    desc: "Every NorthStar prototype reveals domain patterns that feed back into the design system. Discovery doesn\u2019t end at a handoff\u2014it continuously enriches the machine-readable layer.",
    items: [
      "Prototypes surface edge cases that update token contracts",
      "User research becomes encoded context, not slide decks",
      "New patterns graduate from exploration to system components",
    ],
  },
  {
    dir: "C \u2192 N \u00b7 Production Validates the System",
    dirColor: "text-tertiary",
    dotColor: "bg-tertiary",
    title: "Code strengthens the narrative",
    desc: "Production implementation reveals which abstractions hold and which break. The build process is a feedback loop that makes the narrative layer more precise over time.",
    items: [
      "Real usage data refines component variant APIs",
      "Performance constraints shape token decisions",
      "Agent-generated code validates machine-readability claims",
    ],
  },
];

export function HowNExpands() {
  return (
    <Section id="expand" tone="base">
      <SectionHeader
        label="The Amplifier Effect"
        title="How narrative expands both directions"
        description="Domain knowledge encoded as machine-readable context doesn't just sit in the middle. It actively amplifies what's possible on both sides."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Card key={card.dir} variant="filled" hoverable>
            <p className={`label-sm mb-4 ${card.dirColor}`}>{card.dir}</p>
            <h3 className="headline-sm text-on-surface mb-3">{card.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              {card.desc}
            </p>
            <ul className="list-none p-0 m-0 space-y-0">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-on-surface-variant/70 py-2 flex items-center gap-2.5"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${card.dotColor}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
