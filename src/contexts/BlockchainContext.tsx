import { createContext, useContext, useState, ReactNode } from 'react';

export type Blockchain = 'AVAX' | 'USDC' | 'WAVAX' | 'WBNB' | 'STG';

interface BlockchainContextProps {
  blockchain: Blockchain;
  address: string;
  setAddress: (address: string) => void;
  setBlockchain: (blockchain: Blockchain) => void;
}

const BlockchainContext = createContext<BlockchainContextProps | undefined>(
  undefined,
);

export const useBlockchainContext = () => {
  const context = useContext(BlockchainContext);
  if (!context) {
    throw new Error(
      'useBlockchainContext must be used within a BlockchainProvider',
    );
  }
  return context;
};

export const BlockchainProvider = ({ children }: { children: ReactNode }) => {
  const [blockchain, setBlockchain] = useState<Blockchain>('AVAX');
  const [address, setAddress] = useState(
    '0x34F55B23195fF2BaBE892bcDAd5b75d279569D3e',
  );

  return (
    <BlockchainContext.Provider
      value={{ blockchain, address, setAddress, setBlockchain }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};
