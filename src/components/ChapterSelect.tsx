import * as React from 'react';
import { BookOpen, ChevronRight, User, LogOut, Shield, Share2, X } from 'lucide-react';
import { chapters } from '../data/questions';
import type { StudentInfo } from '../App';
import SharePoster from './SharePoster';

interface ChapterSelectProps {
  onSelectChapter: (chapterId: number) => void;
  student: StudentInfo | null;
  onLogin: () => void;
  onAdminLogin: () => void;
  onLogout: () => void;
  appUrl?: string;
}

export default function ChapterSelect({ onSelectChapter, student, onLogin, onAdminLogin, onLogout, appUrl }: ChapterSelectProps) {
  const [showShareModal, setShowShareModal] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">经济学基础考试</h1>
            <p className="text-gray-600 text-sm">请选择要考试的章节</p>
          </div>

          {student && (
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.className} · 座号{student.seatNumber}</p>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {!student && (
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">请先登录后再考试</p>
                <button
                  onClick={onLogin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                >
                  登录
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="bg-white rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{chapter.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{chapter.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center space-y-3">
            <button
              onClick={onAdminLogin}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mx-auto"
            >
              <Shield className="w-4 h-4" />
              管理员入口
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mx-auto font-medium"
            >
              <Share2 className="w-4 h-4" />
              分享考试链接
            </button>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://conversation.cdn.meoo.host/conversations/305870402167672832/image/2026-04-24/1777016285891-校标.png?auth_key=00a5f9b41f5b9bfad55218b2ebcb368285932389944f752f8de56ed9d7039ae8"
              alt="厦门市同安职业技术学校"
              className="max-w-full h-auto mx-auto"
              style={{ maxHeight: '40px', mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            同学们，你们在复习上投入的每一分钟，都是在为自己的"未来价值"做投资。坚持下去，六月的学考就是你们收获回报的时刻！陈老师相信你们，加油！
          </p>
        </div>
      </div>

      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">分享考试</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <SharePoster
                appUrl={appUrl || window.location.origin}
                schoolLogoUrl="https://conversation.cdn.meoo.host/conversations/305870402167672832/image/2026-04-24/1777016285891-校标.png?auth_key=00a5f9b41f5b9bfad55218b2ebcb368285932389944f752f8de56ed9d7039ae8"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
