import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, ShieldCheck } from 'lucide-react';

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
    <footer className="bg-[#0A0F16] text-[#F1F5F9] border-t border-[#223245] py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#223245]">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-sky-500 text-slate-950 rounded-xl flex items-center justify-center font-grotesk font-extrabold text-xl border border-sky-400 shadow-md">
              TC
            </div>
            <div>
              <h4 className="font-grotesk font-extrabold text-2xl text-white tracking-tight">
                TANU CHAUDHARY
              </h4>
              <p className="font-mono text-xs font-bold text-slate-400">
                Business Analytics • Financial Modeling • Strategic Decision Systems
              </p>
            </div>
          </div>

          {/* Real-Time IST Clock & Status */}
          <div className="flex items-center gap-6 font-mono text-xs font-bold">
            <div className="flex items-center gap-2 px-3.5 py-2 bg-[#111923] rounded-xl border border-[#223245] text-slate-200">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{time || '12:00:00 AM'} IST</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 bg-[#111923] rounded-xl border border-emerald-500/30 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenResume}
              className="font-mono text-xs uppercase font-extrabold text-sky-300 hover:text-white hover:underline transition-colors"
            >
              Resume (PDF)
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl font-mono text-xs font-bold transition-all shadow-md"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-footer note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-slate-400">
          <p>© {new Date().getFullYear()} Tanu Chaudhary. Built with passion for data & strategy.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Designed for Analytical & Commercial Impact</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

