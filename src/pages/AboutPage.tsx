import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { SITE_IMAGES } from '../data/siteImages';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* SECTION 1: WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-white/10 pb-24">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500 block mb-2">
              01 // IDENTITY
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-[0.03em] font-light">
              WHO WE ARE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            <p>
              Born from a collaboration between Spanish medical device engineers, dermatological chemists, and practicing aesthetic physicians, Eastetic was established to satisfy a single imperative: bringing uncompromising scientific integrity to aesthetic medicine.
            </p>
            <p>
              We operate exclusively in the medical aesthetic sector. We do not manufacture mass cosmetics or consumer retail products. Our focus is concentrated entirely on specialized clinical instruments, medical implants, biomimetic mesotherapy, and post-procedure dermaceuticals designed for the physician’s syringe.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 font-technical text-xs">
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase tracking-[0.2em] mb-1">
                  HEADQUARTERS
                </span>
                <span className="text-white">Barcelona, Spain</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase tracking-[0.2em] mb-1">
                  SECTOR
                </span>
                <span className="text-white">Medical Aesthetic</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase tracking-[0.2em] mb-1">
                  TARGET
                </span>
                <span className="text-white">Physicians & Clinics Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: OUR PHILOSOPHY (Visual + Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-white/10 pb-24">
          <div className="lg:col-span-6 relative h-[440px] sm:h-[520px] border border-white/15 bg-neutral-950 overflow-hidden">
            <img
              src={SITE_IMAGES.about.philosophy}
              alt="Eastetic Touch — Your Skin Brand Authority"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm px-3.5 py-1.5 border border-white/20 text-xs font-technical tracking-[0.25em] text-white">
              AUTHENTIC BRAND IDENTITY
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500 block">
              02 // CORE ETHOS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-[0.03em] font-light">
              OUR PHILOSOPHY
            </h2>

            <p className="font-editorial text-2xl text-neutral-200 italic font-light">
              &ldquo;Where Science, Safety and Beauty Come Together.&rdquo;
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <p>
                We believe that true aesthetic refinement is never an artificial distortion, but the restoration of healthy cellular architecture. When dermal tissues are supported with biochemically compatible scaffolds and revitalizing nutrients, results appear completely natural and anatomically harmonious.
              </p>
              <p>
                Safety is not an afterthought or risk-mitigation checklist—it is the foundational constraint that governs every formulation from molecular synthesis to vial packaging.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: EUROPEAN MANUFACTURING (With Laboratory Showcase) */}
        <div id="manufacturing" className="space-y-12 border-b border-white/10 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500 block mb-2">
                03 // PRODUCTION INFRASTRUCTURE
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-[0.03em] font-light">
                EUROPEAN MANUFACTURING
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md">
              Located in the scientific biotechnology cluster of Barcelona, Spain, operating in full compliance with European Medical Device Directives.
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] border border-white/15 bg-neutral-950 overflow-hidden">
            <img
              src={SITE_IMAGES.home.cleanroomLab}
              alt="Barcelona Cleanroom Facility"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-130 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full border-t border-white/20 pt-6 text-xs font-technical">
                <div>
                  <span className="text-neutral-400 block text-[9px] uppercase tracking-[0.2em] mb-1">
                    CLEANROOM CLASSIFICATION
                  </span>
                  <span className="text-white text-sm">ISO Class 5 / Class 7 Cleanrooms</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[9px] uppercase tracking-[0.2em] mb-1">
                    STERILIZATION DIRECTIVE
                  </span>
                  <span className="text-white text-sm">Ph. Eur. 5.1.1 Steam Autoclave</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[9px] uppercase tracking-[0.2em] mb-1">
                    QUALITY SYSTEM
                  </span>
                  <span className="text-white text-sm">EN ISO 13485:2016 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: SCIENCE & INNOVATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-white/10 pb-24">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500 block mb-2">
              04 // RESEARCH MATRIX
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-[0.03em] font-light">
              SCIENCE & INNOVATION
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            <p>
              Our internal scientific board directs research initiatives in bio-polymer stabilization, controlled-release peptide complexes, and sub-micron chemical peeling formulations.
            </p>
            <p>
              By utilizing pharmaceutical-grade raw materials certified with European Pharmacopoeia (Ph. Eur.) monographs, Eastetic eliminates variability across production lots. Every batch of hyaluronic acid, polynucleotides, and growth factors has verified molecular weight dispersity and sub-threshold endotoxin levels.
            </p>
          </div>
        </div>

        {/* SECTION 5: PROFESSIONAL COMMITMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-12">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500 block mb-2">
              05 // COLLABORATION
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-[0.03em] font-light">
              PROFESSIONAL COMMITMENT
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              We stand beside the medical aesthetic practitioner. In addition to delivering superior clinical devices, Eastetic provides in-depth technical documentation, injection anatomy training modules, and dedicated physician support across global distributor networks.
            </p>

            <div className="p-8 border border-white/20 bg-neutral-950 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-xs font-technical uppercase tracking-[0.25em] text-white">
                  DIRECT CLINICAL ENGAGEMENT
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Connect with our medical affairs directorate to arrange hands-on cadaver lab workshops, masterclasses, or discuss clinic supply allocations.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Connect With Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
