import { type TickerStatsFull } from 'Queries/ticker/hooks/use-get-currency-ticker';

interface Props {
  data: TickerStatsFull;
}

export const PriceChange: React.FC<Props> = ({ data }) => {
  const tickerPercent = parseFloat(data.priceChangePercent);
  if (tickerPercent > 0) {
    return (
      <span className="text-green-500">{`↗︎ ${data.priceChangePercent}%`}</span>
    );
  }
  if (tickerPercent < 0) {
    return (
      <span className="text-red-500">{`↘︎ ${data.priceChangePercent}%`}</span>
    );
  }
  return <span>{`${data.priceChangePercent}%`}</span>;
};
