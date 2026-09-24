import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Flower2, AlertTriangle, Home, ChevronRight } from 'lucide-react';

export const ClinicalChallenge: React.FC = () => {
  const stats = [
    {
      metric: '1.7M',
      sub: '(6.6M)',
      icon: <TrendingUp className="w-6 h-6 text-[#38bdf8]" />,
      text: 'hip fractures occur annually world-wide (6.6M by 2050).'
    },
    {
      metric: '25%',
      icon: <Flower2 className="w-6 h-6 text-[#38bdf8]" />,
      text: 'of patients die after hip fracture within the first year.'
    },
    {
      metric: '3-4x',
      icon: <AlertTriangle className="w-6 h-6 text-[#38bdf8]" />,
      text: 'increased mortality risk compared to the general population.'
    },
    {
      metric: '10-15%',
      icon: <Home className="w-6 h-6 text-[#38bdf8]" />,
      text: 'of hip fracture patients cannot return home.'
    }
  ];

  return (
    <section id="hip-fracture" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a2540] text-white overflow-hidden">
      
      {/* Background Soft Blue Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0284c7]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title in White and Electric Blue */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-normal text-white">
            Hip Fractures are <span className="text-[#38bdf8] font-normal">LIFE-THREATENING</span>
          </h2>
        </motion.div>

        {/* Central HIP FRACTURE with Branching Arcs */}
        <div className="text-center mb-12 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold tracking-widest text-slate-100 uppercase"
          >
            HIP <br /> FRACTURE
          </motion.div>

          {/* Curved Guidance Lines in Soft Cyan/White */}
          <div className="hidden md:block w-full max-w-3xl mx-auto h-14 my-3">
            <svg viewBox="0 0 800 60" className="w-full h-full stroke-[#38bdf8]/40 stroke-2 fill-none">
              <path d="M 400 5 Q 280 15 120 50" markerEnd="url(#arrow-blue)" />
              <path d="M 400 5 Q 350 20 310 50" markerEnd="url(#arrow-blue)" />
              <path d="M 400 5 Q 450 20 490 50" markerEnd="url(#arrow-blue)" />
              <path d="M 400 5 Q 520 15 680 50" markerEnd="url(#arrow-blue)" />
              <defs>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" opacity="0.6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* 4 Stat Circles with Cards in Crisp Blue & White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Node in Soft Blue */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-3 border-[#38bdf8]/50 bg-[#0d3154] flex flex-col items-center justify-center p-3 mb-5 shadow-lg">
                <span className="text-3xl sm:text-4xl font-light text-white leading-tight">
                  {item.metric}
                </span>
                {item.sub && (
                  <span className="text-sm sm:text-base font-light text-[#38bdf8]">
                    {item.sub}
                  </span>
                )}
              </div>
              
              {/* Clean Frosted Card with Large Readable Typography */}
              <div className="w-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-left min-h-[150px] flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div className="mb-3">
                  {item.icon}
                </div>
                <p className="text-base sm:text-lg text-slate-100 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="#mobility"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-base sm:text-lg font-medium transition-all shadow-md cursor-pointer"
          >
            <span>Learn more ...</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ClinicalChallenge;
