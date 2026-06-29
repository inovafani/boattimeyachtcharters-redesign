import type { Metadata } from 'next';
import AdminPostViews from '@/components/admin/AdminPostViews';

export const metadata: Metadata = { title: 'Article Visitors — Admin · Boattime' };

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <AdminPostViews params={params} />;
}
