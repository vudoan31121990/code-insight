import React from 'react';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<AppRouter />
				<Footer />
			</PersistGate>
		</Provider>
	);
}

export default App;
