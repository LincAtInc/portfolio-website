const steps = [
  { num: '01', colorNum: 'text-primary bg-primary/12', title: 'Parse Tokens', desc: 'Read CSS custom properties from styles.css and map to Figma variable collections.', flow: 'styles.css → Variables' },
  { num: '02', colorNum: 'text-secondary bg-secondary/12', title: 'Build Components', desc: 'Generate Figma components from React source with variants and auto-layout.', flow: '*.tsx → Components' },
  { num: '03', colorNum: 'text-accent bg-accent/12', title: 'Code Connect', desc: 'Map Figma nodes to codebase files so developers see real imports in Dev Mode.', flow: 'Figma ↔ Codebase' },
  { num: '04', colorNum: 'text-[#22c55e] bg-[#22c55e]/12', title: 'Agent Layer', desc: 'CLAUDE.md provides context. MCP tools let agents read, create, and extend the system.', flow: 'CLAUDE.md → Agent' },
];

export function Pipeline() {
  return (
    <section id="pipeline" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center text-center gap-4 mb-14">
        <span className="font-mono text-[13px] font-medium text-primary tracking-[0.08em] uppercase">Pipeline</span>
        <h2 className="font-display text-[40px] font-bold text-text-inverse tracking-tight leading-[1.15]">Code to canvas, canvas to code</h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-[580px]">
          The MCP bridge keeps Figma and code in sync. Tokens flow from CSS to Figma variables. Components flow through Code Connect.
        </p>
      </div>
      <div className="flex gap-4">
        {steps.map((step) => (
          <div key={step.num} className="flex-1 flex flex-col gap-4 p-7 border border-border-subtle rounded-xl bg-[rgba(30,41,59,0.3)]">
            <div className="flex items-center gap-2.5">
              <span className={`font-mono text-[11px] font-semibold px-2 py-1 rounded ${step.colorNum}`}>{step.num}</span>
              <span className="font-display text-[15px] font-semibold text-text-inverse">{step.title}</span>
            </div>
            <p className="text-[13px] text-subtle leading-relaxed">{step.desc}</p>
            <span className="font-mono text-[11px] text-[#475569]">{step.flow}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
