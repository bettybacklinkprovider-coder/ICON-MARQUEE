import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MapPin, Sparkles, MessageCircle, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (initialEventType?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-slate-400 border-t border-amber-900/30 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Gold Ambient Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-gradient p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#08090b] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="text-xl font-bold font-cinzel gold-gradient-text tracking-wide">
                ICON MARQUEE
              </span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Karachi's premier luxury wedding and event venue in North Karachi. Creating unforgettable celebrations with breathtaking décor, royal banquet setups, and warm hospitality.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center space-x-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold px-4 py-2 rounded-lg transition-all"
              >
                <span>Inquire Event Availability</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-cinzel">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-amber-500/60">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-amber-500/60">›</span>
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-amber-500/60">›</span>
                  <span>Events & Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery-contact')}
                  className="hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-amber-500/60">›</span>
                  <span>Gallery & Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Event Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-cinzel">
              Specialized Celebrations
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Wedding & Barat Celebrations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Walima Receptions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Mayun, Dholk & Engagements</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Corporate Galas & Dinners</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Milestone Family Parties</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-cinzel">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-amber-300 font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs px-3 py-2 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-2 rounded-md transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-amber-950/50 hover:bg-amber-900/50 border border-amber-500/30 text-amber-300 text-xs px-3 py-2 rounded-md transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Map</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© 2026 ICON MARQUEE. All Rights Reserved.</p>
          <p className="flex items-center space-x-1 text-slate-300">
            <span>Crafted for memorable celebrations in North Karachi</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500/30 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
