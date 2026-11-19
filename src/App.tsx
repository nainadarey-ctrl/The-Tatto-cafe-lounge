import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Occasions } from './components/Occasions';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { Phone, Navigation, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [reservationOpen, setReservationOpen] = useState(false);

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverCafe = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2420] flex flex-col selection:bg-[#C5A059]/20 selection:text-[#1B1412]">
      {/* Sticky Navigation */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 5: Hero */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onDiscoverCafe={handleDiscoverCafe}
        />

        {/* Section 6: Story / Introduction */}
        <Story />

        {/* Section 7: The Café Experience */}
        <Experience />

        {/* Section 8 & 9: Explore Our Menu & Food Photography */}
        <Menu />

        {/* Section 10: Photo Gallery with Lightbox */}
        <Gallery />

        {/* Section 11: Experiences & Celebrations */}
        <Occasions onPlanVisit={() => setReservationOpen(true)} />

        {/* Section 12: Location & Contact */}
        <LocationContact />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Reservation Dialog Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Mobile Floating Action Sticky Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1B1412]/95 backdrop-blur-md border-t border-[#C5A059]/30 py-2.5 px-4 flex sm:hidden items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+919828065533"
          className="flex-1 py-2 px-3 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 border border-white/20"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Now</span>
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=The+Tattoo+Cafe+and+Lounge%2C+Hawa+Mahal%2C+Jaipur%2C+Rajasthan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 border border-white/20"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Directions</span>
        </a>

        <button
          onClick={() => setReservationOpen(true)}
          className="flex-1 py-2 px-3 rounded-full bg-[#C5A059] text-[#1B1412] text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </button>
      </div>
    </div>
  );
};

export default App;
