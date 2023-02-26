import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getBaseAndQuoteAsset } from '../currency-queries';
import { type ExchangeInfo } from '../types';

interface HookProps {
  symbol?: string;
}

export const useGetCurrencyPair = (
  options: Omit<
    UseQueryOptions<unknown, unknown, ExchangeInfo, Array<string | undefined>>,
    'queryFn' | 'queryKey'
  > &
    HookProps
) =>
  useQuery({
    queryKey: ['get-currency', options?.symbol],
    queryFn: async () => await getBaseAndQuoteAsset(options?.symbol),
    ...options,
  });
