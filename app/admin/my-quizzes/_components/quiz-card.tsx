import Card from '@/components/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart2, Clock, HelpCircle, MoreHorizontal, Pencil } from 'lucide-react';

const QuizCard = ({ quiz }: { quiz: any }) => {
    const isDraft = quiz.status === "draft";
    const isPublished = quiz.status === "published";
  
    return (
      <Card className="flex flex-col p-5 bg-[#121212] border-white/10 hover:border-white/20 transition-all h-full group">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            className={`uppercase text-[10px] font-bold tracking-wider px-2.5 py-1 border-0 rounded-full ${
              isPublished 
                ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20" 
                : isDraft 
                ? "bg-slate-700/30 text-slate-400 hover:bg-slate-700/40"
                : "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
            }`}
          >
            {quiz.status}
          </Badge>
          <button className="text-slate-500 hover:text-white transition-colors">
            <MoreHorizontal className="size-5" />
          </button>
        </div>
  
        <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
          {quiz.name}
        </h3>
  
        <div className="flex items-center gap-4 text-slate-500 text-xs mb-6 mt-1">
          <div className="flex items-center gap-1.5">
            <HelpCircle className="size-3.5" />
            <span>{quiz.totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            <span>{quiz.duration} Mins</span>
          </div>
        </div>
  
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          {isDraft ? (
            <span className="text-xs text-slate-600 italic">No participants</span>
          ) : (
            <div className="flex items-center -space-x-2">
              {[1, 2].map((i) => (
                 <Avatar key={i} className="size-6 border-2 border-[#121212]">
                   <AvatarImage src={`https://i.pravatar.cc/100?img=${i + quiz.id}`} />
                   <AvatarFallback className="text-[8px]">U</AvatarFallback>
                 </Avatar>
              ))}
              <div className="size-6 rounded-full bg-blue-600/20 text-blue-400 border-2 border-[#121212] flex items-center justify-center text-[9px] font-bold">
                +{quiz.participants}
              </div>
            </div>
          )}
  
          <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" className="size-8 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg">
                <Pencil className="size-3.5" />
              </Button>
              {isDraft ? (
                 <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700 text-xs px-3 rounded-lg">
                   Publish
                 </Button>
              ) : (
                <Button size="icon" variant="secondary" className="size-8 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 rounded-lg">
                  <BarChart2 className="size-3.5" />
                </Button>
              )}
          </div>
        </div>
      </Card>
    );
  };

export default QuizCard