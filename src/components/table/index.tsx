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
    <>
      {sortedData && (
        <div className="overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead
              sortKey={sortKey}
              sortOrder={sortOrder}
              handleSort={handleSort}
            />
            <TableBody sortedData={sortedData} />
          </table>
        </div>
      )}
    </>
  );
};
