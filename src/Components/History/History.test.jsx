import React from 'react';
import { render, screen } from '@testing-library/react';
import History from '../History/index';

describe('History', () => {
    const history = [
        [{ url: 'https://example.com/api/get' }],
        [{ url: 'https://example.com/api/post' }],
        [{ url: 'https://example.com/api/delete' }],
    ];

    test('Should render a list of history items', async () => {
        render(<History history={history} />);
        const listItems = await screen.findAllByRole('listitem');
    
        expect(listItems.length).toBe(history.length);
        expect(listItems[0].textContent).toBe(history[0][0].url);
      });
    });