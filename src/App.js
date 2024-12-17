import React from 'react';
import './App.scss';
import { Footer } from './components/footer-v2/Footer';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/header-v2/Header';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import '@src/components/i18/i18';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Header />
				<AppRouter />
				<Footer />
			</PersistGate>
		</Provider>
	);
}

export default App;
