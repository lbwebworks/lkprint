import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  businessName: 'LK Print',
  tagline: 'Quality Printing, Fast & Affordable',
  phone: '02-8275-6237',          // ← update with real number
  email: 'leeandkishprintingservice@gmail.com',          // ← update with real email
  address: 'U4 B19 L16 Gardenia St., South Greenheights, Barangay Putatan, Muntinlupa City, Metro Manila',
  googleMapsUrl: 'https://maps.app.goo.gl/xnpoizQANe8TzDT5A',
  googleMapsEmbedUrl: 'https://www.google.com/maps/place/L%26K+Printing+Service/@14.392577,121.0321997,66m/data=!3m1!1e3!4m6!3m5!1s0x3397d10044910575:0xc5b91deeacdd6375!8m2!3d14.392577!4d121.0324975!16s%2Fg%2F11x_lhx1jg?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
  facebookUrl: 'https://www.facebook.com/lkprintservices',
  messengerUrl: 'https://m.me/lkprintservices',
  whatsappUrl: undefined,
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
  ],
};
