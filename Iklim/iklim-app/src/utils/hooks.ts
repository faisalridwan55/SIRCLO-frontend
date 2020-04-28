import { useState, useCallback, useRef, useEffect } from "react";
import { AxiosError } from "axios";

// Inspired from one of our utility functions at STOQO
export function useAPI<T>(
  fetchPromise: (...args) => Promise<{ data: T }>
): [T | null, (...args) => Promise<void>, boolean, AxiosError | null] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetch = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchPromise(...args);
        setData(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchPromise]
  );
  return [data, fetch, isLoading, error];
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
