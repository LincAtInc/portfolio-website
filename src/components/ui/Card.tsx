import { clsx } from "clsx";
import { type HTMLAttributes, forwardRef } from "react";

type CardVariant = "elevated" | "filled" | "inset" | "glass";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  elevated: "bg-surface-container-high shadow-ambient",
  filled: "bg-surface-container",
  inset: "bg-surface-container-lowest",
  glass: "glass-panel",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "filled", hoverable = false, className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "rounded-lg p-6 ghost-border",
        variantStyles[variant],
        hoverable && "transition-colors duration-200 hover:bg-surface-bright",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
