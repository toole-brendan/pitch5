import { useIsMobile } from '@/hooks/use-mobile';

type SlideProps = {
  title?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
};

const Slide: React.FC<SlideProps> = ({ title, children, withGridBackground = false }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full p-6 md:p-12 ${withGridBackground ? 'bg-grid-pattern' : ''} ${isMobile ? 'min-h-screen' : 'h-screen'}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      <div className={`container mx-auto max-w-7xl ${isMobile ? '' : 'h-full'}`}>
        {title && <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>}
        <div className={`${isMobile ? '' : 'h-[calc(100%-4rem)]'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slide;