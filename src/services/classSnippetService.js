import { GET_CLASS_SNIPPET_SUCCESS, GET_CLASS_SNIPPET_FAILURE } from '../redux/action';

const classSnippetService = () => {
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
};

export default classSnippetService;
