import { useState, useEffect, useCallback } from 'react';
import { RecommandListType } from 'type/search';
import { SearchPayLoadType } from 'api/search.type';
import { getRecommandList } from 'api/search.service';

export const useTodoFetch = (value: string) => {
  const [searchPayload, setSearchPayload] = useState<SearchPayLoadType>();
  const [recommandList, setRecommandList] = useState<RecommandListType>([]);
  const [isEndPage, setIsEndPage] = useState<boolean>(false);

  const fetchNextRecommandList = useCallback(async () => {
    if (!value) return;
    if (!searchPayload) return;
    if (searchPayload.page <= searchPayload.limit) {
      const result = await getRecommandList({
        q: value,
        page: searchPayload.page + 1,
      });

      setSearchPayload(result.data);
      setRecommandList(prev => [...prev, ...result.data.result]);
    } else {
      setIsEndPage(true);
    }
  }, [value, searchPayload]);

  useEffect(() => {
    const fetchRecommand = async (inputText: string) => {
      if (!inputText) return;
      const result = await getRecommandList({ q: inputText });
      setSearchPayload(result.data);
      setRecommandList(result.data.result);
    };
    setIsEndPage(false);
    fetchRecommand(value);

    return () => {
      setRecommandList([]);
    };
  }, [value]);

  return { isEndPage, recommandList, fetchNextRecommandList };
};
