import { Section, Button } from "@/components/ui";

export function IncCTAFooter() {
  return (
    <>
      <Section tone="base" className="text-center pt-28">
        <h2 className="display-md text-on-surface mb-4">
          Ready to discover what your design system
          <br />
          <span className="text-gradient">should actually encode?</span>
        </h2>
        <p className="text-base text-on-surface-variant max-w-lg mx-auto mb-10 leading-relaxed">
          Most design systems start too late. We start at discovery &mdash;
          encoding domain knowledge into infrastructure that AI agents can consume.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" size="lg" href="https://cal.com/lincmitch">
            Start a Discovery
          </Button>
          <Button variant="secondary" size="lg" href="/approach">
            See Our Approach
          </Button>
        </div>
      </Section>

      <footer className="max-w-6xl mx-auto px-8 py-8 text-center">
        <p className="text-xs text-on-surface-variant/40 mb-2">
          This site was built using the INC framework &mdash; proof of practice,
          not just theory.
        </p>
        <p className="text-xs text-on-surface-variant/40">
          interfacesncreatives.com &middot; hello@interfacesncreatives.com
        </p>
      </footer>
    </>
  );
}
