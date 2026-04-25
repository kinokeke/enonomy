import { Question } from '../data/questions';

export interface ExamResult {
  score: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  details: {
    questionId: string;
    isCorrect: boolean;
    userAnswer: string;
    correctAnswer: string;
  }[];
}

export interface WrongQuestion {
  question: Question;
  userAnswer: string;
  timestamp: number;
}

const WRONG_QUESTIONS_KEY = 'wrong_questions';

export function shuffleQuestions(questions: Question[]): Question[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleOptions(question: Question): Question {
  if (question.type !== 'single') return question;

  const options = [...question.options];
  const correctOption = options.find(opt => opt.startsWith(question.answer));

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  const newAnswer = correctOption
    ? options.find(opt => opt === correctOption)?.charAt(0) || question.answer
    : question.answer;

  return { ...question, options, answer: newAnswer };
}

export function calculateScore(
  questions: Question[],
  answers: Record<string, string>
): ExamResult {
  let correctCount = 0;
  let wrongCount = 0;
  const details: ExamResult['details'] = [];

  questions.forEach(q => {
    const userAnswer = answers[q.id] || '';
    const isCorrect = userAnswer === q.answer;

    if (isCorrect) {
      correctCount++;
    } else if (userAnswer) {
      wrongCount++;
    }

    details.push({
      questionId: q.id,
      isCorrect,
      userAnswer,
      correctAnswer: q.answer
    });
  });

  const unansweredCount = questions.length - correctCount - wrongCount;
  const singleScore = correctCount >= 20 ? 20 * 3 : correctCount * 3;
  const judgeScore = correctCount >= 20 ? 20 * 2 : (correctCount - 20) * 2;
  const score = Math.max(0, singleScore + Math.max(0, judgeScore));

  return {
    score,
    correctCount,
    wrongCount,
    unansweredCount,
    details
  };
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function getWrongQuestions(): WrongQuestion[] {
  const stored = localStorage.getItem(WRONG_QUESTIONS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addWrongQuestion(wrongQuestion: WrongQuestion): void {
  const wrongQuestions = getWrongQuestions();
  const exists = wrongQuestions.some(wq => wq.question.id === wrongQuestion.question.id);

  if (!exists) {
    wrongQuestions.push(wrongQuestion);
    localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(wrongQuestions));
  }
}

export function removeWrongQuestion(questionId: string): void {
  const wrongQuestions = getWrongQuestions().filter(wq => wq.question.id !== questionId);
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(wrongQuestions));
}

export function clearWrongQuestions(): void {
  localStorage.removeItem(WRONG_QUESTIONS_KEY);
}
