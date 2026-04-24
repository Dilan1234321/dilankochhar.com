import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-40">
      <div className="mx-auto max-w-[92rem] px-6 md:px-10">
        <div className="rule mb-14" />
        <div className="grid md:grid-cols-12 gap-10 pb-14">
          <div className="md:col-span-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-6">
              Colophon
            </p>
            <p className="font-display text-4xl md:text-5xl leading-[1.05] text-balance max-w-xl">
              A portfolio of websites, apps, and{" "}
              <span className="italic text-ochre">AI agents</span>.
              <br />
              Treated as art.
            </p>
            <p className="mt-6 text-inkSoft text-sm max-w-md leading-relaxed">
              Long Island → Tampa. Twenty years old. Self-taught. Every plate in this
              portfolio was designed, coded, and shipped by one pair of hands.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-5">
              Index
            </p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-ink hover:text-ochre transition-colors">Cover</Link></li>
              <li><Link href="/work" className="text-ink hover:text-ochre transition-colors">Work</Link></li>
              <li><Link href="/dilly" className="text-ink hover:text-ochre transition-colors">Dilly</Link></li>
              <li><Link href="/about" className="text-ink hover:text-ochre transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-ochre transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-5">
              Correspondence
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:ceo@hellodilly.com" className="text-ink hover:text-ochre transition-colors">
                  ceo@hellodilly.com
                </a>
              </li>
              <li>
                <a href="https://github.com/dilan1234321" target="_blank" rel="noreferrer" className="text-ink hover:text-ochre transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://hellodilly.com" target="_blank" rel="noreferrer" className="text-ink hover:text-ochre transition-colors">
                  hellodilly.com ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule" />
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-inkMuted">
          <p>Dilan Kochhar · Studio of One · {year}</p>
          <p>New York <span className="tick" />Tampa <span className="tick" />Miami</p>
          <p>Set in Fraunces &amp; Inter · Paper stock: 90#</p>
        </div>
      </div>
    </footer>
  );
}
