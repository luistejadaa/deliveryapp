import {HttpStatusCode} from 'axios';
import {
  Location,
  ProductsCaregoriesResponse,
  StoreResponse,
} from '../../models';
import {ProductsResponse} from '../../models/response/products-response';
import {APIResponse} from '../../network';
import {IStoreService} from './interface';

class StoreService implements IStoreService {
  getStoresAvailable = (
    location: Location,
  ): Promise<APIResponse<StoreResponse[]>> => {
    throw new Error('Method not implemented.');
  };

  getProducts = async (
    storeId: string,
  ): Promise<APIResponse<ProductsResponse>> => {
    throw new Error('Method not implemented.');
  };

  getCategories = async (
    storeId: string,
  ): Promise<APIResponse<ProductsCaregoriesResponse>> => {
    throw new Error('Method not implemented.');
  };

  getProductsByCategory = async (
    storeId: string,
    categoryId: string,
  ): Promise<APIResponse<ProductsResponse>> => {
    throw new Error('Method not implemented.');
  };
}

const storeService: IStoreService = new StoreService();
export {storeService};
