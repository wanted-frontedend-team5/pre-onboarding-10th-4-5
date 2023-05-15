import { useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    if (!ref.current) return;
    ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
