"use client";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Layers, Type, Sparkles, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useQuizStore } from "@/hooks/use-quiz-store";

const ConfigurationPanel = () => {
  const { config, setConfig, generateQuestions, isGenerating } = useQuizStore();

  return (
    <div className="h-full border-r border-white/10 w-[320px] bg-[#0A0A0A] flex flex-col shrink-0">
      
      <div className="p-6 pb-4">
        <h2 className="text-xl font-bold text-white mb-1">Configuration</h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Define parameters for AI assessment.
        </p>
      </div>

      <Separator className="bg-white/5" />

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        
        <div className="space-y-5">
          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Target Course</Label>
            <Select onValueChange={(v) => setConfig('course', v)} value={config.course}>
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
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Module</Label>
            <Select onValueChange={(v) => setConfig('module', v)} value={config.module}>
              <SelectTrigger className="w-full bg-[#111111] border-white/10 text-slate-300 h-10">
                <SelectValue placeholder="Select a module..." />
              </SelectTrigger>
              <SelectContent className="bg-[#111111] border-white/10 text-slate-300">
                <SelectItem value="hooks">React Hooks Deep Dive</SelectItem>
                <SelectItem value="security">Web Security 101</SelectItem>
                <SelectItem value="db">Database Indexing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Question Count</Label>
            <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
              {config.count}
            </span>
          </div>
          <Slider
            value={[config.count]}
            onValueChange={(v) => setConfig('count', v[0])}
            max={30} step={1} min={1}
            className="py-4"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setConfig('type', 'mcq')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-sm font-medium transition-all ${
                config.type === "mcq"
                  ? "bg-blue-600/10 border-blue-500/50 text-blue-400"
                  : "bg-[#111111] border-white/5 text-slate-400 hover:bg-white/5"
              }`}
            >
              <Layers className="size-4" /> MCQ
            </button>
            <button
              onClick={() => setConfig('type', 'descriptive')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-sm font-medium transition-all ${
                config.type === "descriptive"
                  ? "bg-blue-600/10 border-blue-500/50 text-blue-400"
                  : "bg-[#111111] border-white/5 text-slate-400 hover:bg-white/5"
              }`}
            >
              <Type className="size-4" /> Descriptive
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-white/5 bg-[#0A0A0A]">
        <Button 
          onClick={generateQuestions}
          disabled={isGenerating || !config.course}
          className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/20 transition-all"
        >
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Sparkles className="mr-2 size-4" />}
          {isGenerating ? "Generating..." : "Generate with AI"}
        </Button>
      </div>
    </div>
  );
};

export default ConfigurationPanel;