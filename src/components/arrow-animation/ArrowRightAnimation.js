import React from 'react';
import './arrow-right.scss';

export const ArrowRightAnimation = () => {
	return (
		<div className="row">
			<div className="col-sm-1">
				<i className="bi bi-arrow-right-square arrow arrowSliding delay1"></i>
			</div>
			<div className="col-sm-1">
				<i className="bi bi-arrow-right-square arrow arrowSliding delay2"></i>
			</div>
		</div>
	);
};
