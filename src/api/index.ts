import axios, { AxiosRequestConfig } from 'axios';
import { TodoInputType, TodoListType } from '../types/todo';

type ResponseType = {
  data: TodoListType;
  message: string;
  opcode: string;
};

type TodoApiRequest = {
  get: (url: string, request?: AxiosRequestConfig) => Promise<ResponseType>;
  delete: (url: string, request?: AxiosRequestConfig) => Promise<ResponseType>;
  post: (url: string, data: TodoInputType) => Promise<ResponseType>;
};

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const apiRequest = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

apiRequest.interceptors.response.use(({ data }) => data);

export default apiRequest as TodoApiRequest;
