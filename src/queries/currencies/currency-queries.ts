import { get } from 'Utils/api';
import { type ExchangeInfo } from './types';

export const getAllAvailableCurrencies = async () => {
  const res = await get<ExchangeInfo>(
    `${import.meta.env.VITE_BASE_URL}/api/v3/exchangeInfo`
  );

  return res?.symbols.map(({ symbol }) => symbol);
};

export const getBaseAndQuoteAsset = async (symbol = '') => {
  return await get<ExchangeInfo>(
    `${import.meta.env.VITE_BASE_URL}/api/v3/exchangeInfo?symbol=${symbol}`
  );
};
