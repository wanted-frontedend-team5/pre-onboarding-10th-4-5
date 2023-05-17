import { useState, useEffect, useCallback } from 'react';
import { RecommandListType } from 'type/search';
import { SearchPayLoadType } from 'api/search.type';
import { getRecommandList } from 'api/search.service';

export const useTodoFetch = (value: string) => {
  const [searchPayload, setSearchPayload] = useState<SearchPayLoadType>();
  const [recommandList, setRecommandList] = useState<RecommandListType>([]);
  const [isEndPage, setIsEndPage] = useState<boolean>(false);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);

  const fetchNextRecommandList = useCallback(async () => {
    if (!value) return;
    if (!searchPayload) return;
    if (searchPayload.qty < searchPayload.limit) {
      setIsEndPage(true);
      return;
    }

    const totalPage = Math.ceil(searchPayload.total / searchPayload.limit);

    if (searchPayload.page <= totalPage) {
      setFetchLoading(true);
      const result = await getRecommandList({
        q: value,
        page: searchPayload.page + 1,
      });
      setFetchLoading(false);

      setSearchPayload(result.data);
      setRecommandList(prev => [...prev, ...result.data.result]);
    } else {
      setIsEndPage(true);
    }
  }, [value, searchPayload]);

  useEffect(() => {
    const fetchRecommand = async (inputText: string) => {
      if (!inputText) return;
      setFetchLoading(true);
      const { data } = await getRecommandList({ q: inputText });
      if (data.qty < data.limit) setIsEndPage(true);
      setSearchPayload(data);
      setRecommandList(data.result);
      setFetchLoading(false);
    };

    setIsEndPage(false);
    fetchRecommand(value);

    return () => {
      setRecommandList([]);
      setIsEndPage(true);
    };
  }, [value]);

  return { isEndPage, fetchLoading, recommandList, fetchNextRecommandList };
};
