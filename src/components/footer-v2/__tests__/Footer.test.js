import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer component', () => {
	it('should render', () => {
		render(<Footer />);
		const element = screen.getByTestId('footer');
		expect(element).toBeInTheDocument();
	});
});
