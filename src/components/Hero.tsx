import React from 'react';
import { Sparkles, Compass, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onDiscoverCafe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onDiscoverCafe }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0B09]">
      {/* Background Image: Uploaded Real Nighttime Cafe Photo with Cinematic Editorial Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/uploaded/hero-night.jpg"
          alt="The Tattoo Cafe & Lounge Night Exterior with Fairy Lights"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B09] via-[#0F0B09]/55 to-[#0F0B09]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(15,11,9,0.85)_100%)]" />
      </div>

      {/* Decorative Golden Corner Accents (Café de Flora Editorial touch) */}
      <div className="absolute inset-6 sm:inset-10 border border-[#C5A059]/20 pointer-events-none z-10 hidden md:block">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#1B1412]/60 backdrop-blur-md mb-6 sm:mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-[#DFCAAB]">
            Opposite Hawa Mahal • Jaipur
          </span>
        </div>

        {/* Editorial Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF7F2] font-normal leading-[1.08] tracking-tight max-w-4xl mb-6">
          An Experience Beyond <br className="hidden sm:inline" />
          <span className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#C5A059] font-normal lowercase inline-block px-1 -mt-2">
            ordinary
          </span>{' '}
          Dining.
        </h1>

        {/* Subheading */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#EDE5D8]/90 max-w-2xl font-light leading-relaxed tracking-wide mb-10 sm:mb-12">
          Discover great food, artistic ambience and memorable moments at The Tattoo Cafe & Lounge,
          overlooking the timeless charm of Jaipur.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#A6823B] text-[#0F0B09] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-glow-gold flex items-center justify-center gap-2 group"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#0F0B09] transition-transform group-hover:rotate-12" />
            <span>Explore Our Menu</span>
          </button>

          <button
            onClick={onDiscoverCafe}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C5A059]/50 hover:border-[#DFCAAB] text-[#FAF7F2] hover:bg-white/5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>Discover Our Café</span>
          </button>
        </div>

        {/* Key Highlight Badges */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#C5A059]/20 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-center max-w-3xl">
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#C5A059]">3rd Floor</span>
            <span className="text-[11px] uppercase tracking-wider text-[#FAF7F2]/70">Rooftop View</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#C5A059]">Opp. Hawa Mahal</span>
            <span className="text-[11px] uppercase tracking-wider text-[#FAF7F2]/70">Iconic Location</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block font-serif text-2xl sm:text-3xl text-[#C5A059]">Pure Flavours</span>
            <span className="text-[11px] uppercase tracking-wider text-[#FAF7F2]/70">Jain & Rajasthani</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#DFCAAB]/80 hover:text-[#C5A059] transition-colors group cursor-pointer"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border border-[#C5A059]/40 flex items-start justify-center p-1.5 group-hover:border-[#C5A059] transition-colors">
          <div className="w-1.5 h-2 bg-[#C5A059] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
