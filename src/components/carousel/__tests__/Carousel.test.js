import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarouselFillter } from '../Carousel';

describe('Carousel component', () => {
	const items = [
		{
			filterName: 'test 1',
			filterDesc: 'test 1 description'
		},
		{
			filterName: 'test 2',
			filterDesc: 'test 2 description'
		}
	];

	it('should render', () => {
		render(<CarouselFillter items={items} handleOnClick={() => {}} />);
		const element = screen.getByTestId('carousel');
		expect(element).toBeInTheDocument();
	});
});
