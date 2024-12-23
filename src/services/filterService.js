import { GET_FILTERS_LOADING, GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE } from '../redux/action';
import config from '@src/configmap/config.json';
import dataResponse from '@src/data/data.json';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const filterService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_FILTERS_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = dataResponse.Filters;
					dispatch({ type: GET_FILTERS_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/filters`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const responseJson = await response.json();
				dispatch({ type: GET_FILTERS_SUCCESS, payload: responseJson.data });
			}
		} catch (error) {
			dispatch({ type: GET_FILTERS_FAILURE, payload: error });
		}
	};
};

export default filterService;
