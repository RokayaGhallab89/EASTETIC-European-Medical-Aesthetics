import React from 'react';
import { FOOTER_NAVIGATION, SOCIAL_LINKS, SocialPlatform } from '../../data/navigation';
import { useRouter } from '../../context/RouterContext';

const SocialPlatformIcon: React.FC<{ platform: SocialPlatform; className?: string }> = ({
  platform,
  className = 'w-3.5 h-3.5',
}) => {
  switch (platform) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.33a6.34 6.34 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.61a6.34 6.34 0 0 0 8.08 6.07 6.27 6.27 0 0 0 4.67-6.07V8.75a8.28 8.28 0 0 0 4.84 1.54V6.84a4.86 4.86 0 0 1-1.1-.15z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.003 2c-3.567 0-5.748 2.624-5.748 5.485 0 1.258.468 2.348.974 3.018.156.208.203.415.119.645-.102.28-.415.487-.733.642-.873.424-1.892.834-2.128 1.488-.12.333-.032.658.267.892.518.406 1.493.597 2.302.731.255.042.428.188.472.434.054.305-.125.66-.462.906-.928.675-2.072 1.517-1.996 2.455.047.575.524.966 1.133 1.096 1.344.288 2.766-.34 4.095-.34.502 0 .977.086 1.408.271.46.198.887.483 1.297.483.411 0 .837-.285 1.297-.483.431-.185.906-.271 1.408-.271 1.329 0 2.751.628 4.095.34.609-.13 1.086-.521 1.133-1.096.076-.938-1.068-1.78-1.996-2.455-.337-.246-.516-.601-.462-.906.044-.246.217-.392.472-.434.809-.134 1.784-.325 2.302-.731.299-.234.387-.559.267-.892-.236-.654-1.255-1.064-2.128-1.488-.318-.155-.631-.362-.733-.642-.084-.23-.037-.437.119-.645.506-.67.974-1.76.974-3.018C17.751 4.624 15.57 2 12.003 2z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm.01 16.67c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.4 0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.26-8.24 8.26zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.65 4.2 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
      );
  }
};

interface FooterProps {
  onOpenProfessionalModal: () => void;
  onOpenDistributorModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenProfessionalModal,
  onOpenDistributorModal,
}) => {
  const { navigate } = useRouter();

  return (
    <footer id="contact-footer" className="relative w-full bg-[#000000] text-white pt-20 sm:pt-28 pb-12 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          {/* Brand Info & Tagline (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <span className="text-xs font-technical uppercase tracking-[0.3em] text-neutral-400 block">
                Touch — Your Skin // European Medical Aesthetics
              </span>
            </button>

            <p className="text-xs text-neutral-300 font-normal leading-relaxed max-w-md">
              “Where Science, Safety and Beauty Come Together.”
            </p>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md">
              Eastetic is a European medical aesthetic brand committed to providing dermatologists and aesthetic professionals with clinically engineered, high-performance products manufactured in Spain.
            </p>
          </div>

          {/* Explore Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block pb-2 border-b border-white/10">
              EXPLORE
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-neutral-300">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/science')}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block pb-2 border-b border-white/10">
              COMPANY
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-neutral-300">
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProfessionalModal}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Professional Enquiries
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDistributorModal}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Distribution
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about#manufacturing')}
                  className="hover:text-white transition-colors text-left uppercase tracking-[0.18em] cursor-pointer"
                >
                  Manufacturing Facility
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-technical uppercase tracking-[0.3em] text-neutral-400 block pb-2 border-b border-white/10">
              CONTACT & COMMUNICATIONS
            </span>
            <div className="space-y-4 text-xs text-neutral-300 font-light">
              <div>
                <span className="block text-neutral-400 text-xs font-technical tracking-[0.2em] uppercase mb-0.5">
                  HEADQUARTERS & PRODUCTION
                </span>
                <span className="text-white font-medium">Barcelona, Spain</span>
              </div>
              <div>
                <span className="block text-neutral-400 text-xs font-technical tracking-[0.2em] uppercase mb-0.5">
                  OFFICIAL EMAILS
                </span>
                <div className="space-y-1">
                  <a
                    href="mailto:info@eastetic.com"
                    className="text-white hover:underline transition-all block font-mono"
                  >
                    info@eastetic.com
                  </a>
                </div>
              </div>
              <div>
                <span className="block text-neutral-400 text-xs font-technical tracking-[0.2em] uppercase mb-0.5">
                  TELEPHONE / DIRECT WHATSAPP
                </span>
                <a
                  href="https://wa.me/34602390377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono hover:underline transition-all block"
                >
                  +34 602 39 03 77
                </a>
              </div>

              {/* Clickable Verified Social Media Links */}
              <div className="pt-3 border-t border-white/10 space-y-2.5">
                <span className="block text-neutral-400 text-[11px] font-technical tracking-[0.2em] uppercase">
                  VERIFIED CHANNELS
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      title={link.name}
                      className="w-8 h-8 flex items-center justify-center border border-white/20 bg-neutral-950 text-neutral-300 hover:text-black hover:bg-white hover:border-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white shrink-0 cursor-pointer"
                    >
                      <SocialPlatformIcon platform={link.platform} className="w-3.5 h-3.5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal and Rights row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-technical gap-4">
          <div>
            © {new Date().getFullYear()}. All rights reserved. Registered European Medical Aesthetic Trademark.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Supply
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
