export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface ClientUser extends User {
  rating: number;
  completedOrders: number;
  savedAddresses: Address[];
}

export interface RiderUser extends User {
  rating: number;
  completedDeliveries: number;
  totalEarnings: number;
  vehicleType: 'bike' | 'car' | 'motorcycle';
  isAvailable: boolean;
  lat: number;
  lng: number;
  currentDelivery?: string;
}

export interface Address {
  id: string;
  label: string;
  address: string;
  lat: number;
  lng: number;
  details?: string;
}

export interface Order {
  id: string;
  clientId: string;
  riderId?: string;
  status: OrderStatus;
  serviceType: 'package' | 'shopping' | 'pharmacy' | 'supermarket' | 'kiosk' | 'delivery';
  pickupAddress: Address;
  deliveryAddress: Address;
  additionalStops?: Address[];
  description: string;
  packageType?: 'small' | 'medium' | 'large' | 'box';
  specialInstructions?: string;
  photo?: string;
  estimatedPrice: number;
  finalPrice?: number;
  commission?: number;
  riderEarnings?: number;
  createdAt: Date;
  acceptedAt?: Date;
  pickedUpAt?: Date;
  deliveredAt?: Date;
  deliveryCode?: string;
  rating?: number;
  review?: string;
  notes?: string;
}

export type OrderStatus =
  | 'created'
  | 'searching'
  | 'assigned'
  | 'accepted'
  | 'heading_to_pickup'
  | 'arrived_pickup'
  | 'picked_up'
  | 'heading_to_delivery'
  | 'arrived_delivery'
  | 'delivered'
  | 'cancelled';

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'client' | 'rider' | 'admin';
  recipientId: string;
  orderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'order' | 'payment' | 'system' | 'alert';
  orderId?: string;
  read: boolean;
  timestamp: Date;
}

export interface AdminKPI {
  activeOrders: number;
  connectedRiders: number;
  todayRevenue: number;
  completedOrders: number;
  cancelledOrders: number;
  averageDeliveryTime: number;
  platformCommission: number;
}
