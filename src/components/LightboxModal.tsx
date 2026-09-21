import React from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onOpenBookingModal: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onOpenBookingModal,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#111319] border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[70vh] md:max-h-[80vh] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />

          {/* Navigation Controls */}
          {items.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-xs text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-[#111319] border-t md:border-t-0 md:border-l border-amber-500/20">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-3 py-1 rounded-full font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 className="text-xl font-bold font-cinzel text-slate-100">
              {item.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>ICON MARQUEE • North Karachi</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 mt-6 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="w-full bg-gold-gradient text-black font-semibold text-xs py-3 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-amber-500/30 transition-all"
            >
              Book Similar Event Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
