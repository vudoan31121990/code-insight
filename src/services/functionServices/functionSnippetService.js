import { GET_FUNCTION_SNIPPET_SUCCESS, GET_FUNCTION_SNIPPET_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { functionCodeData } from '@src/data/functionData/functionCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const functionSnippetService = () => {
	if (mockData) {
		return (dispatch) => {
			const data = functionCodeData;
			dispatch({ type: GET_FUNCTION_SNIPPET_SUCCESS, payload: data });
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_CLASS_SNIPPET_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_FUNCTION_SNIPPET_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_FUNCTION_SNIPPET_FAILURE, payload: error });
			}
		};
	}
};

export default functionSnippetService;
