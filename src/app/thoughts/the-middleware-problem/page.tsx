import Link from "next/link";
import { Nav } from "@/components/Nav";
import { ThoughtsSubNav } from "@/components/ThoughtsSubNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Middleware Problem | Lincoln Mitchell",
  description:
    "I have Claude Code, a full agentic design system, and the capacity to move faster than any product team. So who do I actually need in the room? The answer is not who you expect.",
};

const irreplaceables = [
  {
    label: "01",
    title: "Domain Knowledge",
    description:
      "The clinician. The compliance officer. The warehouse manager at 3am. Experience that isn\u2019t in any document and can\u2019t be synthesised from public data. This is the raw material the system cannot generate.",
    color: "border-l-[var(--color-warm)]",
    labelColor: "text-[var(--color-warm)]",
  },
  {
    label: "02",
    title: "Decision Authority",
    description:
      "Someone whose yes is binding. Executives, board members, budget holders. Not approval in principle \u2014 approval that unlocks resources, removes blockers, and commits the organisation. Without this, I\u2019m building on sand.",
    color: "border-l-[var(--color-primary)]",
    labelColor: "text-[var(--color-primary)]",
  },
  {
    label: "03",
    title: "Lived Experience",
    description:
      "The actual user. Not a report about them. Not a persona derived from them. Them \u2014 reacting to a prototype in real time, in the context they actually work in. Twenty minutes of this is worth six months of secondary research.",
    color: "border-l-[var(--color-accent)]",
    labelColor: "text-[var(--color-accent)]",
  },
];

