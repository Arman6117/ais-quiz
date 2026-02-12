"use client";
import React, { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Layers, Type, Sparkles, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ConfigurationPanel = () => {
  const [questionCount, setQuestionCount] = useState([10]);
  const [questionType, setQuestionType] = useState<"mcq" | "typing">("mcq");
  const [complexity, setComplexity] = useState<"intro" | "pro" | "expert">("pro");

  return (
    <div className="h-fit border-r border-white/10 w-[320px] bg-[#0A0A0A] flex flex-col">
      
      {/* Header */}
      <div className="p-6 pb-4">
        <h2 className="text-xl font-bold text-white mb-1">Configuration</h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Define the parameters for your AI-generated assessment.
        </p>
      </div>

      <Separator className="bg-white/5" />

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        
        {/* 1. Course & Module Selection */}
        <div className="space-y-5">
          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Target Course
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-[#111111] border-white/10 text-slate-300 h-10">
                <SelectValue placeholder="Select a course..." />
              </SelectTrigger>
              <SelectContent className="bg-[#111111] border-white/10 text-slate-300">
                <SelectItem value="react">React Development</SelectItem>
                <SelectItem value="backend">Backend Architecture</SelectItem>
                <SelectItem value="system">System Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Course Module
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-[#111111] border-white/10 text-slate-300 h-10">
                <SelectValue placeholder="Select a module..." />
              </SelectTrigger>
              <SelectContent className="bg-[#111111] border-white/10 text-slate-300">
                <SelectItem value="hooks">React Hooks Deep Dive</SelectItem>
                <SelectItem value="context">Context API & State</SelectItem>
                <SelectItem value="patterns">Advanced Patterns</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 2. Number of Questions */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Question Count
            </Label>
            <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
              {questionCount[0]}
            </span>
          </div>
          <Slider
            value={questionCount}
            onValueChange={setQuestionCount}
            max={50}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-[10px] text-slate-600 font-medium uppercase px-1">
            <span>5 Qs</span>
            <span>50 Qs</span>
          </div>
        </div>

        {/* 3. Question Type */}
        <div className="space-y-3">
          <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Question Type
          </Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setQuestionType("mcq")}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-sm font-medium transition-all ${
                questionType === "mcq"
                  ? "bg-blue-600/10 border-blue-500/50 text-blue-400"
                  : "bg-[#111111] border-white/5 text-slate-400 hover:bg-white/5 hover:border-white/10"
              }`}
            >
              <Layers className="size-4" />
              MCQ
            </button>
            <button
              onClick={() => setQuestionType("typing")}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-sm font-medium transition-all ${
                questionType === "typing"
                  ? "bg-blue-600/10 border-blue-500/50 text-blue-400"
                  : "bg-[#111111] border-white/5 text-slate-400 hover:bg-white/5 hover:border-white/10"
              }`}
            >
              <Type className="size-4" />
              Descriptive
            </button>
          </div>
        </div>

        {/* 4. Complexity Level */}
        <div className="space-y-3">
          <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Complexity
          </Label>
          <div className="flex flex-wrap gap-2">
            {["intro", "pro", "expert"].map((level) => (
              <button
                key={level}
                onClick={() => setComplexity(level as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all capitalize ${
                  complexity === level
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-300"
                }`}
              >
                {level === "intro" ? "Introductory" : level === "pro" ? "Professional" : "Expert"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Generate Button */}
      <div className="p-6 border-t border-white/5 bg-[#0A0A0A]">
        <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-900/20 transition-all">
          <Sparkles className="mr-2 size-4 fill-white/20" />
          Generate with AI
        </Button>
      </div>
    </div>
  );
};

export default ConfigurationPanel;