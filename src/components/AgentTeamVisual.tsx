"use client";

import {
  Search,
  PenTool,
  Palette,
  Layout,
  Play,
  FileText,
  Code2,
  Users,
  User,
} from "lucide-react";
import type { ReactNode } from "react";

/* ── Agent roster ────────────────────────────────────────────────────────── */

interface Agent {
  label: string;
  shortLabel: string;
  icon: ReactNode;
  /** Tailwind text colour class — token-based */
  colour: string;
  /** Tailwind bg/ring class for the circle */
  ring: string;
}

const agents: Agent[] = [
  {
    label: "UX Research",
    shortLabel: "UX Research",
    icon: <Search size={20} aria-hidden="true" />,
    colour: "text-primary",
    ring: "ring-primary/30",
  },
  {
    label: "UX Design",
    shortLabel: "UX Design",
    icon: <PenTool size={20} aria-hidden="true" />,
    colour: "text-tertiary",
    ring: "ring-tertiary/30",
  },
  {
    label: "UI Design",
    shortLabel: "UI Design",
    icon: <Palette size={20} aria-hidden="true" />,
    colour: "text-secondary",
    ring: "ring-secondary/30",
  },
  {
    label: "Visual Design",
    shortLabel: "Visual",
    icon: <Layout size={20} aria-hidden="true" />,
    colour: "text-warm",
    ring: "ring-warm/30",
  },
  {
    label: "Motion Design",
    shortLabel: "Motion",
    icon: <Play size={20} aria-hidden="true" />,
    colour: "text-tertiary",
    ring: "ring-tertiary/30",
  },
  {
    label: "Content Strategy",
    shortLabel: "Content",
    icon: <FileText size={20} aria-hidden="true" />,
    colour: "text-primary",
    ring: "ring-primary/30",
  },
  {
    label: "FED Development",
    shortLabel: "FED Dev",
    icon: <Code2 size={20} aria-hidden="true" />,
    colour: "text-primary",
    ring: "ring-primary/30",
  },
  {
    label: "Stakeholder Simulation",
    shortLabel: "Stakeholder",
    icon: <Users size={20} aria-hidden="true" />,
    colour: "text-secondary",
    ring: "ring-secondary/30",
  },
];

/* ── Radial positioning helper ───────────────────────────────────────────── */

/**
 * Returns the top/left percentage for an item at index `i` of `total`
 * on a circle of `radiusPct` percent (of the container dimension).
 * Starts from the top (−90°) and distributes evenly.
 */
function radialPosition(
  i: number,
  total: number,
  radiusPct: number,
): { top: string; left: string } {
  const angleDeg = (360 / total) * i - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(angleRad);
  const y = 50 + radiusPct * Math.sin(angleRad);
  return { top: `${y}%`, left: `${x}%` };
}

/* ── Connecting line SVG ─────────────────────────────────────────────────── */

