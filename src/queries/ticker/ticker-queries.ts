import { get } from 'Utils/api';
import { type Ticker24Hr, type TickerPrice } from './types';

export const getTickerPriceForSymbolPair = async (symbol: string) => {
  const ticker24hr = await get<TickerPrice>(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
  );
  const ticker = await get<Ticker24Hr>(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
  );

  return {
    ticker,
    ticker24hr,
  };
};
