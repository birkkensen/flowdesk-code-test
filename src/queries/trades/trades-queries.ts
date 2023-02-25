import { get } from 'Utils/api';
import { type Trade } from './types';

export const getRecentTrades = async (symbol: string, limit = 10) => {
  return await get<Trade[]>(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/v3/trades?symbol=${symbol.toUpperCase()}&limit=${limit}`
  );
};
