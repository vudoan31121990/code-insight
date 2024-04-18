import React from 'react';
import './navigation.scss';

export const Navigation = () => {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="row navbar-header">
					<a className="navbar-brand page-scroll" href="/">
						Code Insight
					</a>{' '}
				</div>
				<div className="row">
					<nav className="navbar navbar-expand-lg">
						<div className="collapse navbar-collapse">
							<div className="navbar-nav">
								<a className="nav-item nav-link" href="#filters">
									Filters
								</a>
								<a className="nav-item nav-link" href="#about">
									About
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};
