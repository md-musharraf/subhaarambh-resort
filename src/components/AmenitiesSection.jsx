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
    <section id="amenities" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-stone-50/50 border-b border-stone-200 font-mono relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-800">
              World-Class Facilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Resort Amenities Designed for <span className="text-amber-700 underline decoration-amber-300 underline-offset-8">Flawless Events</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base px-2 leading-relaxed">
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
                className="group p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-100 transition-colors">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Reassurance Highlight Banner */}
        <div className="mt-8 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-stone-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-xl font-bold text-stone-900">
              Need Special Accommodations or Custom Themes?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Our venue management team is available 7 days a week to accommodate customized decor, drone shoot permissions, and guest transport logistics.
            </p>
          </div>
          <a
            href="tel:+919110974441"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shrink-0 text-center"
          >
            Inquire Facilities: 91109 74441
          </a>
        </div>

      </div>
    </section>
  );
}
