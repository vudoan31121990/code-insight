import React from 'react';
import './footer.scss';
export const Footer = () => {
	let date = new Date().getFullYear();

	return (
		<footer>
			<div className="container text-center">
				<p>Copyright &copy; Code Insight {date}</p>
			</div>
		</footer>
	);
};
