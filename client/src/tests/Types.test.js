import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Types from './Types';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}));


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

describe('Types Component', () => {
  const mockDispatch = jest.fn();
  
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  it('should render types correctly', () => {
    const mockTypes = [
      { name: 'Fire' },
      { name: 'Water' },
    ];

    useSelector.mockReturnValue(mockTypes);

    render(
      <MemoryRouter>
        <Types />
      </MemoryRouter>
    );

    mockTypes.forEach(type => {
      const typeElement = screen.getByText(type.name);
      expect(typeElement).toBeInTheDocument();

      const typeLink = screen.getByRole('link', { name: type.name });
      expect(typeLink).toHaveAttribute('href', `/typeDetail/${type.name}`);
    });
  });

  it('should dispatch getTypes action on mount', () => {
    render(
      <MemoryRouter>
        <Types />
      </MemoryRouter>
    );

    expect(mockDispatch).toHaveBeenCalledWith(getTypes());
  });
});
