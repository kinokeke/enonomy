import * as React from 'react';
import { useState, useEffect } from 'react';
import { Download, ChevronLeft, Trophy, Shield, Lock } from 'lucide-react';

interface ExamResult {
  id: string;
  student_name: string;
  seat_number: string;
  class_name: string;
  chapter_id: number;
  score: number;
  correct_count: number;
  time_used: number;
  created_at: string;
}

interface AdminPageProps {
  onAdminLogin?: (username: string, password: string) => boolean;
  isLogin?: boolean;
}

export default function AdminPage({ onAdminLogin, isLogin = false }: AdminPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!isLogin);

  useEffect(() => {
    if (isLoggedIn) {
      fetchResults();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  const fetchResults = async () => {
    // 从本地存储获取成绩数据
    const localResults = localStorage.getItem('examResults');
    if (localResults) {
      const parsed = JSON.parse(localResults);
      setResults(parsed);
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAdminLogin) {
      const success = onAdminLogin(username, password);
      if (success) {
        setIsLoggedIn(true);
        setError('');
      } else {
        setError('用户名或密码错误');
      }
    }
  };

  const exportCSV = () => {
    const headers = ['排名', '班级', '姓名', '座号', '章节', '分数', '正确数', '用时(秒)', '考试时间'];
    const rows = results.map((r, index) => [
      index + 1,
      r.class_name,
      r.student_name,
      r.seat_number,
      `第${r.chapter_id}章`,
      r.score,
      r.correct_count,
      r.time_used,
      new Date(r.created_at).toLocaleString()
    ]);

    const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `考试成绩_${new Date().toLocaleDateString()}.csv`;
    link.click();
  };

  const handleBack = () => {
    window.history.back();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">管理员登录</h1>
              <p className="text-gray-500 text-sm mt-2">成绩管理系统</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  用户名
                </label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="请输入用户名"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  密码
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="请输入密码"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                登录
              </button>

              <button
                onClick={handleBack}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                返回
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button onClick={handleBack} className="flex items-center gap-1 text-gray-600">
            <ChevronLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
          <h1 className="text-lg font-semibold">成绩管理</h1>
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            <Download className="w-4 h-4" />
            导出
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4">
        {loading ? (
          <div className="text-center py-10 text-gray-500">加载中...</div>
        ) : results.length === 0 ? (
          <div className="text-center py-10 text-gray-500">暂无成绩数据</div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">排名</th>
                  <th className="px-4 py-3 text-left">姓名</th>
                  <th className="px-4 py-3 text-left">座号</th>
                  <th className="px-4 py-3 text-left">章节</th>
                  <th className="px-4 py-3 text-left">分数</th>
                  <th className="px-4 py-3 text-left">正确数</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, index) => (
                  <tr key={r.id} className="border-t border-gray-100">
                    <td className="px-4 py-3">
                      {index < 3 ? (
                        <Trophy className={`w-5 h-5 ${
                          index === 0 ? 'text-yellow-500' :
                          index === 1 ? 'text-gray-400' : 'text-orange-400'
                        }`} />
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td className="px-4 py-3">{r.student_name}</td>
                    <td className="px-4 py-3">{r.seat_number}</td>
                    <td className="px-4 py-3">第{r.chapter_id}章</td>
                    <td className="px-4 py-3 font-semibold text-blue-600">{r.score}</td>
                    <td className="px-4 py-3">{r.correct_count}/40</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
