export function Hero() {
  return (
    <header className="flex flex-col items-center text-center px-20 pt-30 pb-24 gap-8 bg-bg-dark">
      <span className="font-mono text-[13px] font-medium text-accent tracking-[0.08em] uppercase">
        Design Systems Architecture
      </span>
      <h1 className="font-display text-[72px] font-bold text-text-inverse tracking-[-0.03em] leading-[1.05] max-w-[900px]">
        Headless Design Systems
      </h1>
      <p className="text-xl text-muted leading-relaxed max-w-[640px]">
        Behaviour without opinion. Token-driven theming. Machine-readable for AI
        agents. One system, infinite expressions.
      </p>
      <div className="flex gap-4 pt-4">
        <a href="#architecture" className="text-[15px] font-medium text-text-inverse bg-primary px-8 py-3.5 rounded-lg no-underline hover:bg-primary-dark transition-colors">
          View Architecture
        </a>
        <a href="https://github.com/LincAtInc/portfolio-website/tree/main/headless-ds" target="_blank" rel="noopener noreferrer"
           className="text-[15px] font-medium text-muted border border-[#334155] px-8 py-3.5 rounded-lg no-underline hover:text-text-inverse hover:border-[#475569] transition-colors">
          See the Code
        </a>
      </div>
    </header>
  );
}
