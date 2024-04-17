import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header';
import { Filter } from '../../components/filter/Filter';
import { PlayGround } from '../../components/playground/PlayGround';
import { About } from '../../components/about/About';

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
			<Header />
			<Filter onClick={handleFilterChange} scrollToId={scrollToId} />
			{filter !== '' ? <PlayGround filter={filter} scrollPosition={scrollPosition} /> : null}
			<About />
		</div>
	);
};
