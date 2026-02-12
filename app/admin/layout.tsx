import AdminSidebar from "./dashboard/_components/admin-sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full min-h-screen overflow-hidden">
    <AdminSidebar/>
    {children}
  </main>;
}


