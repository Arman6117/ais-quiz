import { Separator } from "@/components/ui/separator";
import MyQuizzes from "./_components/my-quizzes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/header";

const MyQuizzesPage = () => {
  return (
    <main className="w-full h-screen overflow-y-auto relative bg-dark-background">
      <PageHeader>
        <span className="text-xl font-bold">Search and other</span>

        <Link href={"/admin/my-quizzes/create"}>
          <Button className="bg-primary-accent cursor-pointer hover:bg-primary-accent/60 text-white h-9 px-4 text-sm">
            Create Quiz
          </Button>
        </Link>
      </PageHeader>

      {/* Content Section */}
      <section className="px-9 mt-6 pb-10">
        <MyQuizzes />
      </section>
    </main>
  );
};

export default MyQuizzesPage;
