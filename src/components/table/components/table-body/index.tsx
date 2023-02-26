import dayjs from 'dayjs';
import { type Trade } from 'Queries/trades/types';

interface Props {
  sortedData: Trade[];
}
export const TableBody: React.FC<Props> = ({ sortedData }) => {
  return (
    <tbody>
      {sortedData?.map(trade => (
        <tr key={trade.id}>
          <td className="bg-neutral">
            {dayjs(trade?.time).format('YYYY-MM-DD HH:mm:ss')}
          </td>
          <td className="bg-neutral">{trade?.price}</td>
          <td className="bg-neutral">{trade?.qty}</td>
        </tr>
      ))}
    </tbody>
  );
};
