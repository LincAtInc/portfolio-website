const layers = [
  { num: '01', color: 'primary', title: 'Headless Primitives', desc: 'Radix UI — accessibility, keyboard, focus, state', tag: '@radix-ui/*' },
  { num: '02', color: 'secondary', title: 'DS Component Layer', desc: 'Props, variants, composition API', tag: 'src/components/*' },
  { num: '03', color: 'accent', title: 'Design Tokens', desc: 'CSS custom properties — colour, spacing, radius, shadow', tag: 'src/tokens/*.css' },
  { num: '04', color: 'primary', title: 'Brand Themes', desc: 'Token sets per brand — swap CSS to re-skin', tag: 'healthcare.css' },
  { num: '05', color: 'secondary', title: 'Figma via Code Connect', desc: 'Visual layer synced to code source of truth', tag: 'MCP bridge' },
  { num: '06', color: 'accent', title: 'AI Agent Layer', desc: 'CLAUDE.md context + MCP tools — agents consume and extend', tag: 'CLAUDE.md' },
];

const colorMap = {
  primary: { layer: 'bg-primary/8 border border-primary/25', num: 'text-primary' },
  secondary: { layer: 'bg-secondary/8 border border-secondary/25', num: 'text-secondary' },
  accent: { layer: 'bg-accent/8 border border-accent/25', num: 'text-accent' },
};

export function Architecture() {
  return (
    <section id="architecture" className="px-20 py-24 max-w-[1440px] mx-auto bg-surface-deep">
      <div className="flex flex-col items-center text-center gap-4 mb-14">
        <span className="font-mono text-[13px] font-medium text-accent tracking-[0.08em] uppercase">Architecture</span>
        <h2 className="font-display text-[40px] font-bold text-text-inverse tracking-tight leading-[1.15]">Six layers, one system</h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-[560px]">
          Each layer has a single responsibility. Replace any layer without breaking the others.
        </p>
      </div>
      <div className="flex flex-col items-center max-w-[800px] mx-auto">
        {layers.map((layer, i) => (
          <div key={layer.num}>
            {i > 0 && <div className="w-px h-5 bg-[#334155] mx-auto" />}
            <div className={`flex items-center w-full px-7 py-5 rounded-[10px] gap-5 ${colorMap[layer.color as keyof typeof colorMap].layer}`}>
              <span className={`font-mono text-xs font-semibold w-6 shrink-0 ${colorMap[layer.color as keyof typeof colorMap].num}`}>{layer.num}</span>
              <div className="flex-1">
                <div className="font-display text-base font-semibold text-text-inverse">{layer.title}</div>
                <div className="text-[13px] text-subtle mt-1">{layer.desc}</div>
              </div>
              <span className="font-mono text-[11px] text-[#475569] ml-auto whitespace-nowrap">{layer.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
