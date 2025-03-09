import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSlideScaling } from '@/hooks/use-slide-scaling';

type SlideContentProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * SlideContent - A wrapper for slide content that handles responsive behavior
 * On mobile: Content can scroll naturally
 * On desktop: Content is scaled to fit within the viewport without scrolling
 */
const SlideContent: React.FC<SlideContentProps> = ({ children, className = '' }) => {
  const isMobile = useIsMobile();
  const { contentRef, scale } = useSlideScaling();
  
  return (
    <div className={`${isMobile ? '' : 'h-full flex flex-col items-center justify-center'} ${className}`}>
      <div 
        ref={contentRef}
        className={`${isMobile ? '' : 'transform-origin-center'}`}
        style={{
          transformOrigin: 'center center',
          maxWidth: isMobile ? '100%' : `${100 / scale}%`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideContent;