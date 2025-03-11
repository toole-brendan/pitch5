import React from 'react';
import SlideThemeWrapper from './SlideThemeWrapper';

// 1. Company Purpose
import CompanyOverview from '@/components/slides/1-company/CompanyOverview';
import FounderBackground from '@/components/slides/1-company/FounderBackground';

// 2. Current Problem
import SupplyChainChallenges from '@/components/slides/2-problem/SupplyChainChallenges';

// 3. Solution 
import SolutionOverview from '@/components/slides/3-solution/SolutionOverview';
import DualMarketStrategy from '@/components/slides/3-solution/DualMarketStrategy';

// 4. Why Now
import WhyNow from '@/components/slides/4-why-now/WhyNow';

// 5. Market Size
import MarketOpportunitySlide from '@/components/slides/5-market/MarketOpportunity';

// 6. Competition
import CompetitiveLandscape from '@/components/slides/6-competition/CompetitiveLandscape';

// 7. Product in more detail
import ProductFeatures from '@/components/slides/7-product/ProductFeatures';
import UserExperience from '@/components/slides/7-product/UserExperience';

// 8. Business Model
import BusinessModel from '@/components/slides/8-business/BusinessModel';
import GoToMarketStrategy from '@/components/slides/8-business/GoToMarketStrategy';
import OperationalCosts from '@/components/slides/8-business/OperationalCosts';

// 9. Financials
import FinancialProjections from '@/components/slides/9-financials/FinancialProjections';
import FundingRequest from '@/components/slides/9-financials/FundingRequest';
import TeamAndRoadmap from '@/components/slides/9-financials/TeamAndRoadmap';

// Appendix
import ShellTokenArchitecture from '@/components/slides/appendix/ShellTokenArchitecture';
import TokenEconomics from '@/components/slides/appendix/TokenEconomics';

const PitchDeckApp: React.FC = () => {
  return (
    <SlideThemeWrapper>
      <div className="bg-white">
        {/* All slides in sequential order */}
        <CompanyOverview />
        <FounderBackground />
        <SupplyChainChallenges />
        <SolutionOverview />
        <DualMarketStrategy />
        <WhyNow />
        <MarketOpportunitySlide />
        <CompetitiveLandscape />
        <ProductFeatures />
        <UserExperience />
        <BusinessModel />
        <GoToMarketStrategy />
        <OperationalCosts />
        <FinancialProjections />
        <FundingRequest />
        <TeamAndRoadmap />

        {/* Appendix slides */}
        <ShellTokenArchitecture />
        <TokenEconomics />
      </div>
    </SlideThemeWrapper>
  );
};

export default PitchDeckApp;
