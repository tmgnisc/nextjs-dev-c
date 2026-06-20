import type { Metadata } from 'next';
import ServicePage from '@/components/templates/ServicePage';
import { getService } from '@/content/services';

const service = getService('website-development')!;

export const metadata: Metadata = { title: service.title, description: service.summary };

export default function Page() {
  return <ServicePage service={service} />;
}
