import { get } from 'Utils/api';
import { type Trade } from './types';

export const getRecentTrades = async (symbol: string, limit = 10) => {
  return await get<Trade[]>(
    `https://api.binance.com/api/v3/trades?symbol=${symbol.toUpperCase()}&limit=${limit}`
  );
};
