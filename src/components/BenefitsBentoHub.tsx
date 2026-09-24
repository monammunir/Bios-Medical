import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, BellRing, ArrowRight } from 'lucide-react';
import { TurbineLogo } from './TurbineLogo';

export const BenefitsBentoHub: React.FC = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b3856]/10 border border-[#0b3856]/20 text-[#0b3856] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
          <TurbineLogo size={14} animate={true} />
          <span>THE VALUE TRIAD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Select. Personalize. Control.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          How continuous in-vivo telemetry transforms fragile hip fracture management from guesswork into personalized, proactive precision medicine.
        </p>
      </div>

      {/* Official Select. Personalize. Control. Infographic from biosmedical.care */}
      <div className="mb-12 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 shadow-sm flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b3856]">
            OFFICIAL CLINICAL FRAMEWORK
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Data-Driven Orthogeriatric Care Pathway
          </h3>
        </div>
        <div className="w-full max-w-3xl flex justify-center">
          <img 
            src="/real_bios/select_personalize_control.png" 
            alt="Select Personalize Control - Official BIOS Medical Infographic" 
            className="w-full h-auto object-contain max-h-72 drop-shadow-md"
          />
        </div>
      </div>

      {/* 3 Value Pillars Grid with Attractive Brand Blues */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Pillar 1: Select */}
        <motion.div 
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#0b3856]/50 flex flex-col justify-between group transition-all"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#0b3856] text-white flex items-center justify-center mb-6 shadow-md shadow-[#0b3856]/20">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-[#1a689a]">
              PILLAR 01
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-[#0b3856] transition-colors">
              SELECT · Objective Triage
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Objective continuous mobility data identifies which patients can safely return home early versus those requiring comprehensive geriatric institutional care.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-3xl font-black font-heading text-[#0b3856]">-1.8 Days</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Average hospital stay reduction</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#4e87ba] group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Pillar 2: Personalize */}
        <motion.div 
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#4e87ba]/60 flex flex-col justify-between group transition-all"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#4e87ba] text-white flex items-center justify-center mb-6 shadow-md shadow-[#4e87ba]/25">
              <Activity className="w-7 h-7" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-[#4e87ba]">
              PILLAR 02
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-[#4e87ba] transition-colors">
              PERSONALIZE · Tailored Mobilization
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Continuous weight-bearing feedback enables clinical teams to tailor mobilization speed to individual biological healing, preventing muscle atrophy and delirium.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-3xl font-black font-heading text-[#0b3856]">-22%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">1-year post-op mortality reduction</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#4e87ba] group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Pillar 3: Control */}
        <motion.div 
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#0b3856]/50 flex flex-col justify-between group transition-all"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#0b3856] text-white flex items-center justify-center mb-6 shadow-md shadow-[#0b3856]/20">
              <BellRing className="w-7 h-7" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-[#1a689a]">
              PILLAR 03
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-[#0b3856] transition-colors">
              CONTROL · Continuous Safety Net
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real-time monitoring detects micro-instability, screw cut-out, or sudden antalgic gait declines, alerting care teams before secondary falls or emergency revisions occur.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-3xl font-black font-heading text-[#0b3856]">24/7</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Automated complication detection</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#4e87ba] group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default BenefitsBentoHub;
