import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/templates/ServicePage';
import { getService } from '@/content/services';

// Use the updated slug for the service (formerly 'ppc')
const service = getService('hackathon');

export const metadata: Metadata = {
  title: service?.title ?? 'Hackathon',
  description: service?.summary ?? 'Hackathon services',
};

export default function Page() {
  if (!service) {
    notFound();
  }
  return <ServicePage service={service!} />;
}
