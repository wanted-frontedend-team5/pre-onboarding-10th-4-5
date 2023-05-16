import axios from 'axios';
import { ApiRequest, Todo } from '../types';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest: ApiRequest<Todo> = {
  get: url => baseInstance.get(url),
  delete: url => baseInstance.delete(url),
  post: (url, data) => baseInstance.post(url, data),
};

export default apiRequest;
