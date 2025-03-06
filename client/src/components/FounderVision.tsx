'use client';

import React from 'react';
import Slide from '@/components/core/Slide';

const FounderVision = () => {
  return (
    <Slide title="FOUNDER & VISION_">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Founder Profile */}
        <div className="md:col-span-5">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full border-4 border-blue-600 overflow-hidden">
              <img
                src="/michael-adams.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-center mb-1">
              Michael Adams
            </h2>

            <p className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 text-center mb-6">
              FOUNDER & CEO_
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                Military Logistics Expert
              </span>
              <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">
                Supply Chain Innovator
              </span>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                BACKGROUND_
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">→</span>
                  <p className="text-sm text-gray-600">
                    US Army Logistics Officer
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">→</span>
                  <p className="text-sm text-gray-600">
                    Supply Chain Analyst, Point72
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">→</span>
                  <p className="text-sm text-gray-600">
                    Managed $50M+ Military Equipment
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">→</span>
                  <p className="text-sm text-gray-600">
                    Computer Science & Blockchain Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Journey */}
        <div className="md:col-span-7 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              THE VISION_
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Building a blockchain-powered inventory and supply chain management solution that streamlines property tracking and transfers, bridging military precision with commercial agility.
            </p>
            <p className="text-sm text-gray-600">
              HandReceipt represents the convergence of military-grade validation adapted for commercial markets, offering immediate payment settlement through Shell token integration.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              FOUNDER'S JOURNEY_
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-600 bg-blue-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Military Experience
                </h4>
                <p className="text-sm text-gray-600">
                  As a logistics officer, I experienced firsthand the challenges of paper-based property tracking and transfers in high-pressure environments.
                </p>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Commercial Insight
                </h4>
                <p className="text-sm text-gray-600">
                  At Point72, I identified the opportunity to adapt military precision for commercial supply chains while making it more affordable than complex enterprise systems.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Blockchain Innovation
                </h4>
                <p className="text-sm text-gray-600">
                  Integrating blockchain technology enables secure digital records and immediate payment settlement through our Shell token economy.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Dual Market Strategy
                </h4>
                <p className="text-sm text-gray-600">
                  HandReceipt uniquely serves both military and commercial markets with a flexible solution that maintains the highest standards of security and efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              MARKET OPPORTUNITY_
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">60-90</p>
                <p className="text-sm text-gray-600">
                  Days payment delay in current supply chains
                </p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">$950B</p>
                <p className="text-sm text-gray-600">
                  Annual cost of inventory inaccuracies
                </p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">85%</p>
                <p className="text-sm text-gray-600">
                  Still use manual inventory processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default FounderVision;