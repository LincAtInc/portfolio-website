import { Section, Button, Card, Badge } from "@/components/ui";
import { IncNav } from "./IncNav";
import { IncCTAFooter } from "./IncCTAFooter";

const services = [
  {
    title: "NorthStar Prototyping",
    description:
      "Exploratory AI prototyping when possibilities are widest. We build high-fidelity visions before a single architecture decision is locked.",
    for: "Teams starting a new product or design system",
    produces: "Interactive prototype + domain model + decision framework",
  },
  {
    title: "Agentic Design Systems",
    description:
      "Machine-readable, code-based design systems that AI agents can consume. Context files, token pipelines, and governance that scales with your agent ecosystem.",
    for: "Organisations adopting AI-augmented design workflows",
    produces: "CLAUDE.md infrastructure + MCP integration + agent-queryable tokens",
  },
  {
    title: "Discovery Strategy",
    description:
      "Stakeholder alignment, domain knowledge encoding, and narrative architecture. We map what your design system should actually encode before anyone writes a component.",
    for: "Enterprise teams with design system debt or unclear direction",
    produces: "Discovery audit + INC framework implementation + roadmap",
  },
];

const clients = [
  "Dentsu / Merkle",
  "Telstra Health",
  "Breville",
  "Oracle",
  "Adobe",
  "Property NSW",
  "Rio Tinto",
  "Adelaide University",
  "PenCS",
  "Red Rooster",
];

const team = [
  {
    name: "Lincoln Mitchell",
    role: "Design Systems Architect",
    location: "London, UK / Sydney, AU",
    background: "Ex-CDO. 15+ years design systems, React, Figma. INC framework creator.",
  },
  {
    name: "Phuong",
    role: "Lead Developer",
    location: "Taiwan",
    background: "Ex-Canva. Full-stack engineering, component libraries, CI/CD pipelines.",
  },
  {
    name: "Calvin",
    role: "Business Operations",
    location: "Singapore",
    background: "Ex-Oracle. Enterprise strategy, client relationships, APAC market.",
  },
];

export function IncHome() {
  return (
    <>
      <IncNav />

      {/* 1. Hero — Lead with the problem */}
      <Section tone="base" className="pt-32 pb-20 text-center">
        <Badge variant="outline" className="mb-6">
          Discovery Infrastructure
        </Badge>
        <h1 className="display-lg text-on-surface mb-6 max-w-4xl mx-auto">
          Most design systems fail before
          <br />
          <span className="text-gradient">a single component is built.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-10">
          Because discovery was skipped. We start where others don&apos;t &mdash;
          encoding domain knowledge into machine-readable infrastructure
          before the first token is named.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" size="lg" href="/approach">
            See How We Work
          </Button>
          <Button variant="secondary" size="lg" href="/services">
            Our Services
          </Button>
        </div>
      </Section>

      {/* 2. The Gap — Discovery vs Delivery */}
      <Section tone="low" className="text-center">
        <h2 className="display-md text-on-surface mb-6">
          The market optimises for delivery.
          <br />
          We optimise for what comes before.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <Card variant="filled" className="text-left p-8">
            <p className="label-md text-on-surface-variant mb-2">
              What most consultancies offer
            </p>
            <h3 className="text-lg font-semibold text-on-surface mb-4">
              Delivery Infrastructure
            </h3>
            <ul className="text-sm text-on-surface-variant space-y-2">
              <li>Component libraries</li>
              <li>Design token pipelines</li>
              <li>Figma-to-code workflows</li>
              <li>Adoption playbooks</li>
            </ul>
          </Card>
          <Card variant="elevated" className="text-left p-8 border border-primary/20">
            <p className="label-md text-primary mb-2">
              What we offer
            </p>
            <h3 className="text-lg font-semibold text-on-surface mb-4">
              Discovery Infrastructure
            </h3>
            <ul className="text-sm text-on-surface-variant space-y-2">
              <li>NorthStar prototyping before architecture</li>
              <li>Domain knowledge encoding</li>
              <li>Machine-readable context for AI agents</li>
              <li>The narrative layer that makes delivery meaningful</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* 3. The Framework — INC summary */}
      <Section tone="base" className="text-center">
        <h2 className="display-md text-on-surface mb-4">
          I &lt;N&gt; C
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Ideate &lt; Narrate &gt; Create. The design system is the markup
          that wraps everything. N amplifies in both directions.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card variant="filled" className="p-6 text-left">
            <p className="text-2xl font-bold text-primary mb-2">I</p>
            <h3 className="font-semibold text-on-surface mb-2">Ideate</h3>
            <p className="text-sm text-on-surface-variant">
              Discovery-first NorthStar prototyping with AI. Explore when
              possibilities are widest.
            </p>
          </Card>
          <Card variant="elevated" className="p-6 text-left border border-primary/20">
            <p className="text-2xl font-bold text-primary mb-2">&lt;N&gt;</p>
            <h3 className="font-semibold text-on-surface mb-2">Narrate</h3>
            <p className="text-sm text-on-surface-variant">
              The agentic design system. Domain knowledge encoded as
              machine-readable context. Everyone contributes, any agent consumes.
            </p>
          </Card>
          <Card variant="filled" className="p-6 text-left">
            <p className="text-2xl font-bold text-primary mb-2">C</p>
            <h3 className="font-semibold text-on-surface mb-2">Create</h3>
            <p className="text-sm text-on-surface-variant">
              Production code, content authoring, shipping. What was discovered
              becomes what is delivered.
            </p>
          </Card>
        </div>
        <Button variant="secondary" size="lg" href="/approach" className="mt-10">
          Explore the Framework
        </Button>
      </Section>

      {/* 4. Named Services */}
      <Section tone="low">
        <h2 className="display-md text-on-surface mb-12 text-center">
          What we do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} variant="filled" className="p-8">
              <h3 className="text-lg font-semibold text-on-surface mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3 border-t border-outline-variant/15 pt-4">
                <div>
                  <p className="label-md text-on-surface-variant">For</p>
                  <p className="text-sm text-on-surface">{service.for}</p>
                </div>
                <div>
                  <p className="label-md text-on-surface-variant">Produces</p>
                  <p className="text-sm text-on-surface">{service.produces}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="secondary" href="/services">
            All Services &amp; Pricing
          </Button>
        </div>
      </Section>

      {/* 5. The Team */}
      <Section tone="base" className="text-center">
        <h2 className="display-md text-on-surface mb-4">
          Three directors. Three continents.
          <br />
          <span className="text-gradient">One design system.</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">
          Each of us directs an AI agent team. Our agents communicate
          cross-team before we need to &mdash; the operating model IS the
          proof that agentic design systems work.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} variant="filled" className="p-8 text-left">
              <h3 className="text-lg font-semibold text-on-surface mb-1">
                {member.name}
              </h3>
              <p className="label-md text-primary mb-1">{member.role}</p>
              <p className="text-xs text-on-surface-variant mb-4">
                {member.location}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {member.background}
              </p>
            </Card>
          ))}
        </div>
        <Button variant="secondary" href="/team" className="mt-10">
          Meet the Full Team
        </Button>
      </Section>

      {/* 6. Social Proof — Client logos */}
      <Section tone="low" className="text-center">
        <p className="label-md text-on-surface-variant mb-8">
          Discovery infrastructure for
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm text-on-surface-variant/60 font-medium"
            >
              {client}
            </span>
          ))}
        </div>
      </Section>

      {/* 7. CTA Footer */}
      <IncCTAFooter />
    </>
  );
}
