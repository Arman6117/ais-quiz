import { Separator } from "@/components/ui/separator";
import AdminDashboardCards from "./_components/admin-dashboard-cards";
import AdminDashboardRecentActivity from "./_components/admin-dashboard-recent-activity";
import AdminDashboardLeaderBoard from "./_components/admin-dashboard-leaderboard";
import AdminQuizCards from "./_components/admin-quiz-cards";
import PageHeader from "@/components/header";

const AdminDashboardPage = () => {
  return (
    <main className=" pb-5 w-screen overflow-y-auto h-screen">
      <PageHeader>
        <span>Search and other</span>
      </PageHeader>
      <section className="px-9 py-3 mt-3">
        <h1 className="text-3xl font-bold">Admin Dashboard Overview</h1>
      </section>
      <section className="px-9 py-3 mt-3">
        <AdminDashboardCards />
      </section>
      <section className="px-9 flex md:flex-row flex-col items-center gap-6  justify-between max-w-full py-3 mt-3">
        <AdminDashboardRecentActivity />
        <AdminDashboardLeaderBoard />
      </section>
      <section className="px-9 mt-5">
        <AdminQuizCards />
      </section>
    </main>
  );
};

export default AdminDashboardPage;
