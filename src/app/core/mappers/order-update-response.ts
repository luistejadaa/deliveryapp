import { CustomerOrderStatus, CustomerOrderUpdateResponse, DeliveryOrderStatus, DeliveryOrderUpdateResponse } from "../models"

const mapCustomerOrderReponseToOrderStatus = (response: CustomerOrderUpdateResponse): CustomerOrderStatus => {
    return {
        id: response.id,
        status: response.status,
        deliveryLocation: response.deliveryLocation
    }
}

const mapDeliveryOrderReponseToOrderStatus = (response: DeliveryOrderUpdateResponse): DeliveryOrderStatus => {
    return {
        id: response.id,
        status: response.status
    }
}

export { mapCustomerOrderReponseToOrderStatus, mapDeliveryOrderReponseToOrderStatus };