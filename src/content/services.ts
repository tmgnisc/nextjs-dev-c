export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: string;
  features: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  image: string;
};

const defaultFaq = (name: string): Service['faq'] => [
  {
    q: `How soon will we see results from ${name}?`,
    a: 'Most engagements show early signal within 4–8 weeks, with compounding gains over a full quarter. We set baselines up front and report against them every two weeks.',
  },
  {
    q: 'Do you work with our existing team and tools?',
    a: 'Yes. We plug into your stack — analytics, CMS, ad accounts, and project tooling — and work as an extension of your team rather than a black box.',
  },
];

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    tagline: 'Own the rankings that matter.',
    summary:
      'Technical, on-page, and content SEO that turns organic search into a dependable, compounding acquisition channel.',
    icon: '🔍',
    features: [
      {
        title: 'Technical foundation',
        body: 'Crawlability, Core Web Vitals, structured data, and architecture fixes so search engines can read and trust your site.',
      },
      {
        title: 'Content that ranks',
        body: 'Topic clusters mapped to real search demand and buyer intent, briefed and optimized for both readers and crawlers.',
      },
      {
        title: 'Authority building',
        body: 'Earned links and digital PR that grow domain authority the durable way — no shortcuts that put you at risk.',
      },
    ],
    faq: [
      {
        q: 'How soon will we see results from SEO?',
        a: 'Early movement on long-tail terms often appears within 6–8 weeks. Competitive head terms compound over two to three quarters. We report progress every two weeks against agreed baselines.',
      },
      {
        q: 'Do you follow Google’s guidelines?',
        a: 'Always. We use white-hat techniques only, so the rankings you earn stay earned through algorithm updates.',
      },
      {
        q: 'Can you fix a traffic drop from an update?',
        a: 'Yes — we run a forensic audit to isolate the cause (technical, content, or links) and ship a prioritized recovery plan.',
      },
    ],
    image: '/images/services/seo.png',
  },
  {
    slug: 'hackathon',
    title: 'Hackathon',
    tagline: 'Profitable clicks, not just clicks.',
    summary: 'Full-funnel paid search and social that scales spend only as fast as it stays profitable.',
    icon: '🎯',
    features: [
      { title: 'Account architecture', body: 'Clean campaign structure built around intent, margins, and measurable conversion goals.' },
      { title: 'Creative testing', body: 'Continuous ad and landing-page experiments that lift conversion rate, not just click-through.' },
      { title: 'Bid & budget control', body: 'Daily optimization toward target ROAS with transparent, plain-English reporting.' },
    ],
    faq: defaultFaq('paid media'),
    image: '/images/services/ppc.png',
  },
  {
    slug: 'Partnership',
    title: 'Partnership',
    tagline: 'Content with a job to do.',
    summary: 'Editorial strategy and production that earns trust, ranks, and moves prospects toward a decision.',
    icon: '✍️',
    features: [
      { title: 'Editorial strategy', body: 'A calendar tied to search demand, funnel stage, and your point of view.' },
      { title: 'Production at quality', body: 'Writers and editors who know your domain and ship on schedule.' },
      { title: 'Distribution', body: 'Repurposing across channels so each asset earns its keep many times over.' },
    ],
    faq: defaultFaq('content marketing'),
    image: '/images/services/content.png',
  },
  {
    slug: 'data-and-analytics',
    title: 'Data & Analytics',
    tagline: 'Decisions you can defend.',
    summary: 'Trustworthy measurement, dashboards, and experimentation so every growth call is grounded in data.',
    icon: '📊',
    features: [
      { title: 'Clean tracking', body: 'GA4, server-side events, and conversion modeling you can actually rely on.' },
      { title: 'Dashboards', body: 'Live views of the metrics that matter, shared with the people who need them.' },
      { title: 'Experimentation', body: 'A/B and incrementality testing to prove what truly drives growth.' },
    ],
    faq: defaultFaq('analytics'),
    image: '/images/services/data.png',
  },
  {
    slug: 'cro',
    title: 'Conversion Rate Optimization',
    tagline: 'Turn the traffic you already have.',
    summary: 'Research-led testing that lifts conversion across landing pages, funnels, and checkout.',
    icon: '⚡',
    features: [
      { title: 'Funnel research', body: 'Heatmaps, session replay, and surveys to find where intent leaks away.' },
      { title: 'Hypothesis testing', body: 'Prioritized experiments with statistically honest readouts.' },
      { title: 'UX refinement', body: 'Friction removed from the moments that decide a sale.' },
    ],
    faq: defaultFaq('CRO'),
    image: '/images/services/cro.png',
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'Fast sites that sell.',
    summary: 'Modern, accessible, lightning-fast websites engineered for performance and conversion.',
    icon: '💻',
    features: [
      { title: 'Modern stack', body: 'Next.js, headless content, and an edge-first build for instant loads.' },
      { title: 'Conversion-first', body: 'Layouts designed around the action you want a visitor to take.' },
      { title: 'Built to scale', body: 'Clean, documented code your team can extend with confidence.' },
    ],
    faq: defaultFaq('web development'),
    image: '/images/services/web.png',
  },
  { slug: 'ai-geo', title: 'AI / GEO Optimization', tagline: 'Be the answer AI cites.', summary: 'Position your brand to be surfaced by AI search and generative engines, not buried beneath them.', icon: '🤖', features: [], faq: defaultFaq('GEO'), image: '/images/services/ai-geo.png' },
  { slug: 'ecommerce-seo', title: 'Ecommerce SEO', tagline: 'Rank every product that matters.', summary: 'Category and product-level SEO that grows qualified, ready-to-buy organic traffic.', icon: '🛒', features: [], faq: defaultFaq('ecommerce SEO'), image: '/images/services/ecommerce.png' },
  { slug: 'google-ads', title: 'Google Ads', tagline: 'Search intent, captured.', summary: 'High-intent Google Ads campaigns engineered for profitable, scalable acquisition.', icon: '📣', features: [], faq: defaultFaq('Google Ads'), image: '/images/services/google-ads.png' },
  { slug: 'local-seo', title: 'Local SEO', tagline: 'Win your map pack.', summary: 'Local search and Google Business Profile optimization that drives nearby customers through the door.', icon: '📍', features: [], faq: defaultFaq('local SEO'), image: '/images/services/local.png' },
  { slug: 'organic-search-growth', title: 'Organic Search Growth', tagline: 'Compounding, channel-led growth.', summary: 'A holistic organic program that turns search into your most efficient acquisition engine.', icon: '🌱', features: [], faq: defaultFaq('organic growth'), image: '/images/services/organic.png' },
  { slug: 'search-engine-optimization', title: 'Enterprise SEO', tagline: 'SEO at scale.', summary: 'Program management, governance, and execution for large, complex sites.', icon: '🏢', features: [], faq: defaultFaq('enterprise SEO'), image: '/images/services/enterprise.png' },
  { slug: 'seo-content-marketing', title: 'SEO Content Marketing', tagline: 'Search demand, met with content.', summary: 'Content built from search data and shipped to rank, engage, and convert.', icon: '📝', features: [], faq: defaultFaq('SEO content'), image: '/images/services/seo-content.png' },
  { slug: 'seo-strategy-execution', title: 'SEO Strategy & Execution', tagline: 'A plan, and the hands to ship it.', summary: 'From roadmap to delivery — strategy paired with the team to execute it.', icon: '🧭', features: [], faq: defaultFaq('SEO strategy'), image: '/images/services/strategy.png' },
  { slug: 'branding-identity', title: 'Branding & Identity', tagline: 'A brand worth remembering.', summary: 'Positioning, voice, and visual identity that make your brand distinct and durable.', icon: '🎨', features: [], faq: defaultFaq('branding'), image: '/images/services/branding.png' },
];

// Give every service a complete feature set so each page renders a full layout.
const genericFeatures = (title: string): Service['features'] => [
  {
    title: 'Audit & strategy',
    body: `We start with a deep audit of your ${title.toLowerCase()} and build a prioritized roadmap tied to your goals.`,
  },
  {
    title: 'Hands-on execution',
    body: 'Our specialists implement the plan and iterate every two weeks based on real performance data.',
  },
  {
    title: 'Transparent reporting',
    body: 'Plain-English reporting against agreed baselines, so you always know what is working and why.',
  },
];

for (const service of services) {
  if (service.features.length === 0) service.features = genericFeatures(service.title);
}

export const getService = (slug: string) => services.find((s) => s.slug === slug);
