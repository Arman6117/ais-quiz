import React from "react";
import Card from "@/components/card";
import { ScrollArea } from "@/components/ui/scroll-area"; // Import ScrollArea
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, ArrowRight } from "lucide-react";

// Expanded Mock Data to demonstrate ScrollArea
const leaderboardData = [
  { rank: 1, name: "Alex Sterling", score: 850, quizzes: 42, avatar: "https://github.com/shadcn.png", trend: "+12%" },
  { rank: 2, name: "Sarah Jenkins", score: 720, quizzes: 38, avatar: "", trend: "+5%" },
  { rank: 3, name: "Michael Chen", score: 680, quizzes: 35, avatar: "", trend: "+8%" },
  { rank: 4, name: "Emily Davis", score: 540, quizzes: 31, avatar: "", trend: "+2%" },
  { rank: 5, name: "James Wilson", score: 450, quizzes: 29, avatar: "", trend: "+4%" },
  { rank: 6, name: "Robert Fox", score: 300, quizzes: 25, avatar: "", trend: "+1%" },
  { rank: 7, name: "Lisa Wong", score: 150, quizzes: 22, avatar: "", trend: "+3%" },
  { rank: 8, name: "David Kim", score: 100, quizzes: 20, avatar: "", trend: "+0%" },
];

const AdminDashboardLeaderBoard = () => {
  return (
    <Card className="flex flex-col h-[450px] w-full md:w-auto md:max-w-lg border-none shadow-xl overflow-hidden relative z-0">
      
      <div className="absolute inset-0 bg-linear-to-br from-[#0C0C21] via-[#0D0D2D] to-[#0C0C21] " />
      
      <div className="relative z-10 flex flex-col h-full p- pb-2">
        
        <div className="flex justify-between items-start mb-4 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Top Students</h2>
            <p className="text-sm text-slate-400 mt-1">February Leaderboard</p>
          </div>
          <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <Trophy className="size-5 text-yellow-500" />
          </div>
        </div>

        <ScrollArea className="flex-1 -mr-4 pr-4"> 
          <div className="space-y-3 pb-2">
            {leaderboardData.map((student, index) => (
              <div 
                key={student.rank}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  index === 0 
                    ? "bg-linear-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30" 
                    : "hover:bg-white/5 border border-transparent hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs ${
                    index === 0 ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" :
                    index === 1 ? "bg-slate-300 text-black" :
                    index === 2 ? "bg-amber-700 text-white" :
                    "text-slate-500 bg-slate-800"
                  }`}>
                    {student.rank}
                  </div>

                  <Avatar className="size-9 border border-white/10">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback className="bg-slate-800 text-slate-300 text-xs">
                      {student.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className={`text-sm font-semibold ${index === 0 ? "text-white" : "text-slate-200"}`}>
                      {student.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {student.quizzes} Quizzes
                    </p>
                  </div>
                </div>

                {/* Right: Score */}
                <div className="text-right">
                  <div className="text-sm font-bold text-white font-mono">
                    {student.score.toLocaleString()}
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-400">
                    <TrendingUp className="size-3" />
                    {student.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Footer - Static (Does not scroll) */}
        <div className="pt-3 mt-2 border-t border-white/5 shrink-0">
          <Button variant="ghost" className="w-full h-8 text-slate-400 hover:text-white hover:bg-white/5 justify-between group">
            <span className="text-xs font-medium">View Full Rankings</span>
            <ArrowRight className="size-4 opacity-50 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </Card>
  );
};

export default AdminDashboardLeaderBoard;