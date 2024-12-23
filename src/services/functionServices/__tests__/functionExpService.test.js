import functionExpService from '../functionExpService';
import {
	GET_FUNCTION_EXP_LOADING,
	GET_FUNCTION_EXP_SUCCESS,
	GET_FUNCTION_EXP_FAILURE
} from '../../../redux/action';
import functionCodeExpData from '@src/data/functionData/functionCodeSnippetExample';

describe('functionSnippetService', () => {
	let dispatch;

	beforeAll(() => {
		jest.useFakeTimers(); // Use fake timers for `setTimeout`
	});

	beforeEach(() => {
		// Mock the dispatch function
		dispatch = jest.fn();

		global.fetch = jest.fn(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve({ data: functionCodeExpData })
			})
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
		jest.clearAllMocks();
	});

	it('should dispatch mock data actions when mockData is enabled', async () => {
		jest.resetModules();
		// Mock `config.MOCK_SERVICES_DATA.ENABLED` to true
		jest.mock('@src/configmap/config.json', () => ({
			MOCK_SERVICES_DATA: {
				ENABLED: true
			}
		}));

		// Execute the service
		const service = functionExpService();
		await service(dispatch);

		expect(dispatch).toHaveBeenCalledWith({ type: GET_FUNCTION_EXP_LOADING });

		// Advance the clock to execute the code inside the setTimeout function
		jest.runOnlyPendingTimers();

		expect(dispatch).toHaveBeenCalledWith({
			type: GET_FUNCTION_EXP_SUCCESS,
			payload: functionCodeExpData
		});
	});

	it('should dispatch success actions when fetch is successful', async () => {
		// Mock `config.MOCK_SERVICES_DATA.ENABLED` to false
		jest.mock('@src/configmap/config.json', () => ({
			MOCK_SERVICES_DATA: {
				ENABLED: false
			}
		}));

		// Execute the service
		const service = functionExpService();
		await service(dispatch);

		// Assert that `GET_FUNCTION_EXP_LOADING` was dispatched
		expect(dispatch).toHaveBeenCalledWith({ type: GET_FUNCTION_EXP_LOADING });

		// Assert that `GET_FUNCTION_EXP_SUCCESS` was dispatched with the API data
		expect(dispatch).toHaveBeenCalledWith({
			type: GET_FUNCTION_EXP_SUCCESS,
			payload: functionCodeExpData
		});

		// Ensure fetch was called with the correct URL
		expect(global.fetch).toHaveBeenCalledWith(
			'https://code-insight-api-dot-code-insight-dev.uc.r.appspot.com/api/function-exp'
		);
	});

	it('should dispatch failure actions when fetch fails', async () => {
		// Mock `config.MOCK_SERVICES_DATA.ENABLED` to false
		jest.mock('@src/configmap/config.json', () => ({
			MOCK_SERVICES_DATA: {
				ENABLED: false
			}
		}));

		// Mock the `fetch` API to throw an error
		global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

		// Execute the service
		const service = functionExpService();
		await service(dispatch);

		// Assert that `GET_FUNCTION_EXP_LOADING` was dispatched
		expect(dispatch).toHaveBeenCalledWith({ type: GET_FUNCTION_EXP_LOADING });

		// Assert that `GET_FUNCTION_EXP_FAILURE` was dispatched with the error
		expect(dispatch).toHaveBeenCalledWith({
			type: GET_FUNCTION_EXP_FAILURE,
			payload: expect.any(Error)
		});
	});
});
