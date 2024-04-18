import React from 'react';
import './about.scss';

export const About = () => {
	return (
		<div id='about' className="ab-section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="ab-section-title">
							<h2>About Code Insight</h2>
							<p className="ab-description">
								My goal with this website is to provide concise summaries of various
								programming languages, focusing on key components such as classes,
								functions, variables and so on.
							</p>
							<p className="ab-description">
								The playground section allows users to explore the structure and
								syntax of each programming language. It provides the format of each
								language along with simple example code that users can experiment
								with.
							</p>
							<p className="ab-description">
								It's important to note that this website does not offer detailed
								tutorials on how to learn each language. Instead, it serves as a
								quick reference for understanding the basics of syntax and
								structure.
							</p>
							<p className="ab-description">This website is powered by React.</p>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row ab-link-section">
							<p>Links</p>
							<a className="ab-link" href="/">
								About Me
							</a>
							<a className="ab-link" href="/terms-of-use" target='_blank'>
								Terms of Use
							</a>
							<a className="ab-link" href="/privacy" target='_blank'>
								Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
