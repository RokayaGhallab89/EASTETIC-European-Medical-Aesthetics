import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Check, FileText, Download, ShieldCheck } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../../data/products';
import { usePriceRequests } from '../../context/PriceRequestContext';

interface ProductDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: ProductCategory | null;
  onOpenProfessionalModal: () => void;
}

export const ProductDossierModal: React.FC<ProductDossierModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  onOpenProfessionalModal,
}) => {
  const { openQuoteForProduct } = usePriceRequests();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    initialCategory || PRODUCT_CATEGORIES[0]
  );
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Sync initialCategory if updated
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setSelectedProductIndex(0);
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const categoryProducts = selectedCategory.products || [];
  const currentProduct = categoryProducts[selectedProductIndex] || categoryProducts[0] || {
    name: selectedCategory.name,
    tagline: selectedCategory.headline,
    format: 'Clinical Presentation',
    targetTissue: 'Cutaneous Tissue',
  };

  const handleDownloadMonograph = (productName: string) => {
    setDownloadSuccess(productName);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl bg-[#000000] border border-white/20 text-white shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/15 bg-neutral-950">
          <div className="flex items-center space-x-3">
            <span className="font-editorial text-xl uppercase tracking-[0.15em]">
              EASTETIC
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-400">
              CLINICAL PRODUCT MONOGRAPH PORTFOLIO
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-white/20 hover:border-white text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Product Dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Horizontal Filter Strip */}
        <div className="flex overflow-x-auto border-b border-white/10 px-6 sm:px-8 py-3 gap-2 bg-black no-scrollbar">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCategory.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedProductIndex(0);
                }}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'border border-white bg-white text-black font-medium'
                    : 'border border-white/15 text-neutral-400 hover:border-white/50 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[75vh] overflow-y-auto">
          {/* Left Column: Product Selection & Macro Visual (Span 5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 space-y-6 bg-neutral-950/60">
            {/* Macro Visual */}
            <div className="relative h-64 w-full border border-white/15 overflow-hidden bg-black flex items-center justify-center p-4">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[9px] font-technical tracking-[0.2em] border border-white/20">
                {selectedCategory.code}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 text-[9px] font-technical tracking-[0.2em] border border-white/20">
                {selectedCategory.specifications?.grade || 'Medical Device'}
              </div>
            </div>

            {/* Product Switcher inside Category */}
            {categoryProducts.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-400 block">
                  AVAILABLE FORMULATIONS ({categoryProducts.length})
                </span>
                <div className="space-y-2">
                  {categoryProducts.map((prod, idx: number) => (
                    <button
                      key={prod.name}
                      onClick={() => setSelectedProductIndex(idx)}
                      className={`w-full text-left p-3.5 border transition-all cursor-pointer ${
                        selectedProductIndex === idx
                          ? 'border-white bg-white/10 text-white'
                          : 'border-white/10 text-neutral-400 hover:border-white/30 hover:text-neutral-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-technical uppercase tracking-[0.1em] font-medium">
                          {prod.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {prod.format}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-400 font-light block mt-1">
                        {prod.tagline}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Production Origin Stamp */}
            <div className="p-4 border border-white/10 bg-black text-[11px] space-y-1 font-technical">
              <div className="flex justify-between text-neutral-400">
                <span>MANUFACTURED IN:</span>
                <span className="text-white">Barcelona, Spain</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>STERILIZATION:</span>
                <span className="text-white">{selectedCategory.specifications?.sterilization || 'Ph. Eur.'}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>ENDOTOXIN LEVEL:</span>
                <span className="text-white">{selectedCategory.specifications?.endotoxinLevel || '< 0.02 EU/ml'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Clinical Monograph (Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8">
            {selectedCategory.productCount === 0 ? (
              <div className="py-12 space-y-6">
                <div className="inline-flex items-center space-x-2 border border-white/20 px-3 py-1 bg-neutral-900">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  <span className="text-[10px] font-technical uppercase tracking-[0.2em] text-neutral-300">
                    PORTFOLIO DEVELOPMENT // IN PIPELINE
                  </span>
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.04em] text-white">
                  {selectedCategory.name} — Coming Soon
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {selectedCategory.description}
                </p>
                <div className="p-5 border border-white/10 bg-neutral-950 text-xs font-technical text-neutral-400 space-y-2">
                  <span className="text-white uppercase tracking-wider block font-medium">
                    EUROPEAN REGULATORY VALIDATION IN PROGRESS
                  </span>
                  <p className="leading-relaxed">
                    Formulations for this category are currently in terminal stability and bio-compatibility testing according to EU MDR standards. Register for release notifications.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenProfessionalModal();
                    }}
                    className="py-3 px-6 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Register for Physician Release Notice</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  <div className="inline-flex items-center space-x-2 border border-white/20 px-3 py-1 bg-neutral-900">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-[10px] font-technical uppercase tracking-[0.2em] text-neutral-300">
                      {selectedCategory.scientificFocus || 'Cellular Tissue Regeneration'}
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.04em] text-white">
                    {currentProduct.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {currentProduct.tagline}. {selectedCategory.description}
                  </p>
                </div>

                {/* Action CTAs: Request Price */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      openQuoteForProduct(currentProduct.name);
                    }}
                    className="flex-1 py-3.5 px-6 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Request Price</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDownloadMonograph(currentProduct.name)}
                    className="py-3.5 px-6 border border-white/20 hover:border-white text-white text-xs font-technical uppercase tracking-[0.2em] transition-colors flex items-center justify-center space-x-2 cursor-pointer bg-neutral-950"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Monograph</span>
                  </button>
                </div>
              </>
            )}

            {downloadSuccess && (
              <div className="p-3 border border-white/30 bg-neutral-950 text-xs font-technical text-white flex items-center space-x-2">
                <Check className="w-4 h-4 text-white" />
                <span>Monograph for {downloadSuccess} generated.</span>
              </div>
            )}

            {/* Active Molecular Matrix */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <span className="text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-400 block">
                ACTIVE BIO-MOLECULAR COMPOSITION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(selectedCategory.activeMolecules || []).map((mol: string, i: number) => (
                  <div key={i} className="p-3 border border-white/10 bg-neutral-950 text-xs text-neutral-300">
                    • {mol}
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Indications */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <span className="text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-400 block">
                TARGET ANATOMICAL INDICATIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(selectedCategory.indications || []).map((ind: string, i: number) => (
                  <div key={i} className="p-3 border border-white/10 bg-neutral-950 text-xs text-neutral-300">
                    • {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
