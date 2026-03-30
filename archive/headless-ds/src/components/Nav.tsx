import { Link } from 'react-router-dom';
import { Button } from './Button';
import styles from './Nav.module.css';

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  brand: string;
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export function Nav({ brand, links, ctaLabel, ctaHref }: NavProps) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>
        <img src="/lnc-logo.svg" alt="LNC" className={styles.logo} />
        {brand}
      </Link>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href={ctaHref}>
            <Button variant="primary" size="sm">{ctaLabel}</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
