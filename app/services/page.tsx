import type { Metadata } from "next";
import Link from "next/link";
import { retainer, builds, care, steps, faq, RETAINER_PRICE, CARE_BUNDLE_PRICE } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services: SEO & AEO, care plans, and full builds",
  description: `SEO and AEO retainer for $${RETAINER_PRICE}/month, website security and maintenance care plans from $${CARE_BUNDLE_PRICE}/month, and full websites from $100/month. One person, no agency overhead.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Dilan Kochhar",
    description: `Search & AI Visibility retainer $${RETAINER_PRICE}/month. Site care from $${CARE_BUNDLE_PRICE}/month. Websites from $100/month.`,
    url: "/services",
  },
};

const careJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Care Plans (Security & Maintenance)",
  serviceType: "Website security, maintenance, and support",
  description:
    "Monthly website care: security updates, backups, uptime monitoring, bug fixes, and content changes. Security $45/month, maintenance $80/month, or both as Full Care for $100/month.",
  provider: { "@type": "Person", name: "Dilan Kochhar", url: "https://dilankochhar.com" },
  areaServed: "United States",
  offers: [
    { "@type": "Offer", name: "Security", priceCurrency: "USD", price: "45" },
    { "@type": "Offer", name: "Maintenance", priceCurrency: "USD", price: "80" },
    { "@type": "Offer", name: "Full Care", priceCurrency: "USD", price: CARE_BUNDLE_PRICE.toString() },
  ],
};

const buildsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website, App & AI Agent Builds",
  serviceType: "Web development",
  description: "Full website builds from $100/month; apps and AI agents scoped per project.",
  provider: { "@type": "Person", name: "Dilan Kochhar", url: "https://dilankochhar.com" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: 100,
      priceCurrency: "USD",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search & AI Visibility Retainer",
  serviceType: "SEO and AEO (AI search optimization)",
  description:
    "Monthly retainer covering technical SEO, on-page optimization, structured data, AI search optimization (AEO), and plain-English monthly reporting.",
  provider: {
    "@type": "Person",
    name: "Dilan Kochhar",
    url: "https://dilankochhar.com",
  },
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: RETAINER_PRICE.toString(),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: RETAINER_PRICE.toString(),
      priceCurrency: "USD",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildsJsonLd) }}
      />

      {/* Header */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Services</p>
            <h1 className="font-display text-4xl md:text-6xl tracking-tight">
              Hire me.
            </h1>
          </div>
          <p className="md:col-span-4 text-lg text-ink/60 leading-relaxed md:text-right">
            Growth, care, and full builds. All of it done by one person, the one
            whose name is on this site.
          </p>
        </div>
      </section>

      {/* Retainer */}
      <section id="retainer" className="scroll-mt-28 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[88rem]">
          <div className="border hairline">
            <div className="grid md:grid-cols-12">
              {/* Offer panel */}
              <div className="md:col-span-5 bg-ink text-paper p-8 md:p-14 flex flex-col justify-between gap-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper/50">
                    {retainer.eyebrow}
                  </p>
                  <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] text-balance">
                    {retainer.name}
                  </h2>
                  <p className="mt-8 font-display text-5xl md:text-6xl text-accentBright tabular-nums">
                    {retainer.price}
                  </p>
                  <p className="mt-8 text-lg text-paper/70 leading-relaxed">{retainer.lead}</p>
                </div>
                <div>
                  <a
                    href={`mailto:ceo@hellodilly.com?subject=${encodeURIComponent("Search & AI Visibility retainer")}`}
                    className="inline-flex items-center gap-3 rounded-md bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-accent hover:text-paper transition-colors"
                  >
                    Start with an email <span aria-hidden>→</span>
                  </a>
                  <p className="mt-5 text-sm text-paper/50 leading-relaxed">{retainer.honesty}</p>
                </div>
              </div>

              {/* What's included */}
              <div className="md:col-span-7 p-8 md:p-14">
                <p className="text-xs uppercase tracking-widest text-ink/50">
                  What the month buys
                </p>
                <ul className="mt-6 divide-y divide-ink/10">
                  {retainer.includes.map((item, i) => (
                    <li key={item.name} className="py-6 grid md:grid-cols-12 gap-3 md:gap-8">
                      <div className="md:col-span-4 flex items-baseline gap-4">
                        <span className="text-xs tabular-nums text-ink/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-ink">{item.name}</h3>
                      </div>
                      <p className="md:col-span-8 text-ink/60 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t hairline pt-8 text-ink/60 leading-relaxed">
                  <span className="text-ink font-medium">Already running in the wild: </span>
                  {retainer.evidence}{" "}
                  <Link
                    href="/work#n-plus-one"
                    className="underline decoration-accent underline-offset-4 hover:text-accent"
                  >
                    See the build →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care plans */}
      <section id="care" className="scroll-mt-28 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
            <div className="md:col-span-7">
              <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">
                {care.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">{care.name}</h2>
            </div>
            <p className="md:col-span-5 text-ink/60 leading-relaxed md:text-right">{care.lead}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {care.items.map((item) => (
              <div key={item.name} className="case-card p-7 md:p-9">
                <h3 className="font-display text-2xl tracking-tight text-ink">{item.name}</h3>
                <p className="mt-4 font-display text-3xl md:text-4xl text-ink tabular-nums">
                  {item.price}
                </p>
                <p className="mt-5 text-ink/60 leading-relaxed">{item.detail}</p>
              </div>
            ))}
            <div className="relative border border-accent bg-ink text-paper p-7 md:p-9">
              <p className="absolute top-0 right-0 bg-accent text-paper px-3 py-1 font-medium text-[10px] uppercase tracking-[0.2em]">
                Best value
              </p>
              <h3 className="font-display text-2xl tracking-tight">{care.bundle.name}</h3>
              <p className="mt-4 font-display text-3xl md:text-4xl text-accentBright tabular-nums">
                {care.bundle.price}
              </p>
              <p className="mt-5 text-paper/65 leading-relaxed">{care.bundle.detail}</p>
              <a
                href={`mailto:ceo@hellodilly.com?subject=${encodeURIComponent("Full Care plan")}`}
                className="inline-flex items-center gap-2 mt-6 text-sm text-paper/80 hover:text-accentBright transition-colors"
              >
                Start Full Care <span aria-hidden className="arrow-shift">→</span>
              </a>
            </div>
          </div>
          <p className="mt-8 text-ink/60 leading-relaxed max-w-3xl">{care.note}</p>
        </div>
      </section>

      {/* Project builds */}
      <section id="builds" className="scroll-mt-28 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">{builds.eyebrow}</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95] text-balance">
              {builds.name}
            </h2>
            <p className="mt-6 font-display text-2xl text-accent">{builds.price}</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">
              {builds.lead}
            </p>
            <ul className="mt-8 divide-y divide-ink/10 border-y hairline">
              {builds.items.map((item) => (
                <li key={item} className="py-5 text-ink/70 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 mt-8 text-sm text-ink/70 hover:text-accent transition-colors"
            >
              Every claim above is on the work page <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs uppercase tracking-widest text-paper/50 mb-14">How it works</p>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-paper/20 pt-8">
                <p className="text-xs tabular-nums text-paper/40">{s.n}</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-5 text-paper/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-24">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">Straight answers</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95]">Questions.</h2>
          </div>
          <div className="md:col-span-8 divide-y divide-ink/10 border-y hairline">
            {faq.map((f) => (
              <div key={f.q} className="py-8">
                <h3 className="font-display text-2xl md:text-3xl text-ink">{f.q}</h3>
                <p className="mt-4 text-ink/65 leading-relaxed max-w-2xl">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[88rem] border-t hairline pt-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
            Ready when you are.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:ceo@hellodilly.com?subject=${encodeURIComponent("Working together")}`}
              className="inline-flex items-center gap-3 rounded-md bg-ink text-paper px-6 py-3 text-sm hover:bg-accent transition-colors"
            >
              ceo@hellodilly.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border border-ink/30 px-6 py-3 text-sm text-ink/80 hover:border-ink hover:text-ink transition"
            >
              Other ways to reach me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
