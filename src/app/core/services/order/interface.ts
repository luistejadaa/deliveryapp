/**
 * Defines the interface for the OrderService, which provides methods for creating, retrieving, and canceling orders.
 */
import { CancelOrderReponse, CreateOrderResponse, OrderDetailResponse, OrderResponse, Product } from "../../models";
import { APIResponse } from "../../network";

interface IOrderService {
    /**
     * Sends a request to create a new order with the specified store ID and products.
     * @param storeId The ID of the store to create the order with.
     * @param products The list of products to include in the order.
     * @returns A promise that resolves with an APIResponse containing the newly created order.
     */
    requestCreateOrder: (storeId: string, products: Product[]) => Promise<APIResponse<CreateOrderResponse>>;

    /**
     * Retrieves a list of active orders.
     * @returns A promise that resolves with an APIResponse containing a list of active orders.
     */
    getActiveOrders: () => Promise<APIResponse<OrderResponse[]>>;

    /**
     * Retrieves the details of an active order with the specified ID.
     * @param orderId The ID of the order to retrieve details for.
     * @returns A promise that resolves with an APIResponse containing the details of the specified order.
     */
    getActiveOrderDetail: (orderId: string) => Promise<APIResponse<OrderDetailResponse>>;

    /**
     * Sends a request to cancel the order with the specified ID.
     * @param orderId The ID of the order to cancel.
     * @returns A promise that resolves with an APIResponse containing the result of the cancel request.
     */
    requestCancelOrder: (orderId: string) => Promise<APIResponse<CancelOrderReponse>>;
}

export type { IOrderService };