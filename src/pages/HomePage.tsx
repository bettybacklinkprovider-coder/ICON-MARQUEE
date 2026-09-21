import React from 'react';
import { PageId, GalleryItem } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, VENUE_HIGHLIGHTS, GALLERY_ITEMS } from '../data/content';
import { Phone, MapPin, Calendar, ArrowRight, Sparkles, CheckCircle2, Maximize, Armchair, Flower2, ShieldCheck, ExternalLink, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (initialEventType?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onOpenLightbox,
}) => {
  // Gallery preview strictly 6 to 8 realistic marquee/event photographs
  const galleryPreviewItems = GALLERY_ITEMS.slice(0, 8);

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Maximize':
        return <Maximize className="w-6 h-6 text-amber-400" />;
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-amber-400" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0b0d]">
        {/* Background Image with Elegant Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
            alt="ICON MARQUEE Luxury Wedding Venue"
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
          />
          {/* Dual Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/75 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e]/90 via-transparent to-[#0b0c0e]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/60 border border-amber-500/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-widest mb-6 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Luxury Event & Wedding Venue in Karachi</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-cinzel text-white leading-tight tracking-tight mb-6">
            ICON MARQUEE — <span className="gold-gradient-text block sm:inline mt-1 sm:mt-0">Where Every Celebration Becomes Memorable</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed mb-10 text-shadow">
            A stylish and elegant event venue in North Karachi, perfect for weddings, receptions, engagements, family celebrations, and special occasions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gold-gradient text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>

            <button
              onClick={() => onNavigate('gallery-contact')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-800/90 text-amber-300 border border-amber-500/40 backdrop-blur-md font-semibold text-sm px-8 py-4 rounded-xl transition-all"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Phone Display */}
          <div className="inline-flex items-center space-x-2 bg-black/70 backdrop-blur-sm border border-amber-500/20 px-5 py-2.5 rounded-full text-sm text-slate-200">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Direct Call / Booking Inquiry:</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-bold text-amber-300 hover:text-amber-200 underline decoration-amber-500/50"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2 — WELCOME TO ICON MARQUEE */}
      <section className="py-20 bg-[#0d0f14] border-t border-b border-amber-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
                <span className="w-8 h-px bg-amber-400" />
                <span>Welcome to ICON MARQUEE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100">
                A Modern Event Venue Designed for <span className="gold-gradient-text">Unforgettable Moments</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                ICON MARQUEE stands as a premier destination in North Karachi for families and organizations seeking an upscale, sophisticated setting. Our venue combines aesthetic grandeur with practical event management to ensure your celebrations run smoothly from setup to grand exit.
              </p>

              {/* Highlight Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Elegant venue atmosphere',
                  'Spacious event setup',
                  'Beautiful décor',
                  'Comfortable guest experience',
                  'Professional event environment',
                  'Uninterrupted generator power'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-[#13161f] border border-slate-800 p-3.5 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Learn More About Our Venue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Venue Showcase Image Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden gold-border-glow shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                  alt="ICON MARQUEE Banquet Interior"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-amber-500/30">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest font-cinzel">North Karachi Location</p>
                  <p className="text-sm text-slate-200 mt-0.5">Spacious, climate-controlled, and beautifully lit hall</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — EVENTS & SERVICES */}
      <section className="py-20 bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
              Tailored Event Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100">
              Events & <span className="gold-gradient-text">Services</span>
            </h2>
            <p className="text-slate-400 text-sm">
              From grand royal Barat ceremonies to intimate engagement gatherings and corporate functions, ICON MARQUEE provides custom venue arrangements for every occasion.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-[#12141c] border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="w-full flex items-center justify-center space-x-1.5 bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/30 text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Inquire {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-400 hover:text-amber-300 underline decoration-amber-500/40"
            >
              <span>Explore All Events & Services Details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4 — VENUE HIGHLIGHTS */}
      <section className="py-20 bg-[#0e1017] border-t border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
              Why Hosts Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100">
              Venue <span className="gold-gradient-text">Highlights</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Equipped with every amenity needed to host a seamlessly executed event in Karachi.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENUE_HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="bg-[#141722] border border-slate-800/80 hover:border-amber-500/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getHighlightIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold font-cinzel text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — GALLERY PREVIEW */}
      <section className="py-20 bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
                Visual Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100 mt-1">
                Gallery <span className="gold-gradient-text">Preview</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('gallery-contact')}
              className="inline-flex items-center space-x-2 bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/30 text-xs font-bold px-5 py-3 rounded-xl transition-all"
            >
              <span>View Full Gallery (16+ Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 to 8 Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryPreviewItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-amber-500/50 transition-all shadow-md"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 p-2">
                  <span className="inline-block text-[10px] font-semibold text-amber-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-amber-500/30 mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-100 line-clamp-1 font-cinzel">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('gallery-contact')}
              className="inline-flex items-center space-x-2 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6 — CONTACT / BOOKING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e1017] to-[#07080a] border-t border-amber-900/30 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-4 py-1.5 rounded-full font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservations Open for Upcoming Season</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-slate-100">
            Planning Your Next Event?
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Make your special occasion memorable at ICON MARQUEE. Contact us today to discuss your event and venue requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 text-sm font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Get Directions</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center space-x-2 bg-gold-gradient text-black font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/35 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Direct Address Display */}
          <div className="pt-6 border-t border-slate-800/80 max-w-xl mx-auto text-xs text-slate-400 space-y-1">
            <p className="font-semibold text-slate-300">{BUSINESS_INFO.name}</p>
            <p>{BUSINESS_INFO.address}</p>
          </div>

        </div>
      </section>

    </div>
  );
};
