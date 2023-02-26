import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getBinanceCurrencyPairInfo } from '../get-binance-currency-pair';
import {
  type ExchangeInfo,
  type Ticker24Hr,
  type TickerPrice,
  type Trade,
} from '../types';

interface HookProps {
  symbol: string;
  limit?: number;
}

export type CurrencyPairData = {
  recentTrades: Trade[];
  exchangeInfo: ExchangeInfo;
  ticker: TickerPrice & Ticker24Hr;
};

export const useGetBinanceCurrencyPairInfo = (
  options: Omit<
    UseQueryOptions<
      unknown,
      unknown,
      CurrencyPairData,
      Array<string | number | undefined>
    >,
    'queryFn' | 'queryKey'
  > &
    HookProps
) =>
  useQuery({
    queryKey: ['get-available-currencies', options.symbol, options?.limit],
    queryFn: async () =>
      await getBinanceCurrencyPairInfo(options.symbol, options?.limit),
    ...options,
  });
