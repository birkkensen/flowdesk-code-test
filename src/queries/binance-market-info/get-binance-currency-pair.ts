import { get } from 'Utils/api';
import {
  type Trade,
  type ExchangeInfo,
  type Ticker24Hr,
  type TickerPrice,
} from './types';

export const getBinanceCurrencyPairInfo = async (
  symbol: string,
  limit = 20
) => {
  const exchangeInfo = await get<ExchangeInfo>(
    `${import.meta.env.VITE_BASE_URL}/api/v3/exchangeInfo?symbol=${symbol}`
  );
  const ticker24hr = await get<TickerPrice>(
    `${import.meta.env.VITE_BASE_URL}/api/v3/ticker/24hr?symbol=${symbol}`
  );
  const ticker = await get<Ticker24Hr>(
    `${import.meta.env.VITE_BASE_URL}/api/v3/ticker/price?symbol=${symbol}`
  );

  const recentTrades = await get<Trade[]>(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/v3/trades?symbol=${symbol}&limit=${limit}`
  );

  return {
    exchangeInfo,
    ticker: { ...ticker, ...ticker24hr },
    recentTrades,
  };
};
