import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'PPC & Paid Media' };

export default function Page() {
  return <ComingSoon title={'PPC & Paid Media'} />;
}
