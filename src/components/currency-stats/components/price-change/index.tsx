interface Props {
  percent?: string;
}

export const PriceChange: React.FC<Props> = ({ percent = '' }) => {
  const tickerPercent = parseFloat(percent);
  if (tickerPercent > 0) {
    return <span className="text-green-500">{`↗︎ ${percent}%`}</span>;
  }
  if (tickerPercent < 0) {
    return <span className="text-red-500">{`↘︎ ${percent}%`}</span>;
  }
  return <span className="text-slate-400">{percent}%</span>;
};
