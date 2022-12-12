import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Gentlemen } from './gentlemen';

describe('Given Gentleman component', () => {
    test('renders first item', () => {
        render(<Gentlemen></Gentlemen>);

        const textElement = screen.getByText(/Bertin/i);
        expect(textElement).toBeInTheDocument();
    });
    test('Click button Select all and screen shows a 3', () => {
        render(<Gentlemen></Gentlemen>);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        const textElement = screen.getByText(/3/i);
        expect(textElement).toBeInTheDocument();
    });
    test('Click delete button and there is one heading less', () => {
        render(<Gentlemen></Gentlemen>);

        const iconButtons = screen.getAllByTestId('btn-test');
        const headings = screen.getAllByRole('heading');
        fireEvent.click(iconButtons[0]);
        const headingsAfter = screen.getAllByRole('heading');
        expect(headingsAfter.length).toBe(headings.length - 1);
    });
    test('Click favorite button and screen shows a 3', () => {
        render(<Gentlemen></Gentlemen>);

        const iconButtons = screen.getAllByTestId('btn-test');
        ;
        fireEvent.click(iconButtons[3]);
        
        const textElement = screen.getByText(/3/i);
        expect(textElement).toBeInTheDocument();
    });
});
