import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  BarChart3, 
  Compass, 
  TrendingUp, 
  Sparkles,
  LayoutDashboard,
  Code2,
  Download,
  FileSpreadsheet
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl bg-white dark:bg-[#111827] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-100 dark:bg-[#0A0F16] px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-md font-bold">
              Case Study 0{project.number}
            </span>
            <span className="font-grotesk font-semibold text-sm tracking-wide text-slate-700 dark:text-slate-200 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.fileUrl && (
              <a
                href={project.fileUrl}
                download={project.fileName || true}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-sans text-xs font-bold transition-all shadow-xs shadow-emerald-600/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{project.actionLabel || 'Download'}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith('#') ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => {
                  if (project.liveUrl.startsWith('#')) {
                    e.preventDefault();
                    onClose();
                    setTimeout(() => {
                      document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-sans text-xs font-bold transition-all shadow-xs"
              >
                <span>{project.liveUrl.startsWith('#') ? 'Interactive Sandbox' : 'Live Demo'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-[#182332] hover:bg-slate-50 dark:hover:bg-[#223245] text-slate-800 dark:text-white rounded-lg font-sans text-xs font-semibold transition-all border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-sans text-xs font-bold transition-all"
              aria-label="Close Case Study"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Modal Sub-Tabs */}
        <div className="bg-slate-50 dark:bg-[#0E1520] px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs font-sans font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-white text-slate-950 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#182332]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Executive Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'visual'
                ? 'bg-white text-slate-950 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#182332]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Breakdown</span>
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'recommendations'
                ? 'bg-white text-slate-950 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#182332]'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Recommendations</span>
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'tech'
                ? 'bg-white text-slate-950 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#182332]'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Tools & Stack</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-white dark:bg-[#111827]">
          {/* Header Banner */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-sans text-xs font-semibold rounded-md border border-emerald-200 dark:border-emerald-800/60">
                {project.tag}
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-[#182332] text-slate-700 dark:text-slate-200 font-sans text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">
                {project.highlightBadge}
              </span>
            </div>

            <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="font-sans text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              {project.subtitle}
            </p>

            {/* Direct Asset / Live Link Action Banner */}
            {project.fileUrl && (
              <div className="mt-4 p-4 bg-emerald-50 dark:bg-[#0A1613] rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-600 text-white rounded-xl shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-grotesk font-bold text-sm text-slate-900 dark:text-white block">
                      Download Project File & Model Asset
                    </span>
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400">
                      {project.fileName} • {project.fileType || 'Verified Analytical Asset'}
                    </span>
                  </div>
                </div>
                <a
                  href={project.fileUrl}
                  download={project.fileName || true}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-sans text-xs font-bold transition-all shadow-sm shadow-emerald-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Now</span>
                </a>
              </div>
            )}

            {project.liveUrl && !project.liveUrl.startsWith('#') && (
              <div className="mt-4 p-4 bg-emerald-50 dark:bg-[#0A1613] rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-600 text-white rounded-xl shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-grotesk font-bold text-sm text-slate-900 dark:text-white block">
                      Live Deployed Web Application
                    </span>
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 truncate max-w-sm block">
                      {project.liveUrl}
                    </span>
                  </div>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-sans text-xs font-bold transition-all shadow-sm shadow-emerald-600/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                </a>
              </div>
            )}
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0A0F16] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-grotesk font-extrabold text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 block">
                    {metric.value}
                  </span>
                </div>
                <span className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {metric.note}
                </span>
              </div>
            ))}
          </div>

          {/* TAB CONTENT: Overview */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Problem Statement */}
              <div className="bg-slate-50 dark:bg-[#0A0F16] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  01 // The Business Problem
                </span>
                <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.overview.problem}
                </p>
              </div>

              {/* Analytical Approach */}
              <div className="bg-slate-50 dark:bg-[#0A0F16] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  02 // Analytical Framework
                </span>
                <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.overview.approach}
                </p>
              </div>

              {/* Key Findings */}
              <div className="lg:col-span-2 bg-slate-50 dark:bg-[#0A0F16] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-4">
                  03 // Core Empirical Findings
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.overview.findings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#111923] p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5 font-medium shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: Visual Data */}
          {activeTab === 'visual' && (
            <div className="bg-slate-50 dark:bg-[#0A0F16] text-slate-900 dark:text-white p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-grotesk font-bold text-base text-slate-900 dark:text-white">
                    {project.visualData?.chartTitle || "Analytical Visualization Breakdown"}
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800/60">
                  Verified Data
                </span>
              </div>

              {/* Chart Breakdown Type 1 */}
              {project.visualData?.type === "chart" && (
                <div className="space-y-4">
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-300">
                    Distribution of volume vs margin elasticity across primary SKU categories:
                  </p>
                  <div className="space-y-3">
                    {project.visualData.dataPoints.map((dp, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between font-sans text-xs text-slate-700 dark:text-slate-200">
                          <span>{dp.label}</span>
                          <span>Volume: <strong>{dp.value}%</strong> | Margin: <strong className="text-emerald-600 dark:text-emerald-400">{dp.margin}%</strong></span>
                        </div>
                        <div className="w-full h-3.5 bg-slate-200 dark:bg-[#111923] rounded-full overflow-hidden flex border border-slate-200 dark:border-slate-800">
                          <div
                            className="bg-slate-700 dark:bg-slate-300 h-full rounded-l"
                            style={{ width: `${dp.value}%` }}
                          />
                          <div
                            className="bg-emerald-500 h-full rounded-r"
                            style={{ width: `${dp.margin}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chart Breakdown Type 2: Valuation Table */}
              {project.visualData?.type === "valuation" && (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                          <th className="py-2.5 px-3">WACC Rate</th>
                          <th className="py-2.5 px-3">g = 4.0% (Bear)</th>
                          <th className="py-2.5 px-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">g = 5.0% (Base)</th>
                          <th className="py-2.5 px-3">g = 6.0% (Bull)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.visualData.matrix.map((row, i) => (
                          <tr key={i} className="border-b border-slate-200 dark:border-slate-800/60 hover:bg-slate-100 dark:hover:bg-[#182332]">
                            <td className="py-3 px-3 font-extrabold text-slate-900 dark:text-white">{row.wacc}</td>
                            <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-medium">{row.g4}</td>
                            <td className="py-3 px-3 font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40">{row.g5}</td>
                            <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-medium">{row.g6}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Chart Breakdown Type 3: Flow */}
              {project.visualData?.type === "flow" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.visualData.steps.map((st, i) => (
                    <div key={i} className="p-4 bg-white dark:bg-[#111923] rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">Stage 0{i + 1}</span>
                      <h5 className="font-grotesk font-bold text-base text-slate-900 dark:text-white">{st.title}</h5>
                      <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{st.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Chart Breakdown Type 4: Radar */}
              {project.visualData?.type === "radar" && (
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {project.visualData.dataPoints.map((dp, i) => (
                    <div key={i} className="p-3 bg-white dark:bg-[#111923] rounded-xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                      <span className="font-sans text-xs font-medium text-slate-600 dark:text-slate-300 block">{dp.skill}</span>
                      <span className="font-grotesk font-extrabold text-2xl text-emerald-600 dark:text-emerald-400">{dp.score}%</span>
                      <div className="w-full bg-slate-200 dark:bg-[#0A0F16] h-2 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                        <div className="bg-emerald-600 h-full" style={{ width: `${dp.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB CONTENT: Recommendations */}
          {activeTab === 'recommendations' && (
            <div className="bg-slate-50 dark:bg-[#0A0F16] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Strategic Action Items & Recommendations
              </span>

              <div className="space-y-4">
                {project.overview.recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white dark:bg-[#111923] rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h5 className="font-grotesk font-bold text-base text-slate-900 dark:text-white mb-1">
                        Executive Recommendation {idx + 1}
                      </h5>
                      <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {rec}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: Tech Stack */}
          {activeTab === 'tech' && (
            <div className="bg-slate-50 dark:bg-[#0A0F16] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Analytical Tools & Technology Applied
              </span>

              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 bg-white dark:bg-[#111923] rounded-xl border border-slate-200 dark:border-slate-800 font-sans text-xs font-semibold text-slate-800 dark:text-white flex items-center gap-2 shadow-xs"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Bottom CTA Bar */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans text-slate-500 dark:text-slate-400">
              Verified Case Study • Tanu Chaudhary Portfolio
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm shadow-emerald-600/30"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

