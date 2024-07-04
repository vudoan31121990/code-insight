import { GET_IFELSE_SNIPPET_SUCCESS, GET_IFELSE_SNIPPET_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { ifelseCodeData } from '@src/data/ifelseData/ifelseCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const ifelseSnippetService = () => {
	if (mockData) {
		return (dispatch) => {
			const data = ifelseCodeData;
			dispatch({ type: GET_IFELSE_SNIPPET_SUCCESS, payload: data });
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_IFELSE_SNIPPET_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_IFELSE_SNIPPET_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_IFELSE_SNIPPET_FAILURE, payload: error });
			}
		};
	}
};

export default ifelseSnippetService;
