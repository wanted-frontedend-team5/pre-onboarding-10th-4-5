import { useRef, useState } from 'react';

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const setFocus = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.target === ref.current) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    document.addEventListener('onClick', () => {
      setIsVisible(true);
    });
  };

  return { ref, setFocus, isVisible, setIsVisible };
};
