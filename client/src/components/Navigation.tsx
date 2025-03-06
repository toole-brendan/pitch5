import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [location] = useLocation();

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <div className="flex gap-4">
        <Link href="/">
          <a className={`text-xs font-mono px-3 py-1.5 border transition-colors duration-200 ${
            location === "/" 
              ? "bg-orange-50 text-orange-800 border-orange-200" 
              : "bg-white text-gray-600 border-gray-200 hover:border-orange-200"
          }`}>
            COMMERCIAL
          </a>
        </Link>
        <Link href="/defense">
          <a className={`text-xs font-mono px-3 py-1.5 border transition-colors duration-200 ${
            location === "/defense"
              ? "bg-blue-50 text-blue-800 border-blue-200"
              : "bg-white text-gray-600 border-gray-200 hover:border-blue-200"
          }`}>
            DEFENSE
          </a>
        </Link>
        <Link href="/dual">
          <a className={`text-xs font-mono px-3 py-1.5 border transition-colors duration-200 ${
            location === "/dual"
              ? "bg-gray-100 text-gray-900 border-gray-300"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
          }`}>
            DUAL MARKET
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;