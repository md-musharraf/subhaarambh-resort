import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { testimonials, faqs, resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function TestimonialsSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { isDark } = useTheme();

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors relative ${
      isDark ? 'bg-[#0B1728] border-[#D4AF37]/25 text-white' : 'bg-[#FAF8F5] border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              Client Testimonials
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            Cherished Words from{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-700 underline decoration-amber-300 underline-offset-8'}>
              Happy Families
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            Read authentic experiences from brides, grooms, and parents who celebrated their most cherished occasions with us at Kajraili, Bhagalpur.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className={`p-5 sm:p-6 lg:p-8 rounded-2xl border shadow-sm transition-all duration-200 relative flex flex-col justify-between ${
                isDark 
                  ? 'bg-royal-card/90 border-amber-500/20 hover:border-amber-400/50 shadow-lg' 
                  : 'bg-white border-stone-200 hover:border-stone-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? 'text-amber-500/20' : 'text-stone-200'}`} />
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed italic mb-4 sm:mb-6 ${
                  isDark ? 'text-slate-200' : 'text-stone-700'
                }`}>
                  "{review.comment}"
                </p>
              </div>

              <div className={`pt-3 sm:pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-amber-500/15' : 'border-stone-200'
              }`}>
                <div>
                  <h4 className={`text-xs sm:text-base font-bold ${
                    isDark ? 'font-cinzel text-amber-300' : 'text-stone-900'
                  }`}>
                    {review.name}
                  </h4>
                  <div className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                    <span>{review.event}</span> • <span>{review.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-500 font-bold shrink-0 ml-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion Subsection */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 border ${
              isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
            }`}>
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                Frequently Asked Questions
              </span>
            </div>
            <h3 className={`text-xl sm:text-3xl font-bold tracking-tight px-2 ${
              isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
            }`}>
              Everything You Need to Know Before Booking
            </h3>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? isDark ? 'border-amber-400 bg-royal-card' : 'border-stone-900 bg-white shadow-sm'
                      : isDark ? 'border-amber-500/20 bg-royal-card/70 hover:border-amber-400/50' : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold transition-colors"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isDark ? 'text-amber-400' : 'text-stone-900'}`} />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t animate-fadeIn ${
                      isDark 
                        ? 'text-slate-300 border-amber-500/10 bg-royal-dark/50' 
                        : 'text-stone-600 border-stone-100 bg-stone-50/50'
                    }`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className={`text-center mt-6 sm:mt-8 text-xs px-2 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
            Have more questions? Call our reservations team at{' '}
            <a href={`tel:${resortInfo.phonePrimary}`} className={`font-bold hover:underline ${
              isDark ? 'text-amber-400' : 'text-amber-700'
            }`}>
              {resortInfo.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
