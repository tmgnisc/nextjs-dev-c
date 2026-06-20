import type { Metadata } from 'next';
import ProjectPage from '@/components/templates/ProjectPage';
import { getProject } from '@/content/projects';

const project = getProject('digital-marketing-for-education')!;

export const metadata: Metadata = { title: project.title, description: project.summary };

export default function Page() {
  return <ProjectPage project={project} />;
}
