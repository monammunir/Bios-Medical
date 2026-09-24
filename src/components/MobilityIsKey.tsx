import React from 'react';
import { motion } from 'framer-motion';

export const MobilityIsKey: React.FC = () => {
  return (
    <section id="mobility" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f7fc] via-[#f8fafc] to-[#ffffff] overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Title in White and Blues */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#0a2540] tracking-normal">
            <span className="font-semibold text-[#0284c7]">MOBILITY</span> IS KEY
          </h2>

          <p className="mt-5 text-xl sm:text-2xl text-slate-700 font-light leading-relaxed max-w-3xl mx-auto">
            Orthogeriatric Co-Management (OGCM) combines various medical disciplines for improved patient rehabilitation. In the center of it all:{' '}
            <strong className="font-semibold text-[#0a2540]">MOBILIZATION</strong>.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Frosted Card with Large Readable Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg text-slate-800 flex flex-col justify-between"
          >
            <div>
              <p className="text-base sm:text-xl text-slate-700 leading-relaxed mb-8 font-light">
                Orthogeriatric Co-Management (OGCM) combines various medical disciplines for improved patient rehabilitation. In the center of it all:{' '}
                <span className="font-semibold text-[#0a2540]">MOBILIZATION</span>.
              </p>

              {/* OGCM Works Section */}
              <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#f0f7fc] border border-[#d0e5f5]">
                <h3 className="text-base sm:text-lg font-semibold text-[#0a2540] mb-3 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
                  <span>OGCM works</span>
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-slate-700 font-light pl-5">
                  <li className="list-disc">
                    <strong className="font-semibold text-slate-900">22% reduction</strong> of mortality reported
                  </li>
                  <li className="list-disc">
                    Increases chance to return home
                  </li>
                </ul>
              </div>

              {/* OGCM is Critically Resource-Intensive Section */}
              <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span>OGCM is critically resource-intensive</span>
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-slate-700 font-light pl-5">
                  <li className="list-disc">
                    Cost-prohibitive at scale
                  </li>
                  <li className="list-disc">
                    Most effective in selected cases
                  </li>
                </ul>
              </div>
            </div>

            {/* Learn More Button */}
            <div>
              <a
                href="#mobility-data"
                className="inline-block px-9 py-4 rounded-full bg-[#0b3856] hover:bg-[#0284c7] text-white text-base sm:text-lg font-medium transition-all shadow-md cursor-pointer"
              >
                Learn more ...
              </a>
            </div>
          </motion.div>

          {/* Right Column: Authentic Mobilization Mind-Map Graphic (bios_img_23.png) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex justify-center items-center p-2"
          >
            <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
              <img 
                src="/bios_assets/bios_img_23.png" 
                alt="Mobilization Orthogeriatric Clinical Disciplines Mind Map" 
                className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MobilityIsKey;
