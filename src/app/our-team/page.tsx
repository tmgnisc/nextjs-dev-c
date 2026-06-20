import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Our Team' };

export default function Page() {
  return <ComingSoon title={'Our Team'} />;
}
