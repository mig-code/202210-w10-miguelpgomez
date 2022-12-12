import React from 'react';
import { render, screen } from '@testing-library/react';

import { Info } from './info';

describe('Given Info component', () => {
    test('renders Info', () => {
        render(
            <Info></Info>
        );

        const linkElement = screen.getByText(/gentlemen pointing at you/i);
        expect(linkElement).toBeInTheDocument();
    });
});
