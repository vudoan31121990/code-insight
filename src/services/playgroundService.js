import {
	GET_PLAYGROUNDS_LOADING,
	GET_PLAYGROUNDS_SUCCESS,
	GET_PLAYGROUNDS_FAILURE
} from '../redux/action';
import config from '@src/configmap/config.json';
import dataResponse from '@src/data/data.json';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const playgroundsService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_PLAYGROUNDS_LOADING });
				const data = dataResponse.Playgrounds;
				dispatch({ type: GET_PLAYGROUNDS_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(`${baseUrl}/playgrounds`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const responseJson = await response.json();
				dispatch({ type: GET_PLAYGROUNDS_SUCCESS, payload: responseJson.data });
			} catch (error) {
				dispatch({ type: GET_PLAYGROUNDS_FAILURE, payload: error });
			}
		};
	}
};

export default playgroundsService;
