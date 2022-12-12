import React from 'react';
import { render, screen } from '@testing-library/react';


import { Gentleman } from './gentleman';

describe('Given Gentleman component', () => {
    test('renders a gentleman', () => {
        render(<Gentleman />);

        const linkElement = screen.getByText(/The Fary/i);
        expect(linkElement).toBeInTheDocument();
    });
});
