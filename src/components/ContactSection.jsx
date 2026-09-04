import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resortInfo } from '../data/resortData';

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
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FFF3B0', '#101F35']
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
    <section id="contact" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-royal-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/30 mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-royal-gold" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-royal-gold-light">
              Connect With Us
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Plan Your Grand Event at <span className="text-gold-gradient">Shubhaarambh</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2">
            Visit our resort for a private guided walk-through, discuss custom catering menus, or reserve your auspicious dates before slots fill up.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Contact Cards & Map */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Primary Details Card */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-royal-card/90 border border-royal-gold/30 shadow-2xl space-y-4 sm:space-y-6">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white pb-2 sm:pb-3 border-b border-royal-gold/20">
                Resort Address & Contacts
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-royal-gold/15 flex items-center justify-center shrink-0 border border-royal-gold/30 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-royal-gold-light mb-0.5 sm:mb-1">
                    Location & Landmark
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {resortInfo.address}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    {resortInfo.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-royal-gold/15 flex items-center justify-center shrink-0 border border-royal-gold/30 mt-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-royal-gold-light mb-0.5 sm:mb-1">
                    Direct Booking Lines
                  </h4>
                  <div className="space-y-0.5 sm:space-y-1">
                    <a
                      href={`tel:${resortInfo.phonePrimary}`}
                      className="text-xs sm:text-sm text-slate-200 hover:text-royal-gold font-semibold block transition-colors"
                    >
                      {resortInfo.phonePrimary} (Mr. Manager)
                    </a>
                    <a
                      href={`tel:${resortInfo.phoneSecondary}`}
                      className="text-xs sm:text-sm text-slate-200 hover:text-royal-gold font-semibold block transition-colors"
                    >
                      {resortInfo.phoneSecondary} (Reception Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-royal-gold/15 flex items-center justify-center shrink-0 border border-royal-gold/30 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-royal-gold" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-royal-gold-light mb-0.5 sm:mb-1">
                    Site Visit Timings
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Open Every Day: 9:00 AM – 9:00 PM
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Prior appointment recommended for food tastings
                  </p>
                </div>
              </div>

              {/* Action Link for Directions */}
              <a
                href="https://maps.google.com/?q=Kajraili+Bhagalpur+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-royal-slate/60 hover:bg-royal-slate border border-royal-gold/30 text-royal-gold-light text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-royal-gold/30 shadow-2xl h-52 sm:h-64 w-full bg-royal-dark">
              <iframe
                title="Shubhaarambh Resort Location Map"
                src={resortInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Interactive Booking & Reservation Form */}
          <div className="lg:col-span-7 bg-royal-card/90 backdrop-blur-xl p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl border border-royal-gold/30 shadow-2xl">
            
            <div className="pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-royal-gold/20">
              <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white">
                Book A Consultation / Reserve Date
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out the form below. Our wedding specialist will confirm availability within 30 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4 animate-fadeIn">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-7 h-7 sm:w-10 sm:h-10" />
                </div>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  Inquiry Received with Thanks!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-royal-gold-light">{formData.name || 'Guest'}</strong>. Our event coordinator is reviewing your date for <strong className="text-white">{formData.eventType}</strong>.
                </p>
                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward Details to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold uppercase active:scale-95"
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
                    <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-royal-gold transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Mobile (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-royal-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Event Type */}
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Occasion
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-royal-gold transition-colors"
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
                    <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Preferred Venue Space
                    </label>
                    <select
                      value={formData.venuePreference}
                      onChange={(e) => setFormData({ ...formData, venuePreference: e.target.value })}
                      className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-royal-gold transition-colors"
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
                    <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-royal-gold transition-colors [color-scheme:dark]"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Expected Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-royal-gold transition-colors"
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
                  <label className="block text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                    Specific Requests or Requirements
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about catering preferences, stay requirements, or decor inspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-royal-dark/90 border border-slate-700 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-royal-gold transition-colors"
                  ></textarea>
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 space-y-2.5 sm:space-y-3">
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-royal-gold via-amber-400 to-royal-gold-dark text-royal-dark font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold hover:shadow-gold-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Date Reservation Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-royal-slate/60 hover:bg-royal-slate border border-royal-gold/30 text-royal-gold-light font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Or Connect Instantly on WhatsApp</span>
                  </button>
                </div>

                <div className="text-center text-[10px] sm:text-[11px] text-slate-400 pt-1">
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
