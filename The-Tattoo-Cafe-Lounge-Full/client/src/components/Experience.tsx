import React from 'react';
import { Sparkles, Pizza, Coffee, HeartHandshake } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      number: '01',
      title: 'A Beautiful Setting',
      description: 'Enjoy a distinctive café atmosphere in the heart of Jaipur.',
      detail: 'Opposite the magnificent Hawa Mahal with open rooftop breezes and atmospheric night lights.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '02',
      title: 'Food Worth Sharing',
      description: 'Explore delicious pizzas, pastas, platters, burgers and more.',
      detail: 'From artisanal stone-baked pizzas to genuine Pink City pure ghee thalis and Jain options.',
      icon: Pizza,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '03',
      title: 'A Place to Unwind',
      description: 'Spend quality time with friends, family and loved ones.',
      detail: 'Comfortable indoor seating and breezy outdoor terraces made for relaxed conversations.',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '04',
      title: 'Memorable Moments',
      description: 'Make birthdays, casual meetups and special occasions memorable.',
      detail: 'Whether an evening date, a joyful celebration, or quiet afternoon tea above the Pink City.',
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6D3C]">
              The Café Experience
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B1412] font-normal leading-tight">
            Four Reasons to Stay for <br />
            <span className="italic font-script text-4xl sm:text-6xl text-[#C5A059] lowercase">
              another
            </span>{' '}
            Cup.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#685E57] max-w-xl mx-auto font-light">
            Crafted for slow mornings, vibrant afternoons and unforgettable Jaipur evenings.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.number}
                className="group relative bg-[#FCFAF6] rounded-2xl p-7 border border-[#EDE5D8] shadow-sm hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Background image preview with subtle hover opacity */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                <div className="relative z-10">
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-2xl font-normal text-[#C5A059] tracking-widest">
                      {exp.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center text-[#8E6D3C] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-[#1B1412] font-medium mb-3 group-hover:text-[#8E6D3C] transition-colors">
                    {exp.title}
                  </h3>

                  {/* Core Description from prompt */}
                  <p className="text-sm font-medium text-[#3D302A] leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Context detail */}
                  <p className="text-xs text-[#685E57] font-light leading-relaxed">
                    {exp.detail}
                  </p>
                </div>

                {/* Subtle Bottom Accent Line */}
                <div className="relative z-10 mt-8 pt-4 border-t border-[#EDE5D8] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8E6D3C] font-semibold">
                  <span>The Tattoo Experience</span>
                  <span className="text-[#C5A059] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
