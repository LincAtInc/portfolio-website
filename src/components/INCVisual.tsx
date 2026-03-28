export function INCVisual() {
  return (
    <div className="relative max-w-[960px] mx-auto pt-[60px] pb-10">
      {/* Formula */}
      <div className="text-center text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[0.04em] mb-[60px] font-[family-name:var(--font-display)]">
        <span className="text-[var(--color-primary)]">I</span>
        <span className="text-[var(--color-secondary)]/60"> &lt;</span>
        <span className="text-[var(--color-secondary)]">N</span>
        <span className="text-[var(--color-secondary)]/60">&gt; </span>
        <span className="text-[var(--color-accent)]">C</span>
      </div>

      {/* Nodes */}
      <div className="flex items-center justify-center">
        {/* I Node */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center text-[2.5rem] font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]/30 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
            I
          </div>
          <span className="text-lg font-semibold text-white">Ideate</span>
          <span className="text-sm text-white/40 text-center max-w-[180px] leading-normal">
            Discovery &middot; NorthStar Prototyping &middot; Possibilities
          </span>
        </div>

        {/* Beam left */}
        <div className="flex-1 max-w-[140px] h-[2px] relative">
          <div className="absolute top-[-8px] left-0 right-0 h-[18px] rounded-[10px] bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-secondary)]/40 animate-pulse" />
        </div>

        {/* N Node */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="relative w-[130px] h-[130px] rounded-full flex items-center justify-center text-[3rem] font-bold text-[var(--color-secondary)] bg-[var(--color-secondary)]/12 border-2 border-[var(--color-secondary)]/40 shadow-[0_0_60px_rgba(139,92,246,0.2),0_0_120px_rgba(139,92,246,0.08)] animate-[nGlow_3s_ease-in-out_infinite]">
            <span className="absolute left-[-28px] top-1/2 -translate-y-1/2 text-[3.5rem] font-bold text-[var(--color-secondary)]/50">
              &lt;
            </span>
            N
            <span className="absolute right-[-28px] top-1/2 -translate-y-1/2 text-[3.5rem] font-bold text-[var(--color-secondary)]/50">
              &gt;
            </span>
          </div>
          <span className="text-lg font-semibold text-white">Narrate</span>
          <span className="text-sm text-white/40 text-center max-w-[180px] leading-normal">
            The Agentic Design System Layer
          </span>
        </div>

        {/* Beam right */}
        <div className="flex-1 max-w-[140px] h-[2px] relative">
          <div className="absolute top-[-8px] left-0 right-0 h-[18px] rounded-[10px] bg-gradient-to-r from-[var(--color-secondary)]/40 to-[var(--color-accent)]/5 animate-pulse" />
        </div>

        {/* C Node */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center text-[2.5rem] font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
            C
          </div>
          <span className="text-lg font-semibold text-white">Create</span>
          <span className="text-sm text-white/40 text-center max-w-[180px] leading-normal">
            Production Code &middot; Content &middot; Shipping
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center text-base text-white/35 mt-12 italic max-w-[600px] mx-auto">
        N is not a step between I and C&mdash;it&apos;s the amplifier that radiates into both directions.
      </p>
    </div>
  );
}
