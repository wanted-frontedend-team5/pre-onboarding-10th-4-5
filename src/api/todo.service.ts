import { baseInstance } from 'api';
import { TodoInputType } from 'type/todo';
import { TodoApiRequest } from './todo.type';

const RESOURCE = '/todos';

const apiRequest: TodoApiRequest = {
  get: url => baseInstance.get(url),
  delete: url => baseInstance.delete(url),
  post: (url, data) => baseInstance.post(url, data),
};

export const getTodoList = async () => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`);

    return response;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};

export const createTodo = async (data: TodoInputType) => {
  try {
    const response = await apiRequest.post(`${RESOURCE}`, data);

    return response;
  } catch (error) {
    throw new Error('API createTodo error');
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await apiRequest.delete(`${RESOURCE}/${id}`);

    return response;
  } catch (error) {
    throw new Error('API deleteTodo error');
  }
};
