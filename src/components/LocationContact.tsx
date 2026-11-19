import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle, Send, Calendar } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    seating: 'Rooftop Terrace (Hawa Mahal View)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setIsSubmitted(true);
  };

  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=The+Tattoo+Cafe+and+Lounge%2C+Hawa+Mahal%2C+Jaipur%2C+Rajasthan';

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6D3C]">
              Location & Contact
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B1412] font-normal leading-tight">
            Find Us in the Heart of <br />
            <span className="italic font-script text-4xl sm:text-6xl text-[#C5A059] lowercase">
              Jaipur.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#685E57] max-w-xl mx-auto font-light">
            Located right opposite the historic Hawa Mahal, offering breezy rooftop dining and fine lounge hospitality.
          </p>
        </div>

        {/* Location & Reservation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info & Action Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FCFAF6] rounded-3xl p-8 border border-[#EDE5D8] shadow-sm space-y-8">
              
              <div>
                <h3 className="font-serif text-2xl text-[#1B1412] font-medium mb-1">
                  The Tattoo Cafe & Lounge
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#8E6D3C] font-semibold">
                  Fine Dine & Rooftop Experience
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#8E6D3C] shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1B1412]">Our Address</h4>
                  <p className="text-xs sm:text-sm text-[#54433B] font-light leading-relaxed mt-1">
                    3rd Floor, 30, Opposite Hawa Mahal, <br />
                    Hawa Mahal Rd, Jaipur, Rajasthan 302002, India.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#8E6D3C] shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1B1412]">Contact Number</h4>
                  <a
                    href="tel:+919828065533"
                    className="text-sm sm:text-base font-medium text-[#1B1412] hover:text-[#C5A059] transition-colors mt-0.5 block"
                  >
                    +91 9828065533
                  </a>
                  <span className="text-[11px] text-[#8E6D3C]">Tap to call for direct inquiries</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#8E6D3C] shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1B1412]">Opening Hours</h4>
                  <p className="text-xs sm:text-sm text-[#54433B] font-light leading-relaxed mt-1">
                    Open Every Day: 9:00 AM – 11:00 PM <br />
                    Breakfast • Lunch • Sunset • Dinner
                  </p>
                </div>
              </div>

              {/* Primary Call & Directions Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919828065533"
                  className="flex-1 py-3 px-5 rounded-full bg-[#1B1412] hover:bg-[#3D302A] text-[#DFCAAB] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-full bg-[#C5A059] hover:bg-[#A6823B] text-[#0F0B09] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Landmark Tip Badge */}
            <div className="p-4 rounded-2xl bg-[#EDE5D8]/70 border border-[#C5A059]/30 flex items-center gap-3">
              <span className="text-xl">🏰</span>
              <p className="text-xs text-[#54433B] font-light leading-relaxed">
                <strong>Easy Landmark:</strong> Directly facing the grand façade of Hawa Mahal. Take the staircase to the 3rd floor for our reception and rooftop lounge.
              </p>
            </div>
          </div>

          {/* Right: Embedded Map & Table Reservation Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Responsive Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#EDE5D8] shadow-md bg-white h-72 sm:h-80 relative">
              <iframe
                title="The Tattoo Cafe & Lounge Location Map"
                src="https://maps.google.com/maps?q=The%20Tattoo%20Cafe%20and%20Lounge%2C%20Hawa%20Mahal%20Rd%2C%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.02] brightness-[0.98]"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C5A059]/40 text-[11px] font-medium text-[#1B1412] shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Opposite Hawa Mahal, Jaipur</span>
              </div>
            </div>

            {/* Quick Online Reservation / Table Inquiry Form */}
            <div className="bg-[#FCFAF6] rounded-3xl p-8 border border-[#EDE5D8] shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EDE5D8]">
                <div>
                  <h3 className="font-serif text-2xl text-[#1B1412] font-medium">
                    Table Reservation & Inquiries
                  </h3>
                  <p className="text-xs text-[#685E57] mt-0.5">
                    Reserve ahead for sunset tables and special occasions.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1B1412]">Reservation Request Received!</h4>
                  <p className="text-xs text-[#54433B] max-w-md mx-auto">
                    Thank you, <strong>{formState.name}</strong>. Our team will verify table availability for {formState.guests} guest(s) on {formState.date || 'today'} at {formState.time} and confirm via phone call at {formState.phone}.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-full border border-[#C5A059] text-xs font-semibold text-[#1B1412] hover:bg-[#C5A059]/10"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 9828065533"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                        Time
                      </label>
                      <select
                        value={formState.time}
                        onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM (Tea/Coffee)</option>
                        <option value="18:00">06:00 PM (Sunset View)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="20:00">08:00 PM</option>
                        <option value="21:00">09:00 PM (Night View)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                        Guests
                      </label>
                      <select
                        value={formState.guests}
                        onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3-4 Persons</option>
                        <option value="5">5-6 Persons</option>
                        <option value="7+">7+ Persons</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                      Seating Preference
                    </label>
                    <select
                      value={formState.seating}
                      onChange={(e) => setFormState({ ...formState, seating: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Rooftop Terrace (Hawa Mahal View)">Rooftop Terrace (Hawa Mahal View)</option>
                      <option value="Indoor Fine Dine Lounge">Indoor Fine Dine Lounge</option>
                      <option value="First Available Table">First Available Table</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                      Special Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Birthday celebration, Jain dietary preferences, window seat..."
                      className="w-full px-4 py-2 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#1B1412] hover:bg-[#3D302A] text-[#DFCAAB] text-xs font-semibold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-luxury-hover"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Submit Reservation Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
