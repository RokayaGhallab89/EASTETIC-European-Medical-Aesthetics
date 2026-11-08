import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProfessionalEcosystemProps {
  onOpenProfessionalPortal: () => void;
  onOpenDistributorPortal: () => void;
}

export const ProfessionalEcosystem: React.FC<ProfessionalEcosystemProps> = ({
  onOpenProfessionalPortal,
  onOpenDistributorPortal,
}) => {
  return (
    <section
      id="professional-ecosystem"
      className="relative w-full bg-[#000000] text-white py-24 sm:py-32 lg:py-44 px-6 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl space-y-6">
          <span className="text-[10px] font-technical uppercase tracking-[0.35em] text-neutral-400 block">
            NETWORK // 07
          </span>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.03em] leading-[0.95]">
            CREATED FOR
            <span className="block italic text-neutral-400 font-normal">
              PROFESSIONAL HANDS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Eastetic works with dermatologists, aesthetic professionals, clinics and distributors to advance modern medical aesthetics.
          </p>
        </div>

        {/* Two Elegant Large Editorial Hover Paths (No standard cards) */}
        <div className="mt-20 border-t border-b border-white/20 divide-y divide-white/20">
          {/* Path 1: FOR PROFESSIONALS */}
          <div
            onClick={onOpenProfessionalPortal}
            className="group cursor-pointer py-12 lg:py-16 px-4 sm:px-8 hover:bg-white text-white hover:text-black transition-all duration-500 relative"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenProfessionalPortal();
            }}
            aria-label="Access professional aesthetic portal"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] font-technical tracking-[0.3em] uppercase opacity-70">
                    PATHWAY // 01
                  </span>
                  <span className="text-[10px] font-technical tracking-[0.3em] uppercase opacity-70">
                    CLINICAL DIRECT
                  </span>
                </div>
                <h3 className="font-editorial text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.04em] font-light">
                  FOR PROFESSIONALS
                </h3>
                <p className="text-xs sm:text-sm font-light opacity-80 max-w-xl leading-relaxed">
                  Request accredited clinical evaluations, physician injection monographs, batch certificates of analysis, and starter practitioner kits.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase tracking-[0.25em] font-medium hidden sm:inline-block">
                  Explore professional solutions
                </span>
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Path 2: FOR DISTRIBUTORS */}
          <div
            onClick={onOpenDistributorPortal}
            className="group cursor-pointer py-12 lg:py-16 px-4 sm:px-8 hover:bg-white text-white hover:text-black transition-all duration-500 relative"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenDistributorPortal();
            }}
            aria-label="Access global distribution partnership portal"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] font-technical tracking-[0.3em] uppercase opacity-70">
                    PATHWAY // 02
                  </span>
                  <span className="text-[10px] font-technical tracking-[0.3em] uppercase opacity-70">
                    GLOBAL EXCLUSIVITY
                  </span>
                </div>
                <h3 className="font-editorial text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.04em] font-light">
                  FOR DISTRIBUTORS
                </h3>
                <p className="text-xs sm:text-sm font-light opacity-80 max-w-xl leading-relaxed">
                  Establish exclusive regional or national commercial distribution for Eastetic certified Medical Device Class III product lines across Europe, MENA, and LATAM.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase tracking-[0.25em] font-medium hidden sm:inline-block">
                  Partner with Eastetic
                </span>
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] font-technical tracking-[0.25em] text-neutral-400 uppercase gap-4">
          <span>MEDICAL PRACTITIONER LICENSE VERIFICATION MANDATORY</span>
          <span>SPAIN MANUFACTURING FACILITY DISPATCH</span>
        </div>
      </div>
    </section>
  );
};
