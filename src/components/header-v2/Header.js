import React from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
	const { t } = useTranslation();

	return (
		<div data-testid="header" className="bg-white">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav aria-label="Global" className="flex items-center p-5 lg:px-8">
					<div className="flex lg:flex-1 sm:pl-6 lg:pl-12">
						<a href="/" className="-m-1.5 p-1.5 text-2xl">
							{t('navigation.title')}
						</a>
					</div>
				</nav>
			</header>
		</div>
	);
};
