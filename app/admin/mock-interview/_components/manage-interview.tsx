"use client";

import  { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  Search, Code2, Database, UserSquare2, Briefcase } from "lucide-react";
import { InterviewsTable, MockInterviewTemplate } from "./interviews-table";

// Mock Data (In production, this would be passed in via props or fetched from your MERN backend)
const mockData: MockInterviewTemplate[] = [
  { id: "1", title: "Senior Frontend Engineer Mock", icon: Code2, iconColor: "text-blue-400", status: "Published", questions: 12, difficulty: "Hard", difficultyLevel: 3, createdAt: "Oct 12, 2023" },
  { id: "2", title: "Junior Backend Developer", icon: Database, iconColor: "text-emerald-400", status: "Published", questions: 8, difficulty: "Medium", difficultyLevel: 2, createdAt: "Oct 15, 2023" },
  { id: "3", title: "System Design Architect", icon: UserSquare2, iconColor: "text-purple-400", status: "Draft", questions: 10, difficulty: "Expert", difficultyLevel: 4, createdAt: "Oct 20, 2023" },
  { id: "4", title: "Product Manager Interview", icon: Briefcase, iconColor: "text-amber-400", status: "Published", questions: 15, difficulty: "Easy", difficultyLevel: 1, createdAt: "Oct 22, 2023" },
];

export const ManageInterviews = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredInterviews = mockData.filter((interview) => {
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "published" && interview.status === "Published") ||
      (activeTab === "drafts" && interview.status === "Draft");
    
    const matchesSearch = interview.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1400px] mx-auto p-6 flex flex-col space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Manage Mock Interviews</h1>
          <p className="text-sm text-slate-400 mt-1">Design and oversee your AI-driven interview workflows.</p>
        </div>
       
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList className="bg-[#111111] border border-white/10 p-1 h-auto rounded-lg">
            <TabsTrigger value="all" className="rounded-md px-4 py-1.5 text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-slate-400 transition-all">
              All Interviews
            </TabsTrigger>
            <TabsTrigger value="published" className="rounded-md px-4 py-1.5 text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-slate-400 transition-all">
              Published
            </TabsTrigger>
            <TabsTrigger value="drafts" className="rounded-md px-4 py-1.5 text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-slate-400 transition-all">
              Drafts
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates..." 
            className="pl-9 bg-[#111111] border-white/10 text-sm focus-visible:ring-blue-500 h-10 rounded-lg text-white"
          />
        </div>
      </div>

      <InterviewsTable data={filteredInterviews} totalCount={mockData.length} />

    </div>
  );
};

export default ManageInterviews;