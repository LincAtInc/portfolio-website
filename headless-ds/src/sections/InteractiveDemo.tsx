export function InteractiveDemo() {
  return (
    <section id="demo" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center text-center gap-4 mb-14">
        <span className="font-mono text-[13px] font-medium text-secondary tracking-[0.08em] uppercase">Live Demo</span>
        <h2 className="font-display text-[40px] font-bold text-text-inverse tracking-tight leading-[1.15]">Same component, different tokens</h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-[540px]">
          The form below uses identical markup and behaviour. Only the token layer changes.
        </p>
      </div>
      <div className="flex gap-6">
        {/* Default Theme */}
        <div className="flex-1 border border-border-subtle rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-border-subtle">
            <span className="font-mono text-xs font-medium text-muted">default.css</span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="w-2 h-2 rounded-full bg-[#eab308]" />
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-10 bg-white">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#0f172a]">Email Address</label>
              <div className="px-3.5 py-2.5 border border-[#e2e8f0] rounded-md text-sm text-[#94a3b8]">user@example.com</div>
            </div>
            <div className="flex gap-3">
              <button className="text-sm font-medium text-white bg-[#2563eb] px-6 py-2.5 rounded-md border-none cursor-pointer">Submit</button>
              <button className="text-sm font-medium text-[#475569] bg-transparent border border-[#e2e8f0] px-6 py-2.5 rounded-md cursor-pointer">Cancel</button>
            </div>
            <div className="px-4 py-3.5 bg-[#eff6ff] rounded-lg border-l-3 border-l-[#2563eb] text-[13px] text-[#1e40af] leading-normal">
              Your data is encrypted end-to-end.
            </div>
          </div>
        </div>
        {/* Healthcare Theme */}
        <div className="flex-1 border border-border-subtle rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-border-subtle">
            <span className="font-mono text-xs font-medium text-muted">healthcare.css</span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="w-2 h-2 rounded-full bg-[#eab308]" />
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-10 bg-[#f0fdf4]">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#14532d]">Patient Email</label>
              <div className="px-3.5 py-2.5 border border-[#bbf7d0] rounded-lg text-sm text-[#6b7280] bg-white">patient@clinic.com</div>
            </div>
            <div className="flex gap-3">
              <button className="text-sm font-medium text-white bg-[#16a34a] px-6 py-2.5 rounded-lg border-none cursor-pointer">Submit</button>
              <button className="text-sm font-medium text-[#166534] bg-transparent border border-[#bbf7d0] px-6 py-2.5 rounded-lg cursor-pointer">Cancel</button>
            </div>
            <div className="px-4 py-3.5 bg-[#dcfce7] rounded-lg border-l-3 border-l-[#16a34a] text-[13px] text-[#14532d] leading-normal">
              HIPAA-compliant data handling enabled.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
