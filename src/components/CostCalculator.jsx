import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Check, Send, Phone, MessageSquare, Award, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { pricingTiers, resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function CostCalculator() {
  const [selectedEventType, setSelectedEventType] = useState(pricingTiers.eventTypes[0].id);
  const [guestCount, setGuestCount] = useState(500);
  const [selectedFoodPackage, setSelectedFoodPackage] = useState(pricingTiers.foodPackages[1].id);
  const [selectedDecorPackage, setSelectedDecorPackage] = useState(pricingTiers.decorPackages[1].id);
  const [addons, setAddons] = useState({
    acRooms: true,
    djSound: true,
    coldPyro: false,
  });
  const { isDark } = useTheme();

  const addonPrices = {
    acRooms: { label: "Bridal Suite & AC Family Rooms (Full Stay)", price: 35000 },
    djSound: { label: "Concert Line-Array DJ & Moving Beams", price: 25000 },
    coldPyro: { label: "Cold Pyro Entry Fireworks & Drone Lights", price: 20000 },
  };

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculation logic
  const calculation = useMemo(() => {
    const event = pricingTiers.eventTypes.find((e) => e.id === selectedEventType) || pricingTiers.eventTypes[0];
    const food = pricingTiers.foodPackages.find((f) => f.id === selectedFoodPackage) || pricingTiers.foodPackages[0];
    const decor = pricingTiers.decorPackages.find((d) => d.id === selectedDecorPackage) || pricingTiers.decorPackages[0];

    const foodCost = guestCount * food.pricePerPlate;
    const decorCost = decor.cost;
    
    let addonTotal = 0;
    Object.keys(addons).forEach((k) => {
      if (addons[k]) addonTotal += addonPrices[k].price;
    });

    const subtotal = foodCost + decorCost + addonTotal;
    const grandTotal = Math.round(subtotal);

    return {
      event,
      food,
      decor,
      foodCost,
      decorCost,
      addonTotal,
      grandTotal,
    };
  }, [selectedEventType, guestCount, selectedFoodPackage, selectedDecorPackage, addons]);

  const handleWhatsAppQuote = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF3B0', '#101F35', '#10B981']
    });

    const activeAddonsList = Object.keys(addons)
      .filter((k) => addons[k])
      .map((k) => addonPrices[k].label)
      .join(', ');

    const message = `👑 *SHUBHAARAMBH RESORT & BANQUET - EVENT ESTIMATE* 👑
----------------------------------------
📍 *Venue:* Kajraili, Bhagalpur
🎉 *Event Type:* ${calculation.event.name}
👥 *Expected Guests:* ${guestCount} Guests
🍽️ *Catering Plan:* ${calculation.food.name} (₹${calculation.food.pricePerPlate}/plate)
🌺 *Decor Package:* ${calculation.decor.name} (₹${calculation.decor.cost.toLocaleString('en-IN')})
✨ *Add-ons Included:* ${activeAddonsList || 'None'}
----------------------------------------
💰 *Estimated Total:* ₹${calculation.grandTotal.toLocaleString('en-IN')}*
----------------------------------------
Hello Shubhaarambh Team, I calculated this preliminary estimate on your website. Please check my dates and provide official booking details!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${resortInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors relative ${
      isDark ? 'bg-[#060D17] border-[#D4AF37]/25 text-white' : 'bg-stone-50/50 border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              Transparent Pricing
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            Interactive{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-700 underline decoration-amber-300 underline-offset-8'}>
              Cost Estimator
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            Plan your wedding budget with 100% clarity. Select your guest count, catering tier, and decor style to get an instant realistic estimate.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className={`lg:col-span-7 p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm space-y-6 sm:space-y-8 ${
            isDark ? 'bg-royal-card/90 border-amber-500/30' : 'bg-white border-stone-200'
          }`}>
            
            {/* 1. Event Type */}
            <div>
              <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-2.5 ${
                isDark ? 'text-amber-300' : 'text-stone-500'
              }`}>
                1. Select Occasion / Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
                {pricingTiers.eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedEventType(type.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border active:scale-95 ${
                      selectedEventType === type.id
                        ? isDark
                          ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-gold'
                          : 'bg-stone-900 text-white border-stone-900 font-bold shadow-sm'
                        : isDark
                          ? 'bg-royal-dark/60 text-slate-300 border-slate-700 hover:border-amber-400/50'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <label className={`text-[11px] sm:text-xs uppercase font-bold tracking-wider ${
                  isDark ? 'text-amber-300' : 'text-stone-500'
                }`}>
                  2. Number of Guests
                </label>
                <span className={`text-base sm:text-lg font-bold font-mono ${
                  isDark ? 'text-gold-gradient font-cinzel' : 'text-amber-700'
                }`}>
                  {guestCount} Guests
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer py-1 ${
                  isDark ? 'bg-slate-800 accent-amber-400' : 'bg-stone-200 accent-stone-900'
                }`}
              />

              {/* Quick Guest Chips */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 mt-2.5 sm:mt-3">
                {[200, 400, 600, 1000, 1500].map((count) => (
                  <button
                    key={count}
                    onClick={() => setGuestCount(count)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all active:scale-95 border ${
                      guestCount === count
                        ? isDark
                          ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                          : 'bg-stone-900 text-white font-bold border-stone-900'
                        : isDark
                          ? 'bg-royal-dark text-slate-400 border-slate-800 hover:text-slate-200'
                          : 'bg-stone-100 text-stone-600 border-stone-200 hover:text-stone-900'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Food & Catering Package */}
            <div>
              <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-2.5 ${
                isDark ? 'text-amber-300' : 'text-stone-500'
              }`}>
                3. Catering Tier (Per Plate)
              </label>
              <div className="space-y-2.5 sm:space-y-3">
                {pricingTiers.foodPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedFoodPackage(pkg.id)}
                    className={`p-3.5 sm:p-4 rounded-xl cursor-pointer border transition-all active:scale-[0.99] ${
                      selectedFoodPackage === pkg.id
                        ? isDark
                          ? 'bg-royal-dark/90 border-amber-400 shadow-gold ring-1 ring-amber-400'
                          : 'bg-stone-50 border-stone-900 shadow-sm ring-1 ring-stone-900'
                        : isDark
                          ? 'bg-royal-dark/40 border-slate-700/60 hover:border-amber-400/40'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedFoodPackage === pkg.id 
                            ? isDark ? 'border-amber-400 bg-amber-400 text-stone-950' : 'border-stone-900 bg-stone-900 text-white' 
                            : 'border-stone-400'
                        }`}>
                          {selectedFoodPackage === pkg.id && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <span className={`text-xs sm:text-sm font-bold ${isDark ? 'text-slate-100' : 'text-stone-900'}`}>{pkg.name}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`text-xs sm:text-base font-bold font-mono ${
                          isDark ? 'text-gold-gradient font-cinzel' : 'text-amber-700'
                        }`}>
                          ₹{pkg.pricePerPlate}
                        </span>
                        <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>/ plate</span>
                      </div>
                    </div>
                    <p className={`text-[11px] pl-6.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>{pkg.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Decor Package */}
            <div>
              <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-2.5 ${
                isDark ? 'text-amber-300' : 'text-stone-500'
              }`}>
                4. Decor & Staging Theme
              </label>
              <div className="space-y-2.5 sm:space-y-3">
                {pricingTiers.decorPackages.map((dec) => (
                  <div
                    key={dec.id}
                    onClick={() => setSelectedDecorPackage(dec.id)}
                    className={`p-3.5 sm:p-4 rounded-xl cursor-pointer border transition-all active:scale-[0.99] ${
                      selectedDecorPackage === dec.id
                        ? isDark
                          ? 'bg-royal-dark/90 border-amber-400 shadow-gold ring-1 ring-amber-400'
                          : 'bg-stone-50 border-stone-900 shadow-sm ring-1 ring-stone-900'
                        : isDark
                          ? 'bg-royal-dark/40 border-slate-700/60 hover:border-amber-400/40'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedDecorPackage === dec.id 
                            ? isDark ? 'border-amber-400 bg-amber-400 text-stone-950' : 'border-stone-900 bg-stone-900 text-white' 
                            : 'border-stone-400'
                        }`}>
                          {selectedDecorPackage === dec.id && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <span className={`text-xs sm:text-sm font-bold ${isDark ? 'text-slate-100' : 'text-stone-900'}`}>{dec.name}</span>
                      </div>
                      <span className={`text-xs sm:text-sm font-bold font-mono shrink-0 ${
                        isDark ? 'text-amber-300' : 'text-stone-900'
                      }`}>
                        ₹{dec.cost.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className={`text-[11px] pl-6.5 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>{dec.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Additional Resort Services */}
            <div>
              <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-2.5 ${
                isDark ? 'text-amber-300' : 'text-stone-500'
              }`}>
                5. Add-on Services
              </label>
              <div className="space-y-2 sm:space-y-2.5">
                {Object.keys(addonPrices).map((key) => {
                  const item = addonPrices[key];
                  const active = addons[key];
                  return (
                    <div
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`p-2.5 sm:p-3 rounded-xl border flex items-start sm:items-center justify-between gap-2 cursor-pointer transition-colors active:scale-[0.99] ${
                        active 
                          ? isDark ? 'bg-royal-dark/80 border-amber-500/60' : 'bg-amber-50/50 border-stone-900 ring-1 ring-stone-900' 
                          : isDark ? 'bg-royal-dark/30 border-slate-800' : 'bg-stone-50/50 border-stone-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => {}}
                          className={`rounded cursor-pointer shrink-0 mt-0.5 sm:mt-0 ${
                            isDark ? 'text-amber-400 focus:ring-amber-400' : 'text-stone-900 focus:ring-stone-900'
                          }`}
                        />
                        <span className={`text-xs leading-snug ${isDark ? 'text-slate-200' : 'text-stone-800'}`}>{item.label}</span>
                      </div>
                      <span className={`text-xs font-bold font-mono shrink-0 ml-1 ${
                        isDark ? 'text-amber-300' : 'text-amber-800'
                      }`}>
                        +₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className={`rounded-2xl p-4 sm:p-6 lg:p-8 border shadow-md relative overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-b from-royal-card via-royal-navy to-royal-dark border-amber-500/40 text-white shadow-2xl' 
                : 'bg-white border-stone-300 shadow-md'
            }`}>
              
              {/* Header Badge */}
              <div className={`flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b ${
                isDark ? 'border-amber-500/20' : 'border-stone-200'
              }`}>
                <div className="flex items-center gap-2">
                  <Award className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
                    isDark ? 'font-cinzel text-slate-100' : 'text-stone-900'
                  }`}>
                    Live Quotation
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  Instant Preview
                </span>
              </div>

              {/* Event Meta */}
              <div className={`space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 text-xs ${
                isDark ? 'text-slate-300' : 'text-stone-600'
              }`}>
                <div className="flex justify-between">
                  <span>Occasion:</span>
                  <span className={`font-bold truncate ml-2 text-right ${isDark ? 'text-white' : 'text-stone-900'}`}>{calculation.event.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className={`font-bold font-mono ${isDark ? 'text-white' : 'text-stone-900'}`}>{guestCount} Persons</span>
                </div>
                <div className="flex justify-between">
                  <span>Catering:</span>
                  <span className={`font-bold truncate ml-2 text-right ${isDark ? 'text-white' : 'text-stone-900'}`}>{calculation.food.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decor:</span>
                  <span className={`font-bold truncate ml-2 text-right ${isDark ? 'text-white' : 'text-stone-900'}`}>{calculation.decor.name}</span>
                </div>
              </div>

              {/* Itemized Cost Breakdown */}
              <div className={`space-y-2 py-3 sm:py-4 border-t border-b text-xs mb-4 sm:mb-6 ${
                isDark ? 'border-amber-500/15 text-slate-300' : 'border-stone-200 text-stone-600'
              }`}>
                <div className="flex justify-between">
                  <span>Catering ({guestCount} × ₹{calculation.food.pricePerPlate}):</span>
                  <span className={`font-bold font-mono ${isDark ? 'text-slate-200' : 'text-stone-900'}`}>₹{calculation.foodCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decor & Staging:</span>
                  <span className={`font-bold font-mono ${isDark ? 'text-slate-200' : 'text-stone-900'}`}>₹{calculation.decorCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Add-on Services:</span>
                  <span className={`font-bold font-mono ${isDark ? 'text-slate-200' : 'text-stone-900'}`}>₹{calculation.addonTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Grand Total Highlight */}
              <div className={`mb-4 sm:mb-6 p-4 rounded-xl border text-center ${
                isDark ? 'bg-royal-dark/90 border-amber-500/40' : 'bg-stone-50 border-stone-200'
              }`}>
                <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-bold block mb-1 ${
                  isDark ? 'text-slate-400' : 'text-stone-500'
                }`}>
                  Estimated Total Investment
                </span>
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono block ${
                  isDark ? 'text-gold-gradient font-cinzel' : 'text-stone-950'
                }`}>
                  ₹{calculation.grandTotal.toLocaleString('en-IN')}*
                </span>
                <span className={`text-[10px] mt-1.5 block leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-stone-500'
                }`}>
                  *Excludes taxes. Final custom quotes may adjust based on specific dates and custom menu inclusions.
                </span>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 mb-2.5"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>Lock This Quote on WhatsApp</span>
              </button>

              <a
                href={`tel:${resortInfo.phonePrimary}`}
                className={`w-full py-2.5 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors active:scale-95 ${
                  isDark 
                    ? 'border-amber-500/30 text-amber-300 hover:bg-royal-dark' 
                    : 'border-stone-300 hover:bg-stone-50 text-stone-800'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Discuss with Manager: {resortInfo.phonePrimary}</span>
              </a>

              <div className={`flex items-center gap-1 mt-3 text-[11px] justify-center ${
                isDark ? 'text-slate-400' : 'text-stone-500'
              }`}>
                <Info className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-amber-700'} shrink-0`} />
                <span>Zero advance fee to hold dates for 48 hours</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
