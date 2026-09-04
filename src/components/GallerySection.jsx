import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/resortData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-gradient-to-b from-royal-dark via-royal-navy to-royal-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30 mb-2.5 sm:mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-royal-gold" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
              Visual Elegance
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            A Glimpse into <span className="text-gold-gradient">Royal Grandeur</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2">
            Witness how Shubhaarambh transforms your auspicious day into a cinematic royal fairy tale with breathtaking mandap decorations, illuminated pool evenings, and festive feasts.
          </p>
        </div>

        {/* Filter Categories (Horizontally scrollable on mobile) */}
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0">
          {galleryCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-royal-gold to-amber-500 text-royal-dark shadow-gold font-bold scale-105'
                    : 'bg-royal-slate/40 hover:bg-royal-slate text-slate-300 border border-royal-gold/15'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-royal-gold/20 hover:border-royal-gold/60 shadow-xl transition-all duration-500 bg-royal-card/60 active:scale-[0.98]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Permanent Bottom Gradient for Touch & Mobile Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/95 via-royal-dark/30 to-transparent flex flex-col justify-end p-4 sm:p-6 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-royal-gold-light font-bold mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 mb-2 sm:mb-3">
                  {item.desc}
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-royal-gold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Tap to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-royal-dark/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-royal-slate/90 text-white hover:text-royal-gold border border-royal-gold/30 z-50 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-royal-slate/90 text-white hover:text-royal-gold border border-royal-gold/30 z-50 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-royal-slate/90 text-white hover:text-royal-gold border border-royal-gold/30 z-50 transition-colors active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image & Caption Card */}
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center px-6 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl border border-royal-gold/30"
            />
            <div className="mt-3 sm:mt-4 text-center">
              <h3 className="font-cinzel text-base sm:text-xl font-bold text-royal-gold-light">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-0.5 sm:mt-1 line-clamp-2">
                {filteredItems[lightboxIndex].desc}
              </p>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-1 block">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
