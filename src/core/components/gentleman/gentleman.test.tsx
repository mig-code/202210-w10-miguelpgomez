import React from 'react';
import { render, screen } from '@testing-library/react';

import { Gentleman } from './gentleman';

describe('Given Gentleman component', () => {
    const gentlemenMock = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: 'bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: true,
        },
        {
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: 'fary.jpg',
            alternativeText: 'The Fary pointing at you',
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: 'julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: true,
        },
    ];
    test('renders a gentleman', () => {
        
        
        render(<Gentleman gentleman={gentlemenMock[1]}/>);

        const linkElement = screen.getByText(/The Fary/i);
        expect(linkElement).toBeInTheDocument();
    });
});
