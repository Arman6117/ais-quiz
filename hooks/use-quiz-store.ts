import { Question, QuizState } from "@/types/quiz-questions";
import { create } from "zustand";
export const useQuizStore = create<QuizState>((set, get) => ({
  config: {
    complexity: "pro",
    course: "",
    module: "",
    count: 10,
    type: "mcq",
  },
  questions: [],
  isGenerating: false,
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  setConfig: (key, value) =>
    set((state) => ({
      config: {
        ...state.config,
        [key]: value,
      },
    })),
  updateQuestion: (id, updates) =>
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === id ? { ...q, ...updates } : q
      ),
    })),
  generateQuestions: async () => {
    const { config } = get();
    set({ isGenerating: true });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const dummyQuestions: Question[] = Array.from({ length: config.count }).map(
      (_, i) => ({
        id: `q-${i}`,
        type: config.type,
        text:
          config.type === "mcq"
            ? `What is the primary function of ${
                config.module || "this concept"
              } in ${config.course || "development"}? (Question ${i + 1})`
            : `Explain the architectural implications of implementing ${config.module} in a high-traffic environment.`,
        options:
          config.type === "mcq"
            ? [
                "It optimizes server-side rendering performance.",
                "It acts as a middleware for security headers.",
                "It manages global state across components.",
                "It reduces database query latency.",
              ]
            : undefined,
        correctOption: 1,
        aiExplanation:
          "This question tests the student's understanding of core architectural patterns.",
      })
    );
    set({
      questions: dummyQuestions,
      isGenerating: false,
      currentQuestionIndex: 0,
    });
  },
}));
