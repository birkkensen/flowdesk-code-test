import { Navbar } from 'Components/navbar';
import { useState } from 'react';
import { Form } from 'Components/form';
import { useGetBinanceCurrencyPairInfo } from 'Queries/binance-market-info';
import { Dashboard } from 'Components/dashboard';

const App = () => {
  const [currencyPair, setCurrencyPair] = useState('');

  const { data, isInitialLoading, isError } = useGetBinanceCurrencyPairInfo({
    symbol: currencyPair,
    enabled: !(currencyPair.length === 0),
  });

  const onSubmit = ({ symbol }: { symbol: string }) => {
    setCurrencyPair(symbol);
  };
  return (
    <div>
      <Navbar />
      <section className="flex w-full flex-col items-start justify-center p-4 lg:px-20 lg:py-16">
        <div className="mb-2 grid gap-2">
          <h1 className="text-4xl text-slate-200">Search for a symbol pair</h1>
          <p className="text-slate-300">
            This could be for example <span className="font-bold">ETHBTC</span>{' '}
            or <span className="font-bold">LRCETH</span>
          </p>
        </div>
        <Form onSubmit={onSubmit} />
        <Dashboard data={data} isLoading={isInitialLoading} isError={isError} />
      </section>
    </div>
  );
};

export default App;
