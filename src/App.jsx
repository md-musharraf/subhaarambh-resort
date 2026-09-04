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

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedVenueForContact, setSelectedVenueForContact] = useState('');

  const handleSelectVenueForBooking = (venueTitle) => {
    setSelectedVenueForContact(venueTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-royal-dark text-slate-100 selection:bg-royal-gold/30 selection:text-royal-gold-light antialiased font-sans overflow-x-hidden">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenBookingModal={() => setBookingModalOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* Cinematic Royal Hero */}
        <Hero
          onOpenBookingModal={() => setBookingModalOpen(true)}
          onOpenTourModal={() => setTourModalOpen(true)}
        />

        {/* About & Story */}
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

      {/* Floating Action Controls */}
      <FloatingActions />

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
