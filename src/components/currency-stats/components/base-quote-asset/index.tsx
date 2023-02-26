import { type ExchangeInfo } from 'Queries/currencies/types';

interface Props {
  data?: ExchangeInfo;
}

export const BaseQuoteAsset: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="stats stats-vertical bg-neutral">
          <div className="stat">
            <div className="stat-title">Base asset</div>
            <div className="stat-value">{data?.symbols[0].baseAsset}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Quote asset</div>
            <div className="stat-value">{data?.symbols[0].quoteAsset}</div>
          </div>
        </div>
      )}
    </>
  );
};
