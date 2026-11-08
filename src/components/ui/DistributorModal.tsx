import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, ArrowRight, Globe } from 'lucide-react';

interface DistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DistributorModal: React.FC<DistributorModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [distData, setDistData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    targetCountry: '',
    currentBrands: '',
    annualVolume: '10,000 - 50,000 units',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dist-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#000000] border border-white/20 text-white shadow-2xl p-6 sm:p-10 my-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white border border-transparent hover:border-white/20 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto border border-white rounded-full flex items-center justify-center text-white">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl uppercase tracking-[0.05em]">
              Distribution Application Logged
            </h3>
            <p className="text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
              Thank you, {distData.contactPerson}. Our International Commercial Affairs Directorate in Barcelona has received your dossier for territory: <span className="text-white font-medium">{distData.targetCountry || 'Global'}</span>. We will arrange a confidential introductory briefing.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-8 py-3.5 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block">
                GLOBAL COMMERCIAL EXPANSION
              </span>
              <h3 id="dist-title" className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.04em]">
                DISTRIBUTION PARTNERSHIP
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Eastetic grants exclusive territorial distribution rights to qualified medical device distributors with established dermatology and plastic surgery clinic networks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-technical">
              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Distributor Enterprise Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Iberica Medical Distribution S.L."
                  value={distData.companyName}
                  onChange={(e) => setDistData({ ...distData, companyName: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Authorized Contact Executive *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Carlos Mendez (Managing Director)"
                  value={distData.contactPerson}
                  onChange={(e) => setDistData({ ...distData, contactPerson: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="c.mendez@distribution.eu"
                  value={distData.email}
                  onChange={(e) => setDistData({ ...distData, email: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Telephone / Direct Line *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+34 93 000 0000"
                  value={distData.phone}
                  onChange={(e) => setDistData({ ...distData, phone: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Requested Country / Exclusivity Zone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. France, Germany, UAE, Mexico"
                  value={distData.targetCountry}
                  onChange={(e) => setDistData({ ...distData, targetCountry: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Projected Annual Syringe/Vial Volume
                </label>
                <select
                  value={distData.annualVolume}
                  onChange={(e) => setDistData({ ...distData, annualVolume: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                >
                  <option value="5,000 - 15,000 units">5,000 – 15,000 units</option>
                  <option value="15,000 - 50,000 units">15,000 – 50,000 units</option>
                  <option value="50,000 - 150,000 units">50,000 – 150,000 units</option>
                  <option value="150,000+ units">150,000+ units (National Exclusive)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 uppercase tracking-[0.15em] text-xs mb-1.5 font-technical">
                Current Aesthetic / Dermatology Lines Represented
              </label>
              <textarea
                rows={2}
                placeholder="List existing distribution partnerships or clinic customer network..."
                value={distData.currentBrands}
                onChange={(e) => setDistData({ ...distData, currentBrands: e.target.value })}
                className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs focus:border-white focus:outline-none placeholder-neutral-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Submit Commercial Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
