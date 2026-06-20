import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import StatsBand from '@/components/sections/StatsBand';
import CTASection from '@/components/sections/CTASection';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import type { Project } from '@/content/projects';

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <Hero eyebrow={`Case study · ${project.client}`} title={project.title} subtitle={project.summary} />

      <StatsBand stats={project.results} />

      <Section>
        <Container className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          {project.body && <p className="text-lg leading-relaxed text-muted">{project.body}</p>}
          {project.gallery.length > 0 && (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {project.gallery.map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 400px" />
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection title="Want results like these?" />
    </>
  );
}
