/* eslint-disable no-unused-vars */
export interface Todo {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface InputValue {
  title: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  opcode: number;
}

export interface ApiRequest<T> {
  get: (url: string, request?: AxiosRequestConfig) => Promise<ApiResponse<T[]>>;
  delete: (
    url: string,
    request?: AxiosRequestConfig,
  ) => Promise<ApiResponse<T>>;
  post: (
    url: string,
    data: InputValue,
    config?: AxiosRequestConfig,
  ) => Promise<ApiResponse<T>>;
}
