import {
	GET_FOR_SNIPPET_LOADING,
	GET_FOR_SNIPPET_SUCCESS,
	GET_FOR_SNIPPET_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { forLoopCodeData } from '@src/data/forData/forLoopCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const forSnippetService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_FOR_SNIPPET_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = forLoopCodeData;
					dispatch({ type: GET_FOR_SNIPPET_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/for-code`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_FOR_SNIPPET_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_FOR_SNIPPET_FAILURE, payload: error });
		}
	};
};

export default forSnippetService;
