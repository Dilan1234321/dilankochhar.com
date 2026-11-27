import Image from "next/image";
import EmailLink from "@/components/EmailLink";
import Skills from "@/components/Skills";
import { BOOKING_URL, EMAIL, GITHUB, dilly, software, websites, services, type Item } from "@/lib/content";

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      ↗
    </span>
  );
}

/** The Dilly logo, sized to sit inline with surrounding text. */
function DillyLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/dilly-logo.png"
      alt="Dilly"
      width={360}
      height={180}
      className={`inline-block h-[1.15em] w-auto align-[-0.3em] ${className}`}
    />
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

function Row({ item }: { item: Item }) {
  const host = item.url?.replace(/^https?:\/\//, "");
  return (
    <li className="border-b border-line last:border-0 py-5">
      <div className="grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-1">
        <div>
          <h3 className="font-medium text-ink">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                {item.name}
              </a>
            ) : (
              item.name
            )}
            <span className="ml-2 text-muted font-normal">{item.kind}</span>
          </h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-soft max-w-2xl">{item.blurb}</p>
        </div>
        <div className="text-sm text-muted sm:text-right whitespace-nowrap">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer" className="group text-ink hover:text-accent transition-colors">
              {host} <Arrow />
            </a>
          ) : (
            <span>{item.label ?? item.year}</span>
          )}
        </div>
      </div>
      <Skills skills={item.skills} className="mt-3" />
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
          Founder of{" "}
          <a href={dilly.url} target="_blank" rel="noreferrer" className="inline-block transition-opacity hover:opacity-80">
            <DillyLogo />
          </a>
          .
          I build websites, software, and AI systems, and manage CRMs that turn leads into customers.
        </p>
        <p className="mt-2 text-sm text-muted">Tampa, FL · New York, NY</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {BOOKING_URL ? (
            <>
              {/* With a booking link, the call is the primary action and email the secondary. */}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-3d btn-navy">
                Book a call
              </a>
              <EmailLink email={EMAIL} className="btn-3d btn-white">
                Get in touch
              </EmailLink>
            </>
          ) : (
            <>
              <EmailLink email={EMAIL} className="btn-3d btn-navy">
                Get in touch
              </EmailLink>
              <a href="#work" className="btn-3d btn-white">
                See my work
              </a>
            </>
          )}
        </div>
      </section>

      {/* Dilly */}
      <section className="pb-20">
        <div id="work" className="scroll-mt-24 rounded-3xl border border-line p-6 sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <a href={dilly.url} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80">
              <Image src="/dilly-logo.png" alt="Dilly" width={360} height={180} className="h-10 w-auto" />
            </a>
            <a href={dilly.url} target="_blank" rel="noreferrer" className="group text-sm text-ink hover:text-accent transition-colors">
              trydilly.com <Arrow />
            </a>
          </div>

          <h3 className="mt-8 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">{dilly.headline}</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-soft max-w-2xl">
            <DillyLogo /> {dilly.lead}
          </p>

          {/* Companions */}
          <ul className="mt-8 grid grid-cols-6 gap-2 sm:gap-4">
            {dilly.companions.map((c) => (
              <li key={c.name} className="flex flex-col items-center text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={c.name} width={96} height={96} loading="lazy" className="h-12 w-12 sm:h-20 sm:w-20 object-contain transition-transform hover:-translate-y-1" />
                <span className="mt-1.5 text-[11px] sm:text-xs text-muted">{c.name}</span>
              </li>
            ))}
          </ul>

          {/* How it works */}
          <ol className="mt-8 grid sm:grid-cols-3 gap-3">
            {dilly.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-[#F4F8FF] p-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1C6EF2] text-xs font-bold text-white">{i + 1}</span>
                <h4 className="mt-3 font-semibold text-ink">{step.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{step.text}</p>
              </li>
            ))}
          </ol>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
            {dilly.facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[13px] text-muted">{f.k}</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>

          <Skills skills={dilly.skills} className="mt-6" />

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={dilly.appStore} target="_blank" rel="noreferrer" className="btn-3d btn-dilly">
              <Image src="/dilly-app-icon.webp" alt="" width={96} height={96} className="h-7 w-7 rounded-lg ring-2 ring-white/70" />
              Get the app
            </a>
            <a href={dilly.url} target="_blank" rel="noreferrer" className="btn-3d btn-sky">Visit trydilly.com</a>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="pb-20">
        <SectionHead id="software" title="Software" note="Products, tools & agents" />
        <ul>{software.map((s) => <Row key={s.name} item={s} />)}</ul>
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
        {BOOKING_URL && (
          <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[15px] text-soft">Not sure what you need? Book a free intro call.</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-3d btn-navy shrink-0">
              Book a call
            </a>
          </div>
        )}
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
            <span className="text-ink">Kochhar Foundation</span>, a charity that has raised over $22,000 to bring technology education to students. Today I&apos;m
            building <DillyLogo />, which teaches kids how AI works instead of just chatting with it.
          </p>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="scroll-mt-24 border-t border-line py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s build something.</h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <EmailLink email={EMAIL} className="text-lg font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
            {EMAIL}
          </EmailLink>
          {BOOKING_URL && (
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-3d btn-white">
              Book a call
            </a>
          )}
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted">
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink transition-opacity hover:opacity-70">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href={dilly.url} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80"><DillyLogo /></a>
        </div>
        <p className="mt-12 text-xs text-muted">© {new Date().getFullYear()} Dilan Kochhar · University of Tampa</p>
      </footer>
    </div>
  );
}
