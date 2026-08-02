/**
 * Cross-cutting craft narrative: first person, not a tag cloud.
 * Project-specific evidence lives in projects.ts.
 */

export type CraftPillar = {
  slug: string;
  title: string;
  lead: string;
  body: string;
  where: string[]; // project titles that prove it
};

export const craftIntro = {
  eyebrow: "Craft",
  headline: "I don't collect skills. I use them.",
  body: `Most portfolios list technologies like a grocery receipt. Mine are the tools that actually shipped: websites that book jobs, agents that send outreach, apps that talk to students at 1 a.m. Here's how I think about the work, then exactly where each skill showed up.`,
};

export const craftPillars: CraftPillar[] = [
  {
    slug: "product",
    title: "Product sense",
    lead: "I ship systems people live in, not pages they bounce off.",
    body: `Dilly isn't a landing page with a waitlist. It's a multi-vertical OS with auth, metering, voice, and three product skins. Client sites aren't brochures either: Erickson and Sigma exist to generate quotes; N+1 exists to generate hiring conversations. If it doesn't change what someone does next, I haven't finished.`,
    where: ["Dilly", "N+1 Talent", "Erickson Flooring", "Sigma Marble Studio"],
  },
  {
    slug: "ai-agents",
    title: "AI that does a job",
    lead: "I build agents with receipts: cron logs, drafts, scores. Not chat demos.",
    body: `On Dilly, models audit resumes, match jobs with embeddings, coach interviews, and extract memory under anti-hallucination rules. On N+1, a Python prospector scans live ATS boards, scores hiring urgency, and writes cold email drafts on a weekly GitHub Action. The skill isn't "I called an API." It's wiring models into a loop that survives Monday morning.`,
    where: ["Dilly", "N+1 Talent"],
  },
  {
    slug: "full-stack",
    title: "Full-stack engineering",
    lead: "Mobile, API, web, cron, payments. I own the whole path.",
    body: `Expo and React Native on the phone. FastAPI and Postgres on the server. Next.js when the surface wants motion and routes. Static HTML when a client needs speed and SEO without a framework tax. Stripe when money moves. Docker and Railway when it has to stay up. I pick the stack that fits the job, then I build every layer myself.`,
    where: ["Dilly", "Sigma Marble Studio", "N+1 Talent", "Atlas Portfolio"],
  },
  {
    slug: "growth",
    title: "Growth & discovery",
    lead: "A beautiful site that nobody finds is a hobby.",
    body: `Programmatic SEO on N+1 (fifty-plus state and role pages from Python generators). Schema, sitemaps, llms.txt for AI search. Quote funnels and FormSubmit/Web3Forms/Formspree on every client site that needs leads. I treat discoverability and conversion as engineering, not afterthoughts.`,
    where: ["N+1 Talent", "Erickson Flooring", "UTampa AKPSI", "Sigma Marble Studio"],
  },
  {
    slug: "design",
    title: "Design as code",
    lead: "I don't hand off the hard visual decisions.",
    body: `Typography, motion, photography direction, brand systems: I design them in the same pass as the markup. Taken Time is a quiet studio. Sigma is motion-forward commercial stone. This portfolio is engineered monochrome with one working blue. If the first viewport could belong to someone else, the branding failed. I treat that as a bug.`,
    where: ["Taken Time to Design", "Sigma Marble Studio", "Atlas Portfolio", "UTampa AKPSI"],
  },
];

export const howIWork = [
  {
    title: "Solo by default",
    text: "No design handoff. No waiting on a backend person. If I can't ship it alone, I don't understand it yet, so I learn until I do.",
  },
  {
    title: "Evidence over adjectives",
    text: "Every skill on this site maps to something live: a cron job, a Stripe webhook, a quote form that hits someone's inbox, a model that scores a resume.",
  },
  {
    title: "Taste is a skill",
    text: "Speed without taste is spam. Taste without shipping is a moodboard. I practice both on the same project until it feels inevitable.",
  },
];
