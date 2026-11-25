import Image from "next/image";
import { EMAIL, GITHUB, dilly, software, websites, services, type Item } from "@/lib/content";

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      ↗
    </span>
  );
}

function SectionHead({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div id={id} className="scroll-mt-24 flex items-baseline justify-between gap-6 border-b border-line pb-4 mb-2">
      <h2 className="text-sm font-medium text-ink">{title}</h2>
      {note && <p className="text-sm text-muted">{note}</p>}
    </div>
  );
}

function Row({ item, showStack }: { item: Item; showStack?: boolean }) {
  const host = item.url?.replace(/^https?:\/\//, "");
  const inner = (
    <div className="grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-1 py-5">
      <div>
        <h3 className="font-medium text-ink">
          {item.name}
          <span className="ml-2 text-muted font-normal">{item.kind}</span>
        </h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-soft max-w-2xl">{item.blurb}</p>
        {showStack && item.stack && <p className="mt-2 text-[13px] text-muted">{item.stack}</p>}
      </div>
      <div className="text-sm text-muted sm:text-right whitespace-nowrap">
        {item.url ? (
          <span className="text-ink group-hover:text-accent transition-colors">
            {host} <Arrow />
          </span>
        ) : (
          <span>{item.label ?? item.year}</span>
        )}
      </div>
    </div>
  );
  return (
    <li className="border-b border-line last:border-0">
      {item.url ? (
        <a href={item.url} target="_blank" rel="noreferrer" className="group block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Nav */}
      <header className="flex items-center justify-between py-8">
        <a href="/" className="font-medium tracking-tight">Dilan Kochhar</a>
        <nav className="flex gap-6 text-sm text-soft">
          <a href="#work" className="hover:text-ink transition-colors">Work</a>
          <a href="#services" className="hidden sm:inline hover:text-ink transition-colors">Services</a>
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-12 pb-20 sm:pt-20 sm:pb-28 flex flex-col items-center text-center">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden ring-1 ring-line shadow-[0_8px_30px_rgba(10,10,11,0.08)]">
          <Image src="/headshot.jpg" alt="Dilan Kochhar" fill priority sizes="192px" className="object-cover" />
        </div>
        <h1 className="mt-8 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">Dilan Kochhar</h1>
        <p className="mt-4 text-lg text-soft max-w-xl text-balance leading-relaxed">
          Founder of <a href={dilly.url} className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent">Dilly</a>.
          I design and build websites, software, and AI systems, start to finish.
        </p>
        <p className="mt-2 text-sm text-muted">Tampa, FL · University of Tampa</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${EMAIL}`} className="rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors">
            Get in touch
          </a>
          <a href="#work" className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink hover:border-ink transition-colors">
            See my work
          </a>
        </div>
      </section>

      {/* Dilly */}
      <section className="pb-20">
        <SectionHead id="work" title="Building now" />
        <a href={dilly.url} target="_blank" rel="noreferrer" className="group mt-6 block rounded-2xl border border-line p-6 sm:p-8 hover:border-ink/30 transition-colors">
          <div className="flex items-center justify-between gap-4">
            <Image src="/dilly-wordmark.png" alt="Dilly" width={258} height={140} className="h-8 w-auto" />
            <span className="text-sm text-ink group-hover:text-accent transition-colors">hellodilly.com <Arrow /></span>
          </div>
          <p className="mt-5 text-[17px] leading-relaxed text-soft">{dilly.lead}</p>
          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
            {dilly.facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[13px] text-muted">{f.k}</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-[13px] text-muted">{dilly.stack}</p>
        </a>
      </section>

      {/* Software */}
      <section className="pb-20">
        <SectionHead id="software" title="Software" note="Products, tools & agents" />
        <ul>{software.map((s) => <Row key={s.name} item={s} showStack />)}</ul>
      </section>

      {/* Websites */}
      <section className="pb-20">
        <SectionHead id="websites" title="Websites" note="Designed & built for clients" />
        <ul>{websites.map((w) => <Row key={w.name} item={w} />)}</ul>
      </section>

      {/* Services */}
      <section className="pb-20">
        <SectionHead id="services" title="Work with me" />
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-line p-5">
              <h3 className="font-medium text-ink">{s.name}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{s.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-soft">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="pb-20">
        <SectionHead id="about" title="About" />
        <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-soft">
          <p>
            I&apos;m a student at the University of Tampa, originally from New York, and self-taught as an engineer.
            I design and code everything I ship, from the first sketch to the production deploy.
          </p>
          <p>
            Before software, I co-founded the{" "}
            <a href="https://kochharfoundation.com" target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
              Kochhar Foundation
            </a>
            , a charity that has raised over $22,000 to bring technology education to students. I started Dilly
            after watching capable friends struggle to land their first job out of college.
          </p>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="scroll-mt-24 border-t border-line py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s build something.</h2>
        <p className="mt-3 text-soft">I read every email myself and reply fast.</p>
        <a href={`mailto:${EMAIL}`} className="mt-6 inline-block text-lg font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
          {EMAIL}
        </a>
        <div className="mt-6 flex justify-center gap-6 text-sm text-muted">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
          <a href={dilly.url} target="_blank" rel="noreferrer" className="hover:text-ink">Dilly</a>
        </div>
        <p className="mt-12 text-xs text-muted">© {new Date().getFullYear()} Dilan Kochhar</p>
      </footer>
    </div>
  );
}
