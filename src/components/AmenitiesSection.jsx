import React from 'react';
import { Sparkles, Waves, Car, Zap, Volume2, ShieldCheck, UtensilsCrossed, Bus } from 'lucide-react';
import { amenitiesList } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

// Map icon string names to Lucide icons
const iconMap = {
  Waves: Waves,
  Car: Car,
  Zap: Zap,
  Sparkles: Sparkles,
  Volume2: Volume2,
  ShieldCheck: ShieldCheck,
  UtensilsCrossed: UtensilsCrossed,
  Bus: Bus,
};

export default function AmenitiesSection() {
  const { isDark } = useTheme();

  return (
    <section id="amenities" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors relative ${
      isDark ? 'bg-[#060D17] border-[#D4AF37]/25 text-white' : 'bg-stone-50/50 border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              World-Class Facilities
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            Resort Amenities Designed for{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-700 underline decoration-amber-300 underline-offset-8'}>
              Flawless Events
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            Every detail is meticulously engineered to ensure that you and your guests enjoy an uninterrupted, luxurious celebration in Kajraili, Bhagalpur.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {amenitiesList.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className={`group p-5 sm:p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark 
                    ? 'bg-royal-card/80 border-amber-500/20 hover:border-amber-400 shadow-md' 
                    : 'bg-white border-stone-200 hover:border-stone-400 shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center mb-3 sm:mb-4 transition-colors ${
                  isDark 
                    ? 'bg-amber-500/15 border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950' 
                    : 'bg-amber-50 border-amber-200 text-amber-800 group-hover:bg-amber-100'
                }`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className={`text-sm sm:text-base font-bold mb-1.5 ${
                  isDark ? 'font-cinzel text-slate-100' : 'font-mono text-stone-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-stone-600'
                }`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Reassurance Highlight Banner */}
        <div className={`mt-8 sm:mt-14 p-6 sm:p-8 rounded-2xl border shadow-md flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 ${
          isDark 
            ? 'bg-gradient-to-r from-royal-navy via-royal-card to-royal-navy border-amber-500/30 text-white' 
            : 'bg-white border-stone-300 shadow-sm text-stone-900'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h4 className={`text-base sm:text-xl font-bold ${isDark ? 'font-cinzel text-amber-300' : 'text-stone-900'}`}>
              Need Special Accommodations or Custom Themes?
            </h4>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Our venue management team is available 7 days a week to accommodate customized decor, drone shoot permissions, and guest transport logistics.
            </p>
          </div>
          <a
            href="tel:+919110974441"
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shrink-0 text-center ${
              isDark 
                ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 shadow-gold' 
                : 'bg-stone-900 hover:bg-stone-800 text-white'
            }`}
          >
            Inquire Facilities: 91109 74441
          </a>
        </div>

      </div>
    </section>
  );
}
