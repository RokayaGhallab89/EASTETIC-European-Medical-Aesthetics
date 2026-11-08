import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../../data/products';
import { SITE_IMAGES } from '../../data/siteImages';

interface ProductUniverseProps {
  onSelectCategory: (category: ProductCategory) => void;
  onExploreAll: () => void;
}

export const ProductUniverse: React.FC<ProductUniverseProps> = ({
  onSelectCategory,
  onExploreAll,
}) => {
  const [activeId, setActiveId] = useState<string>(PRODUCT_CATEGORIES[0].id);

  const activeCategory =
    PRODUCT_CATEGORIES.find((cat) => cat.id === activeId) || PRODUCT_CATEGORIES[0];

  return (
    <section
      id="product-universe"
      className="relative w-full bg-[#000000] text-white py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.35em] text-neutral-400 block">
              ECOSYSTEM // 03
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.03em] leading-[0.95]">
              THE EASTETIC
              <span className="block italic text-neutral-400 font-normal">
                PRODUCT UNIVERSE
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Seven specialized medical aesthetic categories engineered to address every stage of tissue regeneration, cellular signaling, and dermal barrier revitalization.
            </p>
            <button
              onClick={onExploreAll}
              className="inline-flex items-center space-x-2 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-300 transition-colors group cursor-pointer"
            >
              <span>Explore All Formulations</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Desktop Interactive Category Explorer: Typography on Left, Dynamic Macro Spec on Right */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 mt-16 items-start">
          {/* Left: Interactive Category Typographic Index */}
          <div className="lg:col-span-6 space-y-2">
            {PRODUCT_CATEGORIES.map((category, index) => {
              const isActive = category.id === activeId;
              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveId(category.id)}
                  onClick={() => onSelectCategory(category)}
                  className={`group cursor-pointer py-5 px-4 border-b border-white/10 transition-all duration-300 relative ${
                    isActive ? 'bg-white/[0.04] border-white/40 pl-6' : 'hover:pl-6'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectCategory(category);
                    }
                  }}
                  aria-label={`View ${category.name} details`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-6">
                      <span className="text-[10px] font-technical tracking-[0.25em] text-neutral-400">
                        {`0${index + 1}`}
                      </span>
                      <h3
                        className={`font-editorial text-3xl xl:text-4xl tracking-[0.03em] uppercase transition-colors duration-300 ${
                          isActive ? 'text-white font-normal' : 'text-neutral-500 font-light group-hover:text-neutral-200'
                        }`}
                      >
                        {category.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span
                        className={`text-[10px] font-technical uppercase tracking-[0.2em] transition-opacity duration-300 ${
                          isActive ? 'opacity-100 text-neutral-300' : 'opacity-0 text-transparent'
                        }`}
                      >
                        {category.code}
                      </span>
                      <div
                        className={`w-7 h-7 border rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'border-white bg-white text-black'
                            : 'border-white/20 text-neutral-500 group-hover:border-white/60 group-hover:text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Active brief description below headline */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-xs text-neutral-400 font-light leading-relaxed max-w-lg"
                    >
                      {category.headline}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Changing Product / Macro Image and Scientific Dossier Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="border border-white/20 p-8 bg-[#0a0a0a] relative overflow-hidden">
              {/* Scientific Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 text-[10px] font-technical tracking-[0.25em] text-neutral-400 uppercase">
                <span>PHARMACEUTICAL SPECIFICATION</span>
                <span className="text-white">{activeCategory.code}</span>
              </div>

              {/* Dynamic Macro Image Preview with Smooth Cross-fade */}
              <div className="mt-6 relative h-64 xl:h-72 w-full overflow-hidden border border-white/10 bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCategory.image}
                    src={activeCategory.image}
                    alt={`${activeCategory.name} macro formulation`}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = SITE_IMAGES.fallback.productPlaceholder;
                    }}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                  />
                </AnimatePresence>

                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 border border-white/20 text-[9px] font-technical uppercase tracking-[0.2em] text-white">
                  {activeCategory.specifications?.grade || 'Clinical Grade'}
                </div>
              </div>

              {/* Technical Profile Details */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-editorial text-2xl uppercase tracking-[0.05em] text-white">
                    {activeCategory.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-[10px] font-technical tracking-[0.2em] text-neutral-400 uppercase mb-1">
                      ACTIVE MOLECULES
                    </span>
                    <ul className="space-y-1 text-neutral-300 font-light text-[11px]">
                      {(activeCategory.activeMolecules || []).slice(0, 2).map((mol, idx) => (
                        <li key={idx} className="truncate">
                          • {mol}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="block text-[10px] font-technical tracking-[0.2em] text-neutral-400 uppercase mb-1">
                      CLINICAL CRITERIA
                    </span>
                    <div className="space-y-1 text-[11px] text-neutral-300 font-light">
                      <div>Sterility: {activeCategory.specifications?.sterilization || 'Ph. Eur.'}</div>
                      <div>Endotoxin: {activeCategory.specifications?.endotoxinLevel || '< 0.02 EU/ml'}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectCategory(activeCategory)}
                  className="w-full mt-4 flex items-center justify-between px-5 py-3 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <span>
                    {activeCategory.productCount === 0
                      ? 'Coming Soon // Dossier In Pipeline'
                      : 'View Clinical Monograph'}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: Elegant Stacked Cards with Horizontal Category Pills */}
        <div className="lg:hidden mt-12 space-y-6">
          {/* Quick Select Category Tabs */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`whitespace-nowrap px-4 py-2 border text-xs uppercase tracking-[0.15em] transition-all shrink-0 ${
                  activeId === cat.id
                    ? 'border-white bg-white text-black font-medium'
                    : 'border-white/20 text-neutral-400 hover:border-white/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Mobile Display */}
          <div className="border border-white/20 p-6 bg-[#0a0a0a]">
            <div className="relative h-56 w-full overflow-hidden border border-white/10 mb-6">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = SITE_IMAGES.fallback.productPlaceholder;
                }}
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 border border-white/20 text-[9px] font-technical text-white tracking-[0.2em]">
                {activeCategory.code}
              </div>
            </div>

            <span className="text-[10px] font-technical tracking-[0.25em] text-neutral-400 uppercase block mb-1">
              {activeCategory.specifications?.grade || 'Clinical Grade'}
            </span>
            <h3 className="font-editorial text-2xl uppercase tracking-[0.05em] text-white">
              {activeCategory.name}
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-2 leading-relaxed">
              {activeCategory.description}
            </p>

            <button
              onClick={() => onSelectCategory(activeCategory)}
              className="w-full mt-6 py-3.5 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] flex items-center justify-center space-x-2"
            >
              <span>Explore {activeCategory.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Explore All Products Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center space-x-3 px-8 py-4 border border-white/40 hover:border-white text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Explore All Products</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
