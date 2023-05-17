import apiRequest from 'api';

const RESOURCE = '/search';
const MAX_LENGTH = 10;

export const getRecommend = async keyword => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`, {
      params: { q: keyword, limit: MAX_LENGTH },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('API getRecommend error');
  }
};
