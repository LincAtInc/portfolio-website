import { RoleItem } from './RoleItem';
import styles from './DomainCard.module.css';

interface Role {
  name: string;
  ai: string;
}

interface DomainCardProps {
  title: string;
  tagline: string;
  variant: 'design' | 'business' | 'development';
  roles: Role[];
}

export function DomainCard({ title, tagline, variant, roles }: DomainCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.tagline}>{tagline}</p>
      <ul className={styles.roles}>
        {roles.map((role) => (
          <RoleItem key={role.name} name={role.name} ai={role.ai} />
        ))}
      </ul>
    </div>
  );
}
