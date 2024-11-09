import {
	GET_SWITCH_SNIPPET_LOADING,
	GET_SWITCH_SNIPPET_SUCCESS,
	GET_SWITCH_SNIPPET_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { switchCodeData } from '@src/data/switchData/switchCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const switchSnippetService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_SWITCH_SNIPPET_LOADING });
				const data = switchCodeData;
				dispatch({ type: GET_SWITCH_SNIPPET_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_SWITCH_SNIPPET_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_SWITCH_SNIPPET_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_SWITCH_SNIPPET_FAILURE, payload: error });
			}
		};
	}
};

export default switchSnippetService;
