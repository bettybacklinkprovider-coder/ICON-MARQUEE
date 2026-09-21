import React from 'react';
import { BUSINESS_INFO, TESTIMONIALS } from '../data/content';
import { PageId } from '../types';
import { MapPin, Phone, Sparkles, CheckCircle2, Building, ShieldCheck, Heart, Navigation, Users, Calendar } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (initialEventType?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const whyChooseUsCards = [
    {
      title: 'Elegant Ambience',
      desc: 'Sophisticated draping, crystal chandelier lighting, and a romantic atmosphere designed to make every photograph look spectacular.',
      icon: 'Sparkles'
    },
    {
      title: 'Event-Friendly Space',
      desc: 'Flexible layout configurations allowing seamless partition between men and women sections or open banquet hall settings.',
      icon: 'Building'
    },
    {
      title: 'Beautiful Décor',
      desc: 'In-house and customizable floral decor, royal sofa stages, red carpet entrances, and lighting effects.',
      icon: 'Heart'
    },
    {
      title: 'Guest Comfort',
      desc: 'Climate-controlled high-capacity air conditioning, comfortable seating, clean restroom facilities, and dedicated bridal suites.',
      icon: 'Users'
    },
    {
      title: 'Professional Setup',
      desc: 'Experienced venue managers, uninterrupted heavy-duty generator backup, and high-fidelity sound systems.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Convenient Location',
      desc: 'Prime position in Sector 11-C-3, North Karachi with easy access routes and street parking guidance.',
      icon: 'MapPin'
    }
  ];

  return (
    <div className="bg-[#0b0c0e] min-h-screen text-slate-100 pb-20">
      
      {/* Page Header Banner */}
      <section className="relative py-20 bg-[#0d0f15] border-b border-amber-900/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
            alt="ICON MARQUEE Venue Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
            Discover Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-cinzel text-slate-100">
            About <span className="gold-gradient-text">ICON MARQUEE</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Crafting royal celebrations and everlasting memories in the heart of North Karachi.
          </p>
        </div>
      </section>

      {/* About ICON MARQUEE Detail */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
              <span className="w-8 h-px bg-amber-400" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100">
              Karachi's Premier Venue for <span className="gold-gradient-text">Unrivaled Excellence</span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              At <strong>ICON MARQUEE</strong>, we believe every milestone deserves a grand, memorable setting. Established in North Karachi, our venue was built to combine luxury aesthetics with flawless event logistics.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Whether you are planning an intimate engagement, a vibrant pre-wedding Mayun, a royal Barat ceremony, or an executive corporate gala, our experienced staff works closely with hosts to bring their vision to life.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-200">
              <div className="p-4 bg-[#12141c] border border-amber-500/20 rounded-xl space-y-1">
                <span className="block text-2xl font-bold text-amber-400 font-cinzel">1000+</span>
                <span className="text-slate-400">Guest Capacity</span>
              </div>
              <div className="p-4 bg-[#12141c] border border-amber-500/20 rounded-xl space-y-1">
                <span className="block text-2xl font-bold text-amber-400 font-cinzel">100%</span>
                <span className="text-slate-400">Power Backup</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden gold-border-glow shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="ICON MARQUEE Main Wedding Stage Setup"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose ICON MARQUEE? */}
      <section className="py-20 bg-[#0e1017] border-t border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
              Unmatched Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-slate-100">
              Why Choose <span className="gold-gradient-text">ICON MARQUEE?</span>
            </h2>
            <p className="text-slate-400 text-sm">
              We focus on six core pillars to deliver a stress-free event experience for hosts and guests alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#141620] border border-slate-800 p-6 rounded-2xl hover:border-amber-500/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-cinzel text-slate-100">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Venue Experience */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141c] border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
                World-Class Atmosphere
              </span>
              <h2 className="text-3xl font-bold font-cinzel text-slate-100">
                Our Venue Experience
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Step inside a world of elegance. From high-vaulted draped marquee roofs with soft ambient chandeliers to wide carpeted aisles, ICON MARQUEE offers a spacious venue designed for smooth guest movement, live photography, and grand food presentation.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Dedicated Private Lounges for Bridal Touch-ups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Spacious Buffet Lines & Catering Preparation Zones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Acoustic Control & HD Sound Engineering</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-md hover:shadow-amber-500/30 transition-all"
                >
                  Schedule a Venue Tour
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80"
                alt="Venue Experience at ICON MARQUEE"
                className="w-full h-80 object-cover rounded-2xl border border-amber-500/20"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#0a0b0e] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">Guest Feedback</span>
            <h2 className="text-2xl font-bold font-cinzel text-slate-100">What Our Hosts Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi, i) => (
              <div key={i} className="bg-[#12141c] p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {'★'.repeat(testi.rating)}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">"{testi.quote}"</p>
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <p className="font-bold text-amber-300">{testi.author}</p>
                  <p className="text-slate-500">{testi.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
            Convenient Accessibility
          </span>
          <h2 className="text-3xl font-bold font-cinzel text-slate-100">
            Our Location
          </h2>
          <p className="text-slate-400 text-sm">
            Located in Sector 11 North Karachi, easily reachable for family members and guests across the city.
          </p>
        </div>

        <div className="bg-[#12141c] border border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-start space-x-3 text-slate-200">
              <MapPin className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold font-cinzel text-slate-100">ICON MARQUEE</h3>
                <p className="text-sm text-slate-300 mt-1">{BUSINESS_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-sm text-slate-300 pt-1">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-amber-300 hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
