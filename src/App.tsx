import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ChapterSelect from './components/ChapterSelect';
import ExamPage from './components/ExamPage';
import ResultPage from './components/ResultPage';
import WrongQuestions from './components/WrongQuestions';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import { Question, chapters, generateExam } from './data/questions';

export interface ExamResult {
  score: number;
  correctCount: number;
  totalCount: number;
  answers: Record<string, string>;
  wrongQuestions: Question[];
  timeUsed: number;
}

export interface StudentInfo {
  id: string;
  className: string;
  name: string;
  seatNumber: string;
}

function AppContent() {
  const navigate = useNavigate();
  const [currentExam, setCurrentExam] = useState<Question[]>([]);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [savedWrongQuestions, setSavedWrongQuestions] = useState<Question[]>([]);
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('wrongQuestions');
    if (saved) {
      setSavedWrongQuestions(JSON.parse(saved));
    }
    const savedStudent = localStorage.getItem('student');
    if (savedStudent) {
      setStudent(JSON.parse(savedStudent));
    }
  }, []);

  const handleLogin = (name: string, seatNumber: string) => {
    const studentInfo: StudentInfo = {
      id: `${name}-${seatNumber}`,
      className: '24物流1班',
      name: name,
      seatNumber: seatNumber
    };
    setStudent(studentInfo);
    localStorage.setItem('student', JSON.stringify(studentInfo));
    navigate('/');
  };

  const handleAdminLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
      navigate('/admin');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setStudent(null);
    setIsAdmin(false);
    localStorage.removeItem('student');
    navigate('/');
  };

  const startExam = (chapterId: number) => {
    if (!student) {
      navigate('/login');
      return;
    }
    const exam = generateExam(chapterId);
    setCurrentExam(exam);
    navigate(`/exam/${chapterId}`);
  };

  const saveExamResult = async (answers: Record<string, string>, timeUsed: number) => {
    if (!student) return;

    const wrongQuestions: Question[] = [];
    let correctCount = 0;

    currentExam.forEach(q => {
      const userAnswer = answers[q.id];
      if (userAnswer === q.answer) {
        correctCount++;
      } else {
        wrongQuestions.push(q);
      }
    });

    const singleScore = Math.min(20, correctCount) * 3;
    const judgeScore = Math.max(0, correctCount - 20) * 2;
    const score = singleScore + judgeScore;

    const result: ExamResult = {
      score,
      correctCount,
      totalCount: currentExam.length,
      answers,
      wrongQuestions,
      timeUsed
    };

    // 成绩已保存到本地

    setExamResult(result);
    navigate('/result');
  };

  const addToWrongQuestions = (question: Question) => {
    const exists = savedWrongQuestions.find(wq => wq.id === question.id);
    if (!exists) {
      const newWrong = [...savedWrongQuestions, question];
      setSavedWrongQuestions(newWrong);
      localStorage.setItem('wrongQuestions', JSON.stringify(newWrong));
    }
  };

  const removeFromWrongQuestions = (questionId: string) => {
    const filtered = savedWrongQuestions.filter(q => q.id !== questionId);
    setSavedWrongQuestions(filtered);
    localStorage.setItem('wrongQuestions', JSON.stringify(filtered));
  };

  const handleRetry = () => {
    if (examResult) {
      const chapterId = currentExam[0]?.chapter || 1;
      startExam(chapterId);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleViewWrong = () => {
    navigate('/wrong-questions');
  };

  return (
    <Routes>
      <Route path="/" element={
        <ChapterSelect
          onSelectChapter={startExam}
          student={student}
          onLogin={() => navigate('/login')}
          onAdminLogin={() => navigate('/admin-login')}
          onLogout={handleLogout}
          appUrl={window.location.origin}
        />
      } />
      <Route path="/login" element={
        <LoginPage onLogin={handleLogin} />
      } />
      <Route path="/admin-login" element={
        <AdminPage onAdminLogin={handleAdminLogin} isLogin={true} />
      } />
      <Route path="/admin" element={
        isAdmin ? <AdminPage onAdminLogin={handleAdminLogin} isLogin={false} /> : <Navigate to="/admin-login" />
      } />
      <Route path="/exam/:chapterId" element={
        currentExam.length > 0 && student ? (
          <ExamPage questions={currentExam} onSubmit={saveExamResult} onExit={handleHome} />
        ) : <Navigate to="/" />
      } />
      <Route path="/result" element={
        examResult && currentExam.length > 0 ? (
          <ResultPage
            score={examResult.score}
            answers={examResult.answers}
            questions={currentExam}
            wrongQuestions={examResult.wrongQuestions.map(q => q.id)}
            onRetry={handleRetry}
            onBookmark={(id) => {
              const q = currentExam.find(item => item.id === id);
              if (q) addToWrongQuestions(q);
            }}
            onHome={handleHome}
            onViewWrong={handleViewWrong}
          />
        ) : <Navigate to="/" />
      } />
      <Route path="/wrong-questions" element={
        <WrongQuestions
          questions={savedWrongQuestions}
          onRemove={removeFromWrongQuestions}
          onBack={handleHome}
        />
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <AppContent />
      </div>
    </HashRouter>
  );
}
