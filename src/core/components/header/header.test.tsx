import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';


describe('Given Header component', () => {
    test('renders Header', () => {
        render(<Header />);

        const linkElement = screen.getByText(/The pointing gentlemen/i);
        expect(linkElement).toBeInTheDocument();
    });
});
