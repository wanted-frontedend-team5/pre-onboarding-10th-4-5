import { useEffect, useState } from 'react';
import { getSearchList } from '../api/search';

const useRecommend = (keyword: string) => {
  const [recommend, setRecommend] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isRecommendRoading, setIsRecommendRoading] = useState(false);
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  const getRecommend = async () => {
    setIsRecommendRoading(true);
    const data = await getSearchList(debouncedInputValue, page);
    setRecommend(prev => [...prev, ...data.data.result]);
    setIsRecommendRoading(false);
    if (data.data.qty < data.data.page) setHasNextPage(false);
    if (data.data.result.length !== 0) {
      setPage(prev => prev + 1);
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }
  };

  useEffect(() => {
    if (debouncedInputValue === '') {
      setRecommend([]);
      return;
    }
    getRecommend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInputValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(keyword);
      setRecommend([]);
      setHasNextPage(false);
      setPage(1);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [keyword]);

  return [recommend, isRecommendRoading, getRecommend, hasNextPage] as const;
};

export default useRecommend;
