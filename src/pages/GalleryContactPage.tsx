import React, { useState } from 'react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/content';
import { GalleryItem, PageId } from '../types';
import { Phone, MapPin, Mail, Send, MessageCircle, Navigation, Sparkles, CheckCircle2, Maximize2, Calendar, User, Clock } from 'lucide-react';

interface GalleryContactPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenBookingModal: (initialEventType?: string) => void;
}

export const GalleryContactPage: React.FC<GalleryContactPageProps> = ({
  onOpenLightbox,
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding / Barat',
    preferredDate: '',
    message: '',
  });

  const categories = [
    'All',
    'Wedding Décor',
    'Stage Decoration',
    'Reception Setup',
    'Seating Arrangement',
    'Lighting',
    'Event Hall',
    'Floral Decoration',
    'Special Events',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello ICON MARQUEE, I am reaching out from your website:\n\n*Name:* ${contactForm.name || 'Not provided'}\n*Phone:* ${contactForm.phone || 'Not provided'}\n*Event Type:* ${contactForm.eventType}\n*Preferred Date:* ${contactForm.preferredDate || 'TBD'}\n*Message:* ${contactForm.message || 'None'}`;
    return `https://wa.me/923103075978?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#0b0c0e] min-h-screen text-slate-100 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-[#0d0f15] border-b border-amber-900/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
            alt="Gallery and Contact Header"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
            Photo Showcase & Direct Inquiry
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-cinzel text-slate-100">
            Gallery & <span className="gold-gradient-text">Contact Us</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Explore our real event photography, royal stage arrangements, and reach out to book your celebration.
          </p>
        </div>
      </section>

      {/* SECTION 1: PHOTO GALLERY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
            16+ High-Resolution Event Photographs
          </span>
          <h2 className="text-3xl font-bold font-cinzel text-slate-100">
            Event <span className="gold-gradient-text">Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Filter by setup type and click any image for full-screen lightbox viewing.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gold-gradient text-black shadow-md font-bold'
                    : 'bg-[#141620] text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-amber-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-[#12141c] border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Lightbox Zoom Indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-2 rounded-full border border-amber-500/40 text-amber-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="inline-block text-[10px] font-semibold text-amber-400 uppercase tracking-widest bg-black/70 px-2.5 py-0.5 rounded border border-amber-500/30">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold font-cinzel text-slate-100 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 2: CONTACT US */}
      <section className="py-20 bg-[#0e1017] border-t border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
              Get In Touch With Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100">
              Contact <span className="gold-gradient-text">ICON MARQUEE</span>
            </h2>
            <p className="text-slate-400 text-sm">
              We are delighted to assist with date reservations, venue visits, and customized event quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information & Action Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Business Info Box */}
              <div className="bg-[#141622] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold font-cinzel gold-gradient-text">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    North Karachi Event Venue
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-slate-200">Address:</span>
                      <span>{BUSINESS_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="block font-semibold text-slate-200">Phone:</span>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-300 font-bold hover:underline">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-slate-200">Hours:</span>
                      <span className="text-xs">{BUSINESS_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center justify-center space-x-1.5 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 text-amber-300 hover:text-black text-xs font-bold py-3 rounded-xl transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 text-emerald-300 text-xs font-bold py-3 rounded-xl transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-3 rounded-xl transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              {/* Quick Note */}
              <div className="p-4 bg-[#12141c] border border-slate-800 rounded-xl text-xs text-slate-400 flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Appointments available for in-person venue tours and hall measurements.</span>
              </div>

            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#141622] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              
              {!formSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-4">
                    <h3 className="text-xl font-bold font-cinzel text-slate-100">
                      Send an Event Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill in your preferred event details to check hall availability.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shahzaib Khan"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#1b1e2a] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
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
                          placeholder="e.g. +92 310 1234567"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full bg-[#1b1e2a] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
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
                          placeholder="e.g. name@domain.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-[#1b1e2a] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
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
                        value={contactForm.eventType}
                        onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}
                        className="w-full bg-[#1b1e2a] border border-slate-800 rounded-xl py-2.5 px-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Wedding / Barat">Wedding / Barat</option>
                        <option value="Walima Reception">Walima Reception</option>
                        <option value="Engagement / Mayun">Engagement / Mayun</option>
                        <option value="Family Event">Family Gathering</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Special Occasion">Special Occasion</option>
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
                          value={contactForm.preferredDate}
                          onChange={(e) => setContactForm({ ...contactForm, preferredDate: e.target.value })}
                          className="w-full bg-[#1b1e2a] border border-slate-800 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                      Message / Special Venue Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please mention guest count, seating preferences, or catering questions..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-[#1b1e2a] border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <a
                      href={constructWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-emerald-900/80 border border-emerald-500/40 hover:bg-emerald-800 text-emerald-200 text-xs font-bold px-5 py-3.5 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-cinzel text-amber-300">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for contacting <strong>ICON MARQUEE</strong>. Our event team will review your requested date and contact you at <strong className="text-amber-300">{contactForm.phone}</strong> promptly.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="border border-slate-700 hover:border-slate-500 text-slate-300 text-xs px-5 py-2.5 rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
