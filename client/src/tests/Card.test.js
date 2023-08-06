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




