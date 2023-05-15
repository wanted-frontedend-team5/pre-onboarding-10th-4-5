import axios, { AxiosRequestConfig } from 'axios';
import { TodoInputType, TodoListType } from 'type/todo';

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

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest: TodoApiRequest = {
  get: url => baseInstance.get(url),
  delete: url => baseInstance.delete(url),
  post: (url, data) => baseInstance.post(url, data),
};

export default apiRequest;
