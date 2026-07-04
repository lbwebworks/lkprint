import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  businessName: 'LK Print',
  tagline: 'Quality Printing, Fast & Affordable',
  websiteUrl: 'https://lbwebworks.github.io/lkprint/',
  phone: '02-8275-6737',          // ← update with real number
  email: 'lkprint26@gmail.com',          // ← update with real email
  address: 'U4 B19 L16 Gardenia St., South Greenheights, Barangay Putatan, Muntinlupa City, Metro Manila',
  serviceArea: 'Serving students, families, and small businesses in Putatan, Muntinlupa City, and nearby communities.',
  welcomePhrase: 'Welcome to LK Print, your neighborhood print shop for everyday documents, treasured photos, and rush printing needs.',
  primaryMarketingMessage: 'Fast turnaround, bright colors, and budget-friendly packages for school, business, and personal prints.',
  mission: 'To provide dependable, affordable, and high-quality printing services that help local customers finish their work with confidence and convenience.',
  vision: 'To be the most trusted community print shop in our area by combining friendly service, consistent quality, and practical creative solutions.',
  googleMapsUrl: 'https://maps.app.goo.gl/xnpoizQANe8TzDT5A',
  googleMapsEmbedUrl: 'https://www.google.com/maps/place/L%26K+Printing+Service/@14.392577,121.0321997,66m/data=!3m1!1e3!4m6!3m5!1s0x3397d10044910575:0xc5b91deeacdd6375!8m2!3d14.392577!4d121.0324975!16s%2Fg%2F11x_lhx1jg?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
  facebookUrl: 'https://www.facebook.com/lkprintservices',
  messengerUrl: 'https://m.me/lkprintservices',
  whatsappUrl: undefined,
  businessHours: [
    { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
    { day: 'Saturday and Sunday', hours: '8:00 AM – 5:00 PM' },
  ],
  heroStats: [
    { value: '₱2', label: 'B&W printing' },
    { value: 'Reliable', label: 'Same-day service' },
    { value: '9+', label: 'Services available' },
    { value: '6 days', label: 'Open weekly' },
  ],
  navLinks: [
    { label: 'Home',                  href: '/lkprint/' },
    { label: 'Document',              href: '/lkprint/document/' },
    { label: 'Photo',                 href: '/lkprint/photo/' },
    { label: 'Lamination',            href: '/lkprint/lamination/' },
    { label: 'Others',                 href: '/lkprint/others/' },
  ],
  developer: {
    email: 'lee.budaden@gmail.com',
    // Portfolio QR (used in tarpaulin footer) and other available QR images
    // QR used in the Website Builder promo (left-side QR in dev column)
    qrPortfolio: '/images/qr/qr_lbwebworks.png',
    // Order: Facebook, LK Print (business), Messenger — used in "Scan to connect"
    qrImages: ['/images/qr/qr_facebook.png', '/images/qr/qr_lkprint.png', '/images/qr/qr_messenger.png'],
  },
};
