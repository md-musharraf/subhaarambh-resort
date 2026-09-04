import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Check, Send, Phone, MessageSquare, Award, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { pricingTiers, resortInfo } from '../data/resortData';

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
      colors: ['#B8860B', '#D97706', '#18181B', '#E5E7EB']
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
    <section id="calculator" className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-stone-50/50 border-b border-stone-200 font-mono relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 mb-2.5 sm:mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-800">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Interactive <span className="text-amber-700 underline decoration-amber-300 underline-offset-8">Cost Estimator</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base px-2 leading-relaxed">
            Plan your wedding budget with 100% clarity. Select your guest count, catering tier, and decor style to get an instant realistic estimate.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6 sm:space-y-8">
            
            {/* 1. Event Type */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-2.5">
                1. Select Occasion / Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
                {pricingTiers.eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedEventType(type.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border active:scale-95 ${
                      selectedEventType === type.id
                        ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-sm'
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
                <label className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500">
                  2. Number of Guests
                </label>
                <span className="text-base sm:text-lg font-bold text-amber-700 font-mono">
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
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900 py-1"
              />

              {/* Quick Guest Chips */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 mt-2.5 sm:mt-3">
                {[200, 400, 600, 1000, 1500].map((count) => (
                  <button
                    key={count}
                    onClick={() => setGuestCount(count)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all active:scale-95 ${
                      guestCount === count
                        ? 'bg-stone-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Food & Catering Package */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-2.5">
                3. Catering Tier (Per Plate)
              </label>
              <div className="space-y-2.5 sm:space-y-3">
                {pricingTiers.foodPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedFoodPackage(pkg.id)}
                    className={`p-3.5 sm:p-4 rounded-xl cursor-pointer border transition-all active:scale-[0.99] ${
                      selectedFoodPackage === pkg.id
                        ? 'bg-stone-50 border-stone-900 shadow-sm ring-1 ring-stone-900'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${selectedFoodPackage === pkg.id ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300'}`}>
                          {selectedFoodPackage === pkg.id && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-stone-900">{pkg.name}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs sm:text-base font-bold text-amber-700 font-mono">
                          ₹{pkg.pricePerPlate}
                        </span>
                        <span className="text-[10px] text-stone-500 block">/ plate</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-600 pl-6.5 leading-relaxed">{pkg.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Decor Package */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-2.5">
                4. Decor & Staging Theme
              </label>
              <div className="space-y-2.5 sm:space-y-3">
                {pricingTiers.decorPackages.map((dec) => (
                  <div
                    key={dec.id}
                    onClick={() => setSelectedDecorPackage(dec.id)}
                    className={`p-3.5 sm:p-4 rounded-xl cursor-pointer border transition-all active:scale-[0.99] ${
                      selectedDecorPackage === dec.id
                        ? 'bg-stone-50 border-stone-900 shadow-sm ring-1 ring-stone-900'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${selectedDecorPackage === dec.id ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300'}`}>
                          {selectedDecorPackage === dec.id && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-stone-900">{dec.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-stone-900 font-mono shrink-0">
                        ₹{dec.cost.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 pl-6.5">{dec.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Additional Resort Services */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-2.5">
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
                        active ? 'bg-amber-50/50 border-stone-900 ring-1 ring-stone-900' : 'bg-stone-50/50 border-stone-200 hover:bg-stone-100/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => {}}
                          className="rounded text-stone-900 focus:ring-stone-900 cursor-pointer shrink-0 mt-0.5 sm:mt-0"
                        />
                        <span className="text-xs text-stone-800 leading-snug">{item.label}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-800 font-mono shrink-0 ml-1">
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
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-stone-300 shadow-md relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900">
                    Live Quotation
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Instant Preview
                </span>
              </div>

              {/* Event Meta */}
              <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Occasion:</span>
                  <span className="font-bold text-stone-900 truncate ml-2 text-right">{calculation.event.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-bold text-stone-900 font-mono">{guestCount} Persons</span>
                </div>
                <div className="flex justify-between">
                  <span>Catering:</span>
                  <span className="font-bold text-stone-900 truncate ml-2 text-right">{calculation.food.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decor:</span>
                  <span className="font-bold text-stone-900 truncate ml-2 text-right">{calculation.decor.name}</span>
                </div>
              </div>

              {/* Itemized Cost Breakdown */}
              <div className="space-y-2 py-3 sm:py-4 border-t border-b border-stone-200 text-xs text-stone-600 mb-4 sm:mb-6">
                <div className="flex justify-between">
                  <span>Catering ({guestCount} × ₹{calculation.food.pricePerPlate}):</span>
                  <span className="font-bold text-stone-900 font-mono">₹{calculation.foodCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decor & Staging:</span>
                  <span className="font-bold text-stone-900 font-mono">₹{calculation.decorCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Add-on Services:</span>
                  <span className="font-bold text-stone-900 font-mono">₹{calculation.addonTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Grand Total Highlight */}
              <div className="mb-4 sm:mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                  Estimated Total Investment
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 font-mono block">
                  ₹{calculation.grandTotal.toLocaleString('en-IN')}*
                </span>
                <span className="text-[10px] text-stone-500 mt-1.5 block leading-relaxed">
                  *Excludes taxes. Final custom quotes may adjust based on specific dates and custom menu inclusions.
                </span>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 mb-2.5"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>Lock This Quote on WhatsApp</span>
              </button>

              <a
                href={`tel:${resortInfo.phonePrimary}`}
                className="w-full py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Discuss with Manager: {resortInfo.phonePrimary}</span>
              </a>

              <div className="flex items-center gap-1 mt-3 text-[11px] text-stone-500 justify-center">
                <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Zero advance fee to hold dates for 48 hours</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
