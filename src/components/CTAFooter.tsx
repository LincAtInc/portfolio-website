import { Section, Button } from "@/components/ui";

export function CTAFooter() {
  return (
    <>
      <Section tone="base" className="text-center pt-28">
        <h2 className="display-md text-on-surface mb-4">
          The design system is the narrative.
          <br />
          <span className="text-gradient">The narrative is the infrastructure.</span>
        </h2>
        <p className="text-base text-on-surface-variant max-w-lg mx-auto mb-10 leading-relaxed">
          Let&apos;s talk about encoding your domain knowledge into systems that
          AI agents can actually use.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="primary"
            size="lg"
            href="https://cal.com/lincmitch"
          >
            Book a Chat
          </Button>
          <Button variant="secondary" size="lg" href="/headless-ds">
            See the Headless DS
          </Button>
        </div>
      </Section>

      <footer className="max-w-6xl mx-auto px-8 py-8 text-center">
        <p className="text-xs text-on-surface-variant/40 mb-2">
          This page was generated via Claude Code prompts&mdash;proving that
          agentic narrative works.
        </p>
        <p className="text-xs text-on-surface-variant/40">
          lincolnmitchell.io &middot; linc@lincolnmitchell.io
        </p>
      </footer>
    </>
  );
}
