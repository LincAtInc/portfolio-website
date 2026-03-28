import { clsx } from "clsx";
import { type HTMLAttributes, forwardRef } from "react";

type SectionTone =
  | "base"
  | "low"
  | "mid"
  | "high"
  | "highest";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  as?: "section" | "div" | "article" | "aside";
  narrow?: boolean;
}

const toneStyles: Record<SectionTone, string> = {
  base: "section-base",
  low: "section-low",
  mid: "section-mid",
  high: "section-high",
  highest: "section-highest",
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(function Section(
  { tone = "base", as: Tag = "section", narrow = false, className, children, ...props },
  ref,
) {
  return (
    <Tag
      ref={ref as never}
      className={clsx(
        "py-20 px-6 md:px-8 lg:px-12",
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          "mx-auto",
          narrow ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        {children}
      </div>
    </Tag>
  );
});
