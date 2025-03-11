import React, { ReactNode } from 'react';
import styles from '@/styles/styleUtils';

type SizeVariant = 'small' | 'medium' | 'large';
type ColorVariant = 'indigo' | 'purple' | 'blue' | 'green' | 'orange';

interface IconContainerProps {
  icon: ReactNode;
  size?: SizeVariant;
  color?: ColorVariant;
  className?: string;
}

/**
 * IconContainer component
 * 
 * A standardized circular container for icons
 * that follows the styling guide.
 */
const IconContainer: React.FC<IconContainerProps> = ({
  icon,
  size = 'medium',
  color = 'indigo',
  className = ''
}) => {
  // Map size to appropriate container class
  const sizeClass = sizeMap[size];
  
  // Map color to background and text colors
  const bgClass = bgColorMap[color];
  const textClass = textColorMap[color];
  
  return (
    <div className={styles.cx(
      styles.iconContainerStyles.circle,
      sizeClass,
      bgClass,
      textClass,
      className
    )}>
      {icon}
    </div>
  );
};

// Map size props to container classes
const sizeMap: Record<SizeVariant, string> = {
  small: 'w-8 h-8',
  medium: 'w-10 h-10',
  large: 'w-12 h-12',
};

// Map color props to background colors
const bgColorMap: Record<ColorVariant, string> = {
  indigo: styles.bgColors.indigoLight,
  purple: styles.bgColors.purpleLight,
  blue: styles.bgColors.blueLight,
  green: styles.bgColors.greenLight,
  orange: styles.bgColors.orangeLight,
};

// Map color props to text colors
const textColorMap: Record<ColorVariant, string> = {
  indigo: styles.textColors.indigo,
  purple: styles.textColors.purple,
  blue: styles.textColors.blue,
  green: styles.textColors.green,
  orange: styles.textColors.orange,
};

export default IconContainer; 