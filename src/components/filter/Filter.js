import React, { useEffect, useState } from 'react';
import './filter.scss';
import Button from 'react-bootstrap/Button';
import json from '../../data/data.json';

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
		<div className="text-center filter-section">
			<div className="container">
				<div className="section-title">
					<h2>Filters</h2>
					<p>Please select one of the filter below to get start.</p>
				</div>
				<div className="row">
					{componentLanguages
						? componentLanguages.map((d, i) => (
								<div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
									<Button
										data-value={d.name}
										variant="primary"
										className="play-button"
										onClick={handleOnClick}
									>
										{d.name}
									</Button>
									<p className="description">{d.description}</p>
								</div>
							))
						: null}
				</div>
			</div>
		</div>
	);
};
