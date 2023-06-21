import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the jest-dom library
import Results from '../Results';


describe('Results', () => {
  test('renders the section element', () => {
    render(<Results data={null} />);
    const sectionElement = screen.queryByTestId('results-section');
    
    expect(sectionElement).toBeNull();
  });

  test('renders the JSON data when props.data is provided', () => {
    const mockData = { name: 'John Doe', age: 30 };
    render(<Results data={mockData} />);
    const jsonElement = screen.getByText((content, element) => {
      const json = JSON.stringify(mockData, undefined, 2);
      const normalizedContent = content.replace(/\s/g, '');
      const normalizedJson = json.replace(/\s/g, '');
      return element.tagName.toLowerCase() === 'pre' && normalizedContent.includes(normalizedJson);
    });

    expect(jsonElement).toBeInTheDocument();
  });
});
