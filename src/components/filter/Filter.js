import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AwesomeButton } from 'react-awesome-button';
import './filter.scss';
import filtersService from '../../services/filterService';
import 'react-awesome-button/dist/styles.css';
export const Filter = ({ onClick, scrollToId }) => {
	const [filterActivated, setFilterActivated] = useState(false);
	const [buttonChosen, setButtonChosen] = useState('');
	const [buttonType, setButtonType] = useState('primary');
	const dispatch = useDispatch();
	const { filters } = useSelector((state) => state.filters);

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
		<div id="filters" className="text-center filter-section">
			<div className="container">
				<div className="ft-section-title">
					<h2>Filters</h2>
					<p>Please select one of the filter below to get start.</p>
				</div>
				<div className="row">
					{filters
						? filters.map((d, i) => (
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
							))
						: null}
				</div>
			</div>
		</div>
	);
};
