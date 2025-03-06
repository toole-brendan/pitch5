'use client';

import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

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

const hexagonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.15 + 0.4,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const DualMarketStrategy = () => {
  return (
    <Slide title="Dual Market Strategy">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden"
      >
        {/* Technical Diagram Section */}
        <div className="relative w-full mb-16 pt-12">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <motion.path
              variants={lineVariants}
              d="M200 150 L400 150"
              stroke="#e2e8f0"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
            <motion.path
              variants={lineVariants}
              d="M600 150 L800 150"
              stroke="#e2e8f0"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          <div className="flex items-center justify-between gap-8">
            {/* Defense Platform */}
            <motion.div
              variants={hexagonVariants}
              custom={0}
              className="w-64 relative z-10"
            >
              <div className="bg-white border border-blue-200 p-6">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 mb-4">
                  DEFENSE PLATFORM_
                </h3>
                <div className="space-y-2">
                  <p className="text-xs font-mono text-gray-500">VERIFIED COMPONENTS</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-xs text-gray-600">Military-grade encryption</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-xs text-gray-600">Secure authentication</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shared Core */}
            <motion.div
              variants={hexagonVariants}
              custom={1}
              className="w-96 relative z-20"
            >
              <div className="bg-white border border-gray-200 p-8">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-50 text-gray-600 text-xs tracking-widest font-mono py-1 px-3 border border-gray-200">
                    SHARED INFRASTRUCTURE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-500">BLOCKCHAIN CORE</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <p className="text-xs text-gray-600">Smart contracts</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <p className="text-xs text-gray-600">Distributed ledger</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-500">DATA LAYER</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <p className="text-xs text-gray-600">Immutable records</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        />
                        <p className="text-xs text-gray-600">Asset tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Commercial Platform */}
            <motion.div
              variants={hexagonVariants}
              custom={2}
              className="w-64 relative z-10"
            >
              <div className="bg-white border border-orange-200 p-6">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-orange-600 mb-4">
                  COMMERCIAL PLATFORM_
                </h3>
                <div className="space-y-2">
                  <p className="text-xs font-mono text-gray-500">VERIFIED COMPONENTS</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <p className="text-xs text-gray-600">Payment processing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <p className="text-xs text-gray-600">Supply chain tracking</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Defense Market Card */}
          <motion.div variants={cardVariants} custom={0}>
            <div className="bg-white border border-blue-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-50 text-blue-800 text-xs tracking-widest font-mono uppercase py-1.5 px-3 border border-blue-200">
                  DEFENSE MARKET
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-blue-200 flex items-center justify-center font-mono text-blue-700">
                    $
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gray-900 mb-1">
                      Lower Implementation Risk
                    </h4>
                    <p className="text-xs text-gray-600 font-sans">
                      Stable, long-term contracts with predictable revenue
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-blue-200 flex items-center justify-center font-mono text-blue-700">
                    T
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gray-900 mb-1">
                      High Barriers to Entry
                    </h4>
                    <p className="text-xs text-gray-600 font-sans">
                      Military expertise creates strong competitive moat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Commercial Market Card */}
          <motion.div variants={cardVariants} custom={1}>
            <div className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-orange-400">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-orange-50 text-orange-800 text-xs tracking-widest font-mono uppercase py-1.5 px-3 border border-orange-200">
                  COMMERCIAL MARKET
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-orange-200 flex items-center justify-center font-mono text-orange-700">
                    $
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gray-900 mb-1">
                      Higher Growth Potential
                    </h4>
                    <p className="text-xs text-gray-600 font-sans">
                      Larger addressable market with recurring revenue
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-orange-200 flex items-center justify-center font-mono text-orange-700">
                    T
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gray-900 mb-1">
                      Transaction Fee Upside
                    </h4>
                    <p className="text-xs text-gray-600 font-sans">
                      Exponential revenue growth through Shell token payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Advantages */}
        <motion.div variants={cardVariants} custom={2}>
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6">
              STRATEGIC ADVANTAGES_
            </h3>

            <div className="space-y-3">
              {[
                "Shared infrastructure reduces development and maintenance costs",
                "Military-grade security enhances commercial offering credibility",
                "Dual revenue streams provide stability through market cycles",
                "Network effects amplify value across both platforms"
              ].map((advantage, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="font-mono text-gray-400 mt-0.5">→</span>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default DualMarketStrategy;