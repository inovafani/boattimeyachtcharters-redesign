import AdminThemeToggle from '@/components/admin/AdminThemeToggle';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AdminThemeToggle />
    </>
  );
}
