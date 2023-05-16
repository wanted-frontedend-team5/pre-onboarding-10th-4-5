import { useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [inputText, setInputText] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
  }, []);
  const reset = useCallback(() => setInputText(''), []);

  return { inputText, onChange, reset };
};

export default useInput;
