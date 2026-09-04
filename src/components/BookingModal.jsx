import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resortInfo } from '../data/resortData';

export default function BookingModal({ isOpen, onClose, defaultVenue }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Wedding & Reception',
    guests: '500',
    venue: defaultVenue || 'The Grand Shahi Ballroom',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#B8860B', '#18181B', '#10B981']
    });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shubhaarambh Resort! I would like to check availability and book a tour:\n` +
      `👤 Name: ${formData.name || 'Guest'}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🎉 Event: ${formData.eventType}\n` +
      `🏛️ Space: ${formData.venue}\n` +
      `📅 Date: ${formData.date}\n` +
      `👥 Guests: ${formData.guests}`
    );
    window.open(`https://wa.me/${resortInfo.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 font-mono animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-stone-300 rounded-2xl p-5 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-800">
              Reserve Your Dates
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            Schedule A Resort Visit
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Experience our royal ballroom, poolside lawn & suites in person
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-600 mx-auto" />
            <h4 className="text-lg sm:text-xl font-bold text-stone-900">
              Appointment Requested!
            </h4>
            <p className="text-xs text-stone-600">
              Our reservation manager will call you shortly to confirm your visit time.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:text-stone-900 text-xs font-semibold uppercase active:scale-95"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Jha"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-1">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-1">
                  Event Occasion
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                >
                  <option value="Wedding & Reception">Wedding & Reception</option>
                  <option value="Sangeet & Haldi Night">Sangeet & Haldi Night</option>
                  <option value="Ring Ceremony / Sagan">Ring Ceremony / Sagan</option>
                  <option value="Corporate / Birthday">Corporate / Birthday</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-500 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm active:scale-95 transition-all"
              >
                Request Priority Site Visit
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-50 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp Check</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
