import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  businessName: 'LK Print',
  tagline: 'Quality Printing, Fast & Affordable',
  phone: '+63 900 000 0000',          // ← update with real number
  email: 'leeandkishprintingservice@gmail.com',          // ← update with real email
  address: '123 Sample Street, Barangay Example, City, Province',
  googleMapsUrl: 'https://maps.google.com',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=&output=embed',
  facebookUrl: 'https://www.facebook.com/lkprintservices',
  messengerUrl: 'https://m.me/lkprint',
  whatsappUrl: 'https://wa.me/639000000000',
  businessHours: [
    { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
    { day: 'Saturday',        hours: '8:00 AM – 5:00 PM' },
    { day: 'Sunday',          hours: 'Closed' },
  ],
  navLinks: [
    { label: 'Home',                  href: '/lkprint/' },
    { label: 'Document',              href: '/lkprint/document/' },
    { label: 'Photo',                 href: '/lkprint/photo/' },
    { label: 'Lamination',            href: '/lkprint/lamination/' },
    { label: 'Others',                 href: '/lkprint/others/' },
    { label: 'Contact',               href: '/lkprint/contact/' },
  ],
};
