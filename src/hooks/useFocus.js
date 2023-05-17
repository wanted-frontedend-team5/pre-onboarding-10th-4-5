import { useRef, useCallback, useEffect } from 'react';

const useFocus = () => {
  const ref = useRef();
  const setFocus = useCallback(() => {
    return ref.current && ref.current.focus();
  }, []);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  return { ref };
};

export default useFocus;
