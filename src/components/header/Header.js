import React from 'react';
import './header.scss';

export const Header = (props) => {
	return (
		<header id="header">
			<div className="intro">
				<div className="container intro-text">
					<div className="col-md-8 col-md-offset-2 overlay">
						<p>
							The website is to provide concise summaries of various programming
							languages.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};
