import React from 'react';
import { Crown, Sparkles, Award, ShieldCheck, HeartHandshake, Utensils, Phone, Check } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function AboutSection({ onOpenBookingModal }) {
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
    <section id="about" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-white border-t border-b border-[#E8E2D5] relative font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-clean-md group">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                  alt="Shubhaarambh Marriage Hall & Resort Bhagalpur"
                  className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md text-stone-900 border border-stone-200 p-2.5 sm:p-3.5 rounded-xl shadow-clean flex items-center gap-2 sm:gap-3 z-10 font-mono">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 shrink-0" />
                  <div>
                    <span className="font-mono text-base sm:text-xl font-bold block leading-none text-stone-900">650+</span>
                    <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-wider block font-mono">Weddings Hosted</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E2D5] shadow-clean flex items-center justify-between font-mono">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Signature Wedding Mandap</h4>
                    <p className="text-[11px] sm:text-xs text-stone-500">Floral styling & royal stage</p>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] sm:text-[11px] font-semibold border border-amber-200 shrink-0 font-mono">
                    Est. {resortInfo.established}
                  </span>
                </div>
              </div>

              {/* Floating Poolside Accent (Hidden on mobile) */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 w-52 md:w-60 rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-clean-md">
                <img
                  src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
                  alt="Poolside at Shubhaarambh Resort Bhagalpur"
                  className="w-full h-36 object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm border border-stone-200 text-[10px] font-medium text-stone-800 text-center font-mono">
                  🏊 Swimming Pool & Deck
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 font-mono">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E8E2D5]">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-900 font-mono">
                Discover Shubhaarambh
              </span>
            </div>

            <h2 className="font-mono text-xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
              A Celebratory Haven in <span className="text-amber-800 underline decoration-amber-300 underline-offset-4 decoration-2">Bhagalpur</span>
            </h2>

            <p className="text-stone-600 leading-relaxed text-xs sm:text-sm font-mono">
              Located in <strong className="text-stone-900 font-semibold">Kelapur near Kali Mandir (Kajraili Bazar)</strong>, Shubhaarambh Resort & Banquet was born to give families across Bhagalpur, Sultanganj, Banka, and Munger a royal 5-star destination wedding experience without the stress of travelling to distant cities.
            </p>

            <p className="text-stone-600 leading-relaxed text-xs sm:text-sm font-mono">
              Spread across over <strong className="text-stone-900 font-semibold">50,000 square feet</strong>, our resort boasts an expansive open lawn, an air-conditioned Grand Ballroom with chandeliers, an illuminated swimming pool, and luxury bridal suites.
            </p>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] hover:border-amber-700 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center mb-2">
                      <IconComponent className="w-3.5 h-3.5 text-amber-800" />
                    </div>
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-stone-900 mb-0.5">{pillar.title}</h3>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-mono">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-900 hover:bg-amber-800 text-white font-mono font-medium text-xs sm:text-sm tracking-wider uppercase shadow-clean transition-all text-center active:scale-95"
              >
                Schedule A Resort Visit
              </button>
              <a
                href={`tel:${resortInfo.phonePrimary}`}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-stone-300 bg-white hover:border-amber-700 text-stone-800 text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-clean"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Manager</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
