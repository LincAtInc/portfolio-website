const navLinks = [
  { href: '#why-headless', label: 'Why Headless' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#demo', label: 'Demo' },
  { href: '#pipeline', label: 'Pipeline' },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-dark border-b border-border-subtle px-20 py-5">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <a href="/" className="font-display text-xl font-bold text-text-inverse no-underline tracking-tight">
            Lincoln Mitchell
          </a>
          <span className="font-mono text-[11px] text-accent bg-accent/12 px-2 py-0.5 rounded">
            HEADLESS DS
          </span>
        </div>
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted no-underline hover:text-text-inverse transition-colors">
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="text-sm font-medium text-text-inverse bg-primary px-5 py-2 rounded-md no-underline hover:bg-primary-dark transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
