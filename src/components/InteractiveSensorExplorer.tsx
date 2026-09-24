import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { 
  Cpu, 
  ShieldCheck, 
  Radio, 
  BatteryCharging, 
  Clock, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface FeaturePoint {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  detail: string;
  specs: { label: string; value: string }[];
}

export const InteractiveSensorExplorer: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('insertion');

  const features: FeaturePoint[] = [
    {
      id: 'insertion',
      title: 'Sub-Minute Surgical Insertion',
      shortDesc: 'Seamless integration alongside routine fracture hardware',
      icon: <Clock className="w-5 h-5 text-[#4e87ba]" />,
      detail: 'HIPbeacon™ is designed to respect the surgeon\'s time in the operating room. It is inserted via the standard primary surgical incision alongside standard cephalomedullary nails or cannulated screws in under 60 seconds, requiring zero extra incisions or surgical complexity.',
      specs: [
        { label: 'OR Insertion Time', value: '< 60 Seconds' },
        { label: 'Additional Incision', value: '0 mm (None)' },
        { label: 'Hardware Compatibility', value: 'Standard Nails & Plates' }
      ]
    },
    {
      id: 'housing',
      title: 'Biocompatible Titanium Grade 5',
      shortDesc: 'Hermetically laser-welded Ti-6Al-4V enclosure',
      icon: <ShieldCheck className="w-5 h-5 text-[#4e87ba]" />,
      detail: 'Constructed from medical-grade Ti-6Al-4V titanium alloy, the hermetic casing is engineered for active in-vivo deployment of 24+ months without tissue reaction, foreign body response, or degradation.',
      specs: [
        { label: 'Material', value: 'Grade 5 Ti-6Al-4V' },
        { label: 'Biocompatibility', value: 'ISO 10993 Certified' },
        { label: 'Implant Duration', value: '24+ Months Active' }
      ]
    },
    {
      id: 'telemetry',
      title: 'Sub-GHz Active Telemetry',
      shortDesc: 'Tissue-penetrating ultra-low-power radiofrequency',
      icon: <Radio className="w-5 h-5 text-[#4e87ba]" />,
      detail: 'Traditional Bluetooth fails to transmit effectively through human muscle and tissue. HIPbeacon utilizes proprietary sub-GHz RF telemetry to passively transmit encrypted biomechanical data to bedside gateways up to 5 meters away.',
      specs: [
        { label: 'Frequency Band', value: 'Medical Sub-GHz' },
        { label: 'Transmission Range', value: 'Up to 5 Meters' },
        { label: 'Data Encryption', value: 'AES-256 GCM' }
      ]
    },
    {
      id: 'battery',
      title: '730+ Days Micro-Power',
      shortDesc: 'Zero patient charging or maintenance required',
      icon: <BatteryCharging className="w-5 h-5 text-[#4e87ba]" />,
      detail: 'Geriatric hip fracture patients frequently suffer from delirium or cognitive decline and cannot manage external wearable chargers or skin patches. HIPbeacon operates autonomously with continuous streaming for over 2 years.',
      specs: [
        { label: 'Battery Lifespan', value: '730+ Days (2+ Years)' },
        { label: 'Patient Compliance', value: '100% (Zero Burden)' },
        { label: 'Thermal Impact', value: '< 0.05°C (Negligible)' }
      ]
    },
    {
      id: 'biomechanics',
      title: '6-DOF Biomechanical Array',
      shortDesc: 'Direct physical load & gait kinetics measurement',
      icon: <Cpu className="w-5 h-5 text-[#4e87ba]" />,
      detail: 'Measures continuous 3-axis linear acceleration and angular velocity at the fracture site. Translates micro-strain and axial loading into Digital Mobility Outcomes (gait velocity, cadence, step count, sit-to-stand transitions).',
      specs: [
        { label: 'Sensor Architecture', value: '6-DOF Inertial Array' },
        { label: 'Gait Velocity Accuracy', value: '±0.03 m/s vs. Vicon' },
        { label: 'Sampling Rate', value: 'Dynamic Adaptive 50Hz' }
      ]
    }
  ];

  const activeFeature = features.find(f => f.id === activeFeatureId) || features[0];

  return (
    <section id="sensor-explorer" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#4e87ba]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#0b3856]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4e87ba]/15 border border-[#4e87ba]/30 text-[#0b3856] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 shadow-2xs">
          <TurbineLogo size={15} animate={true} />
          <span>HARDWARE & SURGICAL INTEGRATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          HIPbeacon™ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b3856] via-[#1a689a] to-[#4e87ba]">
            The World's First Implanted Hip Sensor
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Engineered in Davos, Switzerland to bridge the critical post-operative gap. Placed in under 60 seconds with standard orthopedic fracture hardware, operating continuously for 2+ years.
        </p>
      </div>

      {/* Interactive Main Visual & Specs Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl relative overflow-hidden">
        
        {/* Left: Interactive Hardware Visual & Hotspots (lg:col-span-6) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-900 via-[#072438] to-[#0b3856] rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px] text-white shadow-2xl">
          
          {/* Background Technical Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#4e87ba_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          
          {/* Luminous Center Ring Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#4e87ba]/25 blur-3xl animate-pulse pointer-events-none" />

          {/* Floating Titanium Sensor Image with dynamic rotation */}
          <motion.div
            key={activeFeatureId}
            initial={{ scale: 0.92, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full max-w-xs flex flex-col items-center"
          >
            <img 
              src="/real_bios/hipbeacon_implant_sensor.png" 
              alt="HIPbeacon Titanium Implant Sensor" 
              className="w-48 sm:w-60 h-auto object-contain drop-shadow-[0_20px_40px_rgba(78,135,186,0.45)]"
            />
            
            <div className="mt-4 text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-slate-200">
                EU MDR 2017/745 Class IIb · Active Implant
              </span>
            </div>
          </motion.div>

          {/* OR Integration Tag */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 font-mono border-t border-white/10 pt-3 z-10">
            <span>Standard Cephalomedullary Nail Compatible</span>
            <span className="text-[#38bdf8] font-bold">Davos MedTech</span>
          </div>

        </div>

        {/* Right: Feature Selector Tabs & In-depth Details (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          {/* Feature Selector Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {features.map((feature) => {
              const isSelected = activeFeatureId === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeatureId(feature.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0b3856] text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-[#4e87ba]/15 hover:text-[#0b3856]'
                  }`}
                >
                  {feature.icon}
                  <span>{feature.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Detail Card with Smooth Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4e87ba]/15 text-[#0b3856] flex items-center justify-center shrink-0">
                  {activeFeature.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    {activeFeature.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#1a689a]">
                    {activeFeature.shortDesc}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeFeature.detail}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeFeature.specs.map((spec, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {spec.label}
                    </span>
                    <span className="text-sm sm:text-base font-black text-[#0b3856] font-heading mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Action Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-[#4e87ba]" />
              <span>Zero extra OR incision · 100% passive telemetry</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0b3856] hover:text-[#4e87ba] transition-colors group cursor-pointer"
            >
              <span>Request Surgical Specs Dossier</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
