import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { 
  Stethoscope, 
  Activity, 
  Home, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

interface Step {
  id: number;
  phase: string;
  title: string;
  timeframe: string;
  badge: string;
  icon: React.ReactNode;
  summary: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  image: string;
}

export const PatientJourneyStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      phase: "PHASE 01",
      title: "Seamless OR Insertion",
      timeframe: "Surgical Day 0",
      badge: "Operating Room",
      icon: <Stethoscope className="w-5 h-5 text-[#4e87ba]" />,
      summary: "Placed in under 60 seconds directly adjacent to fracture fixation hardware during the routine primary surgery. Zero extra surgical incisions, zero fluoroscopy extension, and zero workflow disruption.",
      highlights: [
        "Compatible with standard cephalomedullary nails & plates",
        "Hermetic titanium Grade 5 casing certified for 2+ years",
        "Automatic zero-configuration wireless pairing with ward gateways"
      ],
      metricLabel: "SURGICAL OVERHEAD",
      metricValue: "< 60 Sec",
      metricSub: "Zero extra incisions",
      image: "/real_bios/real_operating_room_surgery.jpg"
    },
    {
      id: 2,
      phase: "PHASE 02",
      title: "Acute Ward Mobilization",
      timeframe: "Post-Op Days 1 – 5",
      badge: "Orthogeriatric Ward",
      icon: <Activity className="w-5 h-5 text-[#4e87ba]" />,
      summary: "Bed rest precipitates rapid muscle atrophy (up to 1.5% per day) and acute delirium. HIPbeacon streams continuous gait velocity and axial load to the ward dashboard, enabling safe, confident early weight-bearing.",
      highlights: [
        "Real-time gait speed (m/s) and step cadence telemetry",
        "Biomechanical feedback verifies hardware mechanical stability under load",
        "Enables Orthogeriatric Co-Management (OGCM) early protocol"
      ],
      metricLabel: "MORTALITY IMPACT",
      metricValue: "-22%",
      metricSub: "1-year mortality reduction",
      image: "/real_bios/real_patient_bedside.jpg"
    },
    {
      id: 3,
      phase: "PHASE 03",
      title: "Uninterrupted Home Telemetry",
      timeframe: "Weeks 2 – 12",
      badge: "Home Recovery",
      icon: <Home className="w-5 h-5 text-[#4e87ba]" />,
      summary: "Traditional wearables suffer from 50%+ patient non-compliance due to cognitive decline or forgetfulness. HIPbeacon transmits passively through home gateways with 100% patient adherence and zero charging hassle.",
      highlights: [
        "100% adherence: no skin adhesive patches, no batteries to recharge",
        "Continuous Digital Mobility Outcomes (DMO) sent to BIOS-Cloud",
        "Peace of mind for families and remote geriatric care teams"
      ],
      metricLabel: "PATIENT ADHERENCE",
      metricValue: "100%",
      metricSub: "Zero wearable compliance drop",
      image: "/real_bios/real_senior_walking.jpg"
    },
    {
      id: 4,
      phase: "PHASE 04",
      title: "Proactive Complication Safety",
      timeframe: "Months 3 – 24",
      badge: "Long-Term Autonomy",
      icon: <HeartHandshake className="w-5 h-5 text-[#4e87ba]" />,
      summary: "Surgeons and care teams maintain continuous oversight. Algorithmic alerts detect micro-antalgic limping, hardware loosening, or sudden mobility drops before secondary fractures or catastrophic nursing home admissions occur.",
      highlights: [
        "Early warning flags prevent emergency hospital readmissions",
        "Average 1.8 hospital bed-days saved per hip fracture case",
        "Restores patient autonomy and independent living"
      ],
      metricLabel: "BED DAYS SAVED",
      metricValue: "1.8 Days",
      metricSub: "Average reduction in hospital stay",
      image: "/real_bios/real_doctor_senior_mobility.jpg"
    }
  ];

  const currentStep = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b3856]/10 border border-[#0b3856]/20 text-[#0b3856] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
          <TurbineLogo size={14} animate={true} />
          <span>END-TO-END CLINICAL CARE LOOP</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          The 4-Step Recovery Journey <br />
          <span className="text-[#0b3856]">
            From OR Implantation to Restored Independence
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          HIPbeacon™ bridges the acute hospital stay and post-discharge recovery, giving multidisciplinary teams continuous objective data to guide personalized rehabilitation.
        </p>
      </div>

      {/* Interactive Step Switcher Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#0b3856] text-white border-[#0b3856] shadow-xl scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#4e87ba]/50 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold ${isActive ? 'text-sky-300' : 'text-slate-400'}`}>
                  {step.phase}
                </span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {step.timeframe}
                </span>
              </div>

              <div>
                <h4 className={`text-sm sm:text-base font-bold font-heading line-clamp-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h4>
                <div className={`text-xs mt-1 ${isActive ? 'text-[#8ec3eb]' : 'text-[#4e87ba] font-semibold'}`}>
                  {step.badge}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card with Real Photo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Details (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0b3856] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0b3856]/20">
                {currentStep.icon}
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#1a689a]">
                  {currentStep.phase} · {currentStep.timeframe}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  {currentStep.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {currentStep.summary}
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-2.5 pt-2">
              {currentStep.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4e87ba]/15 text-[#0b3856] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0b3856]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#0b3856] hover:bg-[#0b3856]/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Request Clinical Protocol</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Photographic Outcome Card (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Real Photo from biosmedical.care */}
            <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52 w-full shadow-lg border border-slate-200">
              <img 
                src={currentStep.image} 
                alt={currentStep.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-sky-300">
                  {currentStep.badge}
                </span>
                <div className="text-sm font-bold text-white">{currentStep.title}</div>
              </div>
            </div>

            {/* Stat Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#072438] via-[#0b3856] to-[#1a689a] text-white shadow-xl relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-widest text-[#86b5de]">
                {currentStep.metricLabel}
              </div>
              <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight mt-1">
                {currentStep.metricValue}
              </div>
              <p className="text-xs text-slate-200 mt-1 font-medium">
                {currentStep.metricSub}
              </p>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default PatientJourneyStepper;
