"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { k: "07", v: "Plates shipped" },
  { k: "20", v: "Years old" },
  { k: "00", v: "Funding raised" },
  { k: "01", v: "Person team" },
];

const peek = [
  { n: "01", title: "Dilly",             tag: "SaaS · AI",       year: "2026", palette: "#252B46" },
  { n: "02", title: "Thinkteks",         tag: "Agent · Brand",   year: "2026", palette: "#1C1F2B" },
  { n: "03", title: "Taken Time",        tag: "Studio · Web",    year: "2026", palette: "#B86A2E" },
  { n: "04", title: "Erickson Flooring", tag: "Marketing Site",  year: "2026", palette: "#4F533A" },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* COVER */}
      <section ref={ref} className="relative min-h-screen px-6 md:px-10 pt-28 pb-20 overflow-hidden">
        <div className="mx-auto max-w-[92rem]">
          {/* Masthead */}
          <div className="flex items-baseline justify-between border-b hairline pb-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              Volume IV · MMXXVI · Studio of One
            </p>
            <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              Issued from Tampa, Florida
            </p>
          </div>

          <motion.div style={{ y, opacity }} className="pt-16 md:pt-24">
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
              <div className="md:col-span-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-6">
                  A Portfolio of Websites, Apps &amp; AI Agents
                </p>
                <h1 className="font-display text-[18vw] md:text-[13rem] leading-[0.82] tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="block"
                  >
                    Dilan
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="block italic font-light text-inkSoft -mt-2 md:-mt-4"
                  >
                    Kochhar.
                  </motion.span>
                </h1>
              </div>

              <div className="md:col-span-4 md:pb-8">
                <div className="vrule hidden md:inline-block text-[10px] font-mono uppercase tracking-[0.4em] text-inkMuted mb-4">
                  Treated as art
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  className="font-display italic text-2xl md:text-3xl leading-tight text-ink text-balance"
                >
                  &ldquo;Good software is a physical object — it just doesn&rsquo;t know it
                  yet.&rdquo;
                </motion.p>
                <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-inkMuted">
                  — D.K.
                </p>
              </div>
            </div>

            <div className="rule mt-16" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-10 grid md:grid-cols-12 gap-8"
            >
              <p className="md:col-span-7 text-xl md:text-2xl text-inkSoft leading-relaxed text-balance">
                I build websites, apps, and AI agents — solo, out of a dorm, with no funding, no
                team, and no permission. This site is a gallery. The work is the collection.
              </p>
              <div className="md:col-span-4 md:col-start-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-xs font-mono uppercase tracking-[0.22em] hover:bg-ochre transition-colors"
                >
                  View the Portfolio
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/dilly"
                  className="inline-flex items-center gap-3 border border-ink/30 px-6 py-3 text-xs font-mono uppercase tracking-[0.22em] text-ink/80 hover:border-ink hover:text-ink transition"
                >
                  Read the Memo
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 px-6 md:px-10"
        >
          <div className="mx-auto max-w-[92rem] flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
            <span>↓ Turn the page</span>
            <span className="hidden md:inline">Plate 00 · Cover</span>
          </div>
        </motion.div>
      </section>

      {/* NUMBERS STRIP */}
      <section className="border-y hairline">
        <div className="mx-auto max-w-[92rem] px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-baseline gap-5 border-l hairline pl-5 first:border-l-0 first:pl-0 md:border-l md:pl-5 md:first:border-l-0 md:first:pl-0"
            >
              <p className="font-display text-6xl md:text-7xl leading-none text-ink tabular-nums">{s.k}</p>
              <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* N° 02 · DILLY */}
      <section className="relative px-6 md:px-10 py-32 md:py-48">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° 02 · The Company
            </p>
            <p className="vrule hidden md:inline-block mt-10 text-[10px] font-mono uppercase tracking-[0.4em] text-inkMuted">
              Stealth · Pre-launch · 2026
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              <span className="italic">Dilly</span> replaces the broken way colleges prepare
              students for careers.
            </h2>
            <p className="mt-10 text-lg md:text-xl text-inkSoft max-w-2xl text-balance leading-relaxed">
              It turns every résumé, major, and skill into a real-time readiness score that
              tells students exactly what to do next to land the job they actually want.
            </p>
            <Link
              href="/dilly"
              className="mt-10 inline-flex items-center gap-2 text-ink border-b border-ink/30 hover:border-ochre hover:text-ochre transition-colors pb-1 text-sm"
            >
              Read the full thesis →
            </Link>
          </div>
        </div>
      </section>

      {/* N° 03 · MANIFESTO — dark inverted break */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="mx-auto max-w-[92rem] px-6 md:px-10 py-32 md:py-48">
          <div className="flex items-baseline justify-between border-b border-paper/15 pb-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-paper/50">
              N° 03 · Manifesto
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-paper/50 hidden md:block">
              Pulled from the studio wall
            </p>
          </div>
          <p className="mt-14 font-display text-4xl md:text-7xl leading-[1.02] text-balance">
            &ldquo;LinkedIn does not help you get a job.
            <span className="text-ochre"> No one does.</span>
            <br />
            So I&rsquo;m building the thing that will.&rdquo;
          </p>
          <p className="mt-12 text-[10px] font-mono uppercase tracking-[0.32em] text-paper/50">D.K. · 2026</p>
        </div>
      </section>

      {/* N° 04 · WORK PEEK */}
      <section className="px-6 md:px-10 py-32 md:py-48">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-end justify-between mb-14 border-b hairline pb-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
                N° 04 · From the Portfolio
              </p>
              <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.9]">
                A peek at the <span className="italic text-ochre">collection</span>.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.28em] text-inkMuted hover:text-ochre transition-colors"
            >
              See all seven →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {peek.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group plate p-3 ${i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="meta-strip flex items-center justify-between px-3 py-2 text-[9px] font-mono uppercase tracking-[0.28em] text-ink/75 bg-paperHi">
                  <span>Dilan Kochhar</span>
                  <span>{w.year}</span>
                  <span>{w.tag}</span>
                </div>
                <Link href="/work" className="block">
                  <div
                    className="relative aspect-[5/6] overflow-hidden flex flex-col justify-between p-6 md:p-8 text-paperHi"
                    style={{
                      background: w.palette,
                      backgroundImage: `linear-gradient(rgba(245, 241, 234, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 241, 234, 0.08) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  >
                    <p className="text-[10px] font-mono uppercase tracking-[0.32em] opacity-70">
                      Plate N° {w.n}
                    </p>
                    <div>
                      <p className="font-display italic text-6xl md:text-8xl leading-none opacity-90">
                        {w.n}
                      </p>
                      <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[0.9] tracking-tight">
                        {w.title}
                      </h3>
                    </div>
                  </div>
                </Link>
                <div className="meta-strip flex items-center justify-between px-3 py-2 text-[9px] font-mono uppercase tracking-[0.28em] text-ink/75 bg-paperHi">
                  <span>Shipped</span>
                  <span className="group-hover:text-ochre transition-colors">View ↗</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.28em] text-ink"
            >
              See all seven →
            </Link>
          </div>
        </div>
      </section>

      {/* N° 05 · COMMISSION */}
      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[92rem]">
          <div className="plate p-10 md:p-20 text-center">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° 05 · Commission
            </p>
            <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              If you&rsquo;re building something{" "}
              <span className="italic text-ochre">hard</span>,<br className="hidden md:block" /> we should talk.
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:ceo@hellodilly.com"
                className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 text-xs font-mono uppercase tracking-[0.22em] hover:bg-ochre transition-colors"
              >
                ceo@hellodilly.com →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-ink/30 px-7 py-3.5 text-xs font-mono uppercase tracking-[0.22em] text-ink/80 hover:border-ink hover:text-ink transition"
              >
                Other channels
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
