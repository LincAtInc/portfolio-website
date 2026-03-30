import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLAUDE.md: Machine-Readable Culture | Lincoln Mitchell",
  description:
    "The single file that governs six AI agents. See what machine-readable culture looks like — annotated, explained, and actively governing the page you're reading.",
};

const annotatedSections = [
  {
    title: "Brand & Positioning",
    code: `## Brand & Positioning

### Title
**Design Systems Architect**
— subtitle: *NorthStar Prototyping | Agentic Design*

### Key Differentiators
- **NorthStar Prototyping** — Exploratory AI prototyping
  to shape vision early when possibilities are widest
- **Agentic Design Systems** — Machine-readable,
  code-based design systems that AI agents can consume
- **One-person innovation engine** — AI makes one person
  as productive as a discovery team`,
    annotation: "This section tells every agent who Lincoln is and what makes him different. The Content Strategist uses it to position every piece of writing. The Stakeholder Simulator uses it to test whether a pitch lands. Without this, agents generate generic output. With it, they generate Lincoln.",
    consumedBy: ["Content Strategist", "Stakeholder Simulator", "UX Researcher"],
  },
  {
    title: "The INC Framework",
    code: `### INC Framework (Ideate < Narrate > Create)
The core methodology:
- **I (Ideate)** — Discovery-first NorthStar prototyping
- **<N> (Narrate)** — The agentic design system
  infrastructure that amplifies both directions.
  N = domain knowledge encoded as agentic context.
- **C (Create)** — Production code, content, shipping

N is the expansion layer — not a step between I and C,
but the amplifier that radiates into both:
  I <N> C`,
    annotation: "This is the intellectual foundation. Every thoughts page ties back to this framework. The Content Strategist structures arguments around it. The UX Designer uses it to justify navigation decisions. It's not documentation — it's the operating model.",
    consumedBy: ["Content Strategist", "UX Designer", "UX Researcher"],
  },
  {
    title: "Writing Voice",
    code: `## Writing Voice
- Direct, confident, no corporate fluff
- British English spelling (organisation, prioritise)
- Uses "I" not "we" — this is a personal brand
- OK to mention Claude Code by name
- "Vibe coding" used casually, never as a title
- Bold claims backed by career evidence, not hype`,
    annotation: "Six rules that control the voice across every page. Without these, the Content Strategist writes like a generic marketing bot. With them, it writes like Lincoln. The FED Developer ignores this section entirely — and that's correct. Boundaries work both ways.",
    consumedBy: ["Content Strategist"],
  },
  {
    title: "Key Projects",
    code: `## Key Projects (for reference in content)
| Project   | Role                    | Company          |
|-----------|-------------------------|------------------|
| Fun Lab   | Design Associate Dir    | Dentsu/Merkle    |
| Helix     | Chief Design Officer    | Telstra Health   |
| PenCS     | Design Director         | PenCS            |
| Breville  | Design Systems Lead     | Breville         |
| Adelaide  | Design Systems Lead     | Merkle           |
| Red Roost | Design Systems Spec     | NCGroup          |`,
    annotation: "Concrete proof points. When the Content Strategist makes a claim about multi-brand design systems, it can reference Fun Lab. When the Stakeholder Simulator plays a sceptical CTO, it knows Lincoln has Telstra Health credibility. Evidence, not assertion.",
    consumedBy: ["Content Strategist", "Stakeholder Simulator", "UX Researcher"],
  },
  {
    title: "Important Rules",
    code: `## Important Rules for Editing This Site
- Keep the "proof-of-practice" framing — this site
  demonstrates agentic design, not just describes it
- The 50/30/20 split stays on website, off resume
- Don't use LINC acronym in hero — too obscure
- The design-system.html page is a killer differentiator
- All content should be generable from context files
- Footer states everything was generated via Claude Code`,
    annotation: "Guardrails that prevent agents from breaking the strategy. The FED Developer won't accidentally remove the proof-of-practice framing. The Content Strategist won't use LINC in a hero section. These rules encode decisions that were made once and shouldn't be revisited every conversation.",
    consumedBy: ["All agents"],
  },
];

