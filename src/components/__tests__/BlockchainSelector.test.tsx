import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlockchainSelector } from '../BlockchainSelector';
import { useBlockchainContext } from '../../contexts/BlockchainContext';

jest.mock('../../contexts/BlockchainContext');

const mockUseBlockchainContext = useBlockchainContext as jest.MockedFunction<
  typeof useBlockchainContext
>;

describe('BlockchainSelector Component', () => {
  beforeEach(() => {
    mockUseBlockchainContext.mockReturnValue({
      blockchain: 'AVAX',
      setBlockchain: jest.fn(),
      address: '0x1234567890abcdef',
      setAddress: jest.fn(),
    });
  });

  it('renders without crashing', () => {
    render(<BlockchainSelector />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows the correct options', () => {
    render(<BlockchainSelector />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(5);
    expect(options[0].textContent).toBe('AVAX');
    expect(options[1].textContent).toBe('USDC');
    expect(options[2].textContent).toBe('WAVAX');
    expect(options[3].textContent).toBe('WBNB');
    expect(options[4].textContent).toBe('STG');
  });

  it('handles change correctly', () => {
    const { setBlockchain } = mockUseBlockchainContext();

    render(<BlockchainSelector />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'USDC' },
    });
    expect(setBlockchain).toHaveBeenCalledWith('USDC');
  });
});
