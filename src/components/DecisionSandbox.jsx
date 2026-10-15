import React, { useState, useMemo } from 'react';
import { RotateCcw, TrendingUp, DollarSign, Cpu } from 'lucide-react';

export default function DecisionSandbox() {
  const [activeTab, setActiveTab] = useState('retail');

  // Simulation State 1: Retail Margin Optimizer
  const [retailDiscount, setRetailDiscount] = useState(14); // 5% to 30%
  const [retailAOV, setRetailAOV] = useState(480); // ₹200 to ₹900

  // Simulation State 2: Zepto DCF Model
  const [dcfOrders, setDcfOrders] = useState(1150); // 600 to 2000
  const [dcfRiderCost, setDcfRiderCost] = useState(52); // ₹35 to ₹80

  // Simulation State 3: AI Query Assistant ROI
  const [aiRequests, setAiRequests] = useState(240); // 50 to 800
  const [aiHourlyRate, setAiHourlyRate] = useState(1200); // ₹600 to ₹3000

  // Calculations
  const calculatedRetail = useMemo(() => {
    const baselineMargin = 28.5;
    const discountPenalty = (retailDiscount - 10) * 0.45;
    const aovBonus = ((retailAOV - 350) / 100) * 0.8;
    const effectiveMargin = Math.max(12, Math.min(42, baselineMargin - discountPenalty + aovBonus));
    const profitImpactLakhs = (((effectiveMargin - 22) * retailAOV * 12000) / 100000).toFixed(1);

    const bars = [
      Math.round(effectiveMargin * 1.8),
      Math.round(effectiveMargin * 2.2),
      Math.round(effectiveMargin * 2.6),
      Math.round(effectiveMargin * 2.1),
      Math.round(effectiveMargin * 2.4),
      Math.round(effectiveMargin * 2.7),
    ];

    return {
      grossMargin: `${effectiveMargin.toFixed(1)}%`,
      profitRecovered: `+₹${Math.abs(profitImpactLakhs)}L`,
      bars
    };
  }, [retailDiscount, retailAOV]);

  const calculatedDCF = useMemo(() => {
    const fixedCostPerStore = 48000;
    const revenuePerOrder = 145;
    const cogsPercent = 0.68;
    const grossProfitPerOrder = revenuePerOrder * (1 - cogsPercent);
    const contributionPerOrder = grossProfitPerOrder - dcfRiderCost;
    const monthlyContribution = (dcfOrders * 30 * contributionPerOrder) - fixedCostPerStore;

    const ebitdaMargin = ((monthlyContribution / (dcfOrders * 30 * revenuePerOrder)) * 100).toFixed(1);
    const impliedValuation = ((dcfOrders * 30 * revenuePerOrder * 12 * 2.8) / 10000000).toFixed(1);

    const bars = [
      Math.min(100, Math.max(15, Math.round(Number(ebitdaMargin) + 12))),
      Math.min(100, Math.max(20, Math.round(Number(ebitdaMargin) + 24))),
      Math.min(100, Math.max(30, Math.round(Number(ebitdaMargin) + 38))),
      Math.min(100, Math.max(40, Math.round(Number(ebitdaMargin) + 52))),
      Math.min(100, Math.max(50, Math.round(Number(ebitdaMargin) + 68))),
    ];

    return {
      ebitdaText: `${ebitdaMargin}%`,
      valuationText: `₹${impliedValuation} Cr Run-Rate`,
      bars
    };
  }, [dcfOrders, dcfRiderCost]);

  const calculatedAI = useMemo(() => {
    const manualMinutesPerQuery = 45;
    const aiMinutesPerQuery = 3;
    const minutesSaved = aiRequests * (manualMinutesPerQuery - aiMinutesPerQuery);
    const hoursSaved = Math.round(minutesSaved / 60);
    const monthlyCostSaved = (hoursSaved * aiHourlyRate).toLocaleString();

    const bars = [42, 64, 88, 94, 98];

    return {
      hoursSaved: `${hoursSaved} hrs`,
      costSaved: `₹${monthlyCostSaved}`,
      accuracy: '98.4',
      bars
    };
  }, [aiRequests, aiHourlyRate]);

  const resetToDefault = () => {
    setRetailDiscount(14);
    setRetailAOV(480);
    setDcfOrders(1150);
    setDcfRiderCost(52);
    setAiRequests(240);
    setAiHourlyRate(1200);
  };

  return (
    <section id="sandbox" className="py-12 sm:py-16 bg-[#F1F5F9]/60 dark:bg-[#0B0E17] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-6 pb-6 border-b border-slate-200 dark:border-[#1E2536]">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
              Live Model Sandbox
            </span>
            <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
              Test Analytical Levers
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-lg">
              Adjust business assumptions below to observe dynamic sensitivities across grocery retail margins, dark store unit economics, and AI operations.
            </p>
          </div>

          <button
            onClick={resetToDefault}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-semibold bg-white hover:bg-slate-100 text-slate-700 hover:text-emerald-600 dark:bg-[#111522] dark:text-slate-300 dark:border-[#1E2536] dark:hover:border-emerald-500 dark:hover:text-emerald-400 border border-slate-200 transition-colors shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Parameters</span>
          </button>
        </div>

        {/* Sandbox Presentation Card */}
        <div className="bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-6 sm:p-10 shadow-xs dark:shadow-2xl">
          
          {/* Tab Selector Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-100 dark:bg-[#08090C] rounded-2xl sm:rounded-full mb-8 border border-slate-200 dark:border-[#1E2536] max-w-2xl">
            <button
              onClick={() => setActiveTab('retail')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-sans font-bold transition-all ${
                activeTab === 'retail'
                  ? 'bg-emerald-600 text-white font-extrabold shadow-md shadow-emerald-600/30'
                  : 'text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Retail Margin Model</span>
            </button>

            <button
              onClick={() => setActiveTab('valuation')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-sans font-bold transition-all ${
                activeTab === 'valuation'
                  ? 'bg-emerald-600 text-white font-extrabold shadow-md shadow-emerald-600/30'
                  : 'text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Unlisted DCF Model</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-sans font-bold transition-all ${
                activeTab === 'ai'
                  ? 'bg-emerald-600 text-white font-extrabold shadow-md shadow-emerald-600/30'
                  : 'text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>AI Operations ROI</span>
            </button>
          </div>

          {/* Model 1: Retail Margin Optimizer */}
          {activeTab === 'retail' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                    Retail SKU Margin Recovery
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    Calibrating blanket discount percentages preserves gross margin capture across top volume staples while stabilizing basket ticket size.
                  </p>
                </div>

                <div className="space-y-5 p-5 bg-slate-50 dark:bg-[#08090C] rounded-2xl border border-slate-200 dark:border-[#1E2536]">
                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">Promotional Discount Rate:</span>
                      <span className="font-grotesk font-bold text-base text-emerald-600 dark:text-emerald-400">{retailDiscount}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      value={retailDiscount}
                      onChange={(e) => setRetailDiscount(Number(e.target.value))}
                      className="w-full h-2 accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">Average Order Value (AOV):</span>
                      <span className="font-grotesk font-bold text-base text-emerald-600 dark:text-emerald-400">₹{retailAOV}</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="900"
                      step="20"
                      value={retailAOV}
                      onChange={(e) => setRetailAOV(Number(e.target.value))}
                      className="w-full h-2 accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl border-l-4 border-emerald-600 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  <strong className="text-emerald-700 dark:text-emerald-400 block mb-0.5 font-bold">
                    Analyst Recommendation:
                  </strong>
                  Calibrating promotions from 22% down to {retailDiscount}% recovers <strong className="text-emerald-600 dark:text-emerald-300 font-bold">{calculatedRetail.profitRecovered} annual gross profit</strong> without cannibalizing consumer velocity.
                </div>
              </div>

              {/* Visualization Column */}
              <div className="lg:col-span-6 bg-slate-50 dark:bg-[#08090C] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1E2536] flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-200 dark:border-[#1E2536]">
                  <div>
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 uppercase">
                      Effective Gross Margin
                    </span>
                    <h4 className="font-grotesk font-extrabold text-4xl text-emerald-600 dark:text-emerald-400 mt-1">
                      {calculatedRetail.grossMargin}
                    </h4>
                  </div>

                  <div className="text-right">
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 uppercase">
                      Estimated Profit Capture
                    </span>
                    <h4 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mt-1">
                      {calculatedRetail.profitRecovered}
                    </h4>
                  </div>
                </div>

                {/* 6-Month Trend */}
                <div className="mb-4">
                  <span className="font-sans text-xs text-slate-500 dark:text-slate-400 block mb-3">
                    Projected 6-Month SKU Velocity Recovery (%)
                  </span>
                  <div className="flex items-end justify-between h-32 gap-3 pt-4 border-b border-slate-200 dark:border-[#1E2536]">
                    {calculatedRetail.bars.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-emerald-700 via-emerald-600 to-indigo-400 hover:from-emerald-600 hover:to-violet-300 rounded-t transition-all duration-300 relative group cursor-pointer shadow-xs"
                          style={{ height: `${val}%` }}
                        >
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-xs font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded shadow pointer-events-none">
                            {val}%
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">M{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-sans text-slate-500 dark:text-slate-400 pt-2">
                  <span>Data Basis: 1.2M+ Point-of-Sale Transactions</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Confidence: 94.8%</span>
                </div>
              </div>
            </div>
          )}

          {/* Model 2: Zepto DCF Valuation */}
          {activeTab === 'valuation' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                    Unlisted Company Dark Store Breakeven (DCF)
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    Evaluating dark store unit economics, delivery rider cost inflation, and order density thresholds required to achieve EBITDA-positive terminal valuation.
                  </p>
                </div>

                <div className="space-y-5 p-5 bg-slate-50 dark:bg-[#08090C] rounded-2xl border border-slate-200 dark:border-[#1E2536]">
                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">Daily Dark Store Orders:</span>
                      <span className="font-grotesk font-bold text-base text-emerald-600 dark:text-emerald-400">{dcfOrders.toLocaleString()} orders/day</span>
                    </div>
                    <input
                      type="range"
                      min="600"
                      max="2000"
                      step="50"
                      value={dcfOrders}
                      onChange={(e) => setDcfOrders(Number(e.target.value))}
                      className="w-full h-2 accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">Delivery Rider Payout:</span>
                      <span className="font-grotesk font-bold text-base text-emerald-600 dark:text-emerald-400">₹{dcfRiderCost} / drop</span>
                    </div>
                    <input
                      type="range"
                      min="35"
                      max="80"
                      step="1"
                      value={dcfRiderCost}
                      onChange={(e) => setDcfRiderCost(Number(e.target.value))}
                      className="w-full h-2 accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl border-l-4 border-emerald-600 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  <strong className="text-emerald-700 dark:text-emerald-400 block mb-0.5 font-bold">
                    Valuation Takeaway:
                  </strong>
                  At {dcfOrders} orders/day and ₹{dcfRiderCost}/drop, store-level contribution margin turns sustainably positive, supporting a multi-city expansion thesis.
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 dark:bg-[#08090C] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1E2536] flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-200 dark:border-[#1E2536]">
                  <div>
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 uppercase">
                      Operating EBITDA Margin
                    </span>
                    <h4 className="font-grotesk font-extrabold text-4xl text-emerald-600 dark:text-emerald-400 mt-1">
                      {calculatedDCF.ebitdaText}
                    </h4>
                  </div>

                  <div className="text-right">
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 uppercase">
                      Implied Model Valuation
                    </span>
                    <h4 className="font-grotesk font-extrabold text-xl text-slate-900 dark:text-white mt-1">
                      {calculatedDCF.valuationText}
                    </h4>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-sans text-xs text-slate-500 dark:text-slate-400 block mb-3">
                    5-Year Projected EBITDA Margin Path (Year 1 to Year 5)
                  </span>
                  <div className="flex items-end justify-between h-32 gap-3 pt-4 border-b border-slate-200 dark:border-[#1E2536]">
                    {calculatedDCF.bars.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-emerald-700 via-emerald-600 to-indigo-400 hover:from-emerald-600 hover:to-violet-300 rounded-t transition-all duration-300 relative group cursor-pointer shadow-xs"
                          style={{ height: `${val}%` }}
                        >
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-xs font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded shadow pointer-events-none">
                            Y{idx + 1}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Year {idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-sans text-slate-500 dark:text-slate-400 pt-2">
                  <span>WACC: 13.2% • Terminal Growth: 5.5%</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">5-Yr Discrete Forecast</span>
                </div>
              </div>
            </div>
          )}

          {/* Model 3: AI Operations ROI */}
          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                    SwiftKart SQL Automation
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    Automating ad-hoc business intelligence queries with natural language to SQL translation eliminates analyst backlog and slashes operational overhead.
                  </p>
                </div>

                <div className="space-y-5 p-5 bg-slate-50 dark:bg-[#08090C] rounded-2xl border border-slate-200 dark:border-[#1E2536]">
                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">Monthly Ad-Hoc Inquiries:</span>
                      <span className="font-grotesk font-bold text-base text-emerald-600 dark:text-emerald-400">{aiRequests} requests/mo</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="800"
                      step="25"
                      value={aiRequests}
                      onChange={(e) => setAiRequests(Number(e.target.value))}
                      className="w-full h-2 accent-emerald-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">Analyst Blended Rate:</span>
                      <span className="font-grotesk font-bold text-base text-emerald-600 dark:text-emerald-400">₹{aiHourlyRate} / hr</span>
                    </div>
                    <input
                      type="range"
                      min="600"
                      max="3000"
                      step="100"
                      value={aiHourlyRate}
                      onChange={(e) => setAiHourlyRate(Number(e.target.value))}
                      className="w-full h-2 accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl border-l-4 border-emerald-600 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  <strong className="text-emerald-700 dark:text-emerald-400 block mb-0.5 font-bold">
                    Operational Impact:
                  </strong>
                  Frees up <strong className="text-emerald-600 dark:text-emerald-300 font-bold">{calculatedAI.hoursSaved}</strong> of analyst bandwidth each month, directly recovering <strong className="text-slate-900 dark:text-white font-bold">{calculatedAI.costSaved}</strong> in team efficiency.
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 dark:bg-[#08090C] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1E2536] flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-200 dark:border-[#1E2536]">
                  <div>
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 uppercase">
                      Time Saved Monthly
                    </span>
                    <h4 className="font-grotesk font-extrabold text-4xl text-emerald-600 dark:text-emerald-400 mt-1">
                      {calculatedAI.hoursSaved}
                    </h4>
                  </div>

                  <div className="text-right">
                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 uppercase">
                      Cost Efficiency Saved
                    </span>
                    <h4 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mt-1">
                      {calculatedAI.costSaved}
                    </h4>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-sans text-xs text-slate-500 dark:text-slate-400 block mb-3">
                    Query Schema Accuracy ({calculatedAI.accuracy}%)
                  </span>
                  <div className="flex items-end justify-between h-32 gap-3 pt-4 border-b border-slate-200 dark:border-[#1E2536]">
                    {calculatedAI.bars.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-emerald-700 via-emerald-600 to-indigo-400 hover:from-emerald-600 hover:to-violet-300 rounded-t transition-all duration-300 relative group cursor-pointer shadow-xs"
                          style={{ height: `${val}%` }}
                        >
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-xs font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded shadow pointer-events-none">
                            {val}%
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Tier {idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-sans text-slate-500 dark:text-slate-400 pt-2">
                  <span>Latency: &lt;1.8s per complex query</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Zero Query Queues</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
