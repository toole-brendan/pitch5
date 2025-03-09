type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
};

const Slide: React.FC<SlideProps> = ({ 
  title, 
  subtitle, 
  children, 
  withGridBackground = false 
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden p-4 md:p-8 flex flex-col ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      {/* Main content */}
      <div className="container mx-auto max-w-7xl relative z-10 flex-1 flex flex-col">
        {title && (
          <div className="mb-4 md:mb-6 flex-shrink-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-1 md:mb-2">{title}</h2>
            {subtitle && <p className="text-sm md:text-base text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-16 md:w-24 bg-purple-600 mt-2 md:mt-4" />
          </div>
        )}
        <div className="flex-1 overflow-y-auto md:overflow-visible h-0 md:h-auto">
          {children}
        </div>
      </div>
      
      {/* 8VC style grid overlay - removed for light mode */}
    </div>
  );
};

export default Slide;