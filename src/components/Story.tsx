import React from 'react';
import { Eye, Utensils } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Background Watermark / Decorative Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDE5D8]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow & Rule */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6D3C]">
              Welcome to The Tattoo Cafe
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B1412] font-normal leading-tight">
            Where Every Moment <br />
            <span className="italic font-script text-4xl sm:text-6xl text-[#C5A059] lowercase">
              becomes
            </span>{' '}
            a Memory.
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition using Uploaded Photographs */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Rooftop Terrace overlooking Hawa Mahal */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/images/uploaded/rooftop-hawa-mahal.jpg"
                  alt="The Tattoo Cafe Rooftop Terrace with Hawa Mahal view"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#DFCAAB] block">
                    Verified Rooftop View
                  </span>
                  <p className="text-xs sm:text-sm font-light text-[#FAF7F2]">
                    The open-air terrace overlooking the historic domes of Jaipur
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card: Night Entrance */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] z-20 hidden xs:block bg-[#1B1412]">
                <img
                  src="/images/uploaded/hero-night.jpg"
                  alt="The Tattoo Cafe Night Façade"
                  className="w-full h-48 sm:h-60 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="p-2.5 text-center bg-[#1B1412] text-white">
                  <span className="text-[9px] uppercase tracking-wider text-[#C5A059] block font-medium">
                    Opposite Hawa Mahal
                  </span>
                  <span className="text-[10px] text-white/80 font-serif">3rd Floor Lounge</span>
                </div>
              </div>

              {/* Decorative Gilt Border Ring */}
              <div className="absolute -top-4 -left-4 w-40 h-40 border border-[#C5A059]/30 rounded-2xl -z-0 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-[#3D302A]">
            
            <p className="font-serif text-xl sm:text-2xl text-[#1B1412] font-normal leading-relaxed italic border-l-2 border-[#C5A059] pl-6 py-1">
              "Good Food. Beautiful Moments. Unforgettable Views."
            </p>

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#54433B]">
              Situated opposite the iconic <strong>Hawa Mahal</strong>, The Tattoo Cafe & Lounge
              brings together delicious food, a distinctive café atmosphere and the charm of Jaipur.
              Whether you're meeting friends, enjoying a relaxed meal or celebrating a special occasion,
              discover a place made for memorable experiences.
            </p>

            <p className="text-sm sm:text-base font-light leading-relaxed text-[#685E57]">
              From fresh stone-baked artisanal pizzas, aromatic pastas and vibrant Lebanese mezze
              to royal Rajasthani Pink City thalis prepared in pure desi ghee and dedicated Jain
              delicacies — our kitchen is dedicated to quality, warmth and hospitality.
            </p>

            {/* Feature Pills */}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#EDE5D8] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C5A059]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1B1412]">Palace Views</h4>
                  <p className="text-xs text-[#685E57] mt-0.5">Direct sightline to Jaipur’s Hawa Mahal</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EDE5D8] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C5A059]">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1B1412]">Diverse Flavours</h4>
                  <p className="text-xs text-[#685E57] mt-0.5">Italian, Lebanese, Burgers & Thalis</p>
                </div>
              </div>
            </div>

            {/* Quote attribution */}
            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#C5A059] p-0.5">
                <img
                  src="/images/logo-icon.svg"
                  alt="The Tattoo Cafe Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-display text-sm uppercase tracking-widest text-[#1B1412]">
                  The Tattoo Cafe & Lounge
                </span>
                <span className="text-xs text-[#8E6D3C] tracking-wider">Hawa Mahal Road, Jaipur</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
