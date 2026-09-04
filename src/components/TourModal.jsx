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
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 font-mono animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/90 text-stone-900 hover:bg-white shadow transition-colors"
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
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />

          {/* Top Info */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-amber-400 text-stone-950 text-[10px] sm:text-xs font-bold">
              {currentScene.tag}
            </span>
            <div className="flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-white/90 text-[10px] sm:text-xs text-stone-900 font-medium">
              <MapPin className="w-3 h-3 text-amber-700" />
              <span>Kajraili</span>
            </div>
          </div>

          {/* Bottom Title on Video */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 z-10">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
              {currentScene.title}
            </h3>
            <p className="text-[11px] sm:text-sm text-stone-200 max-w-2xl line-clamp-2">
              {currentScene.description}
            </p>
          </div>
        </div>

        {/* Scene Navigation Strip */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">
              Select Virtual Tour Zone:
            </span>
            <span className="text-[10px] sm:text-xs text-stone-500">
              Scene {selectedTourIndex + 1} of {tourScenes.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {tourScenes.map((scene, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTourIndex(idx)}
                className={`p-2.5 rounded-xl text-left transition-all border active:scale-95 ${
                  idx === selectedTourIndex
                    ? 'bg-white border-stone-900 shadow-sm text-stone-900 ring-1 ring-stone-900 font-bold'
                    : 'bg-white/80 border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
              >
                <span className="text-[9px] uppercase block tracking-wider font-semibold text-stone-400">0{idx + 1}.</span>
                <span className="text-[11px] sm:text-xs font-bold block truncate">{scene.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
            <span className="text-[11px] text-stone-500">
              * Physical site visits available 7 days a week: 9 AM - 9 PM
            </span>
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Call Manager: {resortInfo.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
