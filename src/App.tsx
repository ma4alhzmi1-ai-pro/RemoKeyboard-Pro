import { useState } from "react";
import {
  Keyboard,
  Sparkles,
  Layers,
  Download,
  GitBranch,
  Tag,
  CheckCircle2,
  ExternalLink,
  Code2,
  Shield,
  Smartphone
} from "lucide-react";
import { KeyboardSimulator } from "./components/KeyboardSimulator";
import { DecorationStudio } from "./components/DecorationStudio";
import { CodeExplorer } from "./components/CodeExplorer";
import { ReleaseDownloads } from "./components/ReleaseDownloads";
import { SplashScreen } from "./components/SplashScreen";
import { DeveloperNoticeToast } from "./components/DeveloperNoticeToast";
import { UpdateNotificationModal } from "./components/UpdateNotificationModal";
import { KEYBOARD_THEMES } from "./data/keyboardData";
import { KeyboardTheme } from "./types/keyboard";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showDevNotice, setShowDevNotice] = useState(false);
  const [activeTab, setActiveTab] = useState<'simulator' | 'downloads' | 'studio' | 'code'>('simulator');
  const [currentTheme, setCurrentTheme] = useState<KeyboardTheme>(KEYBOARD_THEMES[0]);
  const [studioText, setStudioText] = useState('ريمو كيبورد 1.0.14');

  const handleDirectDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, '_blank');
    }
  };

  const handleSendToStudio = (text: string) => {
    setStudioText(text || 'ريمو كيبورد 1.0.13');
    setActiveTab('studio');
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowDevNotice(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black" dir="rtl">
      {/* 1. App Entry Splash Screen with Loading Counter */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* 2. Developer Notification Toast (Appears and auto-disappears on main screen) */}
      {showDevNotice && (
        <DeveloperNoticeToast onClose={() => setShowDevNotice(false)} duration={6000} />
      )}

      {/* 3. New Version Update Notification Modal */}
      <UpdateNotificationModal />

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Keyboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base sm:text-lg text-white tracking-tight">
                  ريمو كيبورد | Remo Keyboard
                </h1>
                <span className="text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
                  v1.0.13
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                لوحة المفاتيح المزخرفة مع محرك IME الأصلي للأندرويد واستوديو الثيمات والزخرفة
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Show Splash screen button */}
            <button
              onClick={() => setShowSplash(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 active:scale-95 transition-all"
              title="عرض شاشة دخول التطبيق مع عداد التحميل"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">شاشة الدخول</span>
            </button>

            {/* Re-trigger developer copyright notice */}
            <button
              onClick={() => setShowDevNotice(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700 hover:text-white active:scale-95 transition-all"
              title="عرض إشعار حقوق المطور"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">حقوق المطور</span>
            </button>

            {/* Quick GitHub Links */}
            <a
              href="https://github.com/ma4alhzmi1-ai-pro/remo-player-1-0-23/releases/tag/v1.0.13-remo-keyboard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 transition-all shadow-sm"
            >
              <Tag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">إصدار GitHub الرسمي</span>
              <span className="sm:hidden">v1.0.13</span>
            </a>
            <button
              onClick={() => handleDirectDownload('/RemoKeyboard-1.0.14.apk', 'RemoKeyboard-1.0.14.apk')}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تحميل APK (11 MB)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-800 bg-slate-900/30 sticky top-16 z-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'simulator'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>محاكي لوحة المفاتيح</span>
            </button>

            <button
              onClick={() => setActiveTab('studio')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'studio'
                  ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>استوديو الزخرفة الفورية</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'code'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>ملفات المشروع والتطوير (repo_temp)</span>
            </button>

            <button
              onClick={() => setActiveTab('downloads')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'downloads'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>التحميلات والإصدار</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">
              تم تحميل ملفات مشروع <strong className="text-white">ريمو كيبورد (Remo Keyboard 1.0.13)</strong> بنجاح ومتاحة للتطوير.
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <GitBranch className="w-3 h-3 text-cyan-400" />
              remo-keyboard-v1.0.13
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Tag className="w-3 h-3 text-purple-400" />
              v1.0.13-remo-keyboard
            </span>
          </div>
        </div>

        {/* Tab 1: Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            <KeyboardSimulator
              currentTheme={currentTheme}
              onThemeSelect={setCurrentTheme}
              onSendToStudio={handleSendToStudio}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2.5">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  أبرز ميزات ريمو كيبورد v1.0.13
                </h4>
                <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>إصلاح المد «ـ»:</strong> تم حل مشكلة ظهور الكشيدة/المد عند الضغط المطول على حرف «ت» وحركات التشكيل.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>حزمة ثيمات غنية:</strong> أنماط بناتية وكيوت وشبابية وإسلامية وطبيعية ورياضية وكمبيوتر كلاسيكي.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>الحافظة الذكية المتطورة:</strong> تدعم التمرير، تثبيت النصوص المهمة، وحذف النصوص غير المثبتة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>محرك IME أصلي خفيف:</strong> يعمل مباشرة على مستوى نظام أندرويد عبر InputMethodService بسرعة فائقة وبدون أي تأخير.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2.5">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  التطوير والتعديل في المشروع
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  كود المشروع متاح بالكامل في المجلد <code className="text-cyan-300 font-mono">repo_temp/</code>. يمكنك في أي وقت إخباري بالتعديلات التي تريد إجراؤها (مثلاً: إضافة ثيم جديد، تعديل ترتيب الأزرار، تحسين الحافظة، إضافة اختصارات جديدة، إلخ) وسأقوم بتطبيق التعديلات واختبارها فوراً.
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('code')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-all"
                  >
                    استعراض ملفات المشروع
                  </button>
                  <button
                    onClick={() => setActiveTab('downloads')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
                  >
                    تحميل حزمة الـ APK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Decoration Studio */}
        {activeTab === 'studio' && (
          <DecorationStudio initialText={studioText} />
        )}

        {/* Tab 3: Code Explorer */}
        {activeTab === 'code' && (
          <CodeExplorer />
        )}

        {/* Tab 4: Downloads */}
        {activeTab === 'downloads' && (
          <ReleaseDownloads />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 mt-16 py-8 text-center text-xs text-slate-500 space-y-2">
        <p>مشروع تطبيق ريمو كيبورد (Remo Keyboard 1.0.13) — تم الوصول للمستودع وتجهيز الملفات للتطوير والتعديل.</p>
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <a
            href="https://github.com/ma4alhzmi1-ai-pro/remo-player-1-0-23/releases/tag/v1.0.13-remo-keyboard"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            <span>GitHub Release</span>
          </a>
          <span>•</span>
          <button
            onClick={() => handleDirectDownload('/RemoKeyboard-1.0.14.apk', 'RemoKeyboard-1.0.14.apk')}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 text-xs text-slate-400"
          >
            <Download className="w-3 h-3" />
            <span>تحميل APK مباشر</span>
          </button>
          <span>•</span>
          <button
            onClick={() => handleDirectDownload('/remo-keyboard-1.0.14-source.zip', 'remo-keyboard-1.0.14-source.zip')}
            className="hover:text-purple-400 transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 text-xs text-slate-400"
          >
            <Download className="w-3 h-3" />
            <span>السورس كود (ZIP)</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
