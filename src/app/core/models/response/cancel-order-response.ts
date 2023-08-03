interface CancelOrderReponse {
    orderId: string;
    status: 'CANCELLED' | 'NOT_CANCELLED';
}

export type { CancelOrderReponse };