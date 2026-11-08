import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Search, FileText, Check, Shield, ChevronRight } from 'lucide-react';
import { PRODUCTS, ProductCategoryType, Product } from '../data/products';
import { useRouter } from '../context/RouterContext';
import { usePriceRequests } from '../context/PriceRequestContext';
import { CategoryHero } from '../components/products/CategoryHero';
import { ProductImage } from '../components/common/ProductImage';

const MAIN_CATEGORIES: ('All' | ProductCategoryType)[] = [
  'All',
  'Biostimulators',
  'Cosmetics',
  'Growth Factors',
  'Mesotherapy',
  'Fillers',
  'Botulinum',
  'Peeling',
];

export const ProductsPage: React.FC = () => {
  const { navigate } = useRouter();
  const { openQuoteForProduct } = usePriceRequests();

  const [selectedCategory, setSelectedCategory] = useState<'All' | ProductCategoryType>(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      let cat = searchParams.get('category');
      if (cat === 'Cosmetic Products') cat = 'Cosmetics';
      if (cat === 'Biotechnology') cat = 'Growth Factors';
      if (cat === 'Filler Products') cat = 'Fillers';
      if (cat && MAIN_CATEGORIES.includes(cat as ProductCategoryType)) {
        return cat as ProductCategoryType;
      }
    }
    return 'All';
  });
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Horizontal scroll container & button refs for responsive category scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  // Check scroll boundary to show subtle visual indicator on mobile
  const updateScrollIndicators = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  // Smoothly scroll active category into view inside the filter container only (no window movement)
  const scrollToActiveCategory = useCallback((cat: string, behavior: ScrollBehavior = 'smooth') => {
    const container = scrollContainerRef.current;
    const button = categoryButtonRefs.current[cat];
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Check if category button is out of comfortable view inside container
    const isComfortablyVisible =
      buttonRect.left >= containerRect.left + 24 &&
      buttonRect.right <= containerRect.right - 24;

    if (!isComfortablyVisible) {
      const targetLeft =
        button.offsetLeft - container.clientWidth / 2 + button.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior,
      });
    }
  }, []);

  // Update indicators on mount, resize, or category change
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollIndicators();
    scrollToActiveCategory(selectedCategory);

    const handleScroll = () => updateScrollIndicators();
    const handleResize = () => {
      updateScrollIndicators();
      scrollToActiveCategory(selectedCategory, 'auto');
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedCategory, updateScrollIndicators, scrollToActiveCategory]);

  // Get available subcategories for current category
  const availableSubcategories = React.useMemo(() => {
    if (selectedCategory === 'All') return [];
    const prods = PRODUCTS.filter((p) => p.category === selectedCategory);
    const subcats = Array.from(new Set(prods.map((p) => p.subcategory)));
    return ['All', ...subcats];
  }, [selectedCategory]);

  // Handle category change
  const handleCategorySelect = (cat: 'All' | ProductCategoryType) => {
    setSelectedCategory(cat);
    setSelectedSubcategory('All');
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSubcategory =
      selectedSubcategory === 'All' || product.subcategory === selectedSubcategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-20 sm:pt-24 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Dynamic Category Hero Video */}
        <CategoryHero category={selectedCategory} />

        {/* Category Filter & Search Section */}
        <section
          aria-label="Product Categories & Search"
          className="border border-white/15 bg-neutral-950/70 p-4 sm:p-5 backdrop-blur-md space-y-4"
        >
          {/* Main Category Filter Row */}
          <div className="relative">
            {/* Left fade indicator on mobile when scrolled */}
            {canScrollLeft && (
              <div
                className="pointer-events-none md:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10"
                aria-hidden="true"
              />
            )}

            {/* Scrollable Container on Mobile, Wrap on Tablet, Balanced Row on Desktop */}
            <div
              ref={scrollContainerRef}
              role="tablist"
              aria-label="Product Categories"
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth md:flex-wrap lg:flex-nowrap lg:justify-start"
            >
              {MAIN_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    ref={(el) => {
                      categoryButtonRefs.current[cat] = el;
                    }}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategorySelect(cat)}
                    className={`whitespace-nowrap px-4 sm:px-4.5 min-h-[44px] sm:min-h-[40px] flex items-center justify-center text-xs uppercase font-technical tracking-[0.18em] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black shrink-0 ${
                      isActive
                        ? 'bg-white text-black font-semibold border border-white shadow-sm'
                        : 'border border-white/15 text-neutral-400 hover:border-white/40 hover:text-white bg-neutral-900/60 hover:bg-neutral-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right fade indicator on mobile to hint more categories are available */}
            {canScrollRight && (
              <div
                className="pointer-events-none md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-950 via-neutral-950/90 to-transparent flex items-center justify-end pr-1 text-white/60 z-10"
                aria-hidden="true"
              >
                <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
              </div>
            )}
          </div>

          {/* Subcategory Filter Row (Visually Secondary, below main categories) */}
          {availableSubcategories.length > 1 && (
            <div className="pt-3 border-t border-white/10 flex items-center space-x-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-technical uppercase tracking-[0.2em] text-neutral-400 shrink-0 mr-1">
                SUB-LINE //
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {availableSubcategories.map((subcat) => {
                  const isActive = selectedSubcategory === subcat;
                  return (
                    <button
                      key={subcat}
                      onClick={() => setSelectedSubcategory(subcat)}
                      className={`whitespace-nowrap px-3 py-1.5 min-h-[32px] text-[11px] font-technical uppercase tracking-[0.14em] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                        isActive
                          ? 'bg-neutral-800 text-white border border-white/40 font-medium'
                          : 'border border-white/10 text-neutral-400 hover:border-white/25 hover:text-white bg-transparent'
                      }`}
                    >
                      {subcat}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Utility Row: Formulation Count & Instant Search */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-[10px] sm:text-[11px] font-technical uppercase tracking-[0.2em] text-neutral-400 flex items-center space-x-2">
              <span className="text-neutral-500">CATALOG STATUS:</span>
              <span className="text-white font-medium">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'FORMULATION' : 'FORMULATIONS'} IDENTIFIED
              </span>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search formula or product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 h-10 bg-neutral-900/80 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white tracking-wider transition-colors font-technical"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs p-1 cursor-pointer transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Editorial Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group border border-white/15 bg-[#080808] p-6 flex flex-col justify-between hover:border-white/60 transition-all duration-300 relative"
              >
                {/* Top Card Badges */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[9px] font-technical uppercase tracking-[0.25em] text-neutral-400">
                    <span className="text-white font-medium">{product.category}</span>
                    <span className="font-mono text-neutral-400">{product.subcategory}</span>
                  </div>

                  {/* Product Photography Container */}
                  <div
                    onClick={() => navigate(`/products/${product.slug}`)}
                    className="relative h-64 sm:h-72 w-full my-5 overflow-hidden bg-[#020202] border border-white/10 cursor-pointer flex items-center justify-center p-4"
                  >
                    <ProductImage
                      src={product.primaryImage || product.images[0]}
                      alt={product.altText || product.name}
                      containerClassName="relative w-full h-full flex items-center justify-center"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Multi-image indicator badge */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm border border-white/20 px-2 py-0.5 text-[8px] font-technical uppercase tracking-[0.2em] text-neutral-300">
                        {product.images.length} VIEWS
                      </div>
                    )}

                    <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-white/15 px-2 py-0.5 text-[8px] font-technical uppercase tracking-[0.2em] text-neutral-400">
                      {product.format}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <h2
                      onClick={() => navigate(`/products/${product.slug}`)}
                      className="font-editorial text-2xl uppercase tracking-[0.04em] text-white hover:text-neutral-300 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h2>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions: Request Price + View Dossier */}
                <div className="pt-5 mt-5 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => openQuoteForProduct(product.name)}
                      className="flex-1 py-3 px-4 bg-white text-black text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer mr-2"
                    >
                      <span>Request Price</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => navigate(`/products/${product.slug}`)}
                      className="p-3 border border-white/20 text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer"
                      title="View Scientific Monograph"
                      aria-label="View Scientific Monograph"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-technical tracking-[0.15em] text-neutral-400">
                    <span>ORIGIN: BARCELONA, ES</span>
                    <span className="text-neutral-300">CLINICAL SUPPLY ONLY</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-24 border border-white/15 bg-neutral-950 p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 border border-white/20 px-3.5 py-1 text-xs font-technical uppercase tracking-[0.25em] text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>
                {['Fillers'].includes(selectedCategory)
                  ? 'PORTFOLIO DEVELOPMENT // IN PIPELINE'
                  : 'CATALOG SEARCH RESULT'}
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-[0.03em] font-light text-white">
              {['Fillers'].includes(selectedCategory)
                ? 'Coming Soon'
                : 'No Formulations Found'}
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-lg mx-auto">
              {['Fillers'].includes(selectedCategory)
                ? `Formulations for ${selectedCategory} are currently in active European clinical qualification, batch release testing, and regulatory conformity. Verified clinical monographs will be released upon completion.`
                : `No clinical formulations matching "${searchQuery}" were identified in the verified active catalog.`}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedSubcategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 border border-white/30 text-white text-xs font-technical uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
              >
                View All Available Formulations
              </button>
            </div>
          </div>
        )}

        {/* Regulatory Strip */}
        <div className="p-8 border border-white/15 bg-neutral-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-neutral-400 font-technical">
          <div className="space-y-1">
            <span className="text-white uppercase tracking-[0.2em] block">
              PROFESSIONAL RESTRICTION & PHARMACOVIGILANCE
            </span>
            <span className="font-light">
              Eastetic formulations are supplied exclusively to certified medical physicians, aesthetic clinics, and registered distribution partners under European conformity standards.
            </span>
          </div>

          <div className="shrink-0 flex items-center space-x-4 text-[10px] tracking-[0.2em] text-white">
            <span className="border border-white/20 px-3 py-1.5">MDR 2017/745</span>
            <span className="border border-white/20 px-3 py-1.5">ISO 13485:2016</span>
          </div>
        </div>
      </div>
    </div>
  );
};
