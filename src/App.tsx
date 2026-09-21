import React, { useState, useEffect } from 'react';
import { PageId, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryContactPage } from './pages/GalleryContactPage';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { GALLERY_ITEMS, BUSINESS_INFO } from './data/content';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialEvent, setBookingInitialEvent] = useState<string>('Wedding Events');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'gallery-contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll for "Scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (initialEventType?: string) => {
    if (initialEventType) {
      setBookingInitialEvent(initialEventType);
    }
    setIsBookingModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBookingModal={handleOpenBookingModal}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentPage === 'gallery-contact' && (
          <GalleryContactPage
            onOpenLightbox={(item) => setLightboxItem(item)}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
      </main>

      {/* Footer on All Pages */}
      <Footer
        onNavigate={navigateTo}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#181a24] text-amber-400 border border-amber-500/30 rounded-full shadow-lg hover:bg-amber-500 hover:text-black transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating CTA */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Inquiry</span>
        </a>
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialEventType={bookingInitialEvent}
      />

      <LightboxModal
        item={lightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxItem(null)}
        onSelect={(item) => setLightboxItem(item)}
        onOpenBookingModal={handleOpenBookingModal}
      />

    </div>
  );
}
