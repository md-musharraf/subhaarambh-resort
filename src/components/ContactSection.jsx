import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resortInfo } from '../data/resortData';
import { useTheme } from '../context/ThemeContext';

export default function ContactSection({ selectedVenue }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding & Reception',
    venuePreference: selectedVenue || 'The Grand Shahi Ballroom',
    date: '',
    guests: '500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { isDark } = useTheme();

  // Update venue preference if changed from outside
  React.useEffect(() => {
    if (selectedVenue) {
      setFormData((prev) => ({ ...prev, venuePreference: selectedVenue }));
    }
  }, [selectedVenue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#B8860B', '#18181B', '#10B981']
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*NEW RESERVATION INQUIRY - SHUBHAARAMBH RESORT*\n` +
      `👤 Name: ${formData.name || 'Guest'}\n` +
      `📞 Phone: ${formData.phone || 'Not provided'}\n` +
      `🎉 Event: ${formData.eventType}\n` +
      `🏛️ Preferred Space: ${formData.venuePreference}\n` +
      `📅 Date: ${formData.date || 'Flexible'}\n` +
      `👥 Guests: ${formData.guests}\n` +
      `📝 Note: ${formData.message || 'Please contact me regarding booking availability.'}`
    );
    window.open(`https://wa.me/${resortInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className={`py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-b transition-colors relative ${
      isDark ? 'bg-[#060D17] border-[#D4AF37]/25 text-white' : 'bg-[#FAF8F5] border-stone-200 text-stone-900 font-mono'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 sm:mb-2.5 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              Connect With Us
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2.5 sm:mb-3 ${
            isDark ? 'font-cinzel text-white' : 'font-mono text-stone-900'
          }`}>
            Plan Your Grand Event at{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-amber-700 underline decoration-amber-300 underline-offset-8'}>
              Shubhaarambh
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base px-2 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-stone-600 font-mono'
          }`}>
            Visit our resort for a private guided walk-through, discuss custom catering menus, or reserve your auspicious dates before slots fill up.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Contact Cards & Map */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Primary Details Card */}
            <div className={`p-5 sm:p-6 lg:p-8 rounded-2xl border shadow-sm space-y-4 sm:space-y-6 ${
              isDark ? 'bg-royal-card/90 border-amber-500/30' : 'bg-white border-stone-200'
            }`}>
              <h3 className={`text-lg sm:text-xl font-bold pb-2 sm:pb-3 border-b ${
                isDark ? 'font-cinzel text-white border-amber-500/20' : 'text-stone-900 border-stone-200'
              }`}>
                Resort Address & Contacts
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border mt-0.5 ${
                  isDark ? 'bg-amber-500/15 border-amber-500/30 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-800'
                }`}>
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className={`text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-0.5 ${
                    isDark ? 'text-amber-300' : 'text-stone-500'
                  }`}>
                    Location & Landmark
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed font-semibold ${
                    isDark ? 'text-slate-200' : 'text-stone-900'
                  }`}>
                    {resortInfo.address}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                    {resortInfo.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border mt-0.5 ${
                  isDark ? 'bg-amber-500/15 border-amber-500/30 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-800'
                }`}>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className={`text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-0.5 ${
                    isDark ? 'text-amber-300' : 'text-stone-500'
                  }`}>
                    Direct Booking Lines
                  </h4>
                  <div className="space-y-0.5 sm:space-y-1">
                    <a
                      href={`tel:${resortInfo.phonePrimary}`}
                      className={`text-xs sm:text-sm font-bold block transition-colors ${
                        isDark ? 'text-slate-200 hover:text-amber-300' : 'text-stone-900 hover:text-amber-700'
                      }`}
                    >
                      {resortInfo.phonePrimary} (Mr. Manager)
                    </a>
                    <a
                      href={`tel:${resortInfo.phoneSecondary}`}
                      className={`text-xs sm:text-sm font-bold block transition-colors ${
                        isDark ? 'text-slate-200 hover:text-amber-300' : 'text-stone-900 hover:text-amber-700'
                      }`}
                    >
                      {resortInfo.phoneSecondary} (Reception Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border mt-0.5 ${
                  isDark ? 'bg-amber-500/15 border-amber-500/30 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-800'
                }`}>
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className={`text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-0.5 ${
                    isDark ? 'text-amber-300' : 'text-stone-500'
                  }`}>
                    Site Visit Timings
                  </h4>
                  <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-200' : 'text-stone-900'}`}>
                    Open Every Day: 9:00 AM – 9:00 PM
                  </p>
                  <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                    Prior appointment recommended for food tastings
                  </p>
                </div>
              </div>

              {/* Action Link for Directions */}
              <a
                href="https://maps.google.com/?q=Kajraili+Bhagalpur+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 sm:py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95 border ${
                  isDark 
                    ? 'bg-royal-dark/90 hover:bg-royal-slate border-amber-500/30 text-amber-300' 
                    : 'bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-900'
                }`}
              >
                <Navigation className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} />
                <span>Get Driving Directions</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className={`rounded-2xl overflow-hidden border shadow-sm h-52 sm:h-64 w-full ${
              isDark ? 'border-amber-500/30 bg-royal-dark' : 'border-stone-200 bg-stone-100'
            }`}>
              <iframe
                title="Shubhaarambh Resort Location Map"
                src={resortInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: isDark ? 'invert(90%) hue-rotate(180deg)' : 'none'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Interactive Booking & Reservation Form */}
          <div className={`lg:col-span-7 p-5 sm:p-6 lg:p-10 rounded-2xl border shadow-sm ${
            isDark ? 'bg-royal-card/90 border-amber-500/30' : 'bg-white border-stone-200'
          }`}>
            
            <div className={`pb-3 sm:pb-4 mb-4 sm:mb-6 border-b ${
              isDark ? 'border-amber-500/20' : 'border-stone-200'
            }`}>
              <h3 className={`text-lg sm:text-2xl font-bold ${
                isDark ? 'font-cinzel text-white' : 'text-stone-900'
              }`}>
                Book A Consultation / Reserve Date
              </h3>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
                Fill out the form below. Our wedding specialist will confirm availability within 30 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4 animate-fadeIn">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto border ${
                  isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                }`}>
                  <CheckCircle2 className="w-7 h-7 sm:w-10 sm:h-10" />
                </div>
                <h4 className={`text-xl sm:text-2xl font-bold ${isDark ? 'font-cinzel text-white' : 'text-stone-900'}`}>
                  Inquiry Received with Thanks!
                </h4>
                <p className={`text-xs sm:text-sm max-w-md mx-auto ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                  Thank you, <strong className={isDark ? 'text-amber-300' : 'text-amber-800'}>{formData.name || 'Guest'}</strong>. Our event coordinator is reviewing your date for <strong className={isDark ? 'text-white' : 'text-stone-900'}>{formData.eventType}</strong>.
                </p>
                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward Details to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`w-full sm:w-auto px-5 py-3 rounded-xl border text-xs font-semibold uppercase active:scale-95 ${
                      isDark ? 'border-slate-700 text-slate-300 hover:text-white' : 'border-stone-300 text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Name */}
                  <div>
                    <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                      isDark ? 'text-slate-400' : 'text-stone-500'
                    }`}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none transition-colors border ${
                        isDark 
                          ? 'bg-royal-dark/90 border-slate-700 text-slate-200 placeholder-slate-500 focus:border-amber-400' 
                          : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                      isDark ? 'text-slate-400' : 'text-stone-500'
                    }`}>
                      Mobile (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none transition-colors border ${
                        isDark 
                          ? 'bg-royal-dark/90 border-slate-700 text-slate-200 placeholder-slate-500 focus:border-amber-400' 
                          : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Event Type */}
                  <div>
                    <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                      isDark ? 'text-slate-400' : 'text-stone-500'
                    }`}>
                      Occasion
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none transition-colors border ${
                        isDark 
                          ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400' 
                          : 'bg-white border-stone-300 text-stone-900 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                      }`}
                    >
                      <option value="Wedding & Reception">Wedding & Reception</option>
                      <option value="Sangeet & Haldi Night">Sangeet & Haldi Night</option>
                      <option value="Ring Ceremony / Sagan">Ring Ceremony / Sagan</option>
                      <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                      <option value="Corporate Event / Seminar">Corporate Event / Seminar</option>
                    </select>
                  </div>

                  {/* Preferred Venue Space */}
                  <div>
                    <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                      isDark ? 'text-slate-400' : 'text-stone-500'
                    }`}>
                      Preferred Venue Space
                    </label>
                    <select
                      value={formData.venuePreference}
                      onChange={(e) => setFormData({ ...formData, venuePreference: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none transition-colors border ${
                        isDark 
                          ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400' 
                          : 'bg-white border-stone-300 text-stone-900 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                      }`}
                    >
                      <option value="The Grand Shahi Ballroom">The Grand Shahi Ballroom (AC)</option>
                      <option value="The Emerald Poolside Wedding Lawn">Emerald Poolside Wedding Lawn</option>
                      <option value="The Royal Sangeet & Haldi Courtyard">Royal Sangeet & Haldi Courtyard</option>
                      <option value="Complete Resort Takeover">Complete Resort Takeover</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Date */}
                  <div>
                    <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                      isDark ? 'text-slate-400' : 'text-stone-500'
                    }`}>
                      Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none transition-colors border ${
                        isDark 
                          ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400 [color-scheme:dark]' 
                          : 'bg-white border-stone-300 text-stone-900 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 [color-scheme:light]'
                      }`}
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                      isDark ? 'text-slate-400' : 'text-stone-500'
                    }`}>
                      Expected Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none transition-colors border ${
                        isDark 
                          ? 'bg-royal-dark/90 border-slate-700 text-slate-200 focus:border-amber-400' 
                          : 'bg-white border-stone-300 text-stone-900 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                      }`}
                    >
                      <option value="150-300">150 - 300 Guests</option>
                      <option value="500">500 Guests</option>
                      <option value="800">800 Guests</option>
                      <option value="1000+">1,000+ Guests</option>
                      <option value="1500+">1,500+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-[11px] sm:text-xs uppercase font-bold tracking-wider mb-1 ${
                    isDark ? 'text-slate-400' : 'text-stone-500'
                  }`}>
                    Specific Requests or Requirements
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about catering preferences, stay requirements, or decor inspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none transition-colors border ${
                      isDark 
                        ? 'bg-royal-dark/90 border-slate-700 text-slate-200 placeholder-slate-500 focus:border-amber-400' 
                        : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                    }`}
                  ></textarea>
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 space-y-2.5 sm:space-y-3">
                  <button
                    type="submit"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
                      isDark 
                        ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 shadow-gold' 
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Date Reservation Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Or Connect Instantly on WhatsApp</span>
                  </button>
                </div>

                <div className={`text-center text-[11px] pt-1 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                  🔒 We respect your privacy. Strictly used for booking inquiries.
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
