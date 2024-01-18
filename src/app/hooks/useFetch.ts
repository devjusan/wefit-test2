import { fetcher } from '@/src/lib/config';
import useSWR, { SWRResponse } from 'swr';

const useFetch = <T>(url: string | null) => {
  const { data, error, isLoading } = useSWR<SWRResponse, Error>(url, fetcher);

  return {
    response: data,
    isLoading,
    error
  } as unknown as {
    response: T;
    isLoading: boolean;
    error: Error;
  };
};

export default useFetch;
