import { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { getRecommandList } from 'api/search.service';
import { RecommandListType } from 'type/search';
import { SearchPayLoadType } from 'api/search.type';
import useFocus from './useFocus';
import { useDebounce } from './useDebounce';

export const useTodoInput = () => {
  const [inputText, setInputText] = useState<string>('');
  const [searchPayload, setSearchPayload] = useState<SearchPayLoadType | null>(
    null,
  );
  const [recommandList, setRecommandList] = useState<RecommandListType>([]);
  const { ref, setFocus } = useFocus();
  const debounceValue = useDebounce<string>(inputText);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onInputReset = useCallback(() => {
    setInputText('');
    setRecommandList([]);
  }, []);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const fetchNextRecommandList = useCallback(async () => {
    if (!debounceValue) return;
    if (searchPayload === null) return;
    if (searchPayload.page <= searchPayload.limit) {
      const result = await getRecommandList({
        q: debounceValue,
        page: searchPayload.page + 1,
      });

      setSearchPayload(result.data);
      setRecommandList(prev => [...prev, ...result.data.result]);
    }
  }, [debounceValue, searchPayload]);

  useEffect(() => {
    const fetchRecommand = async (inputText: string) => {
      if (!inputText) return;
      const result = await getRecommandList({ q: inputText });
      setSearchPayload(result.data);
      setRecommandList(result.data.result);
    };

    fetchRecommand(debounceValue);
  }, [debounceValue]);

  return {
    inputText,
    setInputText,
    debounceValue,
    ref,
    onChange,
    recommandList,
    onInputReset,
    fetchNextRecommandList,
  };
};
