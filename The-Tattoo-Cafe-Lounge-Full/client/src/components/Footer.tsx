import React from 'react';
import { Phone, MapPin, ArrowUp, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#100C0A] text-[#FAF7F2] relative pt-20 pb-12 border-t border-[#C5A059]/25">
      {/* Decorative Top Gilt Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/tattoo-cafe-logo.png"
                alt="The Tattoo Cafe & Lounge Logo"
                className="w-11 h-11 rounded-full object-cover border border-[#C5A059] shrink-0 shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl font-medium tracking-[0.16em] uppercase text-white whitespace-nowrap">
                  The Tattoo Cafe & Lounge
                </span>
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#DFCAAB] -mt-0.5 font-medium">
                  Jaipur
                </span>
              </div>
            </div>

            <p className="text-sm text-[#EDE5D8]/80 font-light leading-relaxed max-w-sm">
              Good food, beautiful ambience and memorable moments in the heart of Jaipur.
              Overlooking the historic charm of Hawa Mahal.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {/* Instagram SVG */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C5A059]/40 hover:border-[#DFCAAB] flex items-center justify-center text-[#DFCAAB] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C5A059]/40 hover:border-[#DFCAAB] flex items-center justify-center text-[#DFCAAB] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Tattoo+Cafe+and+Lounge%2C+Hawa+Mahal%2C+Jaipur%2C+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C5A059]/40 hover:border-[#DFCAAB] flex items-center justify-center text-[#DFCAAB] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Google Maps"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#DFCAAB] uppercase tracking-wider font-normal">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.16em] text-[#EDE5D8]/70 hover:text-[#C5A059] transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-[#DFCAAB] uppercase tracking-wider font-normal">
              Visit & Contact
            </h4>
            
            <div className="space-y-3 text-xs text-[#EDE5D8]/80 font-light leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  3rd Floor, 30, Opposite Hawa Mahal, <br />
                  Hawa Mahal Rd, Jaipur, Rajasthan 302002, India.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="tel:+919828065533"
                  className="hover:text-[#C5A059] text-[#FAF7F2] font-medium transition-colors"
                >
                  +91 9828065533
                </a>
              </div>

              <p className="pt-2 text-[11px] text-[#C5A059]/90 italic">
                Service Timings: Monday – Sunday • 9:00 AM – 11:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE5D8]/60 font-light">
          <p>© 2026 The Tattoo Cafe & Lounge. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#DFCAAB] hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-[#C5A059]/40 flex items-center justify-center group-hover:border-[#C5A059] group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
