import React, { ReactNode } from 'react';
import styles from '@/styles/styleUtils';

interface CardProps {
  children: ReactNode;
  variant?: 'standard' | 'borderless';
  className?: string;
}

/**
 * Card component
 * 
 * A reusable card component that follows the styling guide.
 * Supports standard and borderless variants.
 */
const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'standard',
  className = ''
}) => {
  const cardStyle = variant === 'standard' 
    ? styles.cardStyles.standard
    : styles.cardStyles.borderlessWithTopBorder;
  
  return (
    <div className={styles.cx(cardStyle, className)}>
      {children}
    </div>
  );
};

// Create CardContent component
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={styles.cx("p-6", className)}>
      {children}
    </div>
  );
};

export { Card, CardContent };
export default Card; 