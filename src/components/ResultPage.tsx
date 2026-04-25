import * as React from 'react';
import { RotateCcw, Bookmark, Home } from 'lucide-react';
import type { Question } from '../data/questions';

interface ResultPageProps {
  score: number;
  answers: Record<string, string>;
  questions: Question[];
  wrongQuestions: string[];
  onRetry: () => void;
  onBookmark: (questionId: string) => void;
  onHome: () => void;
  onViewWrong: () => void;
}

export default function ResultPage({
  score,
  answers,
  questions,
  wrongQuestions,
  onRetry,
  onBookmark,
  onHome,
  onViewWrong
}: ResultPageProps) {
  const totalQuestions = questions.length;
  const correctCount = totalQuestions - wrongQuestions.length;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* 分数卡片 */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center mb-4">
          <h2 className="text-lg mb-2">考试完成</h2>
          <div className="text-5xl font-bold mb-2">{score}</div>
          <div className="text-sm opacity-90">总分 100 分</div>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <div>
              <span className="text-green-300">正确 {correctCount}</span>
            </div>
            <div>
              <span className="text-red-300">错误 {wrongQuestions.length}</span>
            </div>
            <div>
              <span className="text-blue-200">正确率 {accuracy}%</span>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={onRetry}
            className="flex-1 bg-white rounded-xl p-3 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <RotateCcw size={18} />
            <span className="text-sm">重新考试</span>
          </button>
          {wrongQuestions.length > 0 && (
            <button
              onClick={onViewWrong}
              className="flex-1 bg-orange-50 rounded-xl p-3 flex items-center justify-center gap-2 text-orange-600 hover:bg-orange-100 transition-colors"
            >
              <Bookmark size={18} />
              <span className="text-sm">错题集</span>
            </button>
          )}
          <button
            onClick={onHome}
            className="flex-1 bg-gray-100 rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Home size={18} />
            <span className="text-sm">返回首页</span>
          </button>
        </div>

        {/* 题目解析列表 */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-800">答案解析</h3>
          {questions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.answer;
            const isBookmarked = false;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl p-4 shadow-sm ${
                  isCorrect ? 'border-l-4 border-green-400' : 'border-l-4 border-red-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`text-xs px-2 py-1 rounded ${
                    isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {isCorrect ? '正确' : '错误'}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 mb-2">
                      {index + 1}. {q.question}
                    </p>
                    <div className="text-xs text-gray-500 mb-2">
                      你的答案: {userAnswer || '未作答'} | 正确答案: {q.answer}
                    </div>
                    {!isCorrect && (
                      <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
                        <span className="font-medium">解析: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                  {!isCorrect && (
                    <button
                      onClick={() => onBookmark(q.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'bg-orange-100 text-orange-500'
                          : 'bg-gray-100 text-gray-400 hover:bg-orange-50 hover:text-orange-400'
                      }`}
                    >
                      <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
