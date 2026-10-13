import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { bioData } from '../data/projectsData';

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = encodeURIComponent(`Inquiry for Tanu Chaudhary from ${formData.name}`);
    const body = encodeURIComponent(`Hi Tanu,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${bioData.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#F1F5F9]/60 dark:bg-[#0B0E17] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
            Get In Touch
          </span>
          <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
            Let's talk
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Open to full-time Business Analyst roles, commercial strategy engagements, and high-impact analytics initiatives.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-8 shadow-xs dark:shadow-xl flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
                Fastest way to reach out
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-normal">
                Whether you're hiring for an analyst role, exploring quick-commerce unit economics, or collaborating on models, reach out directly.
              </p>

              {/* Copy Email Box */}
              <div className="p-4 bg-slate-50 dark:bg-[#08090C] rounded-2xl border border-slate-200 dark:border-[#1E2536] flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 border border-emerald-200 dark:border-emerald-900/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400 block">Direct Email</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block">
                      {bioData.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold rounded-full transition-all shrink-0 shadow-xs shadow-emerald-600/20"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="https://www.linkedin.com/in/tanu-chaudhary-380863276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#08090C] hover:border-emerald-500 rounded-2xl border border-slate-200 dark:border-[#1E2536] transition-colors group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <span className="font-grotesk font-bold text-xs text-slate-900 dark:text-white block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">LinkedIn</span>
                      <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400">Profile</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/Tanu019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#08090C] hover:border-emerald-500 rounded-2xl border border-slate-200 dark:border-[#1E2536] transition-colors group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <span className="font-grotesk font-bold text-xs text-slate-900 dark:text-white block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">GitHub</span>
                      <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400">Repositories</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-[#1E2536] flex items-center justify-between text-xs font-sans text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>New Delhi, India</span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Immediate Availability</span>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-8 shadow-xs dark:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleQuickSend} className="space-y-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] border border-slate-200 dark:border-[#1E2536] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30 font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. priya@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] border border-slate-200 dark:border-[#1E2536] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30 font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the role, project, or analytical challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] border border-slate-200 dark:border-[#1E2536] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30 font-sans text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-full transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{submitted ? 'Opening Email Client...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              Response turnaround typically within 24 hours.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
