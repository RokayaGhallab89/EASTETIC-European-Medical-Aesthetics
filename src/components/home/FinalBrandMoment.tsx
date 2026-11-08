import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_IMAGES } from '../../data/siteImages';

interface FinalBrandMomentProps {
  onDiscoverEastetic: () => void;
}

export const FinalBrandMoment: React.FC<FinalBrandMomentProps> = ({ onDiscoverEastetic }) => {
  return (
    <section
      id="brand-closing"
      className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#000000] text-white py-28 sm:py-36 lg:py-48 px-6 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Moving Liquid Macro Silhouette Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.img
          src={SITE_IMAGES.home.scienceMolecule}
          alt="Eastetic liquid macro background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale contrast-150 brightness-[0.22] scale-105"
          animate={{
            scale: [1.02, 1.07, 1.02],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="absolute inset-0 bg-radial-at-c from-black/40 via-black/80 to-black" />
      </div>

      {/* Editorial Closing Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        <div className="inline-flex items-center space-x-3 border border-white/20 px-4 py-1.5 bg-black/60 backdrop-blur-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs font-technical uppercase tracking-[0.3em] text-neutral-300">
            EASTETIC // TOUCH — YOUR SKIN
          </span>
        </div>

        {/* Large Typography using approved positioning */}
        <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-light tracking-[0.04em] leading-[0.92] text-white">
          ENGINEERED IN EUROPE.
          <span className="block italic text-neutral-400 font-normal">
            CREATED FOR MODERN
          </span>
          <span className="block">
            AESTHETIC MEDICINE.
          </span>
        </h2>

        {/* Approved slogan text */}
        <p className="font-editorial text-xl sm:text-2xl text-neutral-300 italic font-light tracking-wide max-w-xl mx-auto">
          &ldquo;Where Science, Safety and Beauty Come Together.&rdquo;
        </p>

        {/* CTA */}
        <div className="pt-4">
          <button
            onClick={onDiscoverEastetic}
            className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors duration-300 shadow-2xl cursor-pointer"
          >
            <span>Explore Product Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
