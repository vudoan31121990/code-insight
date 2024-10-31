import { GET_VARIABLE_SNIPPET_LOADING, GET_VARIABLE_SNIPPET_SUCCESS, GET_VARIABLE_SNIPPET_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { variableCodeData } from '@src/data/variableData/variableCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const variableSnippetService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_VARIABLE_SNIPPET_LOADING});
				const data = variableCodeData;
				dispatch({ type: GET_VARIABLE_SNIPPET_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_VARIABLE_SNIPPET_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_VARIABLE_SNIPPET_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_VARIABLE_SNIPPET_FAILURE, payload: error });
			}
		};
	}
};

export default variableSnippetService;
