import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Lincoln Mitchell — Design Systems Architect",
  description: "Featured projects: Fun Lab, Helix, PenCS, Breville, Adelaide University, Red Rooster. Design systems, NorthStar prototyping, and agentic design.",
};

const projects = [
  {
    name: "Fun Lab",
    role: "Design Associate Director",
    company: "Dentsu / Merkle",
    logo: "/dentsu-logo.svg",
    image: "/project-funlab.png",
    href: "https://fun-lab.com/",
    desc: "Australia's premier competitive socialising company with 8 brands and 80+ locations. Created a code-based design system to drastically reduce delivery times for each brand.",
    tags: ["Design Tokens", "Design System", "Multi-Brand", "Chakra UI"],
  },
  {
    name: "Helix",
    role: "Chief Design Officer",
    company: "MedicalDirector / Telstra Health",
    logo: "/telstra-health-logo.svg",
    image: "/project-helix.png",
    href: "https://www.medicaldirector.com/products/helix/",
    desc: "Led design and development of a comprehensive medical centre web application. Promoted from UI/UX/FED to Chief Design Officer through successful NorthStar prototype delivery.",
    tags: ["NorthStar Prototype", "Design Ops", "Vision"],
  },
  {
    name: "PenCS",
    role: "Design Director & Design Systems",
    company: "PenCS",
    logo: "/pencs-logo.svg",
    image: "/project-pencs.png",
    href: "https://www.pencs.com.au",
    desc: "Led UX design for clinical software suite serving general practices across Australia. Designed and developed the PenCS website within Plasmic.app for business, design and developers.",
    tags: ["Healthcare", "Clinical Software", "Plasmic.app"],
  },
  {
    name: "Breville",
    role: "Design Systems Lead",
    company: "Breville",
    logo: null,
    image: "/project-breville.png",
    href: "https://www.breville.com",
    desc: "Created code-based design system with production-ready React components in Framer using ESModules with AWS pipeline. Inspired all developers to adopt Framer as the design system.",
    tags: ["Framer", "React", "AWS", "ESModules"],
  },
  {
    name: "Adelaide University",
    role: "Design Systems Lead",
    company: "Merkle",
    logo: "/merkle-logo.svg",
    image: "/project-adelaide-uni.png",
    href: "https://www.adelaide.edu.au/",
    desc: "Led design system development establishing design patterns and component libraries to improve digital experience consistency across university platforms.",
    tags: ["Figma Components", "Design Tokens", "Client Training"],
  },
  {
    name: "Red Rooster",
    role: "Design Systems Specialist",
    company: "NCGroup",
    logo: "/redrooster.png",
    image: "/project-red-rooster.png",
    href: "https://www.redrooster.com.au/",
    desc: "Developed design system components and UX prototypes for digital platforms, establishing consistent interaction patterns across restaurant ordering systems.",
    tags: ["Framer", "Design Systems", "UX Prototyping"],
  },
];

const otherClients = [
  "Oracle", "Adobe", "Property NSW", "Rio Tinto", "RAC", "Department of Education",
];

export default function Work() {
  return (
    <>
      <Nav />

      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase">Portfolio</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Featured Work
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          Design systems, NorthStar prototyping, and agentic design across healthcare, entertainment, consumer electronics, education, and QSR.
        </p>
      </header>

      <main className="max-w-[1440px] mx-auto px-8 md:px-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/[0.06] rounded-xl overflow-hidden no-underline hover:border-white/[0.12] transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.logo && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Image src={p.logo} alt={p.company} width={80} height={24} className="h-5 w-auto object-contain" />
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-display text-xl font-semibold text-white">{p.name}</h2>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-white/60 transition-colors">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                <p className="font-mono text-[11px] text-white/30 mb-3">{p.role} &middot; {p.company}</p>
                <p className="text-sm text-white/45 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-white/30 bg-white/[0.04] px-2.5 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-white/40 mb-8 font-medium">Other organisations I&apos;ve worked with</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {otherClients.map((client) => (
              <span key={client} className="text-sm text-white/25 font-medium">{client}</span>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/#contact" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
            Get in Touch
          </Link>
        </div>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
