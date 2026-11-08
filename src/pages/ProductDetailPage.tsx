import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Download, AlertCircle, Check, Eye } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useRouter } from '../context/RouterContext';
import { usePriceRequests } from '../context/PriceRequestContext';
import { ProductImage } from '../components/common/ProductImage';
import { SITE_IMAGES } from '../data/siteImages';

interface ProductDetailPageProps {
  onOpenProfessionalModal: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenProfessionalModal }) => {
  const { params, navigate } = useRouter();
  const { openQuoteForProduct } = usePriceRequests();
  const slug = params.slug?.toLowerCase();

  const product = PRODUCTS.find(
    (p) =>
      p.slug.toLowerCase() === slug ||
      p.id.toLowerCase() === slug ||
      p.slug.toLowerCase().endsWith('-' + slug) ||
      p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white pt-40 pb-28 px-6 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-500">
            DOSSIER ERROR // 404
          </div>
          <h1 className="font-editorial text-4xl uppercase tracking-[0.05em]">
            Product Monograph Not Found
          </h1>
          <p className="text-xs text-neutral-400 font-light">
            The requested formulation specification cannot be located in the Eastetic clinical index.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3.5 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  const handleDownloadDossier = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-32 sm:pt-36 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Back breadcrumb navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-technical uppercase tracking-[0.2em]">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <span className="text-neutral-500 hidden sm:inline-block">
            EASTETIC // {product.category.toUpperCase()} // {product.subcategory.toUpperCase()}
          </span>
        </div>

        {/* TOP SECTION: Large Product Photography & Editorial Hero Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Product Gallery (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full h-[450px] sm:h-[540px] lg:h-[600px] bg-[#030303] border border-white/15 overflow-hidden flex items-center justify-center p-8">
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[activeImageIndex] || product.primaryImage || SITE_IMAGES.fallback.productPlaceholder}
                alt={product.altText || `${product.name} clinical presentation`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = SITE_IMAGES.fallback.productPlaceholder;
                }}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />

              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm border border-white/20 px-3 py-1 text-[10px] font-technical tracking-[0.2em] text-neutral-300">
                LOT INSPECTION: BARCELONA, ES
              </div>

              <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm border border-white/20 px-3 py-1 text-[10px] font-technical tracking-[0.2em] text-neutral-300">
                {product.specifications?.grade || 'CLINICAL SPECIFICATION'}
              </div>
            </div>

            {/* Thumbnail switcher with authentic packaging views */}
            {product.images.length > 1 && (
              <div className="space-y-2">
                <span className="text-[10px] font-technical uppercase tracking-[0.2em] text-neutral-400 block">
                  GALLERY ASSETS ({product.images.length} MULTI-ANGLE VIEWS)
                </span>
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-24 h-20 border transition-all overflow-hidden bg-black p-1 flex items-center justify-center shrink-0 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-white ring-1 ring-white'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = SITE_IMAGES.fallback.productPlaceholder;
                        }}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Overview & Clinical Action (Span 5) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 border border-white/20 px-3 py-1 bg-neutral-950">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-300">
                  {product.category} // {product.subcategory}
                </span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-5xl uppercase tracking-[0.03em] leading-[0.95]">
                {product.name}
              </h1>

              <div className="text-xs font-technical uppercase tracking-[0.2em] text-neutral-400">
                Format: <span className="text-white font-medium">{product.format}</span>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed pt-2">
                {product.shortDescription}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              {/* Request Price CTA */}
              <button
                onClick={() => openQuoteForProduct(product.name)}
                className="w-full py-4 px-6 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request Price</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadDossier}
                className="w-full py-3.5 px-6 border border-white/25 text-neutral-300 hover:text-white hover:border-white text-xs font-technical uppercase tracking-[0.2em] transition-colors flex items-center justify-center space-x-2 bg-neutral-950 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Scientific Monograph</span>
              </button>

              {downloadSuccess && (
                <div className="p-3 border border-white/30 bg-neutral-900 text-xs font-technical text-white flex items-center space-x-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Clinical monograph generated for certified clinical evaluation.</span>
                </div>
              )}
            </div>

            {/* High-level technical summary card */}
            <div className="p-5 border border-white/10 bg-neutral-950 space-y-3 text-xs font-technical">
              <div className="flex justify-between pb-2 border-b border-white/10 text-neutral-400">
                <span>MANUFACTURING SITE:</span>
                <span className="text-white">Barcelona, Spain (EU)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/10 text-neutral-400">
                <span>ENDOTOXIN THRESHOLD:</span>
                <span className="text-white font-mono">{product.specifications?.endotoxinLevel || '< 0.02 EU/ml'}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>STERILIZATION & GMP:</span>
                <span className="text-white font-mono">{product.specifications?.sterilization || 'Ph. Eur. Standard'}</span>
              </div>
            </div>

            {product.flaggedForReview && product.reviewReason && (
              <div className="flex items-start space-x-2 text-[11px] text-amber-300/80 font-light border-l border-amber-400/40 pl-3">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                <span>Notice: {product.reviewReason}</span>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 1: OVERVIEW & KEY TECHNOLOGY */}
        <div className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-[1px] bg-white/40" />
            <h2 className="text-xs font-technical uppercase tracking-[0.3em] text-neutral-400">
              01 // SCIENTIFIC OVERVIEW & KEY TECHNOLOGY
            </h2>
          </div>
          <div className="max-w-4xl space-y-4">
            <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
              {product.description}
            </p>
            {product.technology && (
              <div className="p-5 border border-white/15 bg-neutral-950 text-xs sm:text-sm font-technical text-neutral-300 leading-relaxed">
                <span className="text-white uppercase tracking-wider block mb-1.5 font-medium">
                  BIOLOGICAL MECHANISM & KEY TECHNOLOGY:
                </span>
                {product.technology}
              </div>
            )}
          </div>
        </div>

        {/* SECTION 2: FORMULATION & VERIFIED INGREDIENTS */}
        <div className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-[1px] bg-white/40" />
            <h2 className="text-xs font-technical uppercase tracking-[0.3em] text-neutral-400">
              02 // FORMULATION & INGREDIENTS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-technical">
            <div className="p-6 border border-white/15 bg-neutral-950 space-y-3">
              <span className="text-white uppercase tracking-[0.2em] block font-medium">
                VERIFIED ACTIVE INGREDIENTS
              </span>
              <p className="text-neutral-300 font-mono leading-relaxed text-xs sm:text-sm">
                {product.ingredients || 'Verified active ingredients provided on certified pharmaceutical batch release specification (Monograph available upon clinical request).'}
              </p>
            </div>
            <div className="p-6 border border-white/15 bg-neutral-950 space-y-3">
              <span className="text-white uppercase tracking-[0.2em] block font-medium">
                FORMULATION MATRIX
              </span>
              <p className="text-neutral-400 font-light leading-relaxed text-xs sm:text-sm">
                {product.formulation || 'Sterile isotonic carrier engineered in Barcelona, Spain under European Pharmacopoeia (Ph. Eur.) monographs.'}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: PROFESSIONAL APPLICATION & DETAILS */}
        <div className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-[1px] bg-white/40" />
            <h2 className="text-xs font-technical uppercase tracking-[0.3em] text-neutral-400">
              03 // CLINICAL APPLICATION & PRODUCT DETAILS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-technical">
            <div className="p-6 border border-white/15 bg-neutral-950 space-y-3">
              <span className="text-white uppercase tracking-[0.2em] block font-medium">
                INTENDED CLINICAL USE
              </span>
              <p className="text-neutral-400 font-light leading-relaxed text-xs sm:text-sm">
                {product.application || 'Exclusively for licensed physicians, plastic surgeons, and certified aesthetic clinics.'}
              </p>
            </div>
            <div className="p-6 border border-white/15 bg-neutral-950 space-y-3">
              <span className="text-white uppercase tracking-[0.2em] block font-medium">
                PRODUCT MONOGRAPH & TRACEABILITY
              </span>
              <p className="text-neutral-400 font-light leading-relaxed text-xs sm:text-sm">
                Manufactured under EU MDR 2017/745 quality management. Each batch carries serialized European traceability and Certificates of Analysis (CoA).
              </p>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-white/10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-editorial text-2xl uppercase tracking-[0.05em]">
                Complementary Clinical Solutions
              </h3>
              <button
                onClick={() => navigate('/products')}
                className="text-xs font-technical uppercase tracking-[0.2em] text-neutral-400 hover:text-white"
              >
                View Full Index &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/products/${rel.slug}`)}
                  className="border border-white/15 bg-neutral-950 p-5 space-y-4 hover:border-white transition-colors cursor-pointer"
                >
                  <div className="h-44 w-full bg-black border border-white/10 flex items-center justify-center p-3">
                    <ProductImage
                      src={rel.primaryImage || rel.images[0]}
                      alt={rel.altText || rel.name}
                      containerClassName="relative w-full h-full flex items-center justify-center"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-technical uppercase text-neutral-400 block mb-1">
                      {rel.category} // {rel.subcategory}
                    </span>
                    <h4 className="font-editorial text-lg uppercase tracking-[0.03em] text-white">
                      {rel.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