const agentPerspectives = [
  {
    agent: "Content Strategist",
    initials: "CS",
    color: "border-l-[#f97316]",
    bg: "bg-[#f97316]",
    sees: "Voice rules, brand positioning, INC framework, key projects for credibility",
    ignores: "Tech stack, CSS tokens, build configuration",
  },
  {
    agent: "FED Developer",
    initials: "FD",
    color: "border-l-[var(--color-primary)]",
    bg: "bg-[#2563eb]",
    sees: "Tech stack, site structure, important rules about what not to break",
    ignores: "Writing voice, career arc, conference context",
  },
  {
    agent: "UX Researcher",
    initials: "UR",
    color: "border-l-[#22c55e]",
    bg: "bg-[#22c55e]",
    sees: "Target audiences, key differentiators, conference context, competitor positioning",
    ignores: "CSS properties, component structure, deployment config",
  },
  {
    agent: "UI Designer",
    initials: "UI",
    color: "border-l-[var(--color-secondary)]",
    bg: "bg-[#8b5cf6]",
    sees: "Design system tokens, colour palette, typography, spacing scale",
    ignores: "Writing voice, career narrative, project history",
  },
  {
    agent: "UX Designer",
    initials: "UX",
    color: "border-l-[var(--color-accent)]",
    bg: "bg-[#06b6d4]",
    sees: "Site structure, page hierarchy, INC framework for navigation logic",
    ignores: "Brand voice, visual tokens, deployment rules",
  },
  {
    agent: "Stakeholder Simulator",
    initials: "SS",
    color: "border-l-[#f97316]",
    bg: "bg-[#f97316]",
    sees: "Everything — needs full context to simulate realistic stakeholder reactions",
    ignores: "Nothing. Breadth of context is the point.",
  },
];

const comparison = [
  { dimension: "Scope", claudeMd: "Brand + voice + architecture + governance", projectRules: "Technical rules + schema compliance", contextFiles: "Design system + component specs" },
  { dimension: "Persistence", claudeMd: "Lives in repo, evolves with project", projectRules: "Per-session project rules", contextFiles: "Separate context files per concern" },
  { dimension: "Agent governance", claudeMd: "Defines agent roles and boundaries", projectRules: "Constrains single agent behaviour", contextFiles: "Informs but doesn't constrain" },
  { dimension: "Brand voice", claudeMd: "Fully encoded — tone, spelling, perspective", projectRules: "Not addressed", contextFiles: "Not addressed" },
  { dimension: "Cultural context", claudeMd: "Career arc, methodology, positioning", projectRules: "Technical decisions only", contextFiles: "Component usage only" },
  { dimension: "Recursive proof", claudeMd: "The file governs the agents that built the site that describes the file", projectRules: "Governs the tool that builds the tool", contextFiles: "Documents the system" },
];

