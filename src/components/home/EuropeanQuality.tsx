import React from 'react';
import { motion } from 'motion/react';
import { SITE_IMAGES } from '../../data/siteImages';

export const EuropeanQuality: React.FC = () => {
  return (
    <section
      id="european-quality"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-24 sm:py-32 lg:py-44 px-6 sm:px-8 lg:px-12 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Technical Metadata */}
        <div className="flex items-center justify-between pb-8 border-b border-black/10 text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500">
          <span>PROVENANCE // 06</span>
          <span>BARCELONA PHARMACEUTICAL HUB</span>
          <span>EU COMPLIANT</span>
        </div>

        {/* Section Headline */}
        <div className="mt-16 max-w-4xl space-y-6">
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.03em] leading-[0.95]">
            MADE IN SPAIN.
            <span className="block italic text-neutral-600 font-normal">
              ENGINEERED FOR TRUST.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-800 font-light leading-relaxed max-w-2xl">
            All Eastetic products are developed and manufactured in Spain following strict European quality, safety and consistency standards.
          </p>
        </div>

        {/* 3 Minimal Columns: Pure Typography, Lines, and Layout (No generic icons) */}
        <div className="mt-20 pt-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: QUALITY */}
          <div className="space-y-6">
            <div className="border-b border-black pb-4">
              <span className="text-[10px] font-technical tracking-[0.3em] text-neutral-400 uppercase block mb-2">
                CRITERIA 01
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.05em] font-normal">
                QUALITY
              </h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-technical uppercase tracking-[0.15em] text-neutral-900 font-medium">
                Strict manufacturing standards
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Operating under ISO 13485 medical device quality systems and European GMP guidelines. Cleanroom Class A/B facilities with real-time microbiological air monitoring.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-[10px] font-technical text-neutral-400 tracking-[0.2em] uppercase">
              SPEC // ISO 13485:2016 CERTIFIED
            </div>
          </div>

          {/* Column 2: PURITY */}
          <div className="space-y-6">
            <div className="border-b border-black pb-4">
              <span className="text-[10px] font-technical tracking-[0.3em] text-neutral-400 uppercase block mb-2">
                CRITERIA 02
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.05em] font-normal">
                PURITY
              </h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-technical uppercase tracking-[0.15em] text-neutral-900 font-medium">
                Controlled formulation and production
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Ultra-pure raw polymers bio-fermented without animal-derived substrates. Endotoxin levels maintained below 0.02 EU/ml to prevent delayed immune reactions.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-[10px] font-technical text-neutral-400 tracking-[0.2em] uppercase">
              SPEC // ENDOTOXIN &lt; 0.02 EU/ML
            </div>
          </div>

          {/* Column 3: CONSISTENCY */}
          <div className="space-y-6">
            <div className="border-b border-black pb-4">
              <span className="text-[10px] font-technical tracking-[0.3em] text-neutral-400 uppercase block mb-2">
                CRITERIA 03
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.05em] font-normal">
                CONSISTENCY
              </h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-technical uppercase tracking-[0.15em] text-neutral-900 font-medium">
                Reliable professional performance
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Uniform molecular distribution in every lot. Validated extrusion force curve ensures the practitioner experiences identical tactile feedback with every treatment.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-[10px] font-technical text-neutral-400 tracking-[0.2em] uppercase">
              SPEC // REPRODUCIBLE RHEOLOGY
            </div>
          </div>
        </div>

        {/* Cleanroom Factory Panorama Strip */}
        <div className="mt-20 border border-black/15 bg-black p-4 text-white">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={SITE_IMAGES.home.cleanroomLab}
              alt="Eastetic manufacturing plant cleanroom in Barcelona, Spain"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-[10px] font-technical tracking-[0.3em] uppercase text-neutral-300">
                PHARMACEUTICAL PRODUCTION UNIT — BARCELONA // CATALONIA // SPAIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
