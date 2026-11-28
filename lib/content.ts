import type { SkillKey } from "./skills";

export const EMAIL = "dilan@hellodilly.com";
export const GITHUB = "https://github.com/dilan1234321";
export const LINKEDIN = "https://www.linkedin.com/in/dilan-k";

/**
 * Shown as a tag in the hero. Works itself out: before the 15th it names next month,
 * from the 15th on it names the month after. The home page revalidates daily so it stays current.
 * To pin a month by hand, replace this with a plain string.
 */
function nextOpening(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "numeric", day: "numeric" })
    .formatToParts(now)
    .reduce<Record<string, number>>((acc, p) => (p.type === "literal" ? acc : { ...acc, [p.type]: Number(p.value) }), {});
  const ahead = parts.day >= 15 ? 2 : 1;
  const target = new Date(Date.UTC(parts.year, parts.month - 1 + ahead, 1));
  return target.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
}

export const AVAILABILITY = `Booking new projects for ${nextOpening()}`;

// Public link for a free 15-minute intro call (e.g. a Calendly or Cal.com event page).
// Leave as null to hide every "Book a call" button; set it to the URL to show them.
export const BOOKING_URL: string | null = "https://calendly.com/dilankochhar";

export type Item = {
  name: string;
  kind: string;
  year: string;
  blurb: string;
  skills: SkillKey[];
  url?: string;
  label?: string;
};

export const dilly = {
  url: "https://trydilly.com",
  appStore: "https://apps.apple.com/us/app/id6817830445",
  headline: "AI-smart, not AI-dependent.",
  lead:
    "is a learning app for kids ages 7 to 11. Each child trains their own companion, then builds things with what it learned, and finds out how AI works by making it. I founded it, designed it, and built it end to end.",
  // Companion art is self-hosted so it never depends on another site being up.
  companions: [
    { name: "Pip", src: "/companions/pip-happy.webp" },
    { name: "Mochi", src: "/companions/mochi-happy.webp" },
    { name: "Fern", src: "/companions/fern-happy.webp" },
    { name: "Nova", src: "/companions/nova-happy.webp" },
    { name: "Pebble", src: "/companions/pebble-happy.webp" },
    { name: "Wisp", src: "/companions/wisp-happy.webp" },
  ],
  steps: [
    {
      title: "Pick a companion",
      text: "Six friends to choose from. Each one starts out able to do nothing. It's a learner, not a know-it-all.",
    },
    {
      title: "Teach it",
      text: "Kids spot what went wrong, pick the rule that fixes it, and test again. No typing, just prepared choices.",
    },
    {
      title: "Build with it",
      text: "Every skill becomes a puzzle piece. In the Workshop, pieces snap together into games, codes, and robot repairs.",
    },
  ],
  skills: [
    "productDesign", "learningDesign", "expo", "reactNative", "ts", "swift",
    "fastapi", "python", "postgres", "jwt", "railway", "appStore",
  ] as SkillKey[],
  facts: [
    { k: "Ages", v: "7 to 11" },
    { k: "Platform", v: "iPhone & iPad" },
  ],
};

export const software: Item[] = [
  {
    name: "Sage",
    skills: ["next", "ts", "postgres", "drizzle", "claude", "aiSdk", "stripe", "sentry", "tailwind", "zod", "vercel", "productDesign"],
    kind: "Agency operating system",
    year: "2026",
    blurb:
      "A full operating system for social media agencies: strategy, weekly planning, content calendar, shoots, client approvals, and analytics in one place.",
    label: "In development",
  },
  {
    name: "LeaseLogic AI",
    skills: ["python", "machineLearning", "xgboost", "sklearn", "pandas", "numpy", "fastapi"],
    kind: "Machine learning service",
    year: "2026",
    blurb:
      "A lead-scoring model that predicts how likely a prospective tenant is to sign a lease, served as an API so leasing agents get an instant confidence score.",
  },
  {
    name: "Kochhar Foundation Learning Hub",
    skills: ["next", "ts", "tailwind", "lucide", "vercel", "learningDesign"],
    kind: "Education platform",
    year: "2026",
    blurb:
      "Free, curated K–12 learning resources by grade and subject. Built for a computer classroom in Delhi, India, with no accounts, payments, or tracking.",
  },
];

export const websites: Item[] = [
  {
    name: "Wine & Shine Co",
    skills: ["shopify", "liquid", "wholesale", "klaviyo", "ecommerce"],
    kind: "Shopify store",
    year: "2026",
    blurb:
      "Shopify store with a wholesale portal: retailers apply, get approved, sign in with a one-time code, and order by the case at partner pricing.",
    url: "https://wineandshineco.com",
  },
  {
    name: "N+1 Talent",
    skills: [
      "html", "css", "js", "three", "programmaticSeo", "aeo", "structuredData", "web3forms", "vercel",
      "python", "githubActions", "greenhouse", "automation",
    ],
    kind: "Recruiting firm",
    year: "2026",
    blurb:
      "Discovery-first site with AI search readiness and a Three.js hero, backed by Python generators that publish fifty-plus state and role pages from templates, plus a prospector that scans Greenhouse, Lever, and Ashby weekly and drafts outreach.",
    url: "https://nplus1talent.com",
  },
  {
    name: "Erickson Flooring",
    skills: ["html", "css", "js", "formsubmit", "leadGen", "seo", "vercel"],
    kind: "Local business",
    year: "2026",
    blurb: "A high-end marketing site built to turn visitors into quote requests.",
    url: "https://erickson-flooring.com",
  },
  {
    name: "Taken Time to Design",
    skills: ["html", "css", "js", "brandDesign", "vercel"],
    kind: "Artist studio",
    year: "2026",
    blurb: "Gallery and commission site for an artist, designed brand-first.",
    url: "https://takentimetodesign.com",
  },
  {
    name: "Nomi Bar",
    skills: ["html", "css", "js", "brandDesign", "vercel"],
    kind: "Restaurant & bar",
    year: "2026",
    blurb: "Custom site with menu, story, and visit pages.",
    url: "https://nomibar.com",
  },
  {
    name: "Mu Epsilon Delta",
    skills: ["next", "ts", "tailwind"],
    kind: "Medical fraternity",
    year: "2026",
    blurb: "Institution-grade chapter site with leadership, events, and rush forms.",
    url: "https://utampamed.com",
  },
  {
    name: "UTampa AKPsi",
    skills: ["html", "css", "js", "formspree", "vercel"],
    kind: "Business fraternity",
    year: "2025",
    blurb: "Nine-page chapter site with directories, sponsorships, and donations.",
    url: "https://utampaakpsi.com",
  },
  {
    name: "Kochhar Foundation",
    skills: ["wordpress", "fundraising", "brandDesign"],
    kind: "Nonprofit · co-founder",
    year: "2023",
    blurb: "The public site for the charity I co-founded, which has raised over $22K.",
  },
];

export const services = [
  {
    name: "Websites",
    price: "One-time build from $1,000",
    detail: "Designed and coded by me, start to finish, and yours to keep. Apps and AI agents are quoted per project.",
  },
  {
    name: "CRM Management",
    price: "From $1,500/mo",
    detail:
      "I build and run your CRM: pipelines, automations, follow-ups, and reporting, so every lead gets worked and nothing slips through the cracks.",
  },
  {
    name: "Website care",
    price: "From $45/mo",
    detail: "Security $45, maintenance $80, or both as Full Care for $100 a month.",
  },
];
