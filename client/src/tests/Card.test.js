import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '../../Card';

test('should render name and image correctly', () => {
    const pokemon = {
        name: 'Pikachu',
        image: 'https://example.com/pikachu.png'
    };

    const { getByText, getByAltText } = render(<Card name={pokemon.name} image={pokemon.image} />);

    expect(getByText(pokemon.name)).toBeInTheDocument();

    const imageElement = getByAltText("imagen");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toEqual(pokemon.image);
});

test('should render types correctly', () => {
    const types = ['Electric', 'Flying'];
    const { getByText } = render(<Card types={types} />);

    types.forEach(type => {
        expect(getByText(type)).toBeInTheDocument();
    });
});

test('should not render close button when not on home page', () => {
    const { queryByText } = render(<Card />);
    expect(queryByText('x')).not.toBeInTheDocument();
});

test('should render close button when on home page', () => {
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useLocation: () => ({
            pathname: '/home'
        })
    }));

    const { getByText } = render(<Card />);
    expect(getByText('x')).toBeInTheDocument();
});




