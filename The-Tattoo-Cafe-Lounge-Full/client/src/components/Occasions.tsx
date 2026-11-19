import React from 'react';
import { Cake, Users, Heart, ArrowRight } from 'lucide-react';

interface OccasionsProps {
  onPlanVisit: () => void;
}

export const Occasions: React.FC<OccasionsProps> = ({ onPlanVisit }) => {
  const occasions = [
    {
      title: 'Birthday Celebrations',
      icon: Cake,
      tag: 'Cherished Milestones',
      description:
        'Celebrate your special day with delicious food, celebratory vibes, and an unforgettable backdrop of Jaipur’s historical skyline.',
      features: ['Custom table setup assistance', 'Dessert & cake service', 'Rooftop photography memories'],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Friends & Family Gatherings',
      icon: Users,
      tag: 'Joyful Reconnects',
      description:
        'Gather around sharing platters, artisanal pizzas and hot coffees in a warm, welcoming space designed for laughter and connection.',
      features: ['Spacious seating arrangements', 'Diverse multi-cuisine menu', 'Jain & pure veg options'],
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Special Date Nights',
      icon: Heart,
      tag: 'Romantic Evenings',
      description:
        'Experience intimate conversations under twinkling fairy lights with a magical night view overlooking the charm of Hawa Mahal.',
      features: ['Romantic ambience & fairy lights', 'Panoramic illuminated views', 'Attentive hospitality'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6D3C]">
              Experiences & Celebrations
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B1412] font-normal leading-tight">
            Make Every Occasion <br />
            <span className="italic font-script text-4xl sm:text-6xl text-[#C5A059] lowercase">
              truly
            </span>{' '}
            Special.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#685E57] max-w-xl mx-auto font-light">
            Whether marked on your calendar or an impromptu evening with someone dear, discover a setting made for memories.
          </p>
        </div>

        {/* 3 Occasions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {occasions.map((occ) => {
            const Icon = occ.icon;
            return (
              <div
                key={occ.title}
                className="group bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#EDE5D8] shadow-sm hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image with Tag */}
                  <div className="relative h-64 overflow-hidden bg-[#EDE5D8]">
                    <img
                      src={occ.image}
                      alt={occ.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#1B1412]/80 backdrop-blur-sm text-[10px] uppercase tracking-wider font-medium text-[#DFCAAB] border border-[#C5A059]/30">
                        {occ.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1B1412] shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#FAF7F2] font-medium leading-snug">
                        {occ.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 space-y-4">
                    <p className="text-xs sm:text-sm text-[#54433B] font-light leading-relaxed">
                      {occ.description}
                    </p>

                    <div className="pt-2 border-t border-[#EDE5D8] space-y-2">
                      {occ.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#685E57]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-7 pb-6 pt-2">
                  <button
                    onClick={onPlanVisit}
                    className="w-full py-2.5 rounded-full border border-[#C5A059] text-xs font-semibold uppercase tracking-wider text-[#1B1412] hover:bg-[#C5A059] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-sm"
                  >
                    <span>Plan Your Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-[#8E6D3C] font-semibold mb-3">
            Walk-ins Welcome • Reservations Recommended for Rooftop Tables
          </p>
          <a
            href="tel:+919828065533"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1B1412] hover:text-[#C5A059] underline underline-offset-4 decoration-[#C5A059] transition-colors"
          >
            <span>Questions or special requests? Speak directly with our team at +91 9828065533</span>
          </a>
        </div>

      </div>
    </section>
  );
};
