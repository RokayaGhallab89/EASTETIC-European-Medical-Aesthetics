import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { PriceRequestProvider } from './context/PriceRequestContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SciencePage } from './pages/SciencePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDossierModal } from './components/products/ProductDossierModal';
import { PriceRequestModal } from './components/ui/PriceRequestModal';
import { ProfessionalModal } from './components/ui/ProfessionalModal';
import { DistributorModal } from './components/ui/DistributorModal';
import { ProductCategory } from './data/products';

function AppContent() {
  const { currentPath } = useRouter();

  const [dossierOpen, setDossierOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [professionalModalOpen, setProfessionalModalOpen] = useState(false);
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);

  const handleOpenCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setDossierOpen(true);
  };

  // Normalize path (strip query params and hashes for route matching)
  const cleanPath = currentPath.split('?')[0].split('#')[0];

  // Storefront route resolver
  const renderCurrentPage = () => {
    if (cleanPath === '/' || cleanPath === '') {
      return (
        <HomePage
          onOpenCategoryDossier={handleOpenCategory}
          onOpenProfessionalPortal={() => setProfessionalModalOpen(true)}
          onOpenDistributorPortal={() => setDistributorModalOpen(true)}
        />
      );
    }

    if (cleanPath === '/products') {
      return <ProductsPage />;
    }

    if (cleanPath.startsWith('/products/')) {
      return (
        <ProductDetailPage
          onOpenProfessionalModal={() => setProfessionalModalOpen(true)}
        />
      );
    }

    if (cleanPath === '/science') {
      return <SciencePage />;
    }

    if (cleanPath === '/about') {
      return <AboutPage />;
    }

    if (cleanPath === '/contact') {
      return <ContactPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#FFFFFF] selection:text-[#000000] overflow-x-hidden">
      {/* Global Transparent / Sticky Header */}
      <Header
        onOpenDistributorModal={() => setDistributorModalOpen(true)}
      />

      {/* Main Routed Page Content */}
      <main className="w-full">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenProfessionalModal={() => setProfessionalModalOpen(true)}
        onOpenDistributorModal={() => setDistributorModalOpen(true)}
      />

      {/* Interactive Clinical, Quotation & Partnership Modals */}
      <PriceRequestModal />

      <ProductDossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        initialCategory={selectedCategory}
        onOpenProfessionalModal={() => setProfessionalModalOpen(true)}
      />

      <ProfessionalModal
        isOpen={professionalModalOpen}
        onClose={() => setProfessionalModalOpen(false)}
      />

      <DistributorModal
        isOpen={distributorModalOpen}
        onClose={() => setDistributorModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <PriceRequestProvider>
        <AppContent />
      </PriceRequestProvider>
    </RouterProvider>
  );
}
