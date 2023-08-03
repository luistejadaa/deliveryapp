import Axios, {AxiosInstance, AxiosRequestConfig, HttpStatusCode} from 'axios';
import {secureStorageService} from '../services';
import {AuthConstants, StorageKeys} from '../constants';
import {IEndpoint} from '../endpoints';
import {cryptoService} from '../services/crypto/crypto-service';
import {excludeCyrptoEndpoints} from '../utils';

/**
 * Represents an API request.
 */
export interface APIRequest {
  endpoint: IEndpoint;
  params?: any;
  headers?: any;
  data?: any;
}

/**
 * Represents an API response.
 */
export interface APIResponse<T> {
  status: HttpStatusCode;
  data: T;
}

/**
 * Represents a network manager.
 */
interface INetworkManager {
  get: <T>(request: APIRequest) => Promise<APIResponse<T>>;
  post: <T>(request: APIRequest) => Promise<APIResponse<T>>;
  put: <T>(request: APIRequest) => Promise<APIResponse<T>>;
  delete: <T>(request: APIRequest) => Promise<APIResponse<T>>;
}

/**
 * Represents a network manager that uses Axios.
 */
export class NetworkManager implements INetworkManager {
  private axiosConfig: AxiosRequestConfig<any>;
  private readonly axiosInstance: AxiosInstance;

  /**
   * Creates a new instance of the NetworkManager class.
   */
  constructor() {
    this.axiosConfig = {
      baseURL: 'baseURL',
      timeout: 1000 * 15,
      responseType: 'json',
    };
    this.axiosInstance = Axios.create(this.axiosConfig);
    this.setAuthInterceptor();
    this.setCryptInterceptor();
    this.setDecryptInterceptor();
  }

  /**
   * Sets up an authentication interceptor that adds an authorization header to the request if an auth token is present.
   */
  private setAuthInterceptor = () => {
    this.axiosInstance.interceptors.request.use(
      request => {
        if (request.headers) {
          const authToken = secureStorageService.get(StorageKeys.authToken);
          if (authToken) {
            request.headers.Authorization = `${AuthConstants.authenticationType} ${authToken}`;
          }
        }
        return request;
      },
      error => {
        return Promise.reject(error);
      },
    );
  };

  /**
   * Sets up a cryptography interceptor that encrypts the request data if the endpoint is not excluded.
   * @returns void
   */
  setCryptInterceptor = () => {
    this.axiosInstance.interceptors.request.use(
      async request => {
        if (
          !excludeCyrptoEndpoints.find(
            endpoint => request.url && request.url.includes(endpoint.path),
          )
        ) {
          const data = request.data;
          const jsonStr = JSON.stringify(data);
          const result = await cryptoService.encrypt(jsonStr);
          request.data.payload = result;
        }
        return request;
      },
      error => {
        return Promise.reject(error);
      },
    );
  };

  /**
   * Sets up a decryption interceptor that decrypts the response data if the endpoint is not excluded.
   * @returns void
   */
  setDecryptInterceptor = () => {
    this.axiosInstance.interceptors.response.use(
      async response => {
        if (
          !excludeCyrptoEndpoints.find(
            endpoint =>
              response.config.url &&
              response.config.url.includes(endpoint.path),
          )
        ) {
          const data = response.data.payload;
          const result = await cryptoService.decrypt(data);
          const object = JSON.parse(result);
          const newResponse: any = {
            status: response.status,
            data: object,
          };
          return newResponse;
        }
        return response;
      },
      error => {
        return Promise.reject(error);
      },
    );
  };

  /**
   * Sends a GET request to the specified URL.
   * @param request The API request.
   * @returns A promise that resolves to the API response.
   */
  get = async <T>(request: APIRequest): Promise<APIResponse<T>> => {
    return await this.axiosInstance.get(request.endpoint.path, {
      params: request.params,
      headers: request.headers,
    });
  };

  /**
   * Sends a POST request to the specified URL.
   * @param request The API request.
   * @returns A promise that resolves to the API response.
   */
  post = async <T>(request: APIRequest): Promise<APIResponse<T>> => {
    return await this.axiosInstance.post(request.endpoint.path, request.data, {
      params: request.params,
      headers: request.headers,
    });
  };

  /**
   * Sends a PUT request to the specified URL.
   * @param request The API request.
   * @returns A promise that resolves to the API response.
   */
  put = async <T>(request: APIRequest): Promise<APIResponse<T>> => {
    return await this.axiosInstance.put(request.endpoint.path, request.data, {
      params: request.params,
      headers: request.headers,
    });
  };

  /**
   * Sends a DELETE request to the specified URL.
   * @param request The API request.
   * @returns A promise that resolves to the API response.
   */
  delete = async <T>(request: APIRequest): Promise<APIResponse<T>> => {
    return await this.axiosInstance.delete(request.endpoint.path, {
      params: request.params,
      headers: request.headers,
    });
  };
}

const networkManager: INetworkManager = new NetworkManager();
export {networkManager};
