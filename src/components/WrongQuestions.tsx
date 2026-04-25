import * as React from 'react';
import { useState, useEffect } from 'react';
import { Trash2, BookOpen, ChevronLeft } from 'lucide-react';
import { Question } from '../data/questions';

interface WrongQuestionsProps {
  questions: Question[];
  onRemove: (questionId: string) => void;
  onBack: () => void;
}

interface WrongQuestion extends Question {
  addedAt: number;
}

export default function WrongQuestions({ questions, onRemove, onBack }: WrongQuestionsProps) {
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>(questions);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setWrongQuestions(questions);
  }, [questions]);

  const removeQuestion = (id: string) => {
    onRemove(id);
    setWrongQuestions(prev => prev.filter(q => q.id !== id));
  };

  const clearAll = () => {
    wrongQuestions.forEach(q => onRemove(q.id));
    setWrongQuestions([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">错题集</h1>
          {wrongQuestions.length > 0 && (
            <button
              onClick={clearAll}
              className="text-sm text-red-500 hover:text-red-600"
            >
              清空
            </button>
          )}
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-4">
        {wrongQuestions.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">暂无错题</p>
            <p className="text-sm text-gray-400 mt-2">答题后可将错题收藏到这里</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 mb-4">
              共 {wrongQuestions.length} 道错题
            </p>
            <div>
              {wrongQuestions.map((q, index) => (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3"
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {q.question}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          正确答案: <span className="text-green-600 font-medium">{q.answer}</span>
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeQuestion(q.id);
                        }}
                        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {expandedId === q.id && (
                    <div className="bg-gray-50 border-t border-gray-100">
                      <div className="p-4">
                        <p className="text-xs text-gray-500 mb-2">解析</p>
                        <p className="text-sm text-gray-700">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
