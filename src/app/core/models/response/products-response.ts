import { Pagination } from "../pagination";
import { Product } from "../product";

interface ProductsResponse {
    products: Product[];
    pagination: Pagination;
}

export type { ProductsResponse };