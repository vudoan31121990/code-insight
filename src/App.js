import React from 'react';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { AppRouter } from './router/AppRouter';
function App() {
	return (
		<>
			<AppRouter />
			<Footer />
		</>
	);
}

export default App;
