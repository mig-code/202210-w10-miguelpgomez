import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './buton';

describe('Given Button component', () => {
    const buttonClassName =
        'icon gentleman__icon gentleman__icon--delete fas fa-times';
    const handleClick = jest.fn();
    const id = 1;
    test('renders a button', () => {
        render(
            <Button
                buttonClassName={buttonClassName}
                handleClick={handleClick}
                id={id}
            />
        );
        const button = screen.getAllByTestId('btn-test');

        fireEvent.click(button[0]);
    });
});
