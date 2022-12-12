import React from 'react';
import { render, screen } from '@testing-library/react';
import { Gentlemen } from './gentlemen';

describe('Given Gentleman component', () => {
    test('renders first item', () => {
        render(
            <Gentlemen></Gentlemen>
        );

        const linkElement = screen.getByText(/The Fary/i);
        expect(linkElement).toBeInTheDocument();
    });
});
