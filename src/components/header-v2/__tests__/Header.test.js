import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header component', () => {
	it('should render', () => {
		render(<Header />);
		const element = screen.getByTestId('header');
		expect(element).toBeInTheDocument();
	});
});
