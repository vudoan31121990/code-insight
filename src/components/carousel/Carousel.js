import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.scss';
import PropTypes from 'prop-types';
import { CardFilterButton } from '@src/components/card/Card';

export const CarouselFillter = ({ items, handleOnClick }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			slidesToSlide: 4 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

	return (
		<Carousel
			swipeable={false}
			draggable={true}
			showDots={true}
			arrows={false}
			responsive={responsive}
			ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			removeArrowOnDeviceType={['tablet', 'mobile']}
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
		>
			{items.map((d, i) => (
				<CardFilterButton
					key={`${d.filterName}-${i}`}
					title={d.filterName}
					subtitle={d.filterDesc}
					onClick={handleOnClick}
				/>
			))}
		</Carousel>
	);
};

CarouselFillter.propTypes = {
	items: PropTypes.array,
	handleOnClick: PropTypes.func
};
