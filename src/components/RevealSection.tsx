"use client";
import { useInView } from "@/hooks/useInView";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  stagger?: boolean;
}

export function RevealSection({
  children,
  className = "",
  threshold = 0.1,
  stagger = false,
}: RevealSectionProps) {
  const ref = useInView(threshold);
  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
    >
      {children}
    </div>
  );
}
