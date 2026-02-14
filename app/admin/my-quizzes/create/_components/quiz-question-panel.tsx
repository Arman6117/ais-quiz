"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Edit3, 
  Check, 
  RefreshCw, 
  Save, 
  Sparkles,
  GripVertical
} from "lucide-react";
import { useQuizStore } from "@/hooks/use-quiz-store";

const QuizQuestionPanel = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    updateQuestion 
  } = useQuizStore();
  
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(false);
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full bg-[#050505] text-slate-500 p-6 text-center">
        <Sparkles className="size-12 mb-4 opacity-20" />
        <p className="text-sm md:text-base">Open Configuration to start generating.</p>
      </div>
    );
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionChange = (index: number, newValue: string) => {
    const newOptions = [...(currentQuestion.options || [])];
    newOptions[index] = newValue;
    updateQuestion(currentQuestion.id, { options: newOptions });
  };

  const handleCorrectOptionChange = (index: number) => {
    updateQuestion(currentQuestion.id, { correctOption: index });
  };

  return (
    <div className="flex flex-col h-full bg-[#050505] relative w-full">
      
      {/* --- Header Toolbar (Responsive) --- */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-white/5 bg-[#0A0A0A] shrink-0">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <span className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Q {currentQuestionIndex + 1} / {questions.length}
          </span>
          <Badge variant="outline" className="w-fit border-blue-500/30 text-blue-400 bg-blue-500/10 text-[10px] px-2 py-0 h-5">
            {isEditing ? "Editing" : "AI Generated"}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="icon" className="md:hidden text-slate-400">
             <RefreshCw className="size-4" />
           </Button>
           <Button variant="ghost" size="sm" className="hidden md:flex text-slate-400 hover:text-white">
             <RefreshCw className="size-4 mr-2" /> Regenerate
           </Button>
           
           <Button className="bg-white text-black hover:bg-slate-200 h-8 text-xs font-bold px-3 md:px-4">
             <Save className="size-3 mr-2" /> <span className="hidden md:inline">Save Draft</span><span className="md:hidden">Save</span>
           </Button>
        </div>
      </div>

      {/* --- Main Content (Scrollable) --- */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8">
        <div className="w-full max-w-3xl mx-auto space-y-6 md:space-y-8 pb-10">
          
          {/* Question Text Block */}
          <div className={`relative group p-4 md:p-6 md:-m-6 rounded-xl transition-all ${isEditing ? "bg-[#111] ring-1 ring-blue-500/30" : ""}`}>
            
            {/* Watermark: Hidden on mobile to save space */}
            <div className="hidden md:block absolute -left-12 top-6 opacity-50 pointer-events-none">
               <span className="text-4xl font-black text-white/5">Q{currentQuestionIndex + 1}</span>
            </div>
            
            {/* Edit Button: Positioned relatively on mobile */}
            <div className="flex justify-between items-start mb-2 md:mb-0 md:block">
                {/* Mobile Label if Editing */}
                {isEditing && <span className="md:hidden text-xs font-bold text-blue-400 uppercase">Edit Text</span>}
                
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className={`md:absolute md:top-4 md:right-4 p-2 rounded-lg transition-all ml-auto ${
                    isEditing 
                      ? "bg-blue-500/20 text-blue-400" 
                      : "bg-transparent text-slate-600 hover:text-white md:opacity-0 md:group-hover:opacity-100"
                  }`}
                >
                  {isEditing ? <Check className="size-4" /> : <Edit3 className="size-4" />}
                </button>
            </div>

            {isEditing ? (
              <Textarea 
                value={currentQuestion.text}
                onChange={(e) => updateQuestion(currentQuestion.id, { text: e.target.value })}
                className="text-lg md:text-2xl font-semibold bg-[#1a1a1a] border-white/10 text-white min-h-[100px] resize-none focus-visible:ring-blue-500/50 p-3 md:p-4 leading-normal w-full"
              />
            ) : (
              <h1 className="text-lg md:text-3xl font-semibold text-white leading-snug md:leading-tight md:pr-12">
                {currentQuestion.text}
              </h1>
            )}
          </div>

          {/* Options Block */}
          <div className="mt-4 md:mt-8 space-y-3 md:space-y-4">
            {currentQuestion.type === 'mcq' ? (
              <div className="grid gap-3">
                {currentQuestion.options?.map((opt, idx) => (
                  <div 
                    key={idx} 
                    className={`group relative p-3 md:p-4 rounded-xl border transition-all ${
                      isEditing 
                        ? "border-dashed border-slate-700 bg-[#0A0A0A]" 
                        : currentQuestion.correctOption === idx 
                          ? "bg-blue-600/10 border-blue-500/50" 
                          : "bg-[#111] border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start md:items-center gap-3 md:gap-4">
                      {/* Letter / Selector */}
                      <button
                        onClick={() => isEditing && handleCorrectOptionChange(idx)}
                        className={`flex items-center justify-center size-7 md:size-8 shrink-0 rounded-full border text-xs md:text-sm font-bold transition-all mt-0.5 md:mt-0 ${
                          currentQuestion.correctOption === idx
                            ? "bg-blue-600 border-blue-500 text-white"
                            : isEditing
                              ? "border-slate-600 text-slate-600 hover:border-blue-400"
                              : "border-white/10 text-slate-500"
                        }`}
                        disabled={!isEditing}
                      >
                        {isEditing && currentQuestion.correctOption === idx ? <Check className="size-3 md:size-4" /> : String.fromCharCode(65 + idx)}
                      </button>
                      
                      {isEditing ? (
                        <div className="flex-1 min-w-0">
                            <Input 
                              value={opt}
                              onChange={(e) => handleOptionChange(idx, e.target.value)}
                              className="h-9 bg-[#1a1a1a] border-white/10 text-slate-200 text-sm w-full"
                              placeholder={`Option ${idx + 1}`}
                            />
                        </div>
                      ) : (
                        <span className={`text-sm md:text-base flex-1 pt-1 md:pt-0 ${currentQuestion.correctOption === idx ? "text-blue-100" : "text-slate-300"}`}>
                          {opt}
                        </span>
                      )}

                      {isEditing && (
                        <GripVertical className="hidden md:block size-4 text-slate-700 cursor-grab shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
               <div className="relative mt-4 md:mt-6">
                 <div className="h-32 md:h-48 rounded-xl border border-white/10 bg-[#0A0A0A] p-4 md:p-6 flex items-center justify-center text-slate-600 font-mono text-xs md:text-sm border-dashed">
                   [ Student Answer Area Preview ]
                 </div>
               </div>
            )}
          </div>

          <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-lg bg-indigo-950/20 border border-indigo-500/20 flex gap-3 items-start">
             <Sparkles className="size-4 md:size-5 text-indigo-400 shrink-0 mt-0.5" />
             <div className="flex-1 space-y-2 min-w-0">
               <div className="flex flex-wrap justify-between items-center gap-2">
                  <h4 className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-wide">AI Context</h4>
                  {isEditing && <span className="text-[10px] text-indigo-400/50 uppercase">Editable</span>}
               </div>
               
               {isEditing ? (
                  <Textarea 
                    value={currentQuestion.aiExplanation}
                    onChange={(e) => updateQuestion(currentQuestion.id, { aiExplanation: e.target.value })}
                    className="min-h-[80px] bg-indigo-950/30 border-indigo-500/30 text-indigo-100 text-sm"
                  />
               ) : (
                  <p className="text-xs md:text-sm text-indigo-200/70 leading-relaxed wrap-break-words">
                    {currentQuestion.aiExplanation}
                  </p>
               )}
             </div>
          </div>

        </div>
      </div>

      <div className="h-16 md:h-20 border-t border-white/5 bg-[#0A0A0A] px-4 md:px-8 flex items-center justify-between shrink-0 z-10">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 w-24 md:w-32 text-xs md:text-sm"
        >
          <ChevronLeft className="mr-1 md:mr-2 size-3 md:size-4" /> <span className="hidden md:inline">Previous</span><span className="md:hidden">Prev</span>
        </Button>

        <div className="hidden sm:flex gap-1.5 overflow-x-auto max-w-[150px] md:max-w-[300px] px-4 no-scrollbar">
          {questions.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setCurrentQuestionIndex(i)}
               className={`h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                 i === currentQuestionIndex 
                    ? "w-6 md:w-8 bg-blue-500" 
                    : "w-1.5 bg-white/10 hover:bg-white/30"
               }`} 
             />
          ))}
        </div>
        
        <span className="sm:hidden text-xs text-slate-500 font-mono">
            {currentQuestionIndex + 1} / {questions.length}
        </span>

        <Button 
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 w-24 md:w-32 text-xs md:text-sm"
        >
          <span className="hidden md:inline">Next</span><span className="md:hidden">Next</span> <ChevronRight className="ml-1 md:ml-2 size-3 md:size-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestionPanel;