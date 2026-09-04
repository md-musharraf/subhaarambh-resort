import React, { useState } from 'react';
import { Users, Maximize2, Sparkles, CheckCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { venueSpaces, resortInfo } from '../data/resortData';

export default function VenuesSection({ onSelectVenueForBooking }) {
  const [activeVenueId, setActiveVenueId] = useState(venueSpaces[0].id);

  const activeVenue = venueSpaces.find((v) => v.id === activeVenueId) || venueSpaces[0];

  return (
    <section id="venues" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#FAF8F5] relative font-mono">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E8E2D5] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-900 font-mono">
              Venues & Lawns
            </span>
          </div>
          <h2 className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            Spaces for <span className="text-amber-800 underline decoration-amber-300 underline-offset-4 decoration-2">Every Ritual</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base px-2 font-mono">
            From regal indoor ballrooms with crystal chandeliers to breezy poolside lawns and bridal suites, choose the perfect backdrop for your wedding.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 md:gap-2.5 mb-6 sm:mb-10 overflow-x-auto no-scrollbar py-1 px-1 font-mono">
          {venueSpaces.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-medium tracking-tight whitespace-nowrap shrink-0 transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-clean font-semibold'
                    : 'bg-white hover:bg-stone-50 text-stone-700 border border-[#E8E2D5] hover:border-amber-700'
                }`}
              >
                {venue.title}
              </button>
            );
          })}
        </div>

        {/* Active Venue Feature Display Card: Clean White Aesthetic */}
        <div className="bg-white border border-[#E8E2D5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-clean-md transition-all font-mono">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: High-Res Image with Badges */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[480px]">
              <img
                src={activeVenue.image}
                alt={activeVenue.title}
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2 font-mono">
                <span className="px-2.5 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium shadow-sm">
                  {activeVenue.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-800 text-[10px] sm:text-xs font-medium border border-stone-200">
                  {activeVenue.tag}
                </span>
              </div>

              {/* Bottom Specs on Mobile */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-stone-900 lg:hidden bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-sm font-mono">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-900 font-semibold">
                  <Users className="w-3.5 h-3.5 text-amber-700" />
                  <span>{activeVenue.capacity}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-stone-600">
                  <Maximize2 className="w-3.5 h-3.5 text-stone-500" />
                  <span>{activeVenue.area}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Details, Features & CTA */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between font-mono bg-white">
              <div>
                <div className="hidden lg:flex items-center gap-4 mb-3 pb-3 border-b border-stone-200 font-mono">
                  <div className="flex items-center gap-1.5 text-xs text-amber-900 font-semibold">
                    <Users className="w-4 h-4 text-amber-700" />
                    <span>{activeVenue.capacity}</span>
                  </div>
                  <span className="text-stone-300">•</span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-600">
                    <Maximize2 className="w-4 h-4 text-stone-500" />
                    <span>{activeVenue.area}</span>
                  </div>
                </div>

                <h3 className="font-mono text-xl sm:text-2xl font-bold text-stone-900 mb-1">
                  {activeVenue.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-800 font-medium mb-4 sm:mb-6 font-mono">
                  {activeVenue.subtitle}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 font-mono">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                    Venue Amenities:
                  </span>
                  {activeVenue.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-mono">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] mb-6 font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-semibold mb-0.5">
                    Recommended For:
                  </span>
                  <span className="text-xs sm:text-sm text-stone-800 font-medium">
                    {activeVenue.idealFor}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 font-mono">
                <button
                  onClick={() => onSelectVenueForBooking(activeVenue.title)}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-stone-900 hover:bg-amber-800 text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-clean transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Reserve This Space</span>
                </button>
                <a
                  href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in inquiring about ${activeVenue.title} at Shubhaarambh Resort Bhagalpur.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-300 bg-white hover:border-amber-700 text-stone-800 text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors active:scale-95 text-center shadow-clean"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 sm:hidden" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Mini Grid of all 4 venues for fast comparison */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 font-mono">
          {venueSpaces.map((v) => (
            <div
              key={v.id}
              onClick={() => setActiveVenueId(v.id)}
              className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all border ${
                activeVenueId === v.id
                  ? 'bg-white border-amber-700 shadow-clean ring-1 ring-amber-700'
                  : 'bg-white border-[#E8E2D5] hover:border-amber-400'
              }`}
            >
              <h4 className="font-mono text-xs sm:text-sm font-bold text-stone-900 mb-0.5 truncate">{v.title}</h4>
              <p className="text-[10px] sm:text-xs text-stone-500 font-mono">{v.capacity}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
