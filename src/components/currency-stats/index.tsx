import { BaseQuoteAsset } from 'Components/currency-stats/components/base-quote-asset';
import dayjs from 'dayjs';
import { type ExchangeInfo } from 'Queries/binance-market-info/types';
import { type TickerStatsFull } from 'Queries/ticker/hooks/use-get-currency-ticker';
import { PriceChange } from './components/price-change';

interface Props {
  ticker: TickerStatsFull | undefined;
  exchangeInfo: ExchangeInfo | undefined;
}
export const CurrenyStats: React.FC<Props> = ({ ticker, exchangeInfo }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <BaseQuoteAsset data={exchangeInfo} />
      <div className="grid w-full grid-flow-row grid-cols-1 gap-x-6 rounded-2xl border-gray-700 bg-gray-800">
        <div className="grid w-full grid-cols-1 gap-x-6 border-b-[1px] border-gray-700 px-6 py-4">
          <div className="text-slate-400">{ticker?.symbol}</div>
          <div className="text-4xl font-extrabold">{ticker?.price}</div>
          <div className="text-xs">
            {dayjs(new Date()).format('YYYY-MM-DD')}
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 border-b-[1px] border-gray-700 px-6 py-4">
          <div className="text-slate-400">Price change 24h</div>
          <div className="text-4xl font-extrabold">{ticker?.priceChange}</div>
          <div className="text-xs">
            <PriceChange percent={ticker?.priceChangePercent} />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 border-b-[1px] border-gray-700 px-6 py-4">
          <div className="text-slate-400">Price 24h High</div>
          <div className="text-4xl font-extrabold">{ticker?.highPrice}</div>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 px-6 py-4">
          <div className="text-slate-400">Price 24h Low</div>
          <div className="text-4xl font-extrabold">{ticker?.lowPrice}</div>
        </div>
      </div>
    </div>
  );
};
