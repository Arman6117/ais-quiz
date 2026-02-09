import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Plus,
  Filter,

} from "lucide-react";
import QuizCard from "./quiz-card";

const CreateNewCard = () => (
  <button className="flex flex-col items-center justify-center p-6 border border-dashed border-white/20 rounded-xl h-full min-h-[200px] hover:bg-white/5 hover:border-blue-500/50 transition-all group cursor-pointer bg-transparent">
    <div className="size-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
      <Plus className="size-6" />
    </div>
    <span className="text-sm font-medium text-slate-400 group-hover:text-white">Create another quiz</span>
  </button>
);


const mockQuizzes = [
  { id: 1, name: "Advanced React Hooks Masterclass", status: "published", totalQuestions: 25, duration: "45", participants: 12 },
  { id: 2, name: "System Design Patterns", status: "draft", totalQuestions: 20, duration: "60", participants: 0 },
  { id: 3, name: "Python for Data Science", status: "published", totalQuestions: 30, duration: "50", participants: 8 },
  { id: 4, name: "AI Fundamentals 2024", status: "archived", totalQuestions: 15, duration: "30", participants: 45 },
];

const MyQuizzes = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto p-6 flex flex-col space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-white tracking-tight">My Quizzes</h1>
        </div>
      </div>

  
      <Tabs defaultValue="all" className="w-full space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 pb-0">
          <TabsList className="bg-transparent h-auto p-0 gap-8 justify-start w-full sm:w-auto  transition-all  no-scrollbar">
            {["All Quizzes", "Published", "Drafts", "Archived"].map((tab) => {
              const value = tab.toLowerCase().split(" ")[0];
              const safeValue = value === "all" ? "all" : value.slice(0, -1) === "archived" ? "archived" : value === "drafts" ? "draft" : value;
              return (
                <TabsTrigger
                  key={safeValue}
                  value={safeValue}
                  className="rounded-none bg-transparent border-b-2 border-x-0 border-t-0 border-transparent px-0 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 data-[state=active]:border-blue-500 data-[state=active]:text-white data-[state=active]:bg-transparent transition-all"
                >
                  {tab}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="flex items-center gap-2 pb-2 sm:pb-0">
            <Button variant="outline" size="sm" className="bg-[#0A0A0A] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white h-8 text-xs gap-2">
              <Filter className="size-3.5" /> Filter
            </Button>
          </div>
        </div>

        {["all", "published", "draft", "archived"].map((filterStatus) => (
          <TabsContent key={filterStatus} value={filterStatus} className="mt-0 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  lg:gap-16 gap-6">
              {mockQuizzes
                .filter((quiz) => filterStatus === "all" || quiz.status === filterStatus)
                .map((quiz) => (
                  <QuizCard  key={quiz.id} quiz={quiz} />
                ))}
              
              {(filterStatus === "all" || filterStatus === "draft") && <CreateNewCard />}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MyQuizzes;