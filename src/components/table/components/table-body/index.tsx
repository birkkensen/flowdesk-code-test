import dayjs from 'dayjs';
import { type Trade } from 'Queries/binance-market-info/types';

interface Props {
  sortedData: Trade[] | undefined;
}
export const TableBody: React.FC<Props> = ({ sortedData }) => {
  return (
    <tbody>
      {sortedData?.map(trade => (
        <tr
          className="border-b border-gray-700 bg-gray-800 last:border-0"
          key={trade.id}
        >
          <td className="px-6 py-2">
            {dayjs(trade?.time).format('YYYY-MM-DD HH:mm:ss')}
          </td>
          <td className="px-6 py-2"> {parseFloat(trade.price).toFixed(6)}</td>
          <td className="px-6 py-2">{parseFloat(trade?.qty).toFixed(4)}</td>
        </tr>
      ))}
    </tbody>
  );
};
