import React from 'react';
import { useBlockchainContext } from '../contexts/BlockchainContext';

const blockchains = ['AVAX', 'USDC', 'WAVAX', 'WBNB', 'STG'];

export const BlockchainSelector = () => {
  const { blockchain, setBlockchain } = useBlockchainContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBlockchain(
      event.target.value as 'AVAX' | 'USDC' | 'WAVAX' | 'WBNB' | 'STG',
    );
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        value={blockchain}
        onChange={handleChange}
        className="p-2 border rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {blockchains.map((bc) => (
          <option key={bc} value={bc}>
            {bc}
          </option>
        ))}
      </select>
    </div>
  );
};
