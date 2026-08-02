/**
 * Services: the productized offer. Same first-person voice as craft.ts.
 * Evidence references must map to real projects in projects.ts.
 */

export const RETAINER_PRICE = 500;

export const retainer = {
  eyebrow: "Monthly retainer",
  name: "Search & AI Visibility",
  price: `$${RETAINER_PRICE}/month`,
  lead: "SEO gets you found on Google. AEO gets you cited by ChatGPT, Perplexity, and AI Overviews. I run both as one system, every month.",
  includes: [
    {
      name: "Technical SEO",
      detail:
        "Site audits, crawl and indexing fixes, Core Web Vitals, canonicals, sitemaps, redirects. The unglamorous layer that decides whether anything else works.",
    },
    {
      name: "On-page optimization",
      detail:
        "Titles, meta, headings, internal linking, and page structure tuned to the queries your customers actually type, not the ones that flatter the brand.",
    },
    {
      name: "Structured data",
      detail:
        "JSON-LD schema: Organization, Service, FAQ, LocalBusiness, whatever your business actually is. It lets machines read what you do without guessing.",
    },
    {
      name: "AEO / AI search",
      detail:
        "llms.txt, entity cleanup, citation-ready page structure. AI assistants are already answering questions in your category; the work is making sure they answer with you.",
    },
    {
      name: "Monthly report",
      detail:
        "What changed, what moved, and what's next, in plain English. You'll never wonder what the retainer bought this month.",
    },
  ],
  evidence:
    "This is the playbook already running on N+1 Talent: Python generators stamping out fifty-plus state and role pages, Organization and FAQ schema, llms.txt, careful canonicals. It was built so a recruiting firm shows up in searches it never bid on.",
  honesty:
    "Search compounds. Expect the first month to be foundations and fixes, and the months after that to build on each other. Anyone promising page one in a week is selling you a penalty.",
};

export const builds = {
  eyebrow: "Project work",
  name: "Websites, apps & AI agents",
  price: "From $1,000",
  lead: "Full builds, designed and coded by one person, to the same standard as everything on the work page. Websites start at $1,000; apps and AI agents are quoted per project. After launch, care plans keep it healthy from $100 a month.",
  items: [
    "Marketing sites that behave like sales tools (Erickson Flooring, Sigma Marble Studio)",
    "Brand-first studio sites (Taken Time to Design)",
    "Programmatic SEO engines and AI agents that do real outbound (N+1 Talent)",
    "Full products: mobile, API, payments, the whole path (Dilly)",
  ],
};

export const CARE_BUNDLE_PRICE = 100;

export const care = {
  eyebrow: "Ongoing care",
  name: "Keep it healthy",
  lead: "A website is not a one-time purchase. These plans keep yours updated, backed up, and fixed, every month, by the person who knows how it's built.",
  items: [
    {
      name: "Security",
      price: "$45/month",
      detail:
        "Software and dependency updates, SSL and domain watch, backups, and uptime monitoring. Problems get caught before your customers see them.",
    },
    {
      name: "Maintenance",
      price: "$80/month",
      detail:
        "Content and copy changes, bug fixes, small improvements, and a monthly health check. Your site stays current instead of slowly rotting.",
    },
  ],
  bundle: {
    name: "Full Care",
    price: `$${CARE_BUNDLE_PRICE}/month`,
    detail:
      "Security and maintenance together, $25 a month less than paying for them separately. Most clients pick this.",
  },
  note: "Search & AI Visibility is separate from care. Care keeps the site healthy; the retainer makes it grow. They stack well.",
};

export const steps = [
  {
    n: "01",
    title: "Write me",
    text: "One email. Tell me what you sell and where customers should be finding you. I'll tell you honestly whether search is your problem.",
  },
  {
    n: "02",
    title: "I audit first",
    text: "Before you pay monthly, I look at your site the way Google and ChatGPT do and send you what I find, including the things I can't fix.",
  },
  {
    n: "03",
    title: "Then it runs",
    text: "Fixes ship, schema lands, pages get citable. Every month closes with a report in plain English.",
  },
];

export const faq = [
  {
    q: "What is AEO?",
    a: "Answer Engine Optimization: making your business the one AI assistants cite when someone asks ChatGPT, Perplexity, or Google's AI Overviews a question in your category. It overlaps with SEO but has its own mechanics, from structured data and entity clarity to llms.txt and page structures models can actually quote.",
  },
  {
    q: "Why $500 a month?",
    a: "It's the price where I can do real monthly work for a small number of clients without agency overhead. No account managers, no white-labeled subcontractors. The person you email is the person doing the work.",
  },
  {
    q: "What do you need from me?",
    a: "Access to your site and analytics, and a straight answer about what you sell and to whom. If your site needs a rebuild before optimization makes sense, I'll say so. That's project work, quoted separately.",
  },
  {
    q: "What does the $100 Full Care plan cover?",
    a: "Everything in Security and Maintenance combined: updates, backups, uptime monitoring, bug fixes, and content changes, handled every month. It does not include SEO and AEO work; that is the $500 Search & AI Visibility retainer, and the two stack well together.",
  },
  {
    q: "How much does a website cost?",
    a: "Websites start at $1,000 and are scoped per project based on pages, features, and content. Apps and AI agents are quoted individually. You get a fixed price before any work starts.",
  },
  {
    q: "When do results show up?",
    a: "Technical fixes and structured data land immediately. Rankings and AI citations compound over months, not days. I report what actually moved, every month, so you can judge for yourself.",
  },
];
