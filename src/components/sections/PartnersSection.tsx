import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const partners = [
  { name: 'CFC', logo: '/images/partners/cfc.png' },
  { name: 'Kathmandu University', logo: '/images/partners/ku.jpg' },
  { name: 'Leapfrog', logo: '/images/partners/lf.jpg' },
  { name: 'Prateek', logo: '/images/partners/prateek.png' },
  { name: 'Ultima', logo: '/images/partners/ultima.jpg' },
];

export default function PartnersSection() {
  return (
    <Section className="py-16 border-t border-line bg-surface/50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            We have worked with
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 bg-[#f91515] mb-12" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center transition-transform duration-300 hover:scale-105 h-12 w-28 relative"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
