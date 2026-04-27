import type { Metadata } from 'next';
import AdminLogin from '@/components/admin/AdminLogin';

export const metadata: Metadata = { title: 'Admin — Boattime' };

export default function Page() {
  return <AdminLogin />;
}
