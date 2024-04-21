import React, { useEffect, useState } from 'react';
import './filter.scss';
import json from '../../data/data.json';
import { FilterDropdown } from '../filter-dropdown/FilterDropdown';

export const Filter = ({ onClick, scrollToId }) => {
	const [componentLanguages, setComponentLanguages] = useState([]);

	useEffect(() => {
		setComponentLanguages(json.Filters);
	}, []);

	const handleOnClick = (event) => {
		onClick(event.target.getAttribute('data-value'));
		scrollToId();
	};

	return (
		<div id='filters' className="text-center filter-section">
			<div className="container">
				<div className="ft-section-title">
					<h2>Filters</h2>
					<p>Please select one of the filter below to get start.</p>
				</div>
				<FilterDropdown componentLanguages={componentLanguages} onClick={handleOnClick}/>
			</div>
		</div>
	);
};
