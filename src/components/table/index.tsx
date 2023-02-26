import { type Trade } from 'Queries/trades/types';
import { useState } from 'react';
import { TableBody } from './components/table-body';
import { TableHead } from './components/table-head';
import { compareValues } from './utils';

interface Props {
  data: Trade[] | undefined;
}

export const Table: React.FC<Props> = ({ data }) => {
  const [sortKey, setSortKey] = useState<keyof Trade>('time');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof Trade) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const sortedData = data?.sort(compareValues(sortKey, sortOrder));

  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-400">
        <caption className="my-2 text-left text-lg font-extrabold">
          Recent trades
        </caption>
        <TableHead
          sortKey={sortKey}
          sortOrder={sortOrder}
          handleSort={handleSort}
        />
        <TableBody sortedData={sortedData} />
      </table>
    </div>
  );
};
