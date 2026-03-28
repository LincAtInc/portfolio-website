import { clsx } from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-signature text-white hover:brightness-110 shadow-glow-primary",
  secondary:
    "bg-transparent text-primary-fixed-dim border border-outline-variant/20 hover:bg-primary-container/10",
  tertiary:
    "bg-transparent text-tertiary label-md hover:underline underline-offset-4",
  ghost:
    "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, href, children, ...props },
    ref,
  ) {
    const classes = clsx(
      "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-ring cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
