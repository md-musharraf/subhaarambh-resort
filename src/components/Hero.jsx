import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Phone, ArrowRight, Play, MapPin, CheckCircle2 } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Hero({ onOpenBookingModal, onOpenTourModal }) {
  const [quickDate, setQuickDate] = useState('');
  const [quickType, setQuickType] = useState('Wedding & Reception');
  const [quickGuests, setQuickGuests] = useState('500');

  const handleQuickCheck = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shubhaarambh Resort! I want to check availability for ${quickType} on ${quickDate || 'an upcoming date'} for approx ${quickGuests} guests in Bhagalpur.`
    );
    window.open(`https://wa.me/${resortInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF8F5] font-mono">
      {/* Background Image with Luminous Light Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="Shubhaarambh Resort and Banquet Hall Bhagalpur"
          className="w-full h-full object-cover object-center filter opacity-20"
        />
        {/* Luminous Ivory & Soft Cream Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/85 to-[#FAF8F5]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Luxury Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D5] shadow-clean mb-2.5 sm:mb-3 max-w-full">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700 shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-stone-700 uppercase truncate">
            Bhagalpur's Premier Wedding Resort
          </span>
          <span className="w-1 h-1 rounded-full bg-amber-700 hidden sm:inline" />
          <span className="text-[10px] text-stone-500 hidden sm:inline font-mono">Kajraili, Bihar</span>
        </div>

        {/* Romantic Script Accent */}
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-amber-800 mb-0.5">
          The Beginning of Forever
        </p>

        {/* Main Clean Heading in Monospace */}
        <h1 className="font-mono text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-stone-900 mb-3 md:mb-4 px-2">
          Where Grand Celebrations <br className="hidden sm:inline" />
          <span className="text-amber-800 underline decoration-amber-300 underline-offset-4 decoration-2">
            Meet Royal Elegance
          </span>
        </h1>

        {/* Clean Descriptive Subtitle */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-stone-600 font-mono leading-relaxed mb-5 md:mb-6 px-3">
          Located in Kajraili, Bhagalpur, <strong className="text-stone-900 font-semibold">Shubhaarambh Resort & Banquet</strong> offers a grand AC ballroom, poolside wedding lawn, bridal suites, and mastercrafted royal catering.
        </p>

        {/* Action Buttons: Clean Minimalist Style */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 mb-6 md:mb-8 px-2">
          <a
            href="#venues"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-900 hover:bg-amber-800 text-white font-mono font-medium text-xs sm:text-sm tracking-wider uppercase shadow-clean hover:shadow-clean-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Venues</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </a>

          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-3">
            <button
              onClick={onOpenTourModal}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-mono font-medium text-xs sm:text-sm tracking-wider uppercase shadow-clean hover:border-amber-700 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <Play className="w-2.5 h-2.5 fill-amber-800 ml-0.5" />
              </div>
              <span className="truncate">Virtual Tour</span>
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F3EFE6] hover:bg-[#EBE4D5] border border-[#E8E2D5] text-amber-900 font-mono font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center text-center active:scale-95"
            >
              <span>Estimator</span>
            </a>
          </div>
        </div>

        {/* Quick Date & Availability Checker Card: Clean White Aesthetic */}
        <div className="w-full max-w-4xl bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#E8E2D5] shadow-clean-md">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-stone-200">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-semibold text-stone-800 uppercase tracking-wide">
              <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span className="truncate">Check Date Availability</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-stone-500 shrink-0 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Instant Response</span>
            </div>
          </div>

          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 font-mono">
            {/* Event Type */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-medium mb-1 text-left font-mono">
                Occasion
              </label>
              <select
                value={quickType}
                onChange={(e) => setQuickType(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-700 transition-colors font-mono"
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
              <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-medium mb-1 text-left font-mono">
                Preferred Date
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-1.5 text-xs text-stone-800 focus:outline-none focus:border-amber-700 transition-colors font-mono"
              />
            </div>

            {/* Expected Guests */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-medium mb-1 text-left font-mono">
                Guests Count
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-700 transition-colors font-mono"
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
                className="w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-mono font-medium text-xs tracking-wider uppercase shadow-clean transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>Check Dates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Trust Highlights Banner - Clean Minimal Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 mt-5 sm:mt-8 w-full text-center font-mono">
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-white border border-[#E8E2D5] shadow-clean">
            <span className="block font-mono text-base sm:text-xl font-bold text-amber-800">50,000+</span>
            <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-wider font-mono">Sq. Ft. Lawn</span>
          </div>
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-white border border-[#E8E2D5] shadow-clean">
            <span className="block font-mono text-base sm:text-xl font-bold text-amber-800">2,000+</span>
            <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-wider font-mono">Capacity</span>
          </div>
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-white border border-[#E8E2D5] shadow-clean">
            <span className="block font-mono text-base sm:text-xl font-bold text-amber-800">100%</span>
            <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-wider font-mono">Power Backup</span>
          </div>
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-white border border-[#E8E2D5] shadow-clean">
            <span className="block font-mono text-base sm:text-xl font-bold text-amber-800">4.9 ★</span>
            <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-wider font-mono">650+ Events</span>
          </div>
        </div>

      </div>
    </section>
  );
}
