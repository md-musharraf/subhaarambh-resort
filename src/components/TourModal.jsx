import React, { useState } from 'react';
import { X, Play, Sparkles, MapPin, CheckCircle, Volume2, Shield } from 'lucide-react';
import { venueSpaces, resortInfo } from '../data/resortData';

export default function TourModal({ isOpen, onClose }) {
  const [selectedTourIndex, setSelectedTourIndex] = useState(0);

  if (!isOpen) return null;

  const tourScenes = [
    {
      title: "The Grand Shahi Ballroom (AC)",
      tag: "Indoor Royal Luxury",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      description: "Centrally air-conditioned 12,000 sq ft hall with grand crystal chandeliers, 40ft royal stage, and attached bridal green rooms."
    },
    {
      title: "The Emerald Poolside Wedding Lawn",
      tag: "Under Fairy Lights",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
      description: "Expansive natural turf accommodating 2,000 guests, illuminated pool reflection, and dedicated live Bihari & Awadhi food stalls."
    },
    {
      title: "Royal Mandap & Floral Decor",
      tag: "Sacred Ceremonies",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      description: "Traditional Rajputana floral mandap with fresh red roses, fragrant marigolds, and warm cinematic stage lighting."
    },
    {
      title: "Presidential Bridal Suite",
      tag: "5-Star Dressing Comfort",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      description: "Luxurious air-conditioned suite with professional lighted salon vanity mirror for flawless bridal makeup sessions."
    }
  ];

  const currentScene = tourScenes[selectedTourIndex];

  return (
    <div className="fixed inset-0 z-50 bg-royal-dark/95 backdrop-blur-lg flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-royal-card border border-royal-gold/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-royal-dark/80 text-slate-300 hover:text-white border border-royal-gold/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Scene Viewer Screen */}
        <div className="relative aspect-video max-h-[50vh] w-full overflow-hidden bg-black">
          <img
            src={currentScene.image}
            alt={currentScene.title}
            className="w-full h-full object-cover animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-transparent to-black/40" />

          {/* Top Info */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-royal-crimson text-royal-gold-100 text-[10px] sm:text-xs font-bold border border-royal-gold/30">
              {currentScene.tag}
            </span>
            <div className="flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-royal-dark/80 backdrop-blur-md text-[10px] sm:text-xs text-slate-300 border border-slate-700">
              <MapPin className="w-3 h-3 text-royal-gold" />
              <span>Kajraili</span>
            </div>
          </div>

          {/* Bottom Title on Video */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 z-10">
            <h3 className="font-cinzel text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1">
              {currentScene.title}
            </h3>
            <p className="text-[11px] sm:text-sm text-slate-300 max-w-2xl line-clamp-2">
              {currentScene.description}
            </p>
          </div>
        </div>

        {/* Scene Navigation Strip */}
        <div className="p-3.5 sm:p-6 bg-royal-navy border-t border-royal-gold/20">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-royal-gold-light">
              Select Virtual Tour Zone:
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400">
              Scene {selectedTourIndex + 1} of {tourScenes.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {tourScenes.map((scene, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTourIndex(idx)}
                className={`p-2 rounded-xl text-left transition-all border active:scale-95 ${
                  idx === selectedTourIndex
                    ? 'bg-royal-gold/20 border-royal-gold text-royal-gold-light'
                    : 'bg-royal-dark/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-[9px] uppercase block tracking-wider font-semibold">0{idx + 1}.</span>
                <span className="text-[11px] sm:text-xs font-bold block truncate">{scene.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-royal-gold/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
            <span className="text-[10px] sm:text-xs text-slate-400">
              * Physical site visits available 7 days a week: 9 AM - 9 PM
            </span>
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-royal-gold hover:bg-amber-400 text-royal-dark font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Call Manager: {resortInfo.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
