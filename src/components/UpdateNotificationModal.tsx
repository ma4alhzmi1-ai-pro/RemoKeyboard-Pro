import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Heart, Sliders, Download, X, CheckCircle2 } from 'lucide-react';

export function UpdateNotificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seenVersion = localStorage.getItem('remo_seen_version_1.0.14');
    if (!seenVersion) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('remo_seen_version_1.0.14', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" dir="rtl">
      <div className="relative w-full max-w-lg rounded-2xl border border-emerald-500/40 bg-slate-900 shadow-2xl overflow-hidden text-right">
        {/* Header Banner */}
        <div className="relative p-6 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 border-b border-slate-800">
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
              إصدار جديد v1.0.14
            </span>
            <span className="flex items-center gap-1 text-xs text-cyan-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              تم الرفع والتحديث بنجاح
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white">
            مرحباً بك في تحديث ريمو كيبورد الشامل 🚀
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            تم دمج ورفع كافة الإضافات الجديدة وربطها بالمستودع وحزم التحميل المباشر.
          </p>
        </div>

        {/* Features List */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-0.5">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">شعارات وخلفيات الأندية العالمية والمحلية</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تمت إضافة شعارات 3D مذهلة لأندية (الهلال، النصر، الاتحاد، الأهلي، ريال مدريد، برشلونة، مانشستر يونايتد، ليفربول) وتعمل تلقائياً كخلفية للوحة المفاتيح.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 mt-0.5">
              <Heart className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">أزرار القلوب المتوهجة للثيمات النسائية</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تحويل أشكال ومفاتيح الكيبورد تلقائياً إلى قلوب لامعة وجذابة عند اختيار الثيمات النسائية والرومانسية والكيوت.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 mt-0.5">
              <Sliders className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">التحكم الدقيق بارتفاع الكيبورد وحجم الخط</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                شريط تحكم متقدم لتعديل حجم الحروف وتكبير/تصغير ارتفاع لوحة المفاتيح في الوضعين العمودي والأفقي بكل مرونة.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
              <Download className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">التحميل المباشر الفوري (بدون جيت هاب)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تم تفعيل نظام التنزيل المباشر بضغطة زر واحدة (APK وملفات ZIP) لجميع حزم الإصدار 1.0.14 دون الحاجة لأي تسجيل دخول.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={handleClose}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            حسناً، ابدأ الاستخدام 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
