import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [location] = useLocation();

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg border border-gray-200 shadow-sm">
        <Link href="/">
          <a className={`text-xs font-mono px-4 py-2 rounded transition-all duration-300 ${
            location === "/" 
              ? "bg-orange-50 text-orange-800 border border-orange-200" 
              : "text-gray-600 hover:bg-orange-50/50 hover:text-orange-800"
          }`}>
            COMMERCIAL_
          </a>
        </Link>
        <Link href="/defense">
          <a className={`text-xs font-mono px-4 py-2 rounded transition-all duration-300 ${
            location === "/defense"
              ? "bg-blue-50 text-blue-800 border border-blue-200"
              : "text-gray-600 hover:bg-blue-50/50 hover:text-blue-800"
          }`}>
            DEFENSE_
          </a>
        </Link>
        <Link href="/dual">
          <a className={`text-xs font-mono px-4 py-2 rounded transition-all duration-300 ${
            location === "/dual"
              ? "bg-gray-100 text-gray-900 border border-gray-300"
              : "text-gray-600 hover:bg-gray-100/50 hover:text-gray-900"
          }`}>
            DUAL MARKET_
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;