import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, Volume2, VolumeX, ArrowUp, Calendar, Sun, Moon } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function FloatingActions({ onOpenBookingModal }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRefs = useRef([]);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ambient Royal Sitar / Tanpura Harmonic Synth using Web Audio API
  const toggleAmbientMusic = () => {
    if (audioPlaying) {
      oscillatorRefs.current.forEach((node) => {
        try { node.stop(); } catch (e) {}
      });
      oscillatorRefs.current = [];
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setAudioPlaying(false);
    } else {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const frequencies = [138.59, 207.65, 277.18, 349.23];
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);

        const newOscs = [];
        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.2 + idx * 0.1, ctx.currentTime);
          lfoGain.gain.setValueAtTime(0.03, ctx.currentTime);
          lfo.connect(gain.gain);
          lfo.start();
          newOscs.push(lfo);

          gain.gain.setValueAtTime(0.2 / (idx + 1), ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start();
          newOscs.push(osc);
        });

        oscillatorRefs.current = newOscs;
        setAudioPlaying(true);
      } catch (err) {
        console.error('Audio synthesis failed:', err);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE BOTTOM DOCK (Visible ONLY on < sm screens)                       */}
      {/* Completely fixes the issue of floating buttons overlapping form inputs!   */}
      {/* ========================================================================= */}
      <nav 
        className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t backdrop-blur-xl transition-colors shadow-2xl safe-bottom ${
          isDark 
            ? 'bg-[#060D17]/95 border-amber-500/25 text-slate-200' 
            : 'bg-white/95 border-stone-200 text-stone-800'
        }`}
        aria-label="Mobile Bottom Quick Actions"
      >
        <div className="grid grid-cols-5 items-center px-2 py-1.5 text-center">
          
          {/* Action 1: Call Manager */}
          <a
            href={`tel:${resortInfo.phonePrimary}`}
            className="flex flex-col items-center justify-center py-1 active:scale-95 transition-transform"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 ${
              isDark ? 'bg-royal-card text-amber-400 border border-amber-500/30' : 'bg-stone-100 text-stone-800 border border-stone-200'
            }`}>
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-semibold tracking-tight block">Call</span>
          </a>

          {/* Action 2: WhatsApp */}
          <a
            href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent('Hello Shubhaarambh Resort, I want to check available wedding dates in Bhagalpur.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-0.5 shadow-md relative">
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <span className="text-[9px] font-semibold tracking-tight text-emerald-600 dark:text-emerald-400 block">WhatsApp</span>
          </a>

          {/* Action 3: Book / Check Dates (Centered Highlight) */}
          <button
            onClick={onOpenBookingModal}
            className="flex flex-col items-center justify-center py-1 active:scale-95 transition-transform"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 shadow-md ${
              isDark ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-bold' : 'bg-stone-900 text-white'
            }`}>
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-bold tracking-tight block">Book</span>
          </button>

          {/* Action 4: Ambient Music */}
          <button
            onClick={toggleAmbientMusic}
            className="flex flex-col items-center justify-center py-1 active:scale-95 transition-transform"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 ${
              audioPlaying
                ? 'bg-amber-500/20 text-amber-500 border border-amber-500'
                : isDark
                ? 'bg-royal-card text-slate-400 border border-slate-800'
                : 'bg-stone-100 text-stone-500 border border-stone-200'
            }`}>
              {audioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="text-[9px] font-semibold tracking-tight block">
              {audioPlaying ? 'Mute' : 'Music'}
            </span>
          </button>

          {/* Action 5: Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center py-1 active:scale-95 transition-transform"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 ${
              isDark ? 'bg-royal-card text-amber-400 border border-amber-500/30' : 'bg-stone-100 text-stone-800 border border-stone-200'
            }`}>
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </div>
            <span className="text-[9px] font-semibold tracking-tight block">
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. DESKTOP FLOATING STACK (Visible ONLY on >= sm screens)                  */}
      {/* Positioned cleanly on bottom-right of desktop with zero mobile interference */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        
        {/* Ambient Audio Toggle */}
        <button
          onClick={toggleAmbientMusic}
          title={audioPlaying ? 'Mute Royal Ambient Music' : 'Play Royal Ambient Tanpura'}
          className={`pointer-events-auto p-3 rounded-full backdrop-blur-md shadow-md transition-all duration-200 group flex items-center gap-1.5 active:scale-95 border ${
            isDark
              ? 'bg-royal-card/95 border-amber-500/30 text-amber-400 hover:bg-royal-slate'
              : 'bg-white/95 border-stone-300 text-stone-700 hover:text-stone-950 font-mono'
          }`}
        >
          {audioPlaying ? (
            <>
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-pulse" />
              <span className="text-[11px] font-bold pr-1 hidden group-hover:inline text-amber-400">Mute</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400" />
              <span className="text-[11px] font-bold pr-1 hidden group-hover:inline text-stone-600">Play Music</span>
            </>
          )}
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${resortInfo.phonePrimary}`}
          title="Call Resort Manager"
          className={`pointer-events-auto p-3.5 rounded-full backdrop-blur-md shadow-md transition-all duration-200 active:scale-90 hover:scale-105 flex items-center justify-center border ${
            isDark
              ? 'bg-royal-card/95 border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-stone-950'
              : 'bg-white/95 border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white'
          }`}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        {/* WhatsApp Floating Action */}
        <a
          href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent('Hello Shubhaarambh Resort, I would like to inquire about wedding and event dates in Bhagalpur.')}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="pointer-events-auto relative p-3.5 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-200 active:scale-90 hover:scale-105 flex items-center justify-center group"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className={`pointer-events-auto p-3 rounded-full backdrop-blur-md shadow-md transition-all duration-200 active:scale-90 border ${
              isDark
                ? 'bg-royal-card/90 border-amber-500/30 text-amber-400 hover:bg-royal-slate'
                : 'bg-white/95 border-stone-300 text-stone-800 hover:bg-stone-100'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </>
  );
}
