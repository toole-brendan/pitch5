'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

const MotionDiv = motion.div;

const DefenseApplication: React.FC = () => {
  return (
    <Slide title="Defense Application">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full"
      >
        <div className="flex items-center gap-1 mb-8">
          <span className="bg-blue-50 text-blue-800 px-6 py-2.5 font-mono font-medium text-base border border-blue-200">
            MILITARY
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[calc(100%-48px)]">
          {/* Left Column: Key Features */}
          <div className="md:col-span-5">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] mb-6">
              KEY CAPABILITIES_
            </h2>
            
            <div className="grid gap-6 h-[calc(100%-40px)]">
              {[1, 2, 3].map((num, index) => (
                <MotionDiv
                  key={num}
                  variants={cardVariants}
                  custom={index + 1}
                >
                  <div className="bg-white border border-blue-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 text-blue-700 border border-blue-200 w-10 h-10 flex items-center justify-center font-mono font-bold flex-shrink-0">
                        {num}
                      </div>
                      <h3 className="text-base font-semibold tracking-wide">
                        {num === 1 && "Digital Hand Receipts"}
                        {num === 2 && "Inventory Accountability"}
                        {num === 3 && "Security & Compliance"}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      {num === 1 && "Replace paper forms with blockchain-backed digital records"}
                      {num === 2 && "Complete audit trail with immutable record-keeping"}
                      {num === 3 && "Military-grade security standards with full compliance"}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {num === 1 && (
                        <>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">&gt;</span>
                            <span className="text-xs font-mono text-gray-600">Eliminate lost paperwork, reducing property loss by 80%</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">&gt;</span>
                            <span className="text-xs font-mono text-gray-600">Tamper-proof signatures authenticated through DoD credentials</span>
                          </li>
                        </>
                      )}
                      {num === 2 && (
                        <>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">&gt;</span>
                            <span className="text-xs font-mono text-gray-600">Real-time property status visibility across command levels</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">&gt;</span>
                            <span className="text-xs font-mono text-gray-600">Reduce inventory time by 75% with QR code scanning</span>
                          </li>
                        </>
                      )}
                      {num === 3 && (
                        <>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">&gt;</span>
                            <span className="text-xs font-mono text-gray-600">FedRAMP, IL4 & IL5 compliant platform</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">&gt;</span>
                            <span className="text-xs font-mono text-gray-600">End-to-end encryption with zero-knowledge proofs</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
          
          {/* Right Column: Field Applications */}
          <div className="md:col-span-7">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] mb-6">
              FIELD APPLICATIONS_
            </h2>
            
            {['FORWARD DEPLOYMENT INVENTORY MANAGEMENT', 'READINESS REPORTING & ACCOUNTABILITY', 'SUPPLY CHAIN SECURITY'].map((title, index) => (
              <MotionDiv
                key={title}
                variants={cardVariants}
                custom={index + 4}
                className="mb-6 last:mb-0"
              >
                <div className="bg-blue-50 border border-blue-200 p-6 border-l-4 border-l-blue-600">
                  <h3 className="font-mono font-semibold text-blue-700 mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {index === 0 && "Streamlines equipment tracking for units in combat zones with limited connectivity through:"}
                    {index === 1 && "Enhances unit readiness with automated status reporting:"}
                    {index === 2 && "Ensures equipment authenticity and origin verification:"}
                  </p>
                  <ul className="space-y-2">
                    {index === 0 && (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Offline-capable mobile app with sync mechanism</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Secure transfer of responsibility during relief-in-place</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Reduced equipment loss rate by 87% in field tests</span>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Real-time equipment status tracking across all echelons</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Automated GCSS-Army integration for maintenance data</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">92% reduction in administrative overhead for readiness reporting</span>
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Cryptographic verification of equipment provenance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Counterfeit detection for critical parts and components</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">Tamper-evident supply chain with audit capabilities</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>
    </Slide>
  );
};

export default DefenseApplication;
