import { Navbar } from 'Components/navbar';
import { CurrenyStats } from 'Components/currency-stats';

import { useState } from 'react';
import { Form } from 'Components/form';

import { Table } from 'Components/table';

import { BaseQuoteAsset } from 'Components/currency-stats/components/base-quote-asset';
import { Loader } from 'Components/loader';
import { useGetBinanceCurrencyPairInfo } from 'Queries/binance-market-info';

const App = () => {
  const [currencyPair, setCurrencyPair] = useState('');

  const { data, isInitialLoading } = useGetBinanceCurrencyPairInfo({
    symbol: currencyPair,
    enabled: !(currencyPair.length === 0),
  });

  const onSubmit = ({ symbol }: { symbol: string }) => {
    setCurrencyPair(symbol);
  };
  return (
    <div>
      <Navbar />
      <section className="py-16 px-24">
        <h1 className="mb-8 text-4xl">Search for a currency pair</h1>
        <p className="my-4">
          Search for a currency pair. Example
          <span className="mx-1 rounded-md bg-neutral py-1 px-2 text-sm">
            ETHBTC
          </span>
          This means ETH is the base asset and BTC is the quote asset
        </p>
        <Form onSubmit={onSubmit} />
        {isInitialLoading ? (
          <Loader />
        ) : (
          <div className="flex w-full items-start gap-4">
            <BaseQuoteAsset data={data?.exchangeInfo} />
            <Table data={data?.recentTrades} />
            <CurrenyStats data={data?.ticker} />
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
