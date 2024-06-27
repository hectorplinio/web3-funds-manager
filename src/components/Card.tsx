import React, { useState } from 'react';
import { useCrypto } from '../hooks/xchain/useCrypto';
import { useBlockchainContext } from '../contexts/BlockchainContext';
import { Spinner } from './Spinner';

export const Card = () => {
  const { blockchain, address } = useBlockchainContext();
  const { balance, handleSendFunds, isLoading, error } = useCrypto();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTxHash(null);
    const result = await handleSendFunds(parseFloat(amount), recipient);
    if (result) {
      setTxHash(result);
      setAmount('');
      setRecipient('');
    }
  };

  const handleSendClick = () => {
    setShowForm((prevShowForm) => (prevShowForm === true ? null : true));
  };

  const handleReceiveClick = () => {
    setShowForm((prevShowForm) => (prevShowForm === false ? null : false));
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Crypto Wallet</h2>
      <p className="mb-4">
        Balance: {balance} {blockchain}
      </p>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleSendClick}
          className={`px-4 py-2 rounded-md ${
            showForm === true ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Send
        </button>
        <button
          onClick={handleReceiveClick}
          className={`px-4 py-2 rounded-md ${
            showForm === false ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Receive
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : showForm === true ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Confirm'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {txHash && <p className="mt-4">Transaction Hash: {txHash}</p>}
        </form>
      ) : showForm === false ? (
        <div>
          <h3 className="text-md font-bold mb-2">Receive Funds</h3>
          <p>Your public address:</p>
          <div className="flex items-center">
            <input
              type="text"
              value={address}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md mr-2"
            />
            <button
              onClick={handleCopyAddress}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Copy
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
