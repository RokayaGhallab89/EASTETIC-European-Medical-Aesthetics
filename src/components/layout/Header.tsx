import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { useRouter } from '../../context/RouterContext';

interface HeaderProps {
  onOpenDistributorModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDistributorModal }) => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isItemActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    if (href === '/products') return currentPath.startsWith('/products');
    return currentPath.startsWith(href);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#000000]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => navigate('/')}
            className="group flex flex-col items-start text-left focus:outline-none cursor-pointer"
            aria-label="Eastetic - Return to Home"
          >
            <span className="font-editorial text-2xl sm:text-3xl tracking-[0.14em] text-white font-normal leading-none group-hover:opacity-85 transition-opacity">
              Eastetic
            </span>
            <span className="text-[10px] tracking-[0.3em] text-neutral-400 font-technical uppercase mt-1">
              Touch — Your Skin
            </span>
          </button>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item) => {
              const active = isItemActive(item.href);
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative py-1 focus:outline-none cursor-pointer ${
                    active ? 'text-white font-medium' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/products')}
              className="group relative inline-flex items-center space-x-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border border-white/30 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-neutral-300 focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Minimal Monochrome Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#000000] text-white flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="space-y-6 mt-8">
              <span className="text-[10px] tracking-[0.35em] text-neutral-400 font-technical uppercase block">
                NAVIGATION // INDEX
              </span>
              <ul className="space-y-6">
                {MAIN_NAVIGATION.map((item, index) => {
                  const active = isItemActive(item.href);
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigate(item.href);
                        }}
                        className={`font-editorial text-3xl tracking-[0.1em] text-left block transition-colors ${
                          active ? 'text-white font-normal underline decoration-1 underline-offset-8' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/products');
                }}
                className="w-full flex items-center justify-between px-6 py-4 border border-white text-xs uppercase tracking-[0.2em] bg-white text-black font-medium"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-4 text-[11px] text-neutral-400 font-technical">
                <div>
                  <span className="block text-white mb-1">MANUFACTURING</span>
                  <span>Barcelona, Spain</span>
                </div>
                <div>
                  <span className="block text-white mb-1">INQUIRIES</span>
                  <span>info@eastetic.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
