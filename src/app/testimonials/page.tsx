import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Testimonials' };

export default function Page() {
  return <ComingSoon title={'Testimonials'} />;
}
