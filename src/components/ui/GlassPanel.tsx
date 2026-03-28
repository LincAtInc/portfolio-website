import { clsx } from "clsx";
import { type HTMLAttributes, forwardRef } from "react";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: "subtle" | "medium" | "strong";
}

const intensityStyles = {
  subtle: "bg-surface-container/40 backdrop-blur-sm",
  medium: "bg-surface-container/60 backdrop-blur-md",
  strong: "bg-surface-container/80 backdrop-blur-lg",
};

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  function GlassPanel(
    { intensity = "medium", className, children, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-lg ghost-border",
          intensityStyles[intensity],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
