"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { k: "5", v: "Sites shipped" },
  { k: "20", v: "Years old" },
  { k: "0", v: "Funding raised" },
  { k: "1", v: "Person team" },
];

const work = [
  { title: "Dilly", role: "Founder · Engineer · Designer", url: "hellodilly.com", tag: "SaaS · Stealth" },
  { title: "Kochhar Foundation", role: "Co-founder", url: "kochharfoundation.com", tag: "Charity · $22K+" },
  { title: "UTampa AKPSI", role: "Lead Developer", url: "utampaakpsi.com", tag: "Org Site" },
  { title: "Erickson Flooring", role: "Full build", url: "erickson-flooring.com", tag: "Small Business" },
  { title: "Puchalski Performance", role: "In progress", url: "tba", tag: "Coming soon" },
  { title: "Taken Time to Design", role: "In progress", url: "tba", tag: "Coming soon" },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("en-US", { hour12: false, timeZone: "America/New_York" });
      setTime(t + " EST");
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 overflow-hidden">
        <div className="glow absolute inset-0 -z-10" />
        <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulseDot" />
            <span className="font-mono">{time || "..."} · Tampa, FL</span>
            <span className="hidden md:inline">· Currently building Dilly</span>
          </motion.div>

          <h1 className="font-display text-[14vw] md:text-[9rem] leading-[0.85] tracking-tight text-balance">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block"
            >
              Dilan
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block italic font-light text-bone/80"
            >
              Kochhar.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-2xl text-xl md:text-2xl text-bone/70 text-balance leading-snug"
          >
            Founder of <Link href="/dilly" className="text-bone underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">Dilly</Link>. Self-taught engineer.
            Building the tools colleges should have built years ago, out of a dorm room, with no funding, no team, and no permission.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/dilly"
              className="group inline-flex items-center gap-3 rounded-full bg-bone text-ink px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              See what I'm building
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 rounded-full border border-bone/15 px-6 py-3 text-sm text-bone/80 hover:border-bone/40 hover:text-bone transition"
            >
              View the work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 px-6 md:px-10"
        >
          <div className="mx-auto max-w-7xl flex items-end justify-between text-[10px] uppercase tracking-[0.22em] text-bone/40 font-mono">
            <span>↓ Scroll</span>
            <span className="hidden md:inline">N° 001 · Index</span>
          </div>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-bone/5 bg-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-6xl md:text-7xl leading-none text-bone">{s.k}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-bone/40">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DILLY TEASER */}
      <section className="relative px-6 md:px-10 py-32 md:py-48">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 font-mono">N° 002 · The Company</p>
            <Link
              href="/dilly"
              className="mt-6 inline-flex items-center gap-2 text-bone/70 hover:text-accent transition-colors text-sm"
            >
              Read the full thesis →
            </Link>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              Dilly replaces the broken way colleges prepare students for careers.
            </h2>
            <p className="mt-8 text-lg md:text-xl text-bone/60 max-w-2xl text-balance leading-snug">
              It turns every résumé, major, and skill into a real-time readiness score
              that tells students exactly what to do next to land the job they actually want.
            </p>
            <p className="mt-6 text-bone/40 text-sm font-mono">
              Status: stealth · Solo founder · Pre-launch
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative border-y border-bone/5 bg-ink overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-32 md:py-48">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 font-mono mb-10">N° 003 · Manifesto</p>
          <p className="font-display text-4xl md:text-7xl leading-[1.02] text-balance">
            “LinkedIn does not help you get a job.
            <span className="text-accent"> No one does.</span>
            <br />
            So I'm building the thing that will.”
          </p>
          <p className="mt-10 text-bone/40 text-sm font-mono">D.K., 2026</p>
        </div>
      </section>

      {/* WORK PEEK */}
      <section className="px-6 md:px-10 py-32 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 font-mono">N° 004 · Selected Work</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">Things I've shipped.</h2>
            </div>
            <Link href="/work" className="hidden md:inline text-sm text-bone/60 hover:text-accent transition-colors">
              All work →
            </Link>
          </div>

          <ul className="divide-y divide-bone/5 border-y border-bone/5">
            {work.map((w, i) => (
              <motion.li
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <Link href="/work" className="grid grid-cols-12 gap-4 py-7 items-baseline hover:bg-bone/[0.02] transition-colors px-2 -mx-2 rounded">
                  <span className="col-span-1 font-mono text-xs text-bone/40 pt-1">0{i + 1}</span>
                  <span className="col-span-5 md:col-span-4 font-display text-2xl md:text-3xl text-bone group-hover:text-accent transition-colors">
                    {w.title}
                  </span>
                  <span className="col-span-6 md:col-span-4 text-bone/55 text-sm">{w.role}</span>
                  <span className="hidden md:block col-span-2 text-bone/40 text-xs font-mono uppercase tracking-wider">{w.tag}</span>
                  <span className="hidden md:block col-span-1 text-right text-bone/40 group-hover:text-accent transition-colors">↗</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-7xl rounded-3xl border border-bone/10 bg-gradient-to-br from-bone/[0.04] to-transparent p-10 md:p-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 font-mono">N° 005 · The Ask</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            If you're building something <span className="italic text-accent">hard</span>,
            <br className="hidden md:block" /> we should talk.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ceo@hellodilly.com"
              className="inline-flex items-center gap-3 rounded-full bg-bone text-ink px-7 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              ceo@hellodilly.com →
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-bone/15 px-7 py-3.5 text-sm text-bone/80 hover:border-bone/40 hover:text-bone transition"
            >
              Other ways to reach me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
