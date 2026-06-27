import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TeamMemberPage from '@/components/templates/TeamMemberPage';
import { getMember } from '@/content/team';

export default async function TeamPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = getMember(params.slug);

  if (!member) {
    notFound();
  }

  const metadata: Metadata = {
    title: member?.name ?? 'Team',
    description: `${member?.name ?? ''} — ${member?.role ?? ''}`,
  };

  // Export metadata for Next.js
  export const metadataExport = metadata;

  return <TeamMemberPage member={member!} />;
}
