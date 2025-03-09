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
    <div className={`${isMobile ? '' : 'h-full flex flex-col items-center justify-center overflow-hidden'} ${className}`}>
      <div 
        ref={contentRef}
        className={`${isMobile ? '' : ''}`}
        style={{
          transformOrigin: 'center top',
          transform: !isMobile ? `scale(${scale})` : 'none',
          width: isMobile ? '100%' : `${100}%`,
          maxHeight: isMobile ? 'unset' : '100%'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideContent;