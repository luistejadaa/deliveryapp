import { Pagination, Store } from "..";

interface StoreResponse {
    stores: Store[];
    pagination: Pagination;
}

export type { StoreResponse };