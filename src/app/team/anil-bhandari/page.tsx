import type { Metadata } from 'next';
import TeamMemberPage from '@/components/templates/TeamMemberPage';
import { getMember } from '@/content/team';

const member = getMember('anil-bhandari')!;

export const metadata: Metadata = {
  title: member.name,
  description: `${member.name} — ${member.role} at Dev Community Nepal.`,
};

export default function Page() {
  return <TeamMemberPage member={member} />;
}
