import { IncNav } from "@/components/IncNav";
import { IncCTAFooter } from "@/components/IncCTAFooter";
import { Section, Button, Card, Badge } from "@/components/ui";
import { RevealSection } from "@/components/RevealSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Interfaces-N-Creatives",
  description:
    "Discovery infrastructure services from INC — Discovery Sprint, NorthStar Prototyping, Agentic Design System build, and hands-on workshops.",
};

/* ── Service tier data ──────────────────────────────────────────────────── */

interface ServiceTier {
  title: string;
  duration: string;
  badge: string;
  forTeams: string;
  weDo: string[];
  youGet: string[];
  cta: string;
  ctaHref: string;
}

const tiers: ServiceTier[] = [
  {
    title: "Discovery Sprint",
    duration: "2 weeks",
    badge: "Low-friction entry",
    forTeams: "Teams who need clarity before commitment.",
    weDo: [
      "Stakeholder interviews",
      "Domain mapping",
      "Current-state audit",
    ],
    youGet: [
      "Discovery report",
      "INC framework recommendations",
      '"Should you build a design system?" decision',
    ],
    cta: "Book a Sprint",
    ctaHref: "/contact",
  },
  {
    title: "NorthStar Prototyping",
    duration: "4–8 weeks",
    badge: "Vision first",
    forTeams:
      "Teams starting a new product or resetting a design system.",
    weDo: [
      "AI-augmented rapid prototyping with real data",
      "Stakeholder co-design sessions",
    ],
    youGet: [
      "Interactive NorthStar prototype",
      "Domain model",
      "Decision framework",
      "Narrative context for the next build phase",
    ],
    cta: "Start Prototyping",
    ctaHref: "/contact",
  },
  {
    title: "Agentic Design System",
    duration: "8–16 weeks",
    badge: "Full infrastructure",
    forTeams: "Organisations adopting AI-augmented design workflows.",
    weDo: [
      "CLAUDE.md infrastructure build",
      "MCP integration",
      "Agent-queryable tokens",
      "Governance model design",
    ],
    youGet: [
      "Machine-readable design system",
      "Context file pipeline",
      "Agent team configuration",
    ],
    cta: "Build Your System",
    ctaHref: "/contact",
  },
  {
    title: "Workshops",
    duration: "1–2 days",
    badge: "Team upskilling",
    forTeams: "Teams who want to learn the INC methodology.",
    weDo: [
      "Hands-on discovery strategy session",
      "NorthStar prototyping exercise",
      "Agentic design systems walkthrough",
    ],
    youGet: [
      "Workshop materials",
      "INC framework starter kit",
      "Follow-up support",
    ],
    cta: "Book a Workshop",
    ctaHref: "/contact",
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <IncNav />

      {/* Hero */}
      <RevealSection threshold={0.1}>
        <header className="text-center px-8 pt-24 pb-16 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Services
          </Badge>
          <h1 className="display-lg text-on-surface mb-6">
            Discovery{" "}
            <span className="text-gradient">Infrastructure</span>{" "}
            Services
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            We start where most agencies finish — at discovery. Every engagement
            is structured to build the narrative layer that makes everything
            downstream faster, cheaper, and more coherent.
          </p>
        </header>
      </RevealSection>

      {/* Service tiers */}
      <Section tone="low">
        <RevealSection stagger threshold={0.05} className="grid sm:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <div key={tier.title} style={{ "--stagger": i } as React.CSSProperties}>
              <Card variant="elevated" className="h-full flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="headline-sm text-on-surface mb-1">{tier.title}</p>
                    <p className="label-sm text-on-surface-variant/60">{tier.duration}</p>
                  </div>
                  <Badge variant="outline">{tier.badge}</Badge>
                </div>

                {/* For */}
                <div>
                  <p className="label-sm text-primary/70 mb-1 uppercase tracking-wider">For</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {tier.forTeams}
                  </p>
                </div>

                {/* We do */}
                <div>
                  <p className="label-sm text-secondary/70 mb-2 uppercase tracking-wider">We do</p>
                  <ul className="space-y-1.5">
                    {tier.weDo.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-on-surface-variant"
                      >
                        <span className="text-secondary/50 mt-0.5 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* You get */}
                <div className="flex-1">
                  <p className="label-sm text-tertiary/70 mb-2 uppercase tracking-wider">You get</p>
                  <ul className="space-y-1.5">
                    {tier.youGet.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-on-surface-variant"
                      >
                        <span className="text-tertiary/50 mt-0.5 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-2 border-t border-outline-variant/15">
                  <Button variant="secondary" size="sm" href={tier.ctaHref}>
                    {tier.cta}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </RevealSection>
      </Section>

      {/* Tiebreaker prompt */}
      <Section tone="base" narrow>
        <RevealSection threshold={0.2}>
          <div className="text-center">
            <p className="text-lg text-on-surface-variant mb-6">
              Not sure which tier?{" "}
              <span className="text-on-surface">Start with a Discovery Sprint.</span>
            </p>
            <p className="text-sm text-on-surface-variant/70 mb-8 max-w-md mx-auto leading-relaxed">
              Two weeks is enough to know whether your team needs a design
              system, a prototype, or a full agentic infrastructure build. We
              will tell you honestly which one — even if it means the smallest
              engagement.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Book a Discovery Sprint
            </Button>
          </div>
        </RevealSection>
      </Section>

      <IncCTAFooter />
    </>
  );
}
