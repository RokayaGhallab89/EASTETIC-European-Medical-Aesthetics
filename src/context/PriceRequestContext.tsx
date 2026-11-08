import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PriceRequest {
  id?: string;
  productId: string;
  productName: string;
  category: string;
  fullName: string;
  clinicName: string;
  country: string;
  email: string;
  phone: string;
  estimatedVolume?: string;
  message?: string;
  date?: string;
  status?: 'Pending' | 'Contacted' | 'Quoted' | 'Archived';
}

interface PriceRequestContextType {
  submitPriceRequest: (req: Omit<PriceRequest, 'id' | 'date' | 'status'>) => void;
  activeProductForQuote: string | null;
  setActiveProductForQuote: (productName: string | null) => void;
  quoteModalOpen: boolean;
  setQuoteModalOpen: (open: boolean) => void;
  openQuoteForProduct: (productName: string) => void;
}

const PriceRequestContext = createContext<PriceRequestContextType | undefined>(undefined);

export const PriceRequestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProductForQuote, setActiveProductForQuote] = useState<string | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const submitPriceRequest = (req: Omit<PriceRequest, 'id' | 'date' | 'status'>) => {
    // In frontend-only architecture, requests are submitted directly via clinical email / WhatsApp dispatch
    console.info('Price inquiry registered:', req.productName, req.email);
  };

  const openQuoteForProduct = (productName: string) => {
    setActiveProductForQuote(productName);
    setQuoteModalOpen(true);
  };

  return (
    <PriceRequestContext.Provider
      value={{
        submitPriceRequest,
        activeProductForQuote,
        setActiveProductForQuote,
        quoteModalOpen,
        setQuoteModalOpen,
        openQuoteForProduct,
      }}
    >
      {children}
    </PriceRequestContext.Provider>
  );
};

export const usePriceRequests = () => {
  const context = useContext(PriceRequestContext);
  if (!context) {
    throw new Error('usePriceRequests must be used within a PriceRequestProvider');
  }
  return context;
};
