import { Card } from '../components/Card';
import { BlockchainSelector } from '../components/BlockchainSelector';
import { useLoadingContext } from '../contexts/LoadingContext';
import { Spinner } from '../components/Spinner';

export const Home = () => {
  const { isLoading } = useLoadingContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex flex-col items-center justify-center p-8 relative">
      {isLoading && <Spinner />}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-8">
          Web3 Funds Manager
        </h1>
        <Card />
      </header>
      {!isLoading && <BlockchainSelector />}
    </div>
  );
};
