export type QuestionType = "mcq" | "descriptive";
export type ComplexityLevel = "intro" | "pro" | "expert";

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  correctOption?: number;
  aiExplanation?: string;
}

export interface QuizState {
  config: {
    course: string;
    module: string;
    count: number;
    type: QuestionType;
    complexity: ComplexityLevel;
  };

  questions:Question[];
  isGenerating :boolean;
  currentQuestionIndex:number
  
  setConfig: (key: keyof QuizState['config'], value: any) => void;
  generateQuestions: () => Promise<void>;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  setCurrentQuestionIndex: (index: number) => void;
}
