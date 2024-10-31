import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AwesomeButton } from 'react-awesome-button';
import { BeatLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import './filter.scss';
import filtersService from '@src/services/filterService';
import 'react-awesome-button/dist/styles.css';
import { ServiceUnavailable } from '@src/components/service-unavailable/ServiceUnavailable';
import { CardFilterButton } from '@src/components/card/Card';
import { CarouselFillter } from '@src/components/carousel/Carousel';

export const Filter = ({ onClick, scrollToId }) => {
	const { t } = useTranslation();
	const [filterActivated, setFilterActivated] = useState(false);
	const [buttonChosen, setButtonChosen] = useState('');
	const [buttonType, setButtonType] = useState('primary');

	const dispatch = useDispatch();
	const { filters, isLoading, error } = useSelector((state) => state.filters);

	useEffect(() => {
		dispatch(filtersService());
	}, [dispatch]);

	const handleOnClick = (event) => {
		onClick(event);
		scrollToId();
		setButtonChosen(event);
		setFilterActivated(true);
		setButtonType('secondary');
	};

	return (
		<section className="section pt-lg-0 mt--100">
			<div id="filters" className="text-center ">
				{isLoading ? <BeatLoader /> : null}
				{!isLoading && error ? (
					<div className="service-unavailable-container">
						<ServiceUnavailable />
					</div>
				) : null}
				{!isLoading && filters.length > 0 && !error ? (
					<div className="container filter-section">	
						<div className="row">
							<CarouselFillter items={filters} handleOnClick={handleOnClick} />
						</div>
					</div>
				) : null}
			</div>
		</section>
	);
};

Filter.propTypes = {
	onClick: PropTypes.func,
	scrollToId: PropTypes.func
};
