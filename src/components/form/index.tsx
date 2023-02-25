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
    <form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-end gap-2">
        <input
          className="input-bordered input w-full max-w-xs uppercase placeholder:capitalize"
          list="currency-pairs"
          placeholder="Search for a symbol pair"
          {...register('symbol')}
        />
        <datalist id="currency-pairs">
          {sortedCurrencyPair?.map(symbol => (
            <option key={symbol} value={symbol} />
          ))}
        </datalist>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
