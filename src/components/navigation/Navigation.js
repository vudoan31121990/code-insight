import React from 'react';
import './navigation.scss';
import config from '@src/configmap/config.json';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
	const { t } = useTranslation();

	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="row navbar-header">
					<a className="navbar-brand page-scroll" href="/">
						{t('navigation.title')}
					</a>{' '}
				</div>
				{config.FEATURES.NAVIGATION.ENABLED ? (
					<div className="row">
						<nav className="navbar navbar-expand-lg">
							<div className="collapse navbar-collapse">
								<div className="navbar-nav">
									<a className="nav-item nav-link" href="#filters">
										{t('navigation.nav1.title')}
									</a>
									<a className="nav-item nav-link" href="#about">
										{t('navigation.nav2.title')}
									</a>
								</div>
							</div>
						</nav>
					</div>
				) : null}
			</div>
		</nav>
	);
};
