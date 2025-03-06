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

const DualMarketStrategy = () => {
  return (
    <Slide title="Dual Market Strategy">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden"
      >
        {/* Hexagon Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Defense Section */}
          <motion.div
            variants={hexagonVariants}
            custom={0}
            className="w-full md:w-[350px]"
          >
            <div className="bg-white border border-blue-200 p-6">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 mb-4">
                DEFENSE_
              </h3>
              
              <div className="space-y-3">
                {[
                  'Property Accountability',
                  'Mission Readiness',
                  'Regulatory Compliance'
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-8 h-8 border border-blue-200 flex items-center justify-center font-mono text-blue-700">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600 font-sans mt-1.5">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Tech */}
          <motion.div
            variants={hexagonVariants}
            custom={1}
            className="w-full md:w-[200px]"
          >
            <div className="bg-gray-50 border border-gray-200 p-4 text-center">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-600">
                CORE_TECH
              </h3>
              <p className="text-xs text-gray-500 font-sans mt-2">
                Shared platform
              </p>
            </div>
          </motion.div>

          {/* Commercial Section */}
          <motion.div
            variants={hexagonVariants}
            custom={2}
            className="w-full md:w-[350px]"
          >
            <div className="bg-white border border-orange-200 p-6">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-orange-600 mb-4">
                COMMERCIAL_
              </h3>
              
              <div className="space-y-3">
                {[
                  'Supply Chain Transparency',
                  'Cash Flow Optimization',
                  'Supplier Management'
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-8 h-8 border border-orange-200 flex items-center justify-center font-mono text-orange-700">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600 font-sans mt-1.5">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Defense Market Card */}
          <motion.div
            variants={cardVariants}
            custom={0}
          >
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
          <motion.div
            variants={cardVariants}
            custom={1}
          >
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
        <motion.div
          variants={cardVariants}
          custom={2}
        >
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6">
              STRATEGIC ADVANTAGES_
            </h3>
            
            <div className="space-y-3">
              {[
                "Shared R&D costs across both markets create development efficiency",
                "Military credibility accelerates commercial trust and adoption",
                "Diverse revenue streams provide stability through market cycles",
                "Network effects between markets increase overall platform value"
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
