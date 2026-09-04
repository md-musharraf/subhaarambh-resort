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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-3 sm:px-6 lg:px-8 overflow-hidden bg-royal-dark">
      {/* Background Image with Layered Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="Shubhaarambh Resort and Banquet Hall Bhagalpur"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55]"
        />
        {/* Multilayered Royal Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-royal-dark/80 to-royal-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-dark/90 via-transparent to-royal-dark/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal-gold/10 via-transparent to-royal-dark/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Royal Crest & Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-royal-navy/85 border border-royal-gold/40 backdrop-blur-md mb-2.5 sm:mb-3 shadow-gold max-w-full">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-royal-gold shrink-0" />
          <span className="text-[9px] sm:text-xs font-semibold tracking-widest text-royal-gold-light uppercase truncate">
            Bhagalpur's Premier Wedding Resort
          </span>
          <span className="w-1 h-1 rounded-full bg-royal-gold hidden sm:inline" />
          <span className="text-[10px] text-slate-300 hidden sm:inline">Kajraili, Bihar</span>
        </div>

        {/* Romantic Script Accent */}
        <p className="font-script text-xl sm:text-3xl md:text-4xl text-royal-gold-200 mb-1 drop-shadow-md">
          The Beginning of Forever
        </p>

        {/* Main Royal Heading */}
        <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-3 md:mb-4 px-2">
          Where Grand Celebrations <br className="hidden sm:inline" />
          <span className="text-gold-gradient drop-shadow-lg">Meet Royal Elegance</span>
        </h1>

        {/* Descriptive Subtitle */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed mb-5 md:mb-6 px-3">
          Located in Kajraili, Bhagalpur, <strong className="text-royal-gold-light font-semibold">Shubhaarambh Resort & Banquet</strong> offers an expansive AC ballroom, starlit poolside wedding lawn, presidential bridal suites, and mastercrafted royal catering.
        </p>

        {/* Action Buttons: Responsive Grid on Mobile */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-6 md:mb-8 px-2">
          <a
            href="#venues"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-royal-gold via-amber-400 to-royal-gold-dark text-royal-dark font-bold text-xs sm:text-sm tracking-wider uppercase shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Venues & Lawns</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-3">
            <button
              onClick={onOpenTourModal}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-royal-navy/80 hover:bg-royal-slate border border-royal-gold/40 text-slate-100 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md hover:border-royal-gold transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
            >
              <div className="w-5 h-5 rounded-full bg-royal-gold/20 flex items-center justify-center group-hover:bg-royal-gold/40 transition-colors shrink-0">
                <Play className="w-2.5 h-2.5 text-royal-gold fill-royal-gold ml-0.5" />
              </div>
              <span className="truncate">Virtual Tour</span>
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-royal-crimson/80 hover:bg-royal-crimson border border-royal-gold/30 text-royal-gold-100 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center text-center active:scale-95"
            >
              <span>Estimator</span>
            </a>
          </div>
        </div>

        {/* Quick Date & Availability Checker Card */}
        <div className="w-full max-w-4xl bg-royal-navy/90 backdrop-blur-xl p-3.5 sm:p-5 rounded-2xl md:rounded-3xl border border-royal-gold/30 shadow-2xl">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-royal-gold/15">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-royal-gold-light tracking-wide uppercase">
              <Calendar className="w-3.5 h-3.5 text-royal-gold shrink-0" />
              <span className="truncate">Check Date Availability</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-400 shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Instant Response</span>
            </div>
          </div>

          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {/* Event Type */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1 text-left">
                Occasion
              </label>
              <select
                value={quickType}
                onChange={(e) => setQuickType(e.target.value)}
                className="w-full bg-royal-dark/90 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-royal-gold transition-colors"
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
              <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1 text-left">
                Preferred Date
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full bg-royal-dark/90 border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-royal-gold transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Expected Guests */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1 text-left">
                Guests Count
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full bg-royal-dark/90 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-royal-gold transition-colors"
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
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-royal-gold to-amber-500 hover:from-amber-400 hover:to-royal-gold text-royal-dark font-bold text-xs tracking-wider uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>Check Dates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Trust Highlights Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 mt-5 sm:mt-8 w-full text-center">
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-royal-navy/50 border border-royal-gold/15 backdrop-blur-sm">
            <span className="block font-cinzel text-base sm:text-xl font-bold text-gold-gradient">50,000+</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Sq. Ft. Lawn</span>
          </div>
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-royal-navy/50 border border-royal-gold/15 backdrop-blur-sm">
            <span className="block font-cinzel text-base sm:text-xl font-bold text-gold-gradient">2,000+</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Guest Capacity</span>
          </div>
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-royal-navy/50 border border-royal-gold/15 backdrop-blur-sm">
            <span className="block font-cinzel text-base sm:text-xl font-bold text-gold-gradient">100%</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">DG Power Backup</span>
          </div>
          <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-royal-navy/50 border border-royal-gold/15 backdrop-blur-sm">
            <span className="block font-cinzel text-base sm:text-xl font-bold text-gold-gradient">4.9 ★</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">650+ Events</span>
          </div>
        </div>

      </div>
    </section>
  );
}
