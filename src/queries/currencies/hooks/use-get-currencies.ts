import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getAllAvailableCurrencies } from '../currency-queries';
import { type ExchangeInfo } from '../types';

export const useGetAvailableCurrencies = (
  options?: Omit<
    UseQueryOptions<unknown, unknown, ExchangeInfo, string[]>,
    'queryFn' | 'queryKey'
  >
) =>
  useQuery({
    queryKey: ['get-available-currencies'],
    queryFn: async () => await getAllAvailableCurrencies(),
    ...options,
  });
