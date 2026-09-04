import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-dark border-t-2 border-royal-gold/25 text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-12 px-3.5 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-royal-gold/15">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-royal-gold to-amber-700 flex items-center justify-center p-0.5 shadow-gold shrink-0">
                <div className="w-full h-full rounded-full bg-royal-dark flex items-center justify-center">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-gold-gradient block leading-tight">
                  SHUBHAARAMBH
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.18em] text-royal-gold-200/90 block uppercase">
                  Resort & Banquet • Bhagalpur
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier destination marriage hall and luxury resort in Bhagalpur. Offering an opulent centrally AC ballroom, open-air wedding lawn, swimming pool, luxury bridal suites, and gourmet Bihari & Awadhi feasts.
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-[11px] sm:text-xs text-royal-gold-light">
              <Sparkles className="w-3.5 h-3.5 text-royal-gold shrink-0" />
              <span>Dedicated to unforgettable family milestones since {resortInfo.established}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2 sm:space-y-3">
            <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-royal-gold transition-colors block py-0.5">Our Legacy</a></li>
              <li><a href="#venues" className="hover:text-royal-gold transition-colors block py-0.5">Ballroom & Lawns</a></li>
              <li><a href="#catering" className="hover:text-royal-gold transition-colors block py-0.5">Shahi Rasoi Menu</a></li>
              <li><a href="#calculator" className="hover:text-royal-gold transition-colors block py-0.5">Cost Estimator</a></li>
              <li><a href="#gallery" className="hover:text-royal-gold transition-colors block py-0.5">Photo Gallery</a></li>
              <li><a href="#amenities" className="hover:text-royal-gold transition-colors block py-0.5">Resort Amenities</a></li>
            </ul>
          </div>

          {/* Occasions Hosted */}
          <div className="lg:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Occasions
            </h4>
            <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs text-slate-400">
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
            <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Resort Location
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-gold shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs">{resortInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-gold shrink-0" />
                <a href={`tel:${resortInfo.phonePrimary}`} className="hover:text-royal-gold font-semibold text-[11px] sm:text-xs">
                  {resortInfo.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-gold shrink-0" />
                <span className="text-[11px] sm:text-xs">Everyday: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Shubhaarambh Resort & Banquet. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-royal-gold-light hover:text-white transition-colors py-1"
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
