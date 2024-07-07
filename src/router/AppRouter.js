import React from 'react';
import { TermsOfUse } from '../pages/TermsOfUse/TermsOfUse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/terms-of-use" element={<TermsOfUse />}></Route>
				<Route path="/privacy" element={<PrivacyPolicy />}></Route>
			</Routes>
		</Router>
	);
};
