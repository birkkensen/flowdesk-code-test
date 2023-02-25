import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getRecentTrades } from '../trades-queries';
import { type Trade } from '../types';

interface HookProps {
  symbol: string;
}

export const useGetRecentTrades = (
  options: Omit<
    UseQueryOptions<unknown, unknown, Trade[], string[]>,
    'queryFn' | 'queryKey'
  > &
    HookProps
) =>
  useQuery({
    queryKey: ['get-recent-trades', options.symbol],
    queryFn: async () => await getRecentTrades(options.symbol),
    ...options,
  });
