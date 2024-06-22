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
		onClick(event.target.innerText);
		scrollToId();
		setButtonChosen(event.target.innerText);
		setFilterActivated(true);
		setButtonType('secondary');
	};

	return (
		<div id="filters" className="text-center">
			{isLoading ? <BeatLoader /> : null}
			{!isLoading && error ? (
				<div className="service-unavailable-container">
					<ServiceUnavailable />
				</div>
			) : null}
			{!isLoading && filters.length > 0 && !error ? (
				<div className="container filter-section">
					<div className="ft-section-title">
						<h2>{t('filter.title')}</h2>
						<p>{t('filter.subtitle')}</p>
					</div>
					<div className="row">
						{filters.map((d, i) => (
							<div key={`${d.filterName}-${i}`} className="col-xs-6 col-md-3">
								{filterActivated && buttonChosen === d.filterName ? (
									<div>
										<AwesomeButton
											type={buttonType}
											size="large"
											data-value={d.filterName}
											onPress={handleOnClick}
										>
											{d.filterName}
										</AwesomeButton>
									</div>
								) : (
									<AwesomeButton
										type="primary"
										size="large"
										data-value={d.filterName}
										onPress={handleOnClick}
									>
										{d.filterName}
									</AwesomeButton>
								)}
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
};

Filter.propTypes = {
	onClick: PropTypes.func,
	scrollToId: PropTypes.func
};
