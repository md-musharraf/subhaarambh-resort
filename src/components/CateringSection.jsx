import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, Check, Flame, Coffee, Heart, ArrowRight } from 'lucide-react';
import { cateringCuisines, resortInfo } from '../data/resortData';

export default function CateringSection({ onOpenBookingModal }) {
  const [activeCuisineIndex, setActiveCuisineIndex] = useState(0);

  return (
    <section id="catering" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-gradient-to-b from-royal-dark via-royal-navy/90 to-royal-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30 mb-2.5 sm:mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-royal-gold" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
              Gourmet Dining Experience
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Shubhaarambh <span className="text-gold-gradient">Shahi Rasoi</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2">
            Food is the soul of any Indian wedding. Our master chefs bring together authentic regional Bihari delicacies, fragrant Awadhi slow-cooked feasts, live street-food stalls, and decadent desserts.
          </p>
        </div>

        {/* Quality Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-royal-slate/40 border border-royal-gold/20 text-center">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mx-auto mb-1" />
            <span className="text-xs sm:text-sm font-semibold text-slate-100 block">Pure Desi Ghee</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400">Authentic sweets & curries</span>
          </div>
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-royal-slate/40 border border-royal-gold/20 text-center">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mx-auto mb-1" />
            <span className="text-xs sm:text-sm font-semibold text-slate-100 block">Separate Kitchens</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400">Pure Veg & Non-Veg segregation</span>
          </div>
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-royal-slate/40 border border-royal-gold/20 text-center">
            <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 mx-auto mb-1" />
            <span className="text-xs sm:text-sm font-semibold text-slate-100 block">Live Food Stations</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400">Chaat, Handi Litti & Jalebi</span>
          </div>
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-royal-slate/40 border border-royal-gold/20 text-center">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold mx-auto mb-1" />
            <span className="text-xs sm:text-sm font-semibold text-slate-100 block">Royal Service</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400">Hospitality that honors guests</span>
          </div>
        </div>

        {/* Interactive Cuisine Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Cuisine Navigation */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            <h3 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-royal-gold-light mb-2 px-1">
              Explore Our Signature Menus:
            </h3>
            {cateringCuisines.map((cuisine, idx) => {
              const isSelected = idx === activeCuisineIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCuisineIndex(idx)}
                  className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 border active:scale-[0.98] ${
                    isSelected
                      ? 'bg-royal-card border-royal-gold shadow-gold scale-[1.01]'
                      : 'bg-royal-slate/30 border-royal-gold/15 hover:border-royal-gold/40 hover:bg-royal-slate/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`font-cinzel text-sm sm:text-base font-bold ${isSelected ? 'text-gold-gradient' : 'text-slate-200'}`}>
                      {cuisine.title}
                    </h4>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full shrink-0 ml-2 ${isSelected ? 'bg-royal-gold text-royal-dark font-bold' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    {cuisine.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-2 sm:pt-4">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-royal-gold to-amber-500 text-royal-dark font-bold text-xs uppercase tracking-wider shadow-gold hover:shadow-gold-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Customize Your Wedding Feast</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Active Cuisine Preview Card */}
          <div className="lg:col-span-7">
            <div className="bg-royal-card/90 rounded-2xl sm:rounded-3xl border border-royal-gold/30 overflow-hidden shadow-2xl">
              <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden">
                <img
                  src={cateringCuisines[activeCuisineIndex].image}
                  alt={cateringCuisines[activeCuisineIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-royal-gold text-royal-dark inline-block mb-1">
                    Featured Delicacies
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white">
                    {cateringCuisines[activeCuisineIndex].title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-6 italic">
                  "{cateringCuisines[activeCuisineIndex].desc}"
                </p>

                <div className="space-y-2 sm:space-y-2.5">
                  {cateringCuisines[activeCuisineIndex].items.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-royal-dark/60 border border-royal-gold/15 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 hover:border-royal-gold/40 transition-colors"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-royal-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-royal-gold" />
                      </div>
                      <span className="font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-royal-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="text-[11px] sm:text-xs text-slate-400">
                    * Tasting sessions available for confirmed bookings
                  </div>
                  <a
                    href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent(`Hi Shubhaarambh Resort, I would like to receive the full catering menu PDF and per-plate pricing options.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-gold-light hover:underline tracking-wider uppercase py-1"
                  >
                    <span>Request Full Menu PDF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
