import { Navbar } from 'Components/navbar';
import { CurrenyStats } from 'Components/currency-stats';
import { useGetCurrencyTicker } from 'Queries/ticker';
import { useState } from 'react';
import { Form } from 'Components/form';
import { useGetRecentTrades } from 'Queries/trades';
import { Table } from 'Components/table';

const App = () => {
  const [currencyPair, setCurrencyPair] = useState('');

  const { data, isInitialLoading, isError } = useGetCurrencyTicker({
    symbol: currencyPair,
    enabled: !(currencyPair.length === 0),
  });
  const { data: recentTrades } = useGetRecentTrades({
    symbol: currencyPair,
    enabled: !(currencyPair.length === 0),
  });

  const onSubmit = ({ symbol }: { symbol: string }) => {
    setCurrencyPair(symbol);
  };

  return (
    <div>
      <Navbar />
      <section className="p-16">
        <h1 className="mb-8 text-4xl">Search for a currency pair</h1>
        <p className="my-4">
          Search for a currency pair. Example
          <span className="mx-1 rounded-md bg-neutral py-1 px-2 text-sm">
            ETHBTC
          </span>
          This means ETH is the base asset and BTC is the quote asset
        </p>
        <Form onSubmit={onSubmit} />
        <div className="flex w-full justify-between gap-4">
          <Table recentTrades={recentTrades} />
          <CurrenyStats
            data={data}
            isLoading={isInitialLoading}
            isError={isError}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
