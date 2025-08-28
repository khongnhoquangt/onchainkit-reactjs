import { useRef, useLayoutEffect, useEffect, useCallback } from "react";
const useDebounce = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );
};
export {
  useDebounce
};
//# sourceMappingURL=useDebounce.js.map
