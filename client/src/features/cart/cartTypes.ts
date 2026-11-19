export type Product = {
  id: string;
  name: string;
  price: number;
  available: boolean;
  stock: number;
  category: string;
  imageUrl?: string;
  shopId?: string;
};

export type SubstitutePreference = {
  enabled: boolean;
  type?: 'auto' | 'manual';
  title?: string;
  desc?: string;
  descType?: 'success' | 'warning' | 'neutral';
  note?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  substitute?: SubstitutePreference;
  shopName?: string;
  needsReplacement?: boolean;
};

export type BasketShop = {
  id: string;
  name: string;
  packingFee?: number;
  communityDiscount?: number;
};

export type Basket = {
  items: CartItem[];
  total: number;
  subtotal?: number;
  packingFee?: number;
  communityDiscount?: number;
  shop: BasketShop | null;
};
