import { useCallback, useRef } from 'react';

export const useDebounce = ({ cb, wait = 100 }) => {
  const timeout = useRef();

  const debouncedFn = useCallback(
    (...args) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        cb.apply(null, args);
      }, wait);
    },
    [cb]
  );

  return debouncedFn;
};
