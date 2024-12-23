import React from 'react';
import { render, screen } from '@testing-library/react';
import { TermsOfUse } from '../TermsOfUse';

describe('TermsOfUse page', () => {
	it('should render', () => {
		render(<TermsOfUse />);
		const element = screen.getByTestId('terms-of-use');
		expect(element).toBeInTheDocument();
	});
});
