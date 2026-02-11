import { Separator } from "@/components/ui/separator";
import MyQuizzes from "./_components/my-quizzes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MyQuizzesPage = () => {
  return (
    <main className="py-5  w-screen overflow-y-auto h-screen">
      <header className="fixed top-0 flex flex-col gap-6 z-10  w-full bg-dark-background justify-between">
        <div className="flex w justify-between">
          <span>Search and other</span>

          <Link href={"/admin/my-quizzes/create"}>
            <Button className="bg-primary-accent cursor-pointer hover:bg-primary-accent/60 text-white h-9 px-4 text-sm">
              Create Quiz
            </Button>
          </Link>
        </div>
        <Separator className="bg-[#1f1f2e] w-full" />
      </header>
      <section className="px-9  mt-3">
        <MyQuizzes />
      </section>
    </main>
  );
};

export default MyQuizzesPage;
