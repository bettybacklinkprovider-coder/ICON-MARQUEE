import { GalleryItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'ICON MARQUEE',
  tagline: 'Where Every Celebration Becomes Memorable',
  subheading: 'A stylish and elegant event venue in North Karachi, perfect for weddings, receptions, engagements, family celebrations, and special occasions.',
  phone: '+92 310 3075978',
  phoneRaw: '+923103075978',
  address: 'R-238, Sector 11-C-3, Sector 11 B North Karachi, Karachi, Pakistan',
  area: 'North Karachi, Karachi',
  whatsappUrl: 'https://wa.me/923103075978?text=Hello%20ICON%20MARQUEE%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=R-238+Sector+11-C-3+Sector+11+B+North+Karachi+Karachi+Pakistan',
  email: 'info@iconmarquee.com',
  workingHours: 'Monday - Sunday: 10:00 AM - 11:00 PM (Appointments & Event Tours)'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'Wedding Events',
    shortDesc: 'Elegant venue setup for beautiful wedding celebrations.',
    fullDesc: 'Transform your special day into a royal fairy tale. Our spacious marquee features grand floral stages, high ceilings with crystal chandelier lighting, luxury bridal lounges, and customized dining setups designed for unforgettable Barat and Nikkah ceremonies.',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    features: ['Grand Stage Decoration', 'Bridal Suite & Lounge', 'Royal Entrance Gateway', 'Custom Floral Themes', 'High Capacity Dining Setup']
  },
  {
    id: 'receptions',
    title: 'Reception Events',
    shortDesc: 'A sophisticated environment for memorable receptions.',
    fullDesc: 'Host an exquisite Walima reception in a modern, climate-controlled marquee environment. Complete with gold chiavari seating, ambient mood lighting, audio-visual systems, and seamless guest service.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    features: ['Sophisticated Ambient Lighting', 'Luxury Guest Seating', 'Catering & Buffet Layout', 'Stage & Sound Setup', 'Valet & Parking Guidance']
  },
  {
    id: 'engagements',
    title: 'Engagements & Family Events',
    shortDesc: 'Comfortable and stylish space for intimate and family celebrations.',
    fullDesc: 'Ideal for Dholkis, Mayuns, Engagements, Anniversaries, and Birthday galas. Flexible partition options allow cozy intimate setups or grand family gatherings with colorful stage backdrops.',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    features: ['Theme-Based Backdrop Setup', 'Intimate Seating Arrangements', 'Customized Musical & Stage Area', 'Special Cake & Mocktail Counters', 'Dedicated Hospitality Attendants']
  },
  {
    id: 'corporate',
    title: 'Corporate & Special Events',
    shortDesc: 'Professional venue arrangements for corporate gatherings and special occasions.',
    fullDesc: 'From annual corporate dinners, product launches, and award galas to community celebrations. Equipped with crisp acoustics, HD presentation screens, standby generators, and executive seating.',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    features: ['Executive Banquet Seating', 'Acoustic & Microphone Systems', 'Uninterrupted Power Backup', 'Flexible Floor Plans', 'Professional Event Coordination']
  },
  {
    id: 'family-gatherings',
    title: 'Family Gatherings & Milestones',
    shortDesc: 'Suitable space for birthdays, anniversaries, and family reunions.',
    fullDesc: 'Celebrate your family milestones in a joyful, welcoming atmosphere. We offer custom thematic decor for kids and adults alike, plus spacious dance floors and banquet halls.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Milestone Themes', 'Photobooth Corners', 'Generous Floor Space', 'Family Dining Layouts']
  },
  {
    id: 'special-occasions',
    title: 'Special Occasions & Galas',
    shortDesc: 'Flexible event arrangements tailored for unique thematic celebrations.',
    fullDesc: 'Whatever your vision, ICON MARQUEE provides a blank luxury canvas backed by professional lighting designers, decorators, and venue coordinators.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Thematic Decor', 'Intelligent Spotlights', 'Flexible Partitioning', 'VIP Lounge Areas']
  }
];

