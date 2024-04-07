import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { Filter } from './components/filter/Filter';
import { PlayGround } from './components/playground/PlayGround';

function App() {
	const [scrollPosition, setScrollPosition] = useState(null);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		scrollToId();
	}, [filter]);

	const handleFilterChange = (value) => setFilter(value);

	const scrollToId = () => {
		const targetElement = document.getElementById('playGroundArea');
		if (targetElement !== null) {
			const targetOffsetTop = targetElement.offsetTop;
			setScrollPosition(targetOffsetTop);
		}
	};

	return (
		<div>
			<Navigation />
			<Header />
			<Filter onClick={handleFilterChange} scrollToId={scrollToId} />
			{filter !== '' ? (
				<PlayGround id="playGroundArea" filter={filter} scrollPosition={scrollPosition} />
			) : null}
			<Footer />
		</div>
	);
}

export default App;
