import { useState, useEffect } from 'react';

export const useDebounce = (callback: any, delay: number) => {
  const [debouncedCallback, setDebouncedCallback] = useState(() => callback);

  useEffect(() => {
    setDebouncedCallback(() => callback);
  }, [callback]);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      debouncedCallback();
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [debouncedCallback, delay]);

  return debouncedCallback;
};
// import { useEffect, useState } from 'react';

// function useDebounce<T>(value: T, delay?: number): T {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value);

//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// export default useDebounce;
