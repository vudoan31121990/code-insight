import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('Home Page', () => {
	it('should render', () => {
		render(<HomePage />);
		const element = screen.getByTestId('home-page');
		expect(element).toBeInTheDocument();
	});
});
