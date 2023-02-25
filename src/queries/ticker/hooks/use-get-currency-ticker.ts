import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getTickerPriceForSymbolPair } from '../ticker-queries';
import { type Ticker24Hr, type TickerPrice } from '../types';

interface HookProps {
  symbol: string;
}

export type TickerStatsFull = TickerPrice & Ticker24Hr;

export const useGetCurrencyTicker = (
  options: Omit<
    UseQueryOptions<unknown, unknown, TickerStatsFull, string[]>,
    'queryFn' | 'queryKey'
  > &
    HookProps
) =>
  useQuery({
    queryKey: ['get-currency-ticker', options.symbol],
    queryFn: async () => await getTickerPriceForSymbolPair(options.symbol),
    ...options,
  });
