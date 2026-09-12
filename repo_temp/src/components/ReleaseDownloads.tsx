import { Download, FileArchive, Tag, ExternalLink, CheckCircle2, GitBranch, Sparkles } from 'lucide-react';

export function ReleaseDownloads() {
  return (
    <section className="space-y-6">
      {/* Release Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950 p-6 sm:p-8">
        <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              تم الوصول للمستودع والإصدار بنجاح
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-medium">
              <GitBranch className="w-3.5 h-3.5" />
              branch: remo-keyboard-v1.0.14
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono font-medium">
              <Tag className="w-3.5 h-3.5" />
              tag: v1.0.14-remo-keyboard
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ريموكيبورد مزخرف <span className="text-emerald-400 font-mono">1.0.14</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              تطبيق لوحة مفاتيح أندرويد أصلية (Android IME) فائقة الخفة والسلاسة، مع زخرفة نصوص، خطوط، ثيمات ملونة، حافظة ذكية، ودعم إيموجي شامل.
            </p>
          </div>

          {/* Release Highlights */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2 text-xs">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>ملاحظات التحديث لإصدار 1.0.14 على GitHub:</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              «إضافة نظام التصحيح التلقائي والمقترحات الذكية (Auto-Correction) للغة العربية والإنجليزية مع إمكانية التعلم وتفعيلها/إيقافها من الإعدادات، إضافة تأثير الاهتزاز الحقيقي (Haptic Feedback) مع زر تحكم خاص، تأكيد عمل زر الإدخال والسطر الجديد والمد (ـ)، وتحسين استجابة أزرار الكمبيوتر والمحاكي.»
            </p>
          </div>

          {/* Download Action Cards */}
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {/* Direct APK */}
            <div className="p-4 rounded-xl border-2 border-emerald-500/70 bg-emerald-950/30 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 font-mono">APK جاهز للتثبيت</span>
                  <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                    11 MB
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">تطبيق ريمو كيبورد (APK)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  حزمة أندرويد مجمعة وموقعة جاهزة للتثبيت المباشر على الهاتف دون الحاجة لأي أدوات تطوير.
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-500/20 mt-3 flex flex-col gap-2">
                <a
                  href="/RemoKeyboard-1.0.14.apk"
                  download="RemoKeyboard-1.0.14.apk"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all active:scale-95 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>تنزيل APK مباشر</span>
                </a>
                <a
                  href="/RemoKeyboard-1.0.14-Android-APK.zip"
                  download="RemoKeyboard-1.0.14-Android-APK.zip"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-700 text-[11px] font-semibold hover:bg-slate-800 transition-all"
                >
                  <FileArchive className="w-3 h-3" />
                  <span>تنزيل كأرشيف ZIP (10 MB)</span>
                </a>
              </div>
            </div>

            {/* Source Code Archive */}
            <div className="p-4 rounded-xl border border-cyan-500/40 bg-cyan-950/20 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 font-mono">الكود المصدري</span>
                  <span className="text-[11px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                    كامل المشروع
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">سورس كود ريمو كيبورد (ZIP)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  أرشيف يحتوي على كامل الكود المصدري للفرع 1.0.14 شاملاً مجلد الـ IME الأصلي واستوديو الثيمات والـ workflows.
                </p>
              </div>
              <div className="pt-4 border-t border-cyan-500/20 mt-3">
                <a
                  href="/remo-keyboard-1.0.14-source.zip"
                  download="remo-keyboard-1.0.14-source.zip"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all active:scale-95 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>تنزيل السورس كود (ZIP)</span>
                </a>
              </div>
            </div>

            {/* Official GitHub Release */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400 font-mono">GitHub Official</span>
                  <Tag className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <h3 className="font-bold text-white text-sm">صفحة الإصدار في GitHub</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تصفح الإصدار الرسمي، سجل التغييرات، والأصول المرفوعة مباشرة على مستودع جيتهاب.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 mt-3 flex flex-col gap-2">
                <a
                  href="https://github.com/ma4alhzmi1-ai-pro/remo-player-1-0-23/releases/tag/v1.0.14-remo-keyboard"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition-all active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>فتح رابط Release في GitHub</span>
                </a>
                <a
                  href="https://github.com/ma4alhzmi1-ai-pro/remo-player-1-0-23/tree/remo-keyboard-v1.0.14"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 text-[11px] font-semibold hover:bg-slate-900 transition-all"
                >
                  <GitBranch className="w-3 h-3" />
                  <span>تصفح الفرع remo-keyboard-v1.0.14</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
