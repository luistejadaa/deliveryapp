import {
  AcceptOrderResponse,
  DeliverOrderResponse,
  OrderDetailResponse,
  OrderResponse,
  RejectOrderResponse,
} from '../../models';
import {APIResponse} from '../../network';
import {IDeliveryService} from './interface';

class DeliveryService implements IDeliveryService {
  getDeliveries = (): Promise<APIResponse<OrderResponse[]>> => {
    throw new Error('Method not implemented.');
  };

  getOrderDetail = (
    orderId: string,
  ): Promise<APIResponse<OrderDetailResponse>> => {
    throw new Error('Method not implemented.');
  };

  acceptOrder = (
    orderId: string,
  ): Promise<APIResponse<AcceptOrderResponse>> => {
    throw new Error('Method not implemented.');
  };

  rejectOrder = (
    orderId: string,
  ): Promise<APIResponse<RejectOrderResponse>> => {
    throw new Error('Method not implemented.');
  };

    deliverOrder = (
        orderId: string,
    ): Promise<APIResponse<DeliverOrderResponse>> => {
        throw new Error('Method not implemented.');
    };
}

const deliveryService: IDeliveryService = new DeliveryService();
export {deliveryService};
