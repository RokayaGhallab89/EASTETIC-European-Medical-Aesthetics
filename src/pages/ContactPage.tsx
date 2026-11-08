import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    companyClinic: '',
    country: '',
    email: '',
    phone: '',
    enquiryType: 'Professional Enquiry' as 'Professional Enquiry' | 'Distribution Partnership' | 'General Enquiry',
    message: '',
  });

  // Pre-fill enquiry type from search params if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get('type');
      if (type === 'professional') setFormData((prev) => ({ ...prev, enquiryType: 'Professional Enquiry' }));
      if (type === 'distribution') setFormData((prev) => ({ ...prev, enquiryType: 'Distribution Partnership' }));
    }
  }, []);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.companyClinic.trim()) errors.companyClinic = 'Clinic or Company name is required';
    if (!formData.country.trim()) errors.country = 'Country is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'A valid professional email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.message.trim()) errors.message = 'Please provide details of your enquiry';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Contact Grid: Form + Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Accessible Form (Span 7) */}
          <div className="lg:col-span-7 border border-white/15 bg-neutral-950 p-6 sm:p-10">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 mx-auto border border-white rounded-full flex items-center justify-center text-white">
                  <Check className="w-8 h-8" />
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.04em]">
                  Enquiry Transmitted
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.fullName}. Your {formData.enquiryType.toLowerCase()} has been directed to our European commercial desk in Barcelona. A senior medical scientific liaison will respond within one business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyClinic: '',
                        country: '',
                        email: '',
                        phone: '',
                        enquiryType: 'Professional Enquiry',
                        message: '',
                      });
                    }}
                    className="px-8 py-3.5 border border-white/30 text-white text-xs font-technical uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
                  >
                    Submit Another Communication
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-2 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-technical uppercase tracking-[0.25em] text-neutral-400 block">
                    TRANSMISSION DISPATCH
                  </span>
                  <h2 className="font-editorial text-2xl uppercase tracking-[0.05em]">
                    Submit Professional Enquiry
                  </h2>
                </div>

                {/* Enquiry Type Selector Tabs */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-technical uppercase tracking-[0.2em] text-neutral-400">
                    Enquiry Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(['Professional Enquiry', 'Distribution Partnership', 'General Enquiry'] as const).map((type) => {
                      const isSelected = formData.enquiryType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, enquiryType: type })}
                          className={`p-3 text-left border text-xs font-technical uppercase tracking-[0.15em] transition-all ${
                            isSelected
                              ? 'border-white bg-white text-black font-medium'
                              : 'border-white/15 text-neutral-400 hover:border-white/40 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-technical text-xs">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-neutral-400 uppercase tracking-[0.15em]">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="Dr. Sofia Navarro"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                        formErrors.fullName ? 'border-red-500' : 'border-white/20 focus:border-white'
                      }`}
                    />
                    {formErrors.fullName && (
                      <span className="text-[10px] text-red-400 tracking-wider block">
                        {formErrors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Company / Clinic */}
                  <div className="space-y-1.5">
                    <label htmlFor="companyClinic" className="block text-neutral-400 uppercase tracking-[0.15em]">
                      Company / Clinic *
                    </label>
                    <input
                      id="companyClinic"
                      type="text"
                      required
                      placeholder="Navarro Aesthetic Clinic"
                      value={formData.companyClinic}
                      onChange={(e) => setFormData({ ...formData, companyClinic: e.target.value })}
                      className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                        formErrors.companyClinic ? 'border-red-500' : 'border-white/20 focus:border-white'
                      }`}
                    />
                    {formErrors.companyClinic && (
                      <span className="text-[10px] text-red-400 tracking-wider block">
                        {formErrors.companyClinic}
                      </span>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-1.5">
                    <label htmlFor="country" className="block text-neutral-400 uppercase tracking-[0.15em]">
                      Country *
                    </label>
                    <input
                      id="country"
                      type="text"
                      required
                      placeholder="Spain, Germany, United Kingdom, etc."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                        formErrors.country ? 'border-red-500' : 'border-white/20 focus:border-white'
                      }`}
                    />
                    {formErrors.country && (
                      <span className="text-[10px] text-red-400 tracking-wider block">
                        {formErrors.country}
                      </span>
                    )}
                  </div>

                  {/* Professional Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-neutral-400 uppercase tracking-[0.15em]">
                      Professional Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="s.navarro@clinic.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-black border p-3 text-white placeholder-neutral-600 focus:outline-none ${
                        formErrors.email ? 'border-red-500' : 'border-white/20 focus:border-white'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-400 tracking-wider block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5 font-technical text-xs">
                  <label htmlFor="phone" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Telephone / Direct Line (With Country Code) *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+34 602 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-black border p-3 text-white font-mono placeholder-neutral-600 focus:outline-none ${
                      formErrors.phone ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-400 tracking-wider block">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5 font-technical text-xs">
                  <label htmlFor="message" className="block text-neutral-400 uppercase tracking-[0.15em]">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Specify the product categories, clinical volume requirements, or territorial expansion goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-black border p-3 text-white text-xs placeholder-neutral-600 focus:outline-none ${
                      formErrors.message ? 'border-red-500' : 'border-white/20 focus:border-white'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[10px] text-red-400 tracking-wider block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-white text-black text-xs font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Editorial Presence (Span 5) */}
          <div className="lg:col-span-5 space-y-10 lg:pl-4">
            <div className="space-y-3">
              <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block">
                HEADQUARTERS & SCIENTIFIC LABS
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-[0.03em]">
                BARCELONA, SPAIN
              </h2>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Our European commercial directorate and regulatory affairs department operate from Barcelona, coordinating worldwide certified clinic supply.
              </p>
            </div>

            {/* Direct Information Blocks */}
            <div className="space-y-6 pt-6 border-t border-white/10 font-technical text-xs">
              <div className="flex items-start space-x-4">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-[0.2em] mb-0.5">
                    REGISTERED LOCATION
                  </span>
                  <span className="text-white">Barcelona, Spain (European Union)</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-[0.2em] mb-0.5">
                    GENERAL & CLINICAL EMAIL
                  </span>
                  <a href="mailto:info@eastetic.com" className="text-white hover:underline text-sm">
                    info@eastetic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-[0.2em] mb-0.5">
                    TELEPHONE / DIRECT MD WHATSAPP
                  </span>
                  <a href="tel:+34602390377" className="text-white font-mono hover:underline text-sm">
                    +34 602 39 03 77
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-[0.2em] mb-0.5">
                    COMMERCIAL HOURS
                  </span>
                  <span className="text-white">Monday – Friday: 09:00 – 18:00 (Central European Time)</span>
                </div>
              </div>
            </div>

            {/* Regulatory and Quality Stamp Box */}
            <div className="p-6 border border-white/10 bg-neutral-950 space-y-3 font-technical text-xs">
              <span className="text-white uppercase tracking-[0.2em] block">
                COMPLIANCE & TRACEABILITY
              </span>
              <p className="text-neutral-400 font-light leading-relaxed text-[11px]">
                Inquiries regarding Medical Device Regulation (EU) 2017/745 batch traceability, Certificates of Conformity, or pharmacovigilance reports may also be dispatched via this channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
