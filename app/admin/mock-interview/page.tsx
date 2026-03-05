import PageHeader from '@/components/header';
import ManageInterviews from './_components/manage-interview';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const MockInterviewPage = () => {
  return (
    <main className="w-full flex-1 overflow-y-auto h-screen pb-10 bg-[#050505]">
      
      <div className="hidden md:block">
        <PageHeader>
          <span>Search and others</span>
          <Link href={'/admin/mock-interview/create'}>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 w-full sm:w-auto h-10 px-4">
          <Plus className="size-4 mr-2" />
          Create New Interview
        </Button>
          </Link>
        </PageHeader>
      </div>

      <section className="px-4 md:px-9 mt-4 md:mt-8">
        <ManageInterviews />
      </section>
      
    </main>
  );
};

export default MockInterviewPage;