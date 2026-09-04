import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, Check, Flame, Heart, ArrowRight } from 'lucide-react';
import { cateringCuisines, resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function CateringSection({ onOpenBookingModal }) {
  const [activeCuisineIndex, setActiveCuisineIndex] = useState(0);
  const { isDark } = useTheme();

  return (
    <section id="catering" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors ${
      isDark ? 'bg-[#0B1728] border-[#D4AF37]/25 text-white' : 'bg-[#FAF8F5] border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              Gourmet Dining Experience
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            Shubhaarambh{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-700 underline decoration-amber-300 underline-offset-8'}>
              Shahi Rasoi
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            Food is the soul of any Indian wedding. Our master chefs bring together authentic regional Bihari delicacies, fragrant Awadhi slow-cooked feasts, live street-food stalls, and decadent desserts.
          </p>
        </div>

        {/* Quality Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          <div className={`p-3 sm:p-4 rounded-xl border text-center transition-colors ${
            isDark ? 'bg-royal-card/90 border-amber-500/20' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mx-auto mb-1.5" />
            <span className="text-xs sm:text-sm font-bold block">Pure Desi Ghee</span>
            <span className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Authentic sweets & curries</span>
          </div>
          <div className={`p-3 sm:p-4 rounded-xl border text-center transition-colors ${
            isDark ? 'bg-royal-card/90 border-amber-500/20' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mx-auto mb-1.5" />
            <span className="text-xs sm:text-sm font-bold block">Separate Kitchens</span>
            <span className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Pure Veg & Non-Veg segregation</span>
          </div>
          <div className={`p-3 sm:p-4 rounded-xl border text-center transition-colors ${
            isDark ? 'bg-royal-card/90 border-amber-500/20' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 mx-auto mb-1.5" />
            <span className="text-xs sm:text-sm font-bold block">Live Food Stations</span>
            <span className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Chaat, Handi Litti & Jalebi</span>
          </div>
          <div className={`p-3 sm:p-4 rounded-xl border text-center transition-colors ${
            isDark ? 'bg-royal-card/90 border-amber-500/20' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mx-auto mb-1.5" />
            <span className="text-xs sm:text-sm font-bold block">Royal Service</span>
            <span className={`text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Hospitality that honors guests</span>
          </div>
        </div>

        {/* Interactive Cuisine Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Cuisine Navigation */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            <h3 className={`text-[10px] sm:text-xs uppercase font-bold tracking-wider mb-2 px-1 ${
              isDark ? 'text-amber-300' : 'text-stone-500'
            }`}>
              Select Signature Menu:
            </h3>
            {cateringCuisines.map((cuisine, idx) => {
              const isSelected = idx === activeCuisineIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCuisineIndex(idx)}
                  className={`p-3.5 sm:p-5 rounded-xl cursor-pointer transition-all duration-200 border active:scale-[0.99] ${
                    isSelected
                      ? isDark
                        ? 'bg-royal-card border-amber-400 shadow-gold ring-1 ring-amber-400'
                        : 'bg-white border-stone-900 shadow-sm ring-1 ring-stone-900'
                      : isDark
                        ? 'bg-royal-dark/60 border-amber-500/15 hover:border-amber-400/50'
                        : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-sm sm:text-base font-bold ${
                      isSelected 
                        ? isDark ? 'text-gold-gradient font-cinzel' : 'text-amber-800' 
                        : isDark ? 'text-slate-200 font-cinzel' : 'text-stone-900'
                    }`}>
                      {cuisine.title}
                    </h4>
                    <span className={`text-[11px] px-2 py-0.5 rounded shrink-0 ml-2 font-mono ${
                      isSelected 
                        ? isDark ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-stone-900 text-white font-bold' 
                        : isDark ? 'text-slate-400 bg-royal-dark' : 'text-stone-400 bg-stone-100'
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <p className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-stone-600'
                  }`}>
                    {cuisine.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-2 sm:pt-4">
              <button
                onClick={onOpenBookingModal}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 shadow-gold hover:shadow-gold-lg' 
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                <span>Customize Your Wedding Feast</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Active Cuisine Preview Card */}
          <div className="lg:col-span-7">
            <div className={`rounded-2xl border overflow-hidden shadow-lg ${
              isDark ? 'bg-royal-card border-amber-500/30' : 'bg-white border-stone-200 shadow-sm'
            }`}>
              <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden">
                <img
                  src={cateringCuisines[activeCuisineIndex].image}
                  alt={cateringCuisines[activeCuisineIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold px-2.5 py-0.5 rounded bg-amber-400 text-stone-950 inline-block mb-1">
                    Featured Delicacies
                  </span>
                  <h3 className={`text-lg sm:text-2xl font-bold text-white ${isDark ? 'font-cinzel' : ''}`}>
                    {cateringCuisines[activeCuisineIndex].title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <p className={`text-xs sm:text-sm mb-4 sm:mb-6 italic ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                  "{cateringCuisines[activeCuisineIndex].desc}"
                </p>

                <div className="space-y-2 sm:space-y-2.5">
                  {cateringCuisines[activeCuisineIndex].items.map((item, i) => (
                    <div
                      key={i}
                      className={`p-2.5 sm:p-3 rounded-lg border flex items-start gap-2.5 text-xs sm:text-sm transition-colors ${
                        isDark 
                          ? 'bg-royal-dark/70 border-amber-500/15 text-slate-200' 
                          : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-stone-300'
                      }`}
                    >
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                        isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-800'
                      }`}>
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                      <span className="font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 sm:mt-8 pt-4 sm:pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left ${
                  isDark ? 'border-amber-500/15' : 'border-stone-200'
                }`}>
                  <div className={`text-[11px] sm:text-xs ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                    * Tasting sessions available for confirmed bookings
                  </div>
                  <a
                    href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent(`Hi Shubhaarambh Resort, I would like to receive the full catering menu PDF and per-plate pricing options.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold hover:underline tracking-wider uppercase py-1 ${
                      isDark ? 'text-amber-300 hover:text-amber-200' : 'text-amber-700 hover:text-amber-800'
                    }`}
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
