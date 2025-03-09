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
              <div className="w-full h-full flex items-center justify-center bg-blue-100">
                <span className="text-3xl font-bold text-blue-600">BT</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-center mb-1">
              Brendan T. Toole
            </h2>

            <p className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 text-center mb-6">
              FOUNDER & CEO_
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                Finance Expert
              </span>
              <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">
                Military Leadership
              </span>
              <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full border border-orange-200">
                Princeton Economics
              </span>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                BACKGROUND_
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">→</span>
                  <p className="text-sm text-gray-600">
                    Research Analyst, Point72 Asset Management
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">→</span>
                  <p className="text-sm text-gray-600">
                    Platoon Leader, 101st Airborne Division
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">→</span>
                  <p className="text-sm text-gray-600">
                    Princeton University, Economics A.B.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">→</span>
                  <p className="text-sm text-gray-600">
                    FINRA Series 57 Registered Securities Trader
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
                  Financial Expertise
                </h4>
                <p className="text-sm text-gray-600">
                  At Point72, I analyzed healthcare supply chain dynamics and developed targeted sector analyses, providing insights into investment opportunities and market inefficiencies.
                </p>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Military Leadership
                </h4>
                <p className="text-sm text-gray-600">
                  As a Platoon Leader in the 101st Airborne Division, I led Air Assault operations and experienced firsthand the critical importance of reliable supply chain management in high-stakes environments.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Technology Integration
                </h4>
                <p className="text-sm text-gray-600">
                  Leveraging AI integration experience from my finance background, I'm applying these solutions to automate routine supply chain tasks and enhance operational quality.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50/80 backdrop-blur-sm p-4 rounded-r-lg">
                <h4 className="font-sans text-base font-semibold mb-2">
                  Academic Foundation
                </h4>
                <p className="text-sm text-gray-600">
                  My economics research at Princeton comparing innovation determinants between China and OECD countries provided insights into global supply chain dynamics and market opportunities.
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