"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInterviewStore, QuestionType } from "@/hooks/use-interview-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Mic, Camera, Code2, Database, Briefcase, LayoutTemplate, 
  Plus, Trash2, GripVertical, Save, VideoOff, TerminalSquare, StopCircle, MicOff
} from "lucide-react";

const ICON_OPTIONS = [
  { id: "code", icon: Code2, label: "Development" },
  { id: "database", icon: Database, label: "Backend/Data" },
  { id: "layout", icon: LayoutTemplate, label: "Frontend" },
  { id: "briefcase", icon: Briefcase, label: "Management" },
];

export default function InterviewBuilder() {
  const { config, setConfig, questions, addQuestion, removeQuestion } = useInterviewStore();
  
  // Local state for the "Add Question" form
  const [newQuestionText, setNewQuestionText] = useState("");
  const [newQuestionType, setNewQuestionType] = useState<QuestionType>("verbal");
  const [newStarterCode, setNewStarterCode] = useState("function solve() {\n  // Write your code here\n}");
  
  // Speech to Text State & Refs
  const [isRecording, setIsRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  // Initialize Web Speech API on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Support for Chrome, Edge, Safari
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false; // We only want final, confident sentences
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              currentTranscript += event.results[i][0].transcript;
            }
          }
          
          if (currentTranscript) {
            // Append the spoken text to whatever is already in the textarea
            setNewQuestionText((prev) => {
              const spacer = prev && !prev.endsWith(" ") ? " " : "";
              return prev + spacer + currentTranscript;
            });
          }
        };

        // Updated Error Handling
        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setIsRecording(false);
          
          if (event.error === 'network') {
            alert("Network Error: Your browser blocked the speech recognition service. If you are using Brave or a strict ad-blocker, please test this feature in Chrome or Edge.");
          } else if (event.error === 'not-allowed') {
            alert("Microphone access was denied. Please allow microphone permissions in your browser settings.");
          } else {
            alert(`Speech recognition stopped: ${event.error}`);
          }
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      } else {
        setSpeechSupported(false);
      }
    }

    // Cleanup on unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Toggle dictation
  const handleDictation = () => {
    if (!speechSupported) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Failed to start recording:", error);
      }
    }
  };

  const handleAddQuestion = () => {
    if (!newQuestionText.trim()) return;
    addQuestion({
      text: newQuestionText,
      type: newQuestionType,
      starterCode: newQuestionType === "coding" ? newStarterCode : undefined,
    });
    setNewQuestionText("");
    setNewQuestionType("verbal");
  };

  return (
    <div className="flex flex-col lg:flex-row h-full w-full bg-[#050505] overflow-hidden">
      
      {/* --- LEFT PANEL: INTERVIEW CONFIGURATION --- */}
      <div className="w-full lg:w-[340px] border-r border-white/10 bg-[#0A0A0A] flex flex-col shrink-0 overflow-y-auto">
        <div className="p-6 pb-4">
          <h2 className="text-xl font-bold text-white mb-1">Interview Settings</h2>
          <p className="text-sm text-slate-400">Configure global rules for this mock interview.</p>
        </div>
        <Separator className="bg-white/5" />
        
        <div className="p-6 space-y-8">
          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Interview Title</Label>
            <Input 
              placeholder="e.g. Senior Frontend Engineer" 
              value={config.title}
              onChange={(e) => setConfig('title', e.target.value)}
              className="bg-[#111] border-white/10 text-white h-10"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Display Icon</Label>
            <div className="grid grid-cols-4 gap-2">
              {ICON_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setConfig('icon', opt.id)}
                  className={`flex items-center justify-center p-3 rounded-lg border transition-all ${
                    config.icon === opt.id 
                      ? "bg-blue-600/20 border-blue-500 text-blue-400" 
                      : "bg-[#111] border-white/10 text-slate-400 hover:bg-white/5"
                  }`}
                  title={opt.label}
                >
                  <opt.icon className="size-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Difficulty Level</Label>
            <div className="flex gap-2">
              {["Easy", "Medium", "Hard", "Expert"].map((level, idx) => (
                <button
                  key={level}
                  onClick={() => setConfig('difficulty', idx + 1)}
                  className={`flex-1 py-2 rounded-md text-xs font-medium border transition-all ${
                    config.difficulty === idx + 1
                      ? "bg-white text-black border-white"
                      : "bg-transparent border-white/10 text-slate-400 hover:bg-white/5"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Interview Environment</Label>
            <div className="grid gap-3">
              <button
                onClick={() => setConfig('mode', 'proctored')}
                className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                  config.mode === 'proctored' ? "bg-blue-600/10 border-blue-500/50" : "bg-[#111] border-white/5 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Camera className={`size-4 ${config.mode === 'proctored' ? "text-blue-400" : "text-slate-400"}`} />
                  <span className={`text-sm font-semibold ${config.mode === 'proctored' ? "text-blue-100" : "text-slate-300"}`}>Proctored Mode</span>
                </div>
                <span className="text-xs text-slate-500">Requires student to enable Camera & Microphone.</span>
              </button>

              <button
                onClick={() => setConfig('mode', 'standard')}
                className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                  config.mode === 'standard' ? "bg-blue-600/10 border-blue-500/50" : "bg-[#111] border-white/5 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <VideoOff className={`size-4 ${config.mode === 'standard' ? "text-blue-400" : "text-slate-400"}`} />
                  <span className={`text-sm font-semibold ${config.mode === 'standard' ? "text-blue-100" : "text-slate-300"}`}>Standard Mode</span>
                </div>
                <span className="text-xs text-slate-500">Text and Code submissions only. No media required.</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT PANEL: QUESTION BUILDER --- */}
      <div className="flex-1 flex flex-col h-full bg-[#050505]">
        
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-[#0A0A0A]">
          <h2 className="font-semibold text-white">Questions Built ({questions.length})</h2>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white h-9 px-6 text-sm">
            <Save className="size-4 mr-2" /> Publish Interview
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 pb-32">
          
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div key={q.id} className="group bg-[#111] border border-white/10 rounded-xl p-5 flex gap-4 transition-all hover:border-white/20">
                <div className="mt-1 cursor-grab text-slate-600 hover:text-white">
                  <GripVertical className="size-5" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-slate-500">Q{idx + 1}.</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 flex items-center gap-1.5">
                        {q.type === 'coding' ? <TerminalSquare className="size-3" /> : <Mic className="size-3" />}
                        {q.type === 'coding' ? "Coding Challenge" : "Verbal Response"}
                      </span>
                    </div>
                    <button onClick={() => removeQuestion(q.id)} className="text-slate-600 hover:text-red-400 transition-colors">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">{q.text}</p>
                  
                  {q.type === 'coding' && (
                    <div className="mt-4 p-3 rounded-lg bg-[#0A0A0A] border border-white/5 font-mono text-xs text-blue-300/80 whitespace-pre-wrap">
                      {q.starterCode}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* New Question Form */}
          <div className="bg-[#0A0A0A] border border-dashed border-white/20 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Plus className="size-4 text-blue-500" /> Add New Question
            </h3>

            {/* Question Input with Real Mic Button */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-xs text-slate-400">Question Text</Label>
                {isRecording && <span className="text-[10px] text-red-400 font-medium animate-pulse">Listening...</span>}
              </div>
              <div className="relative">
                <Textarea 
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  placeholder="Type your question or click the microphone to dictate..."
                  className="bg-[#111] border-white/10 text-white min-h-[100px] resize-none pr-12 focus-visible:ring-blue-500/50"
                />
                
                {/* Speech to Text Toggle Button */}
                <button 
                  onClick={handleDictation}
                  disabled={!speechSupported}
                  className={`absolute bottom-3 right-3 p-2 rounded-full transition-all ${
                    !speechSupported 
                      ? "opacity-50 cursor-not-allowed bg-white/5 text-slate-600" 
                      : isRecording 
                        ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                  title={speechSupported ? (isRecording ? "Stop Dictation" : "Dictate Question") : "Browser not supported"}
                >
                  {speechSupported ? (
                    isRecording ? <StopCircle className="size-4" /> : <Mic className="size-4" />
                  ) : (
                    <MicOff className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-xs text-slate-400">Response Format expected from Student</Label>
              <div className="flex gap-3">
                <button
                  onClick={() => setNewQuestionType("verbal")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    newQuestionType === "verbal" ? "bg-blue-600/10 border-blue-500 text-blue-400" : "bg-[#111] border-white/10 text-slate-400"
                  }`}
                >
                  <Mic className="size-4" /> Verbal / Text
                </button>
                <button
                  onClick={() => setNewQuestionType("coding")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    newQuestionType === "coding" ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-[#111] border-white/10 text-slate-400"
                  }`}
                >
                  <TerminalSquare className="size-4" /> Coding (JavaScript)
                </button>
              </div>
            </div>

            {newQuestionType === "coding" && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                <Label className="text-xs text-slate-400">Starter Code (Optional)</Label>
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full px-4 py-2 bg-[#1a1a1a] border-b border-white/10 rounded-t-lg flex items-center gap-2">
                     <span className="size-2.5 rounded-full bg-red-500/50"></span>
                     <span className="size-2.5 rounded-full bg-yellow-500/50"></span>
                     <span className="size-2.5 rounded-full bg-green-500/50"></span>
                     <span className="ml-2 text-[10px] font-mono text-slate-500">index.js</span>
                  </div>
                  <Textarea 
                    value={newStarterCode}
                    onChange={(e) => setNewStarterCode(e.target.value)}
                    className="bg-[#0A0A0A] border-white/10 text-emerald-400 font-mono text-sm min-h-[160px] pt-12 focus-visible:ring-emerald-500/50"
                  />
                </div>
              </div>
            )}

            <Button 
              onClick={handleAddQuestion}
              disabled={!newQuestionText.trim()}
              variant="secondary" 
              className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
            >
              Add Question to List
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}