import { StyledStat, StyledStats } from 'Components/currency-stats/styled';
import { type ExchangeInfo } from 'Queries/currencies/types';
import { cryptoSymbol } from 'crypto-symbol';

const { nameLookup } = cryptoSymbol({});
interface Props {
  data: ExchangeInfo;
}

export const BaseQuoteAsset: React.FC<Props> = ({ data }) => {
  return (
    <StyledStats>
      <StyledStat>
        <div className="text-slate-400">Base asset</div>
        <div className="text-4xl font-extrabold text-slate-200">
          {data?.symbols[0].baseAsset}
        </div>
        <div className="text-xs text-slate-400">
          {nameLookup(data.symbols[0].baseAsset)}
        </div>
      </StyledStat>
      <StyledStat className="border-0">
        <div className="text-slate-400">Quote asset</div>
        <div className="text-4xl font-extrabold text-slate-200">
          {data?.symbols[0].quoteAsset}
        </div>
        <div className="text-xs text-slate-400">
          {nameLookup(data.symbols[0].quoteAsset)}
        </div>
      </StyledStat>
    </StyledStats>
  );
};
