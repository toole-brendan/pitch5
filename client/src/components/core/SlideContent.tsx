import React from 'react';
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
  const { contentRef, scale, isMobile } = useSlideScaling();
  
  return (
    <div 
      className={`
        ${isMobile ? '' : 'h-full flex items-center justify-center'} 
        ${className} 
        relative
      `}
    >
      {/* Container that scales the content */}
      <div 
        ref={contentRef}
        style={{
          transform: !isMobile ? `scale(${scale})` : 'none',
          transformOrigin: 'center top',
          // Avoid any layout shift by ensuring width is consistent
          width: '100%'
        }}
        className={`
          ${isMobile ? '' : 'transition-transform duration-300'}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideContent;