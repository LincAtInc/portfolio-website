import { clsx } from "clsx";

type LogicNodeVariant = "ideate" | "narrate" | "create";

interface LogicNodeProps {
  variant?: LogicNodeVariant;
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

const variantStyles: Record<LogicNodeVariant, string> = {
  ideate: "text-primary border-primary-container/30",
  narrate: "text-secondary border-secondary-container/30",
  create: "text-tertiary border-tertiary-container/30",
};

const pulseColors: Record<LogicNodeVariant, string> = {
  ideate: "bg-primary",
  narrate: "bg-secondary",
  create: "bg-tertiary",
};

export function LogicNode({
  variant = "narrate",
  children,
  pulse = false,
  className,
}: LogicNodeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 glass-panel rounded-md px-3 py-1.5 label-sm border",
        variantStyles[variant],
        className,
      )}
    >
      {children}
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={clsx(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              pulseColors[variant],
            )}
          />
          <span
            className={clsx(
              "relative inline-flex h-2 w-2 rounded-full",
              pulseColors[variant],
            )}
          />
        </span>
      )}
    </span>
  );
}
