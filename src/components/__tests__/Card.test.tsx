import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../Card';
import { useCrypto } from '../../hooks/xchain/useCrypto';
import { useBlockchainContext } from '../../contexts/BlockchainContext';

jest.mock('../../hooks/xchain/useCrypto');
jest.mock('../../contexts/BlockchainContext');

const mockUseCrypto = useCrypto as jest.MockedFunction<typeof useCrypto>;
const mockUseBlockchainContext = useBlockchainContext as jest.MockedFunction<
  typeof useBlockchainContext
>;

describe('Card Component', () => {
  beforeEach(() => {
    mockUseCrypto.mockReturnValue({
      balance: 100,
      handleSendFunds: jest.fn(),
      isLoading: false,
      error: null,
    });

    mockUseBlockchainContext.mockReturnValue({
      blockchain: 'AVAX',
      address: '0x1234567890abcdef',
      setAddress: jest.fn(),
      setBlockchain: jest.fn(),
    });
  });

  it('renders without crashing', () => {
    render(<Card />);
    expect(screen.getByText('Crypto Wallet')).toBeInTheDocument();
  });

  it('shows balance and blockchain correctly', () => {
    render(<Card />);
    expect(screen.getByText('Balance: 100 AVAX')).toBeInTheDocument();
  });

  it('handles Send and Receive button clicks', () => {
    render(<Card />);
    fireEvent.click(screen.getByText('Send'));
    expect(screen.getByPlaceholderText('Amount')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Receive'));
    expect(screen.getByText('Your public address:')).toBeInTheDocument();
  });

  it('shows the correct form when clicking buttons', () => {
    render(<Card />);

    fireEvent.click(screen.getByText('Send'));
    expect(screen.getByPlaceholderText('Amount')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Receive'));
    expect(screen.getByText('Your public address:')).toBeInTheDocument();
  });

  it('shows the spinner when isLoading is true', () => {
    mockUseCrypto.mockReturnValueOnce({
      balance: 100,
      handleSendFunds: jest.fn(),
      isLoading: true,
      error: null,
    });

    render(<Card />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });
});
