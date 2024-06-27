import React from 'react';
import { useBlockchainContext } from '../contexts/BlockchainContext';

export const BlockchainSelector = () => {
  const { blockchain, setBlockchain } = useBlockchainContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBlockchain(event.target.value as 'AVAX' | 'USDC' | 'WAVAX');
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        value={blockchain}
        onChange={handleChange}
        className="p-2 border rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="AVAX">AVAX</option>
        <option value="USDC">USDC</option>
        <option value="WAVAX">WAVAX</option>
      </select>
    </div>
  );
};
