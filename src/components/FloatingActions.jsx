import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRefs = useRef([]);

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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-none">
      
      {/* Ambient Audio Toggle */}
      <button
        onClick={toggleAmbientMusic}
        title={audioPlaying ? 'Mute Royal Ambient Music' : 'Play Royal Ambient Tanpura'}
        className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-royal-navy/90 border border-royal-gold/40 text-royal-gold hover:text-royal-gold-light hover:bg-royal-slate backdrop-blur-md shadow-lg transition-all duration-300 group flex items-center gap-1.5 active:scale-95"
      >
        {audioPlaying ? (
          <>
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse text-amber-400" />
            <span className="text-[10px] sm:text-[11px] font-semibold pr-1 hidden group-hover:inline text-royal-gold-light">Mute</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
            <span className="text-[10px] sm:text-[11px] font-semibold pr-1 hidden group-hover:inline text-slate-300">Play Royal Music</span>
          </>
        )}
      </button>

      {/* Direct Call Floating Button */}
      <a
        href={`tel:${resortInfo.phonePrimary}`}
        title="Call Resort Manager"
        className="pointer-events-auto p-2.5 sm:p-3.5 rounded-full bg-royal-navy/95 border border-royal-gold/40 text-royal-gold-light hover:bg-royal-gold hover:text-royal-dark backdrop-blur-md shadow-gold transition-all duration-300 active:scale-90 hover:scale-110 flex items-center justify-center"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* Floating WhatsApp Action with Glowing Badge */}
      <a
        href={`https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent('Hello Shubhaarambh Resort, I would like to inquire about wedding and event dates in Bhagalpur.')}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="pointer-events-auto relative p-3 sm:p-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl transition-all duration-300 active:scale-90 hover:scale-110 flex items-center justify-center group"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-royal-gold"></span>
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-royal-slate/90 border border-royal-gold/30 text-royal-gold-light hover:bg-royal-gold hover:text-royal-dark backdrop-blur-md shadow-lg transition-all duration-300 active:scale-90"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      )}

    </div>
  );
}
