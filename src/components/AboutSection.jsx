import React from 'react';
import { Crown, Sparkles, Award, ShieldCheck, HeartHandshake, Utensils, Phone, Check } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function AboutSection({ onOpenBookingModal }) {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: Crown,
      title: "Royal Architecture",
      desc: "High arches, grand chandeliers, and expansive poolside spaces."
    },
    {
      icon: Utensils,
      title: "Shahi Rasoi",
      desc: "Authentic live Handi Litti, Champaran handi flavors, and Awadhi Biryani."
    },
    {
      icon: ShieldCheck,
      title: "100% Infrastructure",
      desc: "Dual heavy-duty silent DG sets, 200+ valet parking, and 24/7 security."
    },
    {
      icon: HeartHandshake,
      title: "Bihari Hospitality",
      desc: "Personalized event management ensuring every ritual is honored."
    }
  ];

  return (
    <section id="about" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-t border-b transition-colors ${
      isDark 
        ? 'bg-[#0B1728] border-[#D4AF37]/25 text-white' 
        : 'bg-white border-[#E8E2D5] text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border shadow-lg group ${
                isDark ? 'border-amber-500/30 shadow-2xl' : 'border-[#E8E2D5] shadow-clean-md'
              }`}>
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                  alt="Shubhaarambh Marriage Hall & Resort Bhagalpur"
                  className="w-full h-[260px] sm:h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Experience Badge */}
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3.5 rounded-xl border flex items-center gap-2 sm:gap-3 z-10 ${
                  isDark 
                    ? 'bg-royal-card/95 backdrop-blur-md border-amber-500/30 text-white shadow-gold' 
                    : 'bg-white/95 backdrop-blur-md border-stone-200 text-stone-900 shadow-clean font-mono'
                }`}>
                  <Award className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                  <div>
                    <span className={`text-base sm:text-xl font-bold block leading-none ${isDark ? 'text-gold-gradient font-cinzel' : 'text-stone-900 font-mono'}`}>
                      650+
                    </span>
                    <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider block ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>
                      Weddings Hosted
                    </span>
                  </div>
                </div>

                <div className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl backdrop-blur-md border flex items-center justify-between ${
                  isDark 
                    ? 'bg-royal-dark/90 border-amber-500/30 text-white' 
                    : 'bg-white/95 border-[#E8E2D5] text-stone-900 shadow-clean font-mono'
                }`}>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold">Signature Wedding Mandap</h4>
                    <p className={`text-[11px] sm:text-xs ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Floral styling & royal stage</p>
                  </div>
                  <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border shrink-0 ${
                    isDark 
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                      : 'bg-amber-100 text-amber-900 border-amber-200 font-mono'
                  }`}>
                    Est. {resortInfo.established}
                  </span>
                </div>
              </div>

              {/* Floating Poolside Accent (Hidden on small mobile) */}
              <div className={`hidden sm:block absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 w-52 md:w-60 rounded-2xl overflow-hidden border shadow-lg ${
                isDark ? 'border-amber-500/30 shadow-2xl' : 'border-[#E8E2D5] shadow-clean-md'
              }`}>
                <img
                  src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
                  alt="Poolside at Shubhaarambh Resort Bhagalpur"
                  className="w-full h-36 object-cover"
                />
                <div className={`absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg backdrop-blur-sm border text-[10px] font-semibold text-center ${
                  isDark ? 'bg-royal-dark/95 border-amber-500/30 text-amber-300' : 'bg-white/95 border-stone-200 text-stone-800 font-mono'
                }`}>
                  🏊 Swimming Pool & Deck
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-5">
            
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
              isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-[#F3EFE6] border-[#E8E2D5] text-amber-900 font-mono'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                Discover Shubhaarambh
              </span>
            </div>

            <h2 className={`text-xl sm:text-3xl md:text-4xl font-bold leading-tight ${
              isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
            }`}>
              A Celebratory Haven in{' '}
              <span className={isDark ? 'text-gold-gradient' : 'text-amber-800 underline decoration-amber-300 underline-offset-4 decoration-2'}>
                Bhagalpur
              </span>
            </h2>

            <p className={`leading-relaxed text-xs sm:text-sm ${
              isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
            }`}>
              Located in <strong className={isDark ? 'text-white font-semibold' : 'text-stone-900 font-semibold'}>Kelapur near Kali Mandir (Kajraili Bazar)</strong>, Shubhaarambh Resort & Banquet was born to give families across Bhagalpur, Sultanganj, Banka, and Munger a royal 5-star destination wedding experience without the stress of travelling to distant cities.
            </p>

            <p className={`leading-relaxed text-xs sm:text-sm ${
              isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
            }`}>
              Spread across over <strong className={isDark ? 'text-white font-semibold' : 'text-stone-900 font-semibold'}>50,000 square feet</strong>, our resort boasts an expansive open lawn, an air-conditioned Grand Ballroom with chandeliers, an illuminated swimming pool, and luxury bridal suites.
            </p>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl border transition-all ${
                      isDark 
                        ? 'bg-royal-card/70 border-amber-500/20 hover:border-amber-400' 
                        : 'bg-[#FAF8F5] border-[#E8E2D5] hover:border-amber-700 font-mono'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${
                      isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-800'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-bold mb-0.5 ${isDark ? 'font-cinzel text-slate-100' : 'font-mono text-stone-900'}`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-stone-500 font-mono'}`}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBookingModal}
                className={`w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all text-center active:scale-95 ${
                  isDark 
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 shadow-gold hover:shadow-gold-lg' 
                    : 'bg-stone-900 hover:bg-amber-800 text-white shadow-clean font-mono'
                }`}
              >
                Schedule A Resort Visit
              </button>
              <a
                href={`tel:${resortInfo.phonePrimary}`}
                className={`w-full sm:w-auto px-5 py-3 rounded-full border text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors active:scale-95 ${
                  isDark 
                    ? 'border-amber-500/30 bg-royal-card text-amber-300 hover:bg-royal-slate' 
                    : 'border-stone-300 bg-white hover:border-amber-700 text-stone-800 shadow-clean font-mono'
                }`}
              >
                <Phone className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                <span>Call Manager</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
