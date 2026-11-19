import { apiRequest } from '@/services/api';
import type { CustomerOrder } from './orderTypes';

export function getCustomerOrders() {
  return apiRequest<CustomerOrder[]>('/api/orders/mine');
}

export function getCustomerOrder(id: string) {
  return apiRequest<CustomerOrder>(`/api/orders/${id}`);
}

export function cancelCustomerOrder(id: string) {
  return apiRequest<CustomerOrder>(`/api/orders/${id}/cancel`, { method: 'PATCH' });
}

export function respondToOrderSubstitution(id: string, productId: string, decision: 'approved' | 'rejected') {
  return apiRequest<CustomerOrder>(`/api/orders/${id}/items/${productId}/substitution`, {
    method: 'PATCH',
    body: JSON.stringify({ decision }),
  });
}
