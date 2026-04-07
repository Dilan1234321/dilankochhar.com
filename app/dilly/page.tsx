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
      <section className="relative px-6 md:px-10 pt-40 pb-24 overflow-hidden">
        <div className="glow absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-bone/40">
            N° 002 · The Company
          </p>
          <h1 className="mt-8 font-display text-[12vw] md:text-[10rem] leading-[0.85] tracking-tight">
            Dilly.
          </h1>
          <p className="mt-10 max-w-3xl text-2xl md:text-3xl text-bone/75 text-balance leading-snug">
            Dilly replaces the broken way colleges prepare students for careers
            by turning every résumé, major, and skill into a{" "}
            <span className="text-accent">real-time readiness score</span> that tells
            students exactly what to do next to land the job they want.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 text-xs uppercase tracking-wider">
            <span className="rounded-full border border-bone/15 px-3 py-1.5 text-bone/60">Stealth</span>
            <span className="rounded-full border border-bone/15 px-3 py-1.5 text-bone/60">Solo founder</span>
            <span className="rounded-full border border-bone/15 px-3 py-1.5 text-bone/60">Pre-launch</span>
            <span className="rounded-full border border-accent/30 bg-accent/10 text-accent px-3 py-1.5">Hype: building</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-bone/5 px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40">The Problem</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              College career prep is the <span className="italic text-accent">single biggest scam</span> in higher education.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6 text-bone/65 text-lg leading-relaxed max-w-3xl">
              <p>$200K of tuition. A 30-minute résumé review with someone who hasn't job-hunted in 20 years.</p>
              <p>LinkedIn was supposed to fix this. It made it worse. Now everyone has the same template and no one gets seen.</p>
              <p>Students don't need motivation. They need a number that tells them, today, whether they're going to make it.</p>
              <p>And then they need the next move. Not a list of 40 things. The one move that matters this week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="border-y border-bone/5 bg-ink px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-10">The Insight</p>
          <p className="font-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-5xl">
            “Career readiness” isn't a feeling. It's a function of inputs you can measure
            and a target you can name. <span className="text-accent">If you can measure it, you can move it.</span>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-12">How It Works</p>
          <ul className="grid md:grid-cols-2 gap-px bg-bone/5">
            {principles.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-ink p-10 md:p-14"
              >
                <span className="tracking-wider text-xs text-bone/35">{p.n}</span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-balance">{p.t}</h3>
                <p className="mt-5 text-bone/55 leading-relaxed">{p.d}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY ME */}
      <section className="border-t border-bone/5 px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40">Why Me</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-bone/70 max-w-3xl leading-relaxed">
            <p>
              I'm 20. I'm a sophomore at the University of Tampa. I'm self-taught.
              I went looking for the tool I needed and it didn't exist. So I'm building it.
            </p>
            <p>
              I'm not the right founder for this in the way investors usually mean.
              I'm the right founder because <span className="text-bone">I'm the customer</span>,
              and I've already shipped real products people pay for.
            </p>
            <p>
              No team. No funding. No advisors. Just me, a laptop, and the conviction that
              this is the thing I'm supposed to build.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-bone/10 bg-gradient-to-br from-accent/[0.08] to-transparent p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40">Investors · Operators · Believers</p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl text-balance">
              I'm not raising. I am taking calls.
            </h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ceo@hellodilly.com"
              className="inline-flex rounded-full bg-bone text-ink px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              ceo@hellodilly.com
            </a>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-bone/15 px-6 py-3 text-sm text-bone/80 hover:border-bone/40 hover:text-bone transition"
            >
              Other channels
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
