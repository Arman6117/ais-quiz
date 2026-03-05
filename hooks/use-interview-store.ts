// src/hooks/use-interview-store.ts
import { create } from 'zustand';

export type InterviewMode = 'proctored' | 'standard'; // proctored = cam/mic needed
export type QuestionType = 'verbal' | 'coding';

export interface InterviewQuestion {
  id: string;
  text: string;
  type: QuestionType;
  starterCode?: string; // For coding questions
  expectedConcepts?: string; // Notes for the admin/evaluator
}

interface InterviewState {
  config: {
    title: string;
    icon: string;
    difficulty: number; // 1: Easy, 2: Medium, 3: Hard, 4: Expert
    mode: InterviewMode;
  };
  questions: InterviewQuestion[];
  
  setConfig: (key: keyof InterviewState['config'], value: any) => void;
  addQuestion: (question: Omit<InterviewQuestion, 'id'>) => void;
  updateQuestion: (id: string, updates: Partial<InterviewQuestion>) => void;
  removeQuestion: (id: string) => void;
}

export const useInterviewStore = create<InterviewState>((set) => ({
  config: {
    title: '',
    icon: 'code',
    difficulty: 2,
    mode: 'proctored',
  },
  questions: [],

  setConfig: (key, value) => 
    set((state) => ({ config: { ...state.config, [key]: value } })),

  addQuestion: (question) => 
    set((state) => ({
      questions: [...state.questions, { ...question, id: crypto.randomUUID() }]
    })),

  updateQuestion: (id, updates) =>
    set((state) => ({
      questions: state.questions.map((q) => 
        q.id === id ? { ...q, ...updates } : q
      ),
    })),

  removeQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((q) => q.id !== id)
    })),
}));