import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardFilterButton } from '../Card';

describe('Card component', () => {
	it('should render', () => {
		render(<CardFilterButton title="title" subtitle="subtitle" onClick={() => {}} />);
		const element = screen.getByTestId('card');
		expect(element).toBeInTheDocument();
	});
});
