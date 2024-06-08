import React from 'react';
import './service-unavailable.scss';

export const ServiceUnavailable = () => {
	return (
		<div className="row service-unavailable">
			<p>
				<i class="bi bi-exclamation-triangle-fill warning"></i>
				Service Unavailable. Please try again later.
			</p>
		</div>
	);
};
