"use client";

import Image from "next/image";
import { useState } from "react";

const PASSCODE = "benniejames2026";

const services = [
  { title: "Weddings", desc: "Your first dance, your last song, and everything in between. Soulful sets curated for the most important day of your life.", icon: "💍" },
  { title: "Private Events", desc: "Birthday celebrations, anniversaries, corporate functions. Soul, R&B, and feel-good music that gets everyone on the floor.", icon: "🎉" },
  { title: "Community Events", desc: "Block parties, cultural celebrations, church events. Music that brings people together and honours the soul tradition.", icon: "🎶" },
];

const testimonials = [
  { quote: "Bennie read the room like nobody else. From the ceremony to the last dance, every song was perfect.", name: "Keisha & Marcus", event: "Wedding, Newark NJ" },
  { quote: "He doesn't just play music — he creates a feeling. Our guests are still talking about it.", name: "The Johnson Family", event: "Family Reunion, Philadelphia" },
];

export default function BennieJames() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8" style={{ background: "#0d0806" }}>
        <div className="text-center max-w-[400px]">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "#d97706" }}>Bennie James</h1>
          <p className="text-sm mb-8" style={{ color: "rgba(245,240,232,0.4)" }}>Private preview. Enter the passcode to continue.</p>
          <form onSubmit={(e) => { e.preventDefault(); if (code === PASSCODE) setUnlocked(true); }}>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Passcode"
              className="w-full px-4 py-3 rounded-lg text-center text-sm focus:outline-none mb-4"
              style={{ background: "rgba(245,240,232,0.05)", border: "1px solid rgba(245,240,232,0.1)", color: "#f5f0e8" }}
            />
            <button type="submit" className="w-full px-4 py-3 font-medium rounded-lg text-sm transition-colors" style={{ background: "#d97706", color: "#0d0806" }}>
              Enter
            </button>
          </form>
          <p className="text-[11px] mt-6" style={{ color: "rgba(245,240,232,0.2)" }}>Built by Lincoln Mitchell — lincolnmitchell.io</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#0d0806", color: "#f5f0e8" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl px-8 py-4" style={{ background: "rgba(13,8,6,0.9)", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <span className="font-bold text-lg" style={{ color: "#d97706", fontFamily: "'DM Serif Display', Georgia, serif" }}>Bennie James</span>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm no-underline transition-colors" style={{ color: "rgba(245,240,232,0.5)" }}>Services</a>
            <a href="#about" className="text-sm no-underline transition-colors" style={{ color: "rgba(245,240,232,0.5)" }}>About</a>
            <a href="#music" className="text-sm no-underline transition-colors" style={{ color: "rgba(245,240,232,0.5)" }}>Music</a>
            <a href="mailto:benniejamesmusic@gmail.com" className="text-sm font-medium px-5 py-2 rounded-md no-underline transition-colors" style={{ background: "#d97706", color: "#0d0806" }}>
              Book Bennie
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative">
        <Image
          src="/bj-hero-wedding.png"
          alt="Bennie James — Soul DJ"
          width={1456}
          height={816}
          className="w-full h-[70vh] object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0806, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-20 pb-16 max-w-[1200px] mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#d97706", fontFamily: "'Space Grotesk', monospace" }}>Soul DJ · Weddings · Events</p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.03em] leading-[0.95] mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Bennie James
          </h1>
          <p className="text-xl max-w-[520px] leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
            The soul of New Jersey and Philadelphia — brought to your celebration. Weddings, events, and community gatherings with music that moves.
          </p>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="max-w-[1200px] mx-auto px-8 md:px-20 py-24">
        <span className="text-xs uppercase tracking-[0.2em] block mb-4" style={{ color: "#d97706", fontFamily: "'Space Grotesk', monospace" }}>What I Do</span>
        <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold tracking-tight leading-[1.1] mb-12" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Soul music for your moment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-xl" style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.06)" }}>
              <span className="text-3xl block mb-4">{s.icon}</span>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{s.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 md:px-20 py-24" style={{ background: "#1a120e" }}>
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] block mb-4" style={{ color: "#d97706", fontFamily: "'Space Grotesk', monospace" }}>Kind Words</span>
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold tracking-tight leading-[1.1] mb-12" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
            What people say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-10 rounded-xl" style={{ background: "rgba(245,240,232,0.03)", borderLeft: "3px solid #d97706" }}>
                <p className="text-lg leading-relaxed mb-6 italic" style={{ color: "rgba(245,240,232,0.7)", fontFamily: "'DM Serif Display', Georgia, serif" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-[1200px] mx-auto px-8 md:px-20 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-[0.2em] block mb-4" style={{ color: "#d97706", fontFamily: "'Space Grotesk', monospace" }}>About</span>
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
              The man behind the music
            </h2>
            <div className="text-[17px] leading-relaxed space-y-6" style={{ color: "rgba(245,240,232,0.5)" }}>
              <p>
                Bennie James is a soul DJ rooted in the sounds of New Jersey and Philadelphia — the heartland of American soul music. From Gamble &amp; Huff to modern neo-soul, Bennie curates sets that honour the tradition while keeping the dancefloor alive.
              </p>
              <p>
                Specialising in weddings and private events, Bennie brings more than a playlist — he brings a feeling. Reading the room, building energy, and creating moments that people remember. Whether it&apos;s your first dance or the last song of the night, every track is chosen with intention.
              </p>
              <p>
                Also a singer, songwriter, and multi-instrumentalist in his own right, Bennie understands music from the inside out. That depth shows in every set — a DJ who doesn&apos;t just play records, but understands why they matter.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/ben-mitchell.png"
              alt="Bennie James"
              width={280}
              height={420}
              className="rounded-xl object-cover"
              style={{ width: 280, height: 420, border: "1px solid rgba(245,240,232,0.06)" }}
            />
          </div>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="px-8 md:px-20 py-24" style={{ background: "#1a120e" }}>
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] block mb-4" style={{ color: "#d97706", fontFamily: "'Space Grotesk', monospace" }}>Original Music</span>
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold tracking-tight leading-[1.1] mb-12" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Listen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://music.apple.com/us/album/listen-closely-please-mend-me-single/472716564" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 rounded-xl no-underline group transition-colors" style={{ border: "1px solid rgba(245,240,232,0.06)" }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(217,119,6,0.1)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              </div>
              <div>
                <p className="text-base font-semibold">Apple Music</p>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>Listen Closely / Please Mend Me</p>
              </div>
            </a>
            <a href="https://benniejames.bandcamp.com/album/listen-closely-please-mend-me-single" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 rounded-xl no-underline group transition-colors" style={{ border: "1px solid rgba(245,240,232,0.06)" }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(217,119,6,0.1)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </div>
              <div>
                <p className="text-base font-semibold">Bandcamp</p>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>Listen Closely / Please Mend Me</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 py-24 text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold tracking-tight mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Let&apos;s make your event unforgettable
          </h2>
          <p className="text-lg max-w-[480px] mx-auto mb-8 leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
            Weddings, private events, community celebrations. Soul music that moves people.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:benniejamesmusic@gmail.com" className="text-[15px] font-medium px-8 py-3.5 rounded-lg no-underline transition-colors" style={{ background: "#d97706", color: "#0d0806" }}>
              Book Bennie
            </a>
            <a href="https://www.facebook.com/benniejames" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium px-8 py-3.5 rounded-lg no-underline transition-colors" style={{ color: "rgba(245,240,232,0.5)", border: "1px solid rgba(245,240,232,0.1)" }}>
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-8 py-10 text-center" style={{ borderTop: "1px solid rgba(245,240,232,0.04)" }}>
        <p className="text-[13px] mb-2" style={{ color: "rgba(245,240,232,0.2)" }}>
          Same design system, different brand tokens — proof of headless multi-brand architecture.
        </p>
        <p className="text-[13px]" style={{ color: "rgba(245,240,232,0.2)" }}>
          Built by <a href="https://lincolnmitchell.io" className="no-underline" style={{ color: "rgba(217,119,6,0.5)" }}>Lincoln Mitchell</a> — Design Systems Architect
        </p>
      </footer>
    </div>
  );
}
