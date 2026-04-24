"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const principles = [
  {
    n: "01",
    t: "Every student is data.",
    d: "Major, GPA, courses, projects, internships, skills, résumé, LinkedIn, GitHub. Dilly ingests all of it.",
  },
  {
    n: "02",
    t: "The score updates in real time.",
    d: "Add a project, take a course, change your goal, the readiness number moves. Career prep stops being a guessing game.",
  },
  {
    n: "03",
    t: "Tell them what to do next.",
    d: "Not generic advice. The single highest-leverage action this week to land the job they actually want.",
  },
  {
    n: "04",
    t: "Replace the career center.",
    d: "Career centers are 50 years behind. Dilly is what they should have become.",
  },
];

export default function DillyPage() {
  return (
    <>
      {/* Cover */}
      <section className="relative px-6 md:px-10 pt-40 pb-24 overflow-hidden">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-baseline justify-between border-b hairline pb-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° 02 · The Company · Founder's Memo
            </p>
            <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              Stealth · Solo · Pre-launch
            </p>
          </div>

          <h1 className="mt-14 font-display text-[22vw] md:text-[16rem] leading-[0.82] tracking-tight">
            <span className="block">Dil</span>
            <span className="block italic font-light text-ochre -mt-2 md:-mt-6">ly.</span>
          </h1>

          <div className="mt-14 grid md:grid-cols-12 gap-10">
            <p className="md:col-span-8 text-2xl md:text-3xl text-ink text-balance leading-snug font-display">
              Dilly replaces the broken way colleges prepare students for careers by turning
              every résumé, major, and skill into a{" "}
              <span className="italic text-ochre">real-time readiness score</span> that tells
              students exactly what to do next to land the job they want.
            </p>
            <div className="md:col-span-4 md:col-start-9 space-y-3 text-sm border-t hairline pt-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
                Status
              </p>
              <p className="font-display text-2xl">Stealth. Solo. Pre-launch.</p>
              <p className="text-inkSoft">
                One founder. No funding. One conviction: this is the thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t hairline px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              The Problem
            </p>
            <p className="vrule hidden md:inline-block mt-10 text-[10px] font-mono uppercase tracking-[0.4em] text-inkMuted">
              Chapter I
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              College career prep is the{" "}
              <span className="italic text-ochre">single biggest scam</span> in higher
              education.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6 text-inkSoft text-lg leading-relaxed max-w-3xl">
              <p>$200K of tuition. A 30-minute résumé review with someone who hasn&rsquo;t job-hunted in 20 years.</p>
              <p>LinkedIn was supposed to fix this. It made it worse. Now everyone has the same template and no one gets seen.</p>
              <p>Students don&rsquo;t need motivation. They need a number that tells them, today, whether they&rsquo;re going to make it.</p>
              <p>And then they need the next move. Not a list of 40 things. The one move that matters this week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight — dark break */}
      <section className="bg-ink text-paper px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-paper/50 mb-12">
            The Insight · Chapter II
          </p>
          <p className="font-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-5xl">
            &ldquo;Career readiness&rdquo; isn&rsquo;t a feeling. It&rsquo;s a function of
            inputs you can measure and a target you can name.{" "}
            <span className="text-ochre italic">If you can measure it, you can move it.</span>
          </p>
        </div>
      </section>

      {/* How it works — as plates */}
      <section className="px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-12">
            How It Works · Chapter III
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`plate p-8 md:p-12 ${i % 2 === 0 ? "md:-rotate-[0.6deg]" : "md:rotate-[0.6deg]"} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="flex items-baseline justify-between border-b hairline pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
                    Principle {p.n}
                  </span>
                  <span className="font-display italic text-3xl text-ochre leading-none">
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl leading-[0.95] text-balance">
                  {p.t}
                </h3>
                <p className="mt-5 text-inkSoft leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="border-t hairline px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              Why Me · Chapter IV
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-inkSoft max-w-3xl leading-relaxed">
            <p>
              I&rsquo;m 20. A sophomore at the University of Tampa. Self-taught. I went
              looking for the tool I needed and it didn&rsquo;t exist. So I&rsquo;m building it.
            </p>
            <p>
              I&rsquo;m not the right founder for this in the way investors usually mean.
              I&rsquo;m the right founder because{" "}
              <span className="text-ink font-medium">I&rsquo;m the customer</span>, and
              I&rsquo;ve already shipped real products people pay for.
            </p>
            <p>
              No team. No funding. No advisors. Just me, a laptop, and the conviction that
              this is the thing I&rsquo;m supposed to build.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <div className="plate p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
                Investors · Operators · Believers
              </p>
              <h3 className="mt-5 font-display text-3xl md:text-5xl text-balance">
                I&rsquo;m not raising. I <span className="italic">am</span> taking calls.
              </h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:ceo@hellodilly.com"
                className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-xs font-mono uppercase tracking-[0.22em] hover:bg-ochre transition-colors"
              >
                ceo@hellodilly.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-ink/30 px-6 py-3 text-xs font-mono uppercase tracking-[0.22em] text-ink/80 hover:border-ink hover:text-ink transition"
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
