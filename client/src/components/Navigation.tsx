import { useLocation } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();

  // Define the navigation order
  const routes = [
    { path: "/", name: "COMPANY OVERVIEW" },
    { path: "/supply-chain-challenges", name: "SUPPLY CHAIN CHALLENGES" },
    { path: "/solution-overview", name: "SOLUTION OVERVIEW" },
    { path: "/dual-market-strategy", name: "DUAL MARKET STRATEGY" },
    { path: "/market-opportunity", name: "MARKET OPPORTUNITY" },
    { path: "/defense-application", name: "DEFENSE APPLICATION" },
    { path: "/commercial-application", name: "COMMERCIAL APPLICATION" },
    { path: "/token-economics", name: "TOKEN ECONOMICS" },
    { path: "/defense-user-experience", name: "DEFENSE USER EXPERIENCE" },
    { path: "/commercial-solution-showcase", name: "COMMERCIAL SOLUTION SHOWCASE" },
    { path: "/commercial-user-experience", name: "COMMERCIAL USER EXPERIENCE" },
    { path: "/business-model", name: "BUSINESS MODEL" },
    { path: "/call-to-action", name: "CALL TO ACTION" }
  ];

  // Find current index
  const currentIndex = routes.findIndex(route => route.path === location);

  // Calculate prev/next paths
  const prevPath = currentIndex > 0 ? routes[currentIndex - 1].path : routes[routes.length - 1].path;
  const nextPath = currentIndex < routes.length - 1 ? routes[currentIndex + 1].path : routes[0].path;

  return (
    <nav className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={() => window.location.href = prevPath}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button 
          onClick={() => window.location.href = nextPath}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm transition-all duration-300 hover:scale-105"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;