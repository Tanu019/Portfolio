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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#111923] text-white rounded-2xl border border-[#223245] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="bg-[#0A0F16] text-white px-6 py-4 flex items-center justify-between border-b border-[#223245] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-950 uppercase bg-sky-500 px-3 py-1 rounded-md font-extrabold border border-sky-400">
              OFFICIAL RESUME
            </span>
            <span className="font-grotesk font-bold text-sm tracking-wide text-slate-200 hidden sm:inline">
              Tanu Chaudhary — Business Analyst
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl font-mono text-xs font-bold transition-all shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#182332] hover:bg-[#223245] text-white rounded-lg font-mono text-xs font-bold transition-all border border-[#223245]"
              aria-label="Close Resume Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Content */}
        <div ref={resumeRef} className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0A0F16] text-white print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-[#223245] pb-6 print:border-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white print:text-black tracking-tight">
                  TANU CHAUDHARY
                </h1>
                <p className="font-sans text-base font-bold text-sky-400 print:text-gray-800 mt-1">
                  Aspiring Business Analyst • MBA in Business Analytics
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono font-semibold text-slate-300 print:text-gray-800 space-y-1">
                <a href={`mailto:${bioData.email}`} className="flex items-center gap-1.5 hover:text-sky-300">
                  <Mail className="w-3.5 h-3.5 text-sky-400 print:text-black" /> {bioData.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400 print:text-black" /> {bioData.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 print:text-black" /> Ambedkar Nagar, UP, India
                </span>
                <div className="flex items-center gap-3 pt-1">
                  <a href={bioData.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 font-bold hover:underline flex items-center gap-1">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </a>
                  <a href={bioData.github} target="_blank" rel="noreferrer" className="text-sky-400 font-bold hover:underline flex items-center gap-1">
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-grotesk font-extrabold text-sm uppercase tracking-wider text-white bg-[#111923] px-3 py-1.5 border-l-4 border-sky-400 mb-2 print:bg-gray-100 print:text-black">
              Professional Summary
            </h3>
            <p className="font-sans text-sm text-slate-300 print:text-gray-900 leading-relaxed font-normal">
              Passionate about working with data and uncovering meaningful insights that support informed business decision-making. As an MBA student specializing in Business Analytics, I have developed a strong foundation in data analysis, data visualization, dashboard development, data cleaning, and financial valuation. Hands-on experience with Advanced Excel, Power BI, SQL, and commercial datasets to drive measurable business outcomes.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-grotesk font-extrabold text-sm uppercase tracking-wider text-white bg-[#111923] px-3 py-1.5 border-l-4 border-sky-400 mb-3 print:bg-gray-100 print:text-black">
              Education
            </h3>
            <div className="space-y-3">
              {bioData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm border-b border-[#223245] pb-2 last:border-b-0 print:border-gray-200">
                  <div>
                    <span className="font-extrabold text-white print:text-black">{edu.degree}</span>
                    <span className="text-slate-300 print:text-gray-700 block sm:inline sm:ml-2">— {edu.institution}</span>
                    <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">{edu.highlight}</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-sky-400 print:text-gray-800 shrink-0 mt-1 sm:mt-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-grotesk font-extrabold text-sm uppercase tracking-wider text-white bg-[#111923] px-3 py-1.5 border-l-4 border-sky-400 mb-3 print:bg-gray-100 print:text-black">
              Internship Experience
            </h3>
            <div className="space-y-4">
              {bioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-extrabold text-base text-white print:text-black">{exp.role}</span>
                      <span className="text-sm font-semibold text-slate-300 print:text-gray-700 sm:ml-2">— {exp.company}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-400 print:text-gray-800">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-300 print:text-gray-800 space-y-1 pl-1 font-normal">
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
            <h3 className="font-grotesk font-extrabold text-sm uppercase tracking-wider text-white bg-[#111923] px-3 py-1.5 border-l-4 border-sky-400 mb-3 print:bg-gray-100 print:text-black">
              Core Skills & Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#111923] rounded-xl border border-[#223245] print:bg-white print:border-gray-300">
                <span className="font-extrabold text-white print:text-black block mb-1">Data & Analysis</span>
                <p className="text-slate-300 print:text-gray-800 font-medium">Advanced Excel (VLOOKUP, INDEX/MATCH, Pivots), SQL, Python (Pandas, EDA), Data Cleaning</p>
              </div>
              <div className="p-3 bg-[#111923] rounded-xl border border-[#223245] print:bg-white print:border-gray-300">
                <span className="font-extrabold text-white print:text-black block mb-1">Visualization & BI</span>
                <p className="text-slate-300 print:text-gray-800 font-medium">Tableau, Power BI (DAX, Measures), Executive Dashboards, Storytelling</p>
              </div>
              <div className="p-3 bg-[#111923] rounded-xl border border-[#223245] print:bg-white print:border-gray-300">
                <span className="font-extrabold text-white print:text-black block mb-1">Finance & Modeling</span>
                <p className="text-slate-300 print:text-gray-800 font-medium">Discounted Cash Flow (DCF), Valuation Sensitivity, Unit Economics, Machine Valuation</p>
              </div>
              <div className="p-3 bg-[#111923] rounded-xl border border-[#223245] print:bg-white print:border-gray-300">
                <span className="font-extrabold text-white print:text-black block mb-1">Business & Strategy</span>
                <p className="text-slate-300 print:text-gray-800 font-medium">Market Research, Competitor Analysis, Requirement Gathering, Agile Methodology</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-grotesk font-extrabold text-sm uppercase tracking-wider text-white bg-[#111923] px-3 py-1.5 border-l-4 border-sky-400 mb-3 print:bg-gray-100 print:text-black">
              Certifications & Workshops
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              {bioData.certifications.map((cert, idx) => (
                <div key={idx} className="p-2.5 bg-[#111923] rounded-xl border border-[#223245] print:bg-white print:border-gray-300">
                  <span className="font-bold text-white print:text-black block truncate">{cert.name}</span>
                  <span className="text-[11px] text-slate-400 print:text-gray-600 font-medium">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

