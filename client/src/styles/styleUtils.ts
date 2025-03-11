/**
 * Style Utils
 * -----------
 * Standardized styling utilities for the PitchDeck4 components based on our style guide.
 * Use these throughout the application to ensure consistent styling.
 */

// Text Colors
export const textColors = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  muted: 'text-gray-500',
  mutedLight: 'text-gray-400',
  extraMuted: 'text-gray-300',
  
  // Accent Colors
  indigo: 'text-indigo-600',
  indigoLight: 'text-indigo-500',
  purple: 'text-purple-600',
  purpleLight: 'text-purple-500',
  blue: 'text-blue-600',
  blueLight: 'text-blue-500',
  green: 'text-green-600',
  greenLight: 'text-green-500',
  orange: 'text-orange-600',
  orangeLight: 'text-orange-500',
};

// Background Colors
export const bgColors = {
  primary: 'bg-white',
  secondary: 'bg-gray-50',
  
  // Accent Backgrounds
  indigo: 'bg-indigo-500',
  indigoLight: 'bg-indigo-100',
  purple: 'bg-purple-500',
  purpleLight: 'bg-purple-100',
  blue: 'bg-blue-500',
  blueLight: 'bg-blue-100',
  green: 'bg-green-500',
  greenLight: 'bg-green-100',
  orange: 'bg-orange-500',
  orangeLight: 'bg-orange-100',
};

// Typography
export const fontWeights = {
  light: 'font-light',
  normal: '',  // Default weight
  medium: 'font-medium',
};

export const fontSizes = {
  // Headings
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-xl',
  h5: 'text-lg',
  
  // Body text
  body: 'text-base',
  bodySmall: 'text-sm',
  label: 'text-xs',
  
  // Metrics/Numbers
  metric: 'text-3xl',
  metricSmall: 'text-2xl',
};

export const textTransformations = {
  uppercase: 'uppercase',
  tracking: 'tracking-widest',
};

// Layout
export const containers = {
  slide: 'min-h-screen p-8 font-sans',
  content: 'max-w-5xl mx-auto',
};

export const grids = {
  twoCol: 'grid md:grid-cols-2 gap-12',
  threeCol: 'grid md:grid-cols-3 gap-6',
  fourCol: 'grid md:grid-cols-4 gap-8',
};

export const spacing = {
  marginBottom: {
    xs: 'mb-4',
    sm: 'mb-6',
    md: 'mb-8',
    lg: 'mb-12',
    xl: 'mb-16',
  },
  padding: {
    xs: 'p-4',
    sm: 'p-6',
    md: 'p-8',
  },
  gap: {
    xs: 'gap-4',
    sm: 'gap-6',
    md: 'gap-8',
  },
};

// Component Styles
export const cardStyles = {
  standard: 'border border-gray-100 rounded-lg p-6 bg-white shadow-sm',
  borderlessWithTopBorder: 'border-t border-gray-100 pt-6',
};

export const sectionHeaderStyles = {
  default: 'text-xs font-medium tracking-widest uppercase',
  primary: 'text-xs font-medium tracking-widest text-indigo-500 uppercase',
  purple: 'text-xs font-medium tracking-widest text-purple-500 uppercase',
  blue: 'text-xs font-medium tracking-widest text-blue-500 uppercase',
  green: 'text-xs font-medium tracking-widest text-green-500 uppercase',
  gray: 'text-xs font-medium tracking-widest text-gray-400 uppercase',
};

export const iconContainerStyles = {
  circle: 'rounded-full flex items-center justify-center',
  circleSmall: 'w-8 h-8 rounded-full flex items-center justify-center',
  circleMedium: 'w-10 h-10 rounded-full flex items-center justify-center',
};

export const listItemStyles = {
  standard: 'flex items-start',
  withDash: 'flex items-start',
  dashIcon: 'text-gray-300 mr-3 text-sm',
};

export const tableStyles = {
  container: 'min-w-full divide-y divide-gray-100',
  header: 'px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
};

export const progressBarStyles = {
  container: 'w-full bg-gray-100 rounded-full h-2',
  filledBase: 'h-2 rounded-full',
};

// Interactive Elements
export const buttonStyles = {
  tab: 'px-4 py-2 text-sm font-medium rounded-md',
  tabActive: 'bg-indigo-50 text-indigo-600',
  tabInactive: 'text-gray-500 hover:text-gray-700',
};

export const chartStyles = {
  positioningChart: 'relative border border-gray-100 rounded-lg aspect-square',
};

// Common Composite Component Styles
export const componentStyles = {
  // Cards with icon + title + description
  iconCard: `
    ${cardStyles.standard}
    ${spacing.marginBottom.sm}
  `,
  // Section titles
  sectionTitle: `
    ${sectionHeaderStyles.default}
    ${spacing.marginBottom.sm}
  `,
  // List items with dash
  listItemWithDash: `
    ${listItemStyles.standard}
    ${spacing.marginBottom.xs}
  `,
  // Metric display
  metricDisplay: `
    ${fontSizes.metric}
    ${fontWeights.medium}
    ${textColors.indigo}
  `,
};

// Helper function to combine classes
export const cx = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

// Export default object for easier imports
export default {
  textColors,
  bgColors,
  fontWeights,
  fontSizes,
  textTransformations,
  containers,
  grids,
  spacing,
  cardStyles,
  sectionHeaderStyles,
  iconContainerStyles,
  listItemStyles,
  tableStyles,
  progressBarStyles,
  buttonStyles,
  chartStyles,
  componentStyles,
  cx,
}; 