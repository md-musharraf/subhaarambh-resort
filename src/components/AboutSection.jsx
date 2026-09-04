import React from 'react';
import { Crown, Sparkles, Award, ShieldCheck, HeartHandshake, Utensils, Phone, Check } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function AboutSection({ onOpenBookingModal }) {
  const pillars = [
    {
      icon: Crown,
      title: "Royal Destination Feel",
      desc: "Architecturally styled with majestic high arches, grand chandeliers, and expansive poolside spaces."
    },
    {
      icon: Utensils,
      title: "Shahi Rasoi Delicacies",
      desc: "Authentic live Handi Litti Chokha, Champaran handi flavors, Awadhi Biryani, and artisanal desserts."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Hassle Infrastructure",
      desc: "Dual heavy-duty silent generators, 200+ vehicle valet parking, and 24/7 dedicated security personnel."
    },
    {
      icon: HeartHandshake,
      title: "Warm Bihari Hospitality",
      desc: "Personalized event management ensuring every ritual from Tilak to Bidai is honored with respect."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-gradient-to-b from-royal-dark via-royal-navy to-royal-dark relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-royal-crimson/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Royal Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Grand Photo */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-royal-gold/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                  alt="Shubhaarambh Marriage Hall & Resort Bhagalpur"
                  className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-transparent to-transparent" />
                
                {/* Floating Experience Badge (Inside on mobile, floating outside on desktop) */}
                <div className="absolute top-3 left-3 sm:-top-6 sm:-left-6 bg-gradient-to-br from-royal-gold to-amber-600 text-royal-dark p-2.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-gold flex items-center gap-2 sm:gap-3 z-10">
                  <Award className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-royal-dark shrink-0" />
                  <div>
                    <span className="font-cinzel text-base sm:text-xl md:text-2xl font-black block leading-none">650+</span>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wider block">Weddings Hosted</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-royal-navy/90 backdrop-blur-md border border-royal-gold/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel text-xs sm:text-sm font-bold text-royal-gold-light">Signature Wedding Mandap</h4>
                    <p className="text-[11px] sm:text-xs text-slate-300">Customized floral styling & royal stage</p>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-royal-gold/20 text-royal-gold-light text-[10px] sm:text-[11px] font-semibold border border-royal-gold/30 shrink-0">
                    Est. {resortInfo.established}
                  </span>
                </div>
              </div>

              {/* Floating Second Image (Poolside Lounge - Hidden on mobile) */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 w-52 md:w-64 rounded-2xl overflow-hidden border-2 border-royal-gold/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
                  alt="Poolside at Shubhaarambh Resort Bhagalpur"
                  className="w-full h-36 md:h-44 object-cover"
                />
                <div className="absolute inset-0 bg-royal-dark/30" />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-royal-dark/85 backdrop-blur-sm border border-royal-gold/20 text-[11px] font-medium text-royal-gold-100 text-center">
                  🏊 Swimming Pool & Deck
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-royal-gold" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
                Discover Shubhaarambh
              </span>
            </div>

            <h2 className="font-cinzel text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Majestic Oasis of Celebrations in <span className="text-gold-gradient">Bhagalpur</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base">
              Conveniently located in <strong className="text-royal-gold-100 font-semibold">Kelapur near Kali Mandir (Kajraili Bazar)</strong>, Shubhaarambh Resort & Banquet was born from a singular vision: to give families across Bhagalpur, Sultanganj, Banka, and Munger a royal 5-star destination wedding experience without the stress of travelling to metro cities.
            </p>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base">
              Spread across over <strong className="text-royal-gold-100 font-semibold">50,000 square feet</strong>, our resort boasts an expansive open lawn, an air-conditioned Grand Ballroom with crystal chandeliers, an illuminated swimming pool for contemporary cocktail parties, and luxury guest suites designed specifically for bridal preparation.
            </p>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-royal-slate/40 border border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-300">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-royal-gold/20 flex items-center justify-center mb-2">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-gold" />
                    </div>
                    <h3 className="font-cinzel text-xs sm:text-sm font-bold text-slate-100 mb-1">{pillar.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA row (Responsive Stack on Mobile) */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-royal-gold via-amber-400 to-royal-gold-dark text-royal-dark font-bold text-xs sm:text-sm tracking-wider uppercase shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all text-center justify-center"
              >
                Schedule A Resort Visit
              </button>
              <a
                href={`tel:${resortInfo.phonePrimary}`}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full border border-royal-gold/40 hover:bg-royal-gold/10 text-royal-gold-light text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Venue Manager</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
