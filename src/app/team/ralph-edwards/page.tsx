import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Ralph Edwards' };

export default function Page() {
  return <ComingSoon title={'Ralph Edwards'} />;
}
