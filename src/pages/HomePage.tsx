import React from 'react';
import { CinematicHero } from '../components/home/CinematicHero';
import { BrandManifesto } from '../components/home/BrandManifesto';
import { ProductUniverse } from '../components/home/ProductUniverse';
import { ScienceToResult } from '../components/home/ScienceToResult';
import { FeaturedProduct } from '../components/home/FeaturedProduct';
import { EuropeanQuality } from '../components/home/EuropeanQuality';
import { ProfessionalEcosystem } from '../components/home/ProfessionalEcosystem';
import { FinalBrandMoment } from '../components/home/FinalBrandMoment';
import { ProductCategory } from '../data/products';
import { useRouter } from '../context/RouterContext';

interface HomePageProps {
  onOpenCategoryDossier: (cat: ProductCategory) => void;
  onOpenProfessionalPortal: () => void;
  onOpenDistributorPortal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenCategoryDossier,
  onOpenProfessionalPortal,
  onOpenDistributorPortal,
}) => {
  const { navigate } = useRouter();

  const handleScrollToScience = () => {
    const el = document.getElementById('science-to-result');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="main-content">
      {/* Section 1: Cinematic Video Hero */}
      <CinematicHero
        onExploreProducts={() => navigate('/products')}
        onDiscoverScience={handleScrollToScience}
      />

      {/* Section 2: Brand Manifesto (White Background) */}
      <BrandManifesto />

      {/* Section 3: Product Universe (Black Background, Interactive Categories) */}
      <ProductUniverse
        onSelectCategory={onOpenCategoryDossier}
        onExploreAll={() => navigate('/products')}
      />

      {/* Section 4: Science To Result (White Background, Visual Journey) */}
      <ScienceToResult />

      {/* Section 5: Featured Product / Collection (Black Background) */}
      <FeaturedProduct onDiscoverProducts={() => navigate('/products')} />

      {/* Section 6: European Quality (White Background, 3 Minimal Columns) */}
      <EuropeanQuality />

      {/* Section 7: Professional Ecosystem (Black Background, 2 Large Hover Paths) */}
      <ProfessionalEcosystem
        onOpenProfessionalPortal={onOpenProfessionalPortal}
        onOpenDistributorPortal={onOpenDistributorPortal}
      />

      {/* Section 8: Final Brand Moment (Closing Statement) */}
      <FinalBrandMoment onDiscoverEastetic={() => navigate('/products')} />
    </div>
  );
};
