import { forwardRef, type HTMLAttributes } from 'react';

export interface CardPrimitiveProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Headless Card primitive.
 * Semantic container — no styles, no opinions.
 */
export const CardPrimitive = forwardRef<HTMLDivElement, CardPrimitiveProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

CardPrimitive.displayName = 'CardPrimitive';
