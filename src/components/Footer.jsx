import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-200/70 dark:bg-[#07080B] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#1E2536] py-8 sm:py-10 select-none transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-300/70 dark:border-[#1E2536]">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white font-grotesk font-extrabold text-lg flex items-center justify-center shadow-md shadow-emerald-600/30">
              T
            </div>
            <div>
              <h4 className="font-grotesk font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                Tanu Chaudhary
              </h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                Business Analytics • Financial Modeling • Strategic Decision Making
              </p>
            </div>
          </div>

          {/* Real-Time IST Clock & Status */}
          <div className="flex items-center gap-4 sm:gap-6 font-sans text-xs font-semibold">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#111522] rounded-full border border-slate-200 dark:border-[#1E2536] text-slate-700 dark:text-slate-300 shadow-xs">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{time || '12:00:00 AM'} IST</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-900/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              <span>Open for Roles</span>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center gap-6">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="font-sans text-xs font-bold text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
              >
                Resume (PDF)
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-sans text-xs font-bold transition-all shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Sub-footer note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>© {new Date().getFullYear()} Tanu Chaudhary. Built with passion for data and business strategy.</p>
          <p className="text-emerald-600 dark:text-emerald-400 font-medium">Designed for Quantitative & Commercial Impact</p>
        </div>
      </div>
    </footer>
  );
}
