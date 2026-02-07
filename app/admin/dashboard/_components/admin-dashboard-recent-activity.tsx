import React from "react";
import Card from "@/components/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Mock Data matching your screenshot for visual accuracy
const recentActivity = [
  {
    id: 1,
    user: "James Dalton",
    initials: "JD",
    action: "is taking",
    quizTitle: "Advanced React Hooks Quiz",
    metaPrimary: "12:45 elapsed",
    metaSecondary: "ACTIVE NOW",
    status: "active", // active | completed | started
  },
  {
    id: 2,
    user: "Elena Martinez",
    initials: "EM",
    action: "is taking",
    quizTitle: "AI Prompt Engineering Mock Interview",
    metaPrimary: "04:20 elapsed",
    metaSecondary: "ACTIVE NOW",
    status: "active",
  },
  {
    id: 3,
    user: "Kevin Bowers",
    initials: "KB",
    action: "completed",
    quizTitle: "Data Structures Fundamentals",
    metaPrimary: "Score: 94%",
    metaSecondary: "14M AGO",
    status: "completed",
  },
  {
    id: 4,
    user: "Sarah Lee",
    initials: "SL",
    action: "started",
    quizTitle: "Backend System Design Quiz",
    metaPrimary: "00:15 elapsed",
    metaSecondary: "JUST STARTED",
    status: "started",
  },
  {
    id: 5,
    user: "Sarah Lee",
    initials: "SL",
    action: "started",
    quizTitle: "Backend System Design Quiz",
    metaPrimary: "00:15 elapsed",
    metaSecondary: "JUST STARTED",
    status: "started",
  },
  {
    id: 6,
    user: "Sarah Lee",
    initials: "SL",
    action: "started",
    quizTitle: "Backend System Design Quiz",
    metaPrimary: "00:15 elapsed",
    metaSecondary: "JUST STARTED",
    status: "started",
  },
];

const AdminDashboardRecentActivity = () => {
  return (
    <Card className="w-xl max-w-xl overflow-hidden pb-14 flex flex-col h-[450px]">
      <div className="flex w-full justify-between items-center px-3 py-2 ">
        <h1 className="text-lg font-semibold">Recent Activity</h1>
        
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </div>
          <span className="text-xs font-medium text-muted-foreground">Live Monitoring</span>
        </div>
      </div>

      
      <ScrollArea className="h-full w-full">
        <div className="p-0">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between px-6 py-4 border-b border-border/40 last:border-0 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 mt-1 bg-muted">
                  <AvatarFallback className={`${item.id === 1 ? 'bg-blue-900/30 text-blue-200' : 'bg-muted text-muted-foreground'} text-xs font-medium`}>
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm">
                    <span className="font-semibold">{item.user}</span>
                    <span className="text-muted-foreground">{item.action}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-500 group-hover:underline decoration-blue-500/30 underline-offset-4">
                    {item.quizTitle}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className={`text-sm font-medium ${
                    item.status === 'completed' ? 'text-green-500' : 'text-muted-foreground'
                }`}>
                  {item.metaPrimary}
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  {item.metaSecondary}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

     
    </Card>
  );
};

export default AdminDashboardRecentActivity;