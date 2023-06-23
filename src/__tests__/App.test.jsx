import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';

import App from '../App';

const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'Howdy' }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App component integration', () => {
  test('allows form use and renders expected results', async () => {
    render(<App />);
    let urlInput = screen.getByTestId('form-input');
    let getSpan = screen.getByTestId('form-span-get');
    let button = screen.getByTestId('form-button');

    fireEvent.change(urlInput, { target: { value: '/testGet' } });
    fireEvent.click(getSpan);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Howdy', { exact: false })).toBeInTheDocument();
    });

    let methodDiv = screen.getByTestId('app-div-method');
    let urlDiv = screen.getByTestId('app-div-url');

    expect(methodDiv).toHaveTextContent('GET');
    expect(urlDiv).toHaveTextContent('/testGet');
  });
});
