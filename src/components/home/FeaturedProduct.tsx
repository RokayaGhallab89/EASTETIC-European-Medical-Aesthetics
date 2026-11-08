import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { ProductImage } from '../common/ProductImage';

interface FeaturedProductProps {
  onDiscoverProducts: () => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ onDiscoverProducts }) => {
  return (
    <section
      id="featured-science"
      className="relative w-full bg-[#000000] text-white py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Macro Product Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-white/20 bg-neutral-950 p-4 sm:p-6 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden bg-black flex items-center justify-center p-4">
                <ProductImage
                  src="/images/products/rivajet/main.png"
                  alt="Rivajet authentic clinical packshot and syringe"
                  containerClassName="relative w-full h-full flex items-center justify-center"
                  className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlaid Medical Watermark */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/20 px-3 py-1 text-[9px] font-technical tracking-[0.3em] uppercase text-neutral-300">
                  REF // EST-VOL-24
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 px-3 py-1 text-[9px] font-technical tracking-[0.3em] uppercase text-neutral-300">
                  SPANISH PHARMACEUTICAL CLEANROOM
                </div>
              </div>

              {/* Minimal product metadata table with thin white rules */}
              <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-center">
                <div className="border-r border-white/10 pr-2">
                  <span className="block text-[9px] font-technical uppercase tracking-[0.25em] text-neutral-500">
                    CLASSIFICATION
                  </span>
                  <span className="text-xs sm:text-sm font-technical text-white mt-1 block">
                    Medical Grade
                  </span>
                </div>
                <div className="border-r border-white/10 pr-2">
                  <span className="block text-[9px] font-technical uppercase tracking-[0.25em] text-neutral-500">
                    PROVENANCE
                  </span>
                  <span className="text-xs sm:text-sm font-technical text-white mt-1 block">
                    European Mfg.
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] font-technical uppercase tracking-[0.25em] text-neutral-500">
                    DISTRIBUTION
                  </span>
                  <span className="text-xs sm:text-sm font-technical text-white mt-1 block">
                    Professional Use
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-technical uppercase tracking-[0.35em] text-neutral-400 block">
                FEATURED SCIENCE // 05
              </span>

              <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.03em] leading-[0.95]">
                PRECISION IN
                <span className="block italic text-neutral-400 font-normal">
                  EVERY FORMULA.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
              A new generation of medical aesthetic solutions engineered for professional performance. Developed with calibrated viscoelastic properties to guarantee seamless tissue integration and predictable anatomical definition.
            </p>

            {/* Scientific Specification Checklist with Thin White Rules */}
            <div className="space-y-4 pt-4 border-t border-white/15">
              <div className="flex items-center justify-between py-2 border-b border-white/10 text-xs font-technical">
                <span className="text-neutral-400 uppercase tracking-[0.2em]">Cross-linking Agent Residue</span>
                <span className="text-white font-mono">&lt; 0.2 ppm (BDDE)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10 text-xs font-technical">
                <span className="text-neutral-400 uppercase tracking-[0.2em]">Bacterial Endotoxin Threshold</span>
                <span className="text-white font-mono">&lt; 0.02 EU/ml</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10 text-xs font-technical">
                <span className="text-neutral-400 uppercase tracking-[0.2em]">Osmolality & pH Calibration</span>
                <span className="text-white font-mono">300 mOsm/kg // pH 7.2</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onDiscoverProducts}
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors duration-300"
              >
                <span>Discover Products</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
