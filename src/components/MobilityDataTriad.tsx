import React from 'react';
import { motion } from 'framer-motion';

export const MobilityDataTriad: React.FC = () => {
  return (
    <section id="mobility-data" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#dbe8f2] via-[#e8f2f8] to-[#f4f8fb] text-slate-900 overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title in White and Blues */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#0a2540] tracking-normal">
            <span className="font-semibold text-[#0284c7]">MOBILITY DATA</span> IS NEEDED
          </h2>

          <p className="mt-5 text-xl sm:text-2xl text-slate-700 font-light leading-relaxed">
            Meaningful, continuous and <strong className="font-semibold text-[#0a2540]">long-term</strong> mobility data is needed to ...
          </p>
        </motion.div>

        {/* The Graphic with Large, Clear, Readable Text Fitted Inside the 3 Sketched Ovals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto flex justify-center"
        >
          {/* SVG Vector Container Locking Text Perfectly Inside Each Sketched Oval */}
          <div className="w-full relative">
            <svg 
              viewBox="0 0 1141 435" 
              className="w-full h-auto block select-none drop-shadow-sm"
              style={{ overflow: 'visible' }}
            >
              {/* Authentic Graphic (select2.png) */}
              <image 
                href="/bios_assets/select2.png" 
                width="1141" 
                height="435" 
              />
              
              {/* Text 1: Fitted Inside Left Oval (Select) with Larger Font Size */}
              <foreignObject x="18" y="235" width="324" height="155">
                <div 
                  xmlns="http://www.w3.org/1999/xhtml" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    padding: '0 14px',
                    boxSizing: 'border-box'
                  }}
                >
                  <p 
                    style={{
                      fontFamily: "'Questrial', 'Inter', -apple-system, sans-serif",
                      fontSize: '17px',
                      lineHeight: '1.38',
                      color: '#0a2540',
                      fontWeight: 500,
                      margin: 0
                    }}
                  >
                    Identify patients benefiting most from comprehensive care and those being able to return to their previous life with minimal medical attention.
                  </p>
                </div>
              </foreignObject>

              {/* Text 2: Fitted Inside Center Oval (Personalize) with Larger Font Size */}
              <foreignObject x="408" y="290" width="328" height="135">
                <div 
                  xmlns="http://www.w3.org/1999/xhtml" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    padding: '0 16px',
                    boxSizing: 'border-box'
                  }}
                >
                  <p 
                    style={{
                      fontFamily: "'Questrial', 'Inter', -apple-system, sans-serif",
                      fontSize: '18px',
                      lineHeight: '1.4',
                      color: '#0a2540',
                      fontWeight: 500,
                      margin: 0
                    }}
                  >
                    Tailor the treatment to<br />the individual needs<br />of the patient.
                  </p>
                </div>
              </foreignObject>

              {/* Text 3: Fitted Inside Right Oval (Control) with Larger Font Size */}
              <foreignObject x="798" y="235" width="320" height="155">
                <div 
                  xmlns="http://www.w3.org/1999/xhtml" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    padding: '0 16px',
                    boxSizing: 'border-box'
                  }}
                >
                  <p 
                    style={{
                      fontFamily: "'Questrial', 'Inter', -apple-system, sans-serif",
                      fontSize: '18px',
                      lineHeight: '1.4',
                      color: '#0a2540',
                      fontWeight: 500,
                      margin: 0
                    }}
                  >
                    Monitor the treatment effectiveness<br />and adapt in a timely manner.
                  </p>
                </div>
              </foreignObject>
            </svg>
          </div>
        </motion.div>

        {/* Small Screen Mobile Fallback with Larger Typography */}
        <div className="grid grid-cols-1 gap-4 mt-8 sm:hidden text-center">
          <div className="p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs">
            <span className="text-sm font-semibold text-[#0284c7] uppercase tracking-wider block mb-1.5">Select</span>
            <p className="text-sm text-slate-800 font-light leading-relaxed">
              Identify patients benefiting most from comprehensive care and those being able to return to their previous life with minimal medical attention.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs">
            <span className="text-sm font-semibold text-[#0284c7] uppercase tracking-wider block mb-1.5">Personalize</span>
            <p className="text-sm text-slate-800 font-light leading-relaxed">
              Tailor the treatment to the individual needs of the patient.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs">
            <span className="text-sm font-semibold text-[#0284c7] uppercase tracking-wider block mb-1.5">Control</span>
            <p className="text-sm text-slate-800 font-light leading-relaxed">
              Monitor the treatment effectiveness and adapt in a timely manner.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobilityDataTriad;
