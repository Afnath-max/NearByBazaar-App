export const ROLES = {
  CUSTOMER: 'customer',
  SHOP: 'shop',
} as const;

export type UserRole = (typeof ROLES)[keyof typeof ROLES];
