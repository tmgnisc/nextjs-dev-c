import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Events',
  description: 'National and community events organized by DEV Community Nepal.',
};

interface EventItem {
  title: string;
  body: string;
  image: string;
}

const events: EventItem[] = [
  {
    title: 'Notion Workshop',
    body: 'A session was conducted on Notion, where participants learned how to organize notes, manage projects, track tasks, and collaborate effectively using a modern productivity platform.',
    image: '/images/events/notion.jpg',
  },
  {
    title: 'Digital Marketing',
    body: 'A workshop on Digital Marketing introduced participants to key concepts such as social media marketing, content creation, SEO, and online branding. The session provided practical insights into promoting businesses and personal brands through digital channels.',
    image: '/images/events/digitaal.jpg',
  },
  {
    title: 'Skill Sharing',
    body: 'A collaborative skill-sharing session was organized where community members exchanged knowledge, experiences, and practical skills. Participants learned from one another, fostering personal growth, networking, and a culture of continuous learning.',
    image: '/images/events/skillsharing.jpg',
  },
  {
    title: 'AIDA 1.0',
    body: 'This session explored how Artificial Intelligence can support people with disabilities through assistive technologies, accessibility tools, and inclusive digital solutions. Participants gained insights into the role of AI in improving independence, communication, education, and daily living experiences for individuals with diverse abilities.',
    image: '/images/events/aida 1.jpg',
  },
  {
    title: 'AIDA in collaboration with Prateek',
    body: 'An engaging session exploring how AI-powered tools and technologies can improve accessibility, communication, and independence for people with disabilities.',
    image: '/images/events/prateek.jpg',
  },
  {
    title: 'Steam Expo',
    body: 'An exhibition featuring science, technology, innovation, and project-based learning, where participants presented their ideas and creations.',
    image: '/images/events/steam expo.jpeg',
  },
];

export default function EventsPage() {
  return (
    <>
      <Section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-subtle">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Events</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Explore our workshops, hackathons, seminars, and expos designed to empower students, builders, and the community.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-ink">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="group flex flex-col rounded-card border border-line bg-surface overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(249,21,21,0.08)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-text transition-colors duration-300 group-hover:text-accent">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                    {event.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
