import PageHeader from '@/components/header'
import { Button } from '@/components/ui/button'
import React from 'react'
import ConfigurationPanel from './_components/configuration-panel'

const CreateQuizPage = () => {
  return (
    <main className='pb-5 w-screen overflow-y-scroll h-screen'>
      <PageHeader>
        <span>My Quizzes/Create</span>
        <Button>Save Draft</Button>
      </PageHeader>
      <section className='flex h-full'>
        <ConfigurationPanel/>
      </section>
    </main>
  )
}

export default CreateQuizPage