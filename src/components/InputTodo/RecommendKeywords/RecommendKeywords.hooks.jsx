import { getRecommend } from 'api/recommend';
import { useDebounce } from 'hooks/useDebounce';
import { useState, useCallback } from 'react';

const DEBOUNCE_TIME = 500;

export const useRecommend = keyword => {
  const [recommendList, setRecommendList] = useState([]);

  const fetchRecommendList = useCallback(async () => {
    if (keyword.length > 0) {
      const response = await getRecommend(keyword);
      setRecommendList(response.result);
    }
    if (keyword.length === 0) {
      setRecommendList([]);
    }
    console.log(recommendList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useDebounce(fetchRecommendList, DEBOUNCE_TIME);

  return { recommendList };
};
