import React from 'react';
import './header.scss';
import { useTranslation } from 'react-i18next';

export const Header = () => {
	const { t } = useTranslation();

	return (
		<header id="header">
			<div className="intro">
				<div className="container intro-text">
					<div className="col-md-8 col-md-offset-2 overlay">
						<p>{t('header.description')}</p>
					</div>
				</div>
			</div>
		</header>
	);
};
