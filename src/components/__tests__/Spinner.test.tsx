import React from 'react';
import '@testing-library/jest-dom';
import { Spinner } from '../Spinner';
import { render } from '@testing-library/react';

describe('Spinner component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Spinner />);
    const spinnerElement = getByRole('img', { hidden: true });
    expect(spinnerElement).toBeInTheDocument();
  });

  it('has the correct styles applied', () => {
    const { getByRole } = render(<Spinner />);
    const spinnerElement = getByRole('img', { hidden: true });
    expect(spinnerElement).toHaveStyle('display: inline-block');
  });
});
