import React from 'react';
import './footer.scss';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	let date = new Date().getFullYear();
	const { t } = useTranslation();

	return (
		<footer data-testid="footer" className="py-4">
			<div className="container mx-auto text-center">
				<div className="flex space-x-4 mb-2 justify-center">
					<a
						href="/about-me"
						className="py-2 pr-4 text-gray-500 hover:text-blue-700 hover:underline text-sm sm:text-base"
					>
						{t('about.links.link1.title')}
					</a>
					<a
						href="/terms-of-use"
						className="py-2 pr-4 text-gray-500 hover:text-blue-700 hover:underline"
					>
						{t('about.links.link2.title')}
					</a>
					<a
						href="/privacy"
						className="py-2 pr-4 text-gray-500 hover:text-blue-700 hover:underline"
					>
						{t('about.links.link3.title')}
					</a>
				</div>
				<p className="text-sm">&copy; {date} Code Insight. All rights reserved.</p>
			</div>
		</footer>
	);
};
