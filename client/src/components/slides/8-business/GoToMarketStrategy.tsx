import React from 'react';
import Slide from '@/components/core/Slide';
import { 
  Shield, 
  Building, 
  Globe,
  Calendar,
  Users,
  TrendingUp,
  CircleDollarSign,
  BarChart3,
  Briefcase,
  Coins
} from 'lucide-react';

// Component for phase cards in the phased approach section
const PhaseCard = ({ number, title, timeline, focus, kpis }: { 
  number: number; 
  title: string; 
  timeline: string;
  focus: string;
  kpis: string[];
}) => {
  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="flex items-center gap-3 mb-3">
        {number === 1 ? (
          <Shield className="w-5 h-5 text-indigo-600" />
        ) : number === 2 ? (
          <Building className="w-5 h-5 text-indigo-600" />
        ) : (
          <Globe className="w-5 h-5 text-indigo-600" />
        )}
        <h3 className="text-lg font-medium text-gray-900">Phase {number}: {title}</h3>
      </div>
      <p className="text-indigo-600 text-sm mb-2">{timeline}</p>
      <p className="text-gray-700 mb-3">{focus}</p>
      <ul className="space-y-1">
        {kpis.map((kpi, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-300 mr-3 text-sm">—</span>
            <span className="text-gray-600">{kpi}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component for timeline items
const TimelineItem = ({ quarter, event, icon }: { quarter: string; event: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-3">
      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-indigo-600">{quarter}</p>
        <p className="text-gray-700">{event}</p>
      </div>
    </div>
  );
};

// Component for KPI items
const KpiItem = ({ title, target, icon }: { title: string; target: string; icon: React.ReactNode }) => {
  return (
    <div className="border-t border-gray-100 pt-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-indigo-600">{target}</p>
    </div>
  );
};

// Component for partnership items
const PartnershipItem = ({ title, description, timing, icon }: { 
  title: string; 
  description: string; 
  timing: string;
  icon: React.ReactNode 
}) => {
  return (
    <div className="border-t border-gray-100 pt-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      </div>
      <p className="text-xs text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-xs">
        <Calendar size={12} className="text-indigo-500 mr-1" />
        <span className="text-indigo-700">{timing}</span>
      </div>
    </div>
  );
};

const GoToMarketStrategy: React.FC = () => {
  // Phase details
  const phaseDetails = [
    {
      number: 1,
      title: "Defense Beachhead",
      timeline: "Q2 2025 - Q4 2025",
      focus: "Establish proven track record with defense clients",
      kpis: ["3-5 defense contracts", "85% user satisfaction", "$1.2M in initial ARR"]
    },
    {
      number: 2,
      title: "Commercial Expansion",
      timeline: "Q1 2026 - Q3 2026",
      focus: "Enter commercial supply chain market with validated solution",
      kpis: ["12-15 commercial clients", "500K monthly transactions", "$3.5M in Year 2 ARR"]
    },
    {
      number: 3,
      title: "Platform Ecosystem",
      timeline: "Q4 2026 - Q2 2027",
      focus: "Open platform to developers and financial partners",
      kpis: ["30+ enterprise clients", "$12M in Year 3 ARR", "15 integrated partners"]
    }
  ];

  // Timeline items
  const timelineItems = [
    { quarter: 'Q2 2025', event: 'Launch HandReceipt with 2-3 defense customers', icon: <Shield size={18} /> },
    { quarter: 'Q3 2025', event: 'First commercial pilot deployment', icon: <Building size={18} /> },
    { quarter: 'Q4 2025', event: 'Integrate financial institutions for supply chain financing', icon: <Briefcase size={18} /> },
    { quarter: 'Q1 2026', event: 'Open network to broader retail ecosystem', icon: <Globe size={18} /> }
  ];
  
  // KPI data
  const kpiData = [
    {
      title: "Customer Acquisition",
      icon: <Users size={20} className="text-indigo-600" />,
      target: "15-20 enterprise clients in Year 1"
    },
    {
      title: "Platform Adoption",
      icon: <TrendingUp size={20} className="text-indigo-600" />,
      target: "500K transactions in Year 1"
    },
    {
      title: "Revenue Growth",
      icon: <CircleDollarSign size={20} className="text-indigo-600" />,
      target: "$4.8M ARR by end of Year 2"
    },
    {
      title: "Market Expansion",
      icon: <Globe size={20} className="text-indigo-600" />,
      target: "3 industry verticals by Year 2"
    }
  ];
  
  // Partnership data
  const partnershipData = [
    {
      title: "ERP Providers",
      description: "SAP, NetSuite, Oracle",
      icon: <BarChart3 size={18} />,
      timing: "Q3 2025"
    },
    {
      title: "Defense Contractors",
      description: "Tier 1 DOD suppliers",
      icon: <Shield size={18} />,
      timing: "Q2 2025"
    },
    {
      title: "WMS Providers",
      description: "Manhattan, JDA Software",
      icon: <Briefcase size={18} />,
      timing: "Q4 2025"
    },
    {
      title: "Financial Services",
      description: "Supply chain financing",
      icon: <Coins size={18} />,
      timing: "Q1 2026"
    }
  ];

  const slideContent = (
    <>
      {/* Phased Approach Section */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Phased Approach</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {phaseDetails.map((phase) => (
            <PhaseCard
              key={phase.number}
              number={phase.number}
              title={phase.title}
              timeline={phase.timeline}
              focus={phase.focus}
              kpis={phase.kpis}
            />
          ))}
        </div>
      </div>
      
      {/* Two Column Layout for Timeline and KPIs */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Execution Timeline */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Execution Timeline</span>
          </div>
          
          <div>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                quarter={item.quarter}
                event={item.event}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        
        {/* Key Performance Indicators */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Key Performance Indicators</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {kpiData.map((kpi, index) => (
              <KpiItem
                key={index}
                title={kpi.title}
                target={kpi.target}
                icon={kpi.icon}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Strategic Partnerships */}
      <div>
        <div className="mb-6">
          <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Target Strategic Partnerships</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partnershipData.map((partner, index) => (
            <PartnershipItem
              key={index}
              title={partner.title}
              description={partner.description}
              timing={partner.timing}
              icon={partner.icon}
            />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <Slide 
      title="Go-to-Market Strategy" 
      subtitle="Multi-phase approach to platform and token ecosystem growth"
      slideNumber="13 / 18"
    >
      {slideContent}
    </Slide>
  );
};

export default GoToMarketStrategy;