import { baseInstance } from 'api';
import { SearchApiRequest, SearchParamsType } from './search.type';

const RESOURCE = '/search';

const apiRequest: SearchApiRequest = {
  get: params =>
    baseInstance.get(RESOURCE, {
      params: {
        q: params.q,
        page: params?.page,
        limit: params?.limit,
      },
    }),
};

export const getRecommandList = async (params: SearchParamsType) => {
  try {
    const response = await apiRequest.get(params);

    return response;
  } catch (error) {
    throw new Error('API getRecommandList error');
  }
};
