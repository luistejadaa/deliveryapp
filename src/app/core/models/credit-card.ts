interface CreditCard {
    id: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    isDefault: boolean;
}

export type { CreditCard };