import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@src/redux/store';
import { PlayGround } from '../PlayGround';
import filterService from '@src/services/filterService';
import languageService from '@src/services/languageService';
import playgroundService from '@src/services/playgroundService';
import classSnippetService from '@src/services/classServices/classSnippetService';
import classExpService from '@src/services/classServices/classExpService';
import functionSnippetService from '@src/services/functionServices/functionSnippetService';
import functionExpService from '@src/services/functionServices/functionExpService';
import variableSnippetService from '@src/services/variableServices/variableSnippetService';
import variableExpService from '@src/services/variableServices/variableExpService';
import ifelseSnippetService from '@src/services/ifelseServices/ifelseSnippetService';
import ifelseExpService from '@src/services/ifelseServices/ifelseExpService';
import switchSnippetService from '@src/services/switchServices/switchSnippetService';
import switchExpService from '@src/services/switchServices/switchExpService';
import forSnippetService from '@src/services/forServices/forSnippetService';
import forExpService from '@src/services/forServices/forExpService';
import whileSnippetService from '@src/services/whileServices/whileSnippetService';
import whileExpService from '@src/services/whileServices/whileExpService';

jest.mock('@src/services/languageService');
jest.mock('@src/services/playgroundService');
jest.mock('@src/services/filterService');
jest.mock('@src/services/classServices/classSnippetService');
jest.mock('@src/services/classServices/classExpService');
jest.mock('@src/services/functionServices/functionSnippetService');
jest.mock('@src/services/functionServices/functionExpService');
jest.mock('@src/services/variableServices/variableSnippetService');
jest.mock('@src/services/variableServices/variableExpService');
jest.mock('@src/services/ifelseServices/ifelseSnippetService');
jest.mock('@src/services/ifelseServices/ifelseExpService');
jest.mock('@src/services/switchServices/switchSnippetService');
jest.mock('@src/services/switchServices/switchExpService');
jest.mock('@src/services/forServices/forSnippetService');
jest.mock('@src/services/forServices/forExpService');
jest.mock('@src/services/whileServices/whileSnippetService');
jest.mock('@src/services/whileServices/whileExpService'); // Mock the service
jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key) => key // Mock translation function
	})
}));

jest.mock('@src/components/filter/Filter', () => {
	const CarouselFillter = ({ items, handleOnClick }) => (
		<div>
			{items.map((item, index) => (
				<button key={index} onClick={() => handleOnClick(item)}>
					{item}
				</button>
			))}
		</div>
	);

	return {
		Filter: ({ onClick, scrollToId }) => (
			<div className="container filter-section">
				<div className="row">
					<CarouselFillter
						items={['filter1', 'filter2']}
						handleOnClick={(event) => {
							onClick(event);
							scrollToId();
						}}
					/>
				</div>
			</div>
		)
	};
});

describe('PlayGround component', () => {
	beforeAll(() => {
		HTMLElement.prototype.scrollIntoView = jest.fn(); // Mock scrollIntoView
	});

	beforeEach(() => {
		// Mock the service call to dispatch a success action
		filterService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_FILTERS_SUCCESS', payload: ['filter1', 'filter2'] });
		});

		languageService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_LANGUAGES_SUCCESS', payload: ['language1', 'language2'] });
		});

		playgroundService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_PLAYGROUND_SUCCESS', payload: ['playground1', 'playground2'] });
		});

		classSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_CLASS_SNIPPET_SUCCESS',
				payload: ['classSnippet1', 'classSnippet2']
			});
		});

		classExpService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_CLASS_EXP_SUCCESS', payload: ['classExp1', 'classExp2'] });
		});

		functionSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_FUNCTION_SNIPPET_SUCCESS',
				payload: ['functionSnippet1', 'functionSnippet2']
			});
		});

		functionExpService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_FUNCTION_EXP_SUCCESS',
				payload: ['functionExp1', 'functionExp2']
			});
		});

		variableSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_VARIABLE_SNIPPET_SUCCESS',
				payload: ['variableSnippet1', 'variableSnippet2']
			});
		});

		variableExpService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_VARIABLE_EXP_SUCCESS',
				payload: ['variableExp1', 'variableExp2']
			});
		});

		ifelseSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_IFELSE_SNIPPET_SUCCESS',
				payload: ['ifelseSnippet1', 'ifelseSnippet2']
			});
		});

		ifelseExpService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_IFELSE_EXP_SUCCESS', payload: ['ifelseExp1', 'ifelseExp2'] });
		});

		switchSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_SWITCH_SNIPPET_SUCCESS',
				payload: ['switchSnippet1', 'switchSnippet2']
			});
		});

		switchExpService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_SWITCH_EXP_SUCCESS', payload: ['switchExp1', 'switchExp2'] });
		});

		forSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_FOR_SNIPPET_SUCCESS', payload: ['forSnippet1', 'forSnippet2'] });
		});

		forExpService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_FOR_EXP_SUCCESS', payload: ['forExp1', 'forExp2'] });
		});

		whileSnippetService.mockImplementation(() => (dispatch) => {
			dispatch({
				type: 'GET_WHILE_SNIPPET_SUCCESS',
				payload: ['whileSnippet1', 'whileSnippet2']
			});
		});

		whileExpService.mockImplementation(() => (dispatch) => {
			dispatch({ type: 'GET_WHILE_EXP_SUCCESS', payload: ['whileExp1', 'whileExp2'] });
		});
	});

	it('should render', () => {
		render(
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<PlayGround filter="Class" scrollPosition={150} />
				</PersistGate>
			</Provider>
		);

		// Ensure the PlayGround is not visible initially
		const playGroundElement = screen.queryByTestId('playground');
		expect(playGroundElement).toBeNull(); // Not rendered yet

		// Click the Filter button to set the filter and trigger scroll
		const filterButton = screen.getByText('filter1'); // Use the text of the filter button
		fireEvent.click(filterButton);

		// After clicking the filter, PlayGround should be rendered
		const element = screen.getByTestId('playground');
		expect(element).toBeInTheDocument();

		// Ensure scrollIntoView was called
		expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
	});
});
