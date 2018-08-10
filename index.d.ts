export interface AxiosTransformer {
  (data: any): any;
}

export interface AxiosAdapter {
  <D>(config: AxiosRequestConfig): AxiosPromise<D>;
}

export interface AxiosBasicCredentials {
  username: string;
  password: string;
}

export interface AxiosProxyConfig {
  host: string;
  port: number;
}

export interface AxiosRequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig;
  cancelToken?: CancelToken;
}

export interface AxiosResponse<D> {
  data: D;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
}

export interface AxiosError<D> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  response?: AxiosResponse<D>;
}

export interface AxiosPromise<D> extends Promise<AxiosResponse<D>> {
}

export interface CancelStatic {
  new (message?: string): Cancel;
}

export interface Cancel {
  message: string;
}

export interface Canceler {
  (message?: string): void;
}

export interface CancelTokenStatic {
  new (executor: (cancel: Canceler) => void): CancelToken;
  source(): CancelTokenSource;
}

export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested(): void;
}

export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

export interface AxiosInterceptorManager<V> {
  use(onFulfilled: (value: V) => V | Promise<V>, onRejected?: (error: any) => any): number;
  eject(id: number): void;
}

export interface AxiosInstance {
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };
  request<D>(config: AxiosRequestConfig): AxiosPromise<D>;
  get<D>(url: string, config?: AxiosRequestConfig): AxiosPromise<D>;
  delete<D>(url: string, config?: AxiosRequestConfig): AxiosPromise<D>;
  head<D>(url: string, config?: AxiosRequestConfig): AxiosPromise<D>;
  post<D>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<D>;
  put<D>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<D>;
  patch<D>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<D>;
}

export interface AxiosStatic extends AxiosInstance {
  <D>(config: AxiosRequestConfig): AxiosPromise<D>;
  <D>(url: string, config?: AxiosRequestConfig): AxiosPromise<D>;
  create(config?: AxiosRequestConfig): AxiosInstance;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
}

declare const Axios: AxiosStatic;

export default Axios;
