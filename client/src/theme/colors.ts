/**
 * NearByBazaar Design Tokens: Color Palette
 * Matches the official HCI Milestone specifications & Figma designs.
 */
export const colors = {
  // Brand Primary
  primary: '#006B2C',
  primaryDark: '#004F20',
  primaryLight: '#E8F5E9',
  primaryMuted: '#006B2C1A',

  // Secondary & Accents
  secondary: '#FF9800',
  secondaryLight: '#FFF3E0',

  // Neutrals
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  border: '#E0E0E0',
  borderLight: '#F0F0F0',

  // Typography
  textPrimary: '#1A1A1A',
  textSecondary: '#666666',
  textMuted: '#9E9E9E',
  textInverse: '#FFFFFF',

  // Status & Feedback
  success: '#2E7D32',
  successLight: '#E8F5E9',
  warning: '#ED6C02',
  warningLight: '#FFF4E5',
  error: '#D32F2F',
  errorLight: '#FFEBEE',
  info: '#0288D1',
  infoLight: '#E1F5FE',

  // Status Pipelines
  statusNew: '#1976D2',
  statusPreparing: '#ED6C02',
  statusReady: '#2E7D32',
  statusCompleted: '#546E7A',
  statusCancelled: '#D32F2F',
} as const;

export type ColorToken = keyof typeof colors;
