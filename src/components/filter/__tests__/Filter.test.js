import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@src/redux/store';
import { Filter } from '../Filter';
import filterService from '@src/services/filterService';

jest.mock('@src/services/filterService'); // Mock the service
jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key) => key // Mock translation function
	})
}));

describe('Filter component', () => {
	beforeEach(() => {
		// Mock the service call to dispatch a success action
		filterService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_FILTERS_SUCCESS', payload: ['filter1', 'filter2'] });
		});
	});

	it('should render', () => {
		render(
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<Filter />
				</PersistGate>
			</Provider>
		);
		// Assert that the component renders without errors
		expect(screen.getByTestId('filter')).toBeInTheDocument();
	});
});
