import React, { useState } from 'react';
import { X, Phone, CheckCircle, Send, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '18:00',
    area: 'Rooftop Terrace (Hawa Mahal View)',
    occasion: 'Casual Dining',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059] flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-[#1B1412] text-white p-6 sm:p-7 relative border-b border-[#C5A059]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#DFCAAB] text-[10px] uppercase tracking-widest font-medium mb-2">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Table Booking</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-normal">
            Reserve Your Experience
          </h3>
          <p className="text-xs text-[#EDE5D8]/80 font-light mt-1">
            Opposite Hawa Mahal • The Tattoo Cafe & Lounge, Jaipur
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#1B1412]">
                Reservation Request Sent!
              </h4>
              <p className="text-xs sm:text-sm text-[#54433B] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{form.name}</strong>. We have received your booking request for{' '}
                <strong>{form.guests} Guests</strong> on{' '}
                <strong>{form.date || 'your selected date'}</strong> at{' '}
                <strong>{form.time}</strong> ({form.area}). Our reservations team will confirm with you via call at{' '}
                <strong>{form.phone}</strong> shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+919828065533"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#C5A059] text-[#1B1412] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#A6823B] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 border border-[#EDE5D8] text-[#3D302A] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black/5"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="10:00">10:00 AM (Brunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="16:00">04:00 PM (Coffee/Tea)</option>
                    <option value="18:00">06:00 PM (Sunset Views)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="21:00">09:00 PM (Night Ambiance)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                    Party Size
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="3-4">3 - 4 Persons</option>
                    <option value="5-6">5 - 6 Persons</option>
                    <option value="7+">7+ Persons</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                    Seating Area
                  </label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Rooftop Terrace (Hawa Mahal View)">Rooftop Terrace (Hawa Mahal View)</option>
                    <option value="Indoor Lounge (Air Conditioned)">Indoor Lounge (Air Conditioned)</option>
                    <option value="Any Available Best Table">Any Available Best Table</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                    Occasion
                  </label>
                  <select
                    value={form.occasion}
                    onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Romantic Date Night">Romantic Date Night</option>
                    <option value="Family Gathering">Family Gathering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#685E57] font-medium mb-1">
                  Special Notes or Dietary Requests
                </label>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Need pure Jain preparations, anniversary flowers, preferred seating..."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#EDE5D8] text-xs text-[#1B1412] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1B1412] hover:bg-[#3D302A] text-[#DFCAAB] text-xs font-semibold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-luxury-hover"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Confirm Table Request</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#8E6D3C] italic">
                * We do not charge booking fees. Table reservations held for 15 minutes past scheduled time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
