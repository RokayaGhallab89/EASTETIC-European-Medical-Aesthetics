import { ProductCategoryType } from './products';

export interface CategoryHeroMedia {
  /**
   * Relative path to the video file in /public/videos/
   * When new videos are uploaded, set this field for the corresponding category.
   */
  videoSrc?: string;
  /**
   * Poster image fallback for instant rendering before video loads or on mobile data saver.
   */
  posterSrc: string;
  /**
   * Descriptive label for accessibility
   */
  alt: string;
}

/**
 * Category-to-Hero-Video assignment registry.
 * Easy to update independently as new category videos are uploaded.
 */
export const CATEGORY_HERO_VIDEOS: Record<'All' | ProductCategoryType, CategoryHeroMedia> = {
  All: {
    videoSrc: '/videos/eastetic-hero.mp4',
    posterSrc: '/images/home/hero-poster.jpg',
    alt: 'Eastetic Portfolio Overview',
  },
  Biostimulators: {
    videoSrc: '/videos/biostimulators.mp4',
    posterSrc: '/images/home/biostimulators-poster.jpg',
    alt: 'Biostimulators Formulation Showcase',
  },
  Cosmetics: {
    videoSrc: undefined,
    posterSrc: '/images/products/ferulic-acid-serum/main.png',
    alt: 'Cosmetics Formulation Series',
  },
  'Growth Factors': {
    videoSrc: undefined,
    posterSrc: '/images/products/gf-bright/main.png',
    alt: 'Growth Factors & Biomimetic Signaling Peptides',
  },
  Mesotherapy: {
    videoSrc: undefined,
    posterSrc: '/images/products/acnova/main.png',
    alt: 'Mesotherapy Clinical Vials & Solutions',
  },
  Fillers: {
    videoSrc: undefined,
    posterSrc: '/images/home/product-syringe.jpg',
    alt: 'Dermal Fillers Formulation Pipeline',
  },
  Botulinum: {
    videoSrc: undefined,
    posterSrc: '/images/products/btx-lift-booster/main.jpeg',
    alt: 'Botulinum Neuromodulator Monographs',
  },
  Peeling: {
    videoSrc: undefined,
    posterSrc: '/images/products/peelora/main.jpg',
    alt: 'Chemical Peels & Stratum Corneum Protocols',
  },
};

export const DEFAULT_FALLBACK_VIDEO = '/videos/eastetic-hero.mp4';
export const DEFAULT_FALLBACK_POSTER = '/images/home/hero-poster.jpg';
