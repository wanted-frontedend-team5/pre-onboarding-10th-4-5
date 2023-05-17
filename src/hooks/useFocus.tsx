import { useRef } from 'react';

const useFocus = () => {
  const focusRef = useRef<HTMLInputElement>(null);
  const setFocusRef = () => {
    if (!focusRef.current) return;
    focusRef.current.focus();
  };

  return { focusRef, setFocusRef };
};

export default useFocus;
