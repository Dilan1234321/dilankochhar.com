"use client";

const channels = [
  {
    label: "Email",
    value: "ceo@hellodilly.com",
    href: "mailto:ceo@hellodilly.com",
    note: "Fastest. I read everything. I respond to anything interesting.",
  },
  {
    label: "GitHub",
    value: "@dilan1234321",
    href: "https://github.com/dilan1234321",
    note: "Where the receipts live.",
  },
  {
    label: "Dilly",
    value: "hellodilly.com",
    href: "https://hellodilly.com",
    note: "If you want to know what I'm actually doing all day.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-12">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50">Contact</p>
          <h1 className="mt-6 font-display text-[14vw] md:text-[11rem] leading-[0.88] tracking-tight">
            Say hi.
          </h1>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl text-ink/70 leading-relaxed">
            No form. No autoresponder. If you write me, I read it. If it's good, I write
            back fast.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <ul className="divide-y divide-ink/10 border-y hairline">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 items-baseline hover:bg-paperHi/60 transition-colors px-3 -mx-3"
                >
                  <span className="col-span-12 md:col-span-2 text-xs uppercase tracking-widest text-ink/50">
                    {c.label}
                  </span>
                  <span className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl text-ink group-hover:text-ochre transition-colors break-words">
                    {c.value}
                  </span>
                  <span className="col-span-11 md:col-span-3 text-ink/60 text-sm">{c.note}</span>
                  <span className="col-span-1 text-right text-ink/40 group-hover:text-ochre transition-colors text-2xl">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t hairline px-6 md:px-10 py-24">
        <div className="mx-auto max-w-[92rem]">
          <p className="font-display text-3xl md:text-6xl leading-[1.1] text-balance max-w-5xl">
            If you're building something hard, something nobody else thinks will work —
            write me first.
          </p>
        </div>
      </section>
    </>
  );
}
