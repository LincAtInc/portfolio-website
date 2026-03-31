import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approved in Theory | Lincoln Mitchell",
  description:
    "Every design systems architect knows the cycle: exec approval, zero implementation. The Angular-to-React migration delayed for years. Tokens approved but never prioritised. The blocker isn't the legacy codebase — it's the legacy org structure.",
};

const pattern = [
  {
    stage: "The Vision",
    what: "You present the NorthStar. Execs are energised. The room is electric.",
    outcome: "Approved.",
    color: "border-l-[var(--color-warm-light)]",
    labelColor: "text-[var(--color-warm-light)]",
  },
  {
    stage: "The Architecture",
    what: "You propose the token system. \"Brilliant. We'll prioritise that next quarter.\"",
    outcome: "Approved. Next quarter.",
    color: "border-l-[var(--color-warm)]",
    labelColor: "text-[var(--color-warm)]",
  },
  {
    stage: "The Prototype",
    what: "You build the NorthStar. Engineers are impressed. \"But we need to focus on the backlog.\"",
    outcome: "Approved. Not scheduled.",
    color: "border-l-[var(--color-accent)]",
    labelColor: "text-[var(--color-accent)]",
  },
  {
    stage: "The Component Library",
    what: "You design the system. \"Looks fantastic. The devs are just a bit buried right now.\"",
    outcome: "Approved. Indefinitely deferred.",
    color: "border-l-[var(--color-primary)]",
    labelColor: "text-[var(--color-primary)]",
  },
  {
    stage: "Next Quarter",
    what: "New priorities. New backlog. Same cycle.",
    outcome: "Approved. Again.",
    color: "border-l-[#ef4444]",
    labelColor: "text-[#ef4444]",
  },
];

const blockers = [
  {
    myth: "Angular is the blocker",
    reality: "A team that knows Angular is the blocker",
    color: "border-l-[var(--color-warm)]",
  },
  {
    myth: "Complexity is the blocker",
    reality: "A sprint board that rewards feature delivery, not infrastructure, is the blocker",
    color: "border-l-[var(--color-primary)]",
  },
  {
    myth: "Feasibility is the blocker",
    reality: "A culture that measures velocity, not vision, is the blocker",
    color: "border-l-[var(--color-accent)]",
  },
  {
    myth: "The legacy codebase is the blocker",
    reality: "The legacy org structure is the blocker",
    color: "border-l-[var(--color-secondary)]",
  },
];

