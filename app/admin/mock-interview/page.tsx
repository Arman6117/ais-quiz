import PageHeader from '@/components/header';
import React from 'react';
import ManageInterviews from './_components/manage-interview';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const MockInterviewPage = () => {
  return (
    // FIXED: Changed w-screen to w-full flex-1 so it respects the sidebar width
    // Added bg-[#050505] or your default dark background to match the theme
    <main className="w-full flex-1 overflow-y-auto h-screen pb-10 bg-[#050505]">
      
      {/* Header - Hidden on mobile if your Sidebar already has a mobile header */}
      <div className="hidden md:block">
        <PageHeader>
          <span>Search and others</span>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 w-full sm:w-auto h-10 px-4">
          <Plus className="size-4 mr-2" />
          Create New Interview
        </Button>
        </PageHeader>
      </div>

      {/* Main Content Section with responsive padding */}
      <section className="px-4 md:px-9 mt-4 md:mt-8">
        <ManageInterviews />
      </section>
      
    </main>
  );
};

export default MockInterviewPage;