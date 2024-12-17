import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import './filter.scss';
import filtersService from '@src/services/filterService';
import 'react-awesome-button/dist/styles.css';
import { ServiceUnavailable } from '@src/components/service-unavailable/ServiceUnavailable';
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
		<div>
			<div className="relative isolate px-6 lg:px-8">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
				<div className="mx-auto max-w-2xl pt-32 sm:py-30 lg:py-48">
					<div className="text-center">
						<h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900">
							Syntax Programming Languages
						</h1>
						<p className="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
							{t('header.description')}
						</p>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
			<section className="section lg:pt-0 xl:-mt-40 lg:-mt-40 sm:-mt-30">
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
		</div>
	);
};

Filter.propTypes = {
	onClick: PropTypes.func,
	scrollToId: PropTypes.func
};
