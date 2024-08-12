import { GET_FILTERS_LOADING, GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE } from '../redux/action';
import config from '@src/configmap/config.json';
import dataResponse from '@src/data/data.json';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const filtersService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_FILTERS_LOADING});
				const data = dataResponse.Filters;
				dispatch({ type: GET_FILTERS_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_FILTERS_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_FILTERS_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_FILTERS_FAILURE, error: error });
			}
		};
	}
};

export default filtersService;
