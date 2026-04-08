"use client";

import { IncNav } from "@/components/IncNav";
import { IncCTAFooter } from "@/components/IncCTAFooter";
import { Section, Button, Card, Badge } from "@/components/ui";
import { RevealSection } from "@/components/RevealSection";
import Link from "next/link";
import { useState } from "react";

/* ── Quick-answer data ──────────────────────────────────────────────────── */

const quickAnswers = [
  {
    question: "Looking for Lincoln's portfolio?",
    answer: "lincolnmitchell.io",
    href: "https://lincolnmitchell.io",
    external: true,
  },
  {
    question: "Want to hire us for a workshop?",
    answer: "See our services",
    href: "/services",
    external: false,
  },
  {
    question: "Curious about the methodology?",
    answer: "Read our approach",
    href: "/approach",
    external: false,
  },
];

/* ── Newsletter form ────────────────────────────────────────────────────── */

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Formspree integration to be wired in a later pass
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-secondary-container/20 border border-secondary/20 px-5 py-4">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Thanks &mdash; we&rsquo;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-full rounded-md border border-outline-variant/30 bg-surface-container-lowest px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <Button variant="secondary" size="sm" type="submit">
        Subscribe
      </Button>
    </form>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      <IncNav />

      {/* Hero */}
      <RevealSection threshold={0.1}>
        <header className="text-center px-8 pt-24 pb-16 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Contact
          </Badge>
          <h1 className="display-lg text-on-surface mb-6">
            Start a{" "}
            <span className="text-gradient">Discovery</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Whether you need a two-week sprint or a full agentic design system,
            it starts with a conversation.
          </p>
        </header>
      </RevealSection>

      {/* Two-column contact layout */}
      <Section tone="low">
        <RevealSection threshold={0.1}>
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left: Direct contact */}
            <Card variant="elevated" className="flex flex-col gap-6">
              <div>
                <p className="label-sm text-primary/70 mb-3 uppercase tracking-wider">
                  Direct
                </p>
                <a
                  href="mailto:hello@interfacesncreatives.com"
                  className="text-base text-on-surface hover:text-primary transition-colors no-underline"
                >
                  hello@interfacesncreatives.com
                </a>
              </div>

              <div>
                <p className="label-sm text-secondary/70 mb-3 uppercase tracking-wider">
                  Schedule
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Book a 30-minute discovery call &mdash; no commitment, just clarity.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href="https://cal.com/lincmitch"
                >
                  Book a Discovery Call
                </Button>
              </div>

              <div className="pt-4 border-t border-outline-variant/15">
                <p className="text-xs text-on-surface-variant/50 leading-relaxed">
                  We respond within one business day. Discovery calls are 30
                  minutes and focus on understanding your problem &mdash; not
                  selling a solution.
                </p>
              </div>
            </Card>

            {/* Right: Newsletter */}
            <Card variant="elevated" className="flex flex-col gap-5">
              <div>
                <p className="label-sm text-tertiary/70 mb-2 uppercase tracking-wider">
                  Stay in the loop
                </p>
                <p className="headline-sm text-on-surface mb-3">
                  Monthly insights from INC
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Discovery infrastructure, agentic design systems, and the INC
                  framework &mdash; delivered monthly. No noise.
                </p>
              </div>
              <div className="flex-1" />
              <NewsletterForm />
            </Card>

          </div>
        </RevealSection>
      </Section>

      {/* Quick answers */}
      <Section tone="mid" narrow>
        <RevealSection threshold={0.15}>
          <div className="mb-8 text-center">
            <h2 className="headline-sm text-on-surface mb-2">Quick answers</h2>
          </div>
          <div className="flex flex-col divide-y divide-outline-variant/15">
            {quickAnswers.map(({ question, answer, href, external }) => (
              <div
                key={question}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4"
              >
                <p className="text-sm text-on-surface-variant">{question}</p>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary no-underline hover:underline underline-offset-4 shrink-0"
                  >
                    {answer} &rarr;
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="text-sm text-primary no-underline hover:underline underline-offset-4 shrink-0"
                  >
                    {answer} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </RevealSection>
      </Section>

      <IncCTAFooter />
    </>
  );
}
