import { useIsMobile } from '@/hooks/use-mobile';

type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
};

const Slide: React.FC<SlideProps> = ({ title, subtitle, children, withGridBackground = false }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full p-6 md:p-12 ${withGridBackground ? 'bg-grid-pattern' : ''} ${isMobile ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      <div className={`container mx-auto max-w-7xl ${isMobile ? '' : 'h-full'}`}>
        {title && (
          <div className={`${isMobile ? 'mb-8' : 'mb-4'}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-24 bg-purple-600 mt-4" />
          </div>
        )}
        <div className={`${isMobile ? '' : `h-[calc(100%-${title ? '5rem' : '1rem'})]`}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slide;