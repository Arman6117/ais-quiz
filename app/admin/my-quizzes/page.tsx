import { Separator } from "@/components/ui/separator";
import MyQuizzes from "./_components/my-quizzes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MyQuizzesPage = () => {
  return (
    <main className="py-5 w-screen overflow-y-auto h-screen">
      <header className="flex px-5 pb-3 justify-between">
        <span>Search and other</span>
        <Link href={"/admin/my-quizzes/create"}>
          <Button className="bg-primary-accent cursor-pointer hover:bg-primary-accent/60 text-white h-9 px-4 text-sm">
            Create Quiz
          </Button>
        </Link>
      </header>
      <Separator className="bg-[#1f1f2e] w-full" />
      <section className="px-9  mt-3">
        <MyQuizzes />
      </section>
    </main>
  );
};

export default MyQuizzesPage;
