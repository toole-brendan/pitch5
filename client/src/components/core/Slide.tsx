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
    <div className={`relative min-h-screen w-full p-6 md:p-12 ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      {/* Main content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-24 bg-purple-600 mt-4" />
          </div>
        )}
        {children}
      </div>
      
      {/* 8VC style grid overlay - removed for light mode */}
    </div>
  );
};

export default Slide;