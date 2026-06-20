import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Data & Analytics' };

export default function Page() {
  return <ComingSoon title={'Data & Analytics'} />;
}
