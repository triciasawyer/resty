import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from '../App';



const server = setupServer (
    rest.get('./greeting', (req, res, next) => {
        return res(ctx.json({greeting: 'Howdy'}))
    }),
)

describe('App component integration', () => {
    test('allows form use and renders expected results', () => {
        render(<App />);
        let urlInput = screen.getByTestId('form-input');
        let postSpan = screen.getByTestId('form-span-post');
        let button = screen.getByTestId('form-button');

        fireEvent.change(urlInput, {target: {value: '/testGet'}});
        fireEvent.click(postSpan);
        fireEvent.click(button);

        let preElement = screen.getByTestId('results-pre');

        expect(preElement).toHaveTextContent('Howdy');


        let methodDiv = screen.getByTestId('app-div-method');
        let urlDiv = screen.getByTestId('app-div-url');
        expect(methodDiv).toHaveTextContent('GET');
        expect(urlDiv).toHaveTextContent('testGet');
    });


});