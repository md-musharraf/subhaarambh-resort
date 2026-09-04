import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { isDark } = useTheme();

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
    <section id="gallery" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors relative ${
      isDark ? 'bg-[#0B1728] border-[#D4AF37]/25 text-white' : 'bg-[#FAF8F5] border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              Visual Elegance
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            A Glimpse into{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-700 underline decoration-amber-300 underline-offset-8'}>
              Royal Celebrations
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            Witness how Shubhaarambh transforms your auspicious day into a cinematic royal fairy tale with breathtaking mandap decorations, illuminated pool evenings, and festive feasts.
          </p>
        </div>

        {/* Filter Categories (Horizontally scrollable on mobile) */}
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0">
          {galleryCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap shrink-0 transition-all duration-200 active:scale-95 border ${
                  isActive
                    ? isDark 
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-bold border-amber-400 shadow-gold' 
                      : 'bg-stone-900 text-white font-bold border-stone-900 shadow-sm'
                    : isDark 
                      ? 'bg-royal-card text-slate-300 border-amber-500/20 hover:border-amber-400/50' 
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
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
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border shadow-sm transition-all duration-300 active:scale-[0.99] ${
                isDark 
                  ? 'bg-royal-card border-amber-500/20 hover:border-amber-400 shadow-lg' 
                  : 'bg-white border-stone-200 hover:border-stone-400'
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent flex flex-col justify-end p-4 sm:p-6 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-0.5">
                  {item.category}
                </span>
                <h4 className={`text-base sm:text-lg font-bold text-white mb-1 ${isDark ? 'font-cinzel' : ''}`}>
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 line-clamp-2 mb-2 sm:mb-3">
                  {item.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/90 text-stone-900 hover:bg-white z-50 transition-colors shadow-lg"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 text-stone-900 hover:bg-white z-50 transition-colors active:scale-95 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 text-stone-900 hover:bg-white z-50 transition-colors active:scale-95 shadow-lg"
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
              className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/20"
            />
            <div className="mt-3 sm:mt-4 text-center">
              <h3 className={`text-base sm:text-xl font-bold text-white ${isDark ? 'font-cinzel' : ''}`}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-lg mt-0.5 sm:mt-1 line-clamp-2">
                {filteredItems[lightboxIndex].desc}
              </p>
              <span className="text-[11px] text-stone-400 mt-1 block font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
