"use client";

import Image from "next/image";

const timeline = [
  { y: "2005", t: "Born on Long Island, NY." },
  { y: "School", t: "First learned to code. Didn't think much of it at the time." },
  { y: "2022", t: "Started getting actually good at web development." },
  { y: "2025", t: "Shipped utampaakpsi.com. First real project with my name on it." },
  { y: "2026", t: "Launched an informal agency for Tampa Bay startups." },
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
      {/* Header */}
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-12">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50">About</p>
          <h1 className="mt-6 font-display text-[14vw] md:text-[11rem] leading-[0.88] tracking-tight">
            About.
          </h1>
        </div>
      </section>

      {/* Portrait + copy */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink/10">
              <Image
                src="/dilan.jpg"
                alt="Dilan Kochhar"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg md:text-xl text-ink/70 leading-relaxed">
            <p className="text-2xl md:text-3xl font-display text-ink leading-snug">
              I'm Dilan. I'm 20. I build the things I wish existed.
            </p>
            <p>
              I grew up on Long Island and live in Tampa, a sophomore at the University of
              Tampa. Self-taught. Nobody told me I was allowed to start a company, so I
              started one anyway. Before the code, I co-founded the{" "}
              <a
                href="https://kochharfoundation.com"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-ochre decoration-2 underline-offset-4 hover:text-ochre"
              >
                Kochhar Foundation
              </a>
              , a charity that has raised over $22,000.
            </p>
            <p>
              I got into this because I watched friends — smart, capable, hardworking friends
              — flounder trying to find their first real job out of college. Career centers
              were useless. LinkedIn was a popularity contest. I figured someone should fix
              it. Then I figured: why not me.
            </p>
            <p>
              I design and code everything I ship. I don't outsource the parts I'm bad at. I
              just get less bad at them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t hairline px-6 md:px-10 py-24">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-10">A short history</p>
          <ul className="divide-y divide-ink/10 border-y hairline">
            {timeline.map((row, i) => (
              <li key={i} className="grid grid-cols-12 gap-6 py-6 items-baseline">
                <span className="col-span-3 md:col-span-2 text-sm text-ink/50 tabular-nums">{row.y}</span>
                <span className="col-span-9 md:col-span-10 font-display text-xl md:text-2xl text-balance">
                  {row.t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-paper/50 mb-10">What I believe</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
            {beliefs.map((b, i) => (
              <p key={i} className="font-display text-2xl md:text-3xl text-balance leading-snug border-l-2 border-ochre pl-5">
                {b}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
