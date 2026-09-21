import React from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/content';
import { PageId } from '../types';
import { Sparkles, CalendarCheck, CheckCircle2, Phone, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (initialEventType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  return (
    <div className="bg-[#0b0c0e] min-h-screen text-slate-100 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-[#0d0f15] border-b border-amber-900/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80"
            alt="Events & Services Header"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">
            Celebrations Tailored to Perfection
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-cinzel text-slate-100">
            Events & <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Comprehensive venue management, decor styling, banquet layouts, and luxury staging for every occasion in Karachi.
          </p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`bg-[#12141c] border border-slate-800 hover:border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-6 relative rounded-2xl overflow-hidden h-72 sm:h-96 ${isEven ? '' : 'lg:order-2'}`}>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wider">
                  ICON MARQUEE • {service.title}
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest font-cinzel">
                    Service Overview
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-slate-100">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Key Features Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 bg-[#181a24] p-2.5 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="inline-flex items-center space-x-2 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-300 hover:text-amber-200 underline decoration-amber-500/40"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Custom Packages Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#171a25] via-[#12141d] to-[#171a25] border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-4 py-1.5 rounded-full font-semibold uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Custom Event Menus & Setup</span>
          </div>

          <h2 className="text-3xl font-bold font-cinzel text-slate-100 max-w-2xl mx-auto">
            Need a Customized Catering & Decor Package?
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our event specialists at ICON MARQUEE can tailor menu items, floral stage themes, guest seating capacity, and lighting setups according to your specific family budget and requirements.
          </p>

          <div>
            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center space-x-2 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/30 transition-all cursor-pointer"
            >
              <span>Request Custom Event Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
