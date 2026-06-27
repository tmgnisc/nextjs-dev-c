import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsBand from '@/components/sections/StatsBand';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import TeamGrid from '@/components/sections/TeamGrid';
import CTASection from '@/components/sections/CTASection';
import { team } from '@/content/team';

export const metadata: Metadata = {
  title: 'About',
  description: 'Dev Community Nepal is a Kathmandu-based digital growth studio built on strategy, data, and craft.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="Built on strategy,"
        highlight="proven by results."
        subtitle="We’re a Kathmandu-based team of strategists, engineers, and storytellers who help brands turn search and paid channels into dependable growth."
        cta={{ label: 'Work with us', href: '/contact-us' }}
        image="/images/team/national team.jpeg"
      />

      <div className="pb-4">
        <StatsBand
          stats={[
            { value: '2019', label: 'Founded' },
            { value: '5', label: 'Tech Meetups' },
            { value: '150+', label: 'WorkshopsandTranings' },
            { value: '100+', label: 'Partnerships' },
          ]}
        />
      </div>

      <Section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-[#f91515]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#f91515]">
                Mission & Vision
              </span>
            </div>
            <h2 className="mt-4 font-display  text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Purpose that guides today
            </h2>
           
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission Card */}
            <div className="group relative rounded-card border border-line bg-surface p-8 transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(249,21,21,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f91515]/10 text-2xl text-[#f91515]">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-text">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted">
                  "DEV Community Nepal empowers students and youth through skill-based trainings, hands-on learning, mentorship, and real-world initiatives while enabling collaboration between industry, communities, and institutions. We develop future-ready talent, strengthen Nepal's tech, science, and engineering ecosystem, and create pathways for leadership, innovation, and measurable national impact."
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-12 bg-[#f91515] rounded-bl-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Vision Card */}
            <div className="group relative rounded-card border border-line bg-surface p-8 transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(249,21,21,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f91515]/10 text-2xl text-[#f91515]">
                    👁️
                  </div>
                  <h3 className="text-xl font-bold text-text">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted">
                  "To establish DEV Community Nepal as a community-driven national institution that unites students, youth, companies, tech communities, and ecosystem partners to build an inclusive, innovation-led technology ecosystem, producing leaders, startups, research, and national-level collaborations that shape Nepal's digital future."
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-12 bg-[#f91515] rounded-bl-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </Container>
      </Section>

      <TeamGrid members={team} />

      <CTASection title="Let’s build your growth engine" />
    </>
  );
}
