import { CurrenyStats } from 'Components/currency-stats';
import { ErrorMessage } from 'Components/error-message';
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
    return <Loader message="Loading data..." />;
  }
  if (isError) {
    return (
      <ErrorMessage description="Something went wrong - try reloading the page or updating your search query" />
    );
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
