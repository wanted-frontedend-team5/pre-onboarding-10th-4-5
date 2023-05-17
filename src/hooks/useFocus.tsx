import { useRef, useState } from 'react';

const useFocus = () => {
  const focusRef = useRef<HTMLInputElement>(null);
  const setFocusRef = () => {
    if (!focusRef.current) return;
    focusRef.current.focus();
  const ref = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // fix: event 타입 수정 필요
  const setFocus = (event: any) => {
    if (event.target === ref.current) {
      setIsVisible(true);
      console.log('focus input');
    } else {
      setIsVisible(false);
      console.log('focus out');
    }
    document.addEventListener('click', setFocus, true);
  };

  return { focusRef, setFocusRef };
};

export default useFocus;