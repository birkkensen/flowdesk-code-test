import dayjs from 'dayjs';
import { type TickerStatsFull } from 'Queries/ticker/hooks/use-get-currency-ticker';
import { PriceChange } from './components/price-change';

interface Props {
  data: TickerStatsFull | undefined;
  isLoading: boolean;
  isError: boolean;
}
export const CurrenyStats: React.FC<Props> = ({ data, isLoading, isError }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  return (
    <>
      {data && (
        <div className="flex flex-col gap-4">
          <div className="stats bg-neutral">
            <div className="stat">
              <div className="stat-title">{data?.symbol}</div>
              <div className="stat-value">{data?.price}</div>
              <div className="stat-desc">
                {dayjs(new Date()).format('YYYY-MM-DD')}
              </div>
            </div>
          </div>
          <div className="stats stats-vertical bg-neutral">
            <div className="stat">
              <div className="stat-title">Price change 24h</div>
              <div className="stat-value">{data.priceChange}</div>
              <div className="stat-desc">
                <PriceChange data={data} />
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Price 24h High</div>
              <div className="stat-value">{data.highPrice}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Price 24h Low</div>
              <div className="stat-value">{data.lowPrice}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
