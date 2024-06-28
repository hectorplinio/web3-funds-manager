import { useState, useEffect } from 'react';
import { getBalance, sendFunds } from './xchain';
import { useBlockchainContext } from '../../contexts/BlockchainContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

export const useCrypto = () => {
  const { address, blockchain } = useBlockchainContext();
  const { isLoading, setIsLoading } = useLoadingContext();

  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getBalance(address);

      if (result && result.length > 0) {
        const balanceForBlockchain = result.find(
          (item) => item.asset.ticker == blockchain,
        );

        setBalance(
          balanceForBlockchain
            ? balanceForBlockchain.amount.amount().toNumber()
            : 0,
        );
      }
    } catch (err) {
      setError('Failed to fetch balance');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [address, blockchain]);

  const handleSendFunds = async (amount: number, recipient: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const txHash = await sendFunds(amount, recipient);

      await fetchBalance();
      return txHash;
    } catch (err) {
      setError('Failed to send funds');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { balance, isLoading, error, handleSendFunds };
};
