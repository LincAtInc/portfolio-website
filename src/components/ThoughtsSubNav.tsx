"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const thinkers = [
  { href: "/thoughts", label: "AI & Creativity", author: "Iain McGilchrist" },
  { href: "/thoughts/scout-bees", label: "Scout Bees", author: "Helen Taylor" },
  { href: "/thoughts/dyslexic-advantage", label: "MIND Strengths", author: "Brock & Eide" },
  { href: "/thoughts/digital-samsara", label: "Digital Samsara", author: "Ajahn Sumedho" },
  { href: "/thoughts/make-culture", label: "Make Culture", author: "Controversial" },
  { href: "/thoughts/competing-values", label: "Competing Values", author: "Quinn & Cameron" },
  { href: "/thoughts/stakeholder-simulator", label: "Stakeholder Sim", author: "Alan Cooper" },
  { href: "/thoughts/assistive-tech", label: "Assistive Tech", author: "Personal" },
];

export function ThoughtsSubNav() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden lg:block fixed top-[57px] left-0 w-[220px] h-[calc(100vh-57px)] border-r border-white/[0.04] bg-[var(--color-bg-dark)] overflow-y-auto z-40">
        <div className="p-5">
          <span className="font-mono text-[11px] text-[var(--color-warm)] uppercase tracking-[0.12em] block mb-4">Thoughts</span>
          <nav className="flex flex-col gap-1">
            {thinkers.map((t) => {
              const active = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-lg no-underline transition-colors ${
                    active
                      ? "text-white bg-white/[0.08]"
                      : "text-white/35 hover:text-white/60 hover:bg-white/[0.03]"
                  }`}
                >
                  <span className={`text-sm ${active ? "font-medium" : ""}`}>{t.label}</span>
                  <span className="text-[11px] text-white/20">{t.author}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
      {/* Push content right on desktop so it doesn't sit under the sidebar */}
      <style>{`
        @media (min-width: 1024px) {
          .thoughts-content header,
          .thoughts-content main,
          .thoughts-content footer { margin-left: 220px; }
        }
      `}</style>
    </>
  );
}
