// Enhanced Slide.tsx with additional variants
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SlideContent from './SlideContent';

type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
  fullWidth?: boolean;
  slideNumber?: string;
  variant?: 'default' | 'split' | 'image' | 'twocolumn' | 'quote' | 'section' | 
    'threecolumn' | 'stats' | 'timeline' | 'comparison' | 'hero' | 'cards' | 'feature';
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
  darkMode?: boolean;
  accent?: string; // New prop for accent color
  overlay?: number; // New prop for background overlay opacity (0-100)
};

const Slide: React.FC<SlideProps> = ({ 
  title, 
  subtitle, 
  children, 
  withGridBackground = false, 
  fullWidth = false, 
  slideNumber,
  variant = 'default',
  backgroundImage,
  alignment = 'left',
  darkMode = false,
  accent,
  overlay = 40
}) => {
  const isMobile = useIsMobile();
  
  // Grid background implementation
  const gridBackgroundStyle = withGridBackground ? {
    backgroundImage: `
      linear-gradient(rgba(220, 220, 220, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(220, 220, 220, 0.5) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    backgroundPosition: '-1px -1px'
  } : {};
  
  const getVariantContent = () => {
    switch(variant) {
      case 'split':
        return <SplitLayout>{children}</SplitLayout>;
      case 'image':
        return <ImageLayout backgroundImage={backgroundImage} overlay={overlay}>{children}</ImageLayout>;
      case 'twocolumn':
        return <TwoColumnLayout>{children}</TwoColumnLayout>;
      case 'threecolumn':
        return <ThreeColumnLayout>{children}</ThreeColumnLayout>;
      case 'quote':
        return <QuoteLayout>{children}</QuoteLayout>;
      case 'section':
        return <SectionLayout title={title}>{children}</SectionLayout>;
      case 'stats':
        return <StatsLayout>{children}</StatsLayout>;
      case 'timeline':
        return <TimelineLayout>{children}</TimelineLayout>;
      case 'comparison':
        return <ComparisonLayout>{children}</ComparisonLayout>;
      case 'hero':
        return <HeroLayout backgroundImage={backgroundImage} overlay={overlay}>{children}</HeroLayout>;
      case 'cards':
        return <CardsLayout>{children}</CardsLayout>;
      case 'feature':
        return <FeatureLayout>{children}</FeatureLayout>;
      case 'default':
      default:
        return (
          <div className={`${isMobile ? '' : 'flex-1'}`}>
            <SlideContent alignment={alignment}>
              {children}
            </SlideContent>
          </div>
        );
    }
  };
  
  const textColorClass = darkMode ? 'text-white' : 'text-gray-900';
  const subtitleColorClass = darkMode ? 'text-gray-300' : 'text-gray-500';
  const backgroundColorClass = darkMode ? 'bg-gray-900' : 'bg-white';
  const slideNumberClass = darkMode ? 'text-gray-600' : 'text-gray-300';
  
  // Generate accent color styles if provided
  const accentStyle = accent ? {
    '--accent-color': accent
  } : {};
  
  return (
    <div 
      className={`
        w-full 
        ${backgroundColorClass}
        ${isMobile ? 'min-h-screen' : 'h-screen overflow-hidden'}
      `}
      style={{
        ...gridBackgroundStyle,
        ...accentStyle as React.CSSProperties,
        ...(backgroundImage && variant !== 'image' && variant !== 'hero' ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {})
      }}
    >
      <div className={`${!fullWidth ? 'max-w-5xl mx-auto' : ''} ${isMobile ? '' : 'h-full flex flex-col'}`}>
        <div className={`p-8 ${isMobile ? '' : 'flex-1'}`}>
          {/* Title area with modern styling - not shown for section, hero variants */}
          {title && variant !== 'section' && variant !== 'hero' && (
            <div className={`mb-6 ${alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : ''}`}>
              <h1 className={`text-5xl font-light ${textColorClass} mb-3`}>{title}</h1>
              {subtitle && <p className={`text-xl ${subtitleColorClass} font-light`}>{subtitle}</p>}
            </div>
          )}
          
          {/* Content area - flexible and scaled */}
          {getVariantContent()}

          {/* Slide number if provided */}
          {slideNumber && (
            <div className={`mt-16 text-right ${slideNumberClass} text-sm`}>
              <span>{slideNumber}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Existing layout variants

// Split layout - content on one side, image or content on the other
const SplitLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // This expects exactly two children: left and right content
  const childArray = React.Children.toArray(children);
  const leftContent = childArray[0] || null;
  const rightContent = childArray[1] || null;
  
  return (
    <div className="flex flex-col md:flex-row h-full gap-8">
      <div className="flex-1">
        <SlideContent>
          {leftContent}
        </SlideContent>
      </div>
      <div className="flex-1">
        <SlideContent>
          {rightContent}
        </SlideContent>
      </div>
    </div>
  );
};

// Image layout - full image background with overlay text
const ImageLayout: React.FC<{children: React.ReactNode, backgroundImage?: string, overlay?: number}> = ({ 
  children, 
  backgroundImage,
  overlay = 40
}) => {
  return (
    <div 
      className="relative h-full flex items-center justify-center p-8 md:p-16 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlay / 100 }}
        ></div>
      )}
      <div className="relative z-10 text-white max-w-2xl">
        <SlideContent>
          {children}
        </SlideContent>
      </div>
    </div>
  );
};

// Two column layout - creates a two column grid
const TwoColumnLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Turn children into an array to handle arbitrary number of items
  const childArray = React.Children.toArray(children);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {childArray.map((child, index) => (
        <div key={index} className="flex flex-col">
          <SlideContent>
            {child}
          </SlideContent>
        </div>
      ))}
    </div>
  );
};

// Quote layout - centered quote with larger text
const QuoteLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <SlideContent>
        <blockquote className="text-3xl font-light italic text-center mx-auto max-w-3xl">
          {children}
        </blockquote>
      </SlideContent>
    </div>
  );
};

// Section layout - big title with minimal content
const SectionLayout: React.FC<{children: React.ReactNode, title?: string}> = ({ 
  children,
  title
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {title && (
        <h1 className="text-6xl md:text-8xl font-bold mb-8">{title}</h1>
      )}
      <div className="text-xl md:text-2xl max-w-2xl">
        <SlideContent>
          {children}
        </SlideContent>
      </div>
    </div>
  );
};

// Feature layout - icon/image on left, description on right
const FeatureLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // This expects exactly two children: image/icon and description
  const childArray = React.Children.toArray(children);
  const imageContent = childArray[0] || null;
  const descriptionContent = childArray[1] || null;
  
  return (
    <div className="flex flex-col md:flex-row h-full items-start gap-6 pt-0 mt-0">
      {/* Reduced from 1/3 to 1/4 width for the image side, allowing more space for content */}
      <div className="md:w-1/4 flex justify-center">
        <SlideContent scaleMode="fit" minScale={0.35}>
          {imageContent}
        </SlideContent>
      </div>
      
      {/* Increased from 2/3 to 3/4 width for the content side */}
      <div className="md:w-3/4">
        <SlideContent scaleMode="fit" minScale={0.35}>
          {descriptionContent}
        </SlideContent>
      </div>
    </div>
  );
};

// New layout variants:

// Three column layout - creates a three column grid
const ThreeColumnLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Turn children into an array to handle arbitrary number of items
  const childArray = React.Children.toArray(children);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      {childArray.map((child, index) => (
        <div key={index} className="flex flex-col">
          <SlideContent>
            {child}
          </SlideContent>
        </div>
      ))}
    </div>
  );
};

// Stats layout - designed for showcasing metrics and KPIs
const StatsLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Turn children into an array to handle arbitrary number of items
  const childArray = React.Children.toArray(children);
  
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {childArray.map((child, index) => (
          <div key={index} className="flex flex-col items-center">
            <SlideContent scaleMode="none">
              {child}
            </SlideContent>
          </div>
        ))}
      </div>
    </div>
  );
};

// Timeline layout - for displaying process or history
const TimelineLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Turn children into an array to handle arbitrary number of items
  const childArray = React.Children.toArray(children);
  
  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {childArray.map((child, index) => (
          <div key={index} className="flex mb-8 relative">
            {/* Timeline dot */}
            <div className="absolute left-8 w-4 h-4 rounded-full bg-blue-500 -ml-2 mt-1.5"></div>
            
            {/* Content with left padding */}
            <div className="pl-16 flex-1">
              <SlideContent>
                {child}
              </SlideContent>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Comparison layout - side by side with divider
const ComparisonLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // This expects exactly two children: left and right comparison
  const childArray = React.Children.toArray(children);
  const leftContent = childArray[0] || null;
  const rightContent = childArray[1] || null;
  
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex-1 pr-8">
        <SlideContent>
          {leftContent}
        </SlideContent>
      </div>
      
      {/* Vertical divider */}
      <div className="hidden md:block w-0.5 bg-gray-300 mx-4"></div>
      
      <div className="flex-1 pl-8">
        <SlideContent>
          {rightContent}
        </SlideContent>
      </div>
    </div>
  );
};

// Hero layout - dramatic full-screen intro slide
const HeroLayout: React.FC<{children: React.ReactNode, backgroundImage?: string, overlay?: number}> = ({ 
  children, 
  backgroundImage,
  overlay = 40
}) => {
  return (
    <div 
      className="relative h-full flex flex-col items-center justify-center p-8 md:p-16 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlay / 100 }}
        ></div>
      )}
      <div className="relative z-10 text-white text-center max-w-3xl">
        <SlideContent alignment="center">
          {children}
        </SlideContent>
      </div>
    </div>
  );
};

// Cards layout - for displaying multiple content blocks as cards
const CardsLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Turn children into an array to handle arbitrary number of items
  const childArray = React.Children.toArray(children);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
      {childArray.map((child, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
          <SlideContent>
            {child}
          </SlideContent>
        </div>
      ))}
    </div>
  );
};

// Utility components for use within these layouts

// Stat Card component - to be used within StatsLayout
export const StatCard: React.FC<{
  value: string | number;
  label: string;
  trend?: number;
  prefix?: string;
  suffix?: string;
}> = ({ 
  value, 
  label, 
  trend, 
  prefix = "", 
  suffix = "" 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-semibold mb-2">
        {prefix}{value}{suffix}
      </div>
      <div className="text-xl text-gray-500">{label}</div>
      {trend !== undefined && (
        <div className={`mt-2 flex items-center ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          <span>{trend >= 0 ? '↑' : '↓'}</span>
          <span className="ml-1">{Math.abs(trend)}%</span>
        </div>
      )}
    </div>
  );
};

// Timeline Item component - to be used within TimelineLayout
export const TimelineItem: React.FC<{
  title: string;
  date?: string;
  children: React.ReactNode;
}> = ({ 
  title, 
  date, 
  children 
}) => {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {date && <span className="text-sm text-gray-500">{date}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
};

// Card component - to be used within CardsLayout
export const Card: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ 
  title, 
  icon, 
  children 
}) => {
  return (
    <div className="h-full flex flex-col">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-gray-600 flex-grow">{children}</div>
    </div>
  );
};

export default Slide;
