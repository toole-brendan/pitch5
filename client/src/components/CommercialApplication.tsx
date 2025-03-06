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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
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

const CommercialApplication = () => {
  return (
    <Slide title="Commercial Application">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden"
      >
        <div className="flex items-center mb-6">
          <span className="bg-orange-50 text-orange-800 text-xs tracking-widest font-mono uppercase py-1.5 px-3 border border-orange-200">
            COMMERCIAL SOLUTIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Key Features */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-8">
              KEY CAPABILITIES
            </h3>

            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                custom={1}
                className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-orange-200 flex items-center justify-center font-mono text-orange-700">
                    01
                  </div>
                  <h4 className="font-sans text-base text-gray-900 font-semibold tracking-wide">
                    Supply Chain Transparency
                  </h4>
                </div>

                <p className="text-sm text-gray-600 mb-4 font-sans">
                  Complete visibility from sourcing to end customer
                </p>

                <div className="space-y-3">
                  {[
                    "Authenticated chain of custody for every component and product",
                    "Real-time verification of authenticity and quality standards"
                  ].map((text, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="font-mono text-orange-400 mt-0.5">→</span>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariants}
                custom={2}
                className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-orange-200 flex items-center justify-center font-mono text-orange-700">
                    02
                  </div>
                  <h4 className="font-sans text-base text-gray-900 font-semibold tracking-wide">
                    Inventory Intelligence
                  </h4>
                </div>

                <p className="text-sm text-gray-600 mb-4 font-sans">
                  Data-driven inventory optimization with predictive capabilities
                </p>

                <div className="space-y-3">
                  {[
                    "Reduce inventory costs by up to 25% through just-in-time principles",
                    "Minimize stockouts and excess inventory with ML forecasting"
                  ].map((text, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="font-mono text-orange-400 mt-0.5">→</span>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardVariants}
                custom={3}
                className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-orange-200 flex items-center justify-center font-mono text-orange-700">
                    03
                  </div>
                  <h4 className="font-sans text-base text-gray-900 font-semibold tracking-wide">
                    Payment Automation
                  </h4>
                </div>

                <p className="text-sm text-gray-600 mb-4 font-sans">
                  Streamlined supplier payments with smart contract capabilities
                </p>

                <div className="space-y-3">
                  {[
                    "Reduce payment processing time from 30+ days to under 48 hours",
                    "Optional Shell token payments with near-zero transaction fees"
                  ].map((text, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="font-mono text-orange-400 mt-0.5">→</span>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Commercial Applications */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-8">
              COMMERCIAL APPLICATIONS
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "RETAIL INVENTORY MANAGEMENT",
                  description: "Retailers can track inventory across multiple locations with precise accuracy, automate reordering, and verify product authenticity instantly with QR code scanning."
                },
                {
                  title: "SUPPLIER MANAGEMENT",
                  description: "Supply chain managers can maintain immutable records of supplier performance metrics, dramatically simplify audits, and automate multi-tier supplier compliance verification."
                },
                {
                  title: "MANUFACTURING OPTIMIZATION",
                  description: "Factory operators can track in-process inventory, reduce waste through precise material tracking, and create transparent records for quality control and certifications."
                }
              ].map((application, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-orange-50 border border-orange-200 p-6 group transition-all duration-300 hover:bg-white hover:border-orange-400"
                >
                  <h4 className="font-mono text-sm text-gray-900 tracking-wide mb-3 group-hover:text-orange-700">
                    {application.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {application.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CommercialApplication;