import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Microscope, FlaskConical, Factory, Activity } from 'lucide-react';
import { SITE_IMAGES } from '../../data/siteImages';

interface Stage {
  id: string;
  step: string;
  title: string;
  copy: string;
  scientificDetail: string;
  image: string;
  icon: React.ElementType;
}

const STAGES: Stage[] = [
  {
    id: 'research',
    step: 'STAGE // 01',
    title: 'Research',
    copy: 'Advanced active ingredients selected through scientific research.',
    scientificDetail:
      'Rigorous screening of non-animal macromolecules, biomimetic signal peptides, and ultra-purified polynucleotides evaluated for bio-tolerance, tissue affinity, and targeted receptor stimulation.',
    image: SITE_IMAGES.home.scienceMolecule,
    icon: Microscope,
  },
  {
    id: 'formulation',
    step: 'STAGE // 02',
    title: 'Formulation',
    copy: 'Precision-engineered formulations designed for consistency and performance.',
    scientificDetail:
      'Molecular weight calibration and patented cross-linking stabilization to balance cohesion, elasticity (G-prime), and smooth extrusion through micro-fine 30G–33G needles.',
    image: SITE_IMAGES.home.productSyringe,
    icon: FlaskConical,
  },
  {
    id: 'manufacturing',
    step: 'STAGE // 03',
    title: 'Manufacturing',
    copy: 'Produced in Spain under strict European quality standards.',
    scientificDetail:
      'Produced in certified cleanrooms in Barcelona, Spain under ISO 13485 and Medical Device Class III protocols. Every batch undergoes automated spectrophotometric inspection and double apyrogenicity checks.',
    image: SITE_IMAGES.home.cleanroomLab,
    icon: Factory,
  },
  {
    id: 'clinical-performance',
    step: 'STAGE // 04',
    title: 'Clinical Performance',
    copy: 'Created for predictable, natural-looking results in professional practice.',
    scientificDetail:
      'Engineered exclusively for medical aesthetic hands. Predictable volume distribution, absence of nodule formation, and natural bio-integration verified across multi-center physician observations.',
    image: SITE_IMAGES.home.heroPoster,
    icon: Activity,
  },
];

export const ScienceToResult: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section
      id="science-to-result"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-24 sm:py-32 lg:py-44 px-6 sm:px-8 lg:px-12 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-black/10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.35em] text-neutral-500 block">
              METHODOLOGY // 04
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.03em] leading-[0.95]">
              FROM MOLECULE
              <span className="block italic text-neutral-600 font-normal">
                TO MEDICAL AESTHETICS.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              A continuous European scientific continuum ensuring that laboratory discoveries translate flawlessly into safe, reproducible clinical outcomes.
            </p>
          </div>
        </div>

        {/* 4-Stage Visual Journey Interactive Explorer */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive Progress Stage List */}
          <div className="lg:col-span-5 space-y-4">
            {STAGES.map((stage, idx) => {
              const isSelected = idx === activeStageIndex;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`cursor-pointer p-6 border transition-all duration-300 relative ${
                    isSelected
                      ? 'border-black bg-neutral-50 shadow-sm'
                      : 'border-black/10 bg-transparent hover:border-black/40'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveStageIndex(idx);
                  }}
                  aria-label={`Select stage ${stage.title}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-technical tracking-[0.25em] text-neutral-500 uppercase">
                      {stage.step}
                    </span>
                    <span className={`text-xs font-technical ${isSelected ? 'text-black' : 'text-neutral-400'}`}>
                      0{idx + 1} / 04
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-[0.03em] mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                    {stage.copy}
                  </p>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-black/10 text-xs text-neutral-500 font-light leading-relaxed"
                    >
                      {stage.scientificDetail}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Abstract Scientific Macro Visual Display */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="border border-black/15 p-4 sm:p-6 bg-neutral-900 text-white relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[10px] font-technical tracking-[0.25em] text-neutral-400 uppercase">
                <span>SCIENTIFIC OBSERVATION</span>
                <span>{currentStage.step} // {currentStage.title}</span>
              </div>

              {/* Dynamic Macro Image */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden my-4 border border-white/10 bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStage.image}
                    src={currentStage.image}
                    alt={`${currentStage.title} scientific process macro image`}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
                  />
                </AnimatePresence>

                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 border border-white/20 text-[9px] font-technical tracking-[0.25em] text-neutral-300">
                  MACRO OPTICAL SCAN
                </div>
              </div>

              {/* Technical Stage Summary */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-technical tracking-[0.2em] text-neutral-400 uppercase block">
                    EUROPEAN REGULATORY STATUS
                  </span>
                  <span className="text-xs text-white font-medium">
                    Compliant with Directive 93/42/EEC & MDR (EU) 2017/745
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-neutral-400 font-technical">
                  <span>STAGE {activeStageIndex + 1} OF 4</span>
                  <button
                    onClick={() => setActiveStageIndex((prev) => (prev + 1) % STAGES.length)}
                    className="p-2 border border-white/20 hover:border-white text-white transition-colors"
                    aria-label="Next science stage"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
