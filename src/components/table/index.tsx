import { type Trade } from 'Queries/trades/types';
import { useState } from 'react';
import { SortableTableHeaderCell } from './components/sortable-table-header-cell';
import { TableBodyCell } from './components/table-body-cell';
import { compareValues } from './utils';

interface Props {
  recentTrades: Trade[] | undefined;
}

export const Table: React.FC<Props> = ({ recentTrades }) => {
  const [sortKey, setSortKey] = useState<keyof Trade>('time');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const titles: Array<keyof Trade> = ['time', 'price', 'qty'];

  const handleSort = (key: keyof Trade) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const sortedData = recentTrades?.sort(compareValues(sortKey, sortOrder));

  return (
    <>
      {sortedData && (
        <div className="overflow-x-auto">
          <table className="table-compact table w-full">
            <thead>
              <tr>
                {titles.map(title => (
                  <SortableTableHeaderCell
                    key={title}
                    title={title}
                    handleSort={handleSort}
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData?.map(trade => (
                <TableBodyCell key={trade.id} trade={trade} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
