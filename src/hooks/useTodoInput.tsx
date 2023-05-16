import { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { getRecommandList } from 'api/search.service';
import { RecommandListType } from 'type/search';
import useFocus from './useFocus';
import { useDebounce } from './useDebounce';

export const useTodoInput = () => {
  const [inputText, setInputText] = useState<string>('');
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

  useEffect(() => {
    const fetchRecommand = async (inputText: string) => {
      if (!inputText) return;
      const { data } = await getRecommandList({ q: inputText });
      setRecommandList(data.result);
    };

    fetchRecommand(debounceValue);
  }, [debounceValue]);

  return {
    recommandList,
    inputText,
    setInputText,
    debounceValue,
    ref,
    onChange,
    onInputReset,
  };
};
