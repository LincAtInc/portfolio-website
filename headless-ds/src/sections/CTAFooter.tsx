export function CTAFooter() {
  return (
    <section className="px-20 pt-20 pb-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center text-center gap-8">
        <h2 className="font-display text-[32px] font-bold text-text-inverse tracking-tight">
          Ready to build your agentic design system?
        </h2>
        <p className="text-base text-muted max-w-[480px] leading-relaxed">
          Let's talk about how headless architecture and AI agents can transform your design-to-code workflow.
        </p>
        <div className="flex gap-4">
          <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer"
             className="text-[15px] font-medium text-text-inverse bg-primary px-8 py-3.5 rounded-lg no-underline hover:bg-primary-dark transition-colors">
            Book a Chat
          </a>
          <a href="https://github.com/LincAtInc/portfolio-website" target="_blank" rel="noopener noreferrer"
             className="text-[15px] font-medium text-muted border border-[#334155] px-8 py-3.5 rounded-lg no-underline hover:text-text-inverse hover:border-[#475569] transition-colors">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-12 pt-12 border-t border-border-subtle">
        <p className="text-[13px] text-[#475569]">This entire page was designed in Paper and coded via Claude Code prompts.</p>
        <p className="text-[13px] text-[#475569]">lincolnmitchell.io · linc@lincolnmitchell.io</p>
      </div>
    </section>
  );
}
