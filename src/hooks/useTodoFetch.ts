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
    if (searchPayload.qty < searchPayload.limit) {
      setIsEndPage(true);
      return;
    }

    const totalPage = Math.ceil(searchPayload.total / searchPayload.limit);

    if (searchPayload.page <= totalPage) {
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
      const { data } = await getRecommandList({ q: inputText });
      if (data.qty < data.limit) setIsEndPage(true);
      setSearchPayload(data);
      setRecommandList(data.result);
    };

    setIsEndPage(false);
    fetchRecommand(value);

    return () => {
      setRecommandList([]);
      setIsEndPage(true);
    };
  }, [value]);

  return { isEndPage, recommandList, fetchNextRecommandList };
};
