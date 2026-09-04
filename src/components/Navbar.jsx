import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Crown, MapPin, Sparkles, Sun, Moon } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Venues', href: '#venues' },
    { label: 'Catering', href: '#catering' },
    { label: 'Pricing', href: '#calculator' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar - No mobile truncation! */}
      <div 
        className={`text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 text-center border-b flex items-center justify-center gap-1.5 sm:gap-2 font-medium transition-colors overflow-hidden ${
          isDark 
            ? 'bg-[#881337] text-amber-100 border-amber-500/30' 
            : 'bg-[#F3EFE6] text-stone-800 border-[#E5DEC9] font-mono'
        }`}
      >
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0 animate-pulse" />
        
        {/* Mobile: Clean compact text that fits on any screen without truncation */}
        <span className="sm:hidden font-semibold whitespace-nowrap">
          2025–2026 Season Bookings Open • Bhagalpur
        </span>

        {/* Desktop: Full descriptive announcement */}
        <span className="hidden sm:inline">
          2025–2026 Wedding Season Bookings Open • Special Lawn & Ballroom Packages
        </span>
        
        <span className="hidden md:inline opacity-40">•</span>
        <a 
          href={`tel:${resortInfo.phonePrimary}`} 
          className="hidden md:inline-flex items-center gap-1 font-bold hover:underline ml-1 shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3 h-3 text-amber-400" /> {resortInfo.phonePrimary}
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
          isDark
            ? scrolled 
              ? 'py-2 bg-[#060D17]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/30' 
              : 'py-2.5 sm:py-3.5 bg-[#060D17]/85 backdrop-blur-sm border-b border-[#D4AF37]/15'
            : scrolled 
              ? 'py-2 bg-white/95 backdrop-blur-md shadow-clean border-b border-[#E8E2D5] font-mono' 
              : 'py-2.5 sm:py-3.5 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E8E2D5]/60 font-mono'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Crest Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0 ${
              isDark ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700' : 'bg-gradient-to-br from-amber-600 to-amber-800'
            }`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center ${isDark ? 'bg-[#060D17]' : 'bg-white'}`}>
                <Crown className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-amber-400' : 'text-amber-700'} group-hover:rotate-6 transition-transform`} />
              </div>
            </div>
            <div className="leading-tight min-w-0">
              <span className={`text-xs sm:text-base lg:text-lg font-bold tracking-wider block truncate ${
                isDark ? 'font-cinzel text-gold-gradient' : 'font-mono text-stone-900'
              }`}>
                SHUBHAARAMBH
              </span>
              <span className={`text-[7.5px] sm:text-[9px] lg:text-[10px] font-medium tracking-[0.14em] block uppercase truncate ${
                isDark ? 'text-amber-200/80 font-sans' : 'text-stone-500 font-mono'
              }`}>
                Resort & Banquet • Bhagalpur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs xl:text-sm font-medium tracking-tight transition-colors relative py-1 whitespace-nowrap group ${
                  isDark
                    ? 'text-slate-300 hover:text-amber-400'
                    : 'text-stone-700 hover:text-amber-800 font-mono'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark ? 'bg-amber-400' : 'bg-amber-700'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Classic Light Mode' : 'Switch to Royal Dark Mode'}
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 border shrink-0 ${
                isDark
                  ? 'bg-royal-card border-amber-500/40 text-amber-300 hover:bg-royal-slate hover:border-amber-400'
                  : 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-mono'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span className="hidden sm:inline text-[11px]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-stone-700" />
                  <span className="hidden sm:inline text-[11px]">Dark</span>
                </>
              )}
            </button>

            {/* Direct Call (Desktop only) */}
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className={`hidden xl:inline-flex px-3 py-1.5 rounded-full border text-xs font-medium tracking-tight transition-all items-center gap-1.5 whitespace-nowrap ${
                isDark
                  ? 'border-amber-500/30 bg-royal-card text-slate-200 hover:border-amber-400 hover:text-amber-300'
                  : 'border-stone-300 bg-white text-stone-800 hover:border-amber-700 hover:text-amber-800 shadow-clean font-mono'
              }`}
            >
              <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
              <span>{resortInfo.phonePrimary}</span>
            </a>

            {/* Book A Tour CTA Button - Shown on tablet/desktop ONLY (on mobile, Book is in bottom dock!) */}
            <button
              onClick={onOpenBookingModal}
              className={`hidden sm:flex px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 rounded-full font-medium text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 items-center gap-1.5 whitespace-nowrap active:scale-95 shrink-0 ${
                isDark
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-bold shadow-gold hover:shadow-gold-lg'
                  : 'bg-stone-900 hover:bg-amber-800 text-white shadow-clean font-mono'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book A Tour</span>
            </button>

            {/* Mobile Menu Hamburger - Fully visible, never pushed off-screen! */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors focus:outline-none shrink-0 ${
                isDark ? 'text-slate-100 hover:bg-slate-800/60 active:bg-slate-800' : 'text-stone-800 hover:bg-stone-200/60 active:bg-stone-200'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden fixed inset-0 top-[60px] sm:top-[74px] z-40 backdrop-blur-2xl border-t flex flex-col justify-between p-5 pb-24 overflow-y-auto animate-fadeIn ${
            isDark 
              ? 'bg-[#060D17]/98 border-amber-500/30 text-slate-100' 
              : 'bg-[#FAF8F5]/98 border-stone-200 text-stone-800 font-mono'
          }`}
        >
          <div className="flex flex-col space-y-2">
            
            {/* Header info in drawer */}
            <div className={`pb-3 mb-2 border-b flex items-center justify-between text-xs ${
              isDark ? 'border-amber-500/20 text-slate-300' : 'border-stone-200 text-stone-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                <span>Kelapur, Kajraili, Bhagalpur</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' : 'bg-amber-100 text-amber-900 border-amber-300'
              }`}>
                ⭐ 4.9 Rating
              </span>
            </div>

            {/* Mobile Theme Toggle Card in Drawer */}
            <div className={`p-3 rounded-xl border flex items-center justify-between mb-2 ${
              isDark ? 'bg-royal-card border-amber-500/30' : 'bg-white border-stone-200 shadow-sm'
            }`}>
              <span className="text-xs font-semibold">Display Theme:</span>
              <button
                onClick={toggleTheme}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${
                  isDark 
                    ? 'bg-amber-400 text-stone-950' 
                    : 'bg-stone-900 text-white'
                }`}
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? 'Switch to Light' : 'Switch to Dark'}</span>
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-base font-medium py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                  isDark 
                    ? 'text-slate-200 hover:text-amber-400 hover:bg-slate-800/50' 
                    : 'text-stone-800 hover:text-amber-800 hover:bg-stone-100 font-mono'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">→</span>
              </a>
            ))}
          </div>

          <div className={`pt-4 border-t flex flex-col gap-2.5 ${isDark ? 'border-amber-500/20' : 'border-stone-200'}`}>
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className={`w-full py-3 text-center rounded-xl border font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
                isDark 
                  ? 'border-amber-500/30 bg-royal-card text-amber-300 hover:bg-royal-slate' 
                  : 'border-stone-300 bg-white text-stone-900 hover:border-amber-700 font-mono'
              }`}
            >
              <Phone className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
              <span>Call Now: {resortInfo.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className={`w-full py-3.5 text-center rounded-xl font-medium text-sm tracking-wide uppercase shadow-clean flex items-center justify-center gap-2 active:scale-95 transition-all ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-bold' 
                  : 'bg-stone-900 hover:bg-amber-800 text-white font-mono'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Tour / Check Dates</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
