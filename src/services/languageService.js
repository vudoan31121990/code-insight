import { GET_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILURE } from '../redux/action';
import config from '@src/configmap/config.json';
import dataResponse from '@src/data/data.json';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const languagesService = () => {
	if (mockData) {
		return (dispatch) => {
			const data = dataResponse.Languages;
			dispatch({ type: GET_LANGUAGE_SUCCESS, payload: data });
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_LANGUAGES_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_LANGUAGE_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_LANGUAGE_FAILURE, payload: error });
			}
		};
	}
};

export default languagesService;
