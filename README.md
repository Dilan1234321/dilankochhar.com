# dilankochhar.com

Personal site for Dilan Kochhar. One page: hero with headshot, Dilly, software, websites, services, about, contact.

Stack: Next.js 14 (App Router) · TypeScript · Tailwind

## Edit content
Everything you'd want to change lives in `lib/content.ts` (projects, services, email).
Headshot: `public/headshot.jpg` (square crop, shown in a circle).

Old routes (`/work`, `/dilly`, `/services`, `/about`, `/contact`) redirect to sections on `/` via `next.config.js`.

## Run locally
```bash
npm install
npm run dev
```
