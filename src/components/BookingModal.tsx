import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { X, Calendar, User, Phone, Mail, Users, Sparkles, MessageCircle, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEventType = 'Wedding Events',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: initialEventType,
    eventDate: '',
    guestCount: '300-500',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello ICON MARQUEE, I would like to inquire about booking an event:\n\n*Name:* ${formData.name || 'Not specified'}\n*Phone:* ${formData.phone || 'Not specified'}\n*Event Type:* ${formData.eventType}\n*Preferred Date:* ${formData.eventDate || 'TBD'}\n*Estimated Guests:* ${formData.guestCount}\n*Details:* ${formData.message || 'None'}`;
    return `https://wa.me/923103075978?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#111319] border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 mb-3 text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-cinzel gold-gradient-text">
                Book Your Celebration
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                ICON MARQUEE • Sector 11 North Karachi
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181a22] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#181a22] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181a22] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#181a22] border border-slate-800 rounded-xl py-2.5 px-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Wedding Events">Wedding / Barat</option>
                    <option value="Reception Events">Walima Reception</option>
                    <option value="Engagements & Family Events">Engagement / Mayun / Dholk</option>
                    <option value="Corporate & Special Events">Corporate Function</option>
                    <option value="Family Gatherings">Milestone Family Party</option>
                    <option value="Special Occasions">Special Occasion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#181a22] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Estimated Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#181a22] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Under 200">Under 200 guests</option>
                    <option value="200-400">200 - 400 guests</option>
                    <option value="400-700">400 - 700 guests</option>
                    <option value="700-1000">700 - 1000+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Event Details / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your decor preferences, timing, or special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181a22] border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-black font-bold py-3 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all text-sm uppercase tracking-wider cursor-pointer"
                >
                  Submit Booking Request
                </button>

                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-emerald-900/60 border border-emerald-500/40 hover:bg-emerald-800/80 text-emerald-200 font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Instant Inquiry on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-cinzel text-amber-300">
              Booking Inquiry Received!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-300">{formData.name}</strong>. Our management team at ICON MARQUEE will contact you at <strong className="text-white">{formData.phone}</strong> shortly to discuss availability, menus, and hall setup for your event.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={constructWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
