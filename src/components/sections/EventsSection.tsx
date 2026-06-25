import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface EventItem {
  title: string;
  body: string;
  image: string;
}

const events: EventItem[] = [
  {
    title: 'AIDA(Hackathon)',
    body: 'Introducing AiDA – AI for People with Disability, in collaboration with Prateek. Build innovative solutions to empower differently-abled individuals.',
    image: '/images/events/aida 1.jpg',
  },
  {
    title: 'Social Impact',
    body: 'DEV Community Nepal not only tries to uplift the students pursuing technology, but also strives to create an impact on the society through various awareness programs, as our responsibility towards our nation.',
    image: '/images/events/social.jpg',
  },
  {
    title: 'Steam Expo',
    body: 'STEAM Expo is platform where young minds can transform their creativity, curiosity, and innovative thinking into real-world solutions. Through this national event, we aim to inspire students to explore Science, Technology, Engineering, Arts, and Mathematics (STEAM) through hands-on learning, research, and innovation.',
    image: '/images/events/steam expo.jpeg',
  },
];

export default function EventsSection() {
  return (
    <Section id="events" className="py-20 md:py-28">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            Our National Events
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#f91515]" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group flex flex-col rounded-card border border-line bg-surface overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(249,21,21,0.08)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
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
  );
}
