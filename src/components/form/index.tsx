import { useGetAvailableCurrencies } from 'Queries/currencies';
import { useForm } from 'react-hook-form';
import { StyledInput } from './styled';

interface Props {
  onSubmit: ({ symbol }: { symbol: string }) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<{ symbol: string }>();
  const { data } = useGetAvailableCurrencies();
  return (
    <form className="mb-8 flex w-full gap-2" onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        list="currency-pairs"
        placeholder="Search for a symbol pair"
        {...register('symbol', {
          setValueAs: (s: string) => s.trim().toUpperCase(),
        })}
      />
      <datalist id="currency-pairs">
        {data?.map(symbol => (
          <option key={symbol} value={symbol} />
        ))}
      </datalist>
      <button
        className="rounded-lg bg-gray-900 p-2.5 text-white transition active:scale-95"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
