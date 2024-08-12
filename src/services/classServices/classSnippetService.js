import { GET_CLASS_SNIPPET_LOADING, GET_CLASS_SNIPPET_SUCCESS, GET_CLASS_SNIPPET_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { classCodeSnippetData } from '@src/data/classData/classCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const classSnippetService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_CLASS_SNIPPET_LOADING});
				const data = classCodeSnippetData;
				dispatch({ type: GET_CLASS_SNIPPET_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_CLASS_SNIPPET_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_CLASS_SNIPPET_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_CLASS_SNIPPET_FAILURE, payload: error });
			}
		};
	}
};

export default classSnippetService;
