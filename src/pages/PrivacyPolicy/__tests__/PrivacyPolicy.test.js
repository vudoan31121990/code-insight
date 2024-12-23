import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrivacyPolicy } from '../PrivacyPolicy';

describe('PrivacyPolicy page', () => {
	it('should render', () => {
		render(<PrivacyPolicy />);
		const element = screen.getByTestId('privacy-policy');
		expect(element).toBeInTheDocument();
	});
});
