import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full bg-white pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Subtle Background Ice-Blue Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#e0f2fe]/40 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#f0f9ff]/60 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Top Sub-tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f0f7fc] border border-[#d0e5f5] text-[#0284c7] text-sm font-medium tracking-wide mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
              <span>Pioneering In-Vivo Mobility Telemetry</span>
            </div>

            {/* Main Headline with Bold Blue Highlight (Questrial) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#0a2540] tracking-tight leading-[1.08]">
              MY <span className="font-semibold text-[#0284c7]">LIFE</span> AFTER <br />
              <span className="font-normal text-[#0a2540]">HIP-FRACTURE</span>
            </h1>

            {/* Sub-headline with Large Readable Font Size */}
            <p className="mt-6 text-xl sm:text-2xl text-slate-700 font-light leading-relaxed max-w-xl">
              Transform hip fracture from a life-threatening event to a manageable episode.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#hipbeacon"
                className="px-9 py-4 rounded-full bg-[#0b3856] hover:bg-[#0284c7] text-white text-base sm:text-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Experience the HIPbeacon</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#hip-fracture"
                className="px-7 py-4 rounded-full bg-slate-50 hover:bg-slate-100 text-[#0b3856] text-base sm:text-lg font-medium border border-slate-200 transition-all flex items-center gap-2"
              >
                <span>Clinical Challenge</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            </div>

            {/* Micro Stats Row in Larger Readable Sizes */}
            <div className="mt-12 pt-8 border-t border-slate-200 w-full grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#0a2540]">22%</div>
                <div className="text-sm sm:text-base text-slate-600 font-light mt-1">Mortality reduction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#0284c7]">&lt; 60s</div>
                <div className="text-sm sm:text-base text-slate-600 font-light mt-1">Surgical overhead</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#0a2540]">100%</div>
                <div className="text-sm sm:text-base text-slate-600 font-light mt-1">Patient compliance</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Large Senior Image & Formatted Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative"
          >
            {/* Senior Photographic Anchor */}
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] flex justify-center items-center">
              <img 
                src="/real_bios/real_senior_walking.jpg" 
                alt="Active senior walking happily after hip fracture recovery with HIPbeacon" 
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Formatted Trust Ribbon: FDA + Innosuisse + Venture Leaders */}
            <div className="w-full max-w-[560px] mt-6 p-5 rounded-2xl bg-slate-50/90 border border-slate-200 shadow-xs flex items-center justify-between gap-6">
              {/* FDA */}
              <div className="flex-1 flex justify-center border-r border-slate-200 pr-4">
                <img 
                  src="/bios_assets/bios_img_06.png" 
                  alt="FDA Breakthrough Device Designation" 
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>

              {/* Innosuisse */}
              <div className="flex-1 flex flex-col items-center justify-center border-r border-slate-200 pr-4 text-center">
                <span className="text-[11px] uppercase font-semibold text-slate-500 leading-tight mb-1">
                  Supported by
                </span>
                <img 
                  src="/bios_assets/bios_img_08.png" 
                  alt="Innosuisse - Swiss Innovation Agency" 
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              {/* Venture Leaders */}
              <div className="flex-1 flex justify-center">
                <img 
                  src="/bios_assets/bios_img_16.png" 
                  alt="Venture Leaders MedTech" 
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
