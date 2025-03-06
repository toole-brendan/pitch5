'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: custom * 0.1,
      duration: 0.5 
    }
  })
};

const CompetitiveLandscape: React.FC = () => {
  const competitors = [
    { 
      id: "us", 
      name: "Our Solution", 
      x: 0.85, 
      y: 0.85, 
      key_advantages: [
        "Dual market approach (defense & commercial)",
        "Blockchain verification for authenticity",
        "Mobile-first user experience",
        "Military-grade security & compliance"
      ],
      color: "bg-blue-600"
    },
    { 
      id: "comp1", 
      name: "Legacy ERP", 
      x: 0.2, 
      y: 0.3, 
      key_disadvantages: [
        "Expensive on-premise deployments",
        "Complex user interfaces",
        "Limited mobile capabilities",
        "High training requirements"
      ],
      color: "bg-gray-500"
    },
    { 
      id: "comp2", 
      name: "Blockchain Startups", 
      x: 0.7, 
      y: 0.4, 
      key_disadvantages: [
        "Lack of industry expertise",
        "Unproven in defense applications",
        "Limited integration capabilities",
        "High technical barriers to adoption"
      ],
      color: "bg-yellow-500"
    },
    { 
      id: "comp3", 
      name: "Traditional SCM", 
      x: 0.4, 
      y: 0.6, 
      key_disadvantages: [
        "Limited traceability capabilities",
        "Weak authentication mechanisms",
        "Poor adaptability to new requirements",
        "Generic solutions not tailored to specific needs"
      ],
      color: "bg-cyan-500"
    }
  ];

  const marketOpportunities = [
    {
      title: "Defense Sector",
      items: [
        "Military logistics modernization initiatives ($4.2B)",
        "Secure supply chain requirements for sensitive equipment",
        "Coalition interoperability standards compliance",
        "Foreign military sales authentication needs"
      ],
      color: "border-amber-700"
    },
    {
      title: "Commercial Sector",
      items: [
        "High-value retail goods authentication ($2.7B)",
        "Pharmaceutical supply chain compliance",
        "Aerospace parts certification",
        "Luxury goods verification"
      ],
      color: "border-cyan-600"
    }
  ];

  const differentiators = [
    {
      title: "Technical Superiority",
      description: "Patentable blockchain verification algorithms with 3x performance improvement",
      icon: "🔐"
    },
    {
      title: "Dual Market Strategy",
      description: "Unique positioning across defense and commercial markets with shared technology",
      icon: "🎯"
    },
    {
      title: "Domain Expertise",
      description: "Team with combined 35+ years of defense and supply chain experience",
      icon: "👥"
    },
    {
      title: "Compliance Excellence",
      description: "Built-in compliance with NIST, CMMC, and FDA regulatory requirements",
      icon: "✓"
    }
  ];

  return (
    <Slide title="Competitive Landscape">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Competition Matrix */}
          <div className="md:col-span-8">
            <h2 className="text-xl font-semibold font-mono uppercase tracking-wider mb-2">
              COMPETITIVE POSITIONING MATRIX_
            </h2>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-mono">
              Analysis based on technical capabilities and market-fit
            </p>
            
            <motion.div 
              variants={slideUp}
              custom={1}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-lg font-semibold font-mono uppercase tracking-wider">
                  TECHNOLOGY vs. MARKET FIT_
                </h3>
              </div>
              
              <div className="p-6 relative">
                <div className="relative w-full h-[400px] border-l-2 border-b-2 border-gray-300 dark:border-gray-600">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    {[25, 50, 75].map((pos) => (
                      <React.Fragment key={pos}>
                        <div className="absolute w-full h-px bg-gray-200 dark:bg-gray-700" style={{ top: `${pos}%` }} />
                        <div className="absolute h-full w-px bg-gray-200 dark:bg-gray-700" style={{ left: `${pos}%` }} />
                      </React.Fragment>
                    ))}
                  </div>
                  
                  {/* Axis Labels */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono font-semibold text-sm">
                    TECHNICAL CAPABILITY →
                  </span>
                  <span className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 font-mono font-semibold text-sm">
                    MARKET FIT →
                  </span>
                  
                  {/* Quadrant Labels */}
                  <span className="absolute top-[15%] left-[15%] text-xs text-gray-500 dark:text-gray-400 font-mono opacity-70">
                    LOW CAPABILITY / LOW FIT
                  </span>
                  <span className="absolute top-[15%] right-[10%] text-xs text-gray-500 dark:text-gray-400 font-mono opacity-70 text-right">
                    HIGH CAPABILITY / LOW FIT
                  </span>
                  <span className="absolute bottom-[10%] left-[15%] text-xs text-gray-500 dark:text-gray-400 font-mono opacity-70">
                    LOW CAPABILITY / HIGH FIT
                  </span>
                  <span className="absolute bottom-[10%] right-[10%] text-xs text-gray-500 dark:text-gray-400 font-mono opacity-70 text-right">
                    HIGH CAPABILITY / HIGH FIT
                  </span>
                  
                  {/* Competitors */}
                  {competitors.map((competitor, index) => (
                    <motion.div
                      key={competitor.id}
                      variants={slideUp}
                      custom={index + 3}
                      whileHover={{ scale: 1.1 }}
                      className={`absolute ${competitor.color} ${competitor.id === 'us' ? 'w-[100px] h-[100px] border-4 border-white dark:border-gray-800' : 'w-20 h-20'} rounded-full flex items-center justify-center text-center text-white font-semibold text-sm font-mono shadow-lg cursor-pointer p-2 leading-tight z-10`}
                      style={{
                        top: `${(1 - competitor.y) * 100}%`,
                        left: `${competitor.x * 100}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {competitor.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Our Advantages */}
          <div className="md:col-span-4">
            <h2 className="text-xl font-semibold font-mono uppercase tracking-wider mb-2">
              OUR ADVANTAGES_
            </h2>
            
            <div className="bg-blue-50/50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <h3 className="font-mono text-blue-600 dark:text-blue-400 mb-2 font-semibold">
                KEY ADVANTAGES:
              </h3>
              
              <div className="space-y-2">
                {competitors.find(c => c.id === 'us')?.key_advantages?.map((advantage, index) => (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    custom={index + 5}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-600" />
                    <p className="text-sm">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <h2 className="text-xl font-semibold font-mono uppercase tracking-wider mb-2">
              COMPETITOR WEAKNESSES_
            </h2>
            
            <motion.div
              variants={slideUp}
              custom={9}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-4">
                {competitors.filter(c => c.id !== 'us').map((competitor, index) => (
                  <div key={competitor.id}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${competitor.color}`} />
                      <h4 className="font-mono font-semibold text-sm">
                        {competitor.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 ml-5">
                      {competitor.key_disadvantages?.[0]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Key Differentiators */}
          <div className="md:col-span-12">
            <h2 className="text-xl font-semibold font-mono uppercase tracking-wider mb-4">
              KEY DIFFERENTIATORS_
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  custom={index + 10}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{diff.icon}</span>
                    <h3 className="font-mono font-semibold text-sm">
                      {diff.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {diff.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Market Opportunities */}
          <div className="md:col-span-12">
            <h2 className="text-xl font-semibold font-mono uppercase tracking-wider mb-4">
              MARKET OPPORTUNITIES_
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {marketOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  custom={index + 14}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-4 border-t-4 ${opportunity.color}`}
                >
                  <h3 className={`text-lg font-mono font-semibold mb-4 ${opportunity.color.replace('border-', 'text-')}`}>
                    {opportunity.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {opportunity.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        <span className={`font-bold ${opportunity.color.replace('border-', 'text-')} mt-1`}>
                          ›
                        </span>
                        <p className="text-sm">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CompetitiveLandscape;
