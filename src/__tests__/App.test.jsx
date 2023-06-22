import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';



describe('App component integration', () => {
    test('allows form use and renders expected results', () => {
        render(<App />);
        let urlInput = screen.getByTestId('form-input');
        let postSpan = screen.getByTestId('form-span-post');
        let button = screen.getByTestId('form-button');

        fireEvent.change(urlInput, {target: {value: 'testing.com'}});
        fireEvent.click(postSpan);
        fireEvent.click(button);

        let preElement = screen.getByTestId('results-pre');

        expect(preElement).toHaveTextContent('fake thing 1');


        let methodDiv = screen.getByTestId('app-div-method');
        let urlDiv = screen.getByTestId('app-div-url');
        expect(methodDiv).toHaveTextContent('POST');
        expect(urlDiv).toHaveTextContent('testing.com');
    });


});