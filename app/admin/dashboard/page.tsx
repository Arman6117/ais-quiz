import { Separator } from "@/components/ui/separator"
import AdminDashboardCards from "./_components/admin-dashboard-cards"

const AdminDashboardPage = () => {
  return (
    <main className=" py-5 w-full">
        <header>
            <span>Search and other</span>
        </header>
         <Separator className="bg-[#1f1f2e]"/>
         <section className="px-4 py-3 mt-3">
            <h1 className="text-3xl font-bold">Admin Dashboard Overview</h1>
         </section>
         <section className="px-4 py-3 mt-3">
            <AdminDashboardCards/>
         </section>
    </main>
  )
}

export default AdminDashboardPage