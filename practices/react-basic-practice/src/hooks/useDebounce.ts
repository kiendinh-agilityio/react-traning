import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string, delay = 500): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value.toLowerCase());
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
