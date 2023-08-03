import { Pagination } from "../pagination";
import { Product } from "../product";

interface ProductsCaregoriesResponse {
    products: Product[];
    pagination: Pagination;
}

export type { ProductsCaregoriesResponse };