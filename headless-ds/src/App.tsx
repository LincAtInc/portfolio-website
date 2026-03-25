import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { WhyHeadless } from './sections/WhyHeadless';
import { Architecture } from './sections/Architecture';
import { InteractiveDemo } from './sections/InteractiveDemo';
import { CodeExamples } from './sections/CodeExamples';
import { Pipeline } from './sections/Pipeline';
import { CTAFooter } from './sections/CTAFooter';

export default function App() {
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
        <CTAFooter />
      </main>
    </>
  );
}
