"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#expand", label: "How N Expands" },
  { href: "#what", label: "What Is It" },
  { href: "/work", label: "Work" },
  { href: "/headless-ds", label: "Headless DS" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/podcast", label: "Podcast" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-outline-variant/15 px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] font-bold text-lg text-on-surface no-underline"
        >
          Lincoln Mitchell
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => {
            const active = link.href.startsWith("/")
              ? pathname.startsWith(link.href)
              : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm no-underline transition-colors ${
                  active
                    ? "text-on-surface font-medium"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="text-sm font-medium text-white bg-gradient-signature px-5 py-2 rounded-md no-underline hover:brightness-110 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
