import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VenuesSection from './components/VenuesSection';
import CateringSection from './components/CateringSection';
import CostCalculator from './components/CostCalculator';
import GallerySection from './components/GallerySection';
import AmenitiesSection from './components/AmenitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import TourModal from './components/TourModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainApp() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedVenueForContact, setSelectedVenueForContact] = useState('');
  const { isDark } = useTheme();

  const handleSelectVenueForBooking = (venueTitle) => {
    setSelectedVenueForContact(venueTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 antialiased overflow-x-hidden pb-20 sm:pb-0 ${
      isDark 
        ? 'bg-[#060D17] text-slate-100 selection:bg-amber-400 selection:text-stone-950' 
        : 'bg-[#FAF8F5] text-[#18181B] font-mono selection:bg-amber-100 selection:text-amber-900'
    }`}>
      {/* Sticky Dual-Themed Navbar */}
      <Navbar onOpenBookingModal={() => setBookingModalOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenBookingModal={() => setBookingModalOpen(true)}
          onOpenTourModal={() => setTourModalOpen(true)}
        />

        {/* About & Heritage */}
        <AboutSection onOpenBookingModal={() => setBookingModalOpen(true)} />

        {/* Venues Showcase */}
        <VenuesSection onSelectVenueForBooking={handleSelectVenueForBooking} />

        {/* Gourmet Catering: Shahi Rasoi */}
        <CateringSection onOpenBookingModal={() => setBookingModalOpen(true)} />

        {/* Interactive Event Cost Calculator */}
        <CostCalculator />

        {/* Visual Gallery with Lightbox */}
        <GallerySection />

        {/* Amenities & Infrastructure */}
        <AmenitiesSection />

        {/* Real Testimonials & FAQs */}
        <TestimonialsSection />

        {/* Contact, Booking Form & Google Map */}
        <ContactSection selectedVenue={selectedVenueForContact} />
      </main>

      {/* Royal Footer */}
      <Footer />

      {/* Floating Action Controls (Mobile Bottom Dock + Desktop Floating Stack) */}
      <FloatingActions onOpenBookingModal={() => setBookingModalOpen(true)} />

      {/* Booking / Appointment Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultVenue={selectedVenueForContact}
      />

      {/* Virtual Tour Modal */}
      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
