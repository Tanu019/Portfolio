import React from 'react';
import { Home, ArrowLeft, Search, Compass, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound({ onGoHome, onOpenResume }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-600 selection:text-white px-4 sm:px-6 py-10 transition-colors duration-200">
      
      {/* Top Header */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <button 
          onClick={onGoHome}
          className="flex items-center gap-3 focus:outline-none group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-950 text-white font-grotesk font-extrabold text-lg flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
            T
          </div>
          <div className="flex flex-col text-left">
            <span className="font-grotesk font-bold text-lg text-slate-900 dark:text-white leading-none">
              Tanu Chaudhary
            </span>
            <span className="font-sans text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 tracking-wide">
              Business Analyst
            </span>
          </div>
        </button>

        <button
          onClick={onGoHome}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-semibold bg-white dark:bg-[#111522] border border-slate-200 dark:border-[#1E2536] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-xs"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Center 404 Presentation */}
      <main className="max-w-xl mx-auto w-full text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-spin" />
            <span>ERROR 404 • ROUTE UNRESOLVED</span>
          </div>

          {/* Huge Number */}
          <h1 className="font-grotesk font-extrabold text-7xl sm:text-9xl text-slate-900 dark:text-white tracking-tighter">
            4<span className="text-emerald-600 dark:text-emerald-400">0</span>4
          </h1>

          <div className="space-y-2">
            <h2 className="font-grotesk font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Analytical Dataset Missing
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
              The page or resource you requested cannot be located in the current workspace directory. It may have been moved, archived, or renamed.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onGoHome}
              className="flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Return to Portfolio</span>
            </button>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-[#111522] border border-slate-200 dark:border-[#1E2536] text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-sans font-semibold text-sm rounded-full transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>View Resume</span>
              </button>
            )}
          </div>
        </motion.div>
      </main>

      {/* Footer Note */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs font-sans text-slate-500">
        <p>© {new Date().getFullYear()} Tanu Chaudhary. Business Analyst Portfolio.</p>
      </footer>

    </div>
  );
}
