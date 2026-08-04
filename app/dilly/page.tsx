import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dilly, the company",
  description:
    "Dilly is the daily workbench that keeps college students ahead of AI: a living profile, one clear move a day, and proof they can export. Live on the App Store. Founded, designed, and built by Dilan Kochhar.",
  alternates: { canonical: "/dilly" },
};

const facts = [
  { k: "App Store", v: "Live" },
  { k: "Jobs in feed", v: "50K+" },
  { k: "Price", v: "$8.99/mo" },
  { k: "Builds shipped", v: "1,100+" },
];

const principles = [
  {
    n: "01",
    t: "A living profile.",
    d: "Coursework, projects, tools, goals. Every feature reads the same record, so the advice cites what a student actually built instead of guessing.",
  },
  {
    n: "02",
    t: "One clear move a day.",
    d: "Not a list of 40 things. Dilly surfaces the one three-minute move that matters today, tuned to the student's field and to where AI is catching up.",
  },
  {
    n: "03",
    t: "Proof they can export.",
    d: "The Truth Ledger grounds every resume bullet in a real profile fact. No invented bullets, ever. The profile compounds into something worth showing.",
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
        <div className="mx-auto max-w-[88rem]">
          <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-ink/50">The Company</p>
          <h1 className="mt-6">
            <Image
              src="/dilly-wordmark.png"
              alt="Dilly"
              width={258}
              height={140}
              priority
              className="h-14 md:h-20 w-auto"
            />
          </h1>
          <p className="mt-10 max-w-4xl text-2xl md:text-3xl text-ink/80 leading-snug">
            Dilly is the daily workbench that keeps college students ahead of AI: a
            living profile, one clear move a day, and proof they can export. Live on
            the App Store for verified students.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {facts.map((f) => (
              <div key={f.k} className="flex items-baseline gap-3 border hairline px-4 py-3">
                <span className="font-medium text-[10px] uppercase tracking-[0.2em] text-ink/45">
                  {f.k}
                </span>
                <span className="font-display text-lg text-ink tabular-nums">{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t hairline px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">The problem</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              College career prep is the single biggest scam in higher education.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6 text-ink/70 text-lg leading-relaxed max-w-3xl">
              <p>$200K of tuition. A 30-minute résumé review with someone who hasn't job-hunted in 20 years.</p>
              <p>AI is eating the first rungs of the ladder, and the market answers with doom reports and advice that never looks at what a student actually built.</p>
              <p>Career tools feel useful once, then go quiet. Read the report, feel behind, close the app. The churn is baked into the format.</p>
              <p>Students need the next move. Not a list of 40 things. The one move that matters this week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs uppercase tracking-widest text-paper/50 mb-10">The insight</p>
          <p className="font-display text-3xl md:text-6xl leading-[1.1] text-balance max-w-5xl">
            The next career OS is a habit product, not a document tool. Whoever owns
            the daily habit owns the profile.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[88rem]">
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
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">Why me</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-ink/70 max-w-3xl leading-relaxed">
            <p>
              I'm 20. A sophomore at the University of Tampa. Self-taught. I went looking for
              the tool I needed and it didn't exist. So I built it.
            </p>
            <p>
              I'm not the right founder for this in the way investors usually mean. I'm the
              right founder because <span className="text-ink font-medium">I'm the customer</span>,
              and the product is live: on the App Store since May, over 1,100 production
              builds shipped, Stripe billing running, a 50K-job feed refreshed nightly.
            </p>
            <p>
              Solo and bootstrapped to this point. A laptop, a daily shipping cadence, and
              the conviction that this is the thing I'm supposed to build.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[88rem] border-t hairline pt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/50">Investors · Operators · Believers</p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl text-balance max-w-2xl">
              Raising a $250K seed. The product is already live.
            </h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://investors.hellodilly.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-ink text-paper px-6 py-3 text-sm hover:bg-accent transition-colors"
            >
              Investor overview <span aria-hidden>↗</span>
            </a>
            <a
              href="mailto:ceo@hellodilly.com"
              className="inline-flex items-center gap-3 rounded-md border border-ink/30 px-6 py-3 text-sm text-ink/80 hover:border-ink hover:text-ink transition"
            >
              ceo@hellodilly.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
