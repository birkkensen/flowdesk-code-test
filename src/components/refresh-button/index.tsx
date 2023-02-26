import {
  type RefetchOptions,
  type RefetchQueryFilters,
  type QueryObserverResult,
} from '@tanstack/react-query';
import { type CurrencyPairData } from 'Queries/binance-market-info/hooks/user-get-binance-currency-pair';

interface Props {
  isSuccess: boolean;
  isFetching: boolean;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<CurrencyPairData, unknown>>;
}

export const RefreshButton: React.FC<Props> = ({
  refetch,
  isSuccess,
  isFetching,
}) => {
  return (
    <button
      disabled={!isSuccess}
      className={`w-28 rounded-lg bg-gray-900 p-2.5 text-white transition active:scale-95 ${
        !isSuccess || isFetching ? 'bg-slate-800 text-gray-700' : ''
      }`}
      onClick={async () => await refetch()}
      type="button"
    >
      {isFetching ? 'Loading...' : 'Refresh'}
    </button>
  );
};
