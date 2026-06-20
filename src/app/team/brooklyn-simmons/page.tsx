import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Brooklyn Simmons' };

export default function Page() {
  return <ComingSoon title={'Brooklyn Simmons'} />;
}
