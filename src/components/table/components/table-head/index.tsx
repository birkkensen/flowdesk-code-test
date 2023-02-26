import { type Trade } from 'Queries/trades/types';

interface Props {
  handleSort: (key: keyof Trade) => void;
  sortKey: keyof Trade;
  sortOrder: 'asc' | 'desc';
}

export const TableHead: React.FC<Props> = ({
  handleSort,
  sortKey,
  sortOrder,
}) => {
  return (
    <thead>
      <tr>
        <th className="cursor-pointer" onClick={() => handleSort('time')}>
          <span className="mr-2 capitalize">Time</span>
          <span className={`${sortKey === 'time' ? '' : 'invisible'}`}>
            {sortOrder === 'asc' ? '▴' : '▾'}
          </span>
        </th>
        <th className="cursor-pointer" onClick={() => handleSort('price')}>
          <span className="mr-2 capitalize">Price</span>
          <span className={`${sortKey === 'price' ? '' : 'invisible'}`}>
            {sortOrder === 'asc' ? '▴' : '▾'}
          </span>
        </th>
        <th className="cursor-pointer" onClick={() => handleSort('qty')}>
          <span className="mr-2 capitalize">Quantity</span>
          <span className={`${sortKey === 'qty' ? '' : 'invisible'}`}>
            {sortOrder === 'asc' ? '▴' : '▾'}
          </span>
        </th>
      </tr>
    </thead>
  );
};
