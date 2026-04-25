import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

interface SharePosterProps {
  appUrl: string;
  schoolLogoUrl: string;
}

export default function SharePoster({ appUrl, schoolLogoUrl }: SharePosterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [posterUrl, setPosterUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    generatePoster();
  }, [appUrl, schoolLogoUrl]);

  const generatePoster = async () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = 375;
      const height = 667;
      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = '#4a5d23';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 50 + i * 40, 0, Math.PI * 2);
        ctx.stroke();
      }

      const logoWidth = 240;
      const logoHeight = 80;
      const logoY = 50;

      ctx.fillStyle = '#f5f5dc';
      ctx.fillRect(width / 2 - logoWidth / 2 - 10, logoY - 10, logoWidth + 20, logoHeight + 20);

      const logo = new Image();
      logo.crossOrigin = 'anonymous';

      logo.onerror = () => {
        setError('校标图片加载失败');
        drawTextOnly(ctx, width, logoY, logoHeight);
      };

      logo.onload = () => {
        try {
          ctx.drawImage(logo, width / 2 - logoWidth / 2, logoY, logoWidth, logoHeight);
          drawTextOnly(ctx, width, logoY, logoHeight);
        } catch (e) {
          setError('绘制图片失败');
          drawTextOnly(ctx, width, logoY, logoHeight);
        }
      };

      logo.src = schoolLogoUrl;
    } catch (e) {
      setError('生成海报失败');
    }
  };

  const drawTextOnly = async (ctx: CanvasRenderingContext2D, width: number, logoY: number, logoHeight: number) => {
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('经济学基础1-4章测试', width / 2, logoY + logoHeight + 50);

    ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('24物流1班 在线考试系统', width / 2, logoY + logoHeight + 80);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, logoY + logoHeight + 100);
    ctx.lineTo(width - 60, logoY + logoHeight + 100);
    ctx.stroke();

    const qrY = logoY + logoHeight + 120;
    const qrSize = 180;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.roundRect(width / 2 - qrSize / 2 - 15, qrY - 15, qrSize + 30, qrSize + 60, 12);
    ctx.fill();

    try {
      const qrCanvas = document.createElement('canvas');
      const isLocalhost = appUrl.includes('localhost') || appUrl.includes('127.0.0.1');
      const qrText = isLocalhost ? 'https://example.com' : appUrl;
      await QRCode.toCanvas(qrCanvas, qrText, {
        width: qrSize,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });
      ctx.drawImage(qrCanvas, width / 2 - qrSize / 2, qrY);

      if (isLocalhost) {
        ctx.fillStyle = '#ff6b6b';
        ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillText('⚠️ 本地环境，请部署后使用', width / 2, qrY + qrSize + 55);
      }
    } catch (e) {
      setError('生成二维码失败');
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillText('扫描二维码开始考试', width / 2, qrY + qrSize + 35);

    const bottomY = 667 - 80;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillText('包含：需求供给、消费者行为、生产与成本、市场结构', width / 2, bottomY);
    ctx.fillText('20道单选题 + 20道判断题 | 30秒限时答题', width / 2, bottomY + 20);

    try {
      setPosterUrl(canvasRef.current!.toDataURL('image/png'));
    } catch (e) {
      setError('生成图片失败');
    }
  };

  const downloadPoster = () => {
    if (!posterUrl) return;
    const link = document.createElement('a');
    link.download = '经济学基础考试分享图.png';
    link.href = posterUrl;
    link.click();
  };

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="text-red-500 text-sm">{error}</div>
        <div className="text-gray-600 text-sm">分享链接: {appUrl}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <canvas
        ref={canvasRef}
        style={{ width: '375px', height: '667px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
      />
      {posterUrl && (
        <button
          onClick={downloadPoster}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          下载分享图
        </button>
      )}
    </div>
  );
}
