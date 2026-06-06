// ─── Site & Navigation ───────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  facebookUrl?: string;
  messengerUrl?: string;
  whatsappUrl?: string;
  businessHours: BusinessHours[];
  navLinks: NavLink[];
}

// ─── Services ────────────────────────────────────────────────────────────────

export type ServiceCategory =
  | 'document'
  | 'photo'
  | 'finishing';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  /** Icon name — maps to a local SVG or icon component */
  icon: string;
  category: ServiceCategory;
  /** Optional short pricing note shown on the card */
  priceNote?: string;
  /** Route this service card links to */
  href: string;
}

// ─── Photo Packages ──────────────────────────────────────────────────────────

export interface PhotoPackage {
  id: string;
  name: string;
  category: string;
  /** Human-readable print sizes included, e.g. ["3R (3.5×5\")", "4R (4×6\")"] */
  sizes: string[];
  /** Starting price in local currency */
  priceFrom?: number;
  /** Additional pricing context, e.g. "per piece" or "per set of 6" */
  pricingUnit?: string;
  /** Path relative to /public, e.g. /images/photo-packages/wallet.jpg */
  imagePreview: string;
  /** Alt text for the preview image */
  imageAlt: string;
  description: string;
  /** Optional highlight badge text, e.g. "Popular" or "Best Value" */
  badge?: string;
  /** Extra details on what this package is good for */
  remarks?: string;
  /** Whether this package is currently featured/promoted */
  featured?: boolean;
}

// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface SEOProps {
  title: string;
  description: string;
  /** Canonical URL — defaults to current page URL if omitted */
  canonicalUrl?: string;
  /** Open Graph image path, relative to /public */
  ogImage?: string;
  /** Override og:type, defaults to 'website' */
  ogType?: string;
  /** Prevent search engine indexing */
  noIndex?: boolean;
}
