import {
	GET_WHILE_SNIPPET_LOADING,
	GET_WHILE_SNIPPET_SUCCESS,
	GET_WHILE_SNIPPET_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { whileLoopCodeData } from '@src/data/whileLoopData/whileCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const whileSnippetService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_WHILE_SNIPPET_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = whileLoopCodeData;
					dispatch({ type: GET_WHILE_SNIPPET_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/while-code`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_WHILE_SNIPPET_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_WHILE_SNIPPET_FAILURE, payload: error });
		}
	};
};

export default whileSnippetService;
