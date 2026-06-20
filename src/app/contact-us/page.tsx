import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us about your goals and we’ll come back with a plan — not a pitch.',
};

export default function ContactPage() {
  const details = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
    { label: 'Studio', value: site.address },
  ];

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let’s talk about"
        highlight="your growth."
        subtitle="Tell us where you want to be in twelve months. We’ll come back with a plan — not a pitch."
      />

      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="rounded-card border border-line bg-surface p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">{d.label}</div>
                {d.href ? (
                  <a href={d.href} className="mt-1 block text-text hover:text-accent">
                    {d.value}
                  </a>
                ) : (
                  <div className="mt-1 text-text">{d.value}</div>
                )}
              </div>
            ))}
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
