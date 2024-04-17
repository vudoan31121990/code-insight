import React from 'react';
import './navigation.scss';

export const Navigation = () => {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<a className="navbar-brand page-scroll" href="/">
						Code Insight
					</a>{' '}
				</div>
			</div>
		</nav>
	);
};
