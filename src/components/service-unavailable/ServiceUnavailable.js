import React from 'react';
import './service-unavailable.scss';

export const ServiceUnavailable = () => {
	return (
		<div data-testid="service-unavailable" className="row service-unavailable">
			<p>
				<i className="bi bi-exclamation-triangle-fill warning"></i>Service Unavailable.
				Please try again later.
			</p>
		</div>
	);
};
