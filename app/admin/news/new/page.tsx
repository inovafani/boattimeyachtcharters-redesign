import type { Metadata } from 'next';
import AdminPostForm from '@/components/admin/AdminPostForm';

export const metadata: Metadata = { title: 'New Article — Admin · Boattime' };

export default function Page() {
  return <AdminPostForm />;
}
