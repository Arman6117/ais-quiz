import { Separator } from "@/components/ui/separator";
import AdminDashboardCards from "./_components/admin-dashboard-cards";
import AdminDashboardRecentActivity from "./_components/admin-dashboard-recent-activity";
import AdminDashboardLeaderBoard from "./_components/admin-dashboard-leaderboard";

const AdminDashboardPage = () => {
  return (
    <main className=" py-5 w-full overflow-y-auto h-screen">
      <header>
        <span>Search and other</span>
      </header>
      <Separator className="bg-[#1f1f2e]" />
      <section className="px-9 py-3 mt-3">
        <h1 className="text-3xl font-bold">Admin Dashboard Overview</h1>
      </section>
      <section className="px-9 py-3 mt-3">
        <AdminDashboardCards />
      </section>
      <section className="px-9 flex md:flex-row flex-col  justify-between max-w-full py-3 mt-3">
        <AdminDashboardRecentActivity />
        <AdminDashboardLeaderBoard />
      </section>
    </main>
  );
};

export default AdminDashboardPage;
