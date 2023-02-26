import { useGetAvailableCurrencies } from 'Queries/currencies';
import { useForm } from 'react-hook-form';

interface Props {
  onSubmit: ({ symbol }: { symbol: string }) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<{ symbol: string }>();
  const { data } = useGetAvailableCurrencies();
  const sortedCurrencyPair = [...(data ?? [])].sort();
  return (
    <form className="mb-8 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full gap-2">
        <input
          className="w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm uppercase text-white placeholder:capitalize placeholder:text-gray-400"
          list="currency-pairs"
          placeholder="Search for a symbol pair"
          {...register('symbol')}
        />
        <datalist id="currency-pairs">
          {sortedCurrencyPair?.map(symbol => (
            <option key={symbol} value={symbol} />
          ))}
        </datalist>
        <button
          className="rounded-lg bg-gray-900 p-2.5 text-white transition active:scale-95"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};
