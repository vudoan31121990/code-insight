import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../NotFoundPage';

describe('NotFoundPage page', () => {
	it('should render', () => {
		render(<NotFoundPage />);
		const element = screen.getByTestId('not-found-page');
		expect(element).toBeInTheDocument();
	});
});
