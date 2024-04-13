import React from 'react';
import './arrow-left.scss';

export const ArrowLeftAnimation = () => {
	return (
		<div className="row justify-content-center">
			<div className="col-sm-1">
				<i className="bi bi-arrow-left-square arrow arrowSliding delay2"></i>
			</div>
			<div className="col-sm-1">
				<i className="bi bi-arrow-left-square arrow arrowSliding delay1"></i>
			</div>
		</div>
	);
};