export const VENUE_HIGHLIGHTS = [
  {
    title: 'Elegant Interior',
    desc: 'Luxurious draped ceilings, sparkling crystal chandeliers, and grand carpeted aisles.',
    icon: 'Sparkles'
  },
  {
    title: 'Spacious Event Area',
    desc: 'Accommodates both intimate gatherings and grand celebrations with comfortable guest flow.',
    icon: 'Maximize'
  },
  {
    title: 'Beautiful Decoration',
    desc: 'Premium floral stages, entrance archways, and customizable color palette draping.',
    icon: 'Flower2'
  },
  {
    title: 'Comfortable Seating',
    desc: 'Ergonomic plush banquet chairs, gold chiavari seats, and spacious round table arrangements.',
    icon: 'Armchair'
  },
  {
    title: 'Professional Event Setup',
    desc: 'State-of-the-art sound systems, ambient lighting, climate control, and standby generator.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Convenient Karachi Location',
    desc: 'Easily accessible in Sector 11 North Karachi with convenient parking accessibility.',
    icon: 'MapPin'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Wedding Stage',
    category: 'Stage Decoration',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Grand royal wedding stage decoration featuring ivory draping, golden sofa seating, and warm floral backlight.'
  },
  {
    id: 'gal-2',
    title: 'Grand Banquet Hall Overview',
    category: 'Event Hall',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious marquee interior illuminated by crystal chandeliers and elegant round dinner tables.'
  },
  {
    id: 'gal-3',
    title: 'Walima Reception Setup',
    category: 'Reception Setup',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    description: 'Sophisticated reception arrangement with gold chiavari chairs, satin tablecloths, and glass centerpieces.'
  },
  {
    id: 'gal-4',
    title: 'Luxurious Floral Archway',
    category: 'Floral Decoration',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'Fresh rose and jasmine floral entrance arch welcome pathway for bride and groom.'
  },
  {
    id: 'gal-5',
    title: 'Chandelier Mood Lighting',
    category: 'Lighting',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm golden fairy lights and crystal chandeliers creating a cozy, opulent atmosphere.'
  },
  {
    id: 'gal-6',
    title: 'VIP Lounge & Seating',
    category: 'Seating Arrangement',
    imageUrl: 'https://images.unsplash.com/photo-1510076803484-60144f808770?auto=format&fit=crop&w=1200&q=80',
    description: 'Plush velvet sofa seating for family elders and VIP guests near the main stage.'
  },
  {
    id: 'gal-7',
    title: 'Barat Floral Pathway',
    category: 'Wedding Décor',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'Red carpet aisle adorned with fresh flower pedestals and fairy light arches.'
  },
  {
    id: 'gal-8',
    title: 'Corporate Dinner Setup',
    category: 'Special Events',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean executive banquet setup for annual corporate galas and award nights.'
  },
  {
    id: 'gal-9',
    title: 'Custom Mayun & Dholk Decor',
    category: 'Stage Decoration',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Vibrant marigold yellow and emerald green stage setup for pre-wedding celebrations.'
  },
  {
    id: 'gal-10',
    title: 'Buffet & Catering Display',
    category: 'Event Hall',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    description: 'Organized food counter lines with stainless steel chaffing dishes and warm food lamps.'
  },
  {
    id: 'gal-11',
    title: 'Golden Table Centerpiece',
    category: 'Floral Decoration',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Tall golden candelabra centerpiece topped with fresh white hydrangeas and greenery.'
  },
  {
    id: 'gal-12',
    title: 'Bridal Entrance Gateway',
    category: 'Wedding Décor',
    imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    description: 'Ornamental doorway featuring romantic drapes and floral garland columns.'
  },
  {
    id: 'gal-13',
    title: 'Round Table Dinner Layout',
    category: 'Reception Setup',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    description: 'Perfect symmetry in guest table placement ensuring comfortable movement.'
  },
  {
    id: 'gal-14',
    title: 'Spotlight & Stage Effects',
    category: 'Lighting',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern stage lighting with fog effects for cake cutting and couple entrance.'
  },
  {
    id: 'gal-15',
    title: 'Executive Meeting & Gala',
    category: 'Special Events',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious hall configuration equipped with projection screens and speaker lectern.'
  },
  {
    id: 'gal-16',
    title: 'Luxury Lounge Sofa Set',
    category: 'Seating Arrangement',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium leather and velvet couch arrangements for maximum guest comfort.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "ICON MARQUEE made my sister's Barat truly unforgettable! The decor was stunning, stage lighting was perfect, and the staff managed our 600+ guests with remarkable ease.",
    author: "Muhammad Hamza",
    event: "Barat Ceremony",
    rating: 5
  },
  {
    quote: "Best venue in North Karachi! Extremely spacious, neat, with powerful air conditioning and continuous generator backup. Highly recommended for Walima receptions.",
    author: "Syeda Sarah Ahmed",
    event: "Walima Reception",
    rating: 5
  },
  {
    quote: "We hosted our corporate annual dinner at ICON MARQUEE. The audio system, seating layout, and overall coordination were flawless. Will book again!",
    author: "Tariq Mahmood",
    event: "Corporate Gala",
    rating: 5
  }
];
