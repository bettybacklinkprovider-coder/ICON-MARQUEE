export type PageId = 'home' | 'about' | 'services' | 'gallery-contact';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wedding Décor' | 'Stage Decoration' | 'Reception Setup' | 'Seating Arrangement' | 'Lighting' | 'Event Hall' | 'Floral Decoration' | 'Special Events';
  imageUrl: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  features: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
