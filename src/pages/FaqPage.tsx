import React from 'react';
import { motion } from 'framer-motion';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 sm:pt-28"
    >
      {/* Page Hero Header */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4e87ba]/15 border border-[#4e87ba]/30 text-[#0b3856] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
          <TurbineLogo size={15} animate={true} />
          <span>CLINICAL & TECHNICAL KNOWLEDGE BASE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Frequently Asked Questions <br />
          <span className="text-[#0b3856]">& Technical Guidance</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Find answers to common inquiries regarding HIPbeacon™ surgical insertion, sub-GHz telemetry, Swiss FADP / GDPR regulatory compliance, and ward integration.
        </p>
      </section>

      {/* 1. FAQ Accordion */}
      <FaqAccordion />

      {/* 2. Still have questions box */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#4e87ba]/15 text-[#0b3856] flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Have a Specific Surgical or Regulatory Question?</h3>
          <p className="text-sm text-slate-600 mt-1">
            Our medical director and regulatory compliance officers are available for direct physician inquiries.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b3856] hover:bg-[#0b3856]/90 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <span>Connect with Medical Affairs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
