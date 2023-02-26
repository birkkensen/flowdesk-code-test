import { CurrenyStats } from 'Components/currency-stats';
import { Loader } from 'Components/loader';
import { Table } from 'Components/table';
import { type CurrencyPairData } from 'Queries/binance-market-info/hooks/user-get-binance-currency-pair';

interface Props {
  data: CurrencyPairData | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const Dashboard: React.FC<Props> = ({ data, isError, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Something went wrong, try refreshing the page.</div>;
  }
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row-reverse md:items-start">
      {data && (
        <>
          <CurrenyStats ticker={data.ticker} exchangeInfo={data.exchangeInfo} />
          <Table data={data.recentTrades} />
        </>
      )}
    </div>
  );
};
