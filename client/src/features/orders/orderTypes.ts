export type OrderStatus =
  | 'pending'
  | 'accepted'
  | 'preparing'
  | 'ready'
  | 'picked-up'
  | 'cancelled';

export type PickupSlot = {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  capacity?: number;
  booked?: number;
  remaining?: number;
};

export type CustomerOrderItem = {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
    category?: string;
  };
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  substitutePreference?: {
    enabled: boolean;
    note?: string;
  };
};

export type CustomerOrder = {
  id: string;
  orderNumber?: string;
  status: OrderStatus;
  total: number;
  subtotal?: number;
  packingFee?: number;
  communityDiscount?: number;
  itemCount?: number;
  paymentMethod?: 'cash' | 'card' | 'lankaqr';
  paymentStatus?: 'pending' | 'paid' | 'failed' | 'refunded';
  pickupNote?: string;
  pickupCode?: string;
  pickupPassToken?: string;
  pickupSlot?: PickupSlot;
  shop?: {
    id: string;
    name: string;
    address?: string;
    phone?: string;
  };
  items: CustomerOrderItem[];
  createdAt: string;
  updatedAt?: string;
};
