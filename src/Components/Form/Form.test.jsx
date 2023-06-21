import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../Form';


describe('Form', () => {
  test('calls handleApiCall prop with form data on form submission', () => {
    const handleApiCallMock = jest.fn();
    const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCallMock} />);

    const urlInput = getByLabelText('URL:');
    const submitButton = getByText('GO!');

    fireEvent.change(urlInput, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } });
    fireEvent.click(submitButton);

    expect(handleApiCallMock).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    });
  });

  test('renders the form with input and buttons', () => {
    const { getByLabelText, getByText } = render(<Form handleApiCall={jest.fn()} />);

    const urlInput = getByLabelText('URL:');
    const submitButton = getByText('GO!');
    const getMethod = getByText('GET');
    const postMethod = getByText('POST');
    const putMethod = getByText('PUT');
    const deleteMethod = getByText('DELETE');

    expect(urlInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(getMethod).toBeInTheDocument();
    expect(postMethod).toBeInTheDocument();
    expect(putMethod).toBeInTheDocument();
    expect(deleteMethod).toBeInTheDocument();
  });
});