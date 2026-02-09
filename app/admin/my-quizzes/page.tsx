import { Separator } from "@/components/ui/separator"
import MyQuizzes from "./_components/my-quizzes"

const MyQuizzesPage = () => {
  return (
    <main className="py-5 w-screen overflow-y-auto h-screen">
    <header>
      <span>Search and other</span>
    </header>
    <Separator className="bg-[#1f1f2e] w-full" />
    <section className="px-9 py-3 mt-3">

      <MyQuizzes/>
    </section>
    </main>
  )
}

export default MyQuizzesPage