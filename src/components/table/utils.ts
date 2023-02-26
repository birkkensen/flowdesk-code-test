import { type Trade } from 'Queries/binance-market-info/types';

export const compareValues = (
  key: keyof Trade,
  order: 'asc' | 'desc' = 'asc'
) => {
  return (a: Trade, b: Trade) => {
    if (a[key] === null) return 1;
    if (b[key] === null) return -1;
    if (a[key] === null && b[key] === null) return 0;
    return (
      a[key].toString().localeCompare(b[key].toString(), 'en', {
        numeric: true,
      }) * (order === 'asc' ? 1 : -1)
    );
  };
};
