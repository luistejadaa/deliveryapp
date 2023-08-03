import { Product } from "./product";

interface Cart {
    id: string;
    storeId: string;
    products: Product[];
}

export type { Cart };