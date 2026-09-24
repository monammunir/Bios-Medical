import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Bluetooth, ShieldCheck, Cpu, Sparkles, BatteryCharging, CheckCircle2, ChevronRight } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const leftFeatures = [
    {
      title: 'Continuous (24/7) Monitoring',
      desc: 'Remote telemetry monitoring for 6-12 months post-op.',
      icon: <Clock className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: 'Reimbursable in US',
      desc: 'Reimbursable through Remote Patient Monitoring (RPM) codes.',
      icon: <DollarSign className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: 'Bluetooth Low-Energy',
      desc: 'Secure, low-power communication to ward and home gateways.',
      icon: <Bluetooth className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: 'Maintenance-Free Operation',
      desc: 'Zero charging, zero wires, zero patient interaction required.',
      icon: <BatteryCharging className="w-5 h-5 text-[#0284c7]" />
    }
  ];

  const rightFeatures = [
    {
      title: '100% Wearing Compliance',
      desc: 'Operates inside the implant — eliminating wearable abandonment.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: 'Permanent Implantation',
      desc: 'Engineered with biocompatible Grade 5 Titanium (Ti-6Al-4V).',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: 'Make Hip Nails Smart',
      desc: 'Compatible with standard intramedullary trauma implants.',
      icon: <Cpu className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: 'No Additional Surgery Required',
      desc: 'Integrated in under 60 seconds during the routine primary fixation.',
      icon: <Sparkles className="w-5 h-5 text-[#0284c7]" />
    }
  ];

  return (
    <section id="hipbeacon" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Title in White and Blues */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f0f7fc] border border-[#d0e5f5] text-[#0284c7] text-sm font-medium tracking-wide mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
            <span>Patented Orthopedic Innovation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0a2540] tracking-normal">
            The world's first <br className="hidden sm:inline" />
            <span className="font-semibold text-[#0284c7]">implanted hip mobility sensor</span>.
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Transforming conventional fracture fixation into an intelligent diagnostic sensor.
          </p>
        </motion.div>

        {/* 3-Column Balanced Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto mb-16">
          
          {/* Left Column: 4 Features with Larger Typography */}
          <div className="lg:col-span-4 space-y-4">
            {leftFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#0284c7]/50 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0a2540] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Intramedullary Titanium Nail Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative py-6"
          >
            {/* Soft Ambient Ice-Blue Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-[#e0f2fe]/50 blur-3xl" />
              <div className="w-80 h-80 rounded-full border border-[#0284c7]/20" />
            </div>

            <img 
              src="/bios_assets/bios_img_52.png" 
              alt="HIPbeacon Titanium Nail Implant Sensor" 
              className="relative z-10 h-80 sm:h-96 md:h-104 w-auto object-contain drop-shadow-xl"
            />

            <div className="mt-5 text-center z-10">
              <span className="px-5 py-2 rounded-full bg-[#f0f7fc] border border-[#d0e5f5] text-sm font-medium text-[#0a2540]">
                HIPbeacon™ Titanium Intramedullary Nail
              </span>
            </div>
          </motion.div>

          {/* Right Column: 4 Features with Larger Typography */}
          <div className="lg:col-span-4 space-y-4">
            {rightFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#0284c7]/50 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0a2540] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#0b3856] hover:bg-[#0284c7] text-white text-base sm:text-lg font-medium transition-all shadow-md cursor-pointer"
          >
            <span>Learn more ...</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
