import React from 'react';
import { motion } from 'framer-motion';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#0a2540] text-white p-10 sm:p-16 text-center"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Experience the <span className="text-[#38bdf8] font-normal">HIPbeacon</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed">
            Transform hip fracture from a life-threatening event to a manageable episode.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-10 py-4 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-base sm:text-lg font-medium transition-all shadow-md"
            >
              Request Consultation
            </a>

            <a
              href="mailto:clinical@biosmedical.care"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-base sm:text-lg font-light border border-white/20 transition-all"
            >
              clinical@biosmedical.care
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
