import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-bone/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-display text-3xl md:text-4xl text-balance leading-tight">
            Building the things <span className="text-accent">colleges should have built years ago.</span>
          </p>
          <p className="mt-4 text-bone/50 text-sm max-w-md">
            Long Island → Tampa. 20 years old. Self-taught. Currently building Dilly out of a dorm room.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-4">Site</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-bone/80 hover:text-accent transition-colors">Index</Link></li>
            <li><Link href="/dilly" className="text-bone/80 hover:text-accent transition-colors">Dilly</Link></li>
            <li><Link href="/work" className="text-bone/80 hover:text-accent transition-colors">Work</Link></li>
            <li><Link href="/about" className="text-bone/80 hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-bone/80 hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:ceo@hellodilly.com" className="text-bone/80 hover:text-accent transition-colors">
                ceo@hellodilly.com
              </a>
            </li>
            <li>
              <a href="https://github.com/dilan1234321" target="_blank" rel="noreferrer" className="text-bone/80 hover:text-accent transition-colors">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href="https://hellodilly.com" target="_blank" rel="noreferrer" className="text-bone/80 hover:text-accent transition-colors">
                hellodilly.com ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-bone/40">
          <p>© {new Date().getFullYear()} Dilan Kochhar. Designed and coded in one sitting.</p>
          <p className="tracking-wider">v1.0 · Tampa, FL</p>
        </div>
      </div>
    </footer>
  );
}
