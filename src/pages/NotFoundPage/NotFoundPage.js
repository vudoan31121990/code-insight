import React from 'react';

export const NotFoundPage = () => {
	return (
		<main
			data-testid="not-found-page"
			className="grid min-h-screen place-items-center bg-white px-6 lg:px-8 pt"
		>
			<div className="text-center">
				<h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
					Page not found
				</h1>
				<p className="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
			</div>
		</main>
	);
};
