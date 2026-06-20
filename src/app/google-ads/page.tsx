import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Google Ads' };

export default function Page() {
  return <ComingSoon title={'Google Ads'} />;
}
