import { type Trade } from 'Queries/trades/types';

type SortableField = {
  title: string;
  sortKey: keyof Trade;
};

export const sortableFields: SortableField[] = [
  {
    title: 'Time',
    sortKey: 'time',
  },
  {
    title: 'Price',
    sortKey: 'price',
  },
  {
    title: 'Quantity',
    sortKey: 'qty',
  },
];
