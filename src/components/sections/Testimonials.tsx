import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import type { Testimonial } from '@/content/testimonials';

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <Section>
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Client results</Eyebrow>
          <Heading className="mt-5">Teams that grew with us</Heading>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <p className="flex-1 text-[15px] leading-relaxed text-text">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar src={t.avatar} alt={t.name} size={44} />
                <div>
                  <div className="text-sm font-semibold text-text">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
