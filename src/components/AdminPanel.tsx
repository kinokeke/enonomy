import * as React from 'react';
import { useState, useEffect } from 'react';
import { Download, ChevronLeft, Trophy } from 'lucide-react';
import { supabase } from '../supabase/client';

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

interface AdminPanelProps {
  onBack: () => void;
}

export default function AdminPanel({ onBack }: AdminPanelProps) {
  const [results, setResults] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from('exam_results')
      .select(`
        id,
        chapter_id,
        score,
        correct_count,
        time_used,
        created_at,
        students:class_name,
        students:name,
        students:seat_number
      `)
      .order('score', { ascending: false });

    if (data) {
      const formatted = data.map((item: any) => ({
        id: item.id,
        student_name: item.students?.name || '',
        seat_number: item.students?.seat_number || '',
        class_name: item.students?.class_name || '24物流1班',
        chapter_id: item.chapter_id,
        score: item.score,
        correct_count: item.correct_count,
        time_used: item.time_used,
        created_at: item.created_at
      }));
      setResults(formatted);
    }
    setLoading(false);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-1 text-gray-600">
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
