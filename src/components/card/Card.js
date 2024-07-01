import React from 'react';
import './card.scss';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { AwesomeButton } from 'react-awesome-button';
export const CardFilterButton = ({ title, subtitle, onClick }) => {
	const handleOnClick = (event) => {
		event.preventDefault();
		onClick(title);
	};

	return (
		<Card className="card-lift--hover shadow border-0 custom-card">
			<CardBody className="py-5">
				<h6 className="text-uppercase text-primary">{title}</h6>
				<p className="description mt-3">{subtitle}</p>
				<AwesomeButton type="primary" size="medium" onPress={handleOnClick}>
					Learn more
				</AwesomeButton>
			</CardBody>
		</Card>
	);
};

CardFilterButton.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
