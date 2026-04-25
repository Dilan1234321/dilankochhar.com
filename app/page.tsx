"use client";

import Link from "next/link";
import Image from "next/image";

const peek = [
  { title: "Dilly",             tag: "SaaS · AI",      year: "2026", href: "/work", bg: "#252B46" },
  { title: "Engineers in AI",   tag: "Website · AI Agent",  year: "2026", href: "/work", bg: "#1C1F2B" },
  { title: "Taken Time",        tag: "Studio",         year: "2026", href: "/work", bg: "#B86A2E" },
  { title: "Erickson Flooring", tag: "Marketing",      year: "2026", href: "/work", bg: "#4F533A" },
];

export default function Home() {
  return (
    <>
      {/* FULL-BLEED HERO IMAGE */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <Image
          src="/dilan.jpg"
          alt="Dilan Kochhar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-24">
          <div className="mx-auto max-w-[92rem] w-full">
            <h1 className="font-display text-white text-[14vw] md:text-[9rem] leading-[0.88] tracking-tight">
              Dilan Kochhar
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-white/85 leading-snug">
              I build websites, apps, and AI agents. Solo. Out of a dorm room in Tampa.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-paperHi transition-colors"
              >
                See the work
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/dilly"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 text-white px-6 py-3 text-sm hover:border-white hover:bg-white/10 transition"
              >
                About Dilly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">About</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-balance max-w-3xl">
              I'm twenty. I taught myself to code. I design and ship everything with my name
              on it — from a single landing page to a full SaaS platform.
            </p>
            <p className="mt-8 text-lg text-ink/65 max-w-2xl leading-relaxed">
              Right now I'm building <Link href="/dilly" className="underline decoration-ochre underline-offset-4 hover:text-ochre">Dilly</Link>,
              a career platform for college students. Before that, a charity that raised $22K.
              In between: six client sites.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK PEEK */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-4xl md:text-6xl">Selected work</h2>
            <Link href="/work" className="text-sm text-ink/60 hover:text-ochre transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {peek.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="tile aspect-[3/4] group"
                style={{ background: w.bg }}
              >
                <div className="absolute inset-0 flex items-end p-5 md:p-6">
                  <div>
                    <p className="font-display text-white text-2xl md:text-3xl leading-none">
                      {w.title}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-white/60">
                      {w.tag} · {w.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[92rem] border-t hairline pt-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
            Have something you'd want me to build?
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
              Other ways to reach me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
