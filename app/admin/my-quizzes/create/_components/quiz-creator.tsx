"use client";

import React, { useState } from 'react';
import ConfigurationPanel from './configuration-panel';
import QuizQuestionPanel from './quiz-question-panel';
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

const QuizCreator = () => {
  const [isMobileConfigOpen, setIsMobileConfigOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] w-full bg-[#050505] overflow-hidden">
      
      <div className="hidden lg:block h-full shrink-0">
        <ConfigurationPanel />
      </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0A0A0A] shrink-0">
        <h1 className="font-bold text-white text-sm tracking-wide">New Quiz Module</h1>
        
        <Sheet open={isMobileConfigOpen} onOpenChange={setIsMobileConfigOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-slate-300 gap-2 h-8">
              <Settings2 className="size-4" /> Config
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-r border-white/10 bg-[#0A0A0A] w-[320px]">
          <SheetTitle>Config</SheetTitle>
            <ConfigurationPanel />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 h-full overflow-hidden relative">
        <QuizQuestionPanel />
      </div>
    </div>
  );
};

export default QuizCreator;