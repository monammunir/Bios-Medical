import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { ClinicalChallenge } from '../components/ClinicalChallenge';
import { MobilityIsKey } from '../components/MobilityIsKey';
import { MobilityDataTriad } from '../components/MobilityDataTriad';
import { ProductShowcase } from '../components/ProductShowcase';
import { EvidenceHeritage } from '../components/EvidenceHeritage';
import { AboutLeadership } from '../components/AboutLeadership';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      {/* 1. Hero Section (Screenshot 1: "MY LIFE AFTER HIP-FRACTURE", active senior walking, FDA & Innosuisse badges) */}
      <HeroSection />

      {/* 2. Clinical Challenge (Screenshots 2 & 3: "Hip Fractures are LIFE-THREATENING" with 4 stat nodes & cards) */}
      <ClinicalChallenge />

      {/* 3. Orthogeriatric Mobilization (Screenshot 4: "MOBILITY IS KEY", OGCM facts & interactive radial mind map) */}
      <MobilityIsKey />

      {/* 4. The Telemetry Triad (Screenshot 5: "MOBILITY DATA IS NEEDED", Select · Personalize · Control) */}
      <MobilityDataTriad />

      {/* 5. Product Showcase (The world's first implanted hip mobility sensor, titanium nail & 8 official features) */}
      <ProductShowcase />

      {/* 6. Evidence & Swiss Heritage (Mobility trajectory curve, European cost escalation & Davos Alps) */}
      <EvidenceHeritage />

      {/* 8. Leadership & Scientific Advisory (Dr. Windolf, Dr. Stepanek, Viktor Varjas & Advisory Board) */}
      <AboutLeadership />

      {/* 9. Experience the HIPbeacon CTA */}
      <CtaBanner />
    </motion.div>
  );
};

export default HomePage;
