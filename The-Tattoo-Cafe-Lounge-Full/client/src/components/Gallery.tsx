import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ['All', 'Ambience', 'Views', 'Cuisine', 'Moments'];

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6D3C]">
              Photo Gallery
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B1412] font-normal leading-tight">
            A Glimpse Into <br />
            <span className="italic font-script text-4xl sm:text-6xl text-[#C5A059] lowercase">
              our
            </span>{' '}
            World.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#685E57] max-w-xl mx-auto font-light">
            Beautiful spaces, delicious food and moments worth remembering.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#1B1412] text-[#DFCAAB] shadow-md border border-[#C5A059]/40'
                  : 'bg-white text-[#54433B] border border-[#EDE5D8] hover:border-[#C5A059]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry / Irregular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            const isTall = item.aspect === 'tall';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1B1412] shadow-sm hover:shadow-luxury-hover transition-all duration-500 border border-[#EDE5D8] ${
                  isTall ? 'sm:row-span-2 h-[420px] sm:h-full min-h-[380px]' : 'h-72 sm:h-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Real Photo Authenticity Badge */}
                {item.isRealPhoto && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B1412]/90 backdrop-blur-md text-[10px] font-medium text-[#DFCAAB] border border-[#C5A059]/40 shadow-sm">
                      <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                      <span>Original Location</span>
                    </span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B09]/90 via-[#0F0B09]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C5A059] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EDE5D8]/80 font-light line-clamp-2 mb-3">
                    {item.caption}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#DFCAAB] font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Dialog */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xl shadow-2xl border border-[#C5A059]/40">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-[11px] uppercase tracking-widest text-[#C5A059] block mb-1">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="font-serif text-2xl text-[#DFCAAB] font-normal">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#EDE5D8]/80 font-light mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
