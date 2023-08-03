import { Location } from "../location";
import { OrderStatusType } from "../types/order-status-type";

interface CustomerOrderUpdateResponse {
    id: string;
    deliveryLocation?: Location;
    status: OrderStatusType;
}

export type { CustomerOrderUpdateResponse };