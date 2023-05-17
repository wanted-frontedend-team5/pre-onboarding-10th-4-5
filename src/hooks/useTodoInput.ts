import { useState, ChangeEvent, useCallback } from 'react';
import { useDebounce } from './useDebounce';

export const useTodoInput = () => {
  const [inputText, setInputText] = useState<string>('');
  const debounceValue = useDebounce<string>(inputText);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  return {
    inputText,
    setInputText,
    debounceValue,
    onChange,
  };
};
