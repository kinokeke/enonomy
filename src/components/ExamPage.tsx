import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Question } from '../data/questions';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface ExamPageProps {
  questions: Question[];
  onSubmit: (answers: Record<string, string>, timeUsed: number) => void;
  onExit: () => void;
}

const TIME_PER_QUESTION = 30;

export default function ExamPage({ questions, onSubmit, onExit }: ExamPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [totalTime, setTotalTime] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (isTimeUp) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
      setTotalTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimeUp, currentIndex]);

  useEffect(() => {
    setTimeLeft(TIME_PER_QUESTION);
    setIsTimeUp(false);
  }, [currentIndex]);

  const handleAnswer = useCallback((answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
  }, [currentQuestion]);

  const handleSubmit = useCallback(() => {
    onSubmit(answers, totalTime);
  }, [answers, totalTime, onSubmit]);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentIndex(index);
    }
  }, [totalQuestions]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={onExit} className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">退出</span>
          </button>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className={`font-mono text-lg font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-gray-800'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            {currentIndex + 1}/{totalQuestions}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 h-1">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
          {/* Question */}
          <div className="mb-6">
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">
                {currentQuestion.type === 'single' ? '单选' : '判断'}
              </span>
              <h2 className="text-lg font-medium text-gray-900 leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = answers[currentQuestion.id] === option.charAt(0);
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.charAt(0))}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => goToQuestion(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            上一题
          </button>

          {currentIndex === totalQuestions - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              提交试卷
            </button>
          ) : (
            <button
              onClick={() => goToQuestion(currentIndex + 1)}
              className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              下一题
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>

        {/* Question Grid */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">题目导航</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((q, idx) => {
              const isAnswered = answers[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(idx)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                    isCurrent
                      ? 'bg-blue-600 text-white'
                      : isAnswered
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-100 rounded" />
              <span>已答 {answeredCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-100 rounded" />
              <span>未答 {totalQuestions - answeredCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
