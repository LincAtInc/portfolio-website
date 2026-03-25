import { forwardRef } from 'react';
import { CardPrimitive, type CardPrimitiveProps } from '../primitives/Card';
import styles from './Card.module.css';

export interface CardProps extends CardPrimitiveProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

/**
 * DS Card — wraps headless primitive, consumes design tokens.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, linkText, linkHref, children, className, ...props }, ref) => {
    return (
      <CardPrimitive
        ref={ref}
        className={`${styles.card} ${className ?? ''}`}
        {...props}
      >
        {title && <h4 className={styles.title}>{title}</h4>}
        {description && <p className={styles.description}>{description}</p>}
        {linkText && linkHref && (
          <a href={linkHref} className={styles.link}>
            {linkText} &rarr;
          </a>
        )}
        {children}
      </CardPrimitive>
    );
  }
);

Card.displayName = 'Card';
