import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity } from 'lucide-react';

export const EvidenceHeritage: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'trajectory' | 'economics'>('trajectory');

  return (
    <section id="evidence" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-900 bg-white">
      
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-14 sm:mb-18"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f0f7fc] border border-[#d0e5f5] text-[#0284c7] text-sm font-medium tracking-wide mb-5">
          <Activity className="w-4 h-4" />
          <span>Scientific Clinical Proof</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0a2540] tracking-normal">
          Clinical Evidence & <span className="font-semibold text-[#0284c7]">Swiss Heritage</span>
        </h2>
        <p className="mt-4 text-xl sm:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
          Peer-reviewed biomechanical publications and economic impact models from biosmedical.care.
        </p>

        {/* Tab Buttons */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveChart('trajectory')}
              className={`px-7 py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer ${
                activeChart === 'trajectory'
                  ? 'bg-[#0b3856] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Mobility Recovery Trajectory
            </button>
            <button
              onClick={() => setActiveChart('economics')}
              className={`px-7 py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer ${
                activeChart === 'economics'
                  ? 'bg-[#0b3856] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Healthcare Economic Impact
            </button>
          </div>
        </div>
      </motion.div>

      {/* Formatted Chart Showcase with Larger Typography */}
      <motion.div
        key={activeChart}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto mb-20 p-8 sm:p-12 rounded-3xl border border-slate-200 bg-[#f8fafc] shadow-sm"
      >
        {activeChart === 'trajectory' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Chart Image */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center justify-center">
              <img 
                src="/bios_assets/bios_img_15.png" 
                alt="Mobility vs Time Recovery Trajectory Curve" 
                className="w-full h-auto max-h-[380px] object-contain"
              />
              <span className="text-xs text-slate-400 mt-3 text-center">
                Mobility vs. Time Trajectory Curve — biosmedical.care
              </span>
            </div>

            {/* Clinical Explanation Key */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold text-[#0284c7] uppercase tracking-wider">
                Clinical Trajectory Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0a2540]">
                Restoring Independence vs. Decline
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                Continuous in-vivo telemetry replaces subjective guesswork with real-time biofeedback, guiding patients safely along the optimal recovery pathway:
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-sm font-semibold text-emerald-800 mb-1">
                    Green Curve: Monitored Early Recovery
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Telemetry-guided safe weight-bearing restores autonomous ambulation and return home.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    Mid Curve: Delayed Unmonitored Care
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Hesitant loading leads to permanent loss of independence and nursing home care.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-sm font-semibold text-slate-900 mb-1">
                    Black Curve: Prolonged Bed Rest
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Bed rest induces rapid muscle wasting, secondary complications, and high mortality.
                  </div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Economic Chart Image */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center justify-center">
              <img 
                src="/bios_assets/bios_img_10.png" 
                alt="Economic Cost Escalation 2010-2050" 
                className="w-full h-auto max-h-[380px] object-contain"
              />
              <span className="text-xs text-slate-400 mt-3 text-center">
                Healthcare System Economic Burden — biosmedical.care
              </span>
            </div>

            {/* Economic Context */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold text-[#0284c7] uppercase tracking-wider">
                Economic Escalation
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0a2540]">
                Direct Costs Rising to €4.1B+
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                Health economic publications demonstrate direct hip fracture treatment costs exploding from €614M to €4,149M by 2050, driven primarily by permanent institutional care.
              </p>

              <div className="p-5 rounded-2xl bg-[#f0f7fc] border border-[#d0e5f5]">
                <div className="text-sm font-semibold text-[#0a2540] mb-1.5">
                  Economic Countermeasure
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  HIPbeacon enables objective triage, accelerating safe acute discharge (-1.8 days) while preventing secondary nursing home dependency.
                </div>
              </div>
            </div>

          </div>
        )}
      </motion.div>

      {/* Swiss Heritage & Davos Innovation */}
      <div className="rounded-3xl border border-slate-200 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#f0f7fc]/60">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-medium">
            <MapPin className="w-4 h-4 text-[#0284c7]" />
            <span>Davos, Switzerland · Historic Orthopedic Cradle</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-light text-[#0a2540]">
            Founded in the Swiss Alps
          </h3>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            BIOS Medical AG is based in Davos, Switzerland — the birthplace of modern internal bone fixation. Supported by the Swiss Confederation (Innosuisse) and the Canton of Graubünden.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-3">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <img 
                src="/bios_assets/bios_img_02.png" 
                alt="Graubünden" 
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <img 
                src="/bios_assets/bios_img_21.png" 
                alt="Canton of Graubünden" 
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <img 
                src="/bios_assets/bios_img_08.png" 
                alt="Innosuisse" 
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-md rounded-2xl overflow-hidden shadow-md border border-white">
          <img
            src="/real_bios/davos_alps_hero.jpg"
            alt="Innovation Center Davos, Switzerland"
            className="w-full h-56 sm:h-64 object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default EvidenceHeritage;
