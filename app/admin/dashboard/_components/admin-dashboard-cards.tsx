import Card from "@/components/card";
import { FileDiffIcon, FileVideoCameraIcon, UsersIcon } from "lucide-react";

const AdminDashboardCards = () => {
  return (
    <div className="flex gap-3 flex-wrap justify-evenly">
      <Card
        className="flex flex-col gap-4"
        icon={UsersIcon}
        label="Total Students"
      >
        <span className="font-bold text-5xl">100</span>
      </Card>
      <Card
        className="flex flex-col gap-4"
        icon={FileVideoCameraIcon}
        label="Mock Interviews "
      >
        <span className="font-bold text-5xl">100</span>
      </Card>
      <Card
        className="flex flex-col gap-4"
        icon={FileDiffIcon}
        label="Quizzes Published"
      >
        <span className="font-bold text-5xl">100</span>
      </Card>
     
    </div>
  );
};

export default AdminDashboardCards;
