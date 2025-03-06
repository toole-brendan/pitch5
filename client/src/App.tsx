import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import CommercialApplication from "@/components/CommercialApplication";
import DefenseApplication from "@/components/DefenseApplication";
import DefenseUserExperience from "@/components/DefenseUserExperience";
import DualMarketStrategy from "@/components/DualMarketStrategy";
import DevelopmentProgress from "@/components/DevelopmentProgress";
import EarlyTraction from "@/components/EarlyTraction";
import FinancialProjections from "@/components/FinancialProjections";
import FounderVision from "@/components/FounderVision";
import GoToMarketStrategy from "@/components/GoToMarketStrategy";
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={CommercialApplication} />
        <Route path="/defense-app" component={DefenseApplication} />
        <Route path="/defense-ux" component={DefenseUserExperience} />
        <Route path="/dual" component={DualMarketStrategy} />
        <Route path="/traction" component={EarlyTraction} />
        <Route path="/progress" component={DevelopmentProgress} />
        <Route path="/financials" component={FinancialProjections} />
        <Route path="/founder" component={FounderVision} />
        <Route path="/market" component={GoToMarketStrategy} />
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