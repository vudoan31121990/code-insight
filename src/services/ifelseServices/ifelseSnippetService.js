import {
	GET_IFELSE_SNIPPET_LOADING,
	GET_IFELSE_SNIPPET_SUCCESS,
	GET_IFELSE_SNIPPET_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { ifelseCodeData } from '@src/data/ifelseData/ifelseCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const ifelseSnippetService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_IFELSE_SNIPPET_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = ifelseCodeData;
					dispatch({ type: GET_IFELSE_SNIPPET_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/ifelse-code`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_IFELSE_SNIPPET_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_IFELSE_SNIPPET_FAILURE, payload: error });
		}
	};
};

export default ifelseSnippetService;
