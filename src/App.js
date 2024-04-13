import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { Filter } from './components/filter/Filter';
import { PlayGround } from './components/playground/PlayGround';
import { About } from './components/about/About';

function App() {
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
			<Navigation />
			<Header />
			<Filter onClick={handleFilterChange} scrollToId={scrollToId} />
			{filter !== '' ? <PlayGround filter={filter} scrollPosition={scrollPosition} /> : null}
			<About />
			<Footer />
		</div>
	);
}

export default App;
