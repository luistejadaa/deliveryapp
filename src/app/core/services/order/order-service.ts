import { Product, CreateOrderResponse, OrderResponse, CancelOrderReponse } from "../../models";
import { APIResponse } from "../../network";
import { IOrderService } from "./interface";

class OrderService implements IOrderService {

    requestCreateOrder = (storeId: string, products: Product[]): Promise<APIResponse<CreateOrderResponse>> => {
        throw new Error("Method not implemented.");
    }

    getActiveOrders = (): Promise<APIResponse<OrderResponse[]>> => {
        throw new Error("Method not implemented.");
    }

    getActiveOrderDetail = (orderId: string): Promise<APIResponse<OrderResponse>> => {
        throw new Error("Method not implemented.");
    }

    requestCancelOrder = (orderId: string): Promise<APIResponse<CancelOrderReponse>> => {
        throw new Error("Method not implemented.");
    }
}

const orderService: IOrderService = new OrderService();
export { orderService };