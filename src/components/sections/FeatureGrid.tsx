import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import { cn } from '@/lib/cn';

export default function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  columns = 3,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items: { title: string; body: string; icon?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <Section>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <Heading className="mt-5">{title}</Heading>}
            {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
          </div>
        )}
        <div className={cn('grid gap-6', columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2')}>
          {items.map((item) => (
            <Card key={item.title}>
              {item.icon && <div className="mb-4 text-3xl">{item.icon}</div>}
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
