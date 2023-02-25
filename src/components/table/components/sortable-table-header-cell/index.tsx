import { type Trade } from 'Queries/trades/types';

interface Props {
  handleSort: (key: keyof Trade) => void;
  sortKey: keyof Trade;
  title: keyof Trade;
  sortOrder: 'asc' | 'desc';
}
export const SortableTableHeaderCell: React.FC<Props> = ({
  handleSort,
  sortKey,
  title,
  sortOrder,
}) => {
  return (
    <th
      className="cursor-pointer"
      onClick={() => {
        handleSort(title);
      }}
    >
      <span className="mr-2 capitalize">{title}</span>
      <span className={`${sortKey === title ? '' : 'invisible'}`}>
        {sortOrder === 'asc' ? '▴' : '▾'}
      </span>
    </th>
  );
};
