import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { usePriceRequests } from '../../context/PriceRequestContext';

export const PriceRequestModal: React.FC = () => {
  const { quoteModalOpen, setQuoteModalOpen, activeProductForQuote, submitPriceRequest } =
    usePriceRequests();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    country: '',
    email: '',
    phone: '',
    estimatedVolume: '10-25 units / month',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (quoteModalOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [quoteModalOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.clinicName.trim()) errs.clinicName = 'Clinic / Medical Center is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid professional email is required';
    if (!formData.phone.trim()) errs.phone = 'Telephone with country code is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    submitPriceRequest({
      productId: (activeProductForQuote || 'general-inquiry').toLowerCase().replace(/\s+/g, '-'),
      productName: activeProductForQuote || 'Eastetic Portfolio',
      category: 'Clinical Inquiry',
      fullName: formData.fullName,
      clinicName: formData.clinicName,
      country: formData.country,
      email: formData.email,
      phone: formData.phone,
      estimatedVolume: formData.estimatedVolume,
      message: formData.message,
    });

    setSubmitted(true);
  };

  if (!quoteModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/20 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={() => setQuoteModalOpen(false)}
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto border border-white rounded-full flex items-center justify-center text-white">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block">
                  TRANSMISSION CONFIRMED
                </span>
                <h3 className="font-editorial text-3xl uppercase tracking-[0.04em]">
                  Pricing Quotation Requested
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your quotation request for{' '}
                <span className="text-white font-medium">{activeProductForQuote}</span> has been routed to our European commercial liaison team in Barcelona. You will receive an official clinical price schedule within one business day.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => setQuoteModalOpen(false)}
                  className="px-8 py-3.5 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <div className="inline-flex items-center space-x-2 text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-400">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                  <span>DIRECT MEDICAL QUOTATION DISPATCH</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl uppercase tracking-[0.04em] text-white">
                  Request Clinical Price
                </h2>
                <div className="p-3 bg-neutral-950 border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-technical uppercase tracking-[0.2em] text-neutral-400 block">
                      TARGET FORMULATION:
                    </span>
                    <span className="text-sm font-editorial uppercase tracking-[0.05em] text-white">
                      {activeProductForQuote || 'Complete Eastetic Portfolio'}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[9px] font-technical uppercase tracking-[0.15em] border border-white/20 bg-black text-neutral-300">
                    B2B CLINICAL ONLY
                  </span>
                </div>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-technical text-xs">
                <div className="space-y-1.5">
                  <label htmlFor="price-fullname" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Doctor / Specialist Name *
                  </label>
                  <input
                    id="price-fullname"
                    type="text"
                    required
                    placeholder="Dr. Elena Rossi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                      errors.fullName ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-red-400 block">{errors.fullName}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="price-clinic" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Clinic / Practice Name *
                  </label>
                  <input
                    id="price-clinic"
                    type="text"
                    required
                    placeholder="Rossi Aesthetic Clinic"
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                      errors.clinicName ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {errors.clinicName && (
                    <span className="text-[10px] text-red-400 block">{errors.clinicName}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="price-country" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Country *
                  </label>
                  <input
                    id="price-country"
                    type="text"
                    required
                    placeholder="Spain, Germany, Italy, etc."
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                      errors.country ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {errors.country && (
                    <span className="text-[10px] text-red-400 block">{errors.country}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="price-email" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Professional Email *
                  </label>
                  <input
                    id="price-email"
                    type="email"
                    required
                    placeholder="e.rossi@clinic.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-technical text-xs">
                <div className="space-y-1.5">
                  <label htmlFor="price-phone" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Telephone / WhatsApp *
                  </label>
                  <input
                    id="price-phone"
                    type="tel"
                    required
                    placeholder="+34 600 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-black border p-3 text-white font-mono placeholder-neutral-600 focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-red-400 block">{errors.phone}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="price-volume" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Estimated Clinical Requirement
                  </label>
                  <select
                    id="price-volume"
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full bg-black border border-white/20 p-3 text-white focus:outline-none focus:border-white text-xs"
                  >
                    <option value="Initial Sample Evaluation">Initial Sample Evaluation</option>
                    <option value="10-25 units / month">10-25 units / month</option>
                    <option value="25-50 units / month">25-50 units / month</option>
                    <option value="50-100 units / month">50-100 units / month</option>
                    <option value="Regional Clinic Group (100+ units)">Regional Clinic Group (100+ units)</option>
                    <option value="National Distributor Partnership">National Distributor Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 font-technical text-xs">
                <label htmlFor="price-message" className="block text-neutral-400 uppercase tracking-[0.15em]">
                  Specific Protocol Requirements or Notes (Optional)
                </label>
                <textarea
                  id="price-message"
                  rows={3}
                  placeholder="Inquire about clinical studies, volume pricing tiers, or combination protocols..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black border border-white/20 p-3 text-white text-xs placeholder-neutral-600 focus:outline-none focus:border-white"
                />
              </div>

              {/* Quality & Security Note */}
              <div className="flex items-center space-x-2 text-[10px] text-neutral-400 font-technical border-t border-white/10 pt-4">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>
                  Pricing is provided exclusively to verified medical professionals. Certificates of analysis and CE/MDR conformity accompany all shipments.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Submit Price Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(false)}
                  className="py-4 px-6 border border-white/25 text-neutral-400 hover:text-white hover:border-white text-xs font-technical uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
