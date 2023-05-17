import { useEffect, useState } from 'react';

export const useDebounce = (callback, delay) => {
  const [debounceCallback, setDebounceCallback] = useState(() => callback);

  useEffect(() => {
    setDebounceCallback(() => callback);
  }, [callback]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      debounceCallback();
    }, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [debounceCallback, delay]);

  return debounceCallback;
};
