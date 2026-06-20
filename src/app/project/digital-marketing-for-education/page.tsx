import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Digital Marketing For Education' };

export default function Page() {
  return <ComingSoon title={'Digital Marketing For Education'} />;
}
