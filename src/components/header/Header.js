import React from 'react';
import './header.scss';
import { useTranslation } from 'react-i18next';
import { Container, Col, Row } from 'reactstrap';

export const Header = () => {
	const { t } = useTranslation();

	return (
		<div className="position-relative">
			<section className="section section-lg section-shaped pb-250">
				<div className="shape shape-style-1 shape-default">
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
				<Container className="py-lg-md d-flex">
					<div className="col px-0">
						<Row>
							<Col lg="6">
								<h2 className="display-4 text-white">
									Syntax Programming Languages <span>completed with examples</span>
								</h2>
								<p className="lead text-white">
									{ t('header.description')}
								</p>
							</Col>
						</Row>
					</div>
				</Container>
				<div className="separator separator-bottom separator-skew">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon className="fill-white " points="2560 0 2560 100 0 100" />
					</svg>
				</div>
			</section>
		</div>
	);
};
