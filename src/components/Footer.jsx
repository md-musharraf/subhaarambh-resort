import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-12 sm:pt-16 pb-12 px-3.5 sm:px-6 lg:px-8 border-t transition-colors relative ${
      isDark ? 'bg-[#060D17] border-amber-500/25 text-slate-300' : 'bg-white border-stone-200 text-stone-600 font-mono'
    }`}>
      {/* Subtle top ambient glow in dark mode */}
      {isDark && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      )}
      
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b ${
          isDark ? 'border-amber-500/15' : 'border-stone-200'
        }`}>
          
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border ${
                isDark ? 'bg-royal-card border-amber-500/40 text-amber-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-800'
              }`}>
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <span className={`text-base sm:text-lg font-bold tracking-tight block leading-tight ${
                  isDark ? 'font-cinzel text-gold-gradient' : 'text-stone-900 font-mono'
                }`}>
                  SHUBHAARAMBH
                </span>
                <span className={`text-[9px] sm:text-[10px] font-medium tracking-wider block uppercase ${
                  isDark ? 'text-amber-200/80' : 'text-stone-500'
                }`}>
                  Resort & Banquet • Bhagalpur
                </span>
              </div>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${
              isDark ? 'text-slate-400' : 'text-stone-600'
            }`}>
              The premier destination marriage hall and luxury resort in Bhagalpur. Offering an opulent centrally AC ballroom, open-air wedding lawn, swimming pool, luxury bridal suites, and gourmet Bihari & Awadhi feasts.
            </p>

            <div className={`pt-1 flex items-center gap-1.5 text-[11px] sm:text-xs ${
              isDark ? 'text-amber-300' : 'text-amber-800'
            }`}>
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Dedicated to unforgettable family milestones since {resortInfo.established}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2 sm:space-y-3">
            <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
              isDark ? 'font-cinzel text-white' : 'text-stone-900'
            }`}>
              Explore
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className={`transition-colors block py-0.5 ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-800'}`}>Our Legacy</a></li>
              <li><a href="#venues" className={`transition-colors block py-0.5 ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-800'}`}>Ballroom & Lawns</a></li>
              <li><a href="#catering" className={`transition-colors block py-0.5 ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-800'}`}>Shahi Rasoi Menu</a></li>
              <li><a href="#calculator" className={`transition-colors block py-0.5 ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-800'}`}>Cost Estimator</a></li>
              <li><a href="#gallery" className={`transition-colors block py-0.5 ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-800'}`}>Photo Gallery</a></li>
              <li><a href="#amenities" className={`transition-colors block py-0.5 ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-800'}`}>Resort Amenities</a></li>
            </ul>
          </div>

          {/* Occasions Hosted */}
          <div className="lg:col-span-3 space-y-2 sm:space-y-3">
            <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
              isDark ? 'font-cinzel text-white' : 'text-stone-900'
            }`}>
              Occasions
            </h4>
            <ul className={`space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs ${
              isDark ? 'text-slate-400' : 'text-stone-600'
            }`}>
              <li>• Grand Destination Weddings & Varmala</li>
              <li>• Sangeet & Mehendi Poolside Fiestas</li>
              <li>• Ring Ceremonies & Tilak Celebrations</li>
              <li>• Golden Jubilee & Anniversary Galas</li>
              <li>• Corporate Conferences & Dinners</li>
              <li>• Private Pool Parties & Birthdays</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-2 sm:space-y-3">
            <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
              isDark ? 'font-cinzel text-white' : 'text-stone-900'
            }`}>
              Resort Location
            </h4>
            <div className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              <div className="flex items-start gap-2">
                <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                <span className="text-[11px] sm:text-xs">{resortInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                <a href={`tel:${resortInfo.phonePrimary}`} className={`font-bold text-[11px] sm:text-xs ${
                  isDark ? 'text-amber-300 hover:underline' : 'text-stone-900 hover:text-amber-800'
                }`}>
                  {resortInfo.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                <span className="text-[11px] sm:text-xs">Everyday: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className={`pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-center sm:text-left ${
          isDark ? 'text-slate-400' : 'text-stone-500'
        }`}>
          <p>© {new Date().getFullYear()} Shubhaarambh Resort & Banquet. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className={`inline-flex items-center gap-1.5 font-bold transition-colors py-1 ${
                isDark ? 'text-amber-400 hover:text-amber-300' : 'text-stone-900 hover:text-amber-800'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
