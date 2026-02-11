import { Separator } from "@/components/ui/separator";
import AdminDashboardCards from "./_components/admin-dashboard-cards";
import AdminDashboardRecentActivity from "./_components/admin-dashboard-recent-activity";
import AdminDashboardLeaderBoard from "./_components/admin-dashboard-leaderboard";
import AdminQuizCards from "./_components/admin-quiz-cards";

const AdminDashboardPage = () => {
  return (
    <main className=" py-5 w-screen overflow-y-auto h-screen">
    
      <header  className="fixed top-0 flex flex-col gap-6 z-10  w-full bg-dark-background justify-between">
        <span>Search and other</span>
      <Separator className="bg-gray-800" />
      </header>
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
        <AdminQuizCards/>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
