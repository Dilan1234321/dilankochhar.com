export type Skill = {
  name: string;
  used: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  url: string;
  href: string | null;
  tag: string;
  bg: string;
  image?: string;
  aspect: string;
  stack: string;
  /** Longer narrative: how the craft came together on this project */
  summary: string;
  skills: Skill[];
};

export const projects: Project[] = [
  {
    slug: "dilly",
    title: "Dilly",
    role: "Founder · Engineer · Designer",
    year: "2026",
    url: "hellodilly.com",
    href: "https://hellodilly.com",
    tag: "SaaS · AI",
    bg: "#252B46",
    aspect: "aspect-[4/5]",
    stack: "Expo · React Native · FastAPI · PostgreSQL · Claude / GPT · Stripe",
    summary:
      "This is the hardest thing I've built. Dilly is a career OS for students, not a chatbot bolted onto a landing page. One mobile app holds three product skins (career, college admissions, pre-med), a voice coach, job matching, Stripe paywalls, and a FastAPI brain on Postgres. I founded it, designed it, and wrote the code end to end. Every skill below had to work at 2 a.m. when a sophomore actually opens the app.",
    skills: [
      {
        name: "Product architecture",
        used: "I designed three products that share one spine (auth, metering, AI, and profile facts) so career, admissions, and medical don't become three separate codebases. The skill was knowing what to share and what to isolate before the complexity ate me.",
      },
      {
        name: "Expo / React Native",
        used: "I shipped the client in Expo Router: push notifications, on-device speech-to-text, calendar and contacts, share-card capture, Reanimated motion. Native enough to feel like a real app; fast enough that I can still ship weekly from a dorm.",
      },
      {
        name: "FastAPI + PostgreSQL",
        used: "The backend is a large FastAPI surface on AWS RDS: resume parsing, ATS scoring, internship crawl ingest, cron jobs, SSE streaming. I treat the API as the product: if the route isn't trustworthy, the AI is just theater.",
      },
      {
        name: "LLM systems",
        used: "Claude and GPT dual-route depending on the job. Embeddings match students to roles. A voice agent detects intents and runs tools. Memory extraction, interview feedback, and output safety keep the coach useful without inventing a student's life. The skill is the system around the model.",
      },
      {
        name: "Auth & payments",
        used: "Email OTP, magic links, Sign in with Apple and Google, Stripe subscriptions with webhook idempotency, Moves-based metering, even Apple Wallet passes. Monetization and identity aren't afterthoughts. They're product features I own.",
      },
      {
        name: "Ops & infra",
        used: "Docker on Railway, Sentry when things break, GitHub Actions for crawlers and health, a Next.js recruiter dashboard, Resend for mail. Founder engineering means the night shift is also mine.",
      },
    ],
  },
  {
    slug: "n-plus-one",
    title: "N+1 Talent",
    role: "Full build + inbound engine",
    year: "2026",
    url: "nplus1talent.com",
    href: "https://nplus1talent.com",
    tag: "Recruiting",
    bg: "#1F3D2B",
    aspect: "aspect-[4/3]",
    stack: "Static HTML · Python generators · Three.js · Web3Forms · GitHub Actions",
    summary:
      "N+1 is a recruiting firm that lives or dies on inbound and trust. I built the full site as a discovery engine: Python generators stamp out state and role pages, schema and llms.txt speak to Google and ChatGPT, a Three.js hero sets the brand, and a prospector script hunts ATS boards for outbound. Skills here are SEO, automation, and making a static site feel like software.",
    skills: [
      {
        name: "Programmatic SEO",
        used: "I wrote Python generators that emit fifty-plus state pages, role pages, a salary guide, and an insights hub from templates. One codebase, a whole keyword map, so the firm shows up when someone searches how to hire AI talent in Texas, not just \"N+1.\"",
      },
      {
        name: "GEO / AI discoverability",
        used: "llms.txt, Organization and FAQ JSON-LD, careful canonicals. I treat ChatGPT and AI Overviews as channels the same way I treat Google. If models cite you, you win deals you never bid on.",
      },
      {
        name: "Three.js",
        used: "A WebGL data-hall flythrough on the homepage. Motion as brand signal: this is a technical recruiting firm, not a stock-photo agency. I kept it fast enough that SEO and feel don't fight.",
      },
      {
        name: "Lead intake",
        used: "Web3Forms for hire inquiries with a mailto fallback so a broken third party never kills the funnel. Unsexy. Essential.",
      },
      {
        name: "Outbound research automation",
        used: "prospector.py scans Greenhouse, Lever, and Ashby, scores hiring urgency, and dumps CSV plus cold-email drafts on a weekly GitHub Action. Research that used to take an afternoon now runs while I sleep.",
      },
    ],
  },
  {
    slug: "utampa-akpsi",
    title: "UTampa AKPSI",
    role: "Lead Developer",
    year: "2025",
    url: "utampaakpsi.com",
    href: "https://utampaakpsi.com",
    tag: "Organization site",
    bg: "#002868",
    aspect: "aspect-[4/3]",
    stack: "Static HTML · CSS · Vanilla JS · Formspree · BillHighway",
    summary:
      "My first real project with my name on it. A full chapter site: brothers, officers, events, hire, sponsors, donate. Designed and coded as lead developer. Skills here are org product thinking: directories, sponsorship tiers, donations, and a hire-our-members path that actually helps brothers get jobs.",
    skills: [
      {
        name: "Multi-page static architecture",
        used: "Nine pages with shared behaviors, dark mode that sticks in localStorage, and a glass nav with a lamp-hover effect. No framework, just craft and consistency.",
      },
      {
        name: "Org product patterns",
        used: "I modeled what a fraternity chapter actually needs: people directories, event storytelling, sponsorship tiers, philanthropy impact, and a funnel for companies to hire members.",
      },
      {
        name: "Forms & donations",
        used: "Formspree for contact, BillHighway for real money. The site had to work for chapter ops, not just look good on rush week.",
      },
      {
        name: "Lightweight access control",
        used: "A password-gated sponsor portal so partners get materials without a full auth stack. Right-sized security for the problem.",
      },
      {
        name: "Motion & brand UI",
        used: "Parallax hero, mobile nav, Cinzel and Montserrat locked to AKPsi identity. Brand fidelity is a skill. Chapters notice when you get the navy wrong.",
      },
    ],
  },
  {
    slug: "taken-time-to-design",
    title: "Taken Time to Design",
    role: "Full build",
    year: "2026",
    url: "takentimetodesign.com",
    href: "https://takentimetodesign.com",
    tag: "Studio · Art commissions",
    bg: "#E4D9C2",
    aspect: "aspect-[3/4]",
    stack: "Static HTML · CSS · Vanilla JS · Vercel",
    summary:
      "An artist studio should feel like a studio: quiet, intentional, slow. I built Brooke Taken's commission site as brand first: gallery, tiers, FAQ, inquiry. The skills are taste under constraint: static HTML that still feels expensive, and a funnel that turns admiration into a commission brief.",
    skills: [
      {
        name: "Brand & art direction",
        used: "Cormorant, Italiana, Cinzel; gold on ink; framed plaques under each piece. I designed the site so removing the logo would still feel like her work, not a generic template with her photos dropped in.",
      },
      {
        name: "Commission funnel",
        used: "Pricing tiers plus an inquiry form that composes a structured mailto brief. Collectors don't need a SaaS checkout on day one. They need a clear next step that respects the artist.",
      },
      {
        name: "Gallery UX",
        used: "Lightbox, hover lift, scroll reveal. The art leads; the chrome stays quiet. UX skill here is knowing when to stop adding UI.",
      },
      {
        name: "Static deploy",
        used: "Vercel routes for home, gallery, commissions, about, contact with shared JS. Fast, cheap, no CMS tax for a portfolio that changes when she finishes a piece, not every hour.",
      },
    ],
  },
  {
    slug: "kochhar-foundation",
    title: "Kochhar Foundation",
    role: "Co-founder",
    year: "2023",
    url: "kochharfoundation.com",
    href: "https://kochharfoundation.com",
    tag: "Charity · $22K raised",
    bg: "#B86A2E",
    aspect: "aspect-[4/3]",
    stack: "WordPress · Nonprofit ops · Fundraising",
    summary:
      "Before I was a founder of software, I co-founded a charity. Kochhar Foundation exists to put brighter minds through technology, and the public site plus the storytelling helped raise over $22K. Skills here are mission, narrative, and shipping something people trust with money.",
    skills: [
      {
        name: "Nonprofit founding",
        used: "I wasn't the freelance developer on this one. I was co-founder. Mission, story, and donation path had to be real enough that strangers would give.",
      },
      {
        name: "WordPress",
        used: "A theme-based public site for content, media, and donation-facing pages. Right tool for a charity that needs editors, not a React rebuild every semester.",
      },
      {
        name: "Fundraising narrative",
        used: "Clear cause messaging that converted visitors into donors. Writing that moves money is a skill I still use on every client homepage.",
      },
    ],
  },
  {
    slug: "erickson-flooring",
    title: "Erickson Flooring",
    role: "Full build",
    year: "2026",
    url: "erickson-flooring.com",
    href: "https://erickson-flooring.com",
    tag: "Small business",
    bg: "#4F533A",
    aspect: "aspect-[4/3]",
    stack: "Static HTML · CSS · FormSubmit · Vercel",
    summary:
      "A Tampa flooring company doesn't need a design award. They need quote requests. I built a luxury-feeling marketing site that behaves like a sales tool: portfolio, craftsmanship story, FAQ, and FormSubmit quote capture with spam protection. Skills: local lead gen, conversion design, photography-led layout.",
    skills: [
      {
        name: "Local lead gen",
        used: "I structured the site as a funnel, home to portfolio to craftsmanship to FAQ to contact, so a homeowner who trusts the work has an obvious next step: request a quote.",
      },
      {
        name: "Form capture",
        used: "FormSubmit.co AJAX forms with honeypots and success states. When someone asks for a kitchen estimate, it has to land in the right inbox without me babysitting a backend.",
      },
      {
        name: "Conversion design",
        used: "Urgency, project-type dropdowns, strong CTAs. Pretty sites that don't convert are unpaid internships. I design for the call that happens after the scroll.",
      },
      {
        name: "Scroll motion",
        used: "CSS reveals and photography-led sections that make a trades brand feel high-end without a framework. Restraint is part of the skill.",
      },
    ],
  },
  {
    slug: "sigma-marble",
    title: "Sigma Marble Studio",
    role: "Full build",
    year: "2026",
    url: "sigmamarble.vercel.app",
    href: "https://sigmamarble.vercel.app",
    tag: "Stone & tile · Marketing",
    bg: "#3E4147",
    aspect: "aspect-[4/3]",
    stack: "Next.js · TypeScript · Framer Motion · Lenis · MapLibre · Tailwind",
    summary:
      "Commercial stone and tile deserves a site that feels like architecture, not a PDF. I rebuilt Sigma in Next.js with a full motion system, Lenis scroll, and a MapLibre map of installed projects. Skills: App Router, motion design, interactive maps, and a typed content layer that acts like a CMS without the CMS.",
    skills: [
      {
        name: "Next.js App Router",
        used: "Typed routes for work, services, about, contact, and dynamic project pages. The framework earns its keep when the content model and the routes stay in sync.",
      },
      {
        name: "Motion design",
        used: "Framer Motion plus Lenis: hero, panorama, wave text, reveal imagery. Motion that sells materiality: stone should feel heavy and precise, not bouncy.",
      },
      {
        name: "Interactive maps",
        used: "MapLibre GL with SSR-safe dynamic import so clients can explore where Sigma's work lives geographically. A map is a trust signal for commercial installs.",
      },
      {
        name: "Design systems",
        used: "Custom type, Radix hover cards, region-aware UI. I built a small system so pages stay coherent as the project list grows.",
      },
      {
        name: "File-based CMS",
        used: "TypeScript modules for projects, services, categories, testimonials. No headless CMS overhead for a marketing site that updates when a job finishes, not when a blog posts.",
      },
    ],
  },
  {
    slug: "scoops",
    title: "Scoops",
    role: "In progress",
    year: "2026",
    url: "Coming soon",
    href: null,
    tag: "Consumer app · On-demand delivery",
    bg: "#B85A6E",
    aspect: "aspect-[4/5]",
    stack: "In progress",
    summary:
      "On-demand delivery is a full-stack stress test: orders, dispatch, live status, payments. Scoops is in build. When the first public cut ships, this section will name every skill that had to work under load, not just look good in a mock.",
    skills: [
      {
        name: "Product design",
        used: "I'm scoping the order → dispatch → live status loop for a campus/local MVP. The skill so far is refusing to fake a marketplace before the loop is real.",
      },
    ],
  },
  {
    slug: "puchalski-performance",
    title: "Puchalski Performance",
    role: "In progress",
    year: "2026",
    url: "Coming soon",
    href: null,
    tag: "Athletic brand",
    bg: "#2B2F1E",
    aspect: "aspect-[4/5]",
    stack: "In progress",
    summary:
      "An athletic brand needs a visual system before it needs a shop. Puchalski is in progress: brand language and site architecture first. Skills breakdown lands with the public launch.",
    skills: [
      {
        name: "Brand systems",
        used: "Defining visual language and information architecture for a performance athletic brand so the eventual site feels inevitable, not assembled.",
      },
    ],
  },
];

export const liveCount = projects.filter((p) => p.href).length;
export const wipCount = projects.length - liveCount;

const WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

export const asWord = (n: number) => WORDS[n] ?? String(n);
