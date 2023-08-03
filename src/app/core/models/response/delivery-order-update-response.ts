import { OrderStatusType } from "../types/order-status-type";

interface DeliveryOrderUpdateResponse {
    id: string;
    status: OrderStatusType;
}

export type { DeliveryOrderUpdateResponse };