import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { SITE_IMAGES } from '../data/siteImages';

export const SciencePage: React.FC = () => {
  const { navigate } = useRouter();

  const chapters = [
    {
      num: '01',
      title: 'Scientific Innovation',
      subtitle: 'Molecular Targeting & Biocellular Affinity',
      description:
        'Modern aesthetic dermatology requires formulations that interact directly with cellular receptor pathways rather than functioning merely as temporary inert physical space-occupiers. At Eastetic, every project begins by mapping cellular mechanisms: targeting A2A purinergic receptors with polymerized polynucleotides, calibrating high-cohesion uncrosslinked chains for immediate fibroblast activation, and designing synergistic peptide clusters.',
      quote:
        'We design molecules to communicate with human tissue, activating native regenerative cascades rather than triggering chronic foreign-body resistance.',
      image: SITE_IMAGES.home.scienceMolecule,
      specs: [
        { label: 'Receptor Target', value: 'A2A Purinergic & CD44' },
        { label: 'Collagen Synthesis', value: 'Type I & Type III Neogenesis' },
        { label: 'Biocompatibility', value: 'ISO 10993 Comprehensive Tier 1' },
      ],
    },
    {
      num: '02',
      title: 'Advanced Formulation',
      subtitle: 'Rheological Engineering & Kinetic Stability',
      description:
        'Viscoelastic predictability is paramount in clinical aesthetic medicine. Our research laboratory in Spain designs proprietary cross-linking densities, controlling elastic modulus (G-prime), viscous modulus (G-double-prime), and Tan Delta with mathematical precision. This delivers uniform extrusion forces through ultra-thin needles and prevents gel displacement under dynamic mimetic muscle tension.',
      quote:
        'Rheological balance is what differentiates an artificial implant from an organic, indistinguishable anatomical correction.',
      image: SITE_IMAGES.home.scienceDroplet,
      specs: [
        { label: 'Cross-Linking Agent', value: 'Purified BDDE (< 0.2 ppm residual)' },
        { label: 'Extrusion Smoothness', value: '12 – 15 N Uniform Calibrated Force' },
        { label: 'Osmolality & pH', value: '300 mOsm/kg // pH 7.20 Isotonic' },
      ],
    },
    {
      num: '03',
      title: 'European Manufacturing',
      subtitle: 'Class ISO 5 Cleanrooms & Ph. Eur. Directives',
      description:
        'All Eastetic sterile solutions and Class III medical devices are compounded, sterile-filtered, and terminally processed in our state-of-the-art pharmaceutical facility in Barcelona, Spain. Our environment operates strictly in compliance with EU Medical Device Regulation (MDR) 2017/745, maintaining ISO 13485 medical device quality systems.',
      quote:
        'European manufacturing isn’t a marketing badge—it is a continuous legal and chemical discipline of zero-compromise purity.',
      image: SITE_IMAGES.home.cleanroomLab,
      specs: [
        { label: 'Cleanroom Standard', value: 'ISO Class 5 (Grade A Laminar Flow)' },
        { label: 'Regulatory Framework', value: 'EU MDR 2017/745 / ISO 13485' },
        { label: 'Facility Geography', value: 'Barcelona, Catalonia, Spain' },
      ],
    },
    {
      num: '04',
      title: 'Quality Control',
      subtitle: 'Sub-Threshold Endotoxin & Lot Chromatographic Purity',
      description:
        'Every single production batch undergoes multiple redundant quarantine testing phases: Kinetic Turbidimetric LAL assays verifying endotoxin levels below 0.02 EU/ml (ten times stricter than international pharmacopoeia standards), high-performance liquid chromatography (HPLC) for monomer purity, and multi-day sterile incubation.',
      quote:
        'Patient safety begins with what is excluded: zero free cross-linkers, minimal endotoxins, and non-detectable bioburden.',
      image: SITE_IMAGES.home.heroPoster,
      specs: [
        { label: 'Endotoxin Assay', value: '< 0.02 EU/ml (Ph. Eur. 2.6.14)' },
        { label: 'Bioburden Level', value: 'Zero Colony Forming Units (Sterility Ph. Eur. 2.6.1)' },
        { label: 'Batch Release', value: '100% Release Certificate of Analysis (CoA)' },
      ],
    },
    {
      num: '05',
      title: 'Professional Performance',
      subtitle: 'Predictable In-Clinic Outcomes for Practitioners',
      description:
        'Ultimately, clinical aesthetics is judged in the practitioner’s hands. Our syringes feature ergonomic finger flanges, low extrusion resistance, and crystal-clear volume graduation to allow doctors absolute control during micro-droplet placement. Formulations integrate seamlessly into surrounding soft tissue, eliminating delayed inflammatory nodules.',
      quote:
        'Empowering the physician with reliable, predictable tools to perform art backed by undeniable science.',
      image: '/images/products/rivajet/detail-01.png',
      specs: [
        { label: 'Target Audience', value: 'Dermatologists, Plastic Surgeons, MDs' },
        { label: 'Clinical Predictability', value: 'Standardized Tissue Diffusion Matrix' },
        { label: 'Education Support', value: 'Continuous Physician Injection Protocols' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* Immersive Scroll-Driven Storytelling Chapters */}
        <div className="space-y-28 sm:space-y-36">
          {chapters.map((chap, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={chap.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Composition (Span 6) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative w-full h-[380px] sm:h-[480px] border border-white/15 bg-neutral-950 overflow-hidden group">
                    <img
                      src={chap.image}
                      alt={chap.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale contrast-130 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-white/20 text-[10px] font-technical tracking-[0.25em] text-white">
                      PILLAR // {chap.num}
                    </div>
                  </div>
                </div>

                {/* Editorial Narrative Text (Span 6) */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500 block">
                      CHAPTER {chap.num} // {chap.subtitle}
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-[0.03em] font-light">
                      {chap.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {chap.description}
                  </p>

                  <div className="border-l-2 border-white/30 pl-4 py-1">
                    <p className="text-xs sm:text-sm font-editorial italic text-neutral-300">
                      {chap.quote}
                    </p>
                  </div>

                  {/* Technical Specifications Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    {chap.specs.map((s, i) => (
                      <div key={i} className="p-3 border border-white/10 bg-neutral-950">
                        <span className="text-[9px] font-technical uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                          {s.label}
                        </span>
                        <span className="text-xs text-white font-mono block">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scientific Closing Call to Action */}
        <div className="pt-20 border-t border-white/10 text-center space-y-8 max-w-3xl mx-auto">
          <span className="text-[10px] font-technical uppercase tracking-[0.35em] text-neutral-400 block">
            CLINICAL DOSSIER ARCHIVE
          </span>
          <h3 className="font-editorial text-4xl sm:text-6xl uppercase tracking-[0.04em] font-light">
            EVIDENCE-BASED AESTHETICS
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            Access our complete technical monographs, rheological viscosity graphs, and tissue integration documentation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-4 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors flex items-center space-x-2"
            >
              <span>Explore Formulations</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border border-white/30 text-white text-xs font-technical uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-colors"
            >
              Request Scientific Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
