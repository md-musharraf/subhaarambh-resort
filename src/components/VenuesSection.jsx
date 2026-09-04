import React, { useState } from 'react';
import { Users, Maximize2, Sparkles, CheckCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { venueSpaces, resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function VenuesSection({ onSelectVenueForBooking }) {
  const [activeVenueId, setActiveVenueId] = useState(venueSpaces[0].id);
  const { isDark } = useTheme();

  const activeVenue = venueSpaces.find((v) => v.id === activeVenueId) || venueSpaces[0];

  return (
    <section id="venues" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors ${
      isDark ? 'bg-[#060D17] border-[#D4AF37]/25 text-white' : 'bg-[#FAF8F5] border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-[#F3EFE6] border-[#E8E2D5] text-amber-900 font-mono'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              Venues & Lawns
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            Spaces for{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-800 underline decoration-amber-300 underline-offset-4 decoration-2'}>
              Every Ritual
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            From regal indoor ballrooms with crystal chandeliers to breezy poolside lawns and bridal suites, choose the perfect backdrop for your wedding.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 md:gap-2.5 mb-6 sm:mb-10 overflow-x-auto no-scrollbar py-1 px-1">
          {venueSpaces.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium tracking-tight whitespace-nowrap shrink-0 transition-all duration-200 active:scale-95 border ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-bold border-amber-400 shadow-gold'
                      : 'bg-stone-900 text-white font-semibold border-stone-900 shadow-clean font-mono'
                    : isDark
                      ? 'bg-royal-card hover:bg-royal-slate text-slate-300 border-amber-500/20'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-[#E8E2D5] font-mono'
                }`}
              >
                {venue.title}
              </button>
            );
          })}
        </div>

        {/* Active Venue Feature Display Card */}
        <div className={`rounded-2xl sm:rounded-3xl overflow-hidden border shadow-lg transition-all ${
          isDark 
            ? 'bg-royal-card border-amber-500/30 text-white shadow-2xl' 
            : 'bg-white border-[#E8E2D5] text-stone-900 shadow-clean-md font-mono'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: High-Res Image with Badges */}
            <div className="lg:col-span-7 relative min-h-[240px] sm:min-h-[340px] lg:min-h-[480px]">
              <img
                src={activeVenue.image}
                alt={activeVenue.title}
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 py-1 rounded-full bg-stone-950/90 backdrop-blur-md text-amber-300 text-[10px] sm:text-xs font-semibold shadow-sm border border-amber-500/30">
                  {activeVenue.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[10px] sm:text-xs font-semibold border border-stone-200">
                  {activeVenue.tag}
                </span>
              </div>

              {/* Bottom Specs on Mobile */}
              <div className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between lg:hidden backdrop-blur-md p-2.5 sm:p-3 rounded-xl border shadow-sm ${
                isDark 
                  ? 'bg-royal-dark/95 border-amber-500/30 text-white' 
                  : 'bg-white/95 border-stone-200 text-stone-900 font-mono'
              }`}>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold">
                  <Users className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                  <span>{activeVenue.capacity}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-stone-400">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{activeVenue.area}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Details, Features & CTA */}
            <div className={`lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between ${
              isDark ? 'bg-royal-card' : 'bg-white'
            }`}>
              <div>
                <div className={`hidden lg:flex items-center gap-4 mb-3 pb-3 border-b ${
                  isDark ? 'border-amber-500/20' : 'border-stone-200'
                }`}>
                  <div className={`flex items-center gap-1.5 text-xs font-bold ${isDark ? 'text-amber-300' : 'text-amber-900'}`}>
                    <Users className="w-4 h-4 text-amber-500" />
                    <span>{activeVenue.capacity}</span>
                  </div>
                  <span className="opacity-30">•</span>
                  <div className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                    <Maximize2 className="w-4 h-4" />
                    <span>{activeVenue.area}</span>
                  </div>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${
                  isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
                }`}>
                  {activeVenue.title}
                </h3>
                <p className={`text-xs sm:text-sm font-semibold mb-4 sm:mb-6 ${
                  isDark ? 'text-amber-300' : 'text-amber-800 font-mono'
                }`}>
                  {activeVenue.subtitle}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold block ${
                    isDark ? 'text-slate-400' : 'text-stone-500'
                  }`}>
                    Venue Amenities:
                  </span>
                  {activeVenue.features.map((feat, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs sm:text-sm ${
                      isDark ? 'text-slate-200' : 'text-stone-700 font-mono'
                    }`}>
                      <CheckCircle className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 ${
                        isDark ? 'text-amber-400' : 'text-amber-700'
                      }`} />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className={`p-3 rounded-xl border mb-6 ${
                  isDark 
                    ? 'bg-royal-dark/60 border-amber-500/20' 
                    : 'bg-[#FAF8F5] border-[#E8E2D5] font-mono'
                }`}>
                  <span className={`text-[10px] uppercase tracking-wider block font-semibold mb-0.5 ${
                    isDark ? 'text-slate-400' : 'text-stone-500'
                  }`}>
                    Recommended For:
                  </span>
                  <span className={`text-xs sm:text-sm font-medium ${
                    isDark ? 'text-amber-200' : 'text-stone-800'
                  }`}>
                    {activeVenue.idealFor}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={() => onSelectVenueForBooking(activeVenue.title)}
                  className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 ${
                    isDark 
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 shadow-gold hover:shadow-gold-lg' 
                      : 'bg-stone-900 hover:bg-amber-800 text-white shadow-clean font-mono'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This Space</span>
                </button>
                <a
                  href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in inquiring about ${activeVenue.title} at Shubhaarambh Resort Bhagalpur.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors active:scale-95 text-center ${
                    isDark 
                      ? 'border-amber-500/30 bg-royal-dark text-amber-300 hover:bg-royal-slate' 
                      : 'border-stone-300 bg-white hover:border-amber-700 text-stone-800 shadow-clean font-mono'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500 sm:hidden" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Mini Grid of all 4 venues for fast comparison */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8">
          {venueSpaces.map((v) => (
            <div
              key={v.id}
              onClick={() => setActiveVenueId(v.id)}
              className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all border ${
                activeVenueId === v.id
                  ? isDark
                    ? 'bg-royal-card border-amber-400 shadow-gold ring-1 ring-amber-400'
                    : 'bg-white border-amber-700 shadow-clean ring-1 ring-amber-700 font-mono'
                  : isDark
                    ? 'bg-royal-card/60 border-amber-500/20 hover:border-amber-400/60'
                    : 'bg-white border-[#E8E2D5] hover:border-amber-400 font-mono'
              }`}
            >
              <h4 className={`text-xs sm:text-sm font-bold mb-0.5 truncate ${
                isDark ? 'font-cinzel text-slate-100' : 'font-mono text-stone-900'
              }`}>
                {v.title}
              </h4>
              <p className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>
                {v.capacity}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
