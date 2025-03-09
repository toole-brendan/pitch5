'use client';

import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Motion variants remain unchanged
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
        <div className="relative w-full mb-8 md:mb-16">
          <div className="flex flex-col items-center gap-6 md:gap-12">
            {/* Defense Platform */}
            <motion.div
              variants={hexagonVariants}
              custom={0}
              className="w-full max-w-sm md:max-w-xs"
            >
              <div className="bg-white border border-blue-200 p-6 relative">
                <div className="absolute -top-3 left-10">
                  <span className="bg-blue-50 text-blue-800 text-xs tracking-widest font-mono py-1 px-3 border border-blue-200">
                    DEFENSE PLATFORM
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500">COMPONENTS</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Military-grade encryption</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Secure authentication</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Robust chain of custody</p>
                  </div>
                </div>
              </div>

              {/* Mobile Connection Line */}
              <div className="h-6 w-px bg-gray-200 mx-auto md:hidden"></div>
            </motion.div>

            {/* Shared Core */}
            <motion.div
              variants={hexagonVariants}
              custom={1}
              className="w-full max-w-sm md:max-w-lg relative z-20"
            >
              <div className="bg-white border border-purple-200 p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-50 text-purple-800 text-xs tracking-widest font-mono py-1.5 px-3 border border-purple-200 whitespace-nowrap">
                    SHARED INFRASTRUCTURE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">BLOCKCHAIN CORE</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <p className="text-sm text-gray-700">Smart contracts</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <p className="text-sm text-gray-700">Distributed ledger</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">DATA LAYER</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <p className="text-sm text-gray-700">Immutable records</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        />
                        <p className="text-sm text-gray-700">Asset tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Connection Line */}
              <div className="h-6 w-px bg-gray-200 mx-auto md:hidden"></div>
            </motion.div>

            {/* Commercial Platform */}
            <motion.div
              variants={hexagonVariants}
              custom={2}
              className="w-full max-w-sm md:max-w-xs"
            >
              <div className="bg-white border border-amber-200 p-6 relative">
                <div className="absolute -top-3 left-10">
                  <span className="bg-amber-50 text-amber-800 text-xs tracking-widest font-mono py-1 px-3 border border-amber-200">
                    COMMERCIAL PLATFORM
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500">COMPONENTS</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Payment processing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Supply chain tracking</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">Vendor management</p>
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
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      Lower Implementation Risk
                    </h4>
                    <p className="text-sm text-gray-600">
                      Stable, long-term contracts with predictable revenue
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-blue-200 flex items-center justify-center font-mono text-blue-700">
                    T
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      High Barriers to Entry
                    </h4>
                    <p className="text-sm text-gray-600">
                      Military expertise creates strong competitive moat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Commercial Market Card */}
          <motion.div variants={cardVariants} custom={1}>
            <div className="bg-white border border-amber-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-amber-400">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-amber-50 text-amber-800 text-xs tracking-widest font-mono uppercase py-1.5 px-3 border border-amber-200">
                  COMMERCIAL MARKET
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-amber-200 flex items-center justify-center font-mono text-amber-700">
                    $
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      Higher Growth Potential
                    </h4>
                    <p className="text-sm text-gray-600">
                      Larger addressable market with recurring revenue
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-amber-200 flex items-center justify-center font-mono text-amber-700">
                    T
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      Transaction Fee Upside
                    </h4>
                    <p className="text-sm text-gray-600">
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

            <div className="space-y-4">
              {[
                "Shared infrastructure reduces development and maintenance costs",
                "Military-grade security enhances commercial offering credibility",
                "Dual revenue streams provide stability through market cycles",
                "Network effects amplify value across both platforms"
              ].map((advantage, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="font-mono text-purple-600 mt-0.5">→</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
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