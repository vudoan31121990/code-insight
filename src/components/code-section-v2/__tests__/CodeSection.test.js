import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeSection } from '../CodeSection';

describe('CodeSection component', () => {
	it('should render', () => {
		render(<CodeSection code="code" />);
		const element = screen.getByTestId('code-section');
		expect(element).toBeInTheDocument();
	});
});
