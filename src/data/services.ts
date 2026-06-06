import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  // ── Document Services ──────────────────────────────────────────────────────
  {
    id: 'document-printing',
    title: 'Document Printing',
    description:
      'Black & white and colored document printing in multiple paper sizes — A4, short, and legal.',
    icon: 'printer',
    category: 'document',
    priceNote: 'From ₱2.00',
    href: '/lkprint/document/',
  },
  {
    id: 'colored-printing',
    title: 'Colored Printing',
    description:
      'Vibrant full-color prints for presentations, flyers, reports, and more.',
    icon: 'color-swatch',
    category: 'document',
    priceNote: 'From ₱5.00',
    href: '/lkprint/document/',
  },
  {
    id: 'photocopy',
    title: 'Photocopy / Xerox',
    description:
      'Fast photocopying for documents, IDs, certificates, and school forms.',
    icon: 'copy',
    category: 'document',
    priceNote: 'From ₱2.00',
    href: '/lkprint/document/',
  },
  {
    id: 'scanning',
    title: 'Document Scanning',
    description:
      'High-resolution scanning to PDF or image files with USB or email delivery.',
    icon: 'scan',
    category: 'document',
    priceNote: 'From ₱5.00',
    href: '/lkprint/document/',
  },
  {
    id: 'layout-editing',
    title: 'File Editing & Layout',
    description:
      'Document layout, photo resizing, background removal, and simple edits for print-ready files.',
    icon: 'edit',
    category: 'document',
    priceNote: 'From ₱20.00',
    href: '/lkprint/document/',
  },

  // ── Photo Services ─────────────────────────────────────────────────────────
  {
    id: 'photo-printing',
    title: 'Photo Printing',
    description:
      'Print your memories in glossy, matte, or premium finishes across wallet sizes, R-series, and large formats.',
    icon: 'photograph',
    category: 'photo',
    priceNote: 'From ₱10.00',
    href: '/lkprint/photo/',
  },
  {
    id: 'id-photo',
    title: 'ID & Passport Photos',
    description:
      'Standard and passport photo prints with glossy or matte finishes and quick turnaround.',
    icon: 'identification',
    category: 'photo',
    priceNote: 'From ₱10.00',
    href: '/lkprint/photo/',
  },
  {
    id: 'sticker-printing',
    title: 'Sticker Printing',
    description:
      'Matte, glossy, and waterproof stickers for labels, packaging, and promotional use.',
    icon: 'photograph',
    category: 'photo',
    priceNote: 'From ₱25.00',
    href: '/lkprint/photo/',
  },

  // ── Finishing Services ─────────────────────────────────────────────────────
  {
    id: 'lamination',
    title: 'Lamination',
    description:
      'Protect your documents and photos with glossy or matte lamination in a range of sizes.',
    icon: 'shield-check',
    category: 'finishing',
    priceNote: 'From ₱10.00',
    href: '/lkprint/lamination/',
  },
];

/** Convenience helpers */
export const documentServices = services.filter((s) => s.category === 'document');
export const photoServices     = services.filter((s) => s.category === 'photo');
export const finishingServices = services.filter((s) => s.category === 'finishing');
