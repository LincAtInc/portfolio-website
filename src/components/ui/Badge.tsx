import { clsx } from "clsx";

type BadgeVariant = "primary" | "secondary" | "tertiary" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary-container/20 text-primary",
  secondary: "bg-secondary-container/20 text-secondary",
  tertiary: "bg-tertiary-container/20 text-tertiary",
  outline: "bg-transparent text-on-surface-variant ghost-border",
};

export function Badge({
  variant = "primary",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 label-sm",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
