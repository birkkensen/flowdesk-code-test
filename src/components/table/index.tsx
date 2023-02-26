import { type Trade } from 'Queries/binance-market-info/types';
import { useState } from 'react';
import { TableBody } from './components/table-body';
import { TableHead } from './components/table-head';
import { compareValues } from './utils';

interface Props {
  data: Trade[];
}

export const Table: React.FC<Props> = ({ data }) => {
  const [sortKey, setSortKey] = useState<keyof Trade>('time');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (key: keyof Trade) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const sortedData = data.sort(compareValues(sortKey, sortOrder));

  return (
    <div className="w-full">
      <p className="my-2 text-left text-lg font-extrabold text-slate-200">
        Recent trades
      </p>
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-400">
          <TableHead handleSort={handleSort} />
          <TableBody sortedData={sortedData} />
        </table>
      </div>
    </div>
  );
};
