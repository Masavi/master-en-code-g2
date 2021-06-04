import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import Search from './Search';

describe('Home Component', () => {
    it('renders home component', () => {
        render(
            <Home />
        );
        // screen.debug();
    });

    it('renders home with search component inside', () => {
        render(<Home />);
        const label = screen.getByText('Mi búsqueda');
        expect(label).toBeInTheDocument();
    });

    it('tests input text on search', () => {
        render(<Home />);
        const input = screen.getByTestId('idTestSearch');
        fireEvent.change(input, {
            target: {
                value: 'una busqueda mas',
            }
        })
        screen.debug();
    });

    it('detects that onChange executes properly', () => {
        const onChangeFunction = jest.fn();

        render(
            <Search
                value=""
                onChange={onChangeFunction}
                titulo="Mi barra de busqueda"
            />
        )

        const input = screen.getByTestId('idTestSearch');
        fireEvent.change(input, {
            target: {
                value: 'cualquier cosa',
            }
        })

        expect(onChangeFunction).toHaveBeenCalledTimes(1);
    });

});