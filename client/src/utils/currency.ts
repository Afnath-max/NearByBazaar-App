/**
 * Formats a numeric price into localized Sri Lankan Rupee currency (LKR)
 * e.g. 1500 -> "LKR 1,500"
 */
export function formatLKR(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return 'LKR 0';
  }
  return `LKR ${Number(amount).toLocaleString('en-LK', {
    maximumFractionDigits: 0,
  })}`;
}
