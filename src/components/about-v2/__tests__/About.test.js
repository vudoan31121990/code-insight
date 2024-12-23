import { render, screen } from '@testing-library/react';
import React from 'react';
import { About } from '../About';

describe('About component', () => {
	it('should render', () => {
		render(<About />);
		const element = screen.getByTestId('about');
		expect(element).toBeInTheDocument();
	});
});
