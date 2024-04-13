import React, { useEffect, useState } from 'react';
import './filter.scss';
import Button from 'react-bootstrap/Button';
import json from '../../data/data.json';
import { ArrowLeftAnimation } from '../arrow-animation/ArrowLeftAnimation';
import { ArrowRightAnimation } from '../arrow-animation/ArrowRightAnimation';

export const Filter = ({ onClick, scrollToId }) => {
	const [componentLanguages, setComponentLanguages] = useState([]);
	const [filterActivated, setFilterActivated] = useState(false);
	const [buttonChosen, setButtonChosen] = useState('');

	useEffect(() => {
		setComponentLanguages(json.Filters);
	}, []);

	const handleOnClick = (event) => {
		onClick(event.target.getAttribute('data-value'));
		scrollToId();
		setButtonChosen(event.target.getAttribute('data-value'));
		setFilterActivated(true);
	};

	return (
		<div className="text-center filter-section">
			<div className="container">
				<div className="ft-section-title">
					<h2>Filters</h2>
					<p>Please select one of the filter below to get start.</p>
				</div>
				<div className="row">
					{componentLanguages
						? componentLanguages.map((d, i) => (
								<div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
									{filterActivated ? (
										<div className="row">
											{buttonChosen === d.name ? (
												<div className="col">
													<ArrowRightAnimation />
												</div>
											) : null}
											<div className="col">
												<Button
													data-value={d.name}
													variant="primary"
													className="play-button"
													onClick={handleOnClick}
												>
													{d.name}
												</Button>
											</div>
											{buttonChosen === d.name ? (
												<div className="col">
													<ArrowLeftAnimation />
												</div>
											) : null}
										</div>
									) : (
										<Button
											data-value={d.name}
											variant="primary"
											className="play-button"
											onClick={handleOnClick}
										>
											{d.name}
										</Button>
									)}
									<p>{d.description}</p>
								</div>
							))
						: null}
				</div>
			</div>
		</div>
	);
};
