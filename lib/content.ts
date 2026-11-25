export const EMAIL = "ceo@hellodilly.com";
export const GITHUB = "https://github.com/dilan1234321";

export type Item = {
  name: string;
  kind: string;
  year: string;
  blurb: string;
  stack?: string;
  url?: string;
  label?: string;
};

export const dilly = {
  url: "https://hellodilly.com",
  lead:
    "Dilly is the daily workbench that keeps college students ahead of AI: a living profile, one clear move a day, and a resume built only from real facts. I founded it, designed it, and wrote it end to end.",
  facts: [
    { k: "Status", v: "Live on the App Store" },
    { k: "Jobs in feed", v: "50K+" },
    { k: "Builds shipped", v: "1,100+" },
  ],
  stack: "Expo · React Native · FastAPI · PostgreSQL · Claude & GPT · Stripe",
};

export const software: Item[] = [
  {
    name: "Sage",
    kind: "Agency operating system",
    year: "2026",
    blurb:
      "A full operating system for social media agencies: strategy, weekly planning, content calendar, shoots, client approvals, and analytics in one place.",
    stack: "Next.js · TypeScript · PostgreSQL",
    label: "In development",
  },
  {
    name: "N+1 Talent engine",
    kind: "SEO generator + outbound agent",
    year: "2026",
    blurb:
      "Python generators that publish fifty-plus state and role pages from templates, plus a prospector that scans Greenhouse, Lever, and Ashby weekly and drafts outreach.",
    stack: "Python · GitHub Actions · JSON-LD",
    url: "https://nplus1talent.com",
  },
  {
    name: "LeaseLogic AI",
    kind: "Machine learning service",
    year: "2026",
    blurb:
      "A lead-scoring model that predicts how likely a prospective tenant is to sign a lease, served as an API so leasing agents get an instant confidence score.",
    stack: "Python · XGBoost · FastAPI",
  },
  {
    name: "Kochhar Foundation Learning Hub",
    kind: "Education platform",
    year: "2026",
    blurb:
      "Free, curated K–12 learning resources by grade and subject. Built for a computer classroom in Delhi, India, with no accounts, payments, or tracking.",
    stack: "Next.js · TypeScript · Tailwind",
  },
];

export const websites: Item[] = [
  {
    name: "N+1 Talent",
    kind: "Recruiting firm",
    year: "2026",
    blurb: "Discovery-first site with programmatic SEO, AI search readiness, and a Three.js hero.",
    url: "https://nplus1talent.com",
  },
  {
    name: "Sigma Marble Studio",
    kind: "Stone & tile",
    year: "2026",
    blurb: "Next.js rebuild with a full motion system and a live map of installed projects.",
    url: "https://sigmamarble.vercel.app",
  },
  {
    name: "Erickson Flooring",
    kind: "Local business",
    year: "2026",
    blurb: "A high-end marketing site built to turn visitors into quote requests.",
    url: "https://erickson-flooring.com",
  },
  {
    name: "Taken Time to Design",
    kind: "Artist studio",
    year: "2026",
    blurb: "Gallery and commission site for an artist, designed brand-first.",
    url: "https://takentimetodesign.com",
  },
  {
    name: "Nomi Bar",
    kind: "Restaurant & bar",
    year: "2026",
    blurb: "Custom site with menu, story, and visit pages.",
  },
  {
    name: "Mu Epsilon Delta",
    kind: "Medical fraternity",
    year: "2026",
    blurb: "Institution-grade chapter site with leadership, events, and rush forms.",
  },
  {
    name: "UTampa AKPsi",
    kind: "Business fraternity",
    year: "2025",
    blurb: "Nine-page chapter site with directories, sponsorships, and donations.",
    url: "https://utampaakpsi.com",
  },
  {
    name: "Kochhar Foundation",
    kind: "Nonprofit · co-founder",
    year: "2023",
    blurb: "The public site for the charity I co-founded, which has raised over $22K.",
    url: "https://kochharfoundation.com",
  },
];

export const services = [
  {
    name: "Websites",
    price: "From $100/mo",
    detail: "Designed and built by me, start to finish. Apps and AI agents are quoted per project.",
  },
  {
    name: "Search & AI Visibility",
    price: "$500/mo",
    detail: "Technical SEO, structured data, and AEO so you show up on Google and in ChatGPT answers.",
  },
  {
    name: "Website care",
    price: "From $45/mo",
    detail: "Security $45, maintenance $80, or both as Full Care for $100 a month.",
  },
];
