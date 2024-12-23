import React from 'react';
import { render, screen } from '@testing-library/react';
import { ServiceUnavailable } from '../ServiceUnavailable';

describe('ServiceUnavailable component', () => {
	it('should render', () => {
		render(<ServiceUnavailable />);
		const element = screen.getByTestId('service-unavailable');
		expect(element).toBeInTheDocument();
	});
});
