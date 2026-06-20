export type Project = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  services: string[];
  results: { value: string; label: string }[];
  image: string;
  gallery: string[];
  body: string;
};

export const projects: Project[] = [
  {
    slug: 'seo-audits-reporting',
    client: 'Himalaya Retail',
    title: 'Technical SEO audit that recovered lost rankings',
    summary:
      'A 12,000-page retail site had quietly lost a third of its organic traffic after a replatform. We ran a forensic audit, fixed the crawl and indexation issues, and rebuilt reporting the team could trust.',
    services: ['SEO', 'Data & Analytics'],
    results: [
      { value: '+138%', label: 'Organic traffic in 6 months' },
      { value: '+92%', label: 'Indexed pages recovered' },
      { value: '3.1x', label: 'Return on retainer' },
    ],
    image: '/images/projects/seo-audits.jpg',
    gallery: ['/images/projects/seo-audits.jpg', '/images/projects/project-2.jpg'],
    body:
      'We started with a full crawl to map exactly where equity was leaking — broken redirects from the migration, duplicate parameter URLs, and a render-blocking template. After prioritizing fixes by traffic impact, we shipped changes in weekly batches and tracked recovery against a clean baseline. Within two quarters the site had not only recovered but surpassed its pre-migration peak.',
  },
  { slug: 'seo-google-ads-strategy', client: 'Annapurna SaaS', title: 'Paid + organic working as one funnel', summary: 'A unified search strategy that stopped SEO and Ads from competing and started them compounding.', services: ['SEO', 'Google Ads'], results: [{ value: '-41%', label: 'Cost per lead' }, { value: '+2.4x', label: 'Pipeline from search' }], image: '/images/projects/project-2.jpg', gallery: [], body: '' },
  { slug: 'local-global-seo', client: 'Everest Hospitality', title: 'From local map pack to global demand', summary: 'Local SEO for twelve locations plus an international content engine.', services: ['Local SEO', 'Content'], results: [{ value: '+210%', label: 'Map pack impressions' }, { value: '#1', label: 'For core local terms' }], image: '/images/projects/project-3.jpg', gallery: [], body: '' },
  { slug: 'organic-growth-acceleration', client: 'Kathmandu Fintech', title: 'Organic acceleration for a fintech launch', summary: 'A content and authority program that made organic the cheapest channel by month four.', services: ['SEO', 'Content'], results: [{ value: '+0→58k', label: 'Monthly organic visits' }, { value: '4 mo', label: 'To channel profitability' }], image: '/images/projects/project-4.jpg', gallery: [], body: '' },
  { slug: 'hyperlocal-campaign-for-clinics', client: 'CarePlus Clinics', title: 'Hyperlocal campaigns for a clinic network', summary: 'Geo-targeted paid and local SEO that filled appointment books across nine clinics.', services: ['Local SEO', 'Google Ads'], results: [{ value: '+67%', label: 'Booked appointments' }, { value: '-33%', label: 'Cost per booking' }], image: '/images/projects/project-5.jpg', gallery: [], body: '' },
  { slug: 'digital-marketing-for-education', client: 'Summit Academy', title: 'Full-funnel growth for an edtech brand', summary: 'SEO, content, and paid working together to grow enrolment-ready traffic.', services: ['SEO', 'PPC', 'Content'], results: [{ value: '+185%', label: 'Enrolment enquiries' }, { value: '2.7x', label: 'Return on ad spend' }], image: '/images/projects/project-6.jpg', gallery: [], body: '' },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
