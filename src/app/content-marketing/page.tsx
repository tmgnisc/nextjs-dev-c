import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Content Marketing' };

export default function Page() {
  return <ComingSoon title={'Content Marketing'} />;
}
