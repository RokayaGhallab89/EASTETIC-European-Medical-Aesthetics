import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../data/products';

interface ProfessionalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfessionalModal: React.FC<ProfessionalModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    medicalRole: 'Dermatologist',
    licenseNumber: '',
    clinicName: '',
    country: 'Spain',
    requestedCategory: 'Biostimulators',
    notes: '',
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
      aria-labelledby="prof-title"
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
              Verification Request Received
            </h3>
            <p className="text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
              Thank you, Dr. {formData.name || 'Practitioner'}. Our European medical scientific affairs department will review your license credentials ({formData.licenseNumber}) and contact you within 24 hours with product sample protocols.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-8 py-3.5 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block">
                MEDICAL ACCREDITATION PORTAL
              </span>
              <h3 id="prof-title" className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.04em]">
                PRACTITIONER VERIFICATION
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Supply of Eastetic Class III medical devices is restricted exclusively to certified physicians, dermatologists, and medical aesthetic clinics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-technical">
              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Full Name & Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Elena Torres"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Clinical Specialization *
                </label>
                <select
                  value={formData.medicalRole}
                  onChange={(e) => setFormData({ ...formData, medicalRole: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                >
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Aesthetic Doctor">Aesthetic Doctor (MD)</option>
                  <option value="Plastic Surgeon">Plastic / Reconstructive Surgeon</option>
                  <option value="Medical Aesthetic Clinic Director">Clinic Medical Director</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Professional Medical License No. *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ES-MED-48291"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Clinic / Practice Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Instituto Dermatológico Barcelona"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Professional Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="doctor@clinic.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600"
                />
              </div>

              <div>
                <label className="block text-neutral-400 uppercase tracking-[0.15em] mb-1.5">
                  Telephone / Direct Mobile *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+34 602 00 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:border-white focus:outline-none placeholder-neutral-600 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 uppercase tracking-[0.15em] text-xs mb-1.5 font-technical">
                Primary Product Category of Interest
              </label>
              <select
                value={formData.requestedCategory}
                onChange={(e) => setFormData({ ...formData, requestedCategory: e.target.value })}
                className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs focus:border-white focus:outline-none"
              >
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name} ({cat.code})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Submit for Medical Verification & Samples</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
