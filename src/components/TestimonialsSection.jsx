import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { testimonials, faqs, resortInfo } from '../data/resortData';

export default function TestimonialsSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-gradient-to-b from-royal-dark via-royal-navy to-royal-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30 mb-2.5 sm:mb-3">
            <Star className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
              Client Testimonials
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Cherished Words from <span className="text-gold-gradient">Happy Families</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2">
            Read authentic experiences from brides, grooms, and parents who celebrated their most cherished occasions with us at Kajraili, Bhagalpur.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-royal-card/80 border border-royal-gold/20 hover:border-royal-gold/50 shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-gold fill-royal-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-royal-gold/20" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-4 sm:mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-royal-gold/15 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-xs sm:text-base font-bold text-royal-gold-light">
                    {review.name}
                  </h4>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">
                    <span>{review.event}</span> • <span>{review.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400 font-medium shrink-0 ml-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion Subsection */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/25 mb-2">
              <Sparkles className="w-3 h-3 text-royal-gold" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-royal-gold-light">
                Frequently Asked Questions
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-white px-2">
              Everything You Need to Know Before Booking
            </h3>
          </div>

          <div className="space-y-2.5 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl bg-royal-card/60 border border-royal-gold/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 sm:p-6 text-left flex items-center justify-between gap-3 text-xs sm:text-base font-semibold text-slate-100 hover:text-royal-gold-light transition-colors active:bg-royal-navy/40"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-royal-gold/10 bg-royal-dark/30 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 sm:mt-8 text-xs text-slate-400 px-2">
            Have more questions? Call our reservations team at{' '}
            <a href={`tel:${resortInfo.phonePrimary}`} className="text-royal-gold font-bold hover:underline">
              {resortInfo.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
