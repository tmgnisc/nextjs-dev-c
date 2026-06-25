import type { Metadata } from 'next';
import TeamMemberPage from '@/components/templates/TeamMemberPage';
import { getMember } from '@/content/team';

const member = getMember('nischal-tamang')!;

export const metadata: Metadata = {
  title: member.name,
  description: `${member.name} — ${member.role} at DEV Community Nepal.`,
};

export default function Page() {
  return <TeamMemberPage member={member} />;
}

