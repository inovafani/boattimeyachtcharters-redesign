import type { Metadata } from 'next';
import AdminPostForm from '@/components/admin/AdminPostForm';

export const metadata: Metadata = { title: 'Edit Article — Admin · Boattime' };

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <AdminPostForm params={params} />;
}
