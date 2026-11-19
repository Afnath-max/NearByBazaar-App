import { apiRequest } from '@/services/api';
import type { Product } from '../cart/cartTypes';

export async function getProducts(shopId?: string): Promise<Product[]> {
  const query = shopId ? `?shopId=${encodeURIComponent(shopId)}` : '';
  return apiRequest<Product[]>(`/api/products${query}`);
}

export async function getProductById(id: string): Promise<Product> {
  return apiRequest<Product>(`/api/products/${id}`);
}
