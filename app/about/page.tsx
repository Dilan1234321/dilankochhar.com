"use client";

import { motion } from "framer-motion";

const timeline = [
  { y: "2005", t: "Born on Long Island, NY." },
  { y: "School", t: "First learned how to code in a classroom. Didn't think much of it at the time." },
  { y: "2022", t: "Started getting actually good at web development." },
  { y: "2025", t: "Built the site for Alpha Kappa Psi at UTampa. My first real shipped project." },
  { y: "2026", t: "Launched an informal web development agency. Outsourcing my talent to creating the digital presence startups in the Tampa Bay Area." },
  { y: "2026", t: "Built Dilly." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative px-6 md:px-10 pt-40 pb-20 overflow-hidden">
        <div className="glow absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-bone/40">N° 003 · About</p>
          <h1 className="mt-8 font-display text-[12vw] md:text-[10rem] leading-[0.85] tracking-tight">
            About.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            {/* PHOTO SLOT */}
            <div className="relative aspect-[4/5] rounded-2xl border border-bone/10 overflow-hidden group">
              <img
                src="/dilan.jpg"
                alt="Dilan Kochhar"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.22em] text-bone/70">
                <span>Tampa, FL</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-7 text-lg md:text-xl text-bone/70 leading-relaxed">
            <p className="text-balance text-2xl md:text-3xl font-display text-bone leading-snug">
              I'm Dilan. I'm 20. I build the things I wish existed.
            </p>
            <p>
              I grew up on Long Island and now I live in Tampa, where I'm a sophomore at the
              University of Tampa. I'm self-taught. Nobody told me I was allowed to start a
              company, so I started one anyway. Before any of the code, I co-founded the{" "}
              <a href="https://kochharfoundation.com" target="_blank" rel="noreferrer" className="text-bone underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                Kochhar Foundation
              </a>
              , a charity that has raised over $22,000. The instinct to build something
              real started long before I knew what a framework was.
            </p>
            <p>
              I got into this because I watched friends, smart, capable, hardworking friends,
              flounder trying to find their first real job out of college. Career centers were
              useless. LinkedIn was a popularity contest. The advice was either generic or
              gatekept. I figured someone should fix it. Then I figured: why not me.
            </p>
            <p>
              I design and code everything I ship. I don't outsource the parts I'm bad at. I
              just get less bad at them. The way to be the smartest person in the room is to be the
              one who actually built the thing.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-bone/5 px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-12">A Short History</p>
          <ul className="divide-y divide-bone/5 border-y border-bone/5">
            {timeline.map((row, i) => (
              <motion.li
                key={row.y}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-6 py-7 items-baseline"
              >
                <span className="col-span-3 md:col-span-2 tracking-wider text-bone/45">{row.y}</span>
                <span className="col-span-9 md:col-span-10 font-display text-2xl md:text-3xl text-balance">
                  {row.t}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="border-t border-bone/5 bg-ink px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-12">What I Believe</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
            {[
              "LinkedIn does not help you get a job. No one does.",
              "Speed is the only moat that compounds.",
              "If you can't ship it solo, you don't understand it yet.",
              "Career centers are the next industry to be replaced.",
              "Being 20 is an advantage, not a disclaimer.",
              "Design is the part of the code most engineers refuse to learn.",
            ].map((b, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="font-display text-2xl md:text-3xl text-balance leading-snug border-l-2 border-accent pl-5"
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
