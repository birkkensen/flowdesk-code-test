import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getAllAvailableCurrencies } from '../currency-queries';

export const useGetAvailableCurrencies = (
  options?: Omit<
    UseQueryOptions<unknown, unknown, string[], string[]>,
    'queryFn' | 'queryKey'
  >
) =>
  useQuery({
    queryKey: ['get-available-currencies'],
    queryFn: async () => await getAllAvailableCurrencies(),
    ...options,
  });
