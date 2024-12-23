import {
	GET_VARIABLE_SNIPPET_LOADING,
	GET_VARIABLE_SNIPPET_SUCCESS,
	GET_VARIABLE_SNIPPET_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { variableCodeData } from '@src/data/variableData/variableCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const variableSnippetService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_VARIABLE_SNIPPET_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = variableCodeData;
					dispatch({ type: GET_VARIABLE_SNIPPET_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/variable-code`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_VARIABLE_SNIPPET_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_VARIABLE_SNIPPET_FAILURE, payload: error });
		}
	};
};

export default variableSnippetService;
