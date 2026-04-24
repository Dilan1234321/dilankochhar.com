"use client";

import Link from "next/link";

const principles = [
  {
    n: "01",
    t: "Every student is data.",
    d: "Major, GPA, courses, projects, internships, skills, résumé, LinkedIn, GitHub. Dilly ingests all of it.",
  },
  {
    n: "02",
    t: "The score updates in real time.",
    d: "Add a project, take a course, change your goal — the readiness number moves. Career prep stops being a guessing game.",
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
      {/* Header */}
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-12">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50">The Company</p>
          <h1 className="mt-6 font-display text-[14vw] md:text-[11rem] leading-[0.88] tracking-tight">
            Dilly.
          </h1>
          <p className="mt-10 max-w-4xl text-2xl md:text-3xl text-ink/80 leading-snug">
            Dilly replaces the broken way colleges prepare students for careers. It turns
            every résumé, major, and skill into a real-time readiness score that tells
            students exactly what to do next.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t hairline px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">The problem</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              College career prep is the single biggest scam in higher education.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6 text-ink/70 text-lg leading-relaxed max-w-3xl">
              <p>$200K of tuition. A 30-minute résumé review with someone who hasn't job-hunted in 20 years.</p>
              <p>LinkedIn was supposed to fix this. It made it worse. Everyone has the same template and no one gets seen.</p>
              <p>Students don't need motivation. They need a number that tells them, today, whether they're going to make it.</p>
              <p>Then they need the next move. Not a list of 40 things. The one move that matters this week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-paper/50 mb-10">The insight</p>
          <p className="font-display text-3xl md:text-6xl leading-[1.1] text-balance max-w-5xl">
            Career readiness isn't a feeling. It's a function of inputs you can measure and
            a target you can name. If you can measure it, you can move it.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-10">How it works</p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {principles.map((p) => (
              <div key={p.n} className="border hairline p-8 md:p-10">
                <span className="text-xs uppercase tracking-widest text-ink/50">{p.n}</span>
                <h3 className="mt-4 font-display text-2xl md:text-3xl leading-[1.05] text-balance">{p.t}</h3>
                <p className="mt-4 text-ink/65 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="border-t hairline px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">Why me</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-ink/70 max-w-3xl leading-relaxed">
            <p>
              I'm 20. A sophomore at the University of Tampa. Self-taught. I went looking for
              the tool I needed and it didn't exist. So I'm building it.
            </p>
            <p>
              I'm not the right founder for this in the way investors usually mean. I'm the
              right founder because <span className="text-ink font-medium">I'm the customer</span>,
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
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem] border-t hairline pt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/50">Investors · Operators · Believers</p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl text-balance max-w-2xl">
              I'm not raising. I am taking calls.
            </h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ceo@hellodilly.com"
              className="inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3 text-sm hover:bg-ochre transition-colors"
            >
              ceo@hellodilly.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-ink/30 px-6 py-3 text-sm text-ink/80 hover:border-ink hover:text-ink transition"
            >
              Other channels
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
