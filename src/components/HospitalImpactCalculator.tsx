import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { 
  Calculator, 
  Bed, 
  TrendingDown, 
  ShieldCheck, 
  Heart, 
  ArrowRight,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';

export const HospitalImpactCalculator: React.FC = () => {
  const [cases, setCases] = useState<number>(350);
  const [bedCost, setBedCost] = useState<number>(1100);
  const [currency, setCurrency] = useState<'EUR' | 'CHF' | 'USD'>('CHF');

  // Evidence-based coefficients from AO Foundation & OGCM studies:
  // 1.8 days average length of stay (LOS) reduction
  const bedDaysSaved = Math.round(cases * 1.8);
  // Total economic hospital cost reduction
  const totalSavings = Math.round(bedDaysSaved * bedCost);
  // Prevented 30-day complications & emergency readmissions (~8% of cohort)
  const preventedReadmissions = Math.round(cases * 0.08);
  // 22% reduction on 1-year mortality (baseline ~25% mortality = ~5.5% absolute lives saved)
  const estimatedLivesProtected = Math.round(cases * 0.055);

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'CHF' ? 'CHF ' : '$';

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4e87ba]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4e87ba]/15 border border-[#4e87ba]/30 text-[#0b3856] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 shadow-2xs">
          <TurbineLogo size={15} animate={true} />
          <span>HEALTH ECONOMICS & HOSPITAL VALUE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Interactive Clinical & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b3856] via-[#1a689a] to-[#4e87ba]">
            Economic Impact Calculator
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Estimate the bed-capacity expansion, cost reduction, and lives protected when deploying HIPbeacon™ in your orthopedic trauma and geriatric wards.
        </p>
      </div>

      {/* Calculator Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Interactive Sliders Panel (lg:col-span-6) */}
        <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6">
          
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#0b3856]" />
                <h3 className="text-lg font-bold text-slate-900">Hospital Parameters</h3>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full text-xs font-bold">
                {(['CHF', 'EUR', 'USD'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      currency === c ? 'bg-[#0b3856] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Annual Hip Fracture Cases */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-800">
                  Annual Hip Fracture Admissions
                </label>
                <span className="text-lg font-black font-heading text-[#0b3856] bg-[#4e87ba]/15 px-3 py-1 rounded-xl border border-[#4e87ba]/30">
                  {cases} Patients / Year
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={cases}
                onChange={(e) => setCases(Number(e.target.value))}
                className="w-full accent-[#0b3856] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>50 (Regional Clinic)</span>
                <span>500 (Cantonal Hospital)</span>
                <span>1,500 (Major University Center)</span>
              </div>
            </div>

            {/* Slider 2: Average Ward Bed-Day Cost */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-800">
                  Average Inpatient Bed-Day Cost
                </label>
                <span className="text-lg font-black font-heading text-[#0b3856] bg-[#4e87ba]/15 px-3 py-1 rounded-xl border border-[#4e87ba]/30">
                  {currencySymbol}{bedCost.toLocaleString()} / Day
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="2200"
                step="50"
                value={bedCost}
                onChange={(e) => setBedCost(Number(e.target.value))}
                className="w-full accent-[#0b3856] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>{currencySymbol}600</span>
                <span>{currencySymbol}1,100 (Swiss Standard)</span>
                <span>{currencySymbol}2,200 (Acute Intensive)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Model based on European AO OGCM trial publications</span>
            <span className="font-bold text-[#1a689a]">LOS Coefficient: 1.8d</span>
          </div>

        </div>

        {/* Right Computed Value Showcase (lg:col-span-6) */}
        <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#072438] via-[#0b3856] to-[#1a689a] text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#4e87ba_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8ec3eb]">
                PROJECTED CLINICAL & ECONOMIC VALUE
              </span>
              <div className="text-4xl sm:text-5xl font-black font-heading tracking-tight mt-1">
                {currencySymbol}{totalSavings.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Estimated Annual Bed-Cost Reduction across your orthogeriatric service
              </p>
            </div>

            {/* 3 Metric Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <Bed className="w-5 h-5 text-[#38bdf8] mb-2" />
                <div className="text-2xl font-black font-heading text-white">{bedDaysSaved}</div>
                <div className="text-[11px] text-slate-200 mt-0.5">Bed-Days Saved Per Year</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <TrendingDown className="w-5 h-5 text-[#38bdf8] mb-2" />
                <div className="text-2xl font-black font-heading text-white">{preventedReadmissions}</div>
                <div className="text-[11px] text-slate-200 mt-0.5">Complications Avoided</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <Heart className="w-5 h-5 text-[#38bdf8] mb-2" />
                <div className="text-2xl font-black font-heading text-white">~{estimatedLivesProtected}</div>
                <div className="text-[11px] text-slate-200 mt-0.5">Lives Protected (OGCM)</div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>Full health-economic publication dossier available</span>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#0b3856] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <span>Request Hospital ROI Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