export default function TheMiddlewareProblem() {
  return (
    <>
      <Nav />
      <ThoughtsSubNav />

      <div className="thoughts-content">
        {/* Hero */}
        <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Controversial</span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
            The room got a lot{" "}
            <span className="text-[var(--color-warm-light)]">smaller</span>.
          </h1>
          <p className="text-xl text-white/50 max-w-[660px] leading-relaxed">
            I have Claude Code. I have Claude Cowork. I have a full agentic design system and the capacity to run discovery, design, and delivery alone. So I started asking an uncomfortable question: who do I actually need in the room with me? The answer surprised me. And it will make some people very uncomfortable.
          </p>
        </header>

        <main>
          {/* The Old Room */}
          <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
            <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Old Room</span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Twelve people. One login page.
            </h2>
            <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
              <p>
                You know the standup. Fourteen people on a Zoom call. The Product Manager, the Product Owner, the Business Analyst, the Scrum Master, the UX Researcher, the UX Designer, the UI Designer, the Tech Lead, the Front-End Developer, the Back-End Developer, the QA Engineer, and the Delivery Manager &mdash; all convened to discuss the sprint status of a form with four fields and a submit button.
              </p>
              <p>
                Nobody mentions this is absurd. It&apos;s the process. The process is the point.
              </p>
              <p>
                I&apos;ve been in these rooms for sixteen years. And I noticed something: most of the conversation was about coordinating the people in the conversation. Status updates passed between people whose only job was to pass status updates. Translation layers between people who spoke the same language but had been assigned different role titles that required an intermediary.
              </p>
              <p>
                The thing being built &mdash; the actual product, the user problem, the decision &mdash; appeared briefly, got obscured by process, and disappeared again into a backlog.
              </p>
            </div>
          </section>

          {/* Honest Assessment */}
          <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
            <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">Honest Assessment</span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
              What a PM, PO, and BA actually contribute
            </h2>
            <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
              <p>
                I want to be fair here. These are not bad people doing pointless jobs. They were solving real problems. The question is whether those problems still exist.
              </p>
              <p>
                The Product Manager was the bridge between business strategy and product execution. They learned the domain &mdash; who the customers were, what the market wanted, what the business needed. They translated that understanding into product direction. The critical word is &ldquo;learned.&rdquo; They were learning the domain. Often slower than the domain was changing. Often from two people removed from the actual users.
              </p>
              <p>
                The Product Owner managed the backlog. They prioritised what got built and when, and they owned the relationship with the delivery team. In practice: they attended the ceremonies, they maintained the tickets, and they shielded the delivery team from stakeholder noise. They were a buffer. A very expensive buffer.
              </p>
              <p>
                The Business Analyst documented requirements. They turned stakeholder wishes into specifications. They sat between the people who knew what the business needed and the people who could build it, and they wrote things down so the gap didn&apos;t swallow the project.
              </p>
              <p>
                All three of these roles exist because of a translation problem. Business speaks one language. Engineering speaks another. Stakeholders say what they want, not what they need. The BA/PO/PM triad was a human middleware layer &mdash; translating, buffering, prioritising, coordinating.
              </p>
              <p>
                The middleware problem was real. The human solution made sense before AI.
              </p>
              <p>
                But here&apos;s the deeper problem: &ldquo;learning the domain&rdquo; isn&apos;t neutral. A PM&apos;s domain knowledge is already out of date by the time they&apos;ve synthesised it. Worse, it can actively point in the wrong direction &mdash; shaped by last quarter&apos;s assumptions, last year&apos;s strategy, a competitive landscape that has already shifted. They&apos;re not just slow translators. They&apos;re translators working from an old dictionary.
              </p>
              <p>
                And they are <em>structurally</em> risk-averse. PMs, POs, and BAs are constrained by roadmaps that were outdated before they were published, timelines set by people who&apos;ve never built anything, and budgets allocated against assumptions that no longer hold. Their job incentivises them to protect the plan, not challenge it. They manage risk by avoiding it. That&apos;s not a character flaw &mdash; it&apos;s the job description.
              </p>
              <p>
                When I NorthStar prototype with AI, I change the trajectory of a company. I don&apos;t learn the domain as it was &mdash; I explore what it could become. The prototype doesn&apos;t confirm the roadmap. It renders the roadmap obsolete by showing something better. That requires autonomy, risk tolerance, and adhocracy &mdash; the exact things the middleware layer is designed to suppress.
              </p>
              <p>
                Now ask: what changes when I can learn a domain in three hours of deep research with Claude? What changes when I can write the requirements as a CLAUDE.md context file that any agent in the system can consume? What changes when the prototype I generate overnight is more persuasive than a BA&apos;s specification document, and more honest than a roadmap nobody believes?
              </p>
              <p className="text-[var(--color-warm-light)]">
                The translation problem doesn&apos;t disappear. But the human translators become optional.
              </p>
            </div>
          </section>

          {/* The New Room */}
          <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
            <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The New Room</span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Three things I can&apos;t generate.
            </h2>
            <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
              <p>
                I&apos;ve thought hard about this. And I keep arriving at the same answer. There are three things I cannot fabricate, synthesise, or prompt my way to. Three things that require a real human in the room with me.
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-[800px] mt-10">
              {irreplaceables.map((item) => (
                <div
                  key={item.label}
                  className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${item.color} rounded-xl flex gap-8 items-start`}
                >
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">{item.label}</span>
                  <div className="flex-1">
                    <h3 className={`font-display text-lg font-semibold mb-2 ${item.labelColor}`}>{item.title}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6 mt-10">
              <p>
                That&apos;s it. Domain knowledge, decision authority, lived experience.
              </p>
              <p className="text-[var(--color-warm-light)]">
                Everyone else was middleware.
              </p>
              <p>
                The PM was learning the domain &mdash; I can learn it faster. The PO was managing a backlog &mdash; I own the backlog. The BA was writing requirements &mdash; I write them into the system itself. The Scrum Master was protecting the team&apos;s focus &mdash; I am the team, and my focus is my own responsibility.
              </p>
            </div>
          </section>

          {/* Quote */}
          <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
            <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
              <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
              Domain knowledge is the only irreplaceable thing. Everyone else was middleware.
            </blockquote>
            <cite className="text-sm text-[#64748b] not-italic">The Middleware Problem &mdash; a restructured room</cite>
          </section>

          {/* The Cost */}
          <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
            <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Cost</span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
              This isn&apos;t free.
            </h2>
            <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
              <p>
                Collapsing the middleware layer places a demand on me that the middleware was previously absorbing. And I need to be honest about that.
              </p>
              <p>
                I have to communicate better. If there&apos;s no BA between me and the stakeholder, I have to translate fluently &mdash; not just design-to-dev, but vision-to-board, constraint-to-user, risk-to-exec. I have to speak every language in the room, because I am every role in the room.
              </p>
              <p>
                I have to document better. The BA&apos;s specification document served a purpose: it created a shared record that didn&apos;t live only in someone&apos;s head. When I&apos;m working alone with agents, the CLAUDE.md file is that record. The context files are the specification. The N layer in I&lt;N&gt;C is where domain knowledge gets encoded so it persists beyond the conversation, beyond the project, beyond the person who held it.
              </p>
              <p>
                I have to listen harder. Without a researcher doing the listening for me, I have to develop the discipline to stop building long enough to observe. The agentic design system gives me speed. Speed without pause is just a faster way to build the wrong thing.
              </p>
              <p>
                And I have to earn trust directly. The PM and PO were, among other things, political buffers &mdash; they managed the relationship between the team and the organisation. Without them I am exposed directly to every stakeholder anxiety and every executive mood swing. That exposure is clarifying. But it is not comfortable.
              </p>
              <p className="text-[var(--color-warm-light)]">
                The room is smaller. The accountability is larger. That&apos;s the honest trade.
              </p>
            </div>
          </section>

          {/* The INC Frame */}
          <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
            <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The INC Frame</span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
              The N layer is the middleware that doesn&apos;t leave.
            </h2>
            <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
              <p>
                Here&apos;s where the INC framework makes this precise.
              </p>
              <p>
                In the old model: the PM learns the domain, the BA writes it down, the PO holds it in their head, the whole triad carries the institutional knowledge. When they leave &mdash; and they always leave &mdash; the knowledge walks out with them.
              </p>
              <p>
                In the I&lt;N&gt;C model: the N layer IS the encoded domain knowledge. Not a person who knows the domain. A system that has absorbed it. CLAUDE.md files, structured context, component decisions informed by domain constraints, token names that carry semantic meaning about the problem space. The N layer is persistent. It doesn&apos;t resign. It doesn&apos;t get promoted to another team. It doesn&apos;t go to a competitor and take the roadmap with them.
              </p>
              <p>
                This is the deeper argument for agentic design systems that I rarely see made: they solve the knowledge retention problem that every organisation pretends to address and never actually does. Every project I&apos;ve been on has had a &ldquo;knowledge transfer&rdquo; session at the end. Everyone attends. Nobody absorbs it. The knowledge evaporates.
              </p>
              <p className="text-[var(--color-warm-light)]">
                The N layer makes knowledge structural rather than personal.
              </p>
              <p>
                Domain experts don&apos;t need to attend every meeting &mdash; they need to inform the system once, and the system carries that knowledge forward into every output.
              </p>
              <p>
                <strong className="text-[var(--color-primary)]">I</strong> &mdash; I bring the exploratory vision. The provocative NorthStar prototype that nobody commissioned but everyone responds to.
              </p>
              <p>
                <strong className="text-[var(--color-secondary)]">&lt;N&gt;</strong> &mdash; Domain experts inform the context layer. Their knowledge becomes machine-readable. Persistent. Scalable. Not locked in a person.
              </p>
              <p>
                <strong className="text-[var(--color-accent)]">C</strong> &mdash; I ship production outputs that are already informed by domain expertise, because it was encoded into the system from the start.
              </p>
              <p>
                The PM, PO, and BA were an analogue solution to a knowledge management problem. The N layer is the digital one. It scales. It compounds. And it doesn&apos;t need a calendar invite.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
              If you&apos;re a PM reading this &mdash; good.
            </h2>
            <p className="text-lg text-white/50 max-w-[580px] mx-auto mb-4 leading-relaxed">
              I&apos;m not writing this to be cruel. I&apos;m writing it because the most useful thing a PM can become in an AI-first organisation is a domain expert who can talk directly to a builder. Stop being the translator. Become the person with something irreplaceable to translate.
            </p>
            <p className="text-lg text-white/50 max-w-[580px] mx-auto mb-8 leading-relaxed">
              If you have domain knowledge, decision authority, or lived experience &mdash; and you want to work with someone who can move at the speed this moment requires &mdash; I&apos;d like to talk. Not about headcount or process. About what&apos;s possible when the room contains exactly the right people.
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
                href="/thoughts/approved-in-theory"
                className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
              >
                Approved in Theory
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
          <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts &mdash; by a team of one, with no PM required.</p>
          <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
        </footer>
      </div>
    </>
  );
}
