import React from 'react';
import { motion } from 'motion/react';

export const BrandManifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-24 sm:py-32 lg:py-44 px-6 sm:px-8 lg:px-12 border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Technical Section Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-black/10 text-[10px] tracking-[0.3em] font-technical uppercase text-neutral-500">
          <span>SECTION // 02</span>
          <span>THE EASTETIC MANIFESTO</span>
          <span>EST. SPAIN</span>
        </div>

        {/* Asymmetric Large Statement Grid */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Giant Editorial Headline */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-[0.02em] font-light leading-[0.95] uppercase"
            >
              BEYOND BEAUTY.
              <span className="block italic font-normal text-neutral-700">
                BUILT ON SCIENCE.
              </span>
            </motion.h2>
          </div>

          {/* Right: Core Narrative Statement */}
          <div className="lg:col-span-4 lg:pt-4 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-neutral-800 font-light leading-relaxed"
            >
              Eastetic combines scientific innovation, European manufacturing and medical expertise to create high-performance solutions for aesthetic professionals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-neutral-600 leading-relaxed font-light"
            >
              Dedicated solely to dermatologists, aesthetic doctors, and accredited clinics, our clinical formulas replace transient cosmetic trends with pure biomimetic architecture and verifiable cellular efficacy.
            </motion.p>
          </div>
        </div>

        {/* Technical Three-Pillar Grid: 01 SCIENCE, 02 PRECISION, 03 PERFORMANCE */}
        <div className="mt-20 lg:mt-32 pt-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 01 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 border border-black/10 hover:border-black transition-colors duration-300"
          >
            <span className="text-xs font-technical tracking-[0.25em] text-neutral-500 uppercase block mb-6">
              01 — SCIENCE
            </span>
            <h3 className="font-editorial text-2xl uppercase tracking-[0.05em] font-normal mb-3">
              Molecular Integrity
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Formulated with ultra-purified bio-compatible macromolecules, recombinant growth factors, and stabilized polynucleotides with verified cellular affinity.
            </p>
          </motion.div>

          {/* Pillar 02 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 border border-black/10 hover:border-black transition-colors duration-300"
          >
            <span className="text-xs font-technical tracking-[0.25em] text-neutral-500 uppercase block mb-6">
              02 — PRECISION
            </span>
            <h3 className="font-editorial text-2xl uppercase tracking-[0.05em] font-normal mb-3">
              Rheological Control
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Every syringe and vial is calibrated for exact extrusion force, stable elasticity (G-prime), and controlled biocompatibility to eliminate clinical migration.
            </p>
          </motion.div>

          {/* Pillar 03 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 border border-black/10 hover:border-black transition-colors duration-300"
          >
            <span className="text-xs font-technical tracking-[0.25em] text-neutral-500 uppercase block mb-6">
              03 — PERFORMANCE
            </span>
            <h3 className="font-editorial text-2xl uppercase tracking-[0.05em] font-normal mb-3">
              Predictable Outcome
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Engineered exclusively for clinical practice, ensuring reproducible tissue integration, safety profiles, and harmonious anatomical refinement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
