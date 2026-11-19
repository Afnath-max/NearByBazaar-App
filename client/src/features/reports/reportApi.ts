import { apiRequest } from '@/services/api';
import type { Period, ReportExport, ShopReport } from './reportTypes';

export type { Period, ReportExport, ShopReport };

export const getReport = (period: Period) => apiRequest<ShopReport>(`/api/reports/shop?period=${period}`);
export const getExports = () => apiRequest<ReportExport[]>('/api/reports/shop/exports');
export const createExport = (period: Period) =>
  apiRequest<ReportExport>('/api/reports/shop/exports', { method: 'POST', body: JSON.stringify({ period }) });
export const deleteExport = (id: string) => apiRequest<{ id: string }>(`/api/reports/shop/exports/${id}`, { method: 'DELETE' });
