import React from 'react';
import { Target, Zap, BarChart2, TrendingUp, Database, FileSpreadsheet } from 'lucide-react';

export default function ValueStrip() {
  const statements = [
    { text: "1.2M+ Rows Analyzed", icon: Database, accent: "text-emerald-600 dark:text-emerald-400" },
    { text: "+₹4.2L Profit Recovered", icon: TrendingUp, accent: "text-emerald-600 dark:text-emerald-400" },
    { text: "Exploratory Data Analysis & Modeling", icon: FileSpreadsheet, accent: "text-emerald-600 dark:text-emerald-400" },
    { text: "Tableau & Power BI Scorecards", icon: BarChart2, accent: "text-emerald-600 dark:text-emerald-400" },
    { text: "Unit Economics & Margin Velocity", icon: Target, accent: "text-emerald-600 dark:text-emerald-400" },
    { text: "Open to Full-Time Roles", icon: Zap, accent: "text-emerald-500" },
  ];

  return (
    <div className="relative bg-white dark:bg-[#0E1520] text-slate-800 dark:text-white border-y border-slate-200 dark:border-slate-800 py-3 sm:py-3.5 overflow-hidden select-none transition-colors duration-200 shadow-2xs">
      <div className="flex w-full">
        {/* Animated Marquee Strip */}
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-8 sm:gap-12 mr-8 sm:mr-12">
              {statements.map((stmt, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <stmt.icon className={`w-4 h-4 ${stmt.accent} shrink-0`} />
                  <span className="font-grotesk font-bold text-xs sm:text-sm tracking-wide text-slate-800 dark:text-slate-200">
                    {stmt.text}
                  </span>
                  <span className="inline-block w-1 h-1 bg-emerald-500 rounded-full mx-2" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
