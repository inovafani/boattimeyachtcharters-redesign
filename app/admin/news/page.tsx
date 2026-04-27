import type { Metadata } from 'next';
import AdminNewsList from '@/components/admin/AdminNewsList';

export const metadata: Metadata = { title: 'News — Admin · Boattime' };

export default function Page() {
  return <AdminNewsList />;
}
