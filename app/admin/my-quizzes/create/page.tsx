import PageHeader from '@/components/header'
import { Button } from '@/components/ui/button'
import QuizCreator from './_components/quiz-creator'

const CreateQuizPage = () => {
  return (
    <main className=' w-screen overflow-y- h-'>
      <PageHeader>
        <span>My Quizzes/Create</span>
        <Button>Save Draft</Button>
      </PageHeader>
      <section className='flex h-full'>
       <QuizCreator/>
      </section>
    </main>
  )
}

export default CreateQuizPage