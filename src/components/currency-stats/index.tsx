import { BaseQuoteAsset } from 'Components/currency-stats/components/base-quote-asset';
import dayjs from 'dayjs';
import {
  type ExchangeInfo,
  type TickerStatsFull,
} from 'Queries/binance-market-info/types';
import { PriceChange } from './components/price-change';
import { StyledStats, StyledStat } from './styled';

interface Props {
  ticker: TickerStatsFull;
  exchangeInfo: ExchangeInfo;
}
export const CurrenyStats: React.FC<Props> = ({ ticker, exchangeInfo }) => {
  const parseAndroundNumber = (num: string) => {
    const parsedNum = parseFloat(num);
    return parsedNum > 1000 ? parsedNum.toFixed(3) : parsedNum.toFixed(5);
  };
  return (
    <div className="flex w-full flex-col items-start gap-4 md:pt-10 xl:flex-row xl:justify-start">
      <BaseQuoteAsset data={exchangeInfo} />
      <StyledStats>
        <StyledStat>
          <div className="text-slate-400">{ticker.symbol}</div>
          <div className="text-4xl font-extrabold text-slate-200">
            {parseAndroundNumber(ticker.price)}
          </div>
          <div className="text-xs text-slate-400">
            {dayjs(new Date()).format('YYYY-MM-DD')}
          </div>
        </StyledStat>
        <StyledStat>
          <div className="text-slate-400">Price change 24h</div>
          <div className="text-4xl font-extrabold text-slate-200">
            {parseAndroundNumber(ticker.priceChange)}
          </div>
          <div className="text-xs">
            <PriceChange percent={ticker.priceChangePercent} />
          </div>
        </StyledStat>
        <StyledStat>
          <div className="text-slate-400">Price 24h High</div>
          <div className="text-4xl font-extrabold text-slate-200">
            {parseAndroundNumber(ticker.highPrice)}
          </div>
        </StyledStat>
        <StyledStat className="border-0">
          <div className="text-slate-400">Price 24h Low</div>
          <div className="text-4xl font-extrabold text-slate-200">
            {parseAndroundNumber(ticker.lowPrice)}
          </div>
        </StyledStat>
      </StyledStats>
    </div>
  );
};
