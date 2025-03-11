import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Clock, Shield, DollarSign, CalendarDays, FileText, Bitcoin, ShieldCheck } from 'lucide-react';
import { ModernSectionHeader } from '@/components/modern/ModernSlideStyles';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + (i * 0.15),
      duration: 0.4
    }
  })
};

// Component for initiative cards
interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 flex items-center justify-center mr-3 text-gray-600">
          {icon}
        </div>
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Component for milestone items
interface MilestoneProps {
  date: string;
  event: string;
  description: string;
}

const Milestone: React.FC<MilestoneProps> = ({ date, event, description }) => {
  return (
    <div className="flex">
      <div className="w-24 flex-shrink-0 text-sm text-gray-500">{date}</div>
      <div className="ml-4 relative pl-4 border-l-2 border-gray-200">
        <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-gray-400"></div>
        <h4 className="text-sm font-medium text-gray-800 mb-1">{event}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Component for metric cards
interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, description, metric, metricLabel }) => {
  return (
    <div className="border-l-2 border-gray-200 pl-3">
      <h3 className="text-sm font-medium text-gray-800 mb-1">{title}</h3>
      <p className="text-xs text-gray-600 mb-2">{description}</p>
      <div className="flex items-baseline">
        <span className="text-xl font-medium text-gray-800 mr-2">{metric}</span>
        <span className="text-xs text-gray-500">{metricLabel}</span>
      </div>
    </div>
  );
};

const WhyNow: React.FC = () => {
  return (
    <Slide
      title="Why Now"
      subtitle="Trump administration policies create perfect opportunity for HandReceipt"
      variant="default"
      accent="#333333"
      slideNumber="6 / 18"
    >
      <div className="max-w-5xl mx-auto">
        {/* Key Policy Convergence */}
        <motion.div
          variants={fadeIn}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200 mb-4">
            <ModernSectionHeader className="mb-3">
              POLICY CONVERGENCE
            </ModernSectionHeader>
            
            <p className="text-sm text-gray-600 mb-4">
              Two major Trump administration initiatives have created a 
              <span className="text-gray-800 font-medium"> historic window of opportunity</span> for HandReceipt:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <InitiativeCard 
                icon={<Shield size={18} />}
                title="Defense Efficiency Mandate" 
                description="DOGE initiative and 8% defense cuts ($68B/year) require DoD to modernize technology and supply chains, creating urgent demand for efficiency solutions."
              />
              <InitiativeCard 
                icon={<DollarSign size={18} />}
                title="Crypto Regulatory Clarity" 
                description="Executive Order establishing clear frameworks for cryptocurrencies and digital assets, positioning the US as the 'crypto capital of the planet.'"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Convergence Timeline */}
        <motion.div
          variants={fadeIn}
          custom={1}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
            <ModernSectionHeader dark className="mb-4">
              CONVERGENCE TIMELINE
            </ModernSectionHeader>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <div className="flex items-center mb-3 md:mb-0">
                <Clock className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-xl font-medium text-gray-800">12-18 Months</span>
                <span className="text-sm text-gray-500 ml-2">to capitalize on both initiatives</span>
              </div>
              
              <div className="text-sm text-gray-600 border-l-2 border-gray-200 pl-3">
                HandReceipt's defense-grade blockchain + Shell token is the perfect solution for both mandates
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Key Milestones */}
        <motion.div
          variants={fadeIn}
          custom={2}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
            <ModernSectionHeader className="mb-3">
              KEY MILESTONES
            </ModernSectionHeader>
            
            <div className="space-y-3">
              <Milestone date="Jan 20, 2025" event="DOGE Initiative Launched" description="Trump establishes Department of Government Efficiency led by Elon Musk" />
              <Milestone date="Jan 23, 2025" event="Crypto Executive Order" description="Working group established to create clear framework for digital assets" />
              <Milestone date="Feb 2025" event="DoD 8% Budget Cut Directive" description="Defense Secretary orders significant spending reductions while maintaining capabilities" />
              <Milestone date="July 2025" event="Crypto Framework Deadline" description="180-day mandate for comprehensive digital asset regulations" />
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Cards */}
        <motion.div
          variants={fadeIn}
          custom={3}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
            <ModernSectionHeader dark className="mb-4">
              MARKET DRIVERS
            </ModernSectionHeader>
            
            <div className="grid md:grid-cols-3 gap-4">
              <MetricCard 
                icon={<FileText size={18} />}
                title="DOGE Initiative" 
                description="Trump's Department of Government Efficiency mandates modernizing federal technology"
                metric="$68B"
                metricLabel="Annual defense cuts targeted"
              />
              <MetricCard 
                icon={<Bitcoin size={18} />}
                title="Crypto Regulation Clarity" 
                description="New regulatory framework making the US the 'crypto capital of the planet'"
                metric="180"
                metricLabel="Days to create framework"
              />
              <MetricCard 
                icon={<ShieldCheck size={18} />}
                title="Supply Chain Crisis" 
                description="Post-pandemic inventory verification failures at all-time high"
                metric="$1.1T"
                metricLabel="Annual inventory distortion"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Solution Banner */}
        <motion.div
          variants={fadeIn}
          custom={4}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200 border-l-4 border-l-gray-800">
            <h3 className="text-base font-medium text-gray-800 mb-2">HandReceipt + Shell Token: The Perfect Solution for Both Mandates</h3>
            <p className="text-sm text-gray-600">Our military-grade blockchain solution with integrated Shell token directly addresses both Trump administration initiatives: defense efficiency through inventory optimization and crypto advancement through stablecoin payments.</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default WhyNow;
