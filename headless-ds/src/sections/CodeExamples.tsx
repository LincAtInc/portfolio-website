const tokenCode = `:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;

  --radius-md: 6px;
  --radius-lg: 8px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
  --space-4: 1rem;
  --space-6: 1.5rem;
}`;

const componentCode = `export function Button({ variant, children }) {
  return (
    <button
      className={styles[variant]}
      // Radix handles: focus, keyboard,
      // aria-*, disabled state
    >
      {children}
    </button>
  );
}

// Tokens consumed via CSS Modules
// Zero hardcoded values`;

export function CodeExamples() {
  return (
    <section id="code" className="px-20 py-24 max-w-[1440px] mx-auto bg-surface-deep">
      <div className="flex flex-col items-center text-center gap-4 mb-14">
        <span className="font-mono text-[13px] font-medium text-accent tracking-[0.08em] uppercase">Code</span>
        <h2 className="font-display text-[40px] font-bold text-text-inverse tracking-tight leading-[1.15]">Tokens in, components out</h2>
      </div>
      <div className="flex gap-6">
        <div className="flex-1 border border-border-subtle rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-border-subtle">
            <span className="font-mono text-xs font-medium text-accent">default.css</span>
            <span className="font-mono text-[11px] text-[#475569]">Token Layer</span>
          </div>
          <div className="p-6 bg-bg-dark">
            <pre className="font-mono text-[13px] text-muted leading-[1.7] m-0 whitespace-pre overflow-x-auto"><code>{tokenCode}</code></pre>
          </div>
        </div>
        <div className="flex-1 border border-border-subtle rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-border-subtle">
            <span className="font-mono text-xs font-medium text-secondary">Button.tsx</span>
            <span className="font-mono text-[11px] text-[#475569]">Component Layer</span>
          </div>
          <div className="p-6 bg-bg-dark">
            <pre className="font-mono text-[13px] text-muted leading-[1.7] m-0 whitespace-pre overflow-x-auto"><code>{componentCode}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
