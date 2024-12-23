import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilterLanguage } from '../FilterLanguage';

describe('FilterLanguage component', () => {
	it('should render', () => {
		render(<FilterLanguage />);
		const element = screen.getByTestId('filter-language');
		expect(element).toBeInTheDocument();
	});
});
