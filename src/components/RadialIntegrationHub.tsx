import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { ArrowRight, Database, Activity, Server, Radio, Shield, Stethoscope, Cloud, Cpu, LineChart, FileSpreadsheet, Lock } from 'lucide-react';

interface IntegrationItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  row: 'top' | 'mid' | 'bot';
  side: 'left' | 'right';
}

export const RadialIntegrationHub: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>('epic');

  // Left Wing Items (EHR & Gateways) - Brand Blues (#0b3856 & #4e87ba)
  const leftItems: IntegrationItem[] = [
    // Top row
    { id: 'epic', name: 'Epic Systems', category: 'EHR Ingest', icon: <Database className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'top', side: 'left' },
    { id: 'cerner', name: 'Oracle Cerner', category: 'Hospital Record', icon: <Server className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'top', side: 'left' },
    { id: 'fhir', name: 'HL7 FHIR v4', category: 'Interoperability', icon: <Radio className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'top', side: 'left' },
    { id: 'baxter', name: 'Baxter Platform', category: 'Device Stream', icon: <Cpu className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'top', side: 'left' },

    // Mid row
    { id: 'mdeg', name: 'mdeg Swiss Cloud', category: 'GDPR / HIPAA', icon: <Cloud className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'mid', side: 'left' },
    { id: 'ble', name: 'Bedside RF Ingest', category: 'Wireless Telemetry', icon: <Radio className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'mid', side: 'left' },
    { id: 'pacs', name: 'DICOM / PACS', category: 'Radiology Archive', icon: <FileSpreadsheet className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'mid', side: 'left' },

    // Bot row
    { id: 'apple', name: 'Apple Health', category: 'Patient Portal', icon: <Activity className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'bot', side: 'left' },
    { id: 'aes', name: 'AES-256 Vault', category: 'Encrypted Stream', icon: <Lock className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'bot', side: 'left' },
    { id: 'cal', name: 'Cal Clinical Sync', category: 'Visit Scheduler', icon: <Stethoscope className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'bot', side: 'left' },
  ];

  // Right Wing Items (Registries & AI Analytics) - Brand Blues (#0b3856 & #4e87ba)
  const rightItems: IntegrationItem[] = [
    // Top row
    { id: 'ai-engine', name: 'BIOS AI Risk Engine', category: 'Predictive ML', icon: <Cpu className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'top', side: 'right' },
    { id: 'mobilise', name: 'Mobilise-D Registry', category: 'EU DMO Benchmark', icon: <LineChart className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'top', side: 'right' },
    { id: 'ao-data', name: 'AO Foundation DB', category: 'Fracture Trials', icon: <Database className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'top', side: 'right' },
    { id: 'avegen', name: 'Avegen Health', category: 'Remote Monitoring', icon: <Activity className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'top', side: 'right' },

    // Mid row
    { id: 'ward', name: 'OGCM Ward Tablet', category: 'Geriatric Rounding', icon: <Stethoscope className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'mid', side: 'right' },
    { id: 'telehealth', name: 'Telehealth Portal', category: 'Physician Review', icon: <Radio className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'mid', side: 'right' },
    { id: 'fall-model', name: 'Fall Hazard Engine', category: 'Asymmetry ML', icon: <Shield className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'mid', side: 'right' },

    // Bot row
    { id: 'api-gateway', name: 'REST Clinical API', category: 'Fast Ingest', icon: <Server className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'bot', side: 'right' },
    { id: 'audit', name: 'Audit Compliance', category: 'MDR / FDA Logs', icon: <Lock className="w-4.5 h-4.5 text-[#4e87ba]" />, row: 'bot', side: 'right' },
    { id: 'export', name: 'CSV / Parquet Export', category: 'Research Cohorts', icon: <FileSpreadsheet className="w-4.5 h-4.5 text-[#0b3856]" />, row: 'bot', side: 'right' },
  ];

  const renderBadge = (item: IntegrationItem, idx: number) => {
    const isHovered = hoveredId === item.id;
    return (
      <motion.button
        key={item.id}
        onMouseEnter={() => setHoveredId(item.id)}
        onClick={() => setHoveredId(item.id)}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-flex items-center gap-2.5 p-3 rounded-full border transition-all duration-300 cursor-pointer shadow-xs ${
          isHovered
            ? 'bg-white border-[#4e87ba] shadow-lg ring-2 ring-[#4e87ba]/20 z-30'
            : 'bg-white/95 hover:bg-white border-slate-200/90 text-slate-700'
        }`}
      >
        <div className="flex items-center justify-center shrink-0">
          {item.icon}
        </div>

        {/* Expanding pill title */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 overflow-hidden text-sm font-bold text-slate-900 whitespace-nowrap pr-1.5"
            >
              <span>{item.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0b3856] shrink-0" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    );
  };

  return (
    <section id="integration" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header with Slide from Top */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#4e87ba]/15 border border-[#4e87ba]/30 text-[#0b3856] text-sm font-bold mb-3">
          <TurbineLogo size={16} animate={true} />
          <span>INTEGRATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
          Seamlessly Integrate With All <br />
          <span className="text-[#0b3856]">Your Healthcare & Clinical Systems</span>
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
          Our implanted sensor telemetry integrates effortlessly with your hospital information systems and EHRs, ensuring a smooth and connected experience.
        </p>

        <div className="mt-6 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://bios.mdeg.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0b3856] hover:bg-[#0b3856]/90 text-white font-bold text-sm tracking-wide shadow-md shadow-[#0b3856]/25 transition-all group cursor-pointer"
          >
            <span>Learn More</span>
            <div className="w-5 h-5 rounded-full bg-white text-[#0b3856] flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* 
        Radial Canvas Layout:
        Center Rotating Blue Orb + Horizontal Branching Lines + Circular Badges that expand on hover!
      */}
      <div className="relative py-10 px-4 sm:px-8 max-w-6xl mx-auto flex items-center justify-center min-h-[360px]">
        
        {/* Subtle background connecting branch lines */}
        <div className="hidden lg:block absolute left-12 right-12 top-1/2 h-0.5 border-t-2 border-dashed border-[#4e87ba]/30 -translate-y-1/2 z-0" />
        <div className="hidden lg:block absolute left-24 right-24 top-[32%] h-0.5 border-t border-dashed border-[#4e87ba]/20 -translate-y-1/2 z-0" />
        <div className="hidden lg:block absolute left-24 right-24 top-[68%] h-0.5 border-t border-dashed border-[#4e87ba]/20 -translate-y-1/2 z-0" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Wing Rows (Slide from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-3.5 sm:space-y-5"
          >
            
            {/* Top Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
              {leftItems.filter(i => i.row === 'top').map((item, i) => renderBadge(item, i))}
            </div>

            {/* Middle Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
              {leftItems.filter(i => i.row === 'mid').map((item, i) => renderBadge(item, i + 4))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
              {leftItems.filter(i => i.row === 'bot').map((item, i) => renderBadge(item, i + 8))}
            </div>

          </motion.div>

          {/* Center Hub with Icon & Central Hub Pulsing Animation */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative my-4 lg:my-0">
            
            {/* Concentric ripple aura waves */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-36 h-36 rounded-full bg-[#4e87ba]/20 blur-md pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full bg-[#0b3856]/15 blur-sm pointer-events-none"
            />

            {/* Central Hub with animation */}
            <motion.div 
              animate={{ 
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 15px rgba(11,56,86,0.4), 0 0 35px rgba(78,135,186,0.2)",
                  "0 0 35px rgba(11,56,86,0.9), 0 0 70px rgba(78,135,186,0.6)",
                  "0 0 15px rgba(11,56,86,0.4), 0 0 35px rgba(78,135,186,0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full p-1.5 bg-gradient-to-tr from-[#0b3856] to-[#4e87ba]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl border-4 border-[#4e87ba]/30 p-2 flex items-center justify-center relative z-10 cursor-pointer"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#0b3856] via-[#0b3856] to-[#4e87ba] flex items-center justify-center text-white shadow-inner">
                  <TurbineLogo size={62} variant="white" glow={true} />
                </div>
              </motion.div>
            </motion.div>

            <span className="mt-2.5 px-3 py-0.5 rounded-full bg-[#0b3856] text-white text-[9px] font-black uppercase tracking-wider shadow-md">
              BIOS-Cloud
            </span>

          </div>

          {/* Right Wing Rows (Slide from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-3.5 sm:space-y-5"
          >
            {/* Top Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {rightItems.filter(i => i.row === 'top').map((item, i) => renderBadge(item, i + 12))}
            </div>

            {/* Middle Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {rightItems.filter(i => i.row === 'mid').map((item, i) => renderBadge(item, i + 16))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {rightItems.filter(i => i.row === 'bot').map((item, i) => renderBadge(item, i + 20))}
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
