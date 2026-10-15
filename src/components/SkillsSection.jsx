import React from 'react';
import { ArrowUpRight, FileSpreadsheet, BarChart3, Database, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const services = [
    {
      id: '01',
      title: 'Data Cleaning & Exploratory Analysis',
      icon: FileSpreadsheet,
      desc: 'I clean, transform, and structure raw business datasets using Advanced Excel (VLOOKUP, INDEX/MATCH, Pivots) and Python to extract meaningful operational trends.',
      highlight: 'Advanced Excel, Pivot Tables & EDA'
    },
    {
      id: '02',
      title: 'Interactive Dashboards & KPI Tracking',
      icon: BarChart3,
      desc: 'I build intuitive, interactive dashboards and executive scorecards in Power BI and Tableau that translate complex transaction records into real-time business visibility.',
      highlight: 'Power BI (DAX), Tableau & Visuals'
    },
    {
      id: '03',
      title: 'SQL Analytics & Data Extraction',
      icon: Database,
      desc: 'I write multi-table joins, aggregations, and structured queries to extract, filter, and prepare relational business data for fast stakeholder reporting.',
      highlight: 'Joins, Aggregations & Subqueries'
    },
    {
      id: '04',
      title: 'Business Requirements & Market Research',
      icon: Briefcase,
      desc: 'I translate stakeholder business problems into actionable requirements, evaluate market trends, and coordinate feature priorities using Agile sprint methods.',
      highlight: 'Agile Frameworks & Competitor Analysis'
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#F1F5F9]/60 dark:bg-[#0B0E17] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
            Core Capabilities
          </span>
          <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
            What I Bring to the Table
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Bridging business needs with data-driven insights through exploratory data analysis, SQL querying, KPI dashboarding, and Agile problem-solving.
          </p>
        </div>

        {/* Wide Horizontal Service Cards */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const targetId = service.id === '01' || service.id === '02' ? 'sandbox' : 'work';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => {
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-white hover:bg-slate-50 dark:bg-[#111522] dark:hover:bg-[#161B2B] rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-[#1E2536] hover:border-emerald-500/60 dark:hover:border-emerald-500/60 p-6 sm:p-8 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer shadow-xs hover:shadow-xl hover:shadow-emerald-950/20"
              >
                {/* Left: Icon & Service Title */}
                <div className="flex items-center gap-5 min-w-[280px]">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-900/40 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Center: Detailed Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg font-normal">
                  {service.desc}
                </p>

                {/* Right: Arrow Icon */}
                <div className="shrink-0 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-emerald-600 border border-slate-200 group-hover:border-emerald-600 flex items-center justify-center text-slate-500 group-hover:text-white dark:bg-[#0B0E17] dark:group-hover:bg-emerald-600 dark:border-[#1E2536] dark:group-hover:border-emerald-600 dark:text-slate-400 dark:group-hover:text-white transition-all shadow-xs">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
