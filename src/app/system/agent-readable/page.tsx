import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { CTAFooter } from "@/components/CTAFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent-Readable Components: The Format | Lincoln Mitchell",
  description:
    "What a component looks like when the primary reader is an AI agent — and why JSON beats Markdown.",
};

function getButtonAgentJson(): Record<string, unknown> {
  const filePath = join(
    process.cwd(),
    "src/components/ui/Button.agent.json",
  );
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

const additions = [
  {
    label: "semantic_category",
    speaker: "Diana Wolosin, Indeed",
    finding: "93% LLM accuracy with semantic fields vs 75% without",
    snippet: `"variant": {
  "type": "union",
  "values": ["primary", "secondary", "tertiary", "ghost"],
  "semantic_category": "visual_hierarchy",
  "usage_rules": [
    "Use 'primary' for the single most important action per section",
    "Maximum one primary button per visible viewport"
  ]
}`,
    explanation:
      "A normal React button has a type definition. An agent-readable button tells the LLM what the prop controls semantically — not just that it accepts a string, but that it governs visual hierarchy. Diana Wolosin proved this single addition closes an 18-point accuracy gap.",
  },
  {
    label: "governance",
    speaker: "Romina Kavcic, The Design System Guide",
    finding: "Making governance programmable, not just documented",
    snippet: `"governance": {
  "trust_level": "verified",
  "rules": [
    "Never hardcode hex values — the variant system handles all colour",
    "Maximum one primary button per visible viewport section",
    "Button text must be verb-first: 'Book a Chat', not 'Chat Booking'"
  ],
  "antipatterns": [
    "Do not wrap Button in an <a> tag — use the href prop instead",
    "Do not use className to override variant colours"
  ]
}`,
    explanation:
      "TypeScript tells the agent what a button can do. Governance tells it what a button should do. Romina Kavcic introduced trust levels as programmable signals — a 'verified' component can be used without human review. The antipatterns array is enforceable: an agent that reads this will not wrap a Button in an anchor tag, even if the prompt asks it to.",
  },
  {
    label: "maps_to_intent",
    speaker: "Jesse Gardner, New York State",
    finding: "85% token savings when components are queryable by intent",
    snippet: `"knowledge_graph": {
  "maps_to_intent": {
    "call_to_action": { "variant": "primary", "size": "md" },
    "schedule_meeting": { "variant": "primary", "size": "lg",
      "href": "https://cal.com/lincmitch" },
    "supporting_action": { "variant": "secondary", "size": "md" },
    "navigation": { "variant": "tertiary" }
  }
}`,
    explanation:
      "A normal button component requires the developer to know which variant to use. An agent-readable button lets the LLM resolve intent directly to props. 'I need a call to action' resolves to variant='primary' without guessing. Jesse Gardner built this pattern as an MCP server at NYS. At portfolio scale, flat JSON achieves the same routing.",
  },
  {
    label: "tokens",
    speaker: "Jan Six, GitHub / Tokens Studio",
    finding: "Colocation — everything the agent needs lives next to the component",
    snippet: `"tokens": {
  "primary": {
    "background": "linear-gradient(135deg, #2563eb, #8b5cf6)",
    "text": "#ffffff",
    "shadow": "0 0 20px rgba(37, 99, 235, 0.25)",
    "hover": "filter: brightness(1.1)"
  },
  "secondary": {
    "background": "transparent",
    "text": "#b4c5ff",
    "border": "1px solid rgba(255, 255, 255, 0.1)"
  }
}`,
    explanation:
      "The agent doesn't need to parse Tailwind classes or trace CSS custom properties through a stylesheet. The token block gives it resolved values directly — what each variant actually looks like. Jan Six's colocation principle: Button.tsx, Button.stories.tsx, and Button.agent.json sit in the same folder. Three files, three audiences, zero drift.",
  },
];

export default function AgentReadablePage() {
  const parsed = getButtonAgentJson();
  void parsed; // available for future use

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
            The Format
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-10 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase">
          THE FORMAT
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          What agents read{" "}
          <span className="text-[var(--color-primary)]">that developers don&apos;t.</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          A React button has types. A Storybook button has stories.
          An agent-readable button has intent, governance, and a knowledge graph.
          Same component — different layer of truth.
        </p>
      </header>

      <main>
        {/* The three audiences */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                audience: "Developers",
                file: "Button.stories.tsx",
                reads: "Props, variants, interactive controls",
                color: "border-l-[#f97316]",
                labelColor: "text-[#f97316]",
              },
              {
                audience: "Designers",
                file: "design-system.html",
                reads: "Visual tokens, component gallery, brand voice",
                color: "border-l-[var(--color-secondary)]",
                labelColor: "text-[var(--color-secondary)]",
              },
              {
                audience: "AI Agents",
                file: "Button.agent.json",
                reads: "Semantic categories, governance rules, intent mapping",
                color: "border-l-[var(--color-primary)]",
                labelColor: "text-[var(--color-primary)]",
              },
            ].map((f) => (
              <div
                key={f.audience}
                className={`p-6 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${f.color} rounded-xl`}
              >
                <span className={`font-mono text-[11px] ${f.labelColor} uppercase tracking-[0.2em] block mb-2`}>
                  {f.audience}
                </span>
                <code className="text-[13px] text-white/70 font-mono block mb-3">
                  {f.file}
                </code>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  {f.reads}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-[720px]">
            <p className="text-[17px] text-white/50 leading-relaxed">
              TypeScript gives the agent the shape of a component. Storybook gives a developer
              the feel. Neither tells an AI agent <em className="text-white/70">when to use it,
              what rules to follow, or how to resolve a user&apos;s intent to the right variant</em>.
              That&apos;s what the agent file adds.
            </p>
          </div>
        </section>

        {/* What gets added */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">
            What Gets Added
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Four things a React component doesn&apos;t have
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-16">
            Each addition comes from a specific finding at IDS 2026.
            Each one closes a gap between what the agent knows and what it needs.
          </p>

          <div className="flex flex-col gap-16">
            {additions.map((item, i) => (
              <div key={item.label} className="max-w-[960px]">
                {/* Header */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-[11px] text-white/20 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-1">
                      <code className="text-[var(--color-primary)]">{item.label}</code>
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] text-white/30">
                        {item.speaker}
                      </span>
                      <span className="text-white/15">·</span>
                      <span className="font-mono text-[11px] text-[var(--color-primary)]/60">
                        {item.finding}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Snippet */}
                <div className="ml-9 mb-6">
                  <div className="bg-[#060e20] border border-[#1e293b] rounded-lg overflow-hidden">
                    <pre className="text-[13px] text-[#8b9ec7] font-mono leading-[1.7] whitespace-pre-wrap p-5 overflow-x-auto">
                      {item.snippet}
                    </pre>
                  </div>
                </div>

                {/* Explanation */}
                <div className="ml-9">
                  <p className="text-[16px] text-white/50 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The evidence */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">
            The Evidence
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why JSON, not Markdown
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Diana Wolosin benchmarked 8 metadata configurations across 4,389 AI-generated prototypes at Indeed.
            JSON with semantic annotations won on every metric.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[860px]">
            {[
              { metric: "LLM Accuracy", json: "93%", mdx: "75%", label: "accuracy" },
              { metric: "Tokens per query", json: "~5,000", mdx: "~25,000", label: "efficiency" },
              { metric: "Annual cost at scale", json: "$300", mdx: "$1,500", label: "cost" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-[#0a0f1a] border border-[#1e293b] rounded-xl"
              >
                <span className="font-mono text-[11px] text-white/25 uppercase tracking-[0.1em] block mb-3">
                  {stat.metric}
                </span>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-display text-3xl font-bold text-[var(--color-primary)]">
                    {stat.json}
                  </span>
                  <span className="text-[13px] text-white/20">JSON</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg text-white/20">
                    {stat.mdx}
                  </span>
                  <span className="text-[13px] text-white/15">MDX</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[12px] text-white/20 font-mono mt-6">
            Source: Diana Wolosin, &ldquo;Machine-Readable Design Systems for MCP and LLMs&rdquo; — Into Design Systems 2026
          </p>
        </section>

        {/* The convention */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">
            The Convention
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Three files. Three audiences.
          </h2>

          <div className="bg-[#060e20] border border-[#1e293b] rounded-lg overflow-hidden max-w-[480px] mb-12">
            <pre className="text-[14px] font-mono leading-[2] p-6">
              <span className="text-white/25">src/components/ui/</span>{"\n"}
              <span className="text-[#f97316]">  Button.tsx</span>
              <span className="text-white/20">           → code</span>{"\n"}
              <span className="text-[var(--color-secondary)]">  Button.stories.tsx</span>
              <span className="text-white/20">  → stories</span>{"\n"}
              <span className="text-[var(--color-primary)]">  Button.agent.json</span>
              <span className="text-white/20">   → agent context</span>
            </pre>
          </div>

          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              CLAUDE.md routes agents to these files. The{" "}
              <code className="text-[var(--color-accent)] text-[15px]">*.agent.json</code>{" "}
              glob means a future MCP server can index every agent file in the repo without
              configuration. At portfolio scale, the flat file is enough. At enterprise scale,
              you wrap it in a server. The content is the same — the delivery mechanism changes.
            </p>
            <p className="text-[var(--color-primary)]">
              The design system is the N layer. The agent files are how N becomes consumable.
            </p>
          </div>
        </section>
      </main>

      <CTAFooter />
    </>
  );
}
