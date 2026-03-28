import { clsx } from "clsx";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      {label && (
        <span className="label-sm text-tertiary mb-3 block">{label}</span>
      )}
      <h2 className="headline-md text-on-surface">{title}</h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-on-surface-variant text-lg leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
