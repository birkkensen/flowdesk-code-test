import { get } from 'Utils/api';
import { type ExchangeInfo } from './types';

export const getAllAvailableCurrencies = async () => {
  const res = await get<ExchangeInfo>(
    'https://data.binance.com/api/v3/exchangeInfo'
  );

  return res?.symbols.map(({ symbol }) => symbol);
};
