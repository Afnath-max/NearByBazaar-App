export type Period = 'today' | 'week' | 'month';

export type ShopReport = {
  period: Period;
  sales: number;
  orders: number;
  average: number;
  labels: string[];
  values: number[];
  peakLabel: string | null;
  movers: { name: string; units: number; revenue: number }[];
};

export type ReportExport = {
  id: string;
  period: Period;
  sales: number;
  orders: number;
  csv: string;
  createdAt?: string;
};
