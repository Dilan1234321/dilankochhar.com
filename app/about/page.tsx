"use client";

import { motion } from "framer-motion";

const timeline = [
  { y: "2005", t: "Born on Long Island, NY." },
  { y: "School", t: "First learned how to code in a classroom. Didn't think much of it at the time." },
  { y: "2022", t: "Started getting actually good at web development." },
  { y: "2025", t: "Shipped utampaakpsi.com — first real project with my name on it." },
  { y: "2026", t: "Launched an informal web agency. Outsourcing my talent to Tampa Bay startups." },
  { y: "2026", t: "Built Dilly." },
];

const beliefs = [
  "LinkedIn does not help you get a job. No one does.",
  "Speed is the only moat that compounds.",
  "If you can't ship it solo, you don't understand it yet.",
  "Career centers are the next industry to be replaced.",
  "Being 20 is an advantage, not a disclaimer.",
  "Design is the part of the code most engineers refuse to learn.",
];

export default function AboutPage() {
  return (
    <>
      {/* Cover */}
      <section className="relative px-6 md:px-10 pt-40 pb-20 overflow-hidden">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-baseline justify-between border-b hairline pb-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° 03 · About the Artist
            </p>
            <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              b. 2005 · Long Island → Tampa
            </p>
          </div>
          <h1 className="mt-14 font-display text-[22vw] md:text-[15rem] leading-[0.82] tracking-tight">
            <span className="block">A</span>
            <span className="block italic font-light text-inkSoft -mt-2 md:-mt-6">bout.</span>
          </h1>
        </div>
      </section>

      {/* Portrait + copy */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            {/* Portrait plate */}
            <motion.div
              initial={{ opacity: 0, rotate: -2.5, y: 24 }}
              whileInView={{ opacity: 1, rotate: -1.2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="plate p-3"
            >
              <div className="meta-strip flex items-center justify-between px-3 py-2 text-[9px] font-mono uppercase tracking-[0.28em] text-ink/75 bg-paperHi">
                <span>Dilan Kochhar</span>
                <span>Portrait</span>
                <span>Tampa · 2026</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img
                  src="/dilan.jpg"
                  alt="Dilan Kochhar"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="meta-strip flex items-center justify-between px-3 py-2 text-[9px] font-mono uppercase tracking-[0.28em] text-ink/75 bg-paperHi">
                <span>Plate N° P-01</span>
                <span>Shot on film, so to speak</span>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-7 text-lg md:text-xl text-inkSoft leading-relaxed">
            <p className="text-pretty text-2xl md:text-3xl font-display text-ink leading-snug">
              I&rsquo;m Dilan. I&rsquo;m 20. I build the things I wish existed.
            </p>
            <p>
              I grew up on Long Island and live in Tampa, a sophomore at the University of
              Tampa. Self-taught. Nobody told me I was allowed to start a company, so I
              started one anyway. Before the code, I co-founded the{" "}
              <a
                href="https://kochharfoundation.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-ochre decoration-2 underline-offset-4 hover:text-ochre transition-colors"
              >
                Kochhar Foundation
              </a>
              , a charity that has raised over $22,000. The instinct to build something real
              started long before I knew what a framework was.
            </p>
            <p>
              I got into this because I watched friends — smart, capable, hardworking friends —
              flounder trying to find their first real job out of college. Career centers were
              useless. LinkedIn was a popularity contest. I figured someone should fix it.
              Then I figured: why not me.
            </p>
            <p>
              I design and code everything I ship. I don&rsquo;t outsource the parts I&rsquo;m bad at.
              I just get less bad at them. The way to be the smartest person in the room is to
              be the one who actually built the thing.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t hairline px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-12">
            A Short History · Chapter II
          </p>
          <ul className="border-y hairline divide-y divide-ink/10">
            {timeline.map((row, i) => (
              <motion.li
                key={`${row.y}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-6 py-7 items-baseline"
              >
                <span className="col-span-3 md:col-span-2 font-mono text-xs uppercase tracking-[0.28em] text-inkMuted">
                  {row.y}
                </span>
                <span className="col-span-9 md:col-span-10 font-display text-2xl md:text-3xl text-balance">
                  {row.t}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beliefs — dark break */}
      <section className="bg-ink text-paper px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-paper/50 mb-14">
            What I Believe · Chapter III
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
            {beliefs.map((b, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="font-display text-2xl md:text-3xl text-balance leading-snug border-l-2 border-ochre pl-5"
              >
                {b}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
