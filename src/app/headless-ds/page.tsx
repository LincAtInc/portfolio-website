import { Nav } from "@/components/Nav";
import { WhyHeadless } from "@/components/headless-ds/WhyHeadless";
import { Architecture } from "@/components/headless-ds/Architecture";
import { InteractiveDemo } from "@/components/headless-ds/InteractiveDemo";
import { CodeExamples } from "@/components/headless-ds/CodeExamples";
import { Pipeline } from "@/components/headless-ds/Pipeline";
import { INCLoop } from "@/components/headless-ds/INCLoop";

export default function HeadlessDS() {
  return (
    <>
      <Nav />
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-24 gap-8">
        <span className="font-mono text-[13px] font-medium text-accent tracking-[0.08em] uppercase">
          Design Systems Architecture
        </span>
        <h1 className="font-display text-[clamp(3rem,6vw,4.5rem)] font-bold text-on-surface tracking-[-0.03em] leading-[1.05] max-w-[900px]">
          Headless Design Systems
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed max-w-[640px]">
          Behaviour without opinion. Token-driven theming. Machine-readable for AI
          agents. One system, infinite expressions.
        </p>
        <div className="flex gap-4 pt-4">
          <a href="#architecture" className="text-[15px] font-medium text-on-surface bg-primary-container px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity">
            View Architecture
          </a>
          <a href="#code" className="text-[15px] font-medium text-on-surface-variant border border-outline-variant px-8 py-3.5 rounded-lg no-underline hover:text-on-surface hover:border-outline transition-colors">
            See the Code
          </a>
        </div>
      </header>
      <main>
        <WhyHeadless />
        <Architecture />
        <InteractiveDemo />
        <CodeExamples />
        <Pipeline />
        <INCLoop />
        <section className="px-8 md:px-20 pt-20 pb-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="font-display text-[32px] font-bold text-on-surface tracking-tight">
              Ready to build your agentic design system?
            </h2>
            <p className="text-base text-on-surface-variant max-w-[480px] leading-relaxed">
              Let&apos;s talk about how headless architecture and AI agents can transform your design-to-code workflow.
            </p>
            <div className="flex gap-4">
              <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer"
                className="text-[15px] font-medium text-on-surface bg-primary-container px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity">
                Book a Chat
              </a>
              <a href="/" className="text-[15px] font-medium text-on-surface-variant border border-outline-variant px-8 py-3.5 rounded-lg no-underline hover:text-on-surface hover:border-outline transition-colors">
                Back to Portfolio
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-12 pt-12 border-t border-border-subtle">
            <p className="text-[13px] text-[#475569]">This entire page was designed in Paper and coded via Claude Code prompts.</p>
            <p className="text-[13px] text-[#475569]">lincolnmitchell.io &middot; linc@lincolnmitchell.io</p>
          </div>
        </section>
      </main>
    </>
  );
}
