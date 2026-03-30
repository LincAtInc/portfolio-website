import { Nav } from '../sections/Nav';
import { Hero } from '../sections/Hero';
import { WhyHeadless } from '../sections/WhyHeadless';
import { Architecture } from '../sections/Architecture';
import { InteractiveDemo } from '../sections/InteractiveDemo';
import { CodeExamples } from '../sections/CodeExamples';
import { Pipeline } from '../sections/Pipeline';
import { CTAFooter } from '../sections/CTAFooter';
import { INCLoop } from '../sections/INCLoop';

export function HeadlessDS() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <WhyHeadless />
        <Architecture />
        <InteractiveDemo />
        <CodeExamples />
        <Pipeline />
        <INCLoop />
        <CTAFooter />
      </main>
    </>
  );
}
