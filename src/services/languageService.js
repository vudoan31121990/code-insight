import { GET_LANGUAGE_LOADING, GET_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILURE } from '../redux/action';
import config from '@src/configmap/config.json';
import dataResponse from '@src/data/data.json';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_BASE_URL : '/api';

const languagesService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_LANGUAGE_LOADING });
				const data = dataResponse.Languages;
				dispatch({ type: GET_LANGUAGE_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				dispatch({ type: GET_LANGUAGE_LOADING });
				const response = await fetch(`${baseUrl}/languages`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const responseJson = await response.json();
				dispatch({ type: GET_LANGUAGE_SUCCESS, payload: responseJson.data });
			} catch (error) {
				dispatch({ type: GET_LANGUAGE_FAILURE, payload: error });
			}
		};
	}
};

export default languagesService;
