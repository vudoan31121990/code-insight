import React, { useEffect, useState } from 'react';
import { About } from '@src/components/about-v2/About';
import { Filter } from '@src/components/filter/Filter';
import { PlayGround } from '@src/components/playground/PlayGround';

export const HomePage = () => {
	const [filter, setFilter] = useState('');
	const [scrollPosition, setScrollPosition] = useState(null);

	useEffect(() => {
		scrollToId();
	}, [filter]);

	const handleFilterChange = (value) => setFilter(value);

	const scrollToId = () => {
		const targetElement = document.getElementById('playGroundArea');
		if (targetElement !== null) {
			setScrollPosition(targetElement.offsetTop);
		}
	};

	return (
		<div>
			<Filter onClick={handleFilterChange} scrollToId={scrollToId} />
			{filter !== '' ? <PlayGround filter={filter} scrollPosition={scrollPosition} /> : null}
			<About />
		</div>
	);
};
