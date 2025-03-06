import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import CompanyOverview from "@/components/slides/CompanyOverview";
import SupplyChainChallenges from "@/components/slides/SupplyChainChallenges";
import SolutionOverview from "@/components/slides/SolutionOverview";
import DualMarketStrategy from "@/components/DualMarketStrategy";
import MarketOpportunity from "@/components/slides/MarketOpportunity";
import DefenseApplication from "@/components/DefenseApplication";
import CommercialApplication from "@/components/CommercialApplication";
import DefenseUserExperience from "@/components/DefenseUserExperience";
import CommercialSolution from "@/components/slides/CommercialSolution";
import CommercialUserExperience from "@/components/slides/CommercialUserExperience";
import BusinessModel from "@/components/slides/BusinessModel";
import CallToAction from "@/components/slides/CallToAction";
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={CompanyOverview} />
        <Route path="/supply-chain-challenges" component={SupplyChainChallenges} />
        <Route path="/solution-overview" component={SolutionOverview} />
        <Route path="/dual-market-strategy" component={DualMarketStrategy} />
        <Route path="/market-opportunity" component={MarketOpportunity} />
        <Route path="/defense-application" component={DefenseApplication} />
        <Route path="/commercial-application" component={CommercialApplication} />
        <Route path="/defense-user-experience" component={DefenseUserExperience} />
        <Route path="/commercial-solution-showcase" component={CommercialSolution} />
        <Route path="/commercial-user-experience" component={CommercialUserExperience} />
        <Route path="/business-model" component={BusinessModel} />
        <Route path="/call-to-action" component={CallToAction} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;