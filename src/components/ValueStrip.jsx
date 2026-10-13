import React from 'react';
import { Target, Zap, BarChart2 } from 'lucide-react';

export default function ValueStrip() {
  const statements = [
    { text: "DATA-DRIVEN THINKING", icon: BarChart2, accent: "text-sky-400" },
    { text: "BUSINESS-FIRST APPROACH", icon: Target, accent: "text-cyan-400" },
    { text: "INSIGHT-LED SOLUTIONS", icon: Zap, accent: "text-sky-400" },
  ];

  return (
    <div className="relative bg-[#0E1520] text-white border-y border-[#223245] py-4 sm:py-5 overflow-hidden select-none">
      <div className="flex w-full">
        {/* Animated Marquee Strip */}
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-8 sm:gap-12 mr-8 sm:mr-12">
              {statements.map((stmt, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <stmt.icon className={`w-5 h-5 ${stmt.accent}`} />
                  <span className="font-grotesk font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight text-white">
                    {stmt.text}
                  </span>
                  <span className="inline-block w-2.5 h-2.5 bg-sky-400 rounded-full mx-2" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

