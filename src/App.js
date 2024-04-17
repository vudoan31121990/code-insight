import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { AppRouter } from './router/AppRouter';
function App() {
	return (
		<>
			<Navigation />
			<AppRouter />
			<Footer />
		</>
	);
}

export default App;
