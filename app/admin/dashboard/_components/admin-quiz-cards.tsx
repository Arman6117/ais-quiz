import Card from "@/components/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const mock = [
  {
    name: "Quiz 1",
    updated: "2 days ago",
    status: "Published",
  },
  {
    name: "Quiz 2",
    updated: "2 days ago",
    status: "Draft",
  },
  {
    name: "Quiz 3",
    updated: "2 days ago",
    status: "Published",
  },
];
const AdminQuizCards = () => {
  return (
    <Card className="w-full flex flex-col px-3 py-6 h-full">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-semibold">My Quizzes</h1>
        <Button className="text-blue-700 cursor-pointer " variant={"link"}>
          Manage All
        </Button>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        {mock.map((item, index) => (
          <Link
            href={`/admin/my-quizzes/${item.name.toLowerCase()}`}
            className="border-[#29292D] border p-2 flex flex-col gap-3 mt-5 h-48 md:h-40 rounded-md md:w-56 bg-[#111113]"
            key={index}
          >
            <div className="relative h-24 w-full">
              <Badge
                className={`absolute rounded-sm p-1 right-2 bottom-2 ${
                  item.status === "Published" ? "bg-teal-700" : "bg-gray-800"
                }`}
              >
                {item.status}
              </Badge>
              <div className="h-full rounded-md w-full bg-indigo-900"></div>
            </div>
            <div className="flex flex-col gap">
              <span className="font-semibold md:text-base text-xl">{item.name}</span>
              <span className="text-xs text-gray-500">{item.updated}</span>
            </div>
          </Link>
        ))}
        <div className="border-[#29292D] flex flex-col items-center justify-center border rounded-md  border-dashed mt-5 h-48 md:h-40 md:w-56 bg-[#18181B]">
          <Link
            href={"/admin/my-quizzes/create-new"}
            className="flex flex-col items-center gap-2"
          >
            <PlusCircle className="size-10 text-[#677790]" />
            <span className="text-lg font-semibold text-[#677790]">
              Create New
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AdminQuizCards;
