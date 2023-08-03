import { mapCustomerOrderReponseToOrderStatus } from "../mappers/order-update-response";
import { CustomerOrderUpdateResponse } from "../models";
import { SocketResponse } from "../network";
import { crashlyticsService } from "../services";
import { updateOrderStatus } from "../stores/order-store";

/**
 * Object that contains the key and callback function for the order listener.
 */
const customerOrderListener = {
    key: 'order',
    /**
     * Callback function for the order listener.
     * @param response The socket response containing the order update response payload.
     * @param error The error object, if any.
     */
    callBack: (response?: SocketResponse<CustomerOrderUpdateResponse> | null, error?: Error) => {
        if(error) {
            crashlyticsService.logError(error);
            return;
        }
        if(response) {
            const orderStatus = mapCustomerOrderReponseToOrderStatus(response.payload);
            updateOrderStatus(orderStatus);
        }
    }
}

export { customerOrderListener };