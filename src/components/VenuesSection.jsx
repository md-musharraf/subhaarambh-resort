import React, { useState } from 'react';
import { Users, Maximize2, Sparkles, CheckCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { venueSpaces, resortInfo } from '../data/resortData';

export default function VenuesSection({ onSelectVenueForBooking }) {
  const [activeVenueId, setActiveVenueId] = useState(venueSpaces[0].id);

  const activeVenue = venueSpaces.find((v) => v.id === activeVenueId) || venueSpaces[0];

  return (
    <section id="venues" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-royal-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30 mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-royal-gold" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
              Royal Venues & Lawns
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Magnificent Spaces for <span className="text-gold-gradient">Every Ritual</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2">
            From regal indoor mandaps with crystal chandeliers to breezy poolside lawns and private bridal suites, choose the perfect backdrop for your sacred milestones.
          </p>
        </div>

        {/* Space Selector Tabs (Horizontally scrollable on mobile, centered on desktop) */}
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 md:gap-3 mb-6 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0">
          {venueSpaces.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-royal-gold to-amber-500 text-royal-dark shadow-gold font-bold scale-105'
                    : 'bg-royal-navy/80 hover:bg-royal-slate text-slate-300 border border-royal-gold/20 hover:border-royal-gold/50'
                }`}
              >
                {venue.title}
              </button>
            );
          })}
        </div>

        {/* Active Venue Feature Display Card */}
        <div className="bg-royal-navy/70 backdrop-blur-xl border border-royal-gold/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: High-Res Image with Badges */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[500px]">
              <img
                src={activeVenue.image}
                alt={activeVenue.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-royal-navy/90" />
              
              {/* Floating Badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 py-1 rounded-full bg-royal-crimson/90 backdrop-blur-md text-royal-gold-100 text-[10px] sm:text-xs font-semibold border border-royal-gold/30 shadow-md">
                  {activeVenue.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-royal-dark/80 backdrop-blur-md text-slate-200 text-[10px] sm:text-xs font-medium border border-slate-700">
                  {activeVenue.tag}
                </span>
              </div>

              {/* Bottom Specs on Mobile */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white lg:hidden bg-royal-dark/85 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-royal-gold/20">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-royal-gold-light font-semibold">
                  <Users className="w-3.5 h-3.5 text-royal-gold" />
                  <span>{activeVenue.capacity}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-300">
                  <Maximize2 className="w-3.5 h-3.5 text-royal-gold" />
                  <span>{activeVenue.area}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Details, Features & CTA */}
            <div className="lg:col-span-5 p-4 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="hidden lg:flex items-center gap-4 mb-4 pb-3 border-b border-royal-gold/15">
                  <div className="flex items-center gap-1.5 text-xs text-royal-gold-light font-semibold">
                    <Users className="w-4 h-4 text-royal-gold" />
                    <span>{activeVenue.capacity}</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Maximize2 className="w-4 h-4 text-royal-gold" />
                    <span>{activeVenue.area}</span>
                  </div>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2">
                  {activeVenue.title}
                </h3>
                <p className="text-xs sm:text-sm text-royal-gold-200 font-medium mb-4 sm:mb-6">
                  {activeVenue.subtitle}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-8">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                    Venue Amenities & Features:
                  </span>
                  {activeVenue.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-gold shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-royal-dark/60 border border-royal-gold/15 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                    Recommended For:
                  </span>
                  <span className="text-xs sm:text-sm text-royal-gold-light font-medium">
                    {activeVenue.idealFor}
                  </span>
                </div>
              </div>

              {/* Action Buttons (Full width on mobile) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => onSelectVenueForBooking(activeVenue.title)}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-royal-gold to-amber-500 hover:from-amber-400 hover:to-royal-gold text-royal-dark font-bold text-xs sm:text-sm tracking-wider uppercase shadow-gold hover:shadow-gold-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This Space</span>
                </button>
                <a
                  href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in inquiring about ${activeVenue.title} at Shubhaarambh Resort Bhagalpur.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-royal-gold/40 hover:bg-royal-gold/10 text-royal-gold-light text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 sm:hidden" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Mini Grid of all 4 venues for fast comparison */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8">
          {venueSpaces.map((v) => (
            <div
              key={v.id}
              onClick={() => setActiveVenueId(v.id)}
              className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeVenueId === v.id
                  ? 'bg-royal-slate/90 border-royal-gold shadow-gold'
                  : 'bg-royal-navy/40 border-royal-gold/10 hover:border-royal-gold/30 hover:bg-royal-slate/40'
              }`}
            >
              <h4 className="font-cinzel text-xs sm:text-sm font-bold text-slate-100 mb-0.5 truncate">{v.title}</h4>
              <p className="text-[10px] sm:text-xs text-royal-gold-300">{v.capacity}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
