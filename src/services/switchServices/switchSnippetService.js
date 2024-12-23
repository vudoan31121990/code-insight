import {
	GET_SWITCH_SNIPPET_LOADING,
	GET_SWITCH_SNIPPET_SUCCESS,
	GET_SWITCH_SNIPPET_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { switchCodeData } from '@src/data/switchData/switchCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const switchSnippetService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_SWITCH_SNIPPET_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = switchCodeData;
					dispatch({ type: GET_SWITCH_SNIPPET_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/switch-code`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_SWITCH_SNIPPET_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_SWITCH_SNIPPET_FAILURE, payload: error });
		}
	};
};

export default switchSnippetService;
