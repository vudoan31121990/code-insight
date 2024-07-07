import React from 'react';
import './about.scss';
import { useTranslation } from 'react-i18next';

export const About = () => {
	const { t } = useTranslation();
	return (
		<div id="about" className="ab-section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="ab-section-title">
							<h2>{t('about.title')}</h2>
							<p className="ab-description">{t('about.description1')}</p>
							<p className="ab-description">{t('about.description2')}</p>
							<p className="ab-description">{t('about.description3')}</p>
							<p className="ab-description">{t('about.description4')}</p>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row ab-link-section">
							<p>{t('about.links.title')}</p>
							<a className="ab-link" href="/">
								{t('about.links.link1.title')}
							</a>
							<a className="ab-link" href="/terms-of-use" target="_blank">
								{t('about.links.link2.title')}
							</a>
							<a className="ab-link" href="/privacy" target="_blank">
								{t('about.links.link3.title')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
