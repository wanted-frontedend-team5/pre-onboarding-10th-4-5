/* eslint-disable no-unused-vars */
import { BaseResponseType } from 'api';
import { AxiosRequestConfig } from 'axios';
import { TodoInputType, TodoListType, TodoType } from 'type/todo';

interface TodoListResponseType extends BaseResponseType {
  data: TodoListType;
}

interface TodoItemResponseType extends BaseResponseType {
  data: TodoType;
}

export interface TodoApiRequest {
  get: (
    url: string,
    request?: AxiosRequestConfig,
  ) => Promise<TodoListResponseType>;
  delete: (
    url: string,
    request?: AxiosRequestConfig,
  ) => Promise<TodoItemResponseType>;
  post: (url: string, data: TodoInputType) => Promise<TodoItemResponseType>;
}