export default function ClaudeMdPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <nav aria-label="Section navigation" className="max-w-[1440px] mx-auto px-8 md:px-20 pt-20 pb-0">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/system" className="text-white/40 hover:text-white/70 no-underline transition-colors">&larr; The System</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60" aria-current="page">The Infrastructure</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-10 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase">The Infrastructure</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          This is what machine-readable <span className="text-[var(--color-primary)]">culture</span> looks like
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          CLAUDE.md is not documentation. It is the operating system for a six-agent team. Every page on this site was generated by agents governed by this single file.
        </p>
      </header>

      <main>
        {/* What It Is */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">Context &gt; Probability</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why one file changes everything
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Without CLAUDE.md, AI generates <strong className="text-white">probable</strong> output — generic, off-brand, unfocused. Whatever the model thinks a &ldquo;design systems architect&rdquo; sounds like. With CLAUDE.md, AI generates <strong className="text-white">contextual</strong> output — on-brand, strategically aligned, voice-correct.
            </p>
            <p>
              This is Jesse Gardner&apos;s &ldquo;Context &gt; Probability&rdquo; thesis from Into Design Systems 2026, made tangible. One file. Six agents. Every page on this site.
            </p>
          </div>
        </section>

        {/* Annotated Walkthrough */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">The File</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            CLAUDE.md, annotated
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Key sections from the actual file, with annotations explaining why each section exists and which agents consume it.
          </p>

          <div className="flex flex-col gap-8">
            {annotatedSections.map((section) => (
              <div key={section.title} className="border border-[#1e293b] rounded-xl overflow-hidden">
                {/* Code block */}
                <div className="bg-[#0a0f1a] p-6 border-b border-[#1e293b]">
                  <span className="font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.1em] block mb-4">{section.title}</span>
                  <pre className="text-[13px] text-white/50 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto">{section.code}</pre>
                </div>
                {/* Annotation */}
                <div className="bg-[#0f172a] p-6">
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">{section.annotation}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.consumedBy.map((agent) => (
                      <span key={agent} className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 text-white/40">{agent}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agent Perspectives */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">Perspective Shift</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Same file. Six different readings.
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Each agent reads the same CLAUDE.md but focuses on different sections. Same source of truth, different consumption patterns. This is the Clan culture argument made concrete.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentPerspectives.map((ap) => (
              <div key={ap.agent} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${ap.color} rounded-xl`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-full ${ap.bg} flex items-center justify-center shrink-0`}>
                    <span className="font-mono text-[11px] font-bold text-[#0a0f1a]">{ap.initials}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{ap.agent}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.08em] block mb-1">Focuses on</span>
                    <p className="text-[14px] text-white/50 leading-relaxed">{ap.sees}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-white/20 uppercase tracking-[0.08em] block mb-1">Ignores</span>
                    <p className="text-[14px] text-white/30 leading-relaxed">{ap.ignores}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Landscape</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            CLAUDE.md vs the alternatives
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Other practitioners are solving the same problem differently. Nate Baldwin uses structured prompting with project-rules.mdc. Brad Frost advocates context files. Here&apos;s how CLAUDE.md compares.
          </p>

          <div className="border border-[#1e293b] rounded-xl overflow-x-auto">
            <div className="grid grid-cols-[160px_1fr_1fr_1fr] min-w-[700px]">
              <div className="px-4 py-3 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]"></div>
              <div className="px-4 py-3 font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">CLAUDE.md</div>
              <div className="px-4 py-3 font-mono text-[11px] text-white/40 uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">project-rules.mdc</div>
              <div className="px-4 py-3 font-mono text-[11px] text-white/40 uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Context Files</div>
            </div>
            {comparison.map((row) => (
              <div key={row.dimension} className="grid grid-cols-[160px_1fr_1fr_1fr] min-w-[700px]">
                <div className="px-4 py-3 text-sm text-white/60 font-medium border-b border-[#1e293b]">{row.dimension}</div>
                <div className="px-4 py-3 text-sm text-[var(--color-primary)]/80 border-b border-l border-[#1e293b]">{row.claudeMd}</div>
                <div className="px-4 py-3 text-sm text-white/30 border-b border-l border-[#1e293b]">{row.projectRules}</div>
                <div className="px-4 py-3 text-sm text-white/30 border-b border-l border-[#1e293b]">{row.contextFiles}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Recursive Proof */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">Meta</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            This page was generated by an agent governed by the file this page describes
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The Content Strategist wrote this page&apos;s copy. The Content Strategist&apos;s agent definition references CLAUDE.md. CLAUDE.md defines the writing voice used on this page. The FED Developer implemented it. The FED Developer&apos;s agent definition references CLAUDE.md for tech stack rules.
            </p>
            <p>
              The file is not just described here — it is actively governing what you are reading right now. If the tone feels consistent across every page, that&apos;s CLAUDE.md working. If the claims feel grounded in real projects, that&apos;s CLAUDE.md working. If the CTA feels like an invitation rather than a sales pitch, that&apos;s CLAUDE.md working.
            </p>
            <p className="text-[var(--color-primary)]">
              When I write CLAUDE.md, I&apos;m not writing documentation. I&apos;m writing culture.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Want to build your own CLAUDE.md?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            I help teams encode their culture, voice, and architecture into context files that AI agents can consume. The result: consistent output, governed creativity, and a team that scales without losing its identity.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity">
              Let&apos;s Build Yours
            </a>
            <a href="https://github.com/LincAtInc/portfolio-website/blob/main/CLAUDE.md" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              View the Full File
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — governed by the file it describes.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
