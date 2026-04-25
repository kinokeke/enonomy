import * as React from 'react';
import { useState } from 'react';
import { User, Hash, GraduationCap } from 'lucide-react';

interface LoginPageProps {
  onLogin: (name: string, seatNumber: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [name, setName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('请输入姓名');
      return;
    }
    if (!seatNumber.trim()) {
      setError('请输入座号');
      return;
    }
    setError('');
    onLogin(name.trim(), seatNumber.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">考生登录</h1>
              <p className="text-gray-500 text-sm mt-2">经济学基础考试系统</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                <span className="text-gray-500 text-sm">班级</span>
                <span className="font-medium text-gray-800">24物流1班</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  考生姓名
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="请输入姓名"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  考生座号
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    placeholder="请输入座号"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                进入考试
              </button>
            </form>
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
    </div>
  );
}
