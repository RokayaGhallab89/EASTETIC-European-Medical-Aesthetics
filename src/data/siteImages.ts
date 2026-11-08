// Centralized site-wide image asset directory for EASTETIC
// All assets reside under /public/images/ with clean, lowercase, space-free names

export const SITE_IMAGES = {
  brand: {
    logo: '/images/brand/logo.svg',
    hero: '/images/brand/brand-hero.png',
  },
  home: {
    heroPoster: '/images/home/hero-poster.jpg',
    cleanroomLab: '/images/home/cleanroom-lab.jpg',
    packagingBox: '/images/home/packaging-box.jpg',
    productSyringe: '/images/home/product-syringe.jpg',
    scienceMolecule: '/images/home/science-molecule.jpg',
    scienceDroplet: '/images/home/science-droplet.jpg',
    biostimulatorsPoster: '/images/home/biostimulators-poster.jpg',
  },
  about: {
    philosophy: '/images/about/brand-philosophy.png',
  },
  fallback: {
    // Elegant luxury monochrome SVG placeholder
    productPlaceholder:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none"><rect width="600" height="600" fill="%230F0F0F"/><rect x="150" y="150" width="300" height="300" stroke="%23333333" stroke-width="1.5"/><line x1="150" y1="150" x2="450" y2="450" stroke="%23222222" stroke-width="1"/><line x1="450" y1="150" x2="150" y2="450" stroke="%23222222" stroke-width="1"/><text x="300" y="305" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="%23777777" letter-spacing="3" text-anchor="middle">EASTETIC CLINICAL</text></svg>',
  },
} as const;

export type SiteImages = typeof SITE_IMAGES;
