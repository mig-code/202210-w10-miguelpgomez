import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Info } from './info';

describe('Given Info component', () => {
    test('renders Info', () => {
        const totalSelected = 2;
        const mockfn = jest.fn();
        render(
            <Info totalSelected={totalSelected} handleSelectAll={mockfn}></Info>
        );

        const linkElement = screen.getByText(/2/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('Click button Select all', () => {
        const totalSelected = 2;
        const mockfn = jest.fn();
        render(
            <Info totalSelected={totalSelected} handleSelectAll={mockfn}></Info>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockfn).toHaveBeenCalled();
    });
});
