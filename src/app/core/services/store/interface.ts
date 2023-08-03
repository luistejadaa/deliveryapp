import { Location, ProductsCaregoriesResponse } from "../../models";
import { ProductsResponse } from "../../models/response/products-response";
import { StoreResponse } from "../../models/response/store-response";
import { APIResponse } from "../../network";
    /**
     * Defines the methods for interacting with the store service.
     */
    interface IStoreService {

        /**
         * Retrieves the stores available at the specified location.
         * @param location The location to retrieve stores for.
         * @returns A Promise that resolves with the available stores.
         */
        getStoresAvailable: (location: Location) => Promise<APIResponse<StoreResponse[]>>;

        /**
         * Retrieves the products available at the specified store.
         * @param storeId The ID of the store to retrieve products for.
         * @returns A Promise that resolves with the available products.
         */
        getProducts: (storeId: string) => Promise<APIResponse<ProductsResponse>>;

        /**
         * Retrieves the categories available at the specified store.
         * @param storeId The ID of the store to retrieve categories for.
         * @returns A Promise that resolves with the available categories.
         */
        getCategories: (storeId: string) => Promise<APIResponse<ProductsCaregoriesResponse>>;

        /**
         * Retrieves the products available in the specified category at the specified store.
         * @param storeId The ID of the store to retrieve products for.
         * @param categoryId The ID of the category to retrieve products for.
         * @returns A Promise that resolves with the available products in the specified category.
         */
        getProductsByCategory: (storeId: string, categoryId: string) => Promise<APIResponse<ProductsResponse>>;
    }

export type { IStoreService };