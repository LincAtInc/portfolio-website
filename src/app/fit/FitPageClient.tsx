"use client";

import { Nav } from "@/components/Nav";
import {
  Code2,
  Compass,
  Database,
  Users,
  Bot,
  Layers,
  Cpu,
  Rocket,
  MapPin,
  FileImage,
  ClipboardList,
  FolderClosed,
  UserCheck,
  Link2,
  UserMinus,
  ShieldOff,
  Wrench,
  Globe,
} from "lucide-react";
import { AgentTeamStrip } from "@/components/AgentTeamVisual";
import { useEffect, useRef, type ReactNode } from "react";

/* ── Types ──────────────────────────────────────────────────────────────── */

interface FitItem {
  icon: ReactNode;
  text: string;
}

/* ── Data ───────────────────────────────────────────────────────────────── */

const rightFit: FitItem[] = [
  {
    icon: <Code2 size={24} />,
    text: "Code is the source of truth. Figma reflects it.",
  },
  {
    icon: <Compass size={24} />,
    text: "Discovery-first — NorthStar prototyping before tickets.",
  },
  {
    icon: <Database size={24} />,
    text: "Design system as agentic infrastructure: machine-readable, agent-consumable.",
  },
  {
    icon: <Users size={24} />,
    text: "Embedded with leadership, shaping product direction.",
  },
  {
    icon: <Layers size={24} />,
    text: "Multi-brand token architecture in code — CSS custom properties, Style Dictionary, Tokens Studio.",
  },
  {
    icon: <Bot size={24} />,
    text: "One person seeding the narrative layer for the whole organisation.",
  },
  {
    icon: <Cpu size={24} />,
    text: "AI as methodology amplifier, not just a code generator.",
  },
  {
    icon: <Rocket size={24} />,
    text: "Building the system that makes tomorrow faster.",
  },
  {
    icon: <MapPin size={24} />,
    text: "Contract or full-time. London or Sydney. Dual nationality UK/AU.",
  },
];

const wrongFit: FitItem[] = [
  {
    icon: <FileImage size={14} />,
    text: "Figma is the source of truth. Code follows designs.",
  },
  {
    icon: <ClipboardList size={14} />,
    text: "Delivery-first — sprint backlog from day one, velocity measured in tickets.",
  },
  {
    icon: <FolderClosed size={14} />,
    text: "Design system as a Figma component library, full stop.",
  },
  {
    icon: <UserCheck size={14} />,
    text: "Embedded in a delivery team, taking tickets from PMs.",
  },
  {
    icon: <Link2 size={14} />,
    text: "Code Connect mapping as the primary bridge strategy.",
  },
  {
    icon: <UserMinus size={14} />,
    text: "Filling a headcount in a feature team.",
  },
  {
    icon: <ShieldOff size={14} />,
    text: "AI as a threat to manage, not an opportunity to embrace.",
  },
  {
    icon: <Wrench size={14} />,
    text: "Maintaining what exists without questioning why it exists.",
  },
  {
    icon: <Globe size={14} />,
    text: "On-site-only requirements or US-timezone-dependent roles.",
  },
];

/* ── Scoreboard items ───────────────────────────────────────────────────── */

const scoreboardItems = [
  { label: "Role", value: "DS Architect" },
  { label: "Location", value: "London / Sydney" },
  { label: "Status", value: "Open to work" },
  { label: "Availability", value: "Contract or FTE" },
] as const;

/* ── useInView hook ─────────────────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default function FitPageClient() {
  const rightFitRef = useInView(0.15);
  const wrongFitRef = useInView(0.15);
  const ctaRef = useInView(0.3);

  return (
    <>
      <Nav />

      {/* ── Section A: Scoreboard Strip ─────────────────────────────────── */}
      <section className="section-mid">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between py-6 px-8 gap-y-4">
          {scoreboardItems.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="label-sm text-on-surface-variant">{label}</span>
              <span className="text-lg font-mono font-semibold text-on-surface">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Page title sits below the strip, still within the same tonal band */}
        <div className="max-w-3xl mx-auto px-8 pt-12 pb-4">
          <h1 className="headline-md text-on-surface">
            Right Fit / Wrong Fit
          </h1>
          <p className="text-base text-on-surface-variant mt-2">
            The best working relationships start with clarity about what I do — and what I don&apos;t.
          </p>
        </div>
      </section>

      {/* ── Agent Team Strip ────────────────────────────────────────────── */}
      <section className="section-low">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <AgentTeamStrip />
        </div>
      </section>

      {/* ── Section B: Right Fit ────────────────────────────────────────── */}
      <section className="section-base">
        <div
          ref={rightFitRef}
          className="max-w-3xl mx-auto px-8 py-16 fit-section-reveal"
          aria-label="Right fit criteria"
        >
          <h2 className="headline-md text-on-surface mb-2">What I bring</h2>

          <ul className="mt-6" role="list">
            {rightFit.map((item, i) => (
              <li
                key={i}
                className="
                  flex items-start gap-6 py-6
                  border-b border-outline-variant/10 last:border-0
                  fit-row-hover
                  transition-[transform,background-color] duration-150 ease-out
                  rounded-lg -mx-3 px-3
                "
              >
                <span
                  className="
                    w-12 h-12 rounded-xl bg-primary-container/10
                    flex items-center justify-center shrink-0
                    text-primary
                  "
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <p className="text-base text-on-surface leading-relaxed self-center">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section C: Wrong Fit ────────────────────────────────────────── */}
      <section className="section-high">
        <div
          ref={wrongFitRef}
          className="max-w-4xl mx-auto px-8 py-12 fit-section-reveal fit-section-delay"
          aria-label="Not the right fit criteria"
        >
          <h2 className="headline-sm text-on-surface-variant mb-6">
            Not the right fit if&hellip;
          </h2>

          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3" role="list">
            {wrongFit.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 shrink-0 text-on-surface-variant opacity-40"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section D: CTA ──────────────────────────────────────────────── */}
      <section className="section-high">
        <div
          ref={ctaRef}
          className="max-w-3xl mx-auto px-8 pt-8 pb-16 fit-cta-reveal"
        >
          <p className="text-lg text-on-surface leading-snug mb-6">
            If the above sounds like your challenge, let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cal.com/lincmitch"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 text-sm font-medium text-white
                bg-gradient-signature px-6 py-3 rounded-lg no-underline
                hover:brightness-110 transition-all focus-ring
              "
            >
              Book a 30-minute chat
            </a>
            <a
              href="mailto:linc@lincolnmitchell.io"
              className="
                inline-flex items-center gap-2 text-sm font-medium text-on-surface
                border border-outline-variant/40 bg-surface-container-high
                px-6 py-3 rounded-lg no-underline
                hover:border-primary/40 hover:text-primary transition-all focus-ring
              "
            >
              Send an email
            </a>
          </div>
        </div>
      </section>

      {/* ── Animation styles ─────────────────────────────────────────────── */}
      <style>{`
        /* Section entrance */
        .fit-section-reveal {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1.0),
                      transform 400ms cubic-bezier(0.25, 0.1, 0.25, 1.0);
        }
        .fit-section-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }
        .fit-section-delay {
          transition-delay: 60ms;
        }

        /* CTA reveal */
        .fit-cta-reveal {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 300ms ease, transform 300ms ease;
        }
        .fit-cta-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* Row hover — Right Fit items only */
        .fit-row-hover:hover {
          transform: translateX(2px);
          background-color: rgba(255, 255, 255, 0.03);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .fit-section-reveal,
          .fit-cta-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .fit-row-hover:hover {
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
