import React from 'react';
import PropTypes from 'prop-types';
import { AwesomeButton } from 'react-awesome-button';
import './card.scss';

export const CardFilterButton = ({ title, subtitle, onClick }) => {
	const handleOnClick = (event) => {
		event.preventDefault();
		onClick(title);
	};

	return (
		<div
			data-testid="card"
			className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-400 mr-4 h-full w-70"
		>
			<div className="text-blue-500 pt-3">
				<p className="uppercase md:text-lg font-semibold sm:text-sm">{title}</p>
			</div>
			<div className="pb-2 h-40 px-2">
				<p className="text-base mt-2 sm:text-lg">{subtitle}</p>
			</div>
			<div className="pb-3 sm:pt-3 md:pt-0">
				<AwesomeButton type="primary" size="medium" onPress={handleOnClick}>
					Learn more
				</AwesomeButton>
			</div>
		</div>
	);
};

CardFilterButton.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
