import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
    it('renders home component', () => {
        render(
            <Home />
        );
        // screen.debug();
    });

});