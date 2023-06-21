import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';


describe('Header', () => {
  test('renders the header with the title', () => {
    render(<Header />);
    const titleElement = screen.getByText('RESTy');

    expect(titleElement).toBeInTheDocument();
  });

  test('renders the header with the correct tag', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { name: 'RESTy' });

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe('H1');
  });
});
