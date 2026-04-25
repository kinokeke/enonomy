export interface Question {
  id: string;
  chapter: number;
  type: 'single' | 'judge';
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

export interface ExamState {
  chapterId: number;
  questions: Question[];
  answers: UserAnswer[];
  currentIndex: number;
  startTime: number;
  endTime?: number;
  isSubmitted: boolean;
}

export interface WrongQuestion {
  question: Question;
  userAnswer: string;
  addedAt: number;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
}

export interface ExamResult {
  totalScore: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  timeUsed: number;
  answers: UserAnswer[];
}
