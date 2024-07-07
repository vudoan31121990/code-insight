import { GET_WHILE_SNIPPET_SUCCESS, GET_WHILE_SNIPPET_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { whileLoopCodeData } from '@src/data/whileLoopData/whileCodeSnippet';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const whileSnippetService = () => {
	if (mockData) {
		return (dispatch) => {
			const data = whileLoopCodeData;
			dispatch({ type: GET_WHILE_SNIPPET_SUCCESS, payload: data });
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_WHILE_SNIPPET_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_WHILE_SNIPPET_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_WHILE_SNIPPET_FAILURE, payload: error });
			}
		};
	}
};

export default whileSnippetService;
