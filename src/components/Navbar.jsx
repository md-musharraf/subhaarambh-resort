import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Crown, MapPin, Sparkles } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Navbar({ onOpenBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono">
      {/* Top Notification Announcement Bar - Clean Light Gold / Champagne */}
      <div className="bg-[#F3EFE6] text-stone-800 text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 text-center border-b border-[#E5DEC9] flex items-center justify-center gap-1.5 sm:gap-2 font-medium tracking-wide">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700 shrink-0 animate-pulse" />
        <span className="truncate max-w-[280px] sm:max-w-none font-mono">
          2025–2026 Wedding Season Bookings Open | Special Lawn & Mandap Packages
        </span>
        <span className="hidden md:inline text-stone-400">•</span>
        <a 
          href={`tel:${resortInfo.phonePrimary}`} 
          className="hidden md:inline-flex items-center gap-1 font-semibold text-amber-900 hover:underline ml-1 shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3 h-3 text-amber-800" /> Call: {resortInfo.phonePrimary}
        </a>
      </div>

      {/* Main Navigation Bar - Light Luxury Glassmorphism */}
      <nav 
        className={`transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
          scrolled 
            ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-clean border-b border-[#E8E2D5]' 
            : 'py-3 sm:py-4 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E8E2D5]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Crest Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div className="leading-tight">
              <span className="font-mono text-sm sm:text-base lg:text-lg font-bold tracking-wider text-stone-900 block whitespace-nowrap">
                SHUBHAARAMBH
              </span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium tracking-[0.16em] text-stone-500 block uppercase whitespace-nowrap">
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
                className="text-xs xl:text-sm font-medium text-stone-700 hover:text-amber-800 tracking-tight transition-colors relative py-1 whitespace-nowrap group font-mono"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className="hidden xl:inline-flex px-3 py-1.5 rounded-full border border-stone-300 bg-white text-stone-800 hover:border-amber-700 hover:text-amber-800 text-xs font-medium tracking-tight transition-all items-center gap-1.5 whitespace-nowrap shadow-clean"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{resortInfo.phonePrimary}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="px-4 xl:px-5 py-2 rounded-full bg-stone-900 hover:bg-amber-800 text-white font-medium text-[11px] sm:text-xs tracking-wider uppercase shadow-clean hover:shadow-clean-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book A Tour</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBookingModal}
              className="sm:hidden px-2.5 py-1.5 rounded-full bg-stone-900 text-white font-medium text-[10px] tracking-wider uppercase"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-stone-800 hover:bg-stone-200/60 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[66px] sm:top-[74px] z-40 bg-[#FAF8F5]/98 backdrop-blur-2xl border-t border-[#E8E2D5] flex flex-col justify-between p-5 pb-8 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <div className="pb-3 mb-2 border-b border-[#E8E2D5] flex items-center justify-between text-xs text-stone-600 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Kelapur, Kajraili, Bhagalpur</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                ⭐ 4.9 Rating
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-mono font-medium text-stone-800 hover:text-amber-800 py-2.5 px-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-stone-400 text-xs font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8E2D5] flex flex-col gap-2.5 font-mono">
            <a
              href={`tel:${resortInfo.phonePrimary}`}
              className="w-full py-3 text-center rounded-xl border border-stone-300 bg-white text-stone-900 font-medium text-sm flex items-center justify-center gap-2 hover:border-amber-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call Now: {resortInfo.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 text-center rounded-xl bg-stone-900 hover:bg-amber-800 text-white font-medium text-sm tracking-wide uppercase shadow-clean flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book A Tour / Check Dates</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
