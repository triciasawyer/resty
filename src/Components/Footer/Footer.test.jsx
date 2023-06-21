import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer';


describe('Footer', () => {
    test('renders the copyright information', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/Tricia Sawyer, 2023/i);

        expect(copyrightText).toBeInTheDocument();
      });


});