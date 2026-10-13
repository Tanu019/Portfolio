import React, { useRef } from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { bioData } from '../data/projectsData';

export default function ResumeModal({ isOpen, onClose }) {
  const resumeRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#111827] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="bg-slate-100 dark:bg-[#0A0F17] px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-slate-950 uppercase bg-white text-slate-950 px-3 py-1 rounded-md font-bold">
              Official Resume
            </span>
            <span className="font-grotesk font-semibold text-sm tracking-wide text-slate-700 dark:text-slate-200 hidden sm:inline">
              Tanu Chaudhary — Business Analyst
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-slate-950 hover:bg-emerald-400 text-slate-950 rounded-xl font-sans text-xs font-bold transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-sans text-xs font-bold transition-all"
              aria-label="Close Resume Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Content */}
        <div ref={resumeRef} className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0A0F17] text-slate-900 dark:text-white print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 print:border-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/profile.jpg" 
                  alt="Tanu Chaudhary" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-[center_15%] border-2 border-slate-300 shadow-md shrink-0 print:border-gray-400"
                />
                <div>
                  <h1 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white print:text-black tracking-tight">
                    Tanu Chaudhary
                  </h1>
                  <p className="font-sans text-sm sm:base font-semibold text-emerald-600 dark:text-emerald-400 print:text-gray-800 mt-1">
                    Aspiring Business Analyst • MBA in Business Analytics
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-sans text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                <a href={`mailto:${bioData.email}`} className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-300">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 print:text-black" /> {bioData.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 print:text-black" /> {bioData.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 print:text-black" /> Ambedkar Nagar, UP, India
                </span>
                <div className="flex items-center gap-3 pt-1">
                  <a href={bioData.linkedin} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </a>
                  <a href={bioData.github} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1">
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white bg-slate-100 dark:bg-[#111827] px-3 py-1.5 border-l-4 border-white text-slate-950 mb-2 print:bg-gray-100 print:text-black">
              Professional Summary
            </h3>
            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 print:text-gray-900 leading-relaxed font-normal">
              Passionate about working with data and uncovering meaningful insights that support informed business decision-making. As an MBA student specializing in Business Analytics, I have developed a strong foundation in data analysis, data visualization, dashboard development, data cleaning, and financial valuation. Hands-on experience with Advanced Excel, Power BI, SQL, and commercial datasets to drive measurable business outcomes.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white bg-slate-100 dark:bg-[#111827] px-3 py-1.5 border-l-4 border-white text-slate-950 mb-3 print:bg-gray-100 print:text-black">
              Education
            </h3>
            <div className="space-y-3">
              {bioData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2 last:border-b-0 print:border-gray-200">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{edu.degree}</span>
                    <span className="text-slate-600 dark:text-slate-300 block sm:inline sm:ml-2">— {edu.institution}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 print:text-gray-600 mt-0.5">{edu.highlight}</p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 print:text-gray-800 shrink-0 mt-1 sm:mt-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white bg-slate-100 dark:bg-[#111827] px-3 py-1.5 border-l-4 border-white text-slate-950 mb-3 print:bg-gray-100 print:text-black">
              Internship Experience
            </h3>
            <div className="space-y-4">
              {bioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-base text-slate-900 dark:text-white print:text-black">{exp.role}</span>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 print:text-gray-700 sm:ml-2">— {exp.company}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 print:text-gray-800">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-1 pl-1 font-normal">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Core Skills */}
          <div>
            <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white bg-slate-100 dark:bg-[#111827] px-3 py-1.5 border-l-4 border-white text-slate-950 mb-3 print:bg-gray-100 print:text-black">
              Core Skills & Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">Data & Analysis</span>
                <p className="text-slate-600 dark:text-slate-300 print:text-gray-800">Advanced Excel (VLOOKUP, INDEX/MATCH, Pivots), SQL, Python (Pandas, EDA), Data Cleaning</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">Visualization & BI</span>
                <p className="text-slate-600 dark:text-slate-300 print:text-gray-800">Tableau, Power BI (DAX, Measures), Executive Dashboards, Storytelling</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">Finance & Modeling</span>
                <p className="text-slate-600 dark:text-slate-300 print:text-gray-800">Discounted Cash Flow (DCF), Valuation Sensitivity, Unit Economics, Machine Valuation</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">Business & Strategy</span>
                <p className="text-slate-600 dark:text-slate-300 print:text-gray-800">Market Research, Competitor Analysis, Requirement Gathering, Agile Methodology</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white bg-slate-100 dark:bg-[#111827] px-3 py-1.5 border-l-4 border-white text-slate-950 mb-3 print:bg-gray-100 print:text-black">
              Certifications & Workshops
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-sans">
              {bioData.certifications.map((cert, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                  <span className="font-semibold text-slate-900 dark:text-white print:text-black block truncate">{cert.name}</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 print:text-gray-600">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

