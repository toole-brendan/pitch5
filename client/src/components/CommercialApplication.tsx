'use client';

import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { SearchCode, BarChart3, CreditCard } from 'lucide-react';

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
    <Slide title="Commercial Application" withGridBackground>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden"
      >
        <div className="flex items-center mb-6">
          <span className="badge badge-amber">
            COMMERCIAL SOLUTIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Key Features */}
          <div>
            <div className="section-header mb-8">
              KEY CAPABILITIES
            </div>

            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                custom={1}
                className="enterprise-card border-amber-800/50 bg-gradient-to-br from-amber-900/20 to-black transition-all duration-300 hover:border-amber-600"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-square border-amber-700">
                    <SearchCode className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-white font-light text-lg">
                    Supply Chain Transparency
                  </h4>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  Complete visibility from sourcing to end customer
                </p>

                <div className="space-y-3">
                  {[
                    "Authenticated chain of custody for every component and product",
                    "Real-time verification of authenticity and quality standards"
                  ].map((text, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="font-mono text-amber-400 mt-0.5">→</span>
                      <p className="text-xs text-gray-400 leading-relaxed">
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
                className="enterprise-card border-amber-800/50 bg-gradient-to-br from-amber-900/20 to-black transition-all duration-300 hover:border-amber-600"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-square border-amber-700">
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-white font-light text-lg">
                    Inventory Intelligence
                  </h4>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  Data-driven inventory optimization with predictive capabilities
                </p>

                <div className="space-y-3">
                  {[
                    "Reduce inventory costs by up to 25% through just-in-time principles",
                    "Minimize stockouts and excess inventory with ML forecasting"
                  ].map((text, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="font-mono text-amber-400 mt-0.5">→</span>
                      <p className="text-xs text-gray-400 leading-relaxed">
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
                className="enterprise-card border-amber-800/50 bg-gradient-to-br from-amber-900/20 to-black transition-all duration-300 hover:border-amber-600"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-square border-amber-700">
                    <CreditCard className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-white font-light text-lg">
                    Payment Automation
                  </h4>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  Streamlined supplier payments with smart contract capabilities
                </p>

                <div className="space-y-3">
                  {[
                    "Reduce payment processing time from 30+ days to under 48 hours",
                    "Optional Shell token payments with near-zero transaction fees"
                  ].map((text, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="font-mono text-amber-400 mt-0.5">→</span>
                      <p className="text-xs text-gray-400 leading-relaxed">
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
            <div className="section-header mb-8">
              COMMERCIAL APPLICATIONS
            </div>

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
                  className="enterprise-card relative border-l-4 border-l-amber-700 transition-all duration-300 hover:border-amber-500"
                >
                  <h4 className="font-mono text-amber-400 mb-3">
                    {application.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
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