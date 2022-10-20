import { useState } from "react";

type Props<T> = {
  fetcher: (...args: unknown[]) => Promise<T>;
};
/**
 * Errors and exceptions are two different things
 * error - expected part of a flow(for example if user unauthorized)
 * exception - smth unexpected. For example: when object that came from the server has incorrect schema
 */
export const useFetch = <T>({ fetcher }: Props<T>) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [exception, setException] = useState<unknown>(null);

  const getDecoratedFetcher = () => {
    return async () => {
      setLoading(true);
      try {
        const result = await fetcher();
        setData(result);
        setLoading(false);
      } catch (e) {
        setException(e);
        setLoading(false);
      }
    };
  };

  return {
    data,
    loading,
    exception,
    fetcher: getDecoratedFetcher(),
  };
};
