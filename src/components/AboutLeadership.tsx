import React from 'react';
import { motion } from 'framer-motion';

export const AboutLeadership: React.FC = () => {
  const leadership = [
    {
      name: "Dr. Markus Windolf",
      role: "CEO & Co-Founder",
      credentials: "PhD Human Biology · MSc Mechanical Engineering",
      bio: "20 years in orthopedic biomechanics and medical device innovation. Inventor of the AO Fracture Monitor and the CE-marked Biphasic Plate. Recognized on Stanford University's list of the world's top 2% of scientists.",
      image: "/real_bios/markus_windolf_ceo.jpg"
    },
    {
      name: "Dr. Patrick Stepanek",
      role: "COO & Co-Founder",
      credentials: "PhD Flexible Robotics · MSc Applied Physics · MBA",
      bio: "Over 20 years of management leadership across Europe and North America. Passionate about addressing unmet med-tech needs through data-driven scalable solutions.",
      image: "/real_bios/patrick_stepanek_coo.jpg"
    },
    {
      name: "Viktor Varjas",
      role: "Senior Software Developer",
      credentials: "MSc Computer Science · BSc IT Engineering",
      bio: "10+ years specializing in medical device software engineering and IEC 62304 software life-cycles. Core software architect for embedded telemetry at the AO Research Institute Davos.",
      image: "/real_bios/viktor_varjas_dev.jpg"
    }
  ];

  const advisors = [
    { 
      name: "Prof. Dr. hc. mult. Robert Frigg", 
      role: "Chairman of Board, 41medical AG · Former CTO Synthes Inc.",
      image: "/real_bios/real_board_member_1.jpg"
    },
    { 
      name: "Prof. Dr. med. MBA Benedikt Braun", 
      role: "Managing Senior Physician, Reconstructive Surgery, BG Klinik Tübingen",
      image: "/real_bios/real_board_member_2.jpg"
    },
    { 
      name: "Dr. Bernd Grimm, PhD", 
      role: "Group Leader Human Motion & Digital Methods, Luxembourg Institute of Health",
      image: "/real_bios/real_board_member_3.jpg"
    },
    { 
      name: "Prof. Dr. med. Michael Schütz", 
      role: "Director Jamieson Trauma Institute · Former Director Charité Berlin",
      image: "/real_bios/real_board_member_4.jpg"
    },
    { 
      name: "Dr. Bernd Robioneck", 
      role: "Former VP Global R&D Stryker Trauma & Extremities",
      image: null
    },
    { 
      name: "Prof. Kenneth A. Egol, MD", 
      role: "Vice Chairman & Professor Orthopedic Trauma, NYU Langone Health",
      image: null
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white text-slate-900">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0a2540] tracking-normal">
          Leadership & <span className="font-semibold text-[#0284c7]">Advisory Board</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 font-light">
          BIOS Medical AG · Davos, Switzerland
        </p>
      </motion.div>

      {/* Leadership 3 Cards Grid with Larger Readable Typography */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {leadership.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-xs hover:border-[#0284c7] transition-colors"
          >
            <div>
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-2xs">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-slate-900">{member.name}</h3>
              <div className="text-sm sm:text-base font-medium text-[#0284c7] mt-0.5 mb-1">{member.role}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-light mb-4">{member.credentials}</div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advisory Board Grid */}
      <div className="rounded-3xl border border-slate-200 p-8 sm:p-12 bg-slate-50/60">
        <h3 className="text-2xl sm:text-3xl font-light text-[#0a2540] mb-8">
          Scientific Advisory Board
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advisors.map((advisor, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs"
            >
              {advisor.image ? (
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                  <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 text-sm font-semibold">
                  {advisor.name.charAt(0)}
                </div>
              )}
              <div>
                <div className="text-base sm:text-lg font-normal text-slate-900 leading-snug mb-1">
                  {advisor.name}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  {advisor.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutLeadership;
