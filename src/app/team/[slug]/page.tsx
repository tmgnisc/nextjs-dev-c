import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TeamMemberPage from '@/components/templates/TeamMemberPage';
import { getMember } from '@/content/team';

// Dynamically generate metadata based on the slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const member = getMember(params.slug);
  if (!member) {
    notFound();
  }
  return {
    title: member?.name ?? 'Team',
    description: `${member?.name ?? ''} — ${member?.role ?? ''}`,
  };
}

export default async function TeamPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = getMember(params.slug);
  if (!member) {
    notFound();
  }
  return <TeamMemberPage member={member!} />;
}
