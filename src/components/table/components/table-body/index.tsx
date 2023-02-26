import dayjs from 'dayjs';
import { type Trade } from 'Queries/trades/types';

interface Props {
  sortedData: Trade[];
}
export const TableBody: React.FC<Props> = ({ sortedData }) => {
  return (
    <tbody>
      {sortedData?.map(trade => (
        <tr className="border-b border-gray-700 bg-gray-800" key={trade.id}>
          <td className="px-6 py-4">
            {dayjs(trade?.time).format('YYYY-MM-DD HH:mm:ss')}
          </td>
          <td className="px-6 py-4">{trade?.price}</td>
          <td className="px-6 py-4">{trade?.qty}</td>
        </tr>
      ))}
    </tbody>
  );
};
