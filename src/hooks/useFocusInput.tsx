import { useState, useEffect, ChangeEvent, useCallback } from 'react';
import useFocus from './useFocus';

export const useFocusInput = () => {
  const [inputText, setInputText] = useState('');
  const { ref, setFocus } = useFocus();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value),
    [],
  );

  const onInputReset = useCallback(() => setInputText(''), []);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  return { inputText, ref, onChange, onInputReset };
};
