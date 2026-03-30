import { type ReactNode } from 'react';
import styles from './Section.module.css';

type SectionVariant = 'primary' | 'secondary' | 'dark';

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
}

export function Section({ id, variant = 'primary', children, className }: SectionProps) {
  const sectionClasses = [styles.section, styles[variant], className].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
