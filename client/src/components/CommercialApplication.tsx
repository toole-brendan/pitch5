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
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-ibm-mono font-medium py-1 px-2 rounded">
            BUSINESS
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Key Features */}
          <div>
            <h3 className="text-base md:text-xl font-semibold font-ibm-mono uppercase tracking-wider mb-6">
              KEY CAPABILITIES_
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                custom={1}
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 text-blue-800 border border-blue-200 w-8 h-8 flex items-center justify-center font-ibm-mono font-bold flex-shrink-0">
                    1
                  </div>
                  <h4 className="font-semibold text-base md:text-lg">
                    Supply Chain Transparency
                  </h4>
                </div>

                <p className="mt-2 text-sm md:text-base text-gray-600 font-ibm-mono">
                  Complete visibility from sourcing to end customer
                </p>

                <div className="mt-3">
                  {[
                    "Authenticated chain of custody for every component and product",
                    "Real-time verification of authenticity and quality standards"
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2 last:mb-0">
                      <span className="text-blue-800 font-ibm-mono font-bold flex-shrink-0">
                        &gt;
                      </span>
                      <p className="text-xs md:text-sm text-gray-600 font-ibm-mono leading-relaxed">
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
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 text-blue-800 border border-blue-200 w-8 h-8 flex items-center justify-center font-ibm-mono font-bold flex-shrink-0">
                    2
                  </div>
                  <h4 className="font-semibold text-base md:text-lg">
                    Inventory Intelligence
                  </h4>
                </div>

                <p className="mt-2 text-sm md:text-base text-gray-600 font-ibm-mono">
                  Data-driven inventory optimization with predictive capabilities
                </p>

                <div className="mt-3">
                  {[
                    "Reduce inventory costs by up to 25% through just-in-time principles",
                    "Minimize stockouts and excess inventory with ML forecasting"
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2 last:mb-0">
                      <span className="text-blue-800 font-ibm-mono font-bold flex-shrink-0">
                        &gt;
                      </span>
                      <p className="text-xs md:text-sm text-gray-600 font-ibm-mono leading-relaxed">
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
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 text-blue-800 border border-blue-200 w-8 h-8 flex items-center justify-center font-ibm-mono font-bold flex-shrink-0">
                    3
                  </div>
                  <h4 className="font-semibold text-base md:text-lg">
                    Payment Automation
                  </h4>
                </div>

                <p className="mt-2 text-sm md:text-base text-gray-600 font-ibm-mono">
                  Streamlined supplier payments with smart contract capabilities
                </p>

                <div className="mt-3">
                  {[
                    "Reduce payment processing time from 30+ days to under 48 hours",
                    "Optional Shell token payments with near-zero transaction fees"
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2 last:mb-0">
                      <span className="text-blue-800 font-ibm-mono font-bold flex-shrink-0">
                        &gt;
                      </span>
                      <p className="text-xs md:text-sm text-gray-600 font-ibm-mono leading-relaxed">
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
            <h3 className="text-base md:text-xl font-semibold font-ibm-mono uppercase tracking-wider mb-6">
              COMMERCIAL APPLICATIONS_
            </h3>
            
            <div className="flex flex-col gap-4 mt-0 md:mt-4">
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
                  className="bg-blue-50 border border-gray-200 p-4 rounded-lg overflow-hidden"
                >
                  <h4 className="font-ibm-mono font-semibold text-sm md:text-base text-blue-800 mb-2">
                    {application.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 font-ibm-mono leading-relaxed">
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
