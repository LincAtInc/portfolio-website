import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  to: string;
}

interface FooterProps {
  links?: FooterLink[];
}

export function Footer({ links = [] }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2026 Lincoln Mitchell &bull; Interfaces-N-Creatives &bull; London &amp; Sydney
      </p>
      {links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.label} to={link.to}>{link.label}</Link>
          ))}
        </div>
      )}
    </footer>
  );
}
