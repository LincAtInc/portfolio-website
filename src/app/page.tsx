import Image from "next/image";
import { Nav } from "@/components/Nav";
import { HowNExpands } from "@/components/HowNExpands";
import { WhatIsAgenticNarrative } from "@/components/WhatIsAgenticNarrative";
import { AgentTeamVisual } from "@/components/AgentTeamVisual";
import { CTAFooter } from "@/components/CTAFooter";
import { RevealSection } from "@/components/RevealSection";
import { BrandHome } from "@/components/BrandHome";

export default function Home() {
  return (
    <BrandHome>
      <Nav />
      {/* Hero image loads with priority — no entrance animation */}
      <Image
        src="/images/inc-narrate-expands.png"
        alt="I <N> C Framework — N amplifies both Ideation and Creation"
        width={2752}
        height={1536}
        className="w-full h-auto"
        priority
      />
      <RevealSection threshold={0.1}>
        <header className="text-center pt-20 pb-24 px-8">
          <h1 className="display-lg text-on-surface mb-6">
            Agentic Narrative
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            The design system isn&apos;t a component library. It&apos;s the
            narrative layer that encodes domain knowledge into machine-readable
            context&mdash;amplifying both discovery and execution.
          </p>
        </header>
      </RevealSection>
      <main>
        <HowNExpands />
        <WhatIsAgenticNarrative />
        <RevealSection threshold={0.1}>
          <section className="section-mid py-20 px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <AgentTeamVisual />
            </div>
          </section>
        </RevealSection>
        <RevealSection threshold={0.15}>
          <CTAFooter />
        </RevealSection>
      </main>
    </BrandHome>
  );
}
