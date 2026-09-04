import React from 'react';
import { Sparkles, Waves, Car, Zap, Volume2, ShieldCheck, UtensilsCrossed, Bus } from 'lucide-react';
import { amenitiesList } from '../data/resortData';

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
  return (
    <section id="amenities" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-royal-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30 mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-royal-gold" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
              World-Class Facilities
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Resort Amenities Designed for <span className="text-gold-gradient">Flawless Events</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2">
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
                className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-royal-card/70 border border-royal-gold/15 hover:border-royal-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 border border-royal-gold/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gradient-to-br group-hover:from-royal-gold group-hover:to-amber-500 transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-royal-gold group-hover:text-royal-dark transition-colors" />
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-slate-100 mb-1 sm:mb-2 group-hover:text-royal-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Reassurance Highlight Banner */}
        <div className="mt-8 sm:mt-14 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-royal-navy via-royal-card to-royal-navy border border-royal-gold/30 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-cinzel text-base sm:text-xl font-bold text-royal-gold-light">
              Need Special Accommodations or Custom Themes?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our venue management team is available 7 days a week to accommodate customized decor, drone shoot permissions, and guest transport logistics.
            </p>
          </div>
          <a
            href="tel:+919110974441"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-royal-gold hover:bg-amber-400 text-royal-dark font-bold text-xs uppercase tracking-wider shadow-gold active:scale-95 transition-all shrink-0 text-center"
          >
            Inquire Facilities: 91109 74441
          </a>
        </div>

      </div>
    </section>
  );
}
