/**
 * This interface defines the methods that a delivery service should implement.
 */
import { AcceptOrderResponse, DeliverOrderResponse, OrderDetailResponse, OrderResponse, RejectOrderResponse } from "../../models";
import { APIResponse } from "../../network";

interface IDeliveryService {
    /**
     * Retrieves a list of deliveries.
     * @returns A promise that resolves to an APIResponse containing an array of OrderResponse objects.
     */
    getDeliveries(): Promise<APIResponse<OrderResponse[]>>;

    /**
     * Retrieves the details of a specific order.
     * @param orderId The ID of the order to retrieve.
     * @returns A promise that resolves to an APIResponse containing an OrderDetailResponse object.
     */
    getOrderDetail(orderId: string): Promise<APIResponse<OrderDetailResponse>>;

    /**
     * Accepts an order.
     * @param orderId The ID of the order to accept.
     * @returns A promise that resolves to an APIResponse containing an AcceptOrderResponse object.
     */
    acceptOrder(orderId: string): Promise<APIResponse<AcceptOrderResponse>>;

    /**
     * Rejects an order.
     * @param orderId The ID of the order to reject.
     * @returns A promise that resolves to an APIResponse containing a RejectOrderResponse object.
     */
    rejectOrder(orderId: string): Promise<APIResponse<RejectOrderResponse>>;

    /**
     * Delivers an order.
     * @param orderId The ID of the order to deliver.
     * @returns A promise that resolves to an APIResponse containing a DeliverOrderResponse object.
     */
    deliverOrder(orderId: string): Promise<APIResponse<DeliverOrderResponse>>;
}

export type { IDeliveryService };