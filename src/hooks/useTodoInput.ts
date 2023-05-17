import { useState, useEffect, ChangeEvent, useCallback } from 'react';
import useFocus from './useFocus';
import { useDebounce } from './useDebounce';

export const useTodoInput = () => {
  const [inputText, setInputText] = useState<string>('');

  const { focusRef, setFocusRef } = useFocus();
  const debounceValue = useDebounce<string>(inputText);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  useEffect(() => {
    setFocusRef();
  }, [setFocusRef]);

  return {
    inputText,
    setInputText,
    debounceValue,
    focusRef,
    onChange,
  };
};
