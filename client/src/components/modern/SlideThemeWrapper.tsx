// SlideThemeWrapper.tsx - Container component to apply consistent theming
import React from 'react';
import { modernColors } from './ModernSlideStyles';

// Main slide wrapper that applies our modern style guidelines to all slides
const SlideThemeWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // This component can wrap around your slide deck to ensure consistent styling
  return (
    <div 
      className="font-sans antialiased"
      style={{ 
        '--theme-accent': modernColors.accent,
        '--theme-background': modernColors.background,
        '--theme-text': modernColors.text,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default SlideThemeWrapper; 