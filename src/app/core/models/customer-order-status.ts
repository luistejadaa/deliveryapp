import { Location, OrderStatusType } from ".";

interface CustomerOrderStatus {
    id: string;
    deliveryLocation?: Location;
    status: OrderStatusType;
}

export type { CustomerOrderStatus };