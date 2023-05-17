/* eslint-disable no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios';
import { TodoInputType, TodoListType, TodoType } from 'type/todo';

type TodoListResponseType = {
  data: TodoListType;
  message: string;
  opcode: string;
};

type TodoItemResponseType = {
  data: TodoType;
  message: string;
  opcode: string;
};

type TodoApiRequest = {
  get: (
    url: string,
    request?: AxiosRequestConfig,
  ) => Promise<TodoListResponseType>;
  delete: (
    url: string,
    request?: AxiosRequestConfig,
  ) => Promise<TodoItemResponseType>;
  post: (url: string, data: TodoInputType) => Promise<TodoItemResponseType>;
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
