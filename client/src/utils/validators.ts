/**
 * Common input validation utilities.
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim().toLowerCase());
}

export function isValidPhone(phone: string): boolean {
  // Matches Sri Lankan numbers e.g. 0771234567, +94771234567
  const cleaned = phone.replace(/[\s-]/g, '');
  const re = /^(\+94|0)?7[0-9]{8}$/;
  return re.test(cleaned);
}

export function isNonEmpty(val: string): boolean {
  return val.trim().length > 0;
}