export default function ApprovedInTheory() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Organisational Reality</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Approved in <span className="text-[var(--color-warm-light)]">Theory</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[660px] leading-relaxed">
          Every design systems architect knows the cycle. Exec approval. Zero implementation. The gap between the boardroom and the sprint board is where design systems go to die — and it has nothing to do with technology.
        </p>
      </header>

      <main>
        {/* The Pattern */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Pattern</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            This cycle. Every. Single. Time.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12 space-y-4">
            <p>
              I&apos;ve lived this at least four times across different organisations. It follows the same arc so precisely you could set a calendar reminder for when the deferral is coming.
            </p>
            <p>
              It isn&apos;t bad luck. It isn&apos;t bad stakeholders. It&apos;s a structural pattern baked into how delivery-oriented organisations function.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[800px]">
            {pattern.map((step, i) => (
              <div key={step.stage} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${step.color} rounded-xl flex gap-8 items-start`}>
                <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <h3 className={`font-display text-lg font-semibold mb-2 ${step.labelColor}`}>{step.stage}</h3>
                  <p className="text-[15px] text-white/50 leading-relaxed mb-3">{step.what}</p>
                  <span className="font-mono text-[12px] text-white/25 italic">{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Real Blocker */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">The Real Blocker</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            It&apos;s not technical
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12 space-y-4">
            <p>
              I spent years assuming the resistance was technical. Legacy code. Complex architecture. Migration risk. And yes, all of those were real — but none of them were the actual blocker.
            </p>
            <p>
              The actual blockers looked like this:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px]">
            {blockers.map((b) => (
              <div key={b.myth} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${b.color} rounded-xl`}>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="font-mono text-[11px] text-[#ef4444]/60 uppercase tracking-[0.08em] block mb-1">The myth</span>
                    <p className="text-sm text-white/30 italic line-through">{b.myth}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.08em] block mb-1">The reality</span>
                    <p className="text-[15px] text-white/70 leading-relaxed">{b.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote 1 */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            The team iterates. It never innovates. They&apos;re building faster versions of the wrong thing.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The delivery trap, lived experience</cite>
        </section>

        {/* The Delivery Trap */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Delivery Trap</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            A productive team that never transforms
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Backend-developer-led teams optimise for what they can measure: tickets closed, features shipped, velocity maintained. It&apos;s rational behaviour inside a broken incentive structure.
            </p>
            <p>
              Discovery work — prototyping, token architecture, design system foundations — doesn&apos;t fit in a sprint. There&apos;s no ticket for &ldquo;create the future.&rdquo; No velocity metric for &ldquo;make the next five years faster.&rdquo; So it gets deferred. Then deferred again. Then it becomes part of the mythical &ldquo;next quarter&rdquo; that never arrives.
            </p>
            <p>
              I&apos;ve watched Angular-to-React migrations get approved, then delayed, then deprioritised for <em>three consecutive years</em>. Not because React wasn&apos;t better. Because migrating doesn&apos;t close a feature ticket. The engineers who maintain Angular are productive. The engineers who would migrate it are a risk. The sprint board can&apos;t see what it&apos;s losing — only what it would cost.
            </p>
            <p>
              This is the delivery trap. The team is working. They&apos;re shipping. Every metric looks fine. And the organisation is slowly calcifying around a codebase that the market left behind.
            </p>
          </div>
        </section>

        {/* Fantasy Island */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">Fantasy Island</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The innovation lab that never comes home
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Organisations know they have this problem. Their solution? Create an innovation sub-company. A &ldquo;lab.&rdquo; A &ldquo;digital incubator.&rdquo; A team of bright minds in a separate office with beanbags and whiteboards, freed from the sprint board to think big.
            </p>
            <p>
              It doesn&apos;t work. These teams are siloed from day one. They build beautiful prototypes that live on Fantasy Island &mdash; disconnected from the delivery codebase, the production constraints, the real users, and the actual tech stack. The lab produces vision. The delivery team produces features. They never meet. The lab gets defunded after two years when nobody can point to production impact.
            </p>
            <p>
              The problem isn&apos;t that innovation and delivery can&apos;t coexist. It&apos;s that organisations separate them into different buildings, different teams, different budgets &mdash; and then wonder why the innovation never lands.
            </p>
            <p className="text-[var(--color-secondary)]">
              Design systems are the bridge that Fantasy Island never had.
            </p>
            <p>
              Start with <strong className="text-white">tokens in delivery</strong> &mdash; small, non-disruptive, embedded in the existing codebase. The delivery team doesn&apos;t even need to change how they work. Tokens are just variables. Then build <strong className="text-white">NorthStar prototypes in discovery</strong> &mdash; using those same tokens, that same design system. The prototype isn&apos;t a fantasy because it&apos;s built on the same foundation as production. The innovation and the delivery share DNA from the start.
            </p>
            <p>
              No separate lab. No separate budget. No Fantasy Island. Just a design system that serves both directions &mdash; giving delivery consistency and giving discovery a launchpad that&apos;s already connected to the real world.
            </p>
          </div>
        </section>

        {/* The Political Layer */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase block mb-4">The Quiet Part</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why CTOs quietly kill what they publicly approve
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Here is the thing nobody says in the design systems community, because it makes us sound cynical: agentic design systems are politically dangerous.
            </p>
            <p>
              A system that lets one person do the work of five isn&apos;t just efficient — it threatens headcount, budget, and organisational power. A CTO with 40 engineers and a £4M annual budget has power proportional to that team. A design system that compresses the need to 10 engineers and £1M isn&apos;t a technical upgrade. It&apos;s a political threat. The CTO will approve it in the boardroom and quietly ensure it never gets prioritised in the sprint.
            </p>
            <p>
              This isn&apos;t cynicism. It&apos;s organisational behaviour. Quinn and Cameron&apos;s{" "}
              <Link href="/thoughts/competing-values" className="text-[var(--color-secondary)] no-underline hover:underline">
                Competing Values Framework
              </Link>{" "}
              calls it Hierarchy culture — an organisation type that values control, stability, and the protection of existing structure above external adaptation. Hierarchy cultures don&apos;t reject innovation. They absorb it into committees and working groups until it becomes harmless.
            </p>
            <p>
              The people who approve innovation are rarely the people who implement it. And the people who implement it are directly measured by the velocity that innovation would disrupt.
            </p>
            <p className="text-[var(--color-warm-light)]">
              The innovation dies not from opposition. It dies from infinite, polite deferral.
            </p>
          </div>
        </section>

        {/* Quote 2 */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[#ef4444]/20 font-serif leading-none">&ldquo;</span>
            The innovation doesn&apos;t die from opposition. It dies from infinite, polite deferral.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">Organisational behaviour, not cynicism</cite>
        </section>

        {/* The Agentic Answer */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Agentic Answer</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Stop asking for permission. Start delivering proof.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Agentic design systems don&apos;t need a migration. They don&apos;t need the delivery team to stop what they&apos;re doing. They work alongside the existing codebase, from the inside out.
            </p>
            <p>
              CLAUDE.md doesn&apos;t require a rewrite — it reads what&apos;s there and builds within it. A design token file doesn&apos;t replace the Angular components — it sits alongside them and makes the next thing built in React consistent from day one. You don&apos;t start with the migration. You start with one context file, one token, one component. The system grows from the inside while the delivery team keeps shipping.
            </p>
            <p>
              The political answer is the same: stop asking for a migration. Start delivering outcomes that make the Angular codebase look obsolete by comparison. Build the NorthStar prototype in React that shows what the product could be. Let the output make the argument. The prototype argues better than any proposal deck ever could.
            </p>
            <p>
              This is what the{" "}
              <Link href="/thoughts/stakeholder-simulator" className="text-[var(--color-secondary)] no-underline hover:underline">
                Stakeholder Simulator
              </Link>{" "}
              is built for. Not just to practice pitching — but to identify exactly which stakeholder is the actual political blocker, and what evidence they need to see before they&apos;ll unblock it. A CTO who fears headcount loss needs a different argument than a CTO who fears migration risk.
            </p>
            <p>
              The delivery trap assumes that the team controls what gets built. Agentic design systems sidestep that assumption entirely. One architect with the right context files and a well-scoped agent can demonstrate in a week what a committee would defer for a year.
            </p>
          </div>
        </section>

        {/* The INC Connection */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The INC Frame</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            What gets approved is I. What gets killed is &lt;N&gt;.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The I&lt;N&gt;C framework makes the failure point precise. Executives approve the Ideate phase — the vision, the NorthStar prototype, the possibility space. They love it because it costs nothing yet and threatens nothing yet.
            </p>
            <p>
              The &lt;N&gt; layer — Narrate — is where the organisation gets built. Token architecture. Component contracts. CLAUDE.md context files. Shared naming conventions. This is the infrastructure layer that makes C (Create) scale. And this is exactly what never gets prioritised, because it produces no visible output on the sprint board and has no immediate feature delivery attached.
            </p>
            <p>
              The delivery team ships features (partial C, without the N foundation). The design system architect builds the N. The N never gets resourced. So the next round of features ships on a shaky foundation again. And the cycle restarts.
            </p>
            <p>
              Agentic design systems are a direct answer to this. The N layer doesn&apos;t need a sprint ticket. A single CLAUDE.md file, a token JSON, a structured component API — I can build the N while the delivery team ships their C. It doesn&apos;t wait for permission. It just starts being true.
            </p>
            <p className="text-[var(--color-warm-light)]">
              The organisation approved the vision. I&apos;m building the infrastructure. By the time they notice, the system is already working.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Is your design system approved in theory?
          </h2>
          <p className="text-lg text-white/50 max-w-[580px] mx-auto mb-8 leading-relaxed">
            If you&apos;ve been through this cycle — the boardroom approval, the sprint deferral, the polite indefinite postponement — I&apos;d like to talk. Not about what went wrong, but about how to build from the inside without waiting for the organisation to catch up.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://cal.com/lincmitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-white bg-[var(--color-warm)] px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity"
            >
              Book a Conversation
            </a>
            <Link
              href="/thoughts/competing-values"
              className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
            >
              Competing Values Framework
            </Link>
            <Link
              href="/thoughts"
              className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
            >
              More Thoughts
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — built while the org was busy approving next quarter&apos;s backlog.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
