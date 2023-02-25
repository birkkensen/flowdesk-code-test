import { Navbar } from 'Components/navbar';
import { CurrenyStats } from 'Components/currency-stats';
import { useGetCurrencyTicker } from 'Queries/ticker';
import { useState } from 'react';
import { Form } from 'Components/form';

const App = () => {
  const [currencyPair, setCurrencyPair] = useState('');
  const { data, isInitialLoading, isError } = useGetCurrencyTicker({
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
        <Form onSubmit={onSubmit} />
        <CurrenyStats
          data={data}
          isLoading={isInitialLoading}
          isError={isError}
        />
      </section>
    </div>
  );
};

export default App;
