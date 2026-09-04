import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Crown, MapPin, Sparkles } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Navbar({ onOpenBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-royal-crimson-dark via-royal-crimson to-royal-crimson-dark text-royal-gold-100 text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 text-center border-b border-royal-gold/20 flex items-center justify-center gap-1.5 sm:gap-2 font-medium tracking-wide">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-royal-gold animate-pulse shrink-0" />
        <span className="truncate max-w-[280px] sm:max-w-none">
          Reservations Open for 2025–2026 | Special Lawn & Mandap Packages
        </span>
        <span className="hidden md:inline text-royal-gold/60">•</span>
        <a 
          href={`tel:${resortInfo.phonePrimary}`} 
          className="hidden md:inline-flex items-center gap-1 font-semibold text-royal-gold-light hover:underline ml-1 shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3 h-3" /> Call: {resortInfo.phonePrimary}
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
          scrolled 
            ? 'py-2 sm:py-2.5 bg-royal-navy/95 backdrop-blur-md shadow-2xl border-b border-royal-gold/20' 
            : 'py-2.5 sm:py-3.5 bg-gradient-to-b from-royal-dark/95 via-royal-dark/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Royal Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-royal-gold to-amber-700 flex items-center justify-center p-0.5 shadow-gold group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full rounded-full bg-royal-dark flex items-center justify-center">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div className="leading-tight">
              <span className="font-cinzel text-sm sm:text-lg lg:text-2xl font-bold tracking-wider text-gold-gradient block whitespace-nowrap">
                SHUBHAARAMBH
              </span>
              <span className="text-[8px] sm:text-[9px] lg:text-[11px] font-medium tracking-[0.18em] text-royal-gold-200/90 block uppercase whitespace-nowrap">
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
                className="text-xs xl:text-sm font-medium text-slate-200 hover:text-royal-gold-light tracking-wide transition-colors relative py-1 whitespace-nowrap group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className="hidden xl:inline-flex px-3 py-1.5 rounded-full border border-royal-gold/40 text-royal-gold-light hover:bg-royal-gold/10 text-xs font-semibold tracking-wider uppercase transition-all items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{resortInfo.phonePrimary}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="px-3.5 sm:px-4 xl:px-5 py-2 rounded-full bg-gradient-to-r from-royal-gold via-amber-400 to-royal-gold-dark text-royal-dark font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book A Tour</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger (Touch Target >= 44x44px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBookingModal}
              className="sm:hidden px-2.5 py-1.5 rounded-full bg-gradient-to-r from-royal-gold to-amber-500 text-royal-dark font-bold text-[10px] tracking-wider uppercase shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-royal-gold hover:bg-royal-slate/50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] sm:top-[76px] z-40 bg-royal-dark/98 backdrop-blur-2xl border-t border-royal-gold/30 flex flex-col justify-between p-5 pb-8 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <div className="pb-3 mb-2 border-b border-royal-gold/15 flex items-center justify-between text-xs text-royal-gold-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-royal-gold" />
                <span>Kelapur, Kajraili, Bhagalpur</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-royal-gold/10 text-royal-gold border border-royal-gold/20">
                ⭐ 4.9 Rating
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-slate-200 hover:text-royal-gold py-2.5 px-3 rounded-xl hover:bg-royal-navy/60 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-royal-gold/40 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-royal-gold/15 flex flex-col gap-2.5">
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className="w-full py-3 text-center rounded-xl border border-royal-gold/50 text-royal-gold font-semibold text-sm flex items-center justify-center gap-2 hover:bg-royal-gold/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {resortInfo.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 text-center rounded-xl bg-gradient-to-r from-royal-gold via-amber-400 to-royal-gold-dark text-royal-dark font-bold text-sm tracking-wide uppercase shadow-gold flex items-center justify-center gap-2 active:scale-95 transition-transform"
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
