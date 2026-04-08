import { IncNav } from "@/components/IncNav";
import { IncCTAFooter } from "@/components/IncCTAFooter";
import { Section, Button, Card, Badge } from "@/components/ui";
import { RevealSection } from "@/components/RevealSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Interfaces-N-Creatives",
  description:
    "Three directors, three continents, one design system. INC is Lincoln Mitchell, Phuong, and Calvin — each leading a human–agent team that communicates across the practice.",
};

/* ── Team member data ───────────────────────────────────────────────────── */

interface TeamMember {
  name: string;
  title: string;
  location: string;
  role: string;
  background: string;
  arc?: string;
  agents: string[];
}

const members: TeamMember[] = [
  {
    name: "Lincoln Mitchell",
    title: "Design Systems Architect",
    location: "London, UK / Sydney, Australia",
    role: "Discovery lead, INC framework creator.",
    background:
      "15+ years across CDO, Design Systems Lead, and hands-on engineering. MedicalDirector (Telstra Health), Breville, Dentsu/Merkle, PenCS. React, TypeScript, Figma, Claude Code.",
    arc: "CDO (Discovery) → React Dev (Delivery) → Design Systems (The Link) → Agentic Design Systems (The Amplified Link)",
    agents: [
      "UI Designer",
      "Visual Designer",
      "UX Researcher",
      "Content Strategist",
      "Motion Designer",
    ],
  },
  {
    name: "Phuong",
    title: "Lead Developer",
    location: "Taiwan",
    role: "Engineering lead, component architecture, CI/CD.",
    background:
      "Ex-Canva. Full-stack development, component libraries, build pipelines. Brings production engineering discipline to every design system delivery.",
    agents: [
      "FED Developer",
      "Build Validator",
      "Motion Designer",
    ],
  },
  {
    name: "Calvin",
    title: "Business Operations",
    location: "Singapore",
    role: "Client relationships, enterprise strategy, APAC market.",
    background:
      "Ex-Oracle. Enterprise consulting, business operations, market development. Translates design system investment into business outcomes that boards understand.",
    agents: [
      "COO Agent",
      "Talent Agent",
      "Stakeholder Simulator",
    ],
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function TeamPage() {
  return (
    <>
      <IncNav />

      {/* Hero */}
      <RevealSection threshold={0.1}>
        <header className="text-center px-8 pt-24 pb-16 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            The Team
          </Badge>
          <h1 className="display-lg text-on-surface mb-6">
            Three directors.{" "}
            <span className="text-gradient">Three continents.</span>{" "}
            One design system.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            When you hire INC, you get a full team — three humans directing AI
            agent teams that communicate cross-team before we need to.
          </p>
        </header>
      </RevealSection>

      {/* Team member cards */}
      <Section tone="low">
        <RevealSection stagger threshold={0.05} className="grid lg:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <div
              key={member.name}
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <Card variant="elevated" className="h-full flex flex-col gap-5">
                {/* Name + location */}
                <div>
                  <p className="headline-sm text-on-surface mb-1">{member.name}</p>
                  <p className="label-sm text-primary/80 mb-0.5">{member.title}</p>
                  <p className="label-sm text-on-surface-variant/50">{member.location}</p>
                </div>

                {/* Role */}
                <div>
                  <p className="label-sm text-secondary/70 mb-1 uppercase tracking-wider">
                    Role
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {member.role}
                  </p>
                </div>

                {/* Background */}
                <div className="flex-1">
                  <p className="label-sm text-on-surface-variant/60 mb-1 uppercase tracking-wider">
                    Background
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {member.background}
                  </p>
                </div>

                {/* Career arc (Lincoln only) */}
                {member.arc && (
                  <div className="rounded-lg bg-primary-container/10 border border-primary/15 px-4 py-3">
                    <p className="label-sm text-primary/70 mb-1.5 uppercase tracking-wider">
                      Career arc
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-mono">
                      {member.arc}
                    </p>
                  </div>
                )}

                {/* Agent team */}
                <div className="pt-3 border-t border-outline-variant/15">
                  <p className="label-sm text-tertiary/70 mb-2 uppercase tracking-wider">
                    Agent team
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.agents.map((agent) => (
                      <Badge key={agent} variant="tertiary">
                        {agent}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </RevealSection>
      </Section>

      {/* How agents work together */}
      <Section tone="mid" narrow>
        <RevealSection threshold={0.15}>
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-4">
              Operating model
            </Badge>
            <h2 className="headline-md text-on-surface mb-4">
              How our agents work together
            </h2>
          </div>

          <Card variant="glass" className="mb-6">
            <p className="text-base text-on-surface-variant leading-relaxed mb-4">
              Lincoln&rsquo;s UI Designer agent briefs Phuong&rsquo;s FED agent on
              token decisions. Calvin&rsquo;s COO agent flags scope creep to
              Lincoln&rsquo;s agents. We sync as humans for decisions, not status
              updates.
            </p>
            <p className="text-sm text-on-surface-variant/70 leading-relaxed">
              The operating model is the proof &mdash; we don&rsquo;t just build
              agentic design systems for clients. We run as one.
            </p>
          </Card>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                actor: "Lincoln&rsquo;s agents",
                action: "Seed domain knowledge, design tokens, and brand context into N.",
                colour: "border-primary/20 bg-primary-container/5",
                label: "text-primary/70",
              },
              {
                actor: "Phuong&rsquo;s agents",
                action: "Validate component contracts, build pipelines, and surface engineering constraints.",
                colour: "border-secondary/20 bg-secondary-container/5",
                label: "text-secondary/70",
              },
              {
                actor: "Calvin&rsquo;s agents",
                action: "Model stakeholder needs, track scope, and align delivery to business outcomes.",
                colour: "border-tertiary/20 bg-tertiary-container/5",
                label: "text-tertiary/70",
              },
            ].map(({ actor, action, colour, label }) => (
              <div
                key={actor}
                className={`rounded-lg border px-4 py-4 ${colour}`}
              >
                <p
                  className={`label-sm mb-2 uppercase tracking-wider ${label}`}
                  dangerouslySetInnerHTML={{ __html: actor }}
                />
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {action}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </Section>

      {/* CTA */}
      <Section tone="base" narrow>
        <RevealSection threshold={0.2}>
          <div className="text-center">
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Ready to work with the team?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg" href="/contact">
                Start a Discovery
              </Button>
              <Button variant="secondary" size="lg" href="/services">
                See Our Services
              </Button>
            </div>
          </div>
        </RevealSection>
      </Section>

      <IncCTAFooter />
    </>
  );
}
