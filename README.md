# dilankochhar.com

Personal flagship site for Dilan Kochhar, founder of Dilly.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion**

## Pages
- `/` · Index (hero, stats, Dilly teaser, manifesto, work peek, CTA)
- `/dilly` · Founder memo for Dilly
- `/work` · Selected work (5 sites)
- `/about` · Origin, timeline, beliefs
- `/contact` · Channels (no form)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. Import on https://vercel.com/new
3. Add the custom domain `dilankochhar.com` in Project → Settings → Domains.
4. Done.

## What to edit before launch
- **Photo:** drop a JPG at `public/dilan.jpg` and replace the placeholder block in `app/about/page.tsx`.
- **Email:** currently `ceo@hellodilly.com`. Search & replace if you change it.
- **GitHub handle:** `dilan1234321`, same.
- **Manifesto pull-quote:** `app/page.tsx` → section "N° 003 · Manifesto".
- **Stats:** `app/page.tsx` → `stats` array.

## Notes on the design
- Color: ink (#07070A) + bone (#F5F1EA) + one accent (#FF5B1F).
- Type: Fraunces display serif + Inter sans + JetBrains Mono.
- Motion: moderate. Subtle hero parallax, layout-id nav underline, scroll fade-ins.
- Grain overlay + radial glow on hero sections give it the cinematic feel without
  hammering performance.
