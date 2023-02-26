import { type ExchangeInfo } from 'Queries/currencies/types';

interface Props {
  data?: ExchangeInfo;
}

export const BaseQuoteAsset: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid w-full grid-flow-row grid-cols-1 gap-x-6 rounded-2xl border-gray-700 bg-gray-800">
      <div className="grid w-full grid-cols-1 gap-x-6 border-b-[1px] border-gray-700 px-6 py-4">
        <div className="text-slate-400">Base asset</div>
        <div className="text-4xl font-extrabold">
          {data?.symbols[0].baseAsset}
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-6 px-6 py-4">
        <div className="text-slate-400">Quote asset</div>
        <div className="text-4xl font-extrabold">
          {data?.symbols[0].quoteAsset}
        </div>
      </div>
    </div>
  );
};
