import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#C5A059]/20'
            : 'bg-gradient-to-b from-[#0F0B09]/90 via-[#0F0B09]/50 to-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* 1. Left: Brand Logo & Wordmark */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <img
                src="/images/tattoo-cafe-logo.png"
                alt="The Tattoo Cafe & Lounge Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#C5A059] group-hover:border-[#DFCAAB] group-hover:scale-105 transition-all duration-300 shrink-0 shadow-sm"
              />
              <div className="flex flex-col">
                <span
                  className={`font-display text-sm sm:text-[15px] font-medium tracking-[0.14em] uppercase whitespace-nowrap transition-colors ${
                    isScrolled ? 'text-[#1B1412]' : 'text-white'
                  }`}
                >
                  The Tattoo Cafe & Lounge
                </span>
                <span
                  className={`text-[8.5px] tracking-[0.25em] uppercase font-medium -mt-0.5 transition-colors ${
                    isScrolled ? 'text-[#8E6D3C]' : 'text-[#DFCAAB]'
                  }`}
                >
                  Jaipur
                </span>
              </div>
            </a>

            {/* 2. Center: Systematic Navigation Links with Equal Spacing */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all duration-300 relative py-1 hover:text-[#C5A059] ${
                    isScrolled ? 'text-[#3D302A]' : 'text-[#FAF7F2]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* 3. Right: Systematic Actions (Phone + Table Reservation) */}
            <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 shrink-0">
              {/* Phone Pill */}
              <a
                href="tel:+919828065533"
                className={`flex items-center gap-1.5 text-[11px] font-medium tracking-wide px-3.5 py-1.5 rounded-full border whitespace-nowrap shrink-0 transition-all ${
                  isScrolled
                    ? 'border-[#C5A059]/40 text-[#1B1412] hover:bg-[#C5A059]/10'
                    : 'border-white/30 text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
                aria-label="Call +91 9828065533"
              >
                <Phone className="w-3 h-3 text-[#C5A059] shrink-0" />
                <span className="whitespace-nowrap inline-block">+91 9828065533</span>
              </a>

              {/* Reserve Button */}
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-300 rounded-full bg-[#C5A059] text-[#1B1412] hover:bg-[#A6823B] shadow-sm hover:shadow-luxury-hover whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3 h-3 mr-1.5 shrink-0" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenReservation}
                className="px-2.5 py-1 bg-[#C5A059] text-[#1B1412] text-[10px] font-medium uppercase tracking-wider rounded-full whitespace-nowrap"
              >
                Reserve
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-1.5 rounded-md transition-colors ${
                  isScrolled ? 'text-[#1B1412] hover:bg-black/5' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden transition-opacity">
          <div className="fixed inset-y-0 right-0 w-[84%] max-w-sm bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/20">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/tattoo-cafe-logo.png"
                    alt="The Tattoo Cafe Logo"
                    className="w-10 h-10 rounded-full object-cover border border-[#C5A059] shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="font-display text-base font-medium tracking-wider text-[#1B1412]">
                      The Tattoo Cafe & Lounge
                    </span>
                    <span className="text-[10px] tracking-[0.3em] text-[#8E6D3C] uppercase">
                      Jaipur
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-[#3D302A]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-xl text-[#2A201C] hover:text-[#C5A059] py-1.5 border-b border-[#EDE5D8] flex items-center justify-between transition-colors whitespace-nowrap"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#C5A059]/20">
              <a
                href="tel:+919828065533"
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#C5A059] rounded-full text-xs font-semibold tracking-wider text-[#1B1412] hover:bg-[#C5A059]/10 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span className="whitespace-nowrap">+91 9828065533</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-[#C5A059] text-[#1B1412] rounded-full text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-[#A6823B] transition-colors"
              >
                Reserve a Table
              </button>

              <div className="text-[11px] text-center text-[#685E57] flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Opposite Hawa Mahal, Jaipur</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
