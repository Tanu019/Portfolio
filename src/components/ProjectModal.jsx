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
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl bg-[#111923] text-white rounded-2xl border border-[#223245] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0A0F16] text-white px-6 py-4 flex items-center justify-between border-b border-[#223245]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-950 uppercase bg-sky-500 px-3 py-1 rounded-md font-extrabold border border-sky-400">
              CASE STUDY {project.number}
            </span>
            <span className="font-grotesk font-bold text-base tracking-wide text-slate-200 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-lg font-mono text-xs font-bold transition-all shadow"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#182332] hover:bg-[#223245] text-white rounded-lg font-mono text-xs font-bold transition-all border border-[#223245]"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-mono text-xs font-bold transition-all"
              aria-label="Close Case Study"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Modal Sub-Tabs */}
        <div className="bg-[#0E1520] px-6 py-2.5 border-b border-[#223245] flex items-center gap-2 overflow-x-auto text-xs font-mono font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-300 hover:text-white hover:bg-[#182332]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Executive Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'visual'
                ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-300 hover:text-white hover:bg-[#182332]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Breakdown</span>
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'recommendations'
                ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-300 hover:text-white hover:bg-[#182332]'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Recommendations</span>
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'tech'
                ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-300 hover:text-white hover:bg-[#182332]'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Tools & Stack</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#111923]">
          {/* Header Banner */}
          <div className="border-b border-[#223245] pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#0A0F16] text-sky-400 font-mono text-xs font-bold rounded-md border border-sky-500/30">
                {project.tag}
              </span>
              <span className="px-3 py-1 bg-[#182332] text-slate-200 font-mono text-xs font-bold rounded-md border border-[#223245]">
                {project.highlightBadge}
              </span>
            </div>

            <h2 className="font-grotesk font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="font-sans text-xl text-slate-300 font-medium leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#0A0F16] p-5 rounded-xl border border-[#223245] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-grotesk font-extrabold text-4xl text-sky-400 block">
                    {metric.value}
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-slate-300 mt-2 pt-2 border-t border-[#223245]">
                  {metric.note}
                </span>
              </div>
            ))}
          </div>

          {/* TAB CONTENT: Overview */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Problem Statement */}
              <div className="bg-[#0A0F16] p-6 rounded-xl border border-[#223245] space-y-3">
                <span className="font-mono text-xs font-extrabold text-sky-400 uppercase tracking-wider block">
                  01 // THE BUSINESS PROBLEM
                </span>
                <p className="font-sans text-base text-slate-300 leading-relaxed font-normal">
                  {project.overview.problem}
                </p>
              </div>

              {/* Analytical Approach */}
              <div className="bg-[#0A0F16] p-6 rounded-xl border border-[#223245] space-y-3">
                <span className="font-mono text-xs font-extrabold text-sky-400 uppercase tracking-wider block">
                  02 // ANALYTICAL FRAMEWORK
                </span>
                <p className="font-sans text-base text-slate-300 leading-relaxed font-normal">
                  {project.overview.approach}
                </p>
              </div>

              {/* Key Findings */}
              <div className="lg:col-span-2 bg-[#0A0F16] p-6 rounded-xl border border-[#223245]">
                <span className="font-mono text-xs font-extrabold text-sky-400 uppercase tracking-wider block mb-4">
                  03 // CORE EMPIRICAL FINDINGS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.overview.findings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="bg-[#111923] p-4 rounded-xl border border-[#223245] text-sm text-slate-200 leading-relaxed flex items-start gap-2.5 font-medium shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: Visual Data */}
          {activeTab === 'visual' && (
            <div className="bg-[#0A0F16] text-white p-6 rounded-xl border border-[#223245] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#223245]">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-sky-400" />
                  <h4 className="font-grotesk font-bold text-base tracking-wider uppercase text-white">
                    {project.visualData?.chartTitle || "Analytical Visualization Breakdown"}
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-sky-400 uppercase bg-[#111923] px-2.5 py-1 rounded border border-sky-500/30">
                  VERIFIED DATA
                </span>
              </div>

              {/* Chart Breakdown Type 1 */}
              {project.visualData?.type === "chart" && (
                <div className="space-y-4">
                  <p className="font-mono text-xs font-bold text-slate-300">
                    Distribution of volume vs margin elasticity across primary SKU categories:
                  </p>
                  <div className="space-y-3">
                    {project.visualData.dataPoints.map((dp, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between font-mono text-xs font-bold text-slate-200">
                          <span>{dp.label}</span>
                          <span>Volume: <strong>{dp.value}%</strong> | Margin: <strong className="text-sky-400">{dp.margin}%</strong></span>
                        </div>
                        <div className="w-full h-4 bg-[#111923] rounded-full overflow-hidden flex border border-[#223245]">
                          <div
                            className="bg-sky-500 h-full rounded-l"
                            style={{ width: `${dp.value}%` }}
                          />
                          <div
                            className="bg-cyan-400 h-full rounded-r"
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
                        <tr className="border-b border-[#223245] text-slate-300 font-bold">
                          <th className="py-2.5 px-3">WACC Rate</th>
                          <th className="py-2.5 px-3">g = 4.0% (Bear)</th>
                          <th className="py-2.5 px-3 bg-[#182332] text-sky-300">g = 5.0% (Base)</th>
                          <th className="py-2.5 px-3">g = 6.0% (Bull)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.visualData.matrix.map((row, i) => (
                          <tr key={i} className="border-b border-[#223245]/60 hover:bg-[#182332]">
                            <td className="py-3 px-3 font-extrabold text-white">{row.wacc}</td>
                            <td className="py-3 px-3 text-slate-300 font-semibold">{row.g4}</td>
                            <td className="py-3 px-3 font-extrabold text-sky-400 bg-[#182332]">{row.g5}</td>
                            <td className="py-3 px-3 text-slate-300 font-semibold">{row.g6}</td>
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
                    <div key={i} className="p-4 bg-[#111923] rounded-xl border border-[#223245] space-y-2">
                      <span className="font-mono text-xs font-extrabold text-sky-400">STAGE 0{i + 1}</span>
                      <h5 className="font-grotesk font-extrabold text-base text-white">{st.title}</h5>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed font-medium">{st.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Chart Breakdown Type 4: Radar */}
              {project.visualData?.type === "radar" && (
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {project.visualData.dataPoints.map((dp, i) => (
                    <div key={i} className="p-3 bg-[#111923] rounded-xl border border-[#223245] text-center space-y-1">
                      <span className="font-mono text-xs font-bold text-slate-300 block">{dp.skill}</span>
                      <span className="font-grotesk font-extrabold text-2xl text-sky-400">{dp.score}%</span>
                      <div className="w-full bg-[#0A0F16] h-2 rounded-full overflow-hidden border border-[#223245]">
                        <div className="bg-sky-500 h-full" style={{ width: `${dp.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB CONTENT: Recommendations */}
          {activeTab === 'recommendations' && (
            <div className="bg-[#0A0F16] p-6 rounded-xl border border-[#223245] space-y-6">
              <span className="font-mono text-xs font-extrabold text-sky-400 uppercase tracking-wider block">
                STRATEGIC ACTION ITEMS & BUSINESS PLAYBOOK
              </span>

              <div className="space-y-4">
                {project.overview.recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#111923] rounded-xl border border-[#223245] flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-500 text-slate-950 font-mono text-xs font-extrabold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h5 className="font-grotesk font-bold text-base text-white mb-1">
                        Executive Recommendation {idx + 1}
                      </h5>
                      <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
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
            <div className="bg-[#0A0F16] p-6 rounded-xl border border-[#223245] space-y-6">
              <span className="font-mono text-xs font-extrabold text-sky-400 uppercase tracking-wider block">
                ANALYTICAL TOOLS & TECHNOLOGY APPLIED
              </span>

              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 bg-[#111923] rounded-xl border border-[#223245] font-mono text-xs font-bold text-white flex items-center gap-2 shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Bottom CTA Bar */}
          <div className="pt-6 border-t border-[#223245] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold text-slate-400">
              Verified Analysis by Tanu Chaudhary
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-grotesk font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

