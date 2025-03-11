import React from 'react';
import styles from '@/styles/styleUtils';

type ColorVariant = 'primary' | 'purple' | 'blue' | 'green' | 'gray';

interface SectionHeaderProps {
  text: string;
  color?: ColorVariant;
  className?: string;
}

/**
 * Section Header component
 * 
 * Standardized section header that appears throughout the slide deck
 * with consistent styling based on our style guide.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  text, 
  color = 'primary', 
  className = '' 
}) => {
  // Map color prop to the appropriate style
  const colorStyle = sectionHeaderStyles[color];
  
  return (
    <div className={styles.cx(colorStyle, 'mb-6', className)}>
      <span>{text}</span>
    </div>
  );
};

// Style mapping
const sectionHeaderStyles: Record<ColorVariant, string> = {
  primary: styles.sectionHeaderStyles.primary,
  purple: styles.sectionHeaderStyles.purple,
  blue: styles.sectionHeaderStyles.blue,
  green: styles.sectionHeaderStyles.green,
  gray: styles.sectionHeaderStyles.gray,
};

export default SectionHeader; 