function ConnectingLines({ count }: { count: number }) {
  const lines: Array<{ x2: number; y2: number }> = [];
  for (let i = 0; i < count; i++) {
    const angleDeg = (360 / count) * i - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const radius = 38; // matches radiusPct below
    lines.push({
      x2: 50 + radius * Math.cos(angleRad),
      y2: 50 + radius * Math.sin(angleRad),
    });
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-warm)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      {lines.map((pt, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={pt.x2}
          y2={pt.y2}
          stroke="url(#lineGrad)"
          strokeWidth="0.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* ── Radial visual (desktop) ─────────────────────────────────────────────── */

function RadialLayout() {
  const RADIUS = 38; // percentage of container

  return (
    /*
     * Square container — the orbital sits inside.
     * max-w is capped so the SVG lines never stretch awkwardly.
     */
    <div
      className="relative mx-auto"
      style={{ width: "min(520px, 100%)", aspectRatio: "1 / 1" }}
      role="img"
      aria-label="Radial diagram showing Lincoln Mitchell at the centre surrounded by eight specialist agent roles"
    >
      {/* Connecting lines */}
      <ConnectingLines count={agents.length} />

      {/* Ambient glow behind Lincoln */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="rounded-full"
          style={{
            width: "18%",
            aspectRatio: "1 / 1",
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-warm) 30%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Lincoln — centre */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ top: "50%", left: "50%" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div
            className="
              w-20 h-20 rounded-full
              bg-surface-container-high
              ring-2 ring-warm/60
              flex items-center justify-center
              shadow-lg
            "
            style={{
              boxShadow:
                "0 0 28px color-mix(in srgb, var(--color-warm) 35%, transparent)",
            }}
          >
            <span
              className="font-[family-name:var(--font-display)] font-bold text-lg text-warm"
              aria-label="LM — Lincoln Mitchell"
            >
              LM
            </span>
          </div>
          <div className="text-center">
            <p className="label-sm text-on-surface whitespace-nowrap">Lincoln Mitchell</p>
            <p className="label-sm text-on-surface-variant whitespace-nowrap opacity-70">
              DS Architect
            </p>
          </div>
        </div>
      </div>

      {/* Agent nodes */}
      {agents.map((agent, i) => {
        const pos = radialPosition(i, agents.length, RADIUS);
        return (
          <div
            key={agent.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: pos.top, left: pos.left }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`
                  w-12 h-12 rounded-full
                  bg-surface-container-high
                  ring-1 ${agent.ring}
                  flex items-center justify-center
                  ${agent.colour}
                  transition-transform duration-200 hover:scale-110
                `}
              >
                {agent.icon}
              </div>
              <p
                className="label-sm text-on-surface-variant text-center"
                style={{ fontSize: "0.6rem", whiteSpace: "nowrap" }}
              >
                {agent.shortLabel}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Grid layout (mobile) ────────────────────────────────────────────────── */

function GridLayout() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Lincoln */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="
            w-20 h-20 rounded-full
            bg-surface-container-high
            ring-2 ring-warm/60
            flex items-center justify-center
          "
          style={{
            boxShadow:
              "0 0 24px color-mix(in srgb, var(--color-warm) 30%, transparent)",
          }}
        >
          <User size={32} className="text-warm" aria-hidden="true" />
        </div>
        <div className="text-center">
          <p className="label-sm text-on-surface">Lincoln Mitchell</p>
          <p className="label-sm text-on-surface-variant opacity-70">DS Architect</p>
        </div>
      </div>

      {/* Divider hint */}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className="flex-1 h-px bg-outline-variant opacity-20" />
        <p className="label-sm text-on-surface-variant opacity-50 whitespace-nowrap">
          + 8 specialist agents
        </p>
        <div className="flex-1 h-px bg-outline-variant opacity-20" />
      </div>

      {/* Agent grid: 4 cols on small, 4 cols on xs */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-6" role="list">
        {agents.map((agent) => (
          <div
            key={agent.label}
            className="flex flex-col items-center gap-1.5"
            role="listitem"
          >
            <div
              className={`
                w-11 h-11 rounded-full
                bg-surface-container-high
                ring-1 ${agent.ring}
                flex items-center justify-center
                ${agent.colour}
              `}
              aria-label={agent.label}
            >
              {agent.icon}
            </div>
            <p
              className="label-sm text-on-surface-variant text-center leading-tight"
              style={{ fontSize: "0.55rem" }}
            >
              {agent.shortLabel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Compact strip (Fit page) ────────────────────────────────────────────── */

export function AgentTeamStrip() {
  return (
    <div className="flex flex-col gap-4">
      <p className="label-sm text-on-surface-variant">
        Backed by 8 specialised agents
      </p>
      <div
        className="flex flex-wrap gap-3"
        role="list"
        aria-label="Specialist agent team"
      >
        {agents.map((agent) => (
          <div
            key={agent.label}
            className="flex flex-col items-center gap-1"
            role="listitem"
            title={agent.label}
          >
            <div
              className={`
                w-10 h-10 rounded-full
                bg-surface-container-high
                ring-1 ${agent.ring}
                flex items-center justify-center
                ${agent.colour}
              `}
              aria-label={agent.label}
            >
              {agent.icon}
            </div>
            <span
              className="label-sm text-on-surface-variant text-center"
              style={{ fontSize: "0.5rem", whiteSpace: "nowrap" }}
            >
              {agent.shortLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────────────── */

export function AgentTeamVisual() {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <h2 className="headline-md text-on-surface mb-3">
          One person. Full team capability.
        </h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          When you hire me, you get an architect backed by a specialised agent
          team — each with defined expertise, boundaries, and context.
        </p>
      </div>

      {/* Radial on md+, grid on mobile */}
      <div className="hidden md:block w-full">
        <RadialLayout />
      </div>
      <div className="md:hidden w-full max-w-sm mx-auto">
        <GridLayout />
      </div>
    </div>
  );
}
