import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { TermsOfUse } from './pages/TermsOfUse/TermsOfUse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
	return (
		<>
			<Navigation />
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/terms-of-use" element={<TermsOfUse />}></Route>
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;
