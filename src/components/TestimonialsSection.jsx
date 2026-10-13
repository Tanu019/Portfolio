import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Retail Strategy Review',
      role: 'Grocery Point-of-Sale Optimization',
      rating: 5,
      quote: 'Tanu’s SKU velocity and discount elasticity analysis directly unlocked ₹4.2L in recovered margin. Her ability to translate 1.2M+ rows of messy POS data into clear store-level inventory triggers was exceptional.'
    },
    {
      id: 2,
      name: 'Quick-Commerce DCF Model',
      role: 'Dark Store Unit Economics',
      rating: 5,
      quote: 'The 5-year DCF projection and dark store sensitivity model gave stakeholders concrete unit economics: identifying the exact breakeven point at 1,150 orders/day with rider delivery payout thresholds.'
    },
    {
      id: 3,
      name: 'Executive Analytics Faculty',
      role: 'Business Analytics Program',
      rating: 5,
      quote: 'Tanu stands out for her dual competence: institutional-grade financial modeling paired with advanced SQL and Tableau dashboards. She approaches business problems like a seasoned management consultant.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#0E1015] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#262B38] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
              Feedback from client
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Reviews & stakeholder impact across retail optimization, corporate DCF modeling, and BI workflows.
            </p>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#161922] rounded-3xl border border-slate-200 dark:border-[#262B38] p-8 shadow-xs hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-500/60 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-slate-400 mb-4">
                  <Quote className="w-8 h-8 fill-slate-300/40 dark:fill-slate-400/15" />
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info & 5 Stars */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#262B38] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-gradient-to-br dark:from-slate-200 dark:to-slate-400 dark:text-slate-950 font-grotesk font-bold flex items-center justify-center text-sm shadow-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-grotesk font-bold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400 block">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
