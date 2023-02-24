import { useGetAvailableCurrencies } from 'Queries/currencies';

function App() {
  const { data } = useGetAvailableCurrencies();
  console.log(data);
  return <div>Bonjour le monde</div>;
}

export default App;
