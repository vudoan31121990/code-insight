import { GET_LANGUAGE_LOADING, GET_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILURE } from '../redux/action';
import config from '@src/configmap/config.json';
import dataResponse from '@src/data/data.json';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const languageService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_LANGUAGE_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = dataResponse.Languages;
					dispatch({ type: GET_LANGUAGE_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/languages`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const responseJson = await response.json();
				dispatch({ type: GET_LANGUAGE_SUCCESS, payload: responseJson.data });
			}
		} catch (error) {
			dispatch({ type: GET_LANGUAGE_FAILURE, payload: error });
		}
	};
};

export default languageService;
