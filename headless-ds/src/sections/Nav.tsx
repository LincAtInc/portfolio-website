import styles from './Nav.module.css';

const navLinks = [
  { href: '#why-headless', label: 'Why Headless' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#demo', label: 'Demo' },
  { href: '#code', label: 'Code' },
  { href: '#pipeline', label: 'Pipeline' },
];

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <a href="/" className={styles.brand}>
          <img src="/lnc-logo.svg" alt="LINC Logo" width={40} height={40} />
          <span>Headless DS</span>
        </a>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
