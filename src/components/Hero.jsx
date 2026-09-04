import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Phone, ArrowRight, Play, MapPin, CheckCircle2 } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ onOpenBookingModal, onOpenTourModal }) {
  const [quickDate, setQuickDate] = useState('');
  const [quickType, setQuickType] = useState('Wedding & Reception');
  const [quickGuests, setQuickGuests] = useState('500');
  const { isDark } = useTheme();

  const handleQuickCheck = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shubhaarambh Resort! I want to check availability for ${quickType} on ${quickDate || 'an upcoming date'} for approx ${quickGuests} guests in Bhagalpur.`
    );
    window.open(`https://wa.me/${resortInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className={`relative min-h-[84vh] flex items-center justify-center pt-16 sm:pt-24 pb-6 sm:pb-12 px-3 sm:px-6 lg:px-8 overflow-hidden transition-colors ${
      isDark ? 'bg-[#060D17] text-white' : 'bg-[#FAF8F5] text-stone-900 font-mono'
    }`}>
      {/* Background Image with Theme-Aware Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="Shubhaarambh Resort and Banquet Hall Bhagalpur"
          className={`w-full h-full object-cover object-center filter transition-opacity duration-500 ${
            isDark ? 'opacity-25 brightness-75' : 'opacity-20'
          }`}
        />
        {/* Dynamic Theme Gradients */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-[#060D17]/90 via-[#060D17]/85 to-[#060D17]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/85 to-[#FAF8F5]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
          </>
        )}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Luxury Badge */}
        <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-1.5 sm:mb-2.5 max-w-full border ${
          isDark 
            ? 'bg-royal-card/80 border-amber-500/30 text-amber-300 shadow-gold' 
            : 'bg-white border-[#E8E2D5] text-stone-700 shadow-clean'
        }`}>
          <Sparkles className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isDark ? 'text-amber-400' : 'text-amber-700'} shrink-0`} />
          <span className="text-[9.5px] sm:text-xs font-semibold tracking-wider uppercase truncate">
            Bhagalpur's Premier Wedding Resort
          </span>
          <span className={`w-1 h-1 rounded-full hidden sm:inline ${isDark ? 'bg-amber-400' : 'bg-amber-700'}`} />
          <span className={`text-[10px] hidden sm:inline ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Kajraili, Bihar</span>
        </div>

        {/* Romantic Script Accent */}
        <p className={`font-script text-lg sm:text-2xl md:text-3xl mb-0.5 sm:mb-1 ${
          isDark ? 'text-amber-300' : 'text-amber-800'
        }`}>
          The Beginning of Forever
        </p>

        {/* Main Heading */}
        <h1 className={`text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight mb-2 sm:mb-3.5 px-2 ${
          isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
        }`}>
          Where Grand Celebrations <br className="hidden sm:inline" />
          {isDark ? (
            <span className="text-gold-gradient">Meet Royal Elegance</span>
          ) : (
            <span className="text-amber-800 underline decoration-amber-300 underline-offset-4 decoration-2">
              Meet Royal Elegance
            </span>
          )}
        </h1>

        {/* Descriptive Subtitle */}
        <p className={`max-w-2xl text-[11px] sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-5 px-3 ${
          isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
        }`}>
          Located in Kajraili, Bhagalpur, <strong className={isDark ? 'text-amber-200' : 'text-stone-900'}>Shubhaarambh Resort & Banquet</strong> offers a grand AC ballroom, poolside wedding lawn, bridal suites, and mastercrafted royal catering.
        </p>

        {/* Action Buttons */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
          <a
            href="#venues"
            className={`w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 shadow-gold hover:shadow-gold-lg' 
                : 'bg-stone-900 hover:bg-amber-800 text-white shadow-clean'
            }`}
          >
            <span>Explore Venues</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={onOpenTourModal}
              className={`w-full sm:w-auto px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                isDark 
                  ? 'border-amber-500/40 bg-royal-card/80 text-amber-200 hover:border-amber-400' 
                  : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-800 shadow-clean'
              }`}
            >
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-800'
              }`}>
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="truncate">Virtual Tour</span>
            </button>

            <a
              href="#calculator"
              className={`w-full sm:w-auto px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center text-center active:scale-95 ${
                isDark 
                  ? 'border-amber-500/25 bg-royal-slate/40 text-slate-200 hover:bg-royal-slate' 
                  : 'border-[#E8E2D5] bg-[#F3EFE6] hover:bg-[#EBE4D5] text-amber-900'
              }`}
            >
              <span>Estimator</span>
            </a>
          </div>
        </div>

        {/* Quick Date & Availability Checker Card */}
        <div className={`w-full max-w-4xl p-3 sm:p-4 rounded-2xl sm:rounded-3xl border shadow-lg ${
          isDark 
            ? 'bg-royal-card/95 border-amber-500/30 text-white shadow-2xl' 
            : 'bg-white border-[#E8E2D5] text-stone-900 shadow-clean-md'
        }`}>
          <div className={`flex items-center justify-between pb-1.5 mb-2 border-b ${
            isDark ? 'border-amber-500/20' : 'border-stone-200'
          }`}>
            <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs font-semibold uppercase tracking-wide">
              <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-amber-700'} shrink-0`} />
              <span className="truncate">Check Date Availability</span>
            </div>
            <div className="flex items-center gap-1 text-[9.5px] sm:text-[11px] shrink-0 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span className={isDark ? 'text-emerald-400' : 'text-stone-500'}>Instant Response</span>
            </div>
          </div>

          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 text-left">
            {/* Event Type */}
            <div>
              <label className={`block text-[9.5px] uppercase tracking-wider font-semibold mb-1 ${
                isDark ? 'text-slate-400' : 'text-stone-500'
              }`}>
                Occasion
              </label>
              <select
                value={quickType}
                onChange={(e) => setQuickType(e.target.value)}
                className={`w-full border rounded-xl px-2.5 py-1.5 sm:py-2 text-xs focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400' 
                    : 'bg-[#FAF8F5] border-stone-200 text-stone-800 focus:border-amber-700'
                }`}
              >
                <option value="Wedding & Reception">Wedding & Reception</option>
                <option value="Sangeet & Haldi Ceremony">Sangeet & Haldi</option>
                <option value="Ring Ceremony / Sagan">Ring Ceremony / Sagan</option>
                <option value="Birthday & Anniversary">Birthday / Anniversary</option>
                <option value="Corporate Gala / Seminar">Corporate Event</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className={`block text-[9.5px] uppercase tracking-wider font-semibold mb-1 ${
                isDark ? 'text-slate-400' : 'text-stone-500'
              }`}>
                Preferred Date
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className={`w-full border rounded-xl px-2.5 py-1.5 text-xs focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400 [color-scheme:dark]' 
                    : 'bg-[#FAF8F5] border-stone-200 text-stone-800 focus:border-amber-700 [color-scheme:light]'
                }`}
              />
            </div>

            {/* Expected Guests */}
            <div>
              <label className={`block text-[9.5px] uppercase tracking-wider font-semibold mb-1 ${
                isDark ? 'text-slate-400' : 'text-stone-500'
              }`}>
                Guests Count
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className={`w-full border rounded-xl px-2.5 py-1.5 sm:py-2 text-xs focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400' 
                    : 'bg-[#FAF8F5] border-stone-200 text-stone-800 focus:border-amber-700'
                }`}
              >
                <option value="200-350">200 - 350 Guests</option>
                <option value="500">500 Guests</option>
                <option value="800">800 Guests</option>
                <option value="1200+">1,200+ Guests</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className={`w-full py-2 sm:py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                  isDark 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 shadow-gold' 
                    : 'bg-amber-700 hover:bg-amber-800 text-white shadow-clean'
                }`}
              >
                <span>Check Dates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Trust Highlights Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 mt-3 sm:mt-6 w-full text-center">
          <div className={`py-1.5 px-2 sm:py-2.5 sm:px-3 rounded-xl border ${
            isDark ? 'bg-royal-card/80 border-amber-500/20 shadow-md' : 'bg-white border-[#E8E2D5] shadow-clean'
          }`}>
            <span className={`block text-sm sm:text-xl font-bold ${isDark ? 'text-gold-gradient' : 'text-amber-800 font-mono'}`}>50,000+</span>
            <span className={`text-[8.5px] sm:text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>Sq. Ft. Lawn</span>
          </div>
          <div className={`py-1.5 px-2 sm:py-2.5 sm:px-3 rounded-xl border ${
            isDark ? 'bg-royal-card/80 border-amber-500/20 shadow-md' : 'bg-white border-[#E8E2D5] shadow-clean'
          }`}>
            <span className={`block text-sm sm:text-xl font-bold ${isDark ? 'text-gold-gradient' : 'text-amber-800 font-mono'}`}>2,000+</span>
            <span className={`text-[8.5px] sm:text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>Capacity</span>
          </div>
          <div className={`py-1.5 px-2 sm:py-2.5 sm:px-3 rounded-xl border ${
            isDark ? 'bg-royal-card/80 border-amber-500/20 shadow-md' : 'bg-white border-[#E8E2D5] shadow-clean'
          }`}>
            <span className={`block text-sm sm:text-xl font-bold ${isDark ? 'text-gold-gradient' : 'text-amber-800 font-mono'}`}>100%</span>
            <span className={`text-[8.5px] sm:text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>Power Backup</span>
          </div>
          <div className={`py-1.5 px-2 sm:py-2.5 sm:px-3 rounded-xl border ${
            isDark ? 'bg-royal-card/80 border-amber-500/20 shadow-md' : 'bg-white border-[#E8E2D5] shadow-clean'
          }`}>
            <span className={`block text-sm sm:text-xl font-bold ${isDark ? 'text-gold-gradient' : 'text-amber-800 font-mono'}`}>4.9 ★</span>
            <span className={`text-[8.5px] sm:text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>650+ Events</span>
          </div>
        </div>

      </div>
    </section>
  );
}